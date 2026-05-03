---
title: "Website für Metallbau-Betriebe: Was wirklich konvertiert (Case Zeilinger Metallbau Wien)"
description: "Wie eine Metallbau-Website konkret aussehen muss, damit sie B2B-Anfragen generiert — und was wir aus dem Projekt für zeilinger-metallbau.at gelernt haben. Konkrete Hebel statt Marketing-Theorie."
publishedAt: "2026-05-31"
category: "Case-Study"
keywords:
  - website metallbau
  - metallbau website wien
  - webseite metallbaufirma
  - online präsenz handwerk österreich
  - referenzen metallbau site
draft: false
---

Metallbau-Auftraggeber suchen anders als Endkonsumenten. Sie googeln nicht „bester Metallbauer", sie googeln „Stahlkonstruktion Vordach Wien" — und sie entscheiden weniger nach Design als nach Beweismaterial. Eine Metallbau-Website, die für ein Modemagazin entworfen wurde, konvertiert nicht. Eine, die wie ein Werkstattkatalog wirkt, auch nicht. Was funktioniert, lässt sich aus konkreten Cases ableiten — wir zeigen den Aufbau am Beispiel von [zeilinger-metallbau.at](https://zeilinger-metallbau.at).

## Warum Metallbau-Sites oft an ihrer Zielgruppe vorbei laufen

### Die typische Falle — Generalisten-Marketing-Sprache

„Wir realisieren Ihre Vision in Stahl." „Qualität, die verbindet." „Tradition trifft Moderne." Das sind Phrasen, die in 80 % der Metallbau-Websites stehen — und exakt nichts darüber aussagen, ob der Betrieb für ein konkretes Vorhaben passt. Auftraggeber im Metallbau-Bereich (Architekten, Bauträger, Industrie-Einkäufer, private Bauherren mit größerem Budget) lesen über solche Phrasen hinweg und suchen nach Substanz.

### Was Metallbau-Auftraggeber tatsächlich entscheidet

In Briefings und Sales-Calls hören wir immer wieder dieselben drei Fragen:

1. **Habt ihr sowas schon gemacht?** — Bauherren, Architekten und Industrie-Einkäufer wollen Referenzen sehen, die ihrem Vorhaben ähneln. Allgemeine Portfolios reichen nicht; konkrete vergleichbare Projekte schon.
2. **Wie schnell und wie zuverlässig?** — Im Metallbau geht es oft um terminkritische Bauphasen. Wer Lieferzeiten und Verlässlichkeit nicht klar kommuniziert, verliert vor dem ersten Telefonat.
3. **Sitzt ihr in der Region?** — Lokale Nähe ist im Metallbau nicht-trivial. Lange Wege bedeuten höhere Liefer- und Montagekosten, längere Reaktionszeiten bei Nacharbeit.

Eine Site, die diese drei Fragen sofort beantwortet, hat den ersten Trust-Schritt geschafft. Eine Site, die sie verschweigt oder unter Marketing-Phrasen begräbt, nicht.

## Der Case Zeilinger Metallbau — Ausgangslage

### Das Unternehmen

Zeilinger Metallbau ist ein etablierter Wiener Metallbau-Betrieb mit Schwerpunkten Geländer, Treppen, Stahlkonstruktion und Tor- und Zaunbau. Klassisches B2B-Profil mit Architekten, Bauunternehmen und privaten Auftraggebern aus dem Wiener Raum. Auftragsspektrum von Einzelfertigung bis hin zu mittleren Bauprojekten.

### Das Briefing

Die bestehende Website war funktional, aber strukturell unklar — viele Inhalte ohne klare Hierarchie, Referenzen verstreut, Performance schwach, kein Schema.org-Markup. Anfragen kamen vor allem über Empfehlungen; die Website spielte als Kanal kaum eine Rolle.

Das Ziel: Die Site soll zur eigenständigen Lead-Quelle werden, ohne den Charakter des Betriebs zu verfälschen. Kein Marketing-Aufguss, keine Stockfotos. Klare Struktur, echtes Beweismaterial, lokale Verankerung.

## Was wir gebaut haben

### Klare Leistungsstruktur

Statt einer langen „Leistungsspektrum"-Seite mit zwölf Bullet-Points eine strukturierte Hierarchie nach Werkstücken — Geländer, Stahlkonstruktion, Tore, Treppen, Spezialanfertigungen. Jede Leistungsrubrik mit eigener URL, eigener Beschreibung, eigenen Bildern. Das hilft sowohl menschlichen Auftraggebern (sofort die richtige Sektion finden) als auch Suchmaschinen-Crawlern (klare Topical Authority pro Leistung).

### Referenzgalerie als Beweismaterial

Die größte Investition ging in die Referenzdarstellung: hochaufgelöste Fotos echter Projekte, kategorisiert nach Werkstück-Typ und Bauphase. Jede Referenz mit kurzem Kontext — was, wofür, wann. Keine Stockfotos, kein Marketing-Glanz; das Material des Betriebs in seiner natürlichen Umgebung.

Diese Galerie ist der zentrale Trust-Hebel. Architekten und Bauträger durchblättern sie systematisch und machen sich vor dem ersten Kontakt ein Bild der Werkstatt-Qualität.

### Lokale Signale für Wien

`LocalBusiness`-Schema mit korrekter Adresse, Geo-Koordinaten, Öffnungszeiten und `areaServed: Wien + Niederösterreich`. Verifiziertes Google Business Profile mit konsistenten NAP-Daten (Name, Adresse, Telefon). Ortsspezifische Anker-Begriffe in Headings und Body („Metallbau Wien", „Stahlkonstruktion Wiener Raum").

Diese Signale wirken doppelt: in klassischen Local-Pack-Listings auf Google und in den lokalen Empfehlungen, die ChatGPT und Perplexity zunehmend bei Anfragen wie „Metallbauer in Wien" geben. Mehr zu diesem Mechanismus im [AEO-Leitfaden](/journal/aeo-2026-leitfaden).

### Schema.org für Handwerks-Branche

Über das Standard-`Organization`- und `LocalBusiness`-Schema hinaus implementiert: `Service`-Markup für jede angebotene Leistung mit `provider`, `areaServed`, `serviceType`. `BreadcrumbList` für die Navigation zwischen Leistungs-Seiten. `ImageObject`-Markup für die Referenzgalerie mit beschreibenden `caption`-Feldern.

Das ist die Grundlage dafür, dass Sprachmodelle die Site nicht als generische Handwerks-Website, sondern als spezifische Wiener Metallbau-Quelle einordnen.

### Performance — Lighthouse 100

Mobile-first, AVIF-Bilder, statisch generiert via Next.js, EU-Hosting. Lighthouse-Score 100 in allen vier Kategorien — Performance, Accessibility, Best Practices, SEO. Wichtig nicht aus Eitelkeit, sondern weil Performance ein direktes Ranking-Signal ist und im B2B die Geduld bei langsamen Sites geringer ist als im B2C.

## Was funktioniert hat

Die Site läuft seit ihrer Veröffentlichung; messbare Effekte zeigen sich auf drei Ebenen.

### Direkt-Anfragen

Der Anteil der Erst-Anfragen, die explizit auf die Website verweisen, ist deutlich gestiegen. Architekten und Bauträger schreiben nicht mehr „ich habe Sie empfohlen bekommen", sondern „ich habe Ihre Referenzen für Stahlkonstruktion gesehen". Das ist ein Quality-Indicator, kein Vanity-Metric — diese Anfragen konvertieren erfahrungsgemäß höher.

### Suchsichtbarkeit

Lokale Sichtbarkeit für Anker wie „Metallbau Wien", „Geländer Wien", „Stahlkonstruktion Wien" hat sich messbar verbessert. Die Site rankt für die Long-Tails (z.B. „Metallbau Vordach Wien") in den oberen Positionen — ein Bereich, der durch Empfehlungs-Traffic vorher nicht abgedeckt war.

