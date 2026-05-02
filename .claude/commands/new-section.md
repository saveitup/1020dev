Eine neue Section zur Home-Page hinzufügen.

Schritte:
1. Frage nach: Section-ID (z.B. "ueber-mich"), Tag-Label, Headline, Sub-Text. Falls Daten zu rendern sind, frage nach Struktur.
2. Falls die Section Daten braucht, ergänze die Datenstruktur in `lib/data.ts` (mit `as const`).
3. Erstelle `components/<Name>.tsx` als **Server Component** (außer State/Effects nötig). Nutze das Standard-Pattern:
   ```tsx
   <section className="section" id="...">
     <div className="section-head">
       <div className="section-tag">...</div>
       <h2 className="section-title">...</h2>
       <p className="section-sub">...</p>
     </div>
     {/* content */}
   </section>
   ```
4. Falls neue Styles nötig: in `app/globals.css` ans Ende der bestehenden Section-Styles, mit Kommentar `/* ============== <NAME> ============== */`. Nutze CSS-Variablen aus `:root` (--accent, --text, --line, etc.)
5. Section in `app/page.tsx` an passender Stelle einbinden.
6. Nav-Link in `components/Nav.tsx` ergänzen (falls die Section in der Nav auftauchen soll).
7. Frage zum Schluss, ob die Section auch im JSON-LD-Schema oder llms.txt referenziert werden soll.
