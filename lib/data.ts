// ============================================
// References (slideshow projects)
// ============================================
export const REFS = [
  {
    id: 'asamer',
    domain: 'asamer.cz',
    href: 'https://asamer.cz',
    tag: 'Industrie · CEE',
    images: [
      { src: '/refs/asamer-1.jpg', alt: 'asamer.cz · Hero' },
      { src: '/refs/asamer-2.jpg', alt: 'asamer.cz · Lösungen' },
    ],
  },
  {
    id: 'zeilinger',
    domain: 'zeilinger-metallbau.at',
    href: 'https://zeilinger-metallbau.at',
    tag: 'Metallbau · Wien',
    images: [
      { src: '/refs/zeilinger-1.jpg', alt: 'zeilinger-metallbau.at · Hero' },
      { src: '/refs/zeilinger-2.jpg', alt: 'zeilinger-metallbau.at · Referenzen' },
    ],
  },
  {
    id: 'alpenbroker',
    domain: 'alpenbroker.com',
    href: 'https://alpenbroker.com',
    tag: 'Aktien · AT',
    images: [
      { src: '/refs/alpenbroker-1.jpg', alt: 'alpenbroker.com · Hero' },
      { src: '/refs/alpenbroker-2.jpg', alt: 'alpenbroker.com · Lernen' },
    ],
  },
  {
    id: 'clausl',
    domain: 'Clausl KI',
    href: null,
    tag: 'Arbeitsrecht · KI',
    images: [
      { src: '/refs/clausl-1.png', alt: 'Clausl KI · Dashboard mit Arbeitsverhältnissen' },
      { src: '/refs/clausl-2.png', alt: 'Clausl KI · Chat-Startseite' },
    ],
  },
] as const;

