// ============================================
// Announcement bar (über der Navigation, alle Seiten)
// ============================================
export const ANNOUNCEMENT = {
  text: 'Im Fokus: Legal AI und iOS-Apps',
  linkLabel: 'Mehr erfahren',
  href: '/#schwerpunkte',
} as const;

// ============================================
// Home — Hero
// ============================================
export const HERO = {
  eyebrow: 'Studio · Wien',
  // Headline als Gleichung: "leerer Raum = leerer Raum" → "+ 1 Idee ≠ …"
  // → … → "+ 100 Ideen = 1020.dev". Jede Idee fällt als Tropfen ins "Glas";
  // `fill` = Füllstand des Hero, wenn die Stufe erreicht ist (0–1).
  equation: {
    term: 'leerer Raum',
    one: 'Idee',
    many: 'Ideen',
    // Für Screenreader statt der Rechenzeichen
    ariaLabel: 'Ein leerer Raum plus hundert Ideen ist kein leerer Raum mehr, sondern 1020.dev.',
  },
  ideas: [
    { count: 1, fill: 0.07 },
    { count: 2, fill: 0.13 },
    { count: 3, fill: 0.19 },
    { count: 100, fill: 0.94 },
  ],
  lede: 'Wir berichten über die neuesten Updates in Legal AI und iOS-Apps — und setzen Konzepte um.',
} as const;

// ============================================
// Home — Studio (zwei kurze Absätze, bewusst knapp)
// ============================================
export const STUDIO = {
  title: 'Das Studio',
  paragraphs: [
    '1020.dev ist ein Studio aus der Wiener Leopoldstadt, benannt nach ihrer Postleitzahl. Hier arbeiten Coder, die sich für künstliche Intelligenz begeistern und wissen wollen, was sie tatsächlich kann.',
    'Wir lesen mit, testen früh und berichten über die neuesten Updates in Legal AI und iOS-Apps. Wenn eine Idee trägt, setzen wir sie um.',
  ],
} as const;

// ============================================
// Home — Schwerpunkte (Pill-Akkordeon)
// ============================================
export const FOCUS = [
  {
    id: 'legal-ai',
    label: 'Legal AI',
    text: 'Sprachmodelle verändern, wie Recht recherchiert, geprüft und geschrieben wird. Wir verfolgen neue Modelle, Werkzeuge und Regulierung und berichten, was davon in der Praxis trägt.',
    points: ['Modelle & Werkzeuge', 'Recherche & Vertragsprüfung', 'EU AI Act & DSGVO'],
    link: { label: 'Clausl KI ansehen', href: 'https://clausl.1020.dev' },
  },
  {
    id: 'ios',
    label: 'iOS-Apps',
    text: 'Swift, SwiftUI und Apple Intelligence entwickeln sich jedes Jahr weiter. Wir testen Neuerungen früh, berichten darüber und bauen Apps, die sie sinnvoll nutzen.',
    points: ['Swift & SwiftUI', 'On-Device-Modelle', 'App Store & TestFlight'],
    link: { label: 'Spin your song ansehen', href: '/apps' },
  },
  {
    id: 'konzepte',
    label: 'Konzepte',
    text: 'Aus Beobachtung wird ein Prototyp. Wir setzen Konzepte um, von der ersten Skizze bis zur laufenden Anwendung.',
    points: ['Skizze', 'Prototyp', 'Produkt'],
    link: null,
  },
] as const;

export const FOCUS_HEAD = {
  title: 'Was uns beschäftigt.',
  sub: 'Drei Felder, ein Anspruch: verstehen, was sich bewegt, und es bauen.',
} as const;

// ============================================
// Eigene Produkte — direkt unter dem Hero: drei Felder (Legal AI, iOS,
// FinanceEd) füllen sich beim Scrollen in den Markenfarben, darunter die
// drei Websites nebeneinander, jede im Look ihrer Landingpage (Farben,
// Schrift, Copy von clausl.1020.dev, spin.1020.dev, alpenbroker.com).
// Die Copy ist bewusst die der Produkte — Spin und AlpenBroker sprechen
// ihre Nutzer mit "du" an.
// Reihenfolge wie die Felder: Clausl (orange), Spin (grün), AlpenBroker (rot).
// ============================================
export const PRODUCTS_HEAD = {
  eyebrow: 'Eigene Produkte',
  title: 'Gebaut bei 1020.dev.',
  sub: 'Drei Felder, drei eigene Produkte.',
} as const;

