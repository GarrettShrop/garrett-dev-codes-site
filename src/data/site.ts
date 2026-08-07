export const site = {
  name: 'Garrett Shropshire',
  tagline: 'Software Engineer & AI Solutions Analyst',
  location: 'Monterey, CA',
  email: 'garrettshropshire546@gmail.com',
  bio: `I spent **2+ years** shipping enterprise-scale applications as a software engineer — an enterprise quoting portal serving **400+ users** and **$5M+ in orders**, ML forecasting pipelines, and AI usage dashboards. Over the past year-plus I've turned that foundation toward AI-native work: building multi-agent systems, running AI usage analytics, and now co-leading the AI initiative at **BRC Group Holdings Inc.** (finance industry) as an AI Solutions Analyst, working with executives and business leaders to build automated workflows powered by **Claude** and other frontier models. Before that I was a BI Analyst at **Enlyte**, and before that a Software Engineer at **dKomplex**.

On the side I own **GS46 Tech**, a one-person Central Coast tech business doing web design, computer repair, and AI automation for local clients; I'm the founder & lead developer of **MyFundFlow**, a personal finance app I built end-to-end; and I designed and self-host **OpenClaw**, a multi-agent orchestration system spanning Claude, ChatGPT, and Gemini. Right now I'm building out my skills in **cybersecurity** and spending a lot of time in **RAG systems** and **multi-agent orchestration** — I like sitting at the intersection of engineering and business, translating messy requirements into things that actually ship.`,
  links: {
    github: 'https://github.com/GarrettShrop',
    linkedin: 'https://www.linkedin.com/in/garrett-shropshire',
    youtube: 'https://www.youtube.com/@GS46Codes',
    twitter: 'https://x.com/GarrettDevCodes',
  },
};

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'AI & Machine Learning',
    skills: [
      'Claude Code',
      'Claude Cowork',
      'Anthropic API',
      'OpenClaw',
      'GitHub Copilot',
      'OpenAI / ChatGPT models',
      'Google Gemini models',
      'Multi-Agent Orchestration',
      'RAG Architecture',
      'MCP Server Integration',
      'Prompt Engineering',
      'Human-in-the-Loop Workflows',
      'LLM Integration',
    ],
  },
  {
    label: 'Data & Databases',
    skills: ['PostgreSQL', 'MySQL', 'Supabase (RLS)', 'Snowflake', 'Hex'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Azure Functions', 'C#'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'GitHub Actions', 'CI/CD', 'Docker', 'Git', 'Jenkins', 'Azure DevOps'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Astro'],
  },
  {
    label: 'Currently learning',
    skills: ['Cybersecurity'],
  },
];

// Curated recommendations for tools/platforms Garrett actually vouches for.
// Empty until he has specific picks to stand behind — do not fabricate entries here.
export const recommendedTools: { name: string; note: string; url?: string }[] = [];
