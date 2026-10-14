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
  title: 'Ein Studio von KI-begeisterten Codern.',
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
  bookingUrl: 'https://cal.eu/1020dev/erstgespraech',
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
