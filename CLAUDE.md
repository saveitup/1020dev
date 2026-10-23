# 1020.dev — Context für Claude Code

Production-Site für **1020.dev**: ein Studio von KI-begeisterten Codern aus Wien. Berichtet über die neuesten Updates in **Legal AI** und **iOS-Apps** und setzt Konzepte um. Tagline: "Ein Studio von KI-begeisterten Codern."

Die Site ist bewusst knapp: keine Preise, keine Methoden-/FAQ-Sections, kein Telefon und keine Adresse außerhalb des Impressums.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript strict**
- **Custom CSS** in `app/globals.css` (kein Tailwind)
- **next/font/google**: Instrument Sans (variabel, inkl. Breitenachse) + Fragment Mono via CSS-Variablen `--font-sans`, `--font-mono`
- **next/image** für Referenz-Screenshots
- **Anthropic API** server-side über `/api/audit` (Altlast: das Audit-Widget ist nicht mehr auf der Site, Route und Mail-Tracking bestehen weiter)

## Architektur-Prinzipien

### 1. Single Source of Truth: `lib/data.ts`

Alle Inhalte leben in `lib/data.ts` als `const … as const`:

- `ANNOUNCEMENT` → grüne Leiste über der Nav (`Announcement`)
- `HERO`, `PRODUCTS_HEAD`/`PRODUCTS`, `STUDIO`, `FOCUS_HEAD`/`FOCUS`, `REFS_HEAD`/`REFS`, `CONTACT` → Sections der Startseite
- `FOCUS` → zusätzlich `OrganizationSchema` (`knowsAbout`) und OG-Image
- `CONTACT` → Kontakt-Karte auf der Home, auf `/apps` und CTA unter Journal-Artikeln
- `PRODUCTS` → die zwei Produktkarten direkt unter dem Hero (Spin, Clausl KI), Copy von deren Landingpages
- `APPS_SHOWCASE`, `APPS_PAGE` → eigene App „Spin your song“: `/apps`-Showcase, `PhoneMock`, `AppSchema`
- `SITE` → überall (Booking-URL, E-Mail, Tagline, Impressumsdaten)

**Wenn du Inhalte änderst: immer in `lib/data.ts`.** `public/llms.txt` muss manuell synchron gehalten werden.

### 2. Server vs. Client Components

Default ist **Server Component**. `'use client'` nur wenn echtes State/Effects/Browser-APIs nötig sind:

| Component | Type | Warum |
|---|---|---|
| `Announcement`, `Nav`, `Products`, `Studio`, `References`, `ContactCard`, `AppShowcase`, `PhoneMock`, `Footer`, Schemas | Server | Pure Render |
| `Hero` | Client | Zählt die Ideen-Stufen hoch, Tropfen per Web Animations API, füllt das „Glas“ |
| `Focus` | Client | Pill-Akkordeon mit Auto-Advance |
| `InView` | Client | IntersectionObserver, spielt den Auftritt der Produktkarten ab |
| `Splash` | Client | sessionStorage + Timer |
| `CookieBanner`, `CookieSettingsLink`, `GoogleTag` | Client | Consent-State |

### 3. API-Key-Sicherheit

`ANTHROPIC_API_KEY` ist ausschließlich in `.env.local` und wird **nur** in `app/api/audit/route.ts` (Server) verwendet. Niemals in Client Components, niemals direkt zu `api.anthropic.com` vom Browser callen. Wenn du andere LLM-Features hinzufügst, immer als Route Handler.

### 4. CSS-Konventionen

- Design-Tokens als CSS-Variablen in `:root` von `globals.css`
- Wichtige Tokens: `--paper` (`#FAFAF9`), `--sand`, `--ink` (`#0D1016`), `--muted` (`#68655E`), `--green` (`#003D26`), `--line/line-2`, `--radius/-lg`, `--section-y`
- Bausteine: `.btn` (Pill mit Kreis-Icon, Varianten `--light`, `--ghost`, `--sm`), `.hook-link` (↳-Link), `.section`, `.section-head(--center|--split)`, `.section-title`, `.section-sub`
- Eine Schrift in Regular (400) auch für große Headlines, leicht verengt (`font-stretch: 90–92%`), negatives Tracking
- Keine globalen Resets ändern, keine Reset-Bibliotheken

## Branding

