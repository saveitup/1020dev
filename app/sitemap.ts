import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';
import { getAllArticles } from '@/lib/journal';

// Revalidate sitemap hourly so newly-published articles appear for
// crawlers without manual rebuild.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${SITE.url}/google/1020dev-1200x1200.jpg`,
        `${SITE.url}/google/1020dev-1200x900.jpg`,
        `${SITE.url}/google/1020dev-1200x630.jpg`,
      ],
    },
    {
      url: `${SITE.url}/web`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/automation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/concepts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/journal`,
      lastModified: articles[0]?.updatedAt
        ? new Date(articles[0].updatedAt)
        : articles[0]?.publishedAt
          ? new Date(articles[0].publishedAt)
          : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE.url}/journal/${a.slug}`,
    lastModified: new Date(a.updatedAt || a.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
