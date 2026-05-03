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
// Automation track — services
// ============================================
export const AUTOMATION_SERVICES = [
  {
    num: '01 — Automation',
    title: 'Workflows, die ohne Sie laufen',
    desc: 'Wiederkehrende Aufgaben, Lead-Pipelines und Dokumenten-Verarbeitung. Ihre Zeit zurück, ohne Personal aufzustocken.',
    items: [
      'Lead-Qualifizierung & CRM-Sync',
      'Dokumenten-Workflows (PDF, DOCX, Mail)',
      'Microsoft 365, Google, Slack, Notion',
      'Automatisierte Reports & Benachrichtigungen',
    ],
  },
  {
    num: '02 — Custom Dev',
    title: 'Interne Tools & Dashboards',
    desc: 'Wenn Standard-SaaS nicht passt: maßgeschneiderte interne Tools, APIs und Dashboards — schlank, schnell, exakt auf Ihre Prozesse zugeschnitten.',
    items: [
      'Interne Web-Apps mit Next.js',
      'REST- & GraphQL-APIs',
      'Datenbank-Design (Postgres, Supabase)',
      'Auth, Rollen & Berechtigungen',
    ],
  },
  {
    num: '03 — AI-Integration',
    title: 'LLM-Anbindung mit Substanz',
    desc: 'Claude, GPT und Open-Source-Modelle in Ihre Systeme integriert. RAG über interne Daten, Agenten für konkrete Aufgaben — keine Spielerei, sondern messbarer Output.',
    items: [
      'Anthropic Claude · OpenAI · Open Source',
      'RAG über interne Wissensbasis',
      'Tool-Use & Agentic Workflows',
      'DSGVO-konform mit EU-Hosting',
    ],
  },
] as const;

// ============================================
// Automation track — methode
// ============================================
export const AUTOMATION_METHODE = [
  {
    num: '01',
    title: 'Anfrage & Audit',
    duration: 'Tag 1',
    desc: 'Sie schildern den Prozess, den Sie automatisieren wollen — wir analysieren Aufwand, Datenfluss und mögliche Hebel. Audit ist kostenlos und liefert eine konkrete Empfehlung.',
    cta: { label: 'E-Mail schreiben', href: 'mailto:hallo@1020.dev' },
  },
  {
    num: '02',
    title: 'Workflow-Blueprint',
    duration: 'Erste Woche',
    desc: 'Wir entwerfen den Ziel-Workflow als Diagramm: Inputs, Schritte, Tools, Outputs. Sie sehen vor dem Build, was wo passiert — keine Black Box.',
  },
  {
    num: '03',
    title: 'Build & Integration',
    duration: 'Folgende Wochen',
    desc: 'Implementierung mit Ihrem bestehenden Tech-Stack — Microsoft 365, Slack, Notion, CRM, Datenbanken. Inklusive Tests, Logs und Fallback-Verhalten.',
  },
  {
    num: '04',
    title: 'Monitoring & Iteration',
    duration: 'Ab Übergabe',
    desc: 'Laufende Beobachtung der Workflows: Fehlerquoten, Ausführungszeiten, Token-Verbrauch bei LLM-Calls. Sie sehen, was läuft und was sich noch lohnt zu verbessern.',
  },
] as const;

// ============================================
// Automation track — pricing
// ============================================
export const AUTOMATION_PRICING = {
  einmalig: [
    { name: 'Workflow-Setup', desc: 'Einzelner Workflow mit 2–4 Schritten und Standard-Integrationen (Mail, Sheets, Slack, Notion).', price: '800', prefix: 'ab', isBase: true, plus: false, bundle: false },
    { name: 'API-Integration', desc: 'Anbindung externer Systeme — REST/GraphQL, Auth, Datenmapping, Error-Handling, Logging.', price: '1.500', prefix: 'ab', isBase: false, plus: true, bundle: false },
    { name: 'LLM-Anbindung', desc: 'Claude, GPT oder Open-Source-Modelle in Ihren Workflow integriert. Inklusive Prompt-Design und Token-Optimierung.', price: '2.500', prefix: 'ab', isBase: false, plus: true, bundle: true },
    { name: 'Internes Tool / Dashboard', desc: 'Maßgeschneiderte Web-App mit Auth, Datenbank und UI — exakt auf Ihren Prozess zugeschnitten.', price: '3.000', prefix: 'ab', isBase: false, plus: true, bundle: false },
    { name: 'RAG & Agentic Workflow', desc: 'Retrieval-Augmented Generation über interne Daten oder Agenten mit Tool-Use für komplexe Aufgaben.', price: '5.000', prefix: 'ab', isBase: false, plus: true, bundle: true },
  ],
  laufend: [
    { name: 'Hosting & Monitoring', desc: 'EU-Hosting, Logs, Alerting bei Ausfällen, Token-Tracking, monatlicher Performance-Report.', price: '60', period: '/Monat' },
  ],
} as const;