### AEO-Effekte

In Spotchecks bei ChatGPT und Perplexity zu Fragen wie „Wer macht Stahlkonstruktion in Wien?" wird der Betrieb seit kurzem genannt — nicht in jeder Antwort, aber häufiger als vor dem Relaunch. Das ist messbar, aber qualitativ; eindeutige Citation-Häufigkeit braucht weiteres Monitoring.

## Fünf Lehren für andere Metallbau-Betriebe

1. **Referenzen vor Marketing-Sprache.** Wenn Sie nur eine Investition in Ihre Site machen können, machen Sie sie in qualitativ hochwertige Referenz-Fotos. Stockfotos und Marketing-Phrasen senden das gegenteilige Signal.

2. **Branchenspezifische Suchbegriffe.** Optimieren Sie auf konkrete Werkstücke (Geländer, Treppen, Tore, Stahlkonstruktion) statt auf generisches „Metallbau". Long-Tails konvertieren besser, sind weniger umkämpft, und entsprechen tatsächlichem Such-Verhalten.

3. **Lokale Verankerung in Schema und Text.** `LocalBusiness`-Schema ist Pflicht, nicht Kür. Plus konsistente Adress-Daten überall (Site, Google Business, Branchenverzeichnisse). Wer hier inkonsistent ist, verliert in lokalen Such-Rankings und AI-Empfehlungen.

