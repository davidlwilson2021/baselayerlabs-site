import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['live', 'development', 'acquired']),
    stack: z.array(z.string()),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    ogImage: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    features: z.array(z.string()).optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
