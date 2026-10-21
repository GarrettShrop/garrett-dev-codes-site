// Everything on /resources. Links and short descriptions only: nothing here is
// copied from the linked projects. Each entry's `id` is its anchor on the page
// (/resources#<id>), so a video or post can link straight to one entry.
// Licenses were checked against each source on `addedOn`; re-check before
// changing an entry.

export type ResourceSection =
  | 'skills'
  | 'prompts'
  | 'use-cases'
  | 'tools'
  | 'vault'
  | 'github'
  | 'videos';

export interface Resource {
  id: string;
  section: ResourceSection;
  title: string;
  /** Omitted only on use cases whose links are their videos (`videos`). */
  url?: string;
  description: string;
  /** License as the source states it, or a short note (e.g. "Not open source"). */
  license?: string;
  /**
   * Use cases only: the entry's own YouTube videos. TikTok and Facebook have no
   * per-video links yet, so the page falls back to those channels' URLs.
   */
  videos?: { label: string; url: string }[];
  addedOn: string;
}

export interface SectionInfo {
  id: ResourceSection;
  label: string;
  intro: string;
  /** Shown when the section has no entries yet. */
  comingSoon?: string;
}

export const sections: SectionInfo[] = [
  {
    id: 'skills',
    label: 'Skills',
    intro: 'Skill collections I read and pull from. A skill is a folder with a SKILL.md that teaches an AI agent how to do one job.',
  },
  {
    id: 'prompts',
    label: 'Prompts',
    intro: 'Reusable prompts I run every day.',
    comingSoon: 'Coming soon. I’m rewriting my prompts so anyone can use them.',
  },
  {
    id: 'use-cases',
    label: 'Use cases',
    intro: 'Real things I do with AI.',
  },
  {
    id: 'tools',
    label: 'Tools I use and recommend',
    intro: 'What I actually run.',
  },
  {
    id: 'vault',
    label: 'Vault structure',
    intro: 'How my notes are set up so any AI agent can find its way around.',
    comingSoon: 'The starter kit (templates, scripts and starter skills) is coming soon for you to download and use.',
  },
  {
    id: 'github',
    label: 'GitHub',
    intro: 'Repos I fork and work on in the open.',
  },
  {
    id: 'videos',
    label: 'Videos',
    intro: 'Where I post. Same clips, pick your platform.',
  },
];

const added = '2026-10-21';

