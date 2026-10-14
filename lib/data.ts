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
  // Die Headline zählt `ideas` durch: `ideas[0]` (Verb + Label) steht im
  // Titel und wird nacheinander ersetzt. Jede Idee fällt als Tropfen ins
  // "Glas"; `fill` = Füllstand des Hero danach (0–1).
  title: 'Ist ein leerer Raum und eine Idee noch ein leerer Raum?',
  ideas: [
    { verb: 'Ist', label: 'eine Idee', count: 1, fill: 0.12 },
    { verb: 'Sind', label: 'zwei Ideen', count: 2, fill: 0.26 },
    { verb: 'Sind', label: 'drei Ideen', count: 3, fill: 0.4 },
    { verb: 'Sind', label: 'hundert Ideen', count: 100, fill: 0.94 },
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
  },
  {
    id: 'ios',
    label: 'iOS-Apps',
    text: 'Swift, SwiftUI und Apple Intelligence entwickeln sich jedes Jahr weiter. Wir testen Neuerungen früh, berichten darüber und bauen Apps, die sie sinnvoll nutzen.',
    points: ['Swift & SwiftUI', 'On-Device-Modelle', 'App Store & TestFlight'],
  },
  {
    id: 'konzepte',
    label: 'Konzepte',
    text: 'Aus Beobachtung wird ein Prototyp. Wir setzen Konzepte um, von der ersten Skizze bis zur laufenden Anwendung.',
    points: ['Skizze', 'Prototyp', 'Produkt'],
  },
] as const;

export const FOCUS_HEAD = {
  title: 'Was uns beschäftigt.',
  sub: 'Drei Felder, ein Anspruch: verstehen, was sich bewegt, und es bauen.',
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
    id: 'clausl',
    domain: 'Clausl KI',
    href: null,
    tag: 'Legal AI · Arbeitsrecht',
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
// Eigene App — Spin your song (Referenz auf der Home + /apps)
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
