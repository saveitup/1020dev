import { SITE, PRICING, AUTOMATION_PRICING } from '@/lib/data';

/**
 * LocalBusiness + ProfessionalService Schema mit eingebettetem OfferCatalog.
 *
 * Wird in `app/layout.tsx` einmal gerendert und gilt für die ganze Site.
 * Liefert AEO-Crawlern (ChatGPT, Perplexity, Claude, Google AI Overviews)
 * strukturierte Antworten auf:
 * - "Wer ist 1020.dev?" → Organization + founder
 * - "Wo sitzt 1020.dev?" → address + geo + areaServed
 * - "Was kostet eine Website / SEO / AEO bei 1020.dev?" → hasOfferCatalog
 * - "Wie erreicht man 1020.dev?" → telephone + email + url
 *
 * Die Services kommen aus `lib/data.ts` (PRICING + AUTOMATION_PRICING) — Single
 * Source of Truth. Preisänderungen propagieren automatisch ins Schema.
 */

type PricingItem = {
  readonly name: string;
  readonly desc: string;
  readonly price: string;
  readonly prefix?: string;
};

type RecurringItem = {
  readonly name: string;
  readonly desc: string;
  readonly price: string;
  readonly period?: string;
};

function priceAsNumber(price: string): number {
  // PRICING-Strings haben deutsche Tausender-Punkte: "2.000" → 2000
  return Number(price.replace(/\./g, ''));
}

function buildOffer(item: PricingItem | RecurringItem, category: string, isRecurring = false) {
  return {
    '@type': 'Offer',
    name: item.name,
    description: item.desc,
    category,
    priceSpecification: {
      '@type': isRecurring ? 'UnitPriceSpecification' : 'PriceSpecification',
      price: priceAsNumber(item.price),
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: false,
      ...(isRecurring && 'period' in item && item.period
        ? { unitCode: 'MON', unitText: 'monatlich' }
        : {}),
    },
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
    ...PRICING.einmalig.map((p) => buildOffer(p, 'Webentwicklung & SEO/AEO')),
    ...PRICING.laufend.map((p) => buildOffer(p, 'Monitoring & Reporting', true)),
    ...AUTOMATION_PRICING.einmalig.map((p) => buildOffer(p, 'Automation & AI-Integration')),
    ...AUTOMATION_PRICING.laufend.map((p) => buildOffer(p, 'Hosting & Monitoring', true)),
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
    priceRange: '€€',
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
