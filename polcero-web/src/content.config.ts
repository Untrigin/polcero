import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('POLCERO'),
    locale: z.enum(['pl', 'en']).default('pl'),
    cover: z.string().default('/media/mission.webp'),
    coverAlt: z.string().default('POLCERO'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