4. **Schema.org für Handwerks-Listings.** `Service`-Markup pro Leistung, `LocalBusiness` mit `areaServed`, `BreadcrumbList` für Struktur. Das sind 1–2 Stunden Implementierungs-Aufwand mit überproportionaler Wirkung.

5. **Tempo schlägt Polish.** Eine Site, die in vier Wochen live geht, schlägt eine, die in vier Monaten perfekt wird. Iterationsfähig denken — Live-Gang mit Basis, Optimierung nach Daten. Was wirklich konvertiert, sehen Sie erst in den ersten Anfragen.

## FAQ — Häufige Fragen zur Metallbau-Website

### Was kostet eine Metallbau-Website wie diese?

Im Bereich 3.500–6.000 € einmalig — abhängig von Anzahl der Leistungs-Seiten, Umfang der Referenzgalerie und Custom-Design-Tiefe. Plus laufende Wartung von 200–500 € pro Jahr. Vollständige Preisbereiche im [Pricing-Artikel](/journal/website-kosten-wien-2026).

### Wie viele Referenz-Fotos brauche ich?

Mindestens 15–20 hochaufgelöste Bilder verteilt über die Hauptleistungen. Mehr ist besser, aber Qualität vor Quantität — fünf scharfe, gut beleuchtete Werkstattaufnahmen schlagen 30 verwackelte Smartphone-Fotos.

### Reicht WordPress oder brauche ich Custom?

Beides geht. WordPress mit gutem Theme und manueller Schema-Erweiterung deckt 70 % der Metallbau-Anforderungen ab. Custom (Next.js, Markdown, Headless CMS) ist sinnvoll, wenn Performance kritisch ist oder spezifische Integrationen (CRM, Lead-Tracking) gebraucht werden.

### Wie lange dauert ein Relaunch?

Bei guter Vorbereitung (Inhalte und Referenz-Fotos liegen vor): 4–6 Wochen vom Briefing bis Go-Live. Bei Inhalts-Recherche und Foto-Shooting innerhalb des Projekts: 8–12 Wochen.

### Wie wichtig ist Mobile-Optimierung im B2B-Metallbau?

Wichtiger als oft angenommen. Architekten und Bauträger schauen Sites zunehmend auf dem Handy an — auf der Baustelle, im Auto, zwischen Terminen. Eine Site, die mobile schlecht funktioniert, verliert hier Auftraggeber, die im Office-Setting nie vorbeischauen.

---

Im Metallbau zählt am Ende dieselbe Mechanik wie in jeder B2B-Branche: Beweismaterial schlägt Marketing, lokale Verankerung schlägt globale Phrasen, klare Struktur schlägt Polish. Eine Site, die das versteht, generiert Anfragen, ohne lauter zu sein. Eine, die das ignoriert, ist eine teure Visitenkarte.

Falls Sie überlegen, ob Ihre eigene Site diese Punkte erfüllt: Der [kostenlose Audit](/web#audit) liefert in unter einer Minute eine erste Einschätzung.
