# lib/

## `data.ts` — Single Source of Truth

Diese Datei ist die **autoritative Quelle für alle Inhalte** der Site. Alle Components importieren von hier, nichts wird hardcoded.

## Wenn du Inhalte änderst

### Leistungsumfang (keine Preise!)
`SCOPE`, `AUTOMATION_SCOPE` und `APPS_SCOPE` enthalten **nur `name` und `desc`** — die Site veröffentlicht bewusst keine Beträge, der Preis kommt nach dem Audit als Fixpreis-Angebot. Füge keine `price`-Felder hinzu, ohne das mit dem Inhaber abzuklären. Betroffen wären dann auch: `components/Scope.tsx` (UI), `FAQS[2]`/`APPS_FAQS[2]` (Preis-FAQs), `components/LocalBusinessSchema.tsx` (OfferCatalog), `app/agb/page.tsx` und `public/llms.txt` — alle **manuell synchron halten**.

### FAQs
Ändere `FAQS` in `data.ts`. Jeder Eintrag braucht beide Felder:
- `plainAnswer` — für JSON-LD-Schema (kein HTML, keine Sonderzeichen, keine NBSP)
- `htmlAnswer` — für UI (HTML erlaubt: `<a>`, `<strong>`, `&nbsp;` etc.)

Beide sollten dieselbe Aussage treffen, nur Format unterscheidet sich.

### Referenzen
Ändere `REFS` in `data.ts` und lege Bilder in `public/refs/` ab. Konvention:
- 2 Bilder pro Projekt: `<id>-1.jpg` (Hero) und `<id>-2.jpg` (zweite Page)
- Format: 1200×750 JPEG, q85, progressive
- Aktuell **11 Refs × ~4s = 44s Cycle**. Wenn die Anzahl geändert wird, müssen in `app/globals.css` angepasst werden:
  - `.refs > .ref` und `.refs-dots .dot` Animation-Duration
  - Alle `nth-child` Animation-Delays (Formel: `-(N-k+1) * cycle/N`)
  - Keyframes `@refSlideshow` und `@dotActive` Prozentwerte (visible: 0%–(90/N)%, hidden: (100/N)%–((100·(N-1)+10)/N)%)
- Refs ohne Live-URL: `href: null` und `images: []` setzen — `Hero.tsx` rendert dann ein `<div>` mit Placeholder statt Link

### Site-Config
`SITE` enthält Domain, E-Mail, Cal.com-URL, Standort. Wird in Layout-Metadata, llms.txt, Footer, AuditWidget verwendet. **Ändere hier zentral**.

## Type-Hint

Alle Daten als `as const` typisiert — gibt narrow types in TypeScript. Wenn du eine neue Datenstruktur hinzufügst, denselben Pattern befolgen.

## Niemals hier

- ❌ Funktionen oder Logik (gehört in eigene Module unter `lib/utils/` oder ähnlich)
- ❌ Server-only Code (gehört in API-Routes)
- ❌ Browser-APIs (gehört in Client Components)
