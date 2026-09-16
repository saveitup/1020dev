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

Alle Inhalte (FAQs, Refs, Services, Methode, Leistungsumfang, Site-Config) leben in `lib/data.ts` als `const … as const`. Werden von mehreren Components verwendet:

- `FAQS` → `FAQ` Component (UI) + `FaqStructuredData` (JSON-LD für AEO)
- `SCOPE` / `AUTOMATION_SCOPE` / `APPS_SCOPE` → `Scope` Component (Leistungsumfang, **ohne Beträge**) + LocalBusiness-OfferCatalog
- `REFS` → `Hero` Slideshow
- `SITE` → überall (Booking-URL, E-Mail, Tagline, Standort)

**Wenn du Inhalte änderst: immer in `lib/data.ts`.** Niemals direkt in Components hardcoden — sonst läuft das JSON-LD-Schema asynchron zur UI und AEO-Crawler bekommen falsche Infos.

### 2. Server vs. Client Components

Default ist **Server Component**. `'use client'` nur wenn echtes State/Effects/Browser-APIs nötig sind:

| Component | Type | Warum |
|---|---|---|
| `Methode`, `Services`, `Scope`, `Footer`, `FaqStructuredData` | Server | Pure Render |
| `AppsHero`, `PhoneMock`, `AppShowcase`, `AppSchema` | Server | Pure Render aus `APPS_*` |
| `Nav` | Client | usePathname, Scroll-State, mobiles Menü (`is-open`) |
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

## Preise — bewusst NICHT auf der Site

**Die Site veröffentlicht keine Beträge.** Kein Preis in Components, Daten, JSON-LD, llms.txt oder Journal-Artikeln über eigene Leistungen. Der Preis entsteht nach dem kostenlosen Audit als Fixpreis-Angebot.

Was stattdessen auf der Site steht, ist der **Leistungsumfang** (`lib/data.ts → SCOPE`, `AUTOMATION_SCOPE`, `APPS_SCOPE`), gerendert von `components/Scope.tsx` in der Section `#angebot` (früher `#preise`). Die Einträge haben nur `name` und `desc`, keine `price`/`prefix`/`period`-Felder.

**Web-Track (`SCOPE`):** Bundle „Sichtbar" (Website-Basis + SEO + AEO) · Website-Basis (1 Seite) · zusätzliche Seite · SEO · AEO · Backend · Automatisierung · Monitoring (laufend).

**Automation-Track (`AUTOMATION_SCOPE`):** Bundle „AI-ready" · Workflow-Setup · API-Integration · LLM-Anbindung · internes Tool/Dashboard · RAG & Agentic Workflow · Hosting & Monitoring (laufend).

**Apps-Track (`APPS_SCOPE`):** Bundle „Launch" · MVP-App (iOS + Android) · zusätzlicher Screen/Feature · Backend & API · Push · Web-Version/PWA · Store-Release · Betrieb & Updates (laufend).

**Konditionen (in `Scope.tsx` Footer-Block):** Fixpreis-Angebot nach dem Audit · Preise netto zzgl. 20 % USt · Zahlung 50/50 (Auftrag/Übergabe) · 30 Tage Bugfix · laufende Posten monatlich kündbar · Audit & Erstgespräch kostenlos.

**Wenn wieder Preise auf die Site sollen:** `lib/data.ts` ist die Quelle, aber `FAQS[2].htmlAnswer` (Preis-FAQ Web), `APPS_FAQS[2]` (Preis-FAQ Apps), `components/LocalBusinessSchema.tsx` (OfferCatalog, aktuell ohne `priceSpecification` und ohne `priceRange`), `app/agb/page.tsx` und `public/llms.txt` müssen **manuell synchron gehalten** werden.

**Marktzahlen im Journal bleiben:** Artikel wie „Website-Kosten Wien 2026" oder „AEO-Kosten 2026" nennen weiterhin marktübliche Bereiche anderer Anbieter-Kategorien — das ist ihr Gegenstand. Eigene Preise („bei 1020.dev ab X €") gehören dort nicht hinein.

## Routing & Sections

Die Site hat **drei Tracks** und einen Track-Picker als Home:

- **`/` (Home)** rendert nur den `Chooser` ([app/page.tsx](app/page.tsx)) — drei Cards „Web", „Software" und „Apps" zur Auswahl. Kein Hero, kein Audit-Widget direkt auf der Home.
- **`/web` (Web-Track)** ([app/web/page.tsx](app/web/page.tsx)): Hero → Methode → Services → Projects → `<Scope />` (mit `SCOPE`) → FAQ → Footer.
- **`/automation` (Automation-Track)** ([app/automation/page.tsx](app/automation/page.tsx)): eigener Hero/Services/Methode/Scope-Stack mit `AUTOMATION_*`-Daten.
- **`/apps` (Apps-Track)** ([app/apps/page.tsx](app/apps/page.tsx)): `AppsHero` (Phone-Mockup) → Methode → Services → `AppShowcase` (Referenz: eigene App **Spin your song**, live unter [spin.1020.dev](https://spin.1020.dev)) → Scope → FAQ → Footer, alles aus `APPS_*`-Daten. `APPS_SHOWCASE[0].screenshot` ist `null` — sobald ein echter Screenshot in `public/refs/` liegt, dort eintragen, dann rendert `PhoneMock` das Bild statt des CSS-Mockups. Das Mockup bildet den echten spin.-Feed nach (Wortmarke, Datum, Bonus-Spin, Song-Karten, Tab-Bar) und nutzt eigene App-Markenfarben (`--spin-*` in `globals.css`), nicht die 1020.dev-Tokens. Namen und Tracks darin sind bewusst fiktiv.
- **`/concepts`** (Konzepte) existiert weiterhin als Seite, ist aber nicht mehr im Chooser verlinkt.

`Splash` und `Nav` sind global (Layout-Level). `Nav` zeigt pro Track die Section-Links, auf Mobile ein Toggle-Menü mit Section-Links plus weiteren Tracks; der `Footer` verlinkt alle Tracks. `FaqStructuredData` und `BreadcrumbSchema` werden pro Track-Seite gerendert.

**Journal-Slugs nur ASCII** (kein ä/ö/ü im Dateinamen unter `content/journal/`): Next.js findet vorgerenderte Seiten mit Umlaut-Slug unter der URL-kodierten Adresse nicht (404).

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
