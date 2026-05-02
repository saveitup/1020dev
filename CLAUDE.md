# 1020.dev — Context für Claude Code

Production-Site für **1020.dev**: Webentwicklung, SEO und Answer-Engine-Optimization (AEO) für KMU in Wien und Österreich. Tagline: "Sichtbar bleiben, wenn niemand mehr klickt."

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript strict**
- **Custom CSS** in `app/globals.css` (~1500 Zeilen, kein Tailwind)
- **next/font/google** (DM Sans + DM Mono via CSS-Variablen `--font-dm-sans`, `--font-dm-mono`)
- **next/image** für Reference-Screenshots
- **Anthropic API** server-side über `/api/audit` (Audit-Widget)

## Architektur-Prinzipien

### 1. Single Source of Truth: `lib/data.ts`

Alle Inhalte (FAQs, Refs, Services, Methode, Preise, Site-Config) leben in `lib/data.ts` als `const … as const`. Werden von mehreren Components verwendet:

- `FAQS` → `FAQ` Component (UI) + `FaqStructuredData` (JSON-LD für AEO)
- `PRICING` → `Pricing` Component + Antwort in `FAQS[2].htmlAnswer`
- `REFS` → `Hero` Slideshow
- `SITE` → überall (Booking-URL, E-Mail, Tagline, Standort)

**Wenn du Inhalte änderst: immer in `lib/data.ts`.** Niemals direkt in Components hardcoden — sonst läuft das JSON-LD-Schema asynchron zur UI und AEO-Crawler bekommen falsche Infos.

### 2. Server vs. Client Components

Default ist **Server Component**. `'use client'` nur wenn echtes State/Effects/Browser-APIs nötig sind:

| Component | Type | Warum |
|---|---|---|
| `Nav`, `Methode`, `Services`, `Pricing`, `Footer`, `FaqStructuredData` | Server | Pure Render |
| `Splash` | Client | sessionStorage + Timer |
| `Hero` | Client | Slideshow-Klick-Nav |
| `AuditWidget` | Client | Form-State + Fetch |
| `FAQ` | Client | useState für openIndex |

Wenn du eine neue Section baust, die nur Daten aus `lib/data.ts` rendert: **Server Component**. Spart JS-Bundle.

### 3. API-Key-Sicherheit

`ANTHROPIC_API_KEY` ist ausschließlich in `.env.local` und wird **nur** in `app/api/audit/route.ts` (Server) verwendet. Niemals in Client Components, niemals direkt zu `api.anthropic.com` vom Browser callen. Wenn du andere LLM-Features hinzufügst, immer als Route Handler.

### 4. CSS-Konventionen

- Design-Tokens als CSS-Variablen in `:root` von `globals.css`
- Wichtige Tokens: `--bg-0/1/2`, `--accent` (#818CF8), `--accent-glow`, `--text/muted/dim`, `--line/line-2`
- Animationen sind heavy custom — wenn du eine neue Section baust, schau dir die existierenden Patterns an (z.B. `fadeUp`, Slideshow-Keyframes) bevor du was Neues erfindest
- BEM-ähnliche Naming-Convention: `.section`, `.section-head`, `.section-tag`, `.section-title`, `.section-sub`
- Keine globalen Resets ändern, keine Reset-Bibliotheken

## Branding

- **Domain**: 1020.dev (Wiener Postleitzahl Leopoldstadt)
- **Logo**: `1020.dev` mit glühendem Indigo-Punkt zwischen `1020` und `dev`
- **Akzent**: Electric Indigo `#818CF8` mit violettem Glow
- **Background**: dunkles blaues Gradient (`#030615` → `#07112e` → `#0e1a44`)
- **Aesthetic**: Swiss Grid clean / Linear/Vercel dark tech — NICHT editorial, NICHT retro
- **Sprache**: alle UI-Texte auf **Deutsch (Österreich)**, formell ("Sie", nicht "Du")
- **Tone**: ehrlich, präzise, wenig Marketing-Sprech, nie Buzzwords ohne Substanz

## Preisstruktur (autoritativ in `lib/data.ts → PRICING`)

Einmalig: Onepager ab 700€ · jede weitere Seite ab 250€ · SEO ab 350€ · AEO ab 400€ · Backend ab 2.000€ · Automatisierung ab 3.000€
Laufend: Analytics & Monitoring 20€/Monat
Alle Preise netto, exkl. 20% USt. Audit & Erstgespräch immer kostenlos.

## Sections der Home-Page (in Reihenfolge)

1. Splash (Logo-Animation, einmalig pro Session)
2. Nav (sticky)
3. Hero (zwei Spalten: Content links, Refs-Slideshow rechts)
4. Audit-Widget (Live-AEO-Analyse via Anthropic API)
5. Methode (4 Schritte)
6. Leistungen (3 Cards)
7. Preise (modular, transparent)
8. FAQ (single-open Akkordeon)
9. Footer

## Bekannte Todos / offene Punkte

- [ ] Rate-Limiting für `/api/audit` (Upstash Ratelimit oder Vercel WAF) — vor Go-Live kritisch, sonst können Credits leergelaufen werden
- [ ] Custom `app/not-found.tsx` und `app/error.tsx` (aktuell Next.js Defaults)
- [ ] Cal.com-Slug `cal.com/1020dev` muss noch angelegt werden
- [ ] E-Mail `hallo@1020.dev` muss noch eingerichtet werden (z.B. Cloudflare Email Routing)
- [ ] Domain `1020.dev` registrieren
- [ ] Open-Graph-Image (`/og-image.png`, 1200×630) erstellen und in `app/layout.tsx` referenzieren

## Slideshow-Tempo (falls jemand fragt)

- Total-Cycle: 44 Sekunden (11 Projekte × 4 Sekunden)
- Pro Projekt: 2 Bilder × 2 Sekunden mit Crossfade (refFadeA/B bleibt 4s, passt N× rein)
- Synchronisation: `@keyframes refSlideshow` (44s) ineinander mit `@keyframes refFadeA/B` (4s)
- Refs ohne Live-URL/Screenshot: `href: null` + `images: []` → Hero rendert `<div class="ref-static">` mit Domain-Text-Placeholder
- Klick auf Dot → manueller Modus, 3 Sekunden nach mouseleave → Auto-Resume

## Was du NICHT tun sollst

- ❌ Nicht zu Tailwind migrieren (Custom-CSS ist gewollt, ~1500 Zeilen wären sinnlose Migration)
- ❌ Nicht den Anthropic-Call in den Browser verlegen
- ❌ Nicht Inhalte direkt in Components hardcoden — immer über `lib/data.ts`
- ❌ Nicht CSS-Variablen-Namen ändern (sonst bricht globals.css an mehreren Stellen)
- ❌ Nicht den Splash entfernen ohne explizite Aufforderung — er ist Brand-Element, nicht nur Deko
- ❌ Keine Emojis in UI-Texten (auch nicht in Buttons), Status-Icons (✓, ↗, →) sind ok
- ❌ Keine externen Component-Bibliotheken (shadcn, MUI, Chakra etc.) — Custom CSS bleibt
- ❌ Nicht "Du" verwenden — formelles "Sie" ist Standard für die KMU-Zielgruppe

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