// ============================================
// Automation track — FAQs
// ============================================
export const AUTOMATION_FAQS = [
  {
    question: 'Welche Prozesse lohnt es sich zu automatisieren?',
    plainAnswer:
      'Alles, was wiederkehrend, regelbasiert und zeitintensiv ist: Lead-Qualifizierung, Dokumenten-Verarbeitung, Reporting, Datentransfers zwischen Systemen, E-Mail-Triagen. Faustregel: ab 2 Stunden pro Woche oder 5 Vorgängen pro Tag amortisiert sich Automation in der Regel innerhalb weniger Monate.',
    htmlAnswer:
      'Alles, was wiederkehrend, regelbasiert und zeitintensiv ist: Lead-Qualifizierung, Dokumenten-Verarbeitung, Reporting, Datentransfers zwischen Systemen, E-Mail-Triagen. Faustregel: ab 2&nbsp;Stunden pro Woche oder 5 Vorgängen pro Tag amortisiert sich Automation in der Regel innerhalb weniger Monate.',
  },
  {
    question: 'Ist die LLM-Anbindung DSGVO-konform?',
    plainAnswer:
      'Ja, mit der richtigen Architektur. Wir nutzen EU-Hosting bei Anthropic und OpenAI, schließen Auftragsverarbeitungsverträge ab und setzen — wo nötig — Open-Source-Modelle auf europäischen Servern ein. Sensible Daten werden vor dem Versand an externe APIs anonymisiert oder verbleiben on-premise.',
    htmlAnswer:
      'Ja, mit der richtigen Architektur. Wir nutzen EU-Hosting bei Anthropic und OpenAI, schließen Auftragsverarbeitungsverträge ab und setzen — wo nötig — Open-Source-Modelle (Llama, Mistral) auf europäischen Servern ein. Sensible Daten werden vor dem Versand an externe APIs anonymisiert oder verbleiben on-premise.',
  },
  {
    question: 'Welche Tools und Plattformen können Sie integrieren?',
    plainAnswer:
      'Alle gängigen B2B-Plattformen mit API: Microsoft 365 (Outlook, Teams, SharePoint), Google Workspace, Slack, Notion, Asana, Linear, HubSpot, Salesforce, Pipedrive, Stripe, plus jede REST- oder GraphQL-API. Bei älteren Systemen ohne API arbeiten wir mit Web-Scraping oder RPA-Lösungen.',
    htmlAnswer:
      'Alle gängigen B2B-Plattformen mit API: Microsoft 365 (Outlook, Teams, SharePoint), Google Workspace, Slack, Notion, Asana, Linear, HubSpot, Salesforce, Pipedrive, Stripe, plus jede REST- oder GraphQL-API. Bei älteren Systemen ohne API arbeiten wir mit Web-Scraping oder RPA-Lösungen.',
  },
  {
    question: 'Wie lange dauert ein Automation-Projekt?',
    plainAnswer:
      'Ein einzelner Workflow mit 2–4 Schritten ist in 1 bis 2 Wochen produktiv. Komplexere Setups mit eigenem internen Tool oder RAG-System brauchen 4 bis 8 Wochen — abhängig von der Anzahl integrierter Systeme und der Datenkomplexität.',
    htmlAnswer:
      'Ein einzelner Workflow mit 2–4 Schritten ist in 1 bis 2 Wochen produktiv. Komplexere Setups mit eigenem internen Tool oder RAG-System brauchen 4 bis 8 Wochen — abhängig von der Anzahl integrierter Systeme und der Datenkomplexität.',
  },
  {
    question: 'Was passiert, wenn ein Workflow Fehler wirft?',
    plainAnswer:
      'Jeder Workflow hat strukturiertes Logging, Error-Handling und Alerting. Bei Ausfällen erhalten Sie automatisch Benachrichtigungen via Slack oder E-Mail mit dem konkreten Fehlerkontext. Kritische Schritte sind idempotent gebaut — sie können sicher wiederholt werden, ohne Doppel-Aktionen auszulösen.',
    htmlAnswer:
      'Jeder Workflow hat strukturiertes Logging, Error-Handling und Alerting. Bei Ausfällen erhalten Sie automatisch Benachrichtigungen via Slack oder E-Mail mit dem konkreten Fehlerkontext. Kritische Schritte sind idempotent gebaut — sie können sicher wiederholt werden, ohne Doppel-Aktionen auszulösen.',
  },
  {
    question: 'Können wir den Workflow später selbst anpassen?',
    plainAnswer:
      'Ja. Sie bekommen den Quellcode, eine Dokumentation der Architektur und — wo möglich — eine Konfigurations-Oberfläche, mit der nicht-technische Mitarbeitende Parameter und Regeln anpassen können. Kein Vendor-Lock-in.',
    htmlAnswer:
      'Ja. Sie bekommen den Quellcode, eine Dokumentation der Architektur und — wo möglich — eine Konfigurations-Oberfläche, mit der nicht-technische Mitarbeitende Parameter und Regeln anpassen können. Kein Vendor-Lock-in.',
  },
] as const;

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
  // ----- Kontakt & Adresse (für Impressum + LocalBusiness-Schema) -----
  contact: {
    phone: '+4369911209087',         // E.164 für tel:-Links und Schema
    phoneDisplay: '+43 699 11209087', // Anzeige-Format Impressum
  },
  address: {
    street: 'Lichtenauergasse 4/8',
    postalCode: '1020',
    city: 'Wien',
    region: 'Wien',
    country: 'AT',
    countryName: 'Österreich',
  },
  // Exakte Koordinaten Lichtenauergasse 4/8, 1020 Wien
  geo: {
    lat: 48.214616,
    lng: 16.388210,
  },
  legal: {
    owner: 'Maximilian Asamer',
    legalForm: 'Einzelunternehmen',
  },
} as const;
