---
title: "Vercel vs. Hetzner: Hosting für österreichische Unternehmen"
description: "Direkter Vergleich der beiden dominanten Hosting-Optionen für moderne Web-Stacks — Vercel als Managed-Plattform, Hetzner als europäischer Server-Anbieter. Was wann passt, plus Empfehlung für DACH-KMU."
publishedAt: "2026-08-09"
category: "Webentwicklung"
keywords:
  - vercel vs hetzner
  - hosting österreich kmu
  - dsgvo hosting nextjs
  - eu hosting webentwicklung
  - managed vs self-hosted
draft: false
---

Vercel und Hetzner sind die zwei dominanten Hosting-Optionen für moderne Web-Stacks im DACH-Raum. Beide sind seriös, beide sind DSGVO-konform einsetzbar, beide haben klare Stärken — aber sie funktionieren grundlegend unterschiedlich. Hier ist der direkte Vergleich, ohne Marketing-Phrasen, mit konkreter Empfehlung für österreichische KMU.

## Was beide Anbieter sind

**Vercel** ist eine Managed Platform — Sie verbinden ein Git-Repository, Vercel kümmert sich um Build, Deploy, CDN, Caching, SSL, Skalierung. Sie schreiben nie ein Server-Konfigurations-File, müssen kein Linux administrieren. Hauptzielgruppe: Frontend-Entwickler, Next.js-Projekte (Vercel ist die Firma hinter Next.js), schnelle Deploy-Zyklen.

**Hetzner** ist ein klassischer europäischer Server-Anbieter aus Nürnberg/Falkenstein. Sie bekommen einen Linux-Server (oder Cloud-Instance), den Sie selbst konfigurieren. Hauptzielgruppe: Entwickler und Teams, die Kontrolle wollen — Self-Hosted Datenbanken, eigene Build-Pipelines, klassische LAMP- oder Node-Stacks.

## Direkte Vergleichs-Tabelle

| Faktor | Vercel | Hetzner |
|---|---|---|
| Sitz | USA (HQ), EU-Regions | Deutschland (Nürnberg/Falkenstein/Helsinki) |
| DSGVO-Verträglichkeit | Mit AVV machbar | Nativ EU |
| Setup-Aufwand | 5–10 Minuten | 2–8 Stunden |
| Laufende Kosten KMU-Site | 0–20 $/Monat | 4–25 €/Monat |
| Performance (CDN-Edge) | Global, 100+ Edge-Locations | Server-Standort, kein CDN nativ |
| Skalierung bei Last-Spike | Automatisch | Manuell |
| Wartungsaufwand | Praktisch null | Real (Updates, Monitoring) |
| Build-Pipeline | Eingebaut | Eigene aufsetzen |
| Datenbank-Hosting | Extern (Vercel Postgres oder Supabase) | Inkludiert (selbst aufsetzen) |
| Custom-Domain | Mehrere inkludiert | Mehrere inkludiert |
| Kosten-Spike-Risiko | Mittel (Bandwidth-basiert) | Niedrig (Flat-Pricing) |
| Vendor-Lock-in | Mittel (vendor-spezifische Features) | Niedrig (Standard-Linux) |

## Vercel — wann

Vercel passt, wenn **drei** der folgenden Punkte gelten:

- **Stack ist Next.js** (oder Astro, Remix, SvelteKit — moderne JS-Frameworks)
- **Sie wollen keine Server-Administration** — Updates, Security-Patches, Disk-Space-Management lehnen Sie ab
- **Performance über CDN-Edge ist relevant** — internationale oder DACH-weite Nutzerbasis
- **Sie nutzen Git-Workflow als Standard** — Push-to-Deploy ist Ihre Realität
- **Sie haben kein Hosting-Budget unter 0–20 $/Monat** — bei 100k+ Page Views pro Monat skaliert Vercel ins 30–80 $/Monat-Bereich

Trade-offs:
- Bandwidth-Pricing: bei viralen Spikes können unerwartete Kosten entstehen (selten bei B2B-KMU, häufiger bei B2C)
- Vendor-Lock-in: einige Features (Image-Optimization, Edge-Functions, Analytics) sind Vercel-spezifisch
- Datenbank separat: Vercel hostet keine Datenbanken; Sie brauchen Supabase, PlanetScale, Neon oder ähnliches

## Hetzner — wann

Hetzner passt, wenn **drei** der folgenden Punkte gelten:

- **Sie haben Linux-Erfahrung** im Team oder einen Entwickler, der das übernimmt
- **Datenbank-Hosting auf demselben Server** spart Komplexität
- **Performance ist regional, nicht global** — fast alle Nutzer in Österreich/Deutschland
- **Flat-Pricing wichtig** — Sie wollen vorhersagbare monatliche Kosten ohne Bandwidth-Überraschungen
- **Compliance-Argumentation für „komplett EU-Hosting"** ist Marketing-Hebel — etwa für Behörden oder Datenschutz-sensitive Branchen

