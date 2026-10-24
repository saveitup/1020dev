# lib/

## `data.ts` — Single Source of Truth

Diese Datei ist die **autoritative Quelle für alle Inhalte** der Site. Alle Components importieren von hier, nichts wird hardcoded.

## Wenn du Inhalte änderst

### Texte der Startseite
`HERO`, `PRODUCTS_HEAD`, `STUDIO`, `FOCUS_HEAD`, `FOCUS`, `REFS_HEAD`, `CONTACT`, `ANNOUNCEMENT`. Bewusst knapp halten — die Site soll wenig preisgeben (keine Preise, kein Telefon, keine Adresse außerhalb des Impressums).

### Eigene Produkte
`PRODUCTS` (Clausl, Spin, AlpenBroker) speist die Produkt-Section direkt unter dem Hero: `field`/`fieldProduct` beschriften die drei Felder, der Rest die Karten. Die Texte stammen 1:1 von clausl.1020.dev, spin.1020.dev und alpenbroker.com — bei Änderungen dort hier nachziehen (Spin und AlpenBroker bleiben beim "du" ihrer Seiten). `screen` ist jeweils der nachgebaute Handy-Inhalt (Clausl: Antwort; AlpenBroker: Kursleiste, ATX-Chart, Werte als feste Momentaufnahme).

### Eigene App
`APPS_SHOWCASE[0]` (Spin your song) speist die `/apps`-Seite und `AppSchema`. `screenshots` zeigt echte iPhone-Screens aus `public/apps/` (1179×2556, als JPEG). Namen und Avatare anderer Nutzer vor dem Einchecken weichzeichnen.

### Referenzen
Ändere `REFS` und lege Bilder in `public/refs/` ab. Konvention:
- 2 Bilder pro Projekt: `<id>-1.jpg` (wird gezeigt) und `<id>-2.jpg` (erscheint beim Hover)
- Format: 1200×750 JPEG, q85, progressive (wird im 16:10-Rahmen von oben beschnitten)
- Ohne Live-URL: `href: null` — die Karte wird dann ohne Link gerendert
- `public/llms.txt` manuell nachziehen

### Site-Config
`SITE` enthält Domain, E-Mail, Cal.com-URL, Standort und die Impressumsdaten (`contact`, `address`, `legal`). Telefon und Adresse nur im Impressum/Datenschutz verwenden.

## Type-Hint

Alle Daten als `as const` typisiert — gibt narrow types in TypeScript. Wenn du eine neue Datenstruktur hinzufügst, denselben Pattern befolgen.

## Niemals hier

- ❌ Funktionen oder Logik (gehört in eigene Module unter `lib/utils/` oder ähnlich)
- ❌ Server-only Code (gehört in API-Routes)
- ❌ Browser-APIs (gehört in Client Components)
