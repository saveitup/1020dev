# 1020.dev

Production Next.js site für 1020.dev — ein Studio von KI-begeisterten Codern aus Wien (Legal AI, iOS-Apps, Konzepte).


## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Custom CSS** in `app/globals.css` (Design-Tokens via CSS-Variablen, Look angelehnt an legora.com)
- **next/font/google** für Instrument Sans und Fragment Mono
- **next/image** für optimierte Referenz-Screenshots
- **Anthropic API** (server-side über `/api/audit`) — Altlast, nicht mehr auf der Site eingebunden

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
├── layout.tsx              Root-Layout: Metadata, Fonts, Splash, Announcement, Nav, JSON-LD
├── page.tsx                Startseite (Hero → Studio → Schwerpunkte → Referenzen → Kontakt)
├── globals.css             Alle Styles (Custom CSS)
├── journal/                Journal-Index + Artikel aus content/journal/*.md
├── impressum, datenschutz, agb, danke, abmelden
├── icon.tsx, apple-icon.tsx, opengraph-image.tsx   generierte Icons/Share-Bild
├── sitemap.ts, robots.ts
└── api/                    audit (Altlast), cron/revalidate

components/                 siehe components/CLAUDE.md
lib/data.ts                 Single source of truth für alle Inhalte
public/refs/                Referenz-Screenshots
public/llms.txt             Kurzprofil für LLM-Crawler
```

## Was wo geändert wird

- **Texte der Startseite**: `lib/data.ts` → `HERO`, `STUDIO`, `FOCUS`, `CONTACT`, `ANNOUNCEMENT`.
- **Referenzen**: `lib/data.ts` → `REFS` plus Bilder in `public/refs/`.
- **Design-Tokens**: `app/globals.css` → `:root`.

## SEO & AEO

Out of the box konfiguriert:

- ✅ OpenGraph + Twitter Cards (`app/layout.tsx`)
- ✅ JSON-LD `Organization`, `WebSite` und `Article` Schema
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
