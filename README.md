# 1020.dev

Production Next.js site für 1020.dev — Webentwicklung, SEO und AEO für KMU in Wien.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Custom CSS** in `app/globals.css` (Design-Tokens via CSS-Variablen, ~1500 Zeilen)
- **next/font/google** für DM Sans und DM Mono
- **next/image** für optimierte Reference-Screenshots
- **Anthropic API** (server-side über `/api/audit`) für das Live-Audit-Widget

## Setup

```bash
# Dependencies installieren
npm install

# .env.local anlegen
cp .env.example .env.local

# Anthropic API key eintragen (https://console.anthropic.com/)
# In .env.local:
#   ANTHROPIC_API_KEY=sk-ant-...

# Dev-Server starten (http://localhost:3000)
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Deploy

### Vercel (empfohlen)

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) "New Project" → Repository auswählen
3. Environment Variables setzen: `ANTHROPIC_API_KEY`
4. Deploy

Die Domain `1020.dev` muss separat registriert und in den Vercel-Project-Settings als Custom Domain hinzugefügt werden.

### Self-hosted (Hetzner, etc.)

```bash
npm run build
node .next/standalone/server.js
```

Setze einen Reverse Proxy (Nginx/Caddy) davor und Environment-Variablen via systemd oder Docker.

## Architektur

```
app/
├── layout.tsx              Root-Layout mit Metadata, Fonts, JSON-LD
├── page.tsx                Home-Page (komponiert Sections)
├── globals.css             Alle Styles (Custom CSS)
├── sitemap.ts              Auto-generated /sitemap.xml
├── robots.ts               Auto-generated /robots.txt
└── api/audit/route.ts      Server-side Anthropic-Call

components/
├── Splash.tsx              Initial-Animation mit sessionStorage-Skip
├── Nav.tsx                 Top-Nav (Server Component)
├── Hero.tsx                Two-Column-Hero mit Slideshow (Client)
├── AuditWidget.tsx         Live-Audit-Form (Client)
├── Methode.tsx             4-Schritt-Prozess (Server)
├── Services.tsx            3-Card-Triptychon (Server)
├── Pricing.tsx             Preisliste (Server)
├── FAQ.tsx                 Single-Open-Akkordeon (Client)
├── FaqStructuredData.tsx   JSON-LD FAQPage-Schema (Server)
└── Footer.tsx              (Server)

lib/
└── data.ts                 Single source of truth: REFS, FAQS, SERVICES,
                            METHODE, PRICING, SITE — alle Inhalte zentral

public/
├── refs/                   6 optimierte Reference-Screenshots (JPEGs, ~600 KB total)
└── llms.txt                AEO-Hint für LLM-Crawler
```

## Was wo geändert wird

- **Preise ändern**: `lib/data.ts` → `PRICING` — wird automatisch in Pricing-Section
  und FAQ-Antwort verwendet.
- **FAQ-Eintrag ändern**: `lib/data.ts` → `FAQS` — `plainAnswer` ist für
  JSON-LD/AEO, `htmlAnswer` für die UI (HTML erlaubt).
- **Referenzen ändern**: `lib/data.ts` → `REFS` plus neue Bilder in `public/refs/`.
- **Slideshow-Tempo**: `app/globals.css` → `@keyframes refSlideshow` (12s Total)
  und `@keyframes refFadeA/B` (4s pro Bild).
- **Anthropic-Modell**: `.env.local` → `ANTHROPIC_MODEL=claude-opus-4-7` für
  höhere Audit-Qualität, oder belasse `claude-sonnet-4-6` (Default).

## SEO & AEO

Out of the box konfiguriert:

- ✅ OpenGraph + Twitter Cards (`app/layout.tsx`)
- ✅ JSON-LD `FAQPage` Schema (`components/FaqStructuredData.tsx`)
- ✅ `/sitemap.xml` (`app/sitemap.ts`)
- ✅ `/robots.txt` mit Sitemap-Verweis (`app/robots.ts`)
- ✅ `/llms.txt` für ChatGPT/Perplexity/Claude (`public/llms.txt`)
- ✅ Semantisches HTML mit korrekter Heading-Hierarchie
- ✅ Lighthouse-Performance ≥ 95 erwartet (next/image, next/font, kein JS bloat)

Vor Go-Live: `SITE.url` in `lib/data.ts` von `https://1020.dev` zu finaler URL ändern,
falls anders. `metadataBase` in `app/layout.tsx` zieht das automatisch nach.

## Costing-Hinweis Audit-Widget

Jeder `/api/audit`-Aufruf kostet ca. 0.01–0.05 € (Sonnet 4.6 + 3 web_search calls).
Bei Production sollte ein Rate-Limit davor (Vercel WAF, Upstash Ratelimit, oder
ähnliches), sonst kann jemand mit einem Loop unbegrenzt API-Credits verbrennen.

## Lizenz

All rights reserved · 1020.dev · 2026