export const resources: Resource[] = [
  // Skills
  {
    id: 'anthropic-skills',
    section: 'skills',
    title: 'Anthropic skills',
    url: 'https://github.com/anthropics/skills',
    description: 'Anthropic’s example skills plus a template. A good place to see how a skill is put together. The docx, pdf, pptx and xlsx skills are source-available, not open source.',
    license: 'Many skills Apache-2.0 (per its README)',
    addedOn: added,
  },
  {
    id: 'composio-awesome-claude-skills',
    section: 'skills',
    title: 'Awesome Claude Skills (Composio)',
    url: 'https://github.com/ComposioHQ/awesome-claude-skills',
    description: 'A big, popular list of Claude skills and tools. Good for browsing; check each skill on its own, since each may have its own license.',
    license: 'Apache-2.0 (per its README)',
    addedOn: added,
  },
  {
    id: 'omp-skills-docs',
    section: 'skills',
    title: 'OMP skills docs',
    url: 'https://omp.sh/docs/skills',
    description: 'How skills work in OMP, the coding agent I use, and how to write your own.',
    license: 'OMP is MIT',
    addedOn: added,
  },
  {
    id: 'omp-skillshare',
    section: 'skills',
    title: 'OMP Skillshare',
    url: 'https://skills.omp.sh/',
    description: 'Where OMP skills get published. Browse by topic or see what people install most.',
    license: 'Set by each skill’s author',
    addedOn: added,
  },
  {
    id: 'mattpocock-skills',
    section: 'skills',
    title: 'Matt Pocock’s skills',
    url: 'https://github.com/mattpocock/skills',
    description: 'One engineer’s own day-to-day skills: planning, tests first, handoffs, writing.',
    license: 'MIT',
    addedOn: added,
  },
  {
    id: 'pstack',
    section: 'skills',
    title: 'pstack (Cursor plugin)',
    url: 'https://github.com/cursor/plugins/tree/main/pstack',
    description: 'A plugin in Cursor’s plugins repo full of engineering skills and principles. I’m pulling a lot from it, and I like its unslop skill, which cuts AI filler out of writing.',
    license: 'MIT (pstack’s own LICENSE file)',
    addedOn: added,
  },

  // Use cases
  {
    id: 'markdown-memory',
    section: 'use-cases',
    title: 'Plain notes as AI memory',
    description: 'I keep what my AI needs to know in plain markdown files. Any model can read them, so I can swap Claude for DeepSeek and keep my context.',
    videos: [{ label: 'Part 1', url: 'https://www.youtube.com/shorts/_PBIoquTrPM' }],
    addedOn: added,
  },
  {
    id: 'local-ai-gaming-pc',
    section: 'use-cases',
    title: 'Local AI on a gaming PC',
    description: 'My gaming PC runs a Qwen model with Strata on an RTX 3080, so it does useful work when I’m not gaming.',
    videos: [
      { label: 'Part 1', url: 'https://www.youtube.com/shorts/6hnmTox1Sh8' },
      { label: 'Part 2', url: 'https://www.youtube.com/shorts/SIbwNaEL1UA' },
    ],
    addedOn: added,
  },
  {
    id: 'dictation',
    section: 'use-cases',
    title: 'Talking to agents with dictation',
    description: 'I use local dictation on my Mac to talk to coding agents. Talking gives them more context than a short typed prompt.',
    videos: [
      { label: 'Part 1', url: 'https://www.youtube.com/shorts/f9uMx48jmfo' },
      { label: 'Part 2', url: 'https://www.youtube.com/shorts/UXeXM9WuCSw' },
    ],
    addedOn: added,
  },
  {
    id: 'open-source-fix',
    section: 'use-cases',
    title: 'Fixing a bug in a tool I use',
    url: 'https://github.com/GarrettShrop/oh-my-pi/tree/fix/stats-local-day-buckets',
    description: 'OMP’s usage charts put my work on the wrong day because of my timezone. I worked with an agent to find the cause, then wrote the fix and its tests on my fork.',
    addedOn: added,
  },
  {
    id: 'multi-agent',
    section: 'use-cases',
    title: 'Multi-agent workflows',
    description: 'One agent plans and splits the work; others build and review in parallel. More on this soon.',
    videos: [{ label: 'Short', url: 'https://www.youtube.com/shorts/GskeHpMnddM' }],
    addedOn: added,
  },

  // Tools
  {
    id: 'omp',
    section: 'tools',
    title: 'OMP (oh-my-pi)',
    url: 'https://github.com/can1357/oh-my-pi',
    description: 'My daily coding agent. Works with many models and supports skills and subagents.',
    license: 'MIT',
    addedOn: added,
  },
  {
    id: 'claude-code',
    section: 'tools',
    title: 'Claude Code',
    url: 'https://code.claude.com/docs/en/overview',
    description: 'Anthropic’s coding agent. I run it in the terminal.',
    license: 'Not open source',
    addedOn: added,
  },
  {
    id: 'obsidian',
    section: 'tools',
    title: 'Obsidian',
    url: 'https://obsidian.md/',
    description: 'Where my notes live: plain markdown files on my own disk.',
    license: 'Not open source',
    addedOn: added,
  },
  {
    id: 'tern',
    section: 'tools',
    title: 'Tern',
    url: 'https://stencil.so/tern',
    description: 'A fast, native terminal workspace from Stencil, the team behind OMP.',
    license: 'Closed beta (waitlist)',
    addedOn: added,
  },
  {
    id: 'strata',
    section: 'tools',
    title: 'Strata',
    url: 'https://github.com/Niko1221/Strata',
    description: 'Runs a Qwen model on everyday hardware, with a one-click install and a local API.',
    license: 'MIT',
    addedOn: added,
  },
  {
    id: 'qwen',
    section: 'tools',
    title: 'Qwen',
    url: 'https://qwen.ai/',
    description: 'Open models from the Qwen team. The small ones run well on a home GPU.',
    addedOn: added,
  },
  {
    id: 'ollama',
    section: 'tools',
    title: 'Ollama',
    url: 'https://ollama.com/',
    description: 'An easy way to download and run open models on your own computer.',
    license: 'MIT',
    addedOn: added,
  },
  {
    id: 'deepseek',
    section: 'tools',
    title: 'DeepSeek',
    url: 'https://www.deepseek.com/',
    description: 'Strong models I’ve tested in place of Claude on my own notes.',
    addedOn: added,
  },
  {
    id: 'synthetic',
    section: 'tools',
    title: 'Synthetic',
    url: 'https://synthetic.new/',
    description: 'Hosted open-source models with an OpenAI-compatible API, so I can use them in my own tools.',
    addedOn: added,
  },
  {
    id: 'astro',
    section: 'tools',
    title: 'Astro',
    url: 'https://astro.build/',
    description: 'The framework this site is built with.',
    license: 'MIT',
    addedOn: added,
  },
  {
    id: 'tailwind',
    section: 'tools',
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    description: 'Utility-first CSS. It styles this site.',
    license: 'MIT',
    addedOn: added,
  },
  {
    id: 'netlify',
    section: 'tools',
    title: 'Netlify',
    url: 'https://www.netlify.com/',
    description: 'Hosts and deploys this site.',
    addedOn: added,
  },

  // GitHub
  {
    id: 'omp-fork',
    section: 'github',
    title: 'My fork of OMP',
    url: 'https://github.com/GarrettShrop/oh-my-pi',
    description: 'Where I work on fixes to OMP, so you can see how I change and test a real open-source project.',
    license: 'MIT (same as OMP)',
    addedOn: added,
  },

  // Videos
  {
    id: 'youtube',
    section: 'videos',
    title: 'YouTube: @GS46Codes',
    url: 'https://www.youtube.com/@GS46Codes',
    description: 'Shorts on the AI tools I use and what I build with them.',
    addedOn: added,
  },
  {
    id: 'tiktok',
    section: 'videos',
    title: 'TikTok: @gs46.codes',
    url: 'https://www.tiktok.com/@gs46.codes',
    description: 'The same short clips, on TikTok.',
    addedOn: added,
  },
  {
    id: 'facebook',
    section: 'videos',
    title: 'Facebook: GS46 Tech',
    url: 'https://www.facebook.com/gs46tech',
    description: 'The same short clips, on Facebook.',
    addedOn: added,
  },
];

