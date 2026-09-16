import { SITE, SCOPE, AUTOMATION_SCOPE, APPS_SCOPE } from '@/lib/data';

/**
 * LocalBusiness + ProfessionalService Schema mit eingebettetem OfferCatalog.
 *
 * Wird in `app/layout.tsx` einmal gerendert und gilt für die ganze Site.
 * Liefert AEO-Crawlern (ChatGPT, Perplexity, Claude, Google AI Overviews)
 * strukturierte Antworten auf:
 * - "Wer ist 1020.dev?" → Organization + founder
 * - "Wo sitzt 1020.dev?" → address + geo + areaServed
 * - "Was bietet 1020.dev an?" → hasOfferCatalog (Leistungen, ohne Preise)
 * - "Wie erreicht man 1020.dev?" → telephone + email + url
 *
 * Die Services kommen aus `lib/data.ts` (SCOPE + AUTOMATION_SCOPE +
 * APPS_SCOPE) — Single Source of Truth. Bewusst OHNE Preisangaben: die Site
 * veröffentlicht keine Beträge, also enthält auch das Schema keine.
 */

type ScopeItem = {
  readonly name: string;
  readonly desc: string;
};

/**
 * Ein Offer ohne `priceSpecification`: die Site veröffentlicht keine
 * Beträge, also nennt auch das Schema keine. Angebot kommt nach dem Audit.
 */
function buildOffer(item: ScopeItem, category: string) {
  return {
    '@type': 'Offer',
    name: item.name,
    description: item.desc,
    category,
    availability: 'https://schema.org/InStock',
    itemOffered: {
      '@type': 'Service',
      name: item.name,
      description: item.desc,
      serviceType: category,
      provider: { '@id': `${SITE.url}#business` },
      areaServed: [
        { '@type': 'City', name: SITE.address.city },
        { '@type': 'Country', name: SITE.address.countryName },
      ],
    },
  };
}

export function LocalBusinessSchema() {
  const offers = [
    ...SCOPE.pakete.map((p) => buildOffer(p, 'Bundle — Webentwicklung & SEO/AEO')),
    ...SCOPE.einmalig.map((p) => buildOffer(p, 'Webentwicklung & SEO/AEO')),
    ...SCOPE.laufend.map((p) => buildOffer(p, 'Monitoring & Reporting')),
    ...AUTOMATION_SCOPE.pakete.map((p) => buildOffer(p, 'Bundle — Automation & AI')),
    ...AUTOMATION_SCOPE.einmalig.map((p) => buildOffer(p, 'Automation & AI-Integration')),
    ...AUTOMATION_SCOPE.laufend.map((p) => buildOffer(p, 'Hosting & Monitoring')),
    ...APPS_SCOPE.pakete.map((p) => buildOffer(p, 'Bundle — Mobile Apps')),
    ...APPS_SCOPE.einmalig.map((p) => buildOffer(p, 'Mobile Apps (iOS, Android, PWA)')),
    ...APPS_SCOPE.laufend.map((p) => buildOffer(p, 'App-Betrieb & Updates')),
  ];

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
      'Mobile Apps',
      'React Native',
      'Expo',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen 1020.dev',
      itemListElement: offers,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
