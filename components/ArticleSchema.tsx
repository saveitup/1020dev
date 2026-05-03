import { SITE } from '@/lib/data';
import type { JournalFrontmatter } from '@/lib/journal';

/**
 * Article + BreadcrumbList JSON-LD for journal articles.
 *
 * Strong AEO signal — AI crawlers use Article schema to identify
 * authoritative content blocks, headline, author, and publication date.
 * BreadcrumbList helps Google show breadcrumb-rich snippets.
 */

type Props = {
  article: JournalFrontmatter & { slug: string };
  url: string;
};

export function ArticleSchema({ article, url }: Props) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: 'de-AT',
    image: article.ogImage ? `${SITE.url}${article.ogImage}` : `${SITE.url}/opengraph-image`,
    author: {
      '@type': 'Person',
      name: SITE.legal.owner,
      url: `${SITE.url}/impressum`,
    },
    publisher: { '@id': `${SITE.url}#business` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: article.category,
    keywords: article.keywords?.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Start',
        item: SITE.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Journal',
        item: `${SITE.url}/journal`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
