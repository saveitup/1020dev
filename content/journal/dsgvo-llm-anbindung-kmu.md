---
title: "DSGVO-konforme LLM-Anbindung: Was Wiener KMU wissen müssen"
description: "Wie KMU in Österreich Claude, GPT und Open-Source-Modelle DSGVO-konform einsetzen — EU-Hosting, Auftragsverarbeitungsverträge, On-Premise vs. API, und konkrete Setup-Empfehlungen."
publishedAt: "2026-07-05"
category: "Automation"
keywords:
  - dsgvo llm
  - chatgpt dsgvo
  - claude dsgvo eu
  - dsgvo konforme ki
  - llm österreich
draft: false
---

Die Anbindung von Sprachmodellen an Geschäftsprozesse — Lead-Qualifizierung, Dokumenten-Workflows, interne Tools — ist 2026 für KMU technisch trivial geworden. Rechtlich nicht. Wer ChatGPT, Claude, Gemini oder Open-Source-Modelle in Workflows mit personenbezogenen Daten einbindet, bewegt sich in einem regulatorischen Feld, das sich erst stabilisiert. Hier sind die konkreten Fragen, die ein KMU-Inhaber vor der ersten Integration klären sollte, und die Antworten, die wir aus laufenden Projekten geben.

## Worum es bei DSGVO + LLMs geht

Sobald Sie personenbezogene Daten — Name, E-Mail, Telefonnummer, Lebenslauf, Krankheitsdaten, Vertragsinhalte — durch ein Sprachmodell verarbeiten lassen, greift die DSGVO. Das Modell ist dann ein Auftragsverarbeiter im Sinne von Artikel 28 DSGVO. Daraus folgen drei harte Anforderungen:

1. **Rechtsgrundlage** für die Verarbeitung (Einwilligung, Vertrag, berechtigtes Interesse — je nach Use-Case)
2. **Auftragsverarbeitungsvertrag (AVV)** mit dem LLM-Anbieter
3. **Garantie der Datensicherheit** — meist über EU-Hosting und definierten Datenfluss

Was eine seriöse Anbindung von einer riskanten unterscheidet, sind nicht die Modelle, sondern Konfiguration und Datenfluss. Dieselbe Claude-API kann DSGVO-konform oder DSGVO-grenzwertig betrieben werden, je nach Setup.

## Die drei Risiko-Ebenen

### Risiko 1: Datenfluss in Drittländer

Standard-API-Calls an OpenAI laufen historisch über US-Server. Auch wenn OpenAI seit 2024 EU-Hosting für Enterprise-Kunden anbietet, ist die Default-Variante für viele Pricing-Tiers weiterhin US-Routing. Daten in den USA fallen unter US-Recht, was DSGVO-konform nur via Standardvertragsklauseln und Schrems-II-Prüfung möglich ist — operativ aufwendig.

### Risiko 2: Modelltraining mit Ihren Daten

Bei Standard-Consumer-Tarifen (ChatGPT Plus, Claude Pro) verwenden die Anbieter Konversations-Daten teilweise zum Modelltraining. Bei API-Zugang ist das anders — OpenAI, Anthropic und Google nutzen API-Inputs grundsätzlich nicht zum Training. Aber: Sie sollten das pro Anbieter und Tarif explizit prüfen, weil Bedingungen sich ändern.

### Risiko 3: Logging und Caching beim Anbieter

Auch ohne Training werden API-Calls oft 30–60 Tage gelogt für Abuse-Detection und Debugging. Das bedeutet: Ihre personenbezogenen Daten existieren temporär außerhalb Ihrer Kontrolle, auf Anbieter-Servern. Bei Anthropic Claude und Anthropic AVV kann „Zero Retention Mode" aktiviert werden — kein Logging der Inputs. Bei OpenAI gibt es vergleichbare Enterprise-Optionen.

## Was Anthropic, OpenAI, Mistral bieten

Stand Mitte 2026, Konditionen ändern sich:

**Anthropic Claude.** EU-Hosting verfügbar via AWS Frankfurt für Enterprise- und API-Kunden. AVV standardmäßig auf Anfrage. Zero Retention Mode auf API-Ebene aktivierbar. Default-Region für API-Calls aus Europa: AWS Frankfurt für die meisten Tier-Kunden.

**OpenAI (ChatGPT, GPT-4).** EU-Hosting verfügbar für Enterprise-Tier (ChatGPT Enterprise, Azure OpenAI Service in EU-Regions). Bei Standard-API ohne Enterprise-Setup: weiterhin oft US-Routing. AVV verfügbar.

**Google (Gemini).** Über Vertex AI in europäischen Regions verfügbar (Frankfurt, Belgien). DSGVO-konform mit AVV.

**Mistral (französisches Open-Source-Lab).** EU-basierter Anbieter mit La Plateforme. DSGVO-Compliance ist Kern-Pitch. Modelle teilweise auch on-premise lizenzierbar.

**Open Source (Llama, Mixtral, Qwen).** Können auf eigenen Servern in der EU betrieben werden — maximale Datensouveränität, aber höhere Infrastruktur-Anforderungen.

## Was Sie als Auftraggeber prüfen müssen

Vor dem ersten Live-Workflow:

1. **AVV vom Anbieter anfordern** und vom Datenschutzbeauftragten oder Anwalt prüfen lassen. Nicht „wir haben eine Privacy Policy" — ein expliziter Auftragsverarbeitungsvertrag.
2. **Datenfluss dokumentieren** — Welche Daten gehen in welcher Form an welchen Anbieter, wo werden sie verarbeitet, wo gelogt, wie lange?
3. **Verzeichnis von Verarbeitungstätigkeiten** aktualisieren (Pflicht nach Art. 30 DSGVO)
4. **Datenschutzerklärung** anpassen — Nutzer, deren Daten via LLM verarbeitet werden, müssen das wissen
5. **Anonymisierung wo möglich** — wenn der Use-Case das erlaubt, vor dem Versand an die LLM-API personenbezogene Daten ersetzen oder pseudonymisieren

