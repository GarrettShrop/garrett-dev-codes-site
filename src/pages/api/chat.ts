import type { APIRoute } from 'astro';
import { getStore } from '@netlify/blobs';
import knowledge from '../../data/chat-knowledge.md?raw';

export const prerender = false;

const MAX_MESSAGE_LENGTH = 500;
const MAX_MESSAGES = 12;
const MODEL = 'claude-haiku-4-5-20251001';
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;

const SYSTEM_PROMPT = `You are the assistant embedded on Garrett Shropshire's personal site, answering visitor questions about him. Stay in character as a helpful guide to Garrett's background — not a general-purpose assistant.

${knowledge}`;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function getClientIp(request: Request): string {
  return (
    request.headers.get('x-nf-client-connection-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}

async function checkRateLimit(ip: string): Promise<boolean> {
  try {
    const store = getStore('chat-rate-limit');
    const now = Date.now();
    const existing = (await store.get(ip, { type: 'json' })) as { count: number; start: number } | null;

    if (!existing || now - existing.start > RATE_WINDOW_MS) {
      await store.setJSON(ip, { count: 1, start: now });
      return true;
    }
    if (existing.count >= RATE_LIMIT) {
      return false;
    }
    await store.setJSON(ip, { count: existing.count + 1, start: existing.start });
    return true;
  } catch {
    // Netlify Blobs isn't available (e.g. local `astro dev`) — fail open rather than break chat.
    return true;
  }
}

function validateMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0 || input.length > MAX_MESSAGES) return null;

  const messages: ChatMessage[] = [];
  for (const item of input) {
    if (
      !item ||
      typeof item !== 'object' ||
      (item.role !== 'user' && item.role !== 'assistant') ||
      typeof item.content !== 'string' ||
      item.content.length === 0 ||
      item.content.length > MAX_MESSAGE_LENGTH
    ) {
      return null;
    }
    messages.push({ role: item.role, content: item.content });
  }
  return messages;
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({ error: 'Chat is not configured yet — missing API key.' }, 500);
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const messages = validateMessages(body.messages);
  if (!messages) {
    return json({ error: `Each message must be 1-${MAX_MESSAGE_LENGTH} characters, up to ${MAX_MESSAGES} messages per conversation.` }, 400);
  }

  const ip = getClientIp(request);
  const allowed = await checkRateLimit(ip);
  if (!allowed) {
    return json({ error: "You've hit the hourly limit for this chat — please try again later." }, 429);
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error', response.status, errText);
      return json({ error: 'The assistant is unavailable right now — try again shortly.' }, 502);
    }

    const data = (await response.json()) as { content?: { type: string; text?: string }[] };
    const reply = data.content?.find((block) => block.type === 'text')?.text;
    return json({ reply: reply ?? "I couldn't come up with a response — try rephrasing that." });
  } catch (err) {
    console.error('Chat handler error', err);
    return json({ error: 'Something went wrong on my end.' }, 500);
  }
};
