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
- Wichtige Tokens: `--bg-0/1/2` (helle Töne, `--bg-0` ist `#ffffff`), `--accent` (`#4F46E5`), `--accent-glow`, `--text/muted/dim`, `--line/line-2`
- Animationen sind heavy custom — wenn du eine neue Section baust, schau dir die existierenden Patterns an (z.B. `fadeUp`, Slideshow-Keyframes) bevor du was Neues erfindest
- BEM-ähnliche Naming-Convention: `.section`, `.section-head`, `.section-tag`, `.section-title`, `.section-sub`
- Keine globalen Resets ändern, keine Reset-Bibliotheken

## Branding

- **Domain**: 1020.dev (Wiener Postleitzahl Leopoldstadt)
- **Logo**: `1020.dev` mit glühendem Indigo-Punkt zwischen `1020` und `dev`
- **Akzent**: Indigo `#4F46E5` mit violettem Glow (`--accent-glow: rgba(79,70,229,0.30)`)
- **Background**: clean white `#ffffff` mit subtilem indigo-Radialgradient unten rechts (`rgba(79,70,229,0.06)`) und Papier-Korn-Overlay (`body::after`, opacity 0.025, `mix-blend-mode: multiply`)
- **Aesthetic**: editorial Studio · off-black paper feel · viel Whitespace · chapter-based Sections (siehe Header-Kommentar in `globals.css`)
- **Sprache**: alle UI-Texte auf **Deutsch (Österreich)**, formell ("Sie", nicht "Du")
- **Tone**: ehrlich, präzise, wenig Marketing-Sprech, nie Buzzwords ohne Substanz

## Preisstruktur (autoritativ in `lib/data.ts → PRICING` und `AUTOMATION_PRICING`)

**Web-Track (`PRICING`):**
- Pakete: Bundle „Sichtbar" (Website-Basis + SEO + AEO) 1.350 € (statt 1.450 € einzeln, spart 100 €)
- Einmalig: Website-Basis (1 Seite) 700 € · Zusätzliche Seite 250 € · SEO 350 € · AEO 400 € · Backend ab 2.000 € · Automatisierung ab 3.000 €
- Laufend: Monitoring (automatisiert) 25 €/Monat

**Automation-Track (`AUTOMATION_PRICING`):**
- Einmalig: Workflow-Setup ab 800 € · API-Integration ab 1.500 € · LLM-Anbindung ab 2.500 € · Internes Tool/Dashboard ab 3.000 € · RAG & Agentic Workflow ab 5.000 €
- Laufend: Hosting & Monitoring 60 €/Monat

**Konditionen (in `Pricing.tsx` Footer-Block):** Preise netto + 20 % USt · Zahlung 50/50 (Auftrag/Übergabe) · 30 Tage Bugfix · Hosting & SSL bei Website-Basis 12 Monate inklusive · Monitoring monatlich kündbar · Audit & Erstgespräch kostenlos.

Wenn du Preise änderst: `lib/data.ts` ist die Quelle, aber `FAQS[2].htmlAnswer` (Pricing-FAQ) und `public/llms.txt` müssen **manuell synchron gehalten** werden.

## Routing & Sections

Die Site hat **zwei Tracks** und einen Track-Picker als Home:

- **`/` (Home)** rendert nur den `Chooser` ([app/page.tsx](app/page.tsx)) — zwei Cards „Web" und „Software" zur Auswahl. Kein Hero, kein Audit-Widget direkt auf der Home.
- **`/web` (Web-Track)** ([app/web/page.tsx](app/web/page.tsx)): Hero → Methode → Services → Projects → `<Pricing />` (mit `PRICING`) → FAQ → Footer.
- **`/automation` (Automation-Track)** ([app/automation/page.tsx](app/automation/page.tsx)): eigener Hero/Services/Methode/Pricing-Stack mit `AUTOMATION_*`-Daten.

`Splash` und `Nav` sind global (Layout-Level). `FaqStructuredData` und `BreadcrumbSchema` werden pro Track-Seite gerendert.

## Bekannte Todos / offene Punkte

- [x] Rate-Limiting für `/api/audit` und `/api/audit/track` — zentrales `lib/ratelimit.ts`. Upstash Redis (sliding-window) wenn `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` gesetzt; sonst best-effort in-memory Fallback.
- [x] Custom `app/not-found.tsx` und `app/error.tsx`
- [x] Upstash-Database angelegt (Vars in Vercel hinterlegen, falls noch nicht passiert)
- [x] Domain `1020.dev` registriert
- [x] `ANTHROPIC_API_KEY` in Vercel Production gesetzt
- [ ] Cal.com-Slug `cal.com/1020dev` anlegen
- [ ] Resend: Domain `1020.dev` per DNS verifizieren, dann `RESEND_FROM=audit@1020.dev` in Vercel setzen
- [ ] `CRON_SECRET` generieren (`openssl rand -base64 32`) und in Vercel Production setzen
- [x] Open-Graph-Image — dynamisch über `app/opengraph-image.tsx` (Edge Runtime, 1200×630)

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