Bei sensitiven Daten (Gesundheit, Finanzen, Strafrecht) gelten zusätzliche Anforderungen — hier in der Regel On-Premise oder zumindest EU-Hosting Pflicht.

## On-Premise oder API — wann was

| Faktor | API (Anthropic, OpenAI, Mistral) | On-Premise (Llama, Mixtral) |
|---|---|---|
| Setup-Kosten | Niedrig (API-Key, paar Stunden Integration) | Hoch (GPU-Server ab 2.500 €/Monat) |
| Compliance-Risiko | Mittel (managed durch AVV) | Niedrig (volle Datenkontrolle) |
| Modell-Qualität | Höchste verfügbare Qualität | Gut, aber 1–2 Generationen hinterher |
| Skalierbarkeit | Praktisch unbegrenzt | Limitiert durch eigene Infrastruktur |
| Wartungsaufwand | Praktisch null | Real (Updates, Monitoring, Sicherheit) |

**Faustregel:** Für 90 % der KMU-Use-Cases ist API mit EU-Hosting und sauberem AVV der richtige Weg. On-Premise lohnt sich bei spezifischen Branchen (Gesundheit, Finanzen, Recht) oder wenn die Verarbeitung extrem sensitive Daten umfasst.

## Konkretes Setup für österreichische KMU

So sieht ein DSGVO-konformes LLM-Setup für ein typisches B2B-KMU aus, das wir in Projekten umsetzen:

1. **Modell-Auswahl:** Claude 3.7 Sonnet via Anthropic API mit EU-Hosting (AWS Frankfurt) — oder GPT-4o via Azure OpenAI Service in der Region „Sweden Central"
2. **AVV:** vor erstem Produktiv-Call abgeschlossen und dokumentiert
3. **Konfiguration:** Zero Retention Mode aktiviert, kein Logging der Inputs
4. **Anonymisierung:** wo Use-Case erlaubt, personenbezogene Daten vor API-Call mit Token-Platzhaltern ersetzt
5. **Logging eigenseitig:** API-Calls und Outputs auf eigenem EU-Server protokolliert (Hetzner Wien oder Vercel EU-Region) — kontrollierter Audit-Trail
6. **Rate-Limiting:** Server-seitig vor API-Call, um versehentliche Massenverarbeitung zu verhindern
7. **Datenschutzerklärung:** Nennt explizit, welche LLM-Anbieter eingesetzt werden, mit welchem Zweck, in welchem Land verarbeitet wird

Das Setup deckt bei sauberer Umsetzung 95 % der Standard-Workflows ab. Für die letzten 5 % (Gesundheitsdaten, Anwalt-Akten) braucht es On-Premise.

Mehr zur konkreten Umsetzung von LLM-basierten Workflows auf der [Automation-Service-Seite](/automation).

## FAQ

### Darf ich ChatGPT geschäftlich nutzen?

ChatGPT in der Standard-Consumer-Variante (ChatGPT Plus) ist für die Verarbeitung von personenbezogenen Geschäftsdaten nicht ausreichend — Trainings-Use ist möglich, AVV-Status unklar. ChatGPT Enterprise oder GPT-4 via Azure OpenAI ist DSGVO-konform einsetzbar, mit AVV und EU-Hosting.

### Was ist mit Claude direkt im Browser?

Claude.ai (Consumer) ähnlich wie ChatGPT — nicht für sensible Geschäftsdaten geeignet. Claude API mit AVV und EU-Hosting (AWS Frankfurt) ist DSGVO-konform.

### Welche Strafe droht bei Verstoß?

Theoretisch bis zu 20 Mio € oder 4 % des Jahresumsatzes. Praktisch werden bei KMU eher 5-stellige bis niedrige 6-stellige Bußgelder verhängt — bei klaren Verstößen, nach vorheriger Beanstandung, mit Mahnung. Aktuelle DSGVO-Bußgeld-Tracker zeigen den Trend.

### Brauche ich einen Datenschutzbeauftragten?

Nicht zwingend für jede LLM-Anbindung, aber bei strukturierter Verarbeitung von personenbezogenen Daten in Österreich oft Pflicht ab gewisser Mitarbeiteranzahl. Klären Sie das mit Ihrem aktuellen Datenschutzbeauftragten oder, wenn keiner vorhanden, mit der Datenschutzbehörde oder einem auf DSGVO spezialisierten Anwalt.

### Wer trägt die Verantwortung im Streitfall?

Sie als Verantwortlicher — der Anbieter ist Auftragsverarbeiter. Im AVV haftet der Anbieter für eigene Verstöße, aber die Hauptverantwortung gegenüber dem Betroffenen bleibt bei Ihnen. Deshalb: AVV genau lesen, Setup ordentlich aufsetzen.

---

DSGVO + LLMs ist nicht das Problem, das viele KMU befürchten — es ist ein operativer Prozess mit klaren Schritten. Wer die Grundlagen sauber aufsetzt (EU-Hosting, AVV, Anonymisierung wo möglich, dokumentierter Datenfluss), kann LLM-Workflows produktiv nutzen, ohne rechtlich auf Glatteis zu treten. Wer die Schritte überspringt, hat ein Problem, das im Zweifelsfall richtig teuer wird.

Wenn Sie konkret Workflow-Automation oder AI-Integration für Ihr Unternehmen planen: [Erstgespräch zur Automation](/automation) oder [direkt per E-Mail](mailto:hallo@1020.dev).
