import { SITE, FOCUS } from '@/lib/data';

/**
 * Organization-Schema (JSON-LD), einmal in `app/layout.tsx` gerendert.
 *
 * Bewusst schlank: Name, Beschreibung, Kontakt-E-Mail und Themen. Telefon,
 * Adresse und Geo-Koordinaten stehen nur im Impressum, nicht im Schema.
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    description: SITE.description,
    slogan: SITE.tagline,
    url: SITE.url,
    email: SITE.email,
    logo: `${SITE.url}/apple-icon`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    knowsAbout: [...FOCUS.map((f) => f.label), 'Künstliche Intelligenz', 'Swift', 'SwiftUI'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
