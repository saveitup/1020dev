import { APPS_SHOWCASE, SITE } from '@/lib/data';

/**
 * JSON-LD `MobileApplication` für die eigenen Apps aus `APPS_SHOWCASE`.
 * Verknüpft die App mit dem Organization-Knoten (`#organization`), damit
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
      screenshot: app.screenshots.map((s) => `${SITE.url}${s.src}`),
      author: { '@id': `${SITE.url}#organization` },
      publisher: { '@id': `${SITE.url}#organization` },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
