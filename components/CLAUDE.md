# components/

## Regeln

1. **Default Server Component.** `'use client'` nur wenn echtes State, Effects, Browser-APIs oder Event-Handler nötig sind.
2. **Datenimport aus `@/lib/data`**, nicht hardcoden. Der `as const` macht alle Inhalte typsicher.
3. **Keine eigenen `<style>`-Blöcke** in Components. Alle Styles in `app/globals.css`.
4. **Naming**: PascalCase Files (`Hero.tsx`), benannte Exports (`export function Hero()`), kein Default-Export.
5. **Keine `any` Types.** Wenn TypeScript meckert, korrekt typen — nicht via `// @ts-ignore` umgehen.
6. **Keine Inline-Styles** außer für CSS-Custom-Properties (z.B. `style={{ '--score': value } as CSSProperties}` im AuditWidget).

## Pattern für neue Section

```tsx
// components/MyNewSection.tsx
import { MY_DATA } from '@/lib/data';

export function MyNewSection() {
  return (
    <section className="section" id="meine-section">
      <div className="section-head">
        <div className="section-tag">Mein Tag</div>
        <h2 className="section-title">Headline.</h2>
        <p className="section-sub">Sub.</p>
      </div>
      {/* content */}
    </section>
  );
}
```

Dann in `app/page.tsx` einfügen und Nav-Link in `components/Nav.tsx` ergänzen.

## Existing Components

- `Splash.tsx` (client) — sessionStorage skip + 2.2s timer + ESC/click dismiss
- `Nav.tsx` (client) — Sticky Top-Nav mit Wordmark, Section-Links pro Track, Termin-CTA; auf Mobile Toggle-Menü (`nav-toggle` / `nav-menu`) mit Section-Links plus weiteren Tracks
- `Hero.tsx` (client) — Two-Column-Hero, rechte Seite Slideshow mit Klick-Nav auf Dots
- `AuditWidget.tsx` (client) — Form → POST `/api/audit` → Score-Circle + Checks + Empfehlungen
- `Methode.tsx` (server) — 4-Step Grid
- `Services.tsx` (server) — 3-Card Triptychon
- `Scope.tsx` (server) — Leistungsumfang in der Section `#angebot`, **ohne Beträge** (die Site veröffentlicht keine Preise)
- `FAQ.tsx` (client) — Single-Open Akkordeon mit `htmlAnswer` via `dangerouslySetInnerHTML`
- `FaqStructuredData.tsx` (server) — JSON-LD `FAQPage` Schema in `<head>`
- `Footer.tsx` (server) — Wordmark, Tagline, Track-Links (`footer-nav`), Kontakt- und Rechtslinks

## ⚠️ FAQ-Content-Sicherheit

`FAQ.tsx` rendert `htmlAnswer` via `dangerouslySetInnerHTML`. Das ist OK weil der Inhalt aus `lib/data.ts` (vom Entwickler kuratiert) kommt, nie aus User-Input. **Falls jemals User-Input gerendert werden soll, vorher mit DOMPurify sanitizen.**