// ============================================
// FAQ — used by both FAQ component and JSON-LD
// ============================================
export const FAQS = [
  {
    question: 'Was ist AEO und wie unterscheidet es sich von klassischem SEO?',
    plainAnswer:
      'SEO optimiert Ihre Website für Google-Ergebnisseiten und Klicks. AEO (Answer Engine Optimization) optimiert sie für KI-Antwortmaschinen wie ChatGPT, Perplexity oder Claude — also dafür, in der Antwort zitiert oder als Quelle empfohlen zu werden, auch ohne Klick. Beides nutzt strukturierte Daten als gemeinsamen Hebel, aber AEO erfordert zusätzlich antwort-orientierte Inhaltsstruktur und FAQ- und HowTo-Schemas.',
    htmlAnswer:
      'SEO optimiert Ihre Website für Google-Ergebnisseiten — also für Klicks. AEO (Answer Engine Optimization) optimiert sie für KI-Antwortmaschinen wie ChatGPT, Perplexity oder Claude — also dafür, in der Antwort zitiert oder als Quelle empfohlen zu werden, auch ohne Klick. Beides nutzt strukturierte Daten als gemeinsamen Hebel, aber AEO erfordert zusätzlich antwort-orientierte Inhaltsstruktur und FAQ- und HowTo-Schemas.',
  },
  {
    question: 'Wie lange dauert eine Website mit AEO-Optimierung?',
    plainAnswer:
      'Ein typisches KMU-Projekt mit 5 bis 15 Seiten dauert 4 bis 6 Wochen vom Audit bis zum Live-Gang. AEO-Optimierung wird parallel zur Entwicklung implementiert, nicht nachträglich.',
    htmlAnswer:
      'Ein typisches KMU-Projekt mit 5–15 Seiten dauert 4–6 Wochen vom Audit bis zum Live-Gang. AEO-Optimierung wird parallel zur Entwicklung implementiert, nicht nachträglich — das spart Zeit und liefert von Tag eins ein optimiertes Ergebnis.',
  },
  {
    question: 'Was kostet eine Website mit AEO und wann amortisiert sich das?',
    plainAnswer:
      'Ein Onepager mit AEO-Optimierung beginnt bei rund 1.100 Euro (700 Euro Onepager plus 400 Euro AEO). Mehrseitige Sites mit Backend liegen typischerweise zwischen 3.000 und 8.000 Euro. Bei B2B-KMU mit höheren Auftragswerten reicht oft ein zusätzlicher Auftrag pro Quartal über die AEO-Sichtbarkeit zur Amortisation.',
    htmlAnswer:
      'Ein Onepager mit AEO-Optimierung beginnt bei rund 1.100&nbsp;€ (700&nbsp;€ Onepager + 400&nbsp;€ AEO). Mehrseitige Sites mit Backend liegen typischerweise zwischen 3.000&nbsp;€ und 8.000&nbsp;€. Die vollständige Preisliste finden Sie in der <a href="#preise" style="color: var(--accent); text-decoration: underline;">Preise-Section oberhalb</a>. Amortisation hängt stark vom Geschäftsmodell ab — bei B2B-KMU mit höheren Auftragswerten (Metallbau, Industriedienstleister, Beratung) reicht oft ein zusätzlicher Auftrag pro Quartal über die AEO-Sichtbarkeit.',
  },
  {
    question: 'Funktioniert AEO auch für lokale Wiener Unternehmen?',
    plainAnswer:
      'Besonders. KI-Antwortmaschinen werden zunehmend für lokale Anfragen genutzt. LocalBusiness-Schema, Google Business Profile-Integration und ortsspezifische FAQ-Inhalte sind die Hebel, mit denen wir lokale KMU sichtbar machen.',
    htmlAnswer:
      'Besonders. KI-Antwortmaschinen werden zunehmend für lokale Anfragen genutzt („Wer macht Webentwicklung in Wien?", „Bester Steuerberater in der Leopoldstadt"). LocalBusiness-Schema, Google Business Profile-Integration und ortsspezifische FAQ-Inhalte sind die Hebel, mit denen wir lokale KMU sichtbar machen.',
  },
  {
    question: 'Kann ich nur SEO und AEO buchen, ohne neue Website?',
    plainAnswer:
      'Ja, wenn Ihre bestehende Website technisch eine ausreichende Basis bietet. Bei WordPress, Webflow oder ähnlichen Stacks ist eine reine AEO-Optimierungsphase ohne Relaunch möglich. Der Audit klärt das in unter einer Stunde.',
    htmlAnswer:
      'Ja, wenn Ihre bestehende Website technisch eine ausreichende Basis bietet (sauberes HTML, akzeptable Performance, CMS mit Strukturdaten-Support). Bei WordPress, Webflow oder ähnlichen Stacks ist eine reine AEO-Optimierungsphase ohne Relaunch möglich. Der Audit klärt das in unter einer Stunde.',
  },
  {
    question: 'Wie messt ihr Erfolg in Antwortmaschinen?',
    plainAnswer:
      'Wir prüfen monatlich systematisch, ob Ihre Marke und Inhalte in ChatGPT, Perplexity, Claude und Google AI Overviews bei branchenrelevanten Anfragen genannt werden — sowohl direkt zitiert als auch als Quelle verlinkt. Plus klassische SEO-Metriken.',
    htmlAnswer:
      'Wir prüfen monatlich systematisch, ob Ihre Marke und Inhalte in ChatGPT, Perplexity, Claude und Google AI Overviews bei branchenrelevanten Anfragen genannt werden — sowohl direkt zitiert als auch als Quelle verlinkt. Plus klassische SEO-Metriken (Rankings, Impressionen, Klicks). Das Reporting ist transparent und nachvollziehbar.',
  },
] as const;

// ============================================
// Services
// ============================================
export const SERVICES = [
  {
    num: '01 — Web',
    title: 'Webentwicklung mit Next.js',
    desc: 'Schnelle, statisch generierte Websites mit modernem Stack. Performance ist nicht verhandelbar — Lighthouse 100 ist der Standard, nicht das Ziel.',
    items: [
      'Next.js · React · TypeScript',
      'Headless CMS oder Markdown',
      'EU-Hosting auf Vercel oder Hetzner',
      'DSGVO-konform, barrierefrei (WCAG\u00a0AA)',
    ],
  },
  {
    num: '02 — SEO + AEO',
    title: 'Sichtbar in Suche & Antworten',
    desc: 'Klassisches SEO für Google plus Answer-Engine-Optimierung für ChatGPT, Perplexity und Claude. Strukturierte Daten als gemeinsamer Hebel.',
    items: [
      'Schema.org · FAQ · LocalBusiness',
      'Antwort-orientierte Inhaltsstruktur',
      'Hreflang für deutschsprachigen Raum',
      'Monitoring der AI-Zitationen',
    ],
  },
  {
    num: '03 — Automation',
    title: 'Prozesse, die ohne Sie laufen',
    desc: 'Wiederkehrende Aufgaben, Lead-Pipelines und Dokumenten-Workflows mit LLM-Anbindung. Ihre Zeit zurück, ohne Personal aufzustocken.',
    items: [
      'API-Integrationen (Microsoft 365, Google, Slack)',
      'LLM-basierte Dokumentenverarbeitung',
      'Lead-Qualifizierung und CRM-Sync',
      'Interne Tools mit Claude- oder GPT-Anbindung',
    ],
  },
] as const;