Trade-offs:
- Wartung ist real: Sicherheits-Updates monatlich, Backup-Strategie selbst aufsetzen, Monitoring einrichten
- Skalierung manuell: bei plötzlichem Last-Anstieg müssen Sie Server-Upgrade aktiv triggern
- Build-Pipeline selbst: Sie brauchen GitHub Actions oder vergleichbares für Deploy-Automation
- Initial-Setup: 2–8 Stunden für saubere Konfiguration (nginx, PM2, Backup, Monitoring)

## Hybrid-Setups

Eine zunehmend beliebte Variante für österreichische KMU mit höheren Compliance-Anforderungen:

**Vercel-Frontend + Hetzner-Backend.** Site und Marketing-Content auf Vercel (für Performance und Convenience). Datenbank, sensitive Workflows, Auth-Service auf Hetzner Cloud in Deutschland (für Datensouveränität). Verbunden via API.

**Wann sinnvoll:** B2B-KMU mit Performance-Anspruch im Frontend, aber sensitiven Daten im Backend (Mandanten-Daten bei Steuerberatern, Patienten-Daten bei Medizin-Sites, Vertragsdaten bei Rechts-Tech).

**Wann nicht:** Wenn Frontend und Backend tief verzahnt sind (z.B. Server-Side-Rendering mit datenbankgestützten Inhalten), wird die Latenz zwischen den Systemen zur Bremse.

## Empfehlung für österreichische KMU

Konkrete Empfehlungen je nach Profil:

**Solo-Selbständige und kleine Beratungs-Sites (1–5 MA):** Vercel Free Tier oder Pro (20 $/Monat). Setup-Zeit < 30 Minuten. Wartungsaufwand praktisch null. Reicht für 99 % der Use-Cases.

**Mittlere KMU mit Performance-Fokus (5–30 MA):** Vercel Pro plus externe Datenbank (Supabase oder Neon, beide DSGVO-konform mit EU-Hosting). 50–80 $/Monat insgesamt. Höchste Convenience.

**KMU mit Compliance-Schwerpunkt:** Hetzner Cloud (Standort Falkenstein oder Helsinki). 6–25 €/Monat. Mehr Setup-Aufwand, aber „komplett EU"-Argument stärker für Marketing/Behörden.

**Branchen mit hochsensiblen Daten (Medizin, Recht, Finanzen):** Hetzner Dedicated oder Hybrid-Setup. 30–80 €/Monat. Volle Datensouveränität, höchster Wartungsaufwand.

Bei 1020.dev arbeiten wir primär mit Vercel für Standard-Sites — Setup-Zeit, Performance, Convenience überwiegen die Trade-offs. Bei Sites mit Compliance-Anforderungen wechseln wir auf Hetzner oder Hybrid-Setup.

## FAQ

### Ist Vercel DSGVO-konform für österreichische Unternehmen?

Ja, mit AVV und EU-Region-Konfiguration. Vercel hat AVV verfügbar (Standard für Pro-Tier und höher), und Sie können Builds und Deployments in EU-Regions konfigurieren. Caches an US-Edges sind technisch möglich aber dabei rechtlich okay, weil keine personenbezogenen Daten gecacht werden — nur statische Assets.

### Wie ist die Latenz von Hetzner für Wiener Nutzer?

Hetzner-Server in Falkenstein (Sachsen): typisch 15–25 ms Latenz für Wien-Nutzer. In Helsinki: 35–50 ms. Beides exzellent für Web-Anwendungen.

### Was kostet ein typisches KMU-Hosting-Setup pro Jahr?

Vercel Pro für 5–10 MA: ca. 240 $ pro Jahr (20 $/Monat). Plus Datenbank: 0–25 $ pro Monat = 0–300 $/Jahr. Hetzner Cloud Server CX22: 6 €/Monat = 72 €/Jahr (alles inkludiert). Hetzner ist auf Pricing-Seite in den meisten Setups günstiger, aber Wartungsaufwand kommt drauf.

### Welcher Anbieter ist „grüner"?

Hetzner kommuniziert seit Jahren CO2-neutralen Betrieb mit Zertifikaten. Vercel hat ähnliche Aussagen, weniger transparent dokumentiert. Für Marketing-orientierte Branchen mit Sustainability-Fokus: Hetzner hat das stärkere Argument.

### Kann ich später wechseln?

Ja, bei beiden. Bei Custom-Setups (Hetzner) ist der Wechsel meist trivial (Linux-Server umziehen). Bei Vercel-spezifischen Features (Edge Functions, Image Optimization) müssen Sie Code anpassen, was Aufwand bedeutet. Allgemein: gut gebaute Next.js-Site läuft ohne große Änderungen auf beiden Plattformen.

---

Die Hosting-Wahl ist 2026 weniger eine Religionsfrage als eine Passungs-Frage zwischen Convenience und Kontrolle. Die meisten österreichischen KMU sind mit Vercel für Frontend und einer EU-Datenbank-Lösung im Backend optimal bedient. Branchen mit Compliance-Schwerpunkt wechseln auf Hetzner oder Hybrid. Beide Wege sind valide — die Entscheidung hängt am Profil, nicht am Stack.

Mehr zu konkretem Stack-Aufbau im [Webentwicklung-Wien-Leitfaden](/journal/webentwicklung-wien-leitfaden-2026) und [WordPress-vs-Next.js-Vergleich](/journal/wordpress-vs-nextjs-kmu).
