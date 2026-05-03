---
title: "FAQPage-Schema einrichten: Schritt-für-Schritt mit Next.js und WordPress"
description: "Funktionierender Code für FAQPage-Schema in Next.js und WordPress. Was Schema.org-Crawler erwarten, welche Felder Pflicht sind, häufige Fehler und wie Sie das Ergebnis validieren."
publishedAt: "2026-06-14"
category: "AEO"
keywords:
  - faqpage schema
  - json-ld faq beispiel
  - faq schema next.js
  - schema.org tutorial
  - faqpage wordpress
draft: false
---

FAQPage-Schema ist der einzelne Hebel, mit dem KMU am schnellsten messbare AEO-Wirkung erzielen — schneller als Performance-Tuning, schneller als Mention-Aufbau. Eine sauber implementierte FAQPage signalisiert sowohl Google als auch ChatGPT, Perplexity und Claude, dass eine Site Frage-Antwort-Inhalte liefert, und die Modelle ziehen diese Inhalte überproportional in ihre Antworten. Hier ist der funktionierende Code für Next.js und WordPress, plus die Stolpersteine, die wir in der Praxis sehen.

## Was FAQPage-Schema ist (und warum 2026 Pflicht)

FAQPage ist ein Schema.org-Typ, der eine Sammlung von Frage-Antwort-Paaren strukturiert beschreibt. Der Browser sieht davon nichts; das Markup wird als JSON-LD im `<head>` oder `<body>` der Seite eingebettet und von Crawlern direkt geparst.

Wirkung ist mehrschichtig:

