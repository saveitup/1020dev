import { SITE } from '@/lib/data';

/**
 * LocalBusiness + ProfessionalService Schema.
 *
 * Wird in `app/layout.tsx` einmal gerendert und gilt für die ganze Site.
 * Liefert AEO-Crawlern (ChatGPT, Perplexity, Claude, Google AI Overviews)
 * strukturierte Antworten auf:
 * - "Wer ist 1020.dev?" → Organization + founder
 * - "Wo sitzt 1020.dev?" → address + geo + areaServed
 * - "Wie erreicht man 1020.dev?" → telephone + email + url
 *
 * Honorar nach Aufwand — keine starre Preisliste, daher kein OfferCatalog mit
 * konkreten Preisen. Angemessenes Honorar unter Berücksichtigung der KI-Hilfe
 * im Entwicklungsprozess.
 */

const SERVICE_AREAS = [
  'Webentwicklung mit Next.js',
  'SEO-Optimierung',
  'Answer Engine Optimization (AEO)',
  'Workflow-Automation',
  'LLM-Integration & RAG',
  'KI-Agenten für KMU',
  'Interne Tools & Dashboards',
  'Hosting & Monitoring',
] as const;

export function LocalBusinessSchema() {
  const services = SERVICE_AREAS.map((name) => ({
    '@type': 'Service',
    name,
    provider: { '@id': `${SITE.url}#business` },
    areaServed: [
      { '@type': 'City', name: SITE.address.city },
      { '@type': 'Country', name: SITE.address.countryName },
    ],
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE.url}#business`,
    name: SITE.name,
    legalName: `${SITE.legal.owner} (${SITE.legal.legalForm})`,
    description: SITE.description,
    slogan: SITE.tagline,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.email,
    image: [
      `${SITE.url}/google/1020dev-1200x1200.jpg`,
      `${SITE.url}/google/1020dev-1200x900.jpg`,
      `${SITE.url}/google/1020dev-1200x630.jpg`,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/google/1020dev-1200x1200.jpg`,
      width: 1200,
      height: 1200,
      caption: '1020.dev — Studio für Webentwicklung, SEO und AEO in Wien',
    },
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Banküberweisung, SEPA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: SITE.address.city },
      { '@type': 'AdministrativeArea', name: 'Leopoldstadt' },
      { '@type': 'Country', name: SITE.address.countryName },
    ],
    founder: {
      '@type': 'Person',
      name: SITE.legal.owner,
      jobTitle: 'Founder & Developer',
      worksFor: { '@id': `${SITE.url}#business` },
    },
    knowsAbout: [
      'Webentwicklung',
      'Next.js',
      'React',
      'TypeScript',
      'SEO',
      'Answer Engine Optimization',
      'AEO',
      'Schema.org',
      'Workflow-Automation',
      'LLM-Integration',
      'Anthropic Claude',
      'OpenAI GPT',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.contact.phone,
      email: SITE.email,
      areaServed: 'AT',
      availableLanguage: ['de', 'en'],
    },
    makesOffer: services,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
