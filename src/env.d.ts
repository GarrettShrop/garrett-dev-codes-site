/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ANTHROPIC_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.md?raw' {
  const content: string;
  export default content;
}