export const PRODUCTS = {
  spin: {
    id: 'spin',
    name: 'Spin',
    field: 'iOS',
    wordmark: { src: '/brands/spin-wordmark.svg', alt: 'spin.' },
    badge: 'Gratis',
    badgeText: 'Fürs iPhone — jetzt laden',
    titleStart: 'Ein Song pro',
    titleAccent: 'Tag.',
    lede: 'Jeden Tag um 17:30 öffnet sich das Fenster. Du teilst einen Song, erst dann siehst du, was deine Freunde hören.',
    primary: { label: 'Im App Store laden', href: 'https://spin.1020.dev/go/landing?from=1020dev' },
    secondary: { label: 'spin.1020.dev', href: 'https://spin.1020.dev' },
    fieldProduct: 'Spin',
    note: 'Kostenlos · iPhone · iOS 17 oder neuer',
    // Echter Feed-Screenshot (andere Nutzer weichgezeichnet), im Handy-Rahmen der Landingpage
    screenshot: '/apps/spin-feed.jpg',
  },
  clausl: {
    id: 'clausl',
    name: 'Clausl',
    field: 'Legal AI',
    fieldProduct: 'Clausl KI',
    mark: { src: '/brands/clausl-mark.svg', alt: '' },
    badge: 'Beta',
    badgeText: 'Offene Beta — jetzt kostenlos testen',
    titleStart: 'Prüft wie ein',
    titleAccent: 'Mensch.',
    lede: 'Der KI-Assistent für österreichisches Arbeitsrecht. Er löst jeden Fall nach Prüfschema, Merkmal für Merkmal, und belegt jede Fundstelle.',
    primary: { label: 'Jetzt testen', href: 'https://clausl.1020.dev/login.html#registrieren' },
    secondary: { label: 'clausl.1020.dev', href: 'https://clausl.1020.dev' },
    note: null,
    // Nachbau des Handy-Screens von clausl.1020.dev (Texte 1:1 von dort)
    screen: {
      question: 'Wir kündigen eine Angestellte im Handel nach einem Jahr. Welche Frist gilt?',
      caption: 'Merkmal für Merkmal · Fundstellen belegt',
      scheme: 'Kündigungsfrist · AngG',
      checks: [
        { label: 'Angestellte', ref: '§ 1 AngG' },
        { label: 'Kündigung durch Arbeitgeberin', ref: '§ 20 AngG' },
        { label: 'Ein Dienstjahr', ref: 'unter zwei Jahren' },
        { label: 'KV Handel', ref: 'verweist aufs AngG' },
      ],
      result: { label: 'Ergebnis', value: '6 Wochen' },
      proof: '✓ § 20 Abs. 2 AngG · RIS belegt',
    },
  },
  alpenbroker: {
    id: 'alpenbroker',
    name: 'AlpenBroker',
    nameAccent: 'Alpen',
    field: 'FinanceEd',
    fieldProduct: 'AlpenBroker',
    mark: { src: '/brands/alpenbroker-mark.svg', alt: '' },
    badge: null,
    badgeText: 'Lerne. Verstehe. Investiere in Österreich.',
    titleStart: 'Heimische Wirtschaft',
    titleAccent: 'stärken.',
    lede: 'AlpenBroker hilft dir, den österreichischen Aktienmarkt zu verstehen. Lerne die 20 wichtigsten ATX-Unternehmen kennen, simuliere dein erstes Portfolio und entdecke, warum Investieren in Österreich zählt.',
    primary: { label: 'Kostenlos starten', href: 'https://alpenbroker.com/register' },
    secondary: { label: 'alpenbroker.com', href: 'https://alpenbroker.com' },
    noteLabel: 'Hinweis:',
    note: 'AlpenBroker ist eine Lern- und Simulationsplattform. Die Inhalte stellen keine Anlageberatung dar.',
    // Nachbau der mobilen Ansicht von alpenbroker.com: Kursleiste, ATX-Chart,
    // Werteliste. Kurse sind eine feste Momentaufnahme (Deko, keine Live-Daten).
    screen: {
      ticker: [
        { symbol: 'ATS', price: '€139.00', change: '-1.00%', up: false },
        { symbol: 'BG', price: '€155.40', change: '+0.87%', up: true },
        { symbol: 'CAI', price: '€21.80', change: '+0.47%', up: true },
        { symbol: 'DOC', price: '€196.00', change: '-0.81%', up: false },
        { symbol: 'EBS', price: '€104.10', change: '-0.57%', up: false },
        { symbol: 'EVN', price: '€29.50', change: '+0.51%', up: true },
        { symbol: 'LNZ', price: '€10.42', change: '-1.70%', up: false },
      ],
      index: 'ATX Index',
      value: '6 270,26',
      change: '+6.31',
      changePct: '(+0.10%)',
      // Verlauf 0–1, grob wie der Chart auf der Website
      chart: [
        0.3, 0.24, 0.2, 0.34, 0.42, 0.47, 0.44, 0.52, 0.56, 0.53, 0.58, 0.62, 0.57, 0.6,
        0.55, 0.5, 0.58, 0.63, 0.6, 0.66, 0.62, 0.68, 0.64, 0.7, 0.66, 0.74, 0.69, 0.78,
        0.72, 0.86, 0.8, 0.66, 0.7, 0.58, 0.62, 0.5, 0.54, 0.4, 0.36, 0.12,
      ],
      caption: 'Wiener Börse · ATX · 3 Monate',
      listTitle: 'ATX-Werte',
      market: 'Wiener Börse',
      stocks: [
        { name: 'Erste Group', symbol: 'EBS', price: '€104.10', change: '-0.57%', up: false },
        { name: 'BAWAG', symbol: 'BG', price: '€155.40', change: '+0.87%', up: true },
        { name: 'DO & CO', symbol: 'DOC', price: '€196.00', change: '-0.81%', up: false },
        { name: 'EVN', symbol: 'EVN', price: '€29.50', change: '+0.51%', up: true },
      ],
    },
  },
} as const;

