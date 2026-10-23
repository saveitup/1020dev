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
// Eigene Produkte — direkt unter dem Hero, jedes im Look seiner Website
// (Farben, Schrift, Copy von spin.1020.dev bzw. clausl.1020.dev).
// Die Copy ist bewusst die der Produkte — Spin spricht seine Nutzer mit
// "du" an, Clausl mit "Sie".
// ============================================
export const PRODUCTS_HEAD = {
  eyebrow: 'Eigene Produkte',
  title: 'Gebaut bei 1020.dev.',
  sub: 'Was wir beobachten, bauen wir selbst: eine App fürs iPhone und eine KI fürs Arbeitsrecht.',
} as const;

export const PRODUCTS = {
  spin: {
    name: 'Spin',
    wordmark: { src: '/brands/spin-wordmark.svg', alt: 'spin.' },
    badge: 'Gratis',
    badgeText: 'Fürs iPhone — jetzt laden',
    titleStart: 'Ein Song pro',
    titleAccent: 'Tag.',
    lede: 'Jeden Tag um 17:30 öffnet sich das Fenster. Du teilst einen Song, erst dann siehst du, was deine Freunde hören.',
    primary: { label: 'Im App Store laden', href: 'https://spin.1020.dev/go/landing?from=1020dev' },
    secondary: { label: 'spin.1020.dev', href: 'https://spin.1020.dev' },
    note: 'Kostenlos · iPhone · iOS 17 oder neuer',
    // Echter Feed-Screenshot (andere Nutzer weichgezeichnet), im Handy-Rahmen der Landingpage
    screenshot: '/apps/spin-feed.jpg',
  },
  clausl: {
    name: 'Clausl',
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
  {
    id: 'alpenbroker',
    domain: 'alpenbroker.com',
    href: 'https://alpenbroker.com',
    tag: 'Finanzbildung · AT',
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
