# components/

## Regeln

1. **Default Server Component.** `'use client'` nur wenn echtes State, Effects, Browser-APIs oder Event-Handler nötig sind.
2. **Datenimport aus `@/lib/data`**, nicht hardcoden. Der `as const` macht alle Inhalte typsicher.
3. **Keine eigenen `<style>`-Blöcke** in Components. Alle Styles in `app/globals.css`.
4. **Naming**: PascalCase Files (`Hero.tsx`), benannte Exports (`export function Hero()`), kein Default-Export.
5. **Keine `any` Types.** Wenn TypeScript meckert, korrekt typen — nicht via `// @ts-ignore` umgehen.
6. **Keine Inline-Styles** außer für CSS-Custom-Properties (z.B. `style={{ '--progress': value } as CSSProperties}`).

## Pattern für neue Section

```tsx
// components/MyNewSection.tsx
import { MY_DATA } from '@/lib/data';

export function MyNewSection() {
  return (
    <section className="section" id="meine-section" aria-labelledby="meine-section-title">
      <header className="section-head section-head--center">
        <h2 id="meine-section-title" className="section-title">{MY_DATA.title}</h2>
        <p className="section-sub">{MY_DATA.sub}</p>
      </header>
      {/* content */}
    </section>
  );
}
```

Dann in `app/page.tsx` einfügen und Nav-Link in `components/Nav.tsx` ergänzen.

## Existing Components

- `Splash.tsx` (client) — sessionStorage skip + 2.2s timer + ESC/click dismiss
- `Announcement.tsx` (server) — grüne Leiste über der Nav (`ANNOUNCEMENT`)
- `Nav.tsx` (server) — Links links, Wordmark mittig, Kontakt + Pill-CTA rechts
- `Hero.tsx` (client) — Frage-Headline mit hochzählendem Verb/Ideen-Wort; jede Idee fällt als Tropfen (Web Animations API, imperativ in `.glass-drops`) ins „Glas“, der Pegel steigt je Stufe (`HERO.ideas[].fill`); wartet auf `body.ready`
- `Studio.tsx` (server) — Titel links, zwei Textspalten rechts (`STUDIO`)
- `Focus.tsx` (client) — Pill-Akkordeon mit SVG-Illustrationen und Auto-Advance (`FOCUS`)
- `References.tsx` (server) — 2-Spalten-Grid, Screenshot im Passepartout, zweites Bild beim Hover (`REFS`)
- `ContactCard.tsx` (server) — grüne Karte mit dekorativem Swift-Snippet (`CONTACT`)
- `AppShowcase.tsx` (server) — `/apps`: Intro + Phone-Mockup, Features, Eckdaten (`APPS_SHOWCASE`, `APPS_PAGE`)
- `PhoneMock.tsx` (server) — CSS-Smartphone-Rahmen um einen echten App-Screenshot
- `Footer.tsx` (server) — Wordmark + drei Link-Spalten
- `Icons.tsx`, `Wordmark.tsx` — kleine geteilte Bausteine
- `OrganizationSchema.tsx`, `WebsiteSchema.tsx`, `ArticleSchema.tsx`, `AppSchema.tsx` (server) — JSON-LD
- `CookieBanner.tsx`, `CookieSettingsLink.tsx`, `GoogleTag.tsx` (client) — Consent + Tracking