- **Google AI Overviews** ziehen FAQPage-Inhalte sehr direkt — sie sind „pre-strukturiert" und brauchen keine Inferenz
- **Featured Snippets** in klassischen Google-Ergebnissen zeigen FAQPage-Antworten häufiger als Fließtext
- **ChatGPT, Perplexity, Claude** parsen das JSON beim Crawl, was die Citation-Wahrscheinlichkeit erhöht — nicht garantiert, aber statistisch belegt im [Princeton GEO Paper](https://arxiv.org/abs/2311.09735)

Mehr zur Mechanik im [AEO-Leitfaden 2026](/journal/aeo-2026-leitfaden).

## Anatomie eines FAQPage-Blocks

Minimaler FAQPage-Block in JSON-LD:

```
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine Website in Wien?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Onepager-Website beginnt bei rund 700 Euro. Mehrseitige Sites zwischen 2.500 und 5.000 Euro."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert ein Website-Projekt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei einem typischen KMU-Projekt mit 5 bis 15 Seiten 4 bis 6 Wochen vom Briefing bis zum Live-Gang."
      }
    }
  ]
}
```

**Pflichtfelder:**
- `@context`: immer `https://schema.org`
- `@type`: `FAQPage`
- `mainEntity`: Array von `Question`-Objekten
- pro Frage: `name` (die Frage) und `acceptedAnswer.text` (die Antwort)

**Optional aber empfohlen:**
- `acceptedAnswer.author` (für Trust-Signal)
- `acceptedAnswer.dateCreated` (Frische-Signal)
- `mainEntityOfPage.url` (auf welcher URL die FAQ steht)

## Implementation in Next.js

In Next.js 15 mit App Router rendern Sie das Schema als Server Component. Beispiel `components/FaqStructuredData.tsx`:

```
type FaqItem = {
  question: string;
  answer: string;
};

export function FaqStructuredData({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

In der Page selbst:

```
export default function Page() {
  const faqs = [
    {
      question: "Was kostet AEO?",
      answer: "Reine AEO-Optimierung beginnt bei rund 400 Euro einmalig.",
    },
    // ...
  ];

  return (
    <>
      <FaqStructuredData faqs={faqs} />
      {/* sichtbare FAQ-UI */}
    </>
  );
}
```

**Wichtig:** Halten Sie die Daten in einer Single Source of Truth (z.B. `lib/data.ts`), aus der sowohl die UI als auch das Schema gespeist werden. Sonst driften UI und JSON-LD auseinander, und Crawler bekommen veraltete Antworten.

## Implementation in WordPress

In WordPress haben Sie zwei Wege.

### Plugin-basiert (für Nicht-Entwickler)

`Yoast SEO` (kostenlos) hat einen FAQ-Block für den Block-Editor. Sie fügen einen FAQ-Block ein, schreiben Fragen und Antworten als Editor-Inhalt — Yoast generiert das JSON-LD automatisch im Hintergrund.

`Rank Math` (kostenlos / Premium) bietet dieselbe Funktionalität, oft mit etwas mehr Schema-Tiefe (z.B. Author + dateCreated automatisch).

Trade-off: Plugin-basierte Lösungen funktionieren, machen Sie aber abhängig vom Plugin und seinem Update-Zyklus. Bei Plugin-Konflikten oder Migrationen droht Wirkungsverlust.

### Manuell via `wp_head`-Hook

In `functions.php` oder einem kleinen Plugin:

```
add_action('wp_head', function() {
    if (!is_page('haeufige-fragen')) return;

    $faqs = [
        ['q' => 'Was kostet AEO?', 'a' => 'Ab 400 Euro einmalig.'],
        // ...
    ];

    $entities = array_map(function($faq) {
        return [
            '@type' => 'Question',
            'name' => $faq['q'],
            'acceptedAnswer' => [
                '@type' => 'Answer',
                'text' => $faq['a'],
            ],
        ];
    }, $faqs);

    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => $entities,
    ];

    echo '<script type="application/ld+json">'
        . wp_json_encode($schema, JSON_UNESCAPED_UNICODE)
        . '</script>';
});
```

`is_page('haeufige-fragen')` stellt sicher, dass das Schema nur auf der gewünschten Page erscheint — Schema.org auf jeder URL ist eine häufige Fehlerquelle.

## Häufige Fehler

### Doppelte FAQPage-Schemas auf einer Seite

Wenn Sie ein Plugin haben, das automatisch FAQPage rendert, und Sie zusätzlich manuell ein eigenes Schema einbinden, sehen Crawler zwei FAQPage-Blöcke. Effekt: schlechtere Validierung, manchmal komplette Ignoranz beider Blöcke. Eine Quelle pro Page.

### Antworten mit HTML-Tags

`acceptedAnswer.text` muss reiner Text sein — keine `<a>`-Tags, kein `<strong>`, kein HTML. Wenn Sie HTML drin haben, parst Google es entweder fehlerhaft oder verwirft das Schema komplett. Halten Sie eine Plain-Text-Version separat von der HTML-UI.

### FAQ-Inhalte nur im JSON, nicht sichtbar auf der Seite

Schema.org-Richtlinien verlangen, dass die im FAQPage-Schema gelisteten Inhalte **auch sichtbar auf der Seite stehen**. Wenn Sie eine Frage in JSON-LD listen, die im sichtbaren Body fehlt, gilt das als „Cloaking" und kann zur Penalty führen. Beide Versionen müssen synchron sein.

### Zu lange Antworten

`Answer.text` mit 800+ Wörtern wird oft nicht voll gerendert. Halten Sie Antworten unter 400 Wörter, idealer 50–250. Längere Inhalte gehören in eigene Article-Pages mit Verlinkung.

### Fragen, die keine Fragen sind

Ein häufiger Anti-Pattern: „Unsere Leistungen" als `Question.name`. FAQPage-Schema ist für **echte W-Fragen** — Was, Wie, Warum, Wann. Listen-Items sollten in separates ItemList-Schema, nicht in FAQPage.

## Validierung und Monitoring

Nach jeder Änderung:

1. **[Schema Markup Validator](https://validator.schema.org/)** — kostenlos, prüft JSON-LD-Syntax und Pflichtfelder
2. **[Google Rich Results Test](https://search.google.com/test/rich-results)** — zeigt, wie Google das Schema interpretiert
3. **Lokal:** Browser-Devtools → „Inspect" → `<head>` → `<script type="application/ld+json">` finden und Inhalt kopieren in den Validator

In Search Console (sobald deployed):
- Section „Rich Results" → „FAQPage" → zeigt erkannte Pages
- Bei Fehlern detaillierte Diagnose pro URL

Monatlich: 5–10 typische Branchen-Anfragen in ChatGPT, Perplexity, Claude stellen — werden Ihre FAQPage-Antworten zitiert? Tabelle führen, Trends sind nach 8–12 Wochen sichtbar.

## FAQ — Häufige Fragen zu FAQPage-Schema

### Brauche ich für jede Seite eine eigene FAQPage?

Nein, im Gegenteil. Pro Domain idealerweise **eine** FAQPage — auf einer dedizierten `/faq` URL oder als Erweiterung der Homepage. Mehrere FAQPage-Schemas konkurrieren in Google um Rich-Result-Display.

### Funktioniert FAQPage in jedem CMS?

Ja, sofern das CMS erlaubt, eigenes JSON-LD im `<head>` oder `<body>` zu rendern. WordPress, Shopify, Webflow, Next.js, custom-Setups — alle unterstützen das. Squarespace und Wix sind eingeschränkter, aber via Custom-Code-Injection oft machbar.

### Wirkt FAQPage-Schema auch ohne Top-Rankings?

Ja. FAQPage-Schema kann unabhängig vom organischen Ranking in Featured Snippets und AI Overviews zitiert werden — gerade für KMU mit niedriger Domain Authority oft der einzige Weg, in den oberen SERP-Bereich zu kommen.

### Wie viele FAQs sind sinnvoll?

5–15 pro Page funktionieren am besten. Unter 3 wirkt zu dünn (Google ignoriert oft), über 20 verwässert die wichtigsten Antworten. Konzentrieren Sie sich auf die Fragen, die potenzielle Kunden tatsächlich vor dem Kontakt stellen.

### Was, wenn Antworten sich ändern?

Bei jedem Inhalts-Update gleichzeitig UI und Schema aktualisieren. Single Source of Truth (eine Datei, aus der beide gespeist werden) verhindert Drift. Bei dynamischen FAQs aus einem CMS: Cache invalidieren bei Update.

---

FAQPage-Schema ist eine 1–2-Stunden-Investition mit überproportionaler AEO-Wirkung. Wer es korrekt implementiert hat, ist deutlich näher an Citation-Häufigkeit in KI-Antworten — wer es ignoriert oder fehlerhaft setzt, lässt einen der einfachsten Hebel ungenutzt liegen. Für eine Site-Bewertung Ihres aktuellen Schema-Status: [kostenloser Audit](/web#audit).
