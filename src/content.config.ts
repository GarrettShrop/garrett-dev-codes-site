import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    orgUrl: z.string().url().optional(),
    // Path to a logo image in /public (e.g. "/logos/dkomplex.svg"). Optional —
    // entries without one just render without a logo.
    logo: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    // 'job' = W-2 employment history; 'venture' = concurrent side businesses/projects
    // (GS46 Tech, MyFundFlow) that shouldn't interleave chronologically with jobs.
    track: z.enum(['job', 'venture']).default('job'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
    appStoreUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number(),
    featured: z.boolean().default(true),
  }),
});

export const collections = { experience, projects };
