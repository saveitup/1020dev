---
title: "AEO 2026: Sichtbarkeit in ChatGPT, Perplexity & Claude für KMU"
description: "Answer Engine Optimization erklärt — was AEO ist, wie es sich von SEO unterscheidet, welche Hebel funktionieren und wie KMU in Wien und Österreich konkret starten."
publishedAt: "2026-05-10"
category: "AEO"
keywords:
  - aeo
  - answer engine optimization
  - chatgpt seo
  - perplexity sichtbarkeit
  - kmu wien
  - aeo österreich
draft: false
---

Bis Mitte 2025 endeten laut [SimilarWeb](https://www.similarweb.com/blog/research/market-research/zero-click-google-search/) rund **34 % aller Google-Suchen ohne Klick** — der Nutzer las die KI-Antwort direkt in den Suchergebnissen und ging weiter. Parallel meldet OpenAI [über 200 Millionen wöchentlich aktive ChatGPT-Nutzer](https://openai.com/index/200-million-weekly-active-users/), Perplexity rund 15 Millionen monatliche Nutzer, und Google rollt AI Overviews flächendeckend in Europa aus. Wenn Ihre Website in diesen Systemen nicht zitiert wird, sind Sie für einen wachsenden Anteil aller Anfragen schlicht unsichtbar — auch bei Position 1 in der klassischen Google-Liste. Genau hier setzt AEO an.

## Was AEO ist — und warum es 2026 nicht mehr optional ist

**AEO steht für Answer Engine Optimization.** Es ist die Optimierung von Webinhalten für KI-Antwortmaschinen wie ChatGPT, Perplexity, Claude und Google AI Overviews — also für jene Systeme, die Antworten *generieren* statt nur Links auf Suchergebnisseiten zu sortieren.

Der Unterschied zu klassischem SEO ist fundamental, nicht graduell:

| | SEO | AEO |
|---|---|---|
| Zielsystem | Google SERP | ChatGPT, Perplexity, Claude, AI Overviews |
| Erfolgsmetrik | Klicks | Citations + indirekter Brand-Awareness |
| Hauptformat | Title, Meta, Body, Backlinks | Strukturierte Antworten + Schema.org |
| Linkwirkung | hoch | mittel — Mentions wichtiger als Links |
| Sichtbarkeit nach | 3–6 Monaten | 2–8 Wochen bei guter Quelle |

### AEO vs. SEO: Der Unterschied in einem Satz

SEO bringt Nutzer auf Ihre Website. AEO bringt Ihre Marke in die Antwort, die der Nutzer bekommt — ob er klickt oder nicht.

### Warum „klickloser Traffic" Ihr neues Problem ist

Klassische Marketing-Tools messen Klicks. Sie messen *nicht*, wenn Perplexity bei der Frage „Wer macht Webentwicklung in Wien?" Ihre Marke nennt und der Nutzer Wochen später direkt Ihre Domain eingibt. Diese Indirekt-Effekte sind schwerer messbar — aber sie passieren bereits, und sie nehmen zu. Wer wartet, bis Klick-Zahlen den Trend bestätigen, optimiert schon zu spät.

## Wie KI-Antwortmaschinen Inhalte auswählen

Modelle wie ChatGPT oder Claude generieren ihre Antworten in drei Schritten — vereinfacht:

1. **Retrieval** — Suche im Web oder im internen Index nach Quellen, die zur Frage passen.
2. **Re-Ranking** — Bewertung, welche der gefundenen Quellen am autoritativsten und strukturell am besten verarbeitbar sind.
3. **Citation** — Generierung der Antwort, oft mit Quellenangaben oder direkten Verlinkungen.

Was Sprachmodelle bevorzugen, ist erstaunlich konkret: Quellen mit strukturierten Daten (Schema.org) bekommen höhere Confidence-Werte als rohe HTML-Texte, weil das Modell dann nicht aus dem Fließtext „raten" muss. Antwort-orientierte Formate — Frage als Heading, direkte Antwort darunter — werden bevorzugt extrahiert. Frische Inhalte schlagen alte. Eigene Domains schlagen Aggregatoren. Diese Dynamik ist im [Princeton-GEO-Paper von Aggarwal et al.](https://arxiv.org/abs/2311.09735) empirisch dokumentiert und mittlerweile Konsens.

> **Wie wählen KI-Antwortmaschinen ihre Quellen aus?**
> KI-Antwortmaschinen wie ChatGPT, Perplexity und Claude durchsuchen das Web nach relevanten Quellen, bewerten ihre Autorität und Strukturqualität, und zitieren die am besten passenden direkt in ihrer Antwort. Strukturierte Daten, antwort-orientierte Formate und Domain-Authority sind die zentralen Hebel.

## Die fünf Hebel der AEO-Optimierung

### Hebel 1 — Strukturierte Daten (Schema.org)

Schema.org-Markup als JSON-LD ist der mit Abstand stärkste AEO-Hebel — und zugleich der am häufigsten unterschätzte. Während klassisches SEO mit `FAQPage` und `Article` arbeitet, sind für AEO besonders relevant: `LocalBusiness`, `Service`, `HowTo`, `BreadcrumbList`, `Person` und `Organization`.

Ein minimaler `LocalBusiness`-Block sieht so aus:

```
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Beispiel-Studio",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Beispielgasse 1",
    "postalCode": "1020",
    "addressLocality": "Wien",
    "addressCountry": "AT"
  },
  "telephone": "+43...",
  "areaServed": "AT"
}
```

Wie sich FAQPage konkret in Next.js und WordPress umsetzen lässt, zeigt das [FAQPage-Tutorial](/journal/faqpage-schema-tutorial) Schritt für Schritt.

### Hebel 2 — Antwort-orientierte Inhaltsstruktur

Ein KI-Modell, das eine Frage beantworten soll, sucht nach Passagen, die diese Frage *möglichst wörtlich* stellen — und unmittelbar danach die Antwort liefern. Das hat konkrete Implikationen für Ihren Inhaltsaufbau:

- W-Fragen als H2- oder H3-Headings („Was kostet…", „Wie funktioniert…", „Wann lohnt sich…")
- Direkte Antwort in 40–55 Wörtern unmittelbar unter der Frage — Featured-Snippet-tauglich
- Erst kurz antworten, dann begründen (umgekehrte Pyramide)
- Pro Hauptfrage ein eigenes self-contained Passage-Block — typisch 130–170 Wörter, in dem die Frage isoliert beantwortet wird (das Princeton-GEO-Paper dokumentiert empirisch, dass kompakt-eigenständige Passagen häufiger zitiert werden als verschachtelte)

### Hebel 3 — Lokale Signale (LocalBusiness, Google Business Profile)

Für KMU im DACH-Raum sind lokale Signale doppelt wichtig — sowohl in Google AI Overviews als auch in Perplexity, das zunehmend lokale Anfragen verarbeitet. Drei Bausteine:

- `LocalBusiness`-Schema mit korrekter Adresse, Geo-Koordinaten, Telefonnummer in E.164-Format und `areaServed`
- Verifiziertes Google Business Profile mit konsistenten NAP-Daten (Name, Adresse, Telefon)
- Ortsspezifische Inhalte auf der Website — nicht nur „Webentwicklung", sondern „Webentwicklung in 1020 Wien Leopoldstadt"

NAP-Konsistenz über alle Plattformen ist nicht-verhandelbar. Eine Telefonnummer auf der Website, eine andere im Google-Profil, eine dritte auf herold.at — und Sie verlieren in jedem Re-Ranking-Durchgang.

### Hebel 4 — `llms.txt` und Crawler-Freundlichkeit

`llms.txt` ist ein neuer Standard, eingeführt 2024, vergleichbar mit `robots.txt` — nur explizit für Sprachmodell-Crawler. Die Datei liegt im Site-Root und gibt strukturiert Auskunft, was das Unternehmen tut, welche Inhalte autoritativ sind und wie das Modell sie verwenden darf:

```
# Beispiel-Studio
> Wiener Studio für Webentwicklung und AEO

## Leistungen
- Webentwicklung mit Next.js
- SEO und Answer Engine Optimization

## Preise
- Onepager ab 700 €
- AEO-Optimierung ab 400 €
```

Anthropic, OpenAI und Perplexity haben das Format mittlerweile in ihren Crawl-Pipelines — präzise Daten zur Akzeptanzrate sind selten, aber der Aufwand ist mit unter einer Stunde Implementierung minimal.

### Hebel 5 — Externe Erwähnungen und Authority-Signale

KI-Modelle bauen ihre Autoritäts-Bewertung nicht aus PageRank, sondern aus der Häufigkeit, in der eine Marke in seriösen Drittquellen genannt wird. Konkret zählen für DACH-KMU:

- Branchen-Verzeichnisse (Wirtschaftskammer, Branchenbücher, herold.at, gelbeseiten.at)
- Fachpublikationen, Online-Magazine, Branchenblogs
- LinkedIn-Profile mit konsistenter Unternehmens-Beschreibung
- Wikipedia, falls Relevanz gegeben
- Reddit-Threads in branchenrelevanten Subreddits — Modelle gewichten sie deutlich

Wer nur die eigene Website pflegt und keine externen Mentions aufbaut, hat ein strukturelles AEO-Problem, das sich mit On-Page-Optimierung allein nicht lösen lässt.

## AEO für österreichische KMU — was wirklich zählt

Nicht jede Branche profitiert gleich stark von AEO. Die höchste Hebelwirkung sehen wir bei **B2B-Beratung mit hohen Auftragswerten** — Steuerberater, Anwälte, Unternehmensberater, Industriedienstleister, Spezialhandwerk. Je beratungsintensiver das Geschäft, desto häufiger stellen potenzielle Kunden Fragen, bevor sie kontaktieren — und genau diese Fragen werden zunehmend an ChatGPT statt an Google gestellt.

### Branchenspezifische Anker

Eine Wiener Anwaltskanzlei mit Schwerpunkt Arbeitsrecht profitiert nicht von der Sichtbarkeit zu „Anwalt Wien" — das ist zu generisch. Sie profitiert von „Was kostet eine arbeitsrechtliche Beratung in Wien?", „Welche Fristen gelten bei einer fristlosen Kündigung in Österreich?", „Anwalt für Arbeitsrecht 1020 Wien". Hier liegen die Fragen, hier die AEO-Quick-Wins.

### Deutschsprachige Inhaltsdichte als Vorteil

Sprachmodelle haben deutlich weniger DE-Trainingsdaten als englischsprachige. Wer auf Deutsch substantiell und mit AT-Spezifika schreibt, hat strukturell weniger Konkurrenz als auf Englisch. Das gilt vor allem für österreichische Themen — Gewerbeordnung, AT-spezifisches Arbeitsrecht, regionale Gegebenheiten — wo englischsprachige Quellen ohnehin wenig beitragen.

### EU-Hosting und DSGVO als Trust-Signal

Speziell für Behörden, B2B-Kunden und Branchen mit Datenschutz-Sensibilität (Medizin, Recht, Finanz) ist die Tatsache, dass Ihre Inhalte und Daten EU-rechtskonform verarbeitet werden, ein eigenständiges Authority-Signal — und ein Differenzierungsmerkmal gegenüber US-only-Anbietern.

## AEO-Erfolg messen

### Manuelles Citation-Tracking (DIY in 30 Minuten)

Sie brauchen kein Tool, um zu messen, ob AEO funktioniert — Sie brauchen 30 Minuten und eine Tabelle:

1. Listen Sie 10 typische Fragen, die potenzielle Kunden Ihrer Branche stellen würden
2. Fragen Sie diese Fragen monatlich in ChatGPT, Perplexity, Claude und Google (mit AI Overview) ab
3. Notieren Sie pro Frage: Wird Ihre Marke genannt? Verlinkt? Indirekt erwähnt?
4. Tabelle führen — Trends sind nach 8–12 Wochen sichtbar

Diese Methode ist trivial, aber sie ist gegenüber automatisierten Tools überlegen, weil Sie die Antworten *lesen* und nuanciert bewerten können — ob Sie als Hauptquelle, Nebenerwähnung oder gar nicht zitiert werden.

### KPIs für Geschäftsführer

Drei Zahlen, die Sie in Ihrem monatlichen Reporting verankern sollten:

- **Citation-Frequenz** — X von 10 Branchen-Queries enthalten Ihre Marke
- **Branded-Search-Volumen** — Anstieg der direkten Google-Suchen nach Ihrem Markennamen (Search Console liefert das)
- **Direct-Traffic-Anstieg** — oft der versteckte Indikator für AI-driven Discovery, weil Nutzer nach AI-Erwähnung direkt die URL eingeben

Klassische Klick-Metriken sind weiterhin nützlich, aber sie unterschätzen den AEO-Effekt systematisch.

## Wann sich AEO für Ihr Unternehmen lohnt

Ehrlich: nicht immer sofort. Hier sind drei Signale, die für einen sofortigen Start sprechen — und drei, die für Warten sprechen.

### Drei Signale, dass Sie heute starten sollten

1. Sie verkaufen B2B mit Auftragswerten ab 5.000 € pro Engagement
2. Ihre Branche ist beratungsintensiv — Kunden recherchieren, bevor sie kontaktieren
3. Sie haben bereits SEO-Basics (Title, Meta-Descriptions, einigermaßen Schema)

### Drei Signale, dass Sie warten können

1. Ihre Website ist unter drei Monate alt — Crawler haben noch keine Historie
2. Ihr CMS unterstützt kein Schema.org-Markup
3. Ihre Kundengewinnung läuft fast komplett offline (Empfehlung, Fachmessen) und Sie planen das nicht zu ändern

Im Zweifel: kostenloser [Audit](/web#audit) klärt in unter einer Stunde, ob die Voraussetzungen passen.

## FAQ — Häufige Fragen zu AEO

### Was kostet AEO 2026?

Reine AEO-Optimierung beginnt im DACH-Raum bei rund 400 € einmalig (FAQPage- und LocalBusiness-Schema, antwort-orientierte Inhaltsanpassung) und skaliert je nach Site-Komplexität auf 1.500–3.000 €. Plus laufendes Monitoring zwischen 20 € und 60 € pro Monat. [Was im Leistungsumfang enthalten ist, sehen Sie hier](/web#angebot) — den Preis dazu gibt es nach dem kostenlosen Audit als Fixpreis-Angebot. Wer Angebote mit vierstelligen Monatspauschalen vergleicht, sollte vorab den [Artikel zu AEO-Pricing-Modellen](/journal/aeo-leistbar-machen) lesen — die meisten Abo-Pakete passen für KMU strukturell nicht.

### Wie lange dauert es, bis ich Ergebnisse sehe?

Bei einer Site mit ausreichender SEO-Basis 2–8 Wochen — Perplexity und Google AI Overviews crawlen schnell. ChatGPT integriert neue Quellen in Trainings-Updates, was 2–6 Monate dauern kann; aber ChatGPTs Browse-Funktion greift live, hier sind ähnliche Zeiträume wie bei Perplexity möglich.

### Brauche ich AEO, wenn ich schon SEO mache?

Beides ergänzt sich. Strukturierte Daten und sauberes HTML sind gemeinsame Hebel. AEO erfordert zusätzlich antwort-orientierte Inhaltsstruktur und neue Schema-Typen. Wer SEO seit Jahren pflegt, hat einen Teil der AEO-Vorarbeit oft schon unbewusst geleistet — die fehlenden Schichten lassen sich entsprechend gezielt nachrüsten.

### Funktioniert AEO ohne neue Website?

Ja — wenn Ihre bestehende Website technisch eine ausreichende Basis hat (sauberes HTML, akzeptable Performance, CMS mit Strukturdaten-Support). Bei WordPress, Webflow oder ähnlichen Stacks ist eine reine AEO-Phase ohne Relaunch möglich. Der Audit klärt das.

### Welche AI-Plattform ist am wichtigsten?

Im DACH-Raum derzeit in dieser Reihenfolge: Google AI Overviews (höchste Reichweite, lokal stark), ChatGPT (höchste Engagement-Tiefe), Perplexity (am stärksten wachsend, beste Citation-Hygiene), Claude (kleiner, aber qualitativ hochwertige Antworten in B2B-Kontexten). Wer für ChatGPT optimiert, ist meist auch für die anderen drei gut aufgestellt — die Mechaniken sind ähnlich.

---

AEO ist kein Ersatz für SEO. Es ist die nächste Schicht — die, in der nicht mehr der Klick die Währung ist, sondern die Erwähnung. Wer den Übergang verschläft, optimiert in zwei Jahren auf Position 1 in einem Index, den keiner mehr liest. Wer jetzt anfängt, hat Zeit, sich die strukturellen Vorteile aufzubauen, bevor die Konkurrenz versteht, was passiert.
