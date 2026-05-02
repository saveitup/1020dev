Eine neue Referenz zur Slideshow hinzufügen.

Schritte:
1. Frage nach Domain, Tag (z.B. "Industrie · CEE"), und ob 2 Screenshots vorliegen
2. Bilder aus dem Pfad den ich nenne nach `public/refs/` als `<id>-1.jpg` und `<id>-2.jpg` kopieren (1200×750 JPEG q85, progressive). Falls sie das Format nicht haben, mit sharp oder ImageMagick konvertieren.
3. `REFS` in `lib/data.ts` ergänzen (richtiges Format, `as const` beachten)
4. Falls jetzt mehr als 3 Refs, weise auf erforderliche CSS-Anpassung in `app/globals.css` hin: 
   - `@keyframes refSlideshow` Total-Cycle anpassen (4s × Anzahl Refs)
   - Alle `nth-child()` `animation-delay` Werte für `.refs > .ref` und `.refs-dots .dot` neu berechnen
   - Anzahl `<span class="dot">` in `Hero.tsx` ergänzen — aktuell hardcoded mit `REFS.map(...)`, also bereits dynamisch ✓
5. Kein automatisches Commit — User reviewt zuerst.