- **Domain**: 1020.dev (Wiener Postleitzahl Leopoldstadt)
- **Vorbild**: Legora (legora.com) — warmes Off-White, eine Grotesk in Regular, Tannengrün als einziger Akzent, Pill-Buttons, ruhige Flächen
- **Logo**: `1020.dev` als Wordmark, Punkt in Grün (auf dunklem Grund in Sand `--glow`), `dev` gedimmt
- **Hero**: Gleichung (`HERO.equation`), am Rechenzeichen ausgerichtet (CSS-Grid, `+` über `=`): `leerer Raum = leerer Raum` → `+ 1 Idee ≠ leerer Raum` → 2 → 3 → `+ 100 Ideen = 1020.dev`. Alle Tropfen fallen von oben, verteilt über die Breite (hinter dem Text); jeder Aufprall zählt. Die ersten drei bilden sich an drei Stellen am oberen Rand (links, rechts, Mitte) einzeln und fallen mit Schwerkraft-Kurve (Ringe, Kronen-Spritzer, Rückstoß-Tropfen), der Pegel federt hoch und die Oberfläche schwappt. Danach regnet es über die ganze Breite immer dichter bis 100 (am Ende auslaufend), der Pegel steigt linear bis randvoll; am Ende verdunstet „leerer Raum“ Buchstabe für Buchstabe, „1020“ und „dev“ steigen in derselben Grid-Zelle auf (das alte Wort hält unsichtbar die Spaltenbreite, kein Sprung) und der Punkt fällt als letzter Tropfen. Timing-Konstanten oben in `Hero.tsx`. Startet leer, erst nach dem Splash; bei „Bewegung reduzieren“ direkt der Endzustand
- **Produktkarten** (`Products`, `#produkte`): Spin und Clausl KI erscheinen im Look ihrer eigenen Websites, nicht im 1020-Look — Inter (+ JetBrains Mono für Tags) über `--font-inter`/`--font-jbmono`, Weiß, Verlaufsschrift, Pill, runde Knöpfe, gekipptes Handy, fünfteiliger Farbstreifen. Spin grün (`#17571e`), Clausl orange (`#c4461a`). Alle Markenwerte nur im Scope `.pc` in `globals.css`; bei Änderungen an spin.1020.dev oder clausl.1020.dev hier nachziehen
- **Sprache**: alle UI-Texte auf **Deutsch (Österreich)**, formell ("Sie", nicht "Du"). Ausnahme: die Produktkarten zitieren die Copy der Produkte — Spin spricht seine Nutzer mit "du" an
- **Tone**: ehrlich, präzise, wenig Marketing-Sprech, nie Buzzwords ohne Substanz

## Routing & Sections

- **`/` (Home)** ([app/page.tsx](app/page.tsx)): `Hero` → `Products` (Spin & Clausl KI) → `Studio` → `Focus` (Schwerpunkte) → `References` → `ContactCard` → `Footer`.
- **`/apps`** ([app/apps/page.tsx](app/apps/page.tsx)): schlanker Showcase der eigenen App „Spin your song“ (`AppShowcase` mit `PhoneMock`) → `ContactCard` → `Footer`. Bewusst ohne Methode, Pakete oder FAQ.
- **`/journal`**, **`/journal/[slug]`**: Artikel aus `content/journal/*.md`.
- **`/impressum`**, **`/datenschutz`**, **`/agb`**, **`/danke`**, **`/abmelden`**: Rechtliches und Bestätigungsseiten (`.legal`-Layout).
- Die früheren Track-Seiten `/web`, `/automation`, `/agenten` (und `/concepts`) leiten per 308 auf `/` um (`next.config.mjs → redirects`).

`Splash`, `Announcement` und `Nav` sind global (Layout-Level), ebenso `OrganizationSchema` und `WebsiteSchema`.

## Bekannte Todos / offene Punkte

- [x] Rate-Limiting für `/api/audit` und `/api/audit/track` — zentrales `lib/ratelimit.ts`. Upstash Redis (sliding-window) wenn `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` gesetzt; sonst best-effort in-memory Fallback.
- [x] Custom `app/not-found.tsx` und `app/error.tsx`
- [x] Upstash-Database angelegt (Vars in Vercel hinterlegen, falls noch nicht passiert)
- [x] Domain `1020.dev` registriert
- [x] `ANTHROPIC_API_KEY` in Vercel Production gesetzt
- [x] Cal.com-Slug `cal.com/1020dev` anlegen (Event `30min` → `cal.com/1020dev/30min`)
- [ ] Resend: Domain `1020.dev` per DNS verifizieren, dann `RESEND_FROM=audit@1020.dev` in Vercel setzen
- [ ] `CRON_SECRET` generieren (`openssl rand -base64 32`) und in Vercel Production setzen
- [x] Open-Graph-Image — dynamisch über `app/opengraph-image.tsx` (Edge Runtime, 1200×630)

## Was du NICHT tun sollst

- ❌ Nicht zu Tailwind migrieren (Custom-CSS ist gewollt)
- ❌ Nicht den Anthropic-Call in den Browser verlegen
- ❌ Nicht Inhalte direkt in Components hardcoden — immer über `lib/data.ts`
- ❌ Nicht CSS-Variablen-Namen ändern (sonst bricht globals.css an mehreren Stellen)
- ❌ Keine Preise, Telefonnummer oder Adresse auf Marketing-Seiten — nur im Impressum
- ❌ Nicht den Splash entfernen ohne explizite Aufforderung — er ist Brand-Element, nicht nur Deko
- ❌ Keine Emojis in UI-Texten (auch nicht in Buttons), Status-Icons (✓, ↗, →) sind ok
- ❌ Keine externen Component-Bibliotheken (shadcn, MUI, Chakra etc.) — Custom CSS bleibt
- ❌ Nicht "Du" verwenden — formelles "Sie" ist Standard für die KMU-Zielgruppe (einzige Ausnahme: zitierte Spin-Copy in den Produktkarten)

## Setup für Dev

```bash
npm install
cp .env.example .env.local   # ANTHROPIC_API_KEY eintragen
npm run dev                   # http://localhost:3000
```

## Git-Workflow

- **Nach jeder Code-Änderung sofort committen und pushen** (`git add … && git commit -m "…" && git push`). Keine ungespeicherten lokalen Änderungen liegen lassen.
- Commit-Messages auf Englisch, Imperativ ("Add pricing section", nicht "Added")
- Conventional Commits (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`)
- Vor Push: `npm run build` lokal — wenn Build bricht, fixen vor Commit
