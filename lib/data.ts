// ============================================
// References (slideshow projects)
// ============================================
export const REFS = [
  {
    id: 'asamer',
    domain: 'asamer.cz',
    href: 'https://asamer.cz',
    tag: 'Industrie · CEE',
    logo: {
      src: '/refs/logos/asamer.svg',
      alt: 'Logo asamer.cz — Industriedienstleister und Maschinenhandel für den CEE-Raum',
    },
    screenshots: [
      {
        src: '/refs/asamer-1.jpg',
        alt: 'asamer.cz — Industriedienstleister und Maschinenhandel für den CEE-Raum, Hero-Section der Website',
      },
      {
        src: '/refs/asamer-2.jpg',
        alt: 'asamer.cz — Lösungs- und Branchenübersicht des Industriedienstleisters für Tschechien und Mitteleuropa',
      },
    ],
  },
  {
    id: 'zeilinger',
    domain: 'zeilinger-metallbau.at',
    href: 'https://zeilinger-metallbau.at',
    tag: 'Metallbau · Wien',
    logo: {
      src: '/refs/logos/zeilinger.png',
      alt: 'Logo Metallbau Zeilinger — Wiener Metallbau-Betrieb seit 1516',
    },
    screenshots: [
      {
        src: '/refs/zeilinger-1.jpg',
        alt: 'zeilinger-metallbau.at — Metallbau-Betrieb in Wien, Hero-Section mit Werkstattaufnahme',
      },
      {
        src: '/refs/zeilinger-2.jpg',
        alt: 'zeilinger-metallbau.at — Referenzprojekte aus dem Wiener Metallbau, Galerie-Section',
      },
    ],
  },
  {
    id: 'alpenbroker',
    domain: 'alpenbroker.com',
    href: 'https://alpenbroker.com',
    tag: 'Aktien · AT',
    logo: {
      src: '/refs/logos/alpenbroker.svg',
      alt: 'Logo alpenbroker.com — Aktien- und Börsen-Lernplattform aus Österreich',
    },
    screenshots: [
      {
        src: '/refs/alpenbroker-1.jpg',
        alt: 'alpenbroker.com — Aktien- und Börsen-Lernplattform aus Österreich, Hero-Section mit Modulvorschau',
      },
      {
        src: '/refs/alpenbroker-2.jpg',
        alt: 'alpenbroker.com — Lernmodule für Aktien- und Investment-Wissen, deutschsprachige Übersicht',
      },
    ],
  },
  {
    id: 'clausl',
    domain: 'Clausl KI',
    href: null,
    tag: 'Arbeitsrecht · KI',
    logo: {
      src: '/refs/logos/clausl.svg',
      alt: 'Logo Clausl KI — KI-Tool für österreichisches Arbeitsrecht',
    },
    screenshots: [
      {
        src: '/refs/clausl-1.jpg',
        alt: 'Clausl KI — KI-Tool für österreichisches Arbeitsrecht, Dashboard mit Übersicht der Arbeitsverhältnisse',
      },
      {
        src: '/refs/clausl-2.jpg',
        alt: 'Clausl KI — Chat-Interface für arbeitsrechtliche Fragen, Startseite mit Eingabefeld',
      },
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
      'SEO optimiert Ihre Website für Google-Ergebnisseiten und Klicks. AEO (Answer Engine Optimization) optimiert sie für KI-Antwortmaschinen wie ChatGPT, Perplexity oder Claude — also dafür, in der Antwort zitiert oder als Quelle empfohlen zu werden, auch ohne Klick. Beides nutzt strukturierte Daten als gemeinsamen Hebel, aber AEO erfordert zusätzlich Inhaltsstruktur, aus der KI-Antwortmaschinen Antworten ziehen können, plus FAQ- und HowTo-Schemas.',
    htmlAnswer:
      'SEO optimiert Ihre Website für Google-Ergebnisseiten — also für Klicks. AEO (Answer Engine Optimization) optimiert sie für KI-Antwortmaschinen wie ChatGPT, Perplexity oder Claude — also dafür, in der Antwort zitiert oder als Quelle empfohlen zu werden, auch ohne Klick. Beides nutzt strukturierte Daten als gemeinsamen Hebel, aber AEO erfordert zusätzlich Inhaltsstruktur, aus der KI-Antwortmaschinen Antworten ziehen können, plus FAQ- und HowTo-Schemas. Mehr dazu im <a href="/journal/aeo-vs-seo" style="color: var(--accent); text-decoration: underline;">direkten Vergleich AEO vs. SEO</a>.',
  },
  {
    question: 'Wie lange dauert eine Website mit AEO-Optimierung?',
    plainAnswer:
      'Ein typisches KMU-Projekt mit 5 bis 15 Seiten dauert 4 bis 6 Wochen vom Audit bis zum Live-Gang. AEO-Optimierung wird parallel zur Entwicklung implementiert, nicht nachträglich.',
    htmlAnswer:
      'Ein typisches KMU-Projekt mit 5–15 Seiten dauert 4–6 Wochen vom Audit bis zum Live-Gang. AEO-Optimierung wird parallel zur Entwicklung implementiert, nicht nachträglich — das spart Zeit und liefert von Tag eins ein optimiertes Ergebnis. Details und Briefing-Empfehlungen im <a href="/journal/webentwicklung-wien-leitfaden-2026" style="color: var(--accent); text-decoration: underline;">Leitfaden Webentwicklung Wien 2026</a>.',
  },
  {
    question: 'Was kostet eine Website mit AEO und wann amortisiert sich das?',
    plainAnswer:
      'Eine Website-Basis mit AEO-Optimierung beginnt bei 1.100 Euro (700 Euro Website-Basis plus 400 Euro AEO). Das Bundle Sichtbar (Website-Basis + SEO + AEO) kostet 1.350 Euro statt 1.450 Euro einzeln. Mehrseitige Sites mit Backend liegen typischerweise zwischen 3.000 und 8.000 Euro. Bei B2B-KMU mit höheren Auftragswerten reicht oft ein zusätzlicher Auftrag pro Quartal über die AEO-Sichtbarkeit zur Amortisation.',
    htmlAnswer:
      'Eine Website-Basis mit AEO-Optimierung beginnt bei 1.100&nbsp;€ (700&nbsp;€ Website-Basis + 400&nbsp;€ AEO). Das Bundle „Sichtbar" (Website-Basis + SEO + AEO) kostet 1.350&nbsp;€ statt 1.450&nbsp;€ einzeln. Mehrseitige Sites mit Backend liegen typischerweise zwischen 3.000&nbsp;€ und 8.000&nbsp;€. Die vollständige Preisliste finden Sie in der <a href="#preise" style="color: var(--accent); text-decoration: underline;">Preise-Section oberhalb</a>. Amortisation hängt stark vom Geschäftsmodell ab — bei B2B-KMU mit höheren Auftragswerten (Metallbau, Industriedienstleister, Beratung) reicht oft ein zusätzlicher Auftrag pro Quartal über die AEO-Sichtbarkeit. Hintergründe in den Artikeln <a href="/journal/website-kosten-wien-2026" style="color: var(--accent); text-decoration: underline;">Website-Kosten Wien 2026</a> und <a href="/journal/aeo-kosten-2026" style="color: var(--accent); text-decoration: underline;">AEO-Kosten 2026</a>.',
  },
  {
    question: 'Funktioniert AEO auch für lokale Wiener Unternehmen?',
    plainAnswer:
      'Besonders. KI-Antwortmaschinen werden zunehmend für lokale Anfragen genutzt. LocalBusiness-Schema, Google Business Profile-Integration und ortsspezifische FAQ-Inhalte sind die Hebel, mit denen wir lokale KMU sichtbar machen.',
    htmlAnswer:
      'Besonders. KI-Antwortmaschinen werden zunehmend für lokale Anfragen genutzt („Wer macht Webentwicklung in Wien?", „Bester Steuerberater in der Leopoldstadt"). LocalBusiness-Schema, Google Business Profile-Integration und ortsspezifische FAQ-Inhalte sind die Hebel, mit denen wir lokale KMU sichtbar machen. Mehr zur Wiener Studio-Perspektive im Artikel <a href="/journal/webentwicklung-leopoldstadt-1020-wien" style="color: var(--accent); text-decoration: underline;">Webentwicklung in der Leopoldstadt</a>.',
  },
  {
    question: 'Kann ich nur SEO und AEO buchen, ohne neue Website?',
    plainAnswer:
      'Ja, wenn Ihre bestehende Website technisch eine ausreichende Basis bietet. Bei WordPress, Webflow oder ähnlichen Stacks ist eine reine AEO-Optimierungsphase ohne Relaunch möglich. Der Audit klärt das in unter einer Stunde.',
    htmlAnswer:
      'Ja, wenn Ihre bestehende Website technisch eine ausreichende Basis bietet (sauberes HTML, akzeptable Performance, CMS mit Strukturdaten-Support). Bei WordPress, Webflow oder ähnlichen Stacks ist eine reine AEO-Optimierungsphase ohne Relaunch möglich. Der Audit klärt das in unter einer Stunde. Wann ein Relaunch trotzdem sinnvoll ist, behandelt der Artikel <a href="/journal/wordpress-vs-nextjs-kmu" style="color: var(--accent); text-decoration: underline;">WordPress vs. Next.js für KMU</a>.',
  },
  {
    question: 'Wie messt ihr Erfolg in Antwortmaschinen?',
    plainAnswer:
      'Wir prüfen monatlich systematisch, ob Ihre Marke und Inhalte in ChatGPT, Perplexity, Claude und Google AI Overviews bei branchenrelevanten Anfragen genannt werden — sowohl direkt zitiert als auch als Quelle verlinkt. Plus klassische SEO-Metriken.',
    htmlAnswer:
      'Wir prüfen monatlich systematisch, ob Ihre Marke und Inhalte in ChatGPT, Perplexity, Claude und Google AI Overviews bei branchenrelevanten Anfragen genannt werden — sowohl direkt zitiert als auch als Quelle verlinkt. Plus klassische SEO-Metriken (Rankings, Impressionen, Klicks). Das Reporting ist transparent und nachvollziehbar. Eine Anleitung zum Selbst-Tracken finden Sie im Artikel <a href="/journal/chatgpt-sichtbarkeit-testen" style="color: var(--accent); text-decoration: underline;">ChatGPT-Sichtbarkeit testen</a>.',
  },
  {
    question: 'Brauche ich eine llms.txt für meine Website?',
    plainAnswer:
      'Nicht zwingend, aber empfehlenswert. Die llms.txt ist ein junger Standard, der KI-Crawlern strukturiert mitteilt, welche Inhalte autoritativ sind und priorisiert gelesen werden sollten. Aufwand: rund 30 Minuten. Wirkung: heute noch indikativ, wird aber von einer wachsenden Zahl an Crawlern berücksichtigt — ein billiger AEO-Hebel mit asymmetrischer Chance auf zukünftige Auswirkung.',
    htmlAnswer:
      'Nicht zwingend, aber empfehlenswert. Die <code>llms.txt</code> ist ein junger Standard, der KI-Crawlern strukturiert mitteilt, welche Inhalte autoritativ sind und priorisiert gelesen werden sollten. Aufwand: rund 30 Minuten. Wirkung: heute noch indikativ, wird aber von einer wachsenden Zahl an Crawlern berücksichtigt — ein billiger AEO-Hebel mit asymmetrischer Chance auf zukünftige Auswirkung. Vollständige Anleitung mit Beispiel im Artikel <a href="/journal/llms-txt-standard" style="color: var(--accent); text-decoration: underline;">llms.txt erklärt</a>. Unsere eigene Datei finden Sie unter <a href="/llms.txt" style="color: var(--accent); text-decoration: underline;">1020.dev/llms.txt</a>.',
  },
  {
    question: 'Wie teste ich, ob ChatGPT mein Unternehmen kennt?',
    plainAnswer:
      'Manuell und ohne kostenpflichtige Tools in unter 30 Minuten pro Monat. Sie definieren 10 bis 20 branchenrelevante Suchanfragen, stellen sie systematisch in ChatGPT, Perplexity, Claude und Google AI Overviews und tragen die Ergebnisse in eine Tabelle ein: Werden Sie zitiert, als Quelle verlinkt, namentlich genannt oder gar nicht erwähnt. Über die Monate wird daraus ein nachvollziehbarer Sichtbarkeits-Index.',
    htmlAnswer:
      'Manuell und ohne kostenpflichtige Tools in unter 30 Minuten pro Monat. Sie definieren 10–20 branchenrelevante Suchanfragen, stellen sie systematisch in ChatGPT, Perplexity, Claude und Google AI Overviews und tragen die Ergebnisse in eine Tabelle ein: Werden Sie zitiert, als Quelle verlinkt, namentlich genannt oder gar nicht erwähnt. Über die Monate wird daraus ein nachvollziehbarer Sichtbarkeits-Index. Vollständige Anleitung inklusive Vorlage im Artikel <a href="/journal/chatgpt-sichtbarkeit-testen" style="color: var(--accent); text-decoration: underline;">ChatGPT-Sichtbarkeit testen</a>.',
  },
  {
    question: 'WordPress oder Next.js — was passt für ein KMU besser?',
    plainAnswer:
      'WordPress passt, wenn Inhalte häufig durch nicht-technische Mitarbeitende bearbeitet werden und das CMS-Backend zentral ist. Next.js gewinnt bei Performance, Sicherheit, Wartungsaufwand und AEO-relevanten Optimierungen — insbesondere für Sites, die als Marketing- und Lead-Tool dienen und nicht täglich redaktionell befüllt werden. Mischformen mit Headless-CMS sind oft die beste Lösung.',
    htmlAnswer:
      'WordPress passt, wenn Inhalte häufig durch nicht-technische Mitarbeitende bearbeitet werden und das CMS-Backend zentral ist. Next.js gewinnt bei Performance, Sicherheit, Wartungsaufwand und AEO-relevanten Optimierungen — insbesondere für Sites, die als Marketing- und Lead-Tool dienen und nicht täglich redaktionell befüllt werden. Mischformen mit Headless-CMS sind oft die beste Lösung. Direkter Vergleich mit Beispielen im Artikel <a href="/journal/wordpress-vs-nextjs-kmu" style="color: var(--accent); text-decoration: underline;">WordPress vs. Next.js für KMU</a>.',
  },
] as const;

// ============================================
// Services
// ============================================
export const SERVICES = [
  {
    num: '01 — Web',
    title: 'Webentwicklung mit Next.js',
    desc: 'Schnelle, statisch generierte Websites mit modernem Stack. Performance ist nicht verhandelbar — Core Web Vitals im grünen Bereich, gemessen statt versprochen.',
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
      'Inhalte, die ChatGPT, Perplexity und Claude als Antwort ziehen können',
      'Hreflang für deutschsprachigen Raum',
      'Monitoring der AI-Zitationen',
    ],
  },
  {
    num: '03 — Automation',
    title: 'Prozesse, die ohne Sie laufen',
    desc: 'Wiederkehrende Aufgaben automatisiert: Lead-Formulare, die direkt im CRM landen, oder Rechnungen, die aus Mail-Anhängen ausgelesen werden. Ihre Zeit zurück, ohne Personal aufzustocken.',
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
  pakete: [
    {
      name: 'Bundle „Sichtbar"',
      desc: 'Website-Basis + SEO + AEO. Sichtbar in Google und zitiert in KI-Antworten — alles in einem Auftrag.',
      includes: ['Website-Basis (1 Seite)', 'SEO-Optimierung', 'AEO-Optimierung'],
      price: '1.350',
      strikethrough: '1.450',
    },
  ],
  einmalig: [
    { name: 'Website-Basis (1 Seite)', desc: 'Eine fokussierte Seite mit gemessener Performance: LCP < 1,8 s, INP < 200 ms, CLS < 0,1. Hosting & SSL 12 Monate inklusive, Domain stellt der Kunde. Weitere Seiten jederzeit ergänzbar.', price: '700', isBase: true, plus: false },
    { name: 'Zusätzliche Seite', desc: 'Über uns, Leistungen, Kontakt, Blog, Impressum — beliebig viele Unterseiten.', price: '250', isBase: false, plus: true },
    { name: 'SEO-Optimierung', desc: 'Meta-Tags, sitemap.xml, robots.txt, Schema-Basics, Core-Web-Vitals-Tuning.', price: '350', isBase: false, plus: true },
    { name: 'AEO-Optimierung', desc: 'FAQ-Schema, LocalBusiness und llms.txt — Inhalte so strukturiert, dass ChatGPT, Perplexity und Claude sie als Antwort ziehen können.', price: '400', isBase: false, plus: true },
    { name: 'Backend', desc: 'CMS-Anbindung, API-Routen, Datenbank-Integration. z. B. Buchungs-Backend, geschützter Kundenbereich, Headless-CMS mit Redaktionsoberfläche.', price: '2.000', prefix: 'ab', isBase: false, plus: true },
    { name: 'Automatisierung', desc: 'Workflows mit LLM-Anbindung und CRM-Sync. z. B. Lead-Formular → HubSpot → Slack-Notify, oder Rechnungen aus Mail-Anhängen extrahieren.', price: '3.000', prefix: 'ab', isBase: false, plus: true },
  ],
  laufend: [
    { name: 'Monitoring (automatisiert)', desc: 'Automatisierter Monatsreport per E-Mail: DSGVO-konformes Tracking (Plausible/Umami), Sichtbarkeits-Index für Google und KI-Antwortmaschinen, AEO-Zitations-Check. Kein menschliches Review — dafür ehrlicher Preis.', price: '25', period: '/Monat' },
  ],
} as const;

// ============================================
// Automation track — hero terminal demo
// ============================================
export const AUTOMATION_TERMINAL = {
  title: 'workflow.lead-pipeline',
  command: '$ 1020 run lead-pipeline',
  lines: [
    { tag: 'trigger',  value: 'inbound.email · sales@…' },
    { tag: 'parse',    value: 'extract → name, company, intent' },
    { tag: 'enrich',   value: 'claude-sonnet · classify priority' },
    { tag: 'sync',     value: 'hubspot.contact.upsert' },
    { tag: 'notify',   value: 'slack #sales · @account-owner' },
  ],
  status: 'done in 1.2s · 247 runs heute · Ø 1.4s',
} as const;

export const AUTOMATION_INTEGRATIONS = [
  'Microsoft 365',
  'Google Workspace',
  'Slack',
  'Notion',
  'HubSpot',
  'Stripe',
  'Claude',
  'OpenAI',
  'Postgres',
  'Supabase',
] as const;

// ============================================
// Automation track — services
// ============================================
export const AUTOMATION_SERVICES = [
  {
    num: '01 — Automation',
    title: 'Workflows, die ohne Sie laufen',
    desc: 'Wiederkehrende Aufgaben automatisiert: Lead-Qualifizierung, CRM-Sync, Dokumenten-Workflows mit LLMs. Ihre Zeit zurück, ohne Personal aufzustocken.',
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
    desc: 'Wenn Standard-SaaS nicht passt: maßgeschneiderte interne Tools, APIs und Dashboards — fokussiert, schnell, exakt auf Ihre Prozesse zugeschnitten.',
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
  pakete: [
    {
      name: 'Bundle „AI-ready"',
      desc: 'LLM-Anbindung + RAG & Agentic Workflow. Eigene Wissensbasis und LLM-gestützte Agenten in einem Auftrag — die zwei Hebel, die zusammen am meisten Output bringen.',
      includes: ['LLM-Anbindung', 'RAG & Agentic Workflow'],
      price: '6.900',
      strikethrough: '7.500',
      saves: '600',
    },
  ],
  einmalig: [
    { name: 'Workflow-Setup', desc: 'Einzelner Workflow mit 2–4 Schritten und Standard-Integrationen (Mail, Sheets, Slack, Notion).', price: '800', prefix: 'ab', isBase: true, plus: false },
    { name: 'API-Integration', desc: 'Anbindung externer Systeme — REST/GraphQL, Auth, Datenmapping, Error-Handling, Logging.', price: '1.500', prefix: 'ab', isBase: false, plus: true },
    { name: 'LLM-Anbindung', desc: 'Claude, GPT oder Open-Source-Modelle in Ihren Workflow integriert. Inklusive Prompt-Design und Token-Optimierung.', price: '2.500', prefix: 'ab', isBase: false, plus: true },
    { name: 'Internes Tool / Dashboard', desc: 'Maßgeschneiderte Web-App mit Auth, Datenbank und UI — exakt auf Ihren Prozess zugeschnitten.', price: '3.000', prefix: 'ab', isBase: false, plus: true },
    { name: 'RAG & Agentic Workflow', desc: 'Retrieval-Augmented Generation über interne Daten oder Agenten mit Tool-Use für komplexe Aufgaben.', price: '5.000', prefix: 'ab', isBase: false, plus: true },
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
// Agenten track — 4-phase workflow
// ============================================
export const AGENTEN_METHODE = [
  {
    num: '01',
    title: 'Bedarfsanalyse',
    duration: 'Tag 1–3',
    desc: 'Wir analysieren Ihr Geschäftsmodell, Ihre Prozesse und Ihre Ziele. Welche Aufgaben kosten Zeit? Welche Anfragen wiederholen sich täglich? Ergebnis: priorisierte Liste konkreter Aufgaben, die ein Agent übernehmen kann — inklusive grober Aufwandsschätzung.',
    cta: { label: 'E-Mail schreiben', href: 'mailto:hallo@1020.dev' },
  },
  {
    num: '02',
    title: 'Agent-Design',
    duration: 'Woche 1',
    desc: 'Für die priorisierten Aufgaben entwerfen wir die passenden Agenten — abgestimmt auf Ihre Branche, Ihre Sprache und Ihre Tools. Architektur, Datenflüsse und Schnittstellen werden vor dem Build dokumentiert. Keine Black Box.',
  },
  {
    num: '03',
    title: 'Umsetzung',
    duration: 'Woche 2–4',
    desc: 'Wir konfigurieren, testen und schulen die Agenten an Ihren realen Daten. Inklusive Integration in bestehende Systeme (E-Mail, Kalender, CRM, Buchhaltung) und Live-Tests mit echten Vorgängen, bevor irgendetwas produktiv geht.',
  },
  {
    num: '04',
    title: 'Übergabe & Betreuung',
    duration: 'Ab Go-Live',
    desc: 'Ihre Agenten starten produktiv. Wir bleiben als Ansprechpartner, beobachten Fehlerquoten und Token-Verbrauch und justieren bei Bedarf nach. Monatliches Reporting, monatlich kündbar.',
  },
] as const;

// ============================================
// Agenten track — branchen-spezifische Anwendungsbereiche
// ============================================
export const AGENTEN_INDUSTRIES = [
  {
    id: 'gastgewerbe',
    label: 'Gastgewerbe',
    tag: 'Reservierungs- & Bewertungsmanager',
    short: 'Automatische Tischreservierung und Antworten auf Google-Bewertungen.',
    htmlDetail:
      'Der Agent nimmt Reservierungen per E-Mail, WhatsApp oder Webformular entgegen, prüft die Tischbelegung in Ihrem System (resmio, OpenTable oder Google Reservierungen) und bestätigt automatisch — auf Deutsch, im Tonfall Ihres Hauses. Neue Google- und TripAdvisor-Bewertungen werden in Sekunden gelesen und beantwortet, kritische Reviews zuerst an Sie eskaliert. Stornos und No-Shows werden erkannt, Reminder gehen automatisch raus. Das spart in einem Wiener Restaurant typischerweise 8–12 Stunden Telefonie pro Woche.',
  },
  {
    id: 'handwerk',
    label: 'Handwerk',
    tag: 'Auftrags- & Angebotsassistent',
    short: 'Anfragen erfassen, Angebote erstellen, Termine koordinieren.',
    htmlDetail:
      'Eingehende Anfragen — telefonisch, per E-Mail oder über das Webformular — werden vom Agenten erfasst, strukturiert und mit Rückfragen zu fehlenden Details ergänzt. Aus Ihrer Preisliste und vergleichbaren früheren Aufträgen entsteht ein Angebot, das Sie nur noch freigeben. Termine werden mit dem Kalender Ihrer Mitarbeitenden koordiniert, Material- und Fahrzeit eingerechnet. Anbindbar an Holzmann, BMD, RKSV-Kassen oder einfache Excel-Listen — Sie entscheiden, wie tief integriert wird.',
  },
  {
    id: 'handel',
    label: 'Handel',
    tag: 'Shop- & Lageroptimierung',
    short: 'Produktpflege, Bestandsverwaltung und Beantwortung von Kundenanfragen.',
    htmlDetail:
      'Der Agent pflegt Ihre Produktdaten in Shopify, WooCommerce oder Shopware, schreibt SEO-konforme Beschreibungen aus Lieferanten-Datenblättern und meldet kritische Bestände automatisch. Kundenanfragen zu Verfügbarkeit, Versand und Retouren werden 24/7 beantwortet — der Agent kennt Ihre Lagerstände und AGB. Bei Sonderfällen übergibt er an Sie, mit vorbereiteter Antwort zum Freigeben. Auch B2B-Preislisten und Mengenstaffeln werden korrekt berücksichtigt.',
  },
  {
    id: 'freie-berufe',
    label: 'Freie Berufe',
    tag: 'Klientenmanagement',
    short: 'Terminplanung, Dokumentenverwaltung und Honorarabrechnung.',
    htmlDetail:
      'Für Steuerberatung, Anwaltskanzlei, Therapie oder Beratungspraxis: Der Agent koordiniert Termine über cal.com oder Outlook, verschickt Erinnerungen und Vorbereitungs-Checklisten, sortiert eingehende Klientenunterlagen automatisch in die richtigen Ordner und bereitet Honorarnoten nach Ihrem Tarif vor. Anbindbar an BMD, RA-MICRO oder DATEV — DSGVO-konform mit Verschlüsselung sensibler Daten und klarer Audit-Spur, wer wann was getan hat.',
  },
  {
    id: 'dienstleister',
    label: 'Dienstleister',
    tag: 'Marketing-Autopilot',
    short: 'Social Media, Newsletter und lokales SEO — automatisch betrieben.',
    htmlDetail:
      'Der Agent plant und veröffentlicht Beiträge auf Instagram, LinkedIn und Facebook, generiert Newsletter aus Ihren News und Angeboten und beantwortet Direktnachrichten in Ihrem Ton. Lokales SEO und Google Business Profile werden laufend gepflegt — neue Bewertungen, Öffnungszeiten zu Feiertagen, saisonale Angebote. Ergebnisse werden monatlich gegen Ihre Ziele gemessen (Reichweite, Anfragen, Conversion), nicht nur Vanity-Metriken.',
  },
] as const;

// ============================================
// Agenten track — Mehrwert (USPs)
// ============================================
export const AGENTEN_BENEFITS = [
  {
    num: '01',
    title: 'Für Österreich gemacht',
    desc: 'Unsere Agenten verstehen österreichische Geschäftskultur, sprechen Deutsch und kennen die lokalen Anforderungen — von der Gewerbeberechtigung über die Registrierkassenpflicht bis zur korrekten Anrede.',
  },
  {
    num: '02',
    title: 'Branchenspezifisch',
    desc: 'Ein Tischlereibetrieb braucht andere Lösungen als eine Steuerberatungskanzlei. Jeder Agent wird auf Ihre Branche und Ihre Prozesse zugeschnitten — kein Standardprodukt von der Stange.',
  },
  {
    num: '03',
    title: 'Kein IT-Know-how nötig',
    desc: 'Unsere Agenten arbeiten selbstständig im Hintergrund. Sie brauchen keine eigene IT-Abteilung und keine technischen Vorkenntnisse — wir übernehmen Setup, Wartung und Monitoring.',
  },
  {
    num: '04',
    title: 'DSGVO von Grund auf',
    desc: 'Datenschutz ist bei uns kein Nachgedanke, sondern eingebaut. EU-Hosting, Auftragsverarbeitungsverträge, sensible Daten bei Bedarf on-premise. Alle Agenten entsprechen der DSGVO ab Tag eins.',
  },
  {
    num: '05',
    title: 'Skalierbar',
    desc: 'Starten Sie mit einem einzelnen Agenten und erweitern Sie bei Bedarf — ohne Neuentwicklung. Jeder Agent ist modular und kann jederzeit um neue Aufgaben oder Schnittstellen ergänzt werden.',
  },
] as const;

// ============================================
// Agenten track — FAQs (für AEO / GEO)
// ============================================
export const AGENTEN_FAQS = [
  {
    question: 'Was ist ein KI-Agent für KMU?',
    plainAnswer:
      'Ein KI-Agent ist eine intelligente Software, die wiederkehrende Aufgaben in einem KMU selbstständig übernimmt — von der Bearbeitung eingehender Anfragen über die Erstellung von Angeboten bis zur Pflege von Online-Kanälen. Anders als klassische Skripte versteht ein KI-Agent natürliche Sprache, trifft kontextabhängige Entscheidungen und kann mit bestehenden Systemen wie E-Mail, Kalender oder CRM zusammenarbeiten.',
    htmlAnswer:
      'Ein KI-Agent ist eine intelligente Software, die wiederkehrende Aufgaben in einem KMU selbstständig übernimmt — von der Bearbeitung eingehender Anfragen über die Erstellung von Angeboten bis zur Pflege von Online-Kanälen. Anders als klassische Skripte versteht ein KI-Agent natürliche Sprache, trifft kontextabhängige Entscheidungen und kann mit bestehenden Systemen wie E-Mail, Kalender oder CRM zusammenarbeiten. Im Unterschied zu einem Chatbot ist ein Agent <strong>handlungsfähig</strong>: er liest, entscheidet und führt aus.',
  },
  {
    question: 'Was unterscheidet einen KI-Agenten von einem Chatbot?',
    plainAnswer:
      'Ein Chatbot antwortet — ein Agent handelt. Chatbots geben vordefinierte oder generierte Antworten auf Fragen, bleiben aber im Chat-Fenster. Ein KI-Agent kann darüber hinaus konkrete Aktionen ausführen: Termine im Kalender eintragen, Angebote im CRM anlegen, Newsletter versenden, Bestände prüfen. Agenten greifen über Schnittstellen auf Ihre Systeme zu und schließen Vorgänge ab, ohne dass jemand kopieren und einfügen muss.',
    htmlAnswer:
      'Ein Chatbot antwortet — ein Agent handelt. Chatbots geben vordefinierte oder generierte Antworten auf Fragen, bleiben aber im Chat-Fenster. Ein KI-Agent kann darüber hinaus konkrete Aktionen ausführen: Termine im Kalender eintragen, Angebote im CRM anlegen, Newsletter versenden, Bestände prüfen. Agenten greifen über Schnittstellen auf Ihre Systeme zu und <strong>schließen Vorgänge ab</strong>, ohne dass jemand kopieren und einfügen muss.',
  },
  {
    question: 'Was kostet ein KI-Agent für ein KMU in Österreich?',
    plainAnswer:
      'Ein einfacher Agent für eine klar abgegrenzte Aufgabe startet bei 800 Euro Workflow-Setup. Agenten mit LLM-Anbindung und mehreren Integrationen liegen typischerweise zwischen 2.500 und 5.000 Euro einmalig. Komplexere Setups mit RAG über eigene Daten oder agentic Workflows ab 5.000 Euro. Der laufende Betrieb inklusive Hosting und Monitoring kostet 60 Euro im Monat. Audit und Erstgespräch sind kostenlos.',
    htmlAnswer:
      'Ein einfacher Agent für eine klar abgegrenzte Aufgabe startet bei 800&nbsp;€ Workflow-Setup. Agenten mit LLM-Anbindung und mehreren Integrationen liegen typischerweise zwischen 2.500&nbsp;€ und 5.000&nbsp;€ einmalig. Komplexere Setups mit RAG über eigene Daten oder agentic Workflows ab 5.000&nbsp;€. Der laufende Betrieb inklusive Hosting und Monitoring kostet 60&nbsp;€ im Monat. Audit und Erstgespräch sind kostenlos. Detaillierte Pakete im <a href="/automation#preise" style="color: var(--accent); text-decoration: underline;">Automation-Pricing</a>.',
  },
  {
    question: 'Wie lange dauert die Entwicklung eines KI-Agenten?',
    plainAnswer:
      'Ein einzelner Agent mit klar definiertem Aufgabenbereich ist in 2 bis 4 Wochen produktiv. Komplexere Setups mit mehreren integrierten Systemen oder eigener Wissensbasis brauchen 4 bis 8 Wochen — abhängig von der Datenqualität und der Anzahl an Schnittstellen. Die erste Woche ist immer Analyse und Design, ab Woche zwei beginnt die Umsetzung mit wöchentlichen Reviews.',
    htmlAnswer:
      'Ein einzelner Agent mit klar definiertem Aufgabenbereich ist in 2 bis 4 Wochen produktiv. Komplexere Setups mit mehreren integrierten Systemen oder eigener Wissensbasis brauchen 4 bis 8 Wochen — abhängig von der Datenqualität und der Anzahl an Schnittstellen. Die erste Woche ist immer Analyse und Design, ab Woche zwei beginnt die Umsetzung mit wöchentlichen Reviews.',
  },
  {
    question: 'Ist mein Unternehmen zu klein für einen KI-Agenten?',
    plainAnswer:
      'Im Gegenteil. Ein-Personen-Unternehmen und Kleinbetriebe profitieren oft am stärksten, weil ihnen kein Team zur Verfügung steht, das wiederkehrende Aufgaben übernimmt. Faustregel: Wenn eine Aufgabe Sie mehr als zwei Stunden pro Woche kostet oder über fünf Mal am Tag wiederkehrt, lohnt sich ein Agent in der Regel schon nach wenigen Monaten.',
    htmlAnswer:
      'Im Gegenteil. Ein-Personen-Unternehmen und Kleinbetriebe profitieren oft am stärksten, weil ihnen kein Team zur Verfügung steht, das wiederkehrende Aufgaben übernimmt. Faustregel: Wenn eine Aufgabe Sie mehr als <strong>zwei Stunden pro Woche</strong> kostet oder über fünf Mal am Tag wiederkehrt, lohnt sich ein Agent in der Regel schon nach wenigen Monaten.',
  },
  {
    question: 'Welche Aufgaben kann ein KI-Agent in einem KMU konkret übernehmen?',
    plainAnswer:
      'Typische Einsatzfelder: Beantwortung wiederkehrender Kundenanfragen, Reservierungs- und Terminkoordination, Angebotserstellung aus Anfragen, Pflege von Online-Shops und Produktdaten, automatisches Beantworten von Google-Bewertungen, Newsletter- und Social-Media-Management, Sortierung eingehender E-Mails, Vorbereitung von Rechnungen und Honorarnoten. Welche Aufgaben in Ihrem Betrieb am meisten Wirkung haben, klärt die kostenlose Bedarfsanalyse.',
    htmlAnswer:
      'Typische Einsatzfelder: Beantwortung wiederkehrender Kundenanfragen, Reservierungs- und Terminkoordination, Angebotserstellung aus Anfragen, Pflege von Online-Shops und Produktdaten, automatisches Beantworten von Google-Bewertungen, Newsletter- und Social-Media-Management, Sortierung eingehender E-Mails, Vorbereitung von Rechnungen und Honorarnoten. Welche Aufgaben in Ihrem Betrieb am meisten Wirkung haben, klärt die <a href="mailto:hallo@1020.dev" style="color: var(--accent); text-decoration: underline;">kostenlose Bedarfsanalyse</a>.',
  },
  {
    question: 'Brauche ich eine eigene IT-Abteilung für den Betrieb?',
    plainAnswer:
      'Nein. Unsere Agenten laufen selbstständig im Hintergrund — wir kümmern uns um Hosting, Wartung und Monitoring. Sie bekommen einen einfachen Zugang, um Eingaben oder Regeln anzupassen, plus ein monatliches Reporting. Bei Fragen oder Fehlern sind wir innerhalb eines Werktags erreichbar. Kein Vendor-Lock-in: Sie bekommen Quellcode und Dokumentation, falls Sie später intern übernehmen wollen.',
    htmlAnswer:
      'Nein. Unsere Agenten laufen selbstständig im Hintergrund — wir kümmern uns um Hosting, Wartung und Monitoring. Sie bekommen einen einfachen Zugang, um Eingaben oder Regeln anzupassen, plus ein monatliches Reporting. Bei Fragen oder Fehlern sind wir innerhalb eines Werktags erreichbar. <strong>Kein Vendor-Lock-in</strong>: Sie bekommen Quellcode und Dokumentation, falls Sie später intern übernehmen wollen.',
  },
  {
    question: 'Sind KI-Agenten DSGVO-konform und wo liegen die Daten?',
    plainAnswer:
      'Ja. Wir nutzen EU-Hosting bei Anthropic und OpenAI, schließen Auftragsverarbeitungsverträge ab und setzen — wo nötig — Open-Source-Modelle auf europäischen Servern ein. Sensible Daten werden vor dem Versand an externe APIs anonymisiert oder verbleiben on-premise. Jeder Agent dokumentiert seine Aktionen nachvollziehbar, damit Sie Auskunfts- und Löschungsersuchen sauber bedienen können.',
    htmlAnswer:
      'Ja. Wir nutzen EU-Hosting bei Anthropic und OpenAI, schließen Auftragsverarbeitungsverträge ab und setzen — wo nötig — Open-Source-Modelle (Llama, Mistral) auf europäischen Servern ein. Sensible Daten werden vor dem Versand an externe APIs anonymisiert oder verbleiben on-premise. Jeder Agent dokumentiert seine Aktionen nachvollziehbar, damit Sie Auskunfts- und Löschungsersuchen sauber bedienen können.',
  },
  {
    question: 'Welche Systeme kann ein Agent integrieren?',
    plainAnswer:
      'Alle gängigen Plattformen mit API: Microsoft 365 (Outlook, Teams, SharePoint), Google Workspace, Slack, Notion, HubSpot, Salesforce, Pipedrive, Stripe, Shopify, WooCommerce, plus österreichische Branchenlösungen wie BMD oder RA-MICRO. Bei älteren Systemen ohne API arbeiten wir mit strukturierter E-Mail-Verarbeitung oder schlanken RPA-Lösungen.',
    htmlAnswer:
      'Alle gängigen Plattformen mit API: Microsoft 365 (Outlook, Teams, SharePoint), Google Workspace, Slack, Notion, HubSpot, Salesforce, Pipedrive, Stripe, Shopify, WooCommerce, plus österreichische Branchenlösungen wie BMD oder RA-MICRO. Bei älteren Systemen ohne API arbeiten wir mit strukturierter E-Mail-Verarbeitung oder schlanken RPA-Lösungen.',
  },
  {
    question: 'Was passiert, wenn der Agent einen Fehler macht?',
    plainAnswer:
      'Jeder Agent hat strukturiertes Logging, Error-Handling und definierte Eskalationsregeln. Unsichere Vorgänge werden nicht selbstständig ausgeführt, sondern Ihnen mit fertiger Empfehlung zum Freigeben vorgelegt. Bei Ausfällen erhalten Sie automatisch Benachrichtigungen mit dem konkreten Fehlerkontext. Kritische Schritte sind idempotent gebaut — sie können sicher wiederholt werden, ohne Doppel-Aktionen wie zweimal verschickte Rechnungen.',
    htmlAnswer:
      'Jeder Agent hat strukturiertes Logging, Error-Handling und definierte Eskalationsregeln. Unsichere Vorgänge werden nicht selbstständig ausgeführt, sondern Ihnen mit fertiger Empfehlung zum Freigeben vorgelegt. Bei Ausfällen erhalten Sie automatisch Benachrichtigungen mit dem konkreten Fehlerkontext. Kritische Schritte sind <strong>idempotent</strong> gebaut — sie können sicher wiederholt werden, ohne Doppel-Aktionen wie zweimal verschickte Rechnungen.',
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
  bookingUrl: 'https://cal.eu/1020dev/erstgespraech',
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
