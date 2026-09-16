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
'Der Preis hängt vom Umfang ab: Seitenzahl, ob SEO und AEO dazukommen, ob ein Backend nötig ist. Wir veröffentlichen keine Preisliste, sondern legen nach dem kostenlosen Audit ein Fixpreis-Angebot vor — Sie wissen vor Vertragsschluss, was das Projekt kostet, und der Preis wächst im Projekt nicht nach. Amortisation hängt stark vom Geschäftsmodell ab: bei B2B-KMU mit höheren Auftragswerten reicht oft ein zusätzlicher Auftrag pro Quartal über die AEO-Sichtbarkeit.',
    htmlAnswer:
'Der Preis hängt vom Umfang ab: Seitenzahl, ob SEO und AEO dazukommen, ob ein Backend nötig ist. Wir veröffentlichen keine Preisliste — stattdessen legen wir nach dem <strong>kostenlosen Audit ein Fixpreis-Angebot</strong> vor. Sie wissen vor Vertragsschluss, was das Projekt kostet, und der Preis wächst im Projekt nicht nach. Was im Umfang enthalten ist, sehen Sie in der <a href="#angebot" style="color: var(--accent); text-decoration: underline;">Angebots-Section oberhalb</a>. Amortisation hängt stark vom Geschäftsmodell ab — bei B2B-KMU mit höheren Auftragswerten (Metallbau, Industriedienstleister, Beratung) reicht oft ein zusätzlicher Auftrag pro Quartal über die AEO-Sichtbarkeit. Marktübliche Bereiche in den Artikeln <a href="/journal/website-kosten-wien-2026" style="color: var(--accent); text-decoration: underline;">Website-Kosten Wien 2026</a> und <a href="/journal/aeo-kosten-2026" style="color: var(--accent); text-decoration: underline;">AEO-Kosten 2026</a>.',
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
    cta: { label: 'Zum Software-Track', href: '/automation' },
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
// Leistungsumfang — Web-Track (keine Preise auf der Site)
// ============================================
export const SCOPE = {
  pakete: [
    {
      name: 'Bundle „Sichtbar"',
      desc: 'Website-Basis + SEO + AEO in einem Auftrag. Günstiger als die Einzelbuchung und schneller umgesetzt, weil alles in einem Durchgang entsteht.',
      includes: ['Website-Basis (1 Seite)', 'SEO-Optimierung', 'AEO-Optimierung'],
    },
  ],
  einmalig: [
    { name: 'Website-Basis (1 Seite)', desc: 'Eine fokussierte Seite mit gemessener Performance: LCP < 1,8 s, INP < 200 ms, CLS < 0,1. Hosting & SSL 12 Monate inklusive, Domain stellt der Kunde. Weitere Seiten jederzeit ergänzbar.', isBase: true, plus: false },
    { name: 'Zusätzliche Seite', desc: 'Über uns, Leistungen, Kontakt, Blog, Impressum — beliebig viele Unterseiten.', isBase: false, plus: true },
    { name: 'SEO-Optimierung', desc: 'Meta-Tags, sitemap.xml, robots.txt, Schema-Basics, Core-Web-Vitals-Tuning.', isBase: false, plus: true },
    { name: 'AEO-Optimierung', desc: 'FAQ-Schema, LocalBusiness und llms.txt — Inhalte so strukturiert, dass ChatGPT, Perplexity und Claude sie als Antwort ziehen können.', isBase: false, plus: true },
    { name: 'Backend', desc: 'CMS-Anbindung, API-Routen, Datenbank-Integration. z. B. Buchungs-Backend, geschützter Kundenbereich, Headless-CMS mit Redaktionsoberfläche.', isBase: false, plus: true },
    { name: 'Automatisierung', desc: 'Workflows mit LLM-Anbindung und CRM-Sync. z. B. Lead-Formular → HubSpot → Slack-Notify, oder Rechnungen aus Mail-Anhängen extrahieren.', isBase: false, plus: true },
  ],
  laufend: [
    { name: 'Monitoring (automatisiert)', desc: 'Automatisierter Monatsreport per E-Mail: DSGVO-konformes Tracking (Plausible/Umami), Sichtbarkeits-Index für Google und KI-Antwortmaschinen, AEO-Zitations-Check. Kein menschliches Review — dafür vollautomatisiert und schlank.' },
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
// Automation track — Leistungsumfang
// ============================================
export const AUTOMATION_SCOPE = {
  pakete: [
    {
      name: 'Bundle „AI-ready"',
      desc: 'LLM-Anbindung + RAG & Agentic Workflow in einem Auftrag. Eigene Wissensbasis und LLM-gestützte Agenten — die zwei Hebel, die zusammen am meisten Output bringen, günstiger als einzeln.',
      includes: ['LLM-Anbindung', 'RAG & Agentic Workflow'],
    },
  ],
  einmalig: [
    { name: 'Workflow-Setup', desc: 'Einzelner Workflow mit 2–4 Schritten und Standard-Integrationen (Mail, Sheets, Slack, Notion).', isBase: true, plus: false },
    { name: 'API-Integration', desc: 'Anbindung externer Systeme — REST/GraphQL, Auth, Datenmapping, Error-Handling, Logging.', isBase: false, plus: true },
    { name: 'LLM-Anbindung', desc: 'Claude, GPT oder Open-Source-Modelle in Ihren Workflow integriert. Inklusive Prompt-Design und Token-Optimierung.', isBase: false, plus: true },
    { name: 'Internes Tool / Dashboard', desc: 'Maßgeschneiderte Web-App mit Auth, Datenbank und UI — exakt auf Ihren Prozess zugeschnitten.', isBase: false, plus: true },
    { name: 'RAG & Agentic Workflow', desc: 'Retrieval-Augmented Generation über interne Daten oder Agenten mit Tool-Use für komplexe Aufgaben.', isBase: false, plus: true },
  ],
  laufend: [
    { name: 'Hosting & Monitoring', desc: 'EU-Hosting, Logs, Alerting bei Ausfällen, Token-Tracking, monatlicher Performance-Report.' },
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
// Concepts track — 6-phase workflow
// ============================================
export const CONCEPTS_METHODE = [
  {
    num: '01',
    title: 'Ideation',
    duration: 'Tag 1–3',
    desc: 'Gemeinsam identifizieren wir Potenziale für AI und Automatisierung in Ihren bestehenden Prozessen. Welche Aufgaben kosten Zeit? Wo liegen die größten Hebel? Ergebnis: priorisierte Liste konkreter Anwendungsfälle.',
  },
  {
    num: '02',
    title: 'Assessment',
    duration: 'Woche 1',
    desc: 'Jede Idee wird auf Machbarkeit, Wirtschaftlichkeit und Risiko geprüft. Wir bewerten Datenqualität, vorhandene Schnittstellen und regulatorische Anforderungen. Ergebnis: Go/No-Go-Entscheidung pro Anwendungsfall mit klarer Begründung.',
  },
  {
    num: '03',
    title: 'Concept Design',
    duration: 'Woche 2–3',
    desc: 'Für die freigegebenen Anwendungsfälle entsteht ein technisches Konzept: Architektur, Datenflüsse, Schnittstellen, Technologieauswahl. Kein Foliendeck — ein umsetzbares Dokument mit konkreten Spezifikationen.',
  },
  {
    num: '04',
    title: 'Validation',
    duration: 'Woche 3–4',
    desc: 'Kritische Annahmen werden mit einem schlanken Prototyp oder Proof-of-Concept getestet. Sie sehen vor dem eigentlichen Build, ob die Lösung funktioniert — bevor Budget in die falsche Richtung fließt.',
  },
  {
    num: '05',
    title: 'Handoff',
    duration: 'Woche 4–5',
    desc: 'Das validierte Konzept wird als umsetzungsfertiges Paket übergeben: technische Spezifikation, Architektur-Diagramme, Zeitplan, Kostenrahmen. Ihr Team oder wir setzen um — das Konzept funktioniert in beiden Fällen.',
  },
  {
    num: '06',
    title: 'Review',
    duration: 'Nach Umsetzung',
    desc: 'Nach der Umsetzung prüfen wir gemeinsam die Ergebnisse gegen die ursprünglichen Ziele. Was funktioniert, was muss nachjustiert werden, welche nächsten Schritte ergeben sich? Kein Projekt ohne Bilanz.',
  },
] as const;

// ============================================
// Apps track — showcase (own products)
// ============================================
// `screenshot` ist optional: sobald ein echter Screenshot unter
// public/refs/ liegt, hier eintragen — die Hero-Stage rendert dann das
// Bild statt des CSS-Mockups in `screen`.
type AppScreenshot = { readonly src: string; readonly alt: string } | null;

export const APPS_SHOWCASE = [
  {
    id: 'spin',
    name: 'Spin your song',
    wordmark: 'spin.',
    domain: 'spin.1020.dev',
    href: 'https://spin.1020.dev',
    tag: 'Eigenes Produkt · Mobile App',
    status: 'Live',
    tagline: 'Ein Song pro Tag. Geteilt mit Freunden.',
    desc: 'Jeden Tag ein Song: Sie posten einen Track, Ihre Freunde sehen ihn im Feed, reagieren mit Herz, Kommentar oder Emoji — und hören ihn mit einem Tap direkt in Spotify. Dazu ein Bonus-Spin mit Countdown, wenn der erste Song des Tages schon gesetzt ist. Konzipiert, gestaltet, entwickelt und betrieben komplett im Studio.',
    features: [
      'Täglicher Song mit Countdown & Bonus-Spin',
      'Freundes-Feed mit Herz, Kommentar und Emoji-Reaktionen',
      'Spotify-Anbindung — ein Tap vom Feed in den Player',
      'Push-Benachrichtigungen, Suche und Profil',
    ],
    facts: [
      { label: 'Rolle', value: 'Konzept · Design · Entwicklung · Betrieb' },
      { label: 'Kern', value: 'Täglicher Song · Feed · Spotify' },
      { label: 'Status', value: 'Live unter spin.1020.dev' },
    ],
    screenshot: null as AppScreenshot,
    // Illustrativer In-App-Screen für das Phone-Mockup. Bildet den echten
    // Feed nach (Wortmarke, Datum, Bonus-Spin, Song-Karten, Tab-Bar).
    // Namen und Tracks sind bewusst fiktiv.
    screen: {
      date: 'Samstag · 12. Sep.',
      bonus: 'Bonus-Spin noch 1:58',
      posts: [
        {
          user: 'mara',
          ago: 'vor 10 Min.',
          track: 'Nachtbus',
          artist: 'Leo Winter',
          likes: '2',
          comments: '1',
        },
        {
          user: 'jon',
          ago: 'vor 24 Min.',
          track: 'Goldene Stunde',
          artist: 'Ava Kern',
          likes: '4',
          comments: '3',
        },
        {
          user: 'nik',
          ago: 'vor 1 Std.',
          track: 'Weitwinkel',
          artist: 'Hale & Voss',
          likes: '6',
          comments: '2',
        },
      ],
    },
  },
] as const;

// ============================================
// Apps track — services
// ============================================
export const APPS_SERVICES = [
  {
    num: '01 — Cross-Platform',
    title: 'Eine Codebasis, iOS und Android',
    desc: 'Native Apps für beide Plattformen aus einem Projekt mit React Native und Expo. Nativer Look, echte Gesten, Push, Kamera und Offline-Modus — ohne zwei Teams und ohne doppelten Aufwand.',
    items: [
      'React Native · Expo · TypeScript',
      'iOS & Android aus einer Codebasis',
      'Push, Kamera, Offline, Deep Links',
      'Native Performance, kein WebView',
    ],
  },
  {
    num: '02 — Web & PWA',
    title: 'Die App auch im Browser',
    desc: 'Nicht jede App braucht den Store. Progressive Web Apps laufen im Browser, lassen sich am Homescreen installieren und teilen den Code mit der Store-Version — sofort live, ohne Review.',
    items: [
      'Progressive Web App (installierbar)',
      'Gemeinsamer Code mit der Mobile-App',
      'Next.js für Landing-Page & Web-Version',
      'Kein Store-Review, Updates sofort live',
    ],
  },
  {
    num: '03 — Backend & Release',
    title: 'Von der Beta bis in den Store',
    desc: 'Auth, Datenbank, API und Push-Infrastruktur inklusive. Wir begleiten TestFlight und Beta-Tests, übernehmen die Einreichung in App Store und Play Store und liefern kleine Updates over-the-air.',
    items: [
      'Supabase · Postgres · REST-APIs',
      'Auth, Rollen, In-App-Käufe',
      'TestFlight · Play Console · Review',
      'OTA-Updates & Crash-Monitoring',
    ],
  },
] as const;

// ============================================
// Apps track — methode
// ============================================
export const APPS_METHODE = [
  {
    num: '01',
    title: 'Anfrage & Scope',
    duration: 'Tag 1',
    desc: 'Sie schildern die App-Idee, Zielgruppe und Must-haves. Wir prüfen, ob Cross-Platform, PWA oder beides passt, und legen ein Angebot mit klar abgegrenztem Funktionsumfang vor.',
    cta: { label: 'E-Mail schreiben', href: 'mailto:hallo@1020.dev' },
  },
  {
    num: '02',
    title: 'Prototyp',
    duration: 'Erste Woche',
    desc: 'Klickbarer Prototyp der Kern-Screens direkt am Handy — Navigation, Flows, Look & Feel. Sie testen am eigenen Gerät, bevor eine Zeile Produktionscode entsteht.',
  },
  {
    num: '03',
    title: 'Build & Beta',
    duration: 'Folgende Wochen',
    desc: 'Implementierung in wöchentlichen Releases über TestFlight und Play-Beta. Sie und Ihre Testnutzer haben jede Version am Handy — Feedback fließt direkt in den nächsten Build.',
  },
  {
    num: '04',
    title: 'Release & Updates',
    duration: 'Ab Launch',
    desc: 'Store-Einreichung mit Screenshots, Store-Texten und Datenschutz-Angaben, Begleitung durch den Review. Danach Crash-Monitoring, Analytics und Updates — over-the-air für kleine Fixes, über den Store für große Releases.',
  },
] as const;

// ============================================
// Apps track — Leistungsumfang
// ============================================
export const APPS_SCOPE = {
  pakete: [
    {
      name: 'Bundle „Launch"',
      desc: 'MVP-App + Backend & API + Store-Release in einem Auftrag. Alles, was eine App braucht, um in beiden Stores zu stehen — günstiger als die Einzelbuchung.',
      includes: ['MVP-App (iOS + Android)', 'Backend & API', 'Store-Release'],
    },
  ],
  einmalig: [
    { name: 'MVP-App (iOS + Android)', desc: 'Cross-Platform-App mit 3–5 Kern-Screens, Navigation, Design-System und Auth-Screens. TestFlight und Play-Beta inklusive.', isBase: true, plus: false },
    { name: 'Zusätzlicher Screen / Feature', desc: 'Weitere Screens oder Funktionen — Profil, Einstellungen, Listen, Detailansichten, Kamera-Flows.', isBase: false, plus: true },
    { name: 'Backend & API', desc: 'Datenbank, Auth, REST-API und Storage — Supabase oder Postgres auf EU-Servern, inklusive Rollen und Berechtigungen.', isBase: false, plus: true },
    { name: 'Push & Benachrichtigungen', desc: 'Push-Infrastruktur für iOS und Android, Segmentierung, geplante und ereignisbasierte Nachrichten.', isBase: false, plus: true },
    { name: 'Web-Version / PWA', desc: 'Installierbare Web-Version der App mit gemeinsamer Codebasis, plus Landing-Page mit Next.js.', isBase: false, plus: true },
    { name: 'Store-Release', desc: 'App-Store- und Play-Store-Einreichung: Zertifikate, Screenshots, Store-Texte, Datenschutz-Angaben, Review-Begleitung.', isBase: false, plus: true },
  ],
  laufend: [
    { name: 'Betrieb & Updates', desc: 'EU-Hosting des Backends, OTA-Updates, Crash-Monitoring und Kompatibilität bei neuen iOS- und Android-Versionen.' },
  ],
} as const;

// ============================================
// Apps track — FAQs
// ============================================
export const APPS_FAQS = [
  {
    question: 'Native, Cross-Platform oder PWA — was passt für mein Vorhaben?',
    plainAnswer:
      'Für die meisten KMU-Apps ist Cross-Platform mit React Native und Expo die beste Wahl: eine Codebasis, native Performance auf iOS und Android, Zugriff auf Kamera, Push und Offline-Speicher. Eine PWA reicht, wenn die App vor allem Inhalte zeigt, keine Store-Präsenz braucht und sofort ohne Review live sein soll. Rein native Entwicklung in Swift oder Kotlin lohnt sich nur bei sehr hardwarenahen Anforderungen. Wir empfehlen im Erstgespräch ehrlich, was passt.',
    htmlAnswer:
      'Für die meisten KMU-Apps ist Cross-Platform mit <strong>React Native und Expo</strong> die beste Wahl: eine Codebasis, native Performance auf iOS und Android, Zugriff auf Kamera, Push und Offline-Speicher. Eine <strong>PWA</strong> reicht, wenn die App vor allem Inhalte zeigt, keine Store-Präsenz braucht und sofort ohne Review live sein soll. Rein native Entwicklung in Swift oder Kotlin lohnt sich nur bei sehr hardwarenahen Anforderungen. Wir empfehlen im Erstgespräch ehrlich, was passt.',
  },
  {
    question: 'Wie lange dauert die Entwicklung einer App?',
    plainAnswer:
      'Ein MVP mit 3 bis 5 Kern-Screens ist in 4 bis 6 Wochen in der Beta, inklusive Prototyp und wöchentlichen Test-Releases. Mit Backend, Push und Store-Einreichung rechnen Sie mit 6 bis 10 Wochen bis zum Launch. Der Store-Review bei Apple dauert typischerweise 1 bis 3 Tage, bei Google wenige Stunden bis Tage.',
    htmlAnswer:
      'Ein MVP mit 3–5 Kern-Screens ist in 4–6 Wochen in der Beta, inklusive Prototyp und wöchentlichen Test-Releases. Mit Backend, Push und Store-Einreichung rechnen Sie mit 6–10 Wochen bis zum Launch. Der Store-Review bei Apple dauert typischerweise 1–3 Tage, bei Google wenige Stunden bis Tage.',
  },
  {
    question: 'Was kostet eine App?',
    plainAnswer:
'Das hängt vom Funktionsumfang ab: Anzahl der Screens, ob ein eigenes Backend nötig ist, ob Push, Web-Version und Store-Release dazukommen. Wir veröffentlichen keine Preisliste, sondern legen nach dem kostenlosen Erstgespräch ein Fixpreis-Angebot mit klar abgegrenztem Funktionsumfang vor. Laufender Betrieb mit Hosting, Updates und Monitoring wird monatlich abgerechnet und ist monatlich kündbar.',
    htmlAnswer:
'Das hängt vom Funktionsumfang ab: Anzahl der Screens, ob ein eigenes Backend nötig ist, ob Push, Web-Version und Store-Release dazukommen. Wir veröffentlichen keine Preisliste — nach dem kostenlosen Erstgespräch bekommen Sie ein <strong>Fixpreis-Angebot mit klar abgegrenztem Funktionsumfang</strong>. Was dabei alles im Umfang liegt, sehen Sie in der <a href="#angebot" style="color: var(--accent); text-decoration: underline;">Angebots-Section oberhalb</a>. Laufender Betrieb mit Hosting, Updates und Monitoring wird monatlich abgerechnet und ist monatlich kündbar.',
  },
  {
    question: 'Wie läuft die Veröffentlichung im App Store und Play Store?',
    plainAnswer:
      'Sie legen einen Apple-Developer-Account (jährliche Gebühr) und einen Google-Play-Console-Account (einmalige Gebühr) auf Ihren Namen an, wir übernehmen den Rest: Zertifikate, Signierung, Screenshots, Store-Texte, Datenschutz-Angaben und die Kommunikation im Review. Die App wird unter Ihrem Namen veröffentlicht, nicht unter unserem.',
    htmlAnswer:
      'Sie legen einen Apple-Developer-Account (jährliche Gebühr) und einen Google-Play-Console-Account (einmalige Gebühr) auf Ihren Namen an, wir übernehmen den Rest: Zertifikate, Signierung, Screenshots, Store-Texte, Datenschutz-Angaben und die Kommunikation im Review. Die App wird <strong>unter Ihrem Namen</strong> veröffentlicht, nicht unter unserem.',
  },
  {
    question: 'Wem gehören Code und Store-Accounts?',
    plainAnswer:
      'Ihnen. Der Quellcode liegt in einem Repository, auf das Sie vollen Zugriff haben, die Store-Accounts laufen auf Ihren Namen, und das Backend ist auf Standard-Technologien wie Postgres und Supabase gebaut. Sie können jederzeit mit einem anderen Team weiterarbeiten. Kein Vendor-Lock-in.',
    htmlAnswer:
      'Ihnen. Der Quellcode liegt in einem Repository, auf das Sie vollen Zugriff haben, die Store-Accounts laufen auf Ihren Namen, und das Backend ist auf Standard-Technologien wie Postgres und Supabase gebaut. Sie können jederzeit mit einem anderen Team weiterarbeiten. Kein Vendor-Lock-in.',
  },
  {
    question: 'Was ist Spin your song?',
    plainAnswer:
      'Spin your song ist die eigene Mobile-App von 1020.dev, erreichbar unter spin.1020.dev. Das Prinzip: ein Song pro Tag. Sie posten einen Track, Ihre Freunde sehen ihn im Feed, reagieren mit Herz, Kommentar oder Emoji und hören ihn mit einem Tap direkt in Spotify. Dazu gibt es einen Bonus-Spin mit Countdown. Wir haben die App konzipiert, gestaltet, entwickelt und betreiben sie laufend — sie zeigt, wie wir Apps bauen und veröffentlichen.',
    htmlAnswer:
      'Spin your song ist die eigene Mobile-App von 1020.dev, erreichbar unter <a href="https://spin.1020.dev" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">spin.1020.dev</a>. Das Prinzip: <strong>ein Song pro Tag</strong>. Sie posten einen Track, Ihre Freunde sehen ihn im Feed, reagieren mit Herz, Kommentar oder Emoji und hören ihn mit einem Tap direkt in Spotify. Dazu ein Bonus-Spin mit Countdown. Wir haben die App konzipiert, gestaltet, entwickelt und betreiben sie laufend — sie zeigt, wie wir Apps bauen und veröffentlichen.',
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
    'Studio in Wien für Webentwicklung mit SEO und AEO, Software-Automation mit KI und Mobile Apps — für KMU in ganz Österreich. Sichtbar in Google, zitiert in ChatGPT, Perplexity und Claude.',
  // Web-Track-spezifische Beschreibung (Meta-Description von /web)
  webDescription:
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
