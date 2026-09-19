import { APPS_SHOWCASE, SITE } from '@/lib/data';

/**
 * JSON-LD `MobileApplication` für die eigenen Apps aus `APPS_SHOWCASE`.
 * Verknüpft die App mit dem LocalBusiness-Knoten (`#business`), damit
 * AEO-Crawler "Welche App hat 1020.dev entwickelt?" beantworten können.
 */
export function AppSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': APPS_SHOWCASE.map((app) => ({
      '@type': 'MobileApplication',
      '@id': `${app.href}#app`,
      name: app.name,
      alternateName: app.wordmark,
      url: app.href,
      applicationCategory: 'MusicApplication',
      description: app.desc,
      featureList: [...app.features],
      author: { '@id': `${SITE.url}#business` },
      publisher: { '@id': `${SITE.url}#business` },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