// ============================================
// References
// ============================================
export const REFS_HEAD = {
  title: 'Referenzen',
  sub: 'Ausgewählte Arbeiten aus dem Studio.',
} as const;

export const REFS = [
  {
    id: 'asamer',
    domain: 'asamer.cz',
    href: 'https://asamer.cz',
    tag: 'Industrie · CEE',
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
] as const;

// ============================================
// Eigene App — Spin your song (/apps; auf der Home als Produktkarte, siehe PRODUCTS)
// ============================================
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
    desc: 'Jeden Tag ein Song: Sie posten einen Track, Ihre Freunde sehen ihn im Feed, reagieren mit Herz, Kommentar oder Emoji — und hören ihn mit einem Tap direkt in Spotify. Ist der Song des Tages gesetzt, gibt es eine Zugabe. Konzipiert, gestaltet, entwickelt und betrieben komplett im Studio.',
    features: [
      'Täglicher Song mit Countdown & Zugabe',
      'Freundes-Feed mit Herz, Kommentar und Emoji-Reaktionen',
      'Spotify-Anbindung — ein Tap vom Feed in den Player',
      'Musik-DNA: Tagessongs, Top-Künstler und Jahrzehnt auf einen Blick',
      'Push-Benachrichtigungen, Suche und Profil',
    ],
    facts: [
      { label: 'Rolle', value: 'Konzept · Design · Entwicklung · Betrieb' },
      { label: 'Kern', value: 'Täglicher Song · Feed · Spotify' },
      { label: 'Status', value: 'Live unter spin.1020.dev' },
    ],
    // Echte Screenshots (iPhone, 1179×2556). Im Feed sind Namen und Avatare
    // anderer Nutzer weichgezeichnet — vor dem Austausch ebenso verfahren.
    screenshots: [
      {
        src: '/apps/spin-feed.jpg',
        alt: 'Spin your song — Feed mit dem Song des Tages, Reaktionen und Spotify-Button',
      },
      {
        src: '/apps/spin-dna.jpg',
        alt: 'Spin your song — Musik-DNA mit Tagessongs, Künstlern und Likes als Helix',
      },
    ],
  },
] as const;

// Texte rund um den Showcase auf /apps
export const APPS_PAGE = {
  eyebrow: 'Eigenes Produkt · App',
  cta: 'App öffnen',
  featuresTitle: 'Was die App kann.',
} as const;

// ============================================
// Kontakt-Karte (Home + Journal-Artikel)
// ============================================
export const CONTACT = {
  title: 'Eine Idee für Legal AI oder eine App?',
  text: 'Schreiben Sie uns. Wir antworten persönlich.',
} as const;

// ============================================
// Site config
// ============================================
export const SITE = {
  name: '1020.dev',
  url: 'https://1020.dev',
  tagline: 'Ein Studio von KI-begeisterten Codern.',
  description:
    '1020.dev ist ein Studio von KI-begeisterten Codern aus Wien. Wir berichten über die neuesten Updates in Legal AI und iOS-Apps und setzen Konzepte um.',
  bookingUrl: 'https://cal.com/1020dev/30min',
  email: 'hallo@1020.dev',
  location: 'Wien · Leopoldstadt',
  // ----- Kontakt & Adresse (nur für Impressum — nicht im Marketing zeigen) -----
  contact: {
    phone: '+4369911209087',         // E.164 für tel:-Links
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
  legal: {
    owner: 'Maximilian Asamer',
    legalForm: 'Einzelunternehmen',
  },
} as const;
