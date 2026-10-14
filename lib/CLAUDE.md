# lib/

## `data.ts` — Single Source of Truth

Diese Datei ist die **autoritative Quelle für alle Inhalte** der Site. Alle Components importieren von hier, nichts wird hardcoded.

## Wenn du Inhalte änderst

### Texte der Startseite
`HERO`, `STUDIO`, `FOCUS_HEAD`, `FOCUS`, `REFS_HEAD`, `CONTACT`, `ANNOUNCEMENT`. Bewusst knapp halten — die Site soll wenig preisgeben (keine Preise, kein Telefon, keine Adresse außerhalb des Impressums).

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
