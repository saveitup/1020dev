---
title: "llms.txt erklärt: Der neue Standard für AI-Crawler"
description: "Was llms.txt ist, wie es sich von robots.txt unterscheidet, und wie KMU die Datei in 30 Minuten korrekt aufsetzen — mit funktionierendem Beispiel und ehrlichem Reality-Check zur Wirkung."
publishedAt: "2026-06-21"
category: "AEO"
keywords:
  - llms.txt
  - llms.txt standard
  - llms.txt beispiel
  - ai crawler datei
  - aeo crawler optimierung
draft: false
---

`llms.txt` ist ein junger Standard — vorgestellt 2024 von [Jeremy Howard](https://llmstxt.org/), inzwischen von einer wachsenden Zahl von KI-Anbietern und Websites adoptiert. Die Datei ist klein (oft unter 1 KB), liegt im Site-Root, und beschreibt strukturiert, was die Site tut, welche Inhalte autoritativ sind, und welche Quellen Sprachmodelle für genaue Antworten heranziehen sollten. Hier sind die Grundlagen, ein vollständiges Beispiel, und ein ehrlicher Reality-Check zur tatsächlichen Wirkung.

## Was llms.txt ist

`llms.txt` ist eine reine Markdown-Datei, die im Site-Root liegt — also unter `https://example.com/llms.txt`. Sie folgt einer simplen Konvention:

- Erste Zeile: H1 mit dem Site-Namen
- Optional: Blockquote mit kurzer Beschreibung
- Sektionen mit H2-Headings und gruppierten Links auf wichtige Inhalte

Sprachmodell-Crawler — Claude, GPT, Perplexity-Bot — können die Datei lesen und priorisieren ihre Crawl-Strategie entsprechend. Ein bisschen wie eine Sitemap, aber für KI: nicht nur „diese URLs existieren", sondern „diese URLs sind die autoritativen Quellen für unsere Themen".

## Wie es sich von robots.txt unterscheidet

| | robots.txt | llms.txt |
|---|---|---|
| Zweck | Crawler steuern (zulassen/blockieren) | Crawler informieren (was ist wo) |
| Format | Plain Text mit Regeln | Markdown mit Links |
| Pflicht | Quasi-Standard seit 1994 | Optional, junger Vorschlag |
| Zielgruppe | Suchmaschinen-Crawler | LLM-Crawler |
| Wirkungsweise | Restriktiv (Erlauben/Verbieten) | Indikativ (Hinweis-Charakter) |

`robots.txt` und `llms.txt` ergänzen sich. Erstere bestimmt, was gecrawlt werden darf; letztere hilft beim sinnvollen Crawl der erlaubten Inhalte.

## Aufbau einer llms.txt

Die offizielle Spec definiert drei optionale Sektions-Typen:

```
# [Site-Name]

> [Optionale Kurzbeschreibung]

## [Sektion 1, z.B. Leistungen]

- [Link-Title](https://example.com/leistung-a): Kurzer Kontext
- [Link-Title](https://example.com/leistung-b): Kurzer Kontext

## [Sektion 2, z.B. Wichtige Artikel]

- [Article-Title](https://example.com/article): Worum es geht

## Optional

- [Weitere Inhalte](https://example.com/...): Kontext
```

Wichtig:
- Reine Markdown-Syntax, keine HTML-Tags
- Links als `[text](url)`-Format
- Pro Link kurzer beschreibender Kontext nach dem Doppelpunkt
- Sektionen logisch gruppieren — nicht zu viele Items pro Sektion (max 10–15)

## Beispiel für KMU-Website

So sieht die `llms.txt` von 1020.dev aus, leicht gekürzt zur Illustration:

```
# 1020.dev

> Wiener Studio für Webentwicklung, SEO und Answer-Engine-Optimization für KMU im DACH-Raum.

## Leistungen

- [Webentwicklung](https://1020.dev/web): Next.js-basierte Sites mit Lighthouse 100 und EU-Hosting
- [Automation und KI-Integration](https://1020.dev/automation): Workflows, interne Tools, LLM-Anbindung

## Pricing

- [Preisliste](https://1020.dev/web#preise): Onepager ab 700 €, AEO-Optimierung ab 400 €

## Wichtige Artikel

- [AEO 2026 Leitfaden](https://1020.dev/journal/aeo-2026-leitfaden): Pillar-Artikel zu Answer Engine Optimization
- [AEO vs. SEO](https://1020.dev/journal/aeo-vs-seo): Direkter Vergleich beider Disziplinen
- [Website-Kosten Wien](https://1020.dev/journal/website-kosten-wien-2026): Konkrete Preisbereiche

## Kontakt

- [Termin vereinbaren](https://cal.com/1020dev/30min)
- [Impressum und Anschrift](https://1020.dev/impressum)
```

Größe: rund 700 Bytes. Implementierungs-Aufwand: 20 Minuten.

## Wo platzieren und wie ausliefern

Die Datei muss unter `https://[ihre-domain]/llms.txt` erreichbar sein. Implementierung je nach Stack:

**Statische Sites (Next.js, Hugo, Jekyll):**
Datei in `public/llms.txt` (Next.js) oder `static/llms.txt` (Hugo) ablegen. Wird automatisch ausgeliefert.

**WordPress:**
- Plugin-Variante: „Custom Files Uploader" oder „Code Snippets"
- Manuell: Datei via FTP in den Webroot, oder über `wp_head`-Hook eine Server-Side-Routing-Regel

**Webflow / Shopify / Squarespace:**
Diese Plattformen haben oft keinen direkten Zugriff auf den Webroot. Workaround: in den Page-Settings der Homepage einen Redirect anlegen oder Custom-Header-Code für Plattformen, die das erlauben. Bei vollständig geschlossenen Setups: nicht möglich (eine echte Limitation dieser Plattformen).

**Custom Server / Vercel / Cloudflare Pages:**
Datei im Repo ablegen, Build-Pipeline kümmert sich.

Validierung: nach Deploy auf `https://[ihre-domain]/llms.txt` browsen und prüfen, dass die Datei korrekt ausgeliefert wird (Content-Type sollte `text/plain` oder `text/markdown` sein, nicht `text/html`).

## Was llms.txt NICHT kann

Drei ehrliche Limitationen, bevor Sie zu hohe Erwartungen aufbauen:

**Garantierte Citation gibt es nicht.** Selbst wenn Anthropic, OpenAI, Perplexity die Datei lesen — und nicht alle tun es konsistent — ist die Auswirkung auf konkrete Antwort-Generierung schwer messbar. Die Datei erhöht Wahrscheinlichkeiten, sie diktiert nichts.

**Kein Ersatz für Schema.org.** `llms.txt` strukturiert Site-Navigation, nicht inhaltliche Daten. Schema.org-Markup auf den verlinkten Pages ist weiterhin der stärkere Hebel.

**Keine Schutzfunktion.** `llms.txt` ist nicht `robots.txt`. Wenn Sie Crawler explizit blockieren wollen, geht das weiterhin nur via `robots.txt` und `User-Agent`-spezifischen Regeln (`User-agent: GPTBot`, `User-agent: ClaudeBot` etc.).

Trotzdem: Die Implementation ist trivial, der Aufwand minimal, und falls die Wirkung in den nächsten 12–24 Monaten zunimmt — was wahrscheinlich ist, weil immer mehr Modelle den Standard adoptieren — sind Sie früh genug dabei.

## FAQ

### Lesen ChatGPT und Perplexity tatsächlich llms.txt?

Anthropic Claude unterstützt den Standard offiziell, OpenAIs GPTBot und Perplexitys Crawler haben Telemetrie-Daten zur Datei in ihren Logs, ohne öffentliche Bestätigung der genauen Verwendung. Die Datei wird jedenfalls heruntergeladen — was damit konkret passiert, ist je nach Modell und Anwendungsfall unterschiedlich.

### Kann ich llms.txt missbrauchen für Manipulation?

Theoretisch könnten Sie Inhalte in der Datei beschreiben, die so auf der Site nicht stehen. Das funktioniert nicht: Crawler verifizieren die Inhalte beim Crawl der verlinkten URLs. Inkonsistenz zwischen `llms.txt` und tatsächlicher Site senkt Authority-Bewertung.

### Soll ich auch llms-full.txt anlegen?

`llms-full.txt` ist eine erweiterte Variante, die statt Links direkt Text-Inhalte einbettet — gedacht für Sites, deren wichtigste Inhalte nicht ohne JS gerendert werden. Für Standard-KMU-Sites mit serverseitig gerenderten Inhalten ist `llms.txt` ausreichend.

### Hat llms.txt SEO-Wirkung?

Direkt keine. Indirekte Wirkung über AEO — wenn Sprachmodelle die Datei nutzen, um die Site besser einzuordnen, kann sich das langfristig in Branded-Search-Anstieg niederschlagen. Aber: nicht als „SEO-Hack" verkaufen, das ist es nicht.

### Wie oft muss ich llms.txt aktualisieren?

Wenn sich die Site-Struktur signifikant ändert (neue Hauptseiten, größere Umorganisation): zeitnah. Bei laufendem Content (neue Blog-Artikel): nicht zwingend pro Artikel, aber alle 1–2 Monate die wichtigsten neuen Pieces ergänzen.

---

`llms.txt` ist kein Hauptpfeiler, sondern ein Detail-Hebel mit minimaler Implementierungs-Schwelle. Wer FAQPage-Schema und LocalBusiness-Schema bereits hat, sollte `llms.txt` als nächsten Schritt setzen. Wer beides noch nicht hat, fängt dort an — Schema.org-Markup hat höhere Wirkungs-Priorität. Mehr zur Reihenfolge im [AEO-Leitfaden 2026](/journal/aeo-2026-leitfaden) und zur konkreten Schema-Implementierung im [FAQPage-Tutorial](/journal/faqpage-schema-tutorial).