/** The three checks I run before installing any skill. */
export const skillReview = [
  {
    step: 'Source',
    text: 'Open the repo. Check the license, the last update and who maintains it. No license means you can link to it, not copy it.',
  },
  {
    step: 'Read it',
    text: 'Read the whole SKILL.md and every script it ships. Look for network calls, shell commands, file writes outside the project, and anything that touches keys or passwords.',
  },
  {
    step: 'Test it',
    text: 'Install it in an empty scratch folder with no real data. Run one task, watch what it touches, and keep it only if it did what it said and nothing more.',
  },
];

/** Vault structure outline, drawn as a flow on the page. Fresh wording, no real notes. */
export const vaultOutline = [
  { id: 'conventions', title: 'Conventions file', text: 'One short file the AI reads first: folder layout, note fields, and where new info goes.' },
  { id: 'ingest', title: 'Ingest', text: 'Old notes and chats get sorted into the right hub instead of piling up.' },
  { id: 'hubs', title: 'Hubs', text: 'One note per area of life or work, with a short “current state” rewritten in place.' },
  { id: 'logs', title: 'Logs', text: 'Dated lines under each hub, newest first, never edited. History stays, the summary stays short.' },
  { id: 'health', title: 'Health check', text: 'A script flags stale summaries, broken links and overdue tasks.' },
  { id: 'maintenance', title: 'Maintenance', text: 'A daily start and a daily close keep hubs and plans current.' },
];

export const disclaimer =
  'My videos and everything on this page are my own opinions and don’t reflect my employer.';

export const channelLinks = resources.filter((r) => r.section === 'videos');