// ============================================
// Methode
// ============================================
export const METHODE = [
  {
    num: '01',
    title: 'Anfrage & Audit',
    duration: 'Tag 1',
    desc: 'Schreiben Sie uns eine E-Mail oder vereinbaren Sie einen Termin. Sie schildern, was Sie brauchen und welche Beispiele Ihnen gefallen. Wir antworten zeitnah und legen, wenn möglich, mit der ersten Antwort gleich ein konkretes Angebot bei.',
    cta: { label: 'E-Mail schreiben', href: 'mailto:hallo@1020.dev' },
  },
  {
    num: '02',
    title: 'Strategie',
    duration: 'Erste Woche',
    desc: 'Nehmen Sie das Angebot an, erhalten Sie innerhalb der ersten Woche drei Entwürfe — Layout, Tonalität, Struktur. Sie wählen die Richtung, wir verfeinern sie gemeinsam.',
  },
  {
    num: '03',
    title: 'Build',
    duration: 'Folgende Wochen',
    desc: 'Implementierung mit Next.js, strukturierten Daten und Automation-Stack. Wir bleiben mit Ihnen im regelmäßigen Kontakt, damit das Ergebnis Ihren Erwartungen bestmöglich entspricht — keine Überraschungen am Ende.',
  },
  {
    num: '04',
    title: 'Monitoring',
    duration: 'Ab Übergabe',
    desc: 'Tag für Tag wird die Performance Ihrer Site gemessen — Google-Rankings, AEO-Zitationen in ChatGPT, Perplexity und Claude, Core Web Vitals. So sehen Sie den tatsächlichen Output, nicht bloß Versprechen.',
  },
] as const;

// ============================================
// Pricing
// ============================================
export const PRICING = {
  einmalig: [
    { name: 'Onepager', desc: 'Schlanke One-Page-Site mit Hosting, SSL und Performance-Optimierung. Lighthouse 100 als Standard.', price: '700', prefix: 'ab', isBase: true, plus: false, bundle: true },
    { name: 'Jede weitere Seite', desc: 'Über uns, Leistungen, Kontakt, Blog, Impressum — beliebig viele Unterseiten.', price: '250', prefix: 'ab', isBase: false, plus: true, bundle: false },
    { name: 'SEO-Optimierung', desc: 'Meta-Tags, sitemap.xml, robots.txt, Schema-Basics, Core-Web-Vitals-Tuning.', price: '350', prefix: 'ab', isBase: false, plus: true, bundle: true },
    { name: 'AEO-Optimierung', desc: 'FAQ-Schema, LocalBusiness, antwort-orientierte Struktur, llms.txt — sichtbar in ChatGPT, Perplexity, Claude.', price: '400', prefix: 'ab', isBase: false, plus: true, bundle: true },
    { name: 'Backend', desc: 'CMS-Anbindung, API-Routen, individuelle Server-Logik, Datenbank-Integration.', price: '2.000', prefix: 'ab', isBase: false, plus: true, bundle: false },
    { name: 'Automatisierung', desc: 'Workflows, LLM-Anbindung, CRM-Sync, Lead-Pipelines, Dokumenten-Verarbeitung.', price: '3.000', prefix: 'ab', isBase: false, plus: true, bundle: false },
  ],
  laufend: [
    { name: 'Analytics & Monitoring', desc: 'DSGVO-konformes Tracking (Plausible/Umami) plus monatlicher Sichtbarkeits-Report inklusive AEO-Zitations-Check.', price: '20', period: '/Monat' },
  ],
} as const;

// ============================================
// Site config
// ============================================
export const SITE = {
  name: '1020.dev',
  url: 'https://1020.dev',
  tagline: 'Sichtbar bleiben, wenn niemand mehr klickt.',
  description:
    'Webentwicklung, SEO und Answer-Engine-Optimierung für KMU in Wien und ganz Österreich. Websites, die in Google ranken und in ChatGPT, Perplexity und Claude zitiert werden.',
  bookingUrl: 'https://cal.com/1020dev',
  email: 'hallo@1020.dev',
  location: 'Wien · Leopoldstadt',
} as const;
