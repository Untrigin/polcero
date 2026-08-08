import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site?.href ?? 'https://polcero.com/';
  const posts = (await getCollection('news', (e) => e.data.locale === 'pl' && !e.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'POLCERO - Aktualności',
    description: 'Postępy we wdrożeniach, prototypach i rozwoju platformy POLCERO.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/news/${post.id.split('/').pop()}/`,
    })),
    customData: `<language>pl-PL</language>`,
  });
}
