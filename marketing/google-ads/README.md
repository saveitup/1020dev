# Google Ads — Import-Pakete für 1020.dev

Komplettes Asset-Set für die Suchnetzwerk-Kampagne. Alle Texte sind auf die RSA-Constraints geprüft (Titel ≤ 30, Textzeilen ≤ 90 Zeichen).

## Dateien

| Datei | Inhalt | Wohin |
|---|---|---|
| `campaign-settings.csv` | Budget, Gebot, Standort, Zeitplan | Manuell im Google-Ads-UI eintragen (keine Editor-Spalten) |
| `keywords.csv` | 30 Keywords über 3 Anzeigengruppen, Phrase + Exact Match | Google Ads Editor → Keywords |
| `negatives.csv` | 35 ausschließende Keywords (Kampagnen-Ebene) | Google Ads Editor → Negative keywords (Campaign) |
| `responsive-search-ads.csv` | 3 RSAs, je 15 Titel + 4 Textzeilen | Google Ads Editor → Ads → Responsive search ads |
| `sitelinks.csv` | 4 Sitelinks | Google Ads Editor → Ads & assets → Sitelinks |
| `callouts.csv` | 6 Callouts | Google Ads Editor → Ads & assets → Callouts |
| `structured-snippets.csv` | Snippet "Dienstleistungen" | Google Ads Editor → Ads & assets → Structured snippets |

## Reihenfolge des Imports

1. **Im Web-UI: Kampagne anlegen** mit den Werten aus `campaign-settings.csv`. Status auf **Pausiert** lassen — Live-Schaltung erst nach Schritt 8.
2. **Conversion-Tracking konfigurieren** (siehe unten) — **bevor** die Kampagne läuft.
3. Google Ads Editor öffnen → Account herunterladen → Kampagne `1020.dev | Search | Wien` auswählen.
4. **Anzeigengruppen anlegen**: `Webentwicklung Wien`, `SEO Wien`, `AEO` (Standard-Max-CPC 2,00 €).
5. `keywords.csv` über **Make multiple changes** → **Add/Update keywords** importieren.
6. `negatives.csv` über **Make multiple changes** → **Add/Update campaign negative keywords** importieren.
7. `responsive-search-ads.csv` über **Make multiple changes** → **Add/Update ads** importieren.
8. `sitelinks.csv`, `callouts.csv`, `structured-snippets.csv` jeweils über **Asset library** → CSV-Import.
9. **Post-Änderungen** (Editor → "Post"): Account-Status mit Cloud syncen.
10. Im Web-UI: Vorschau für jede Anzeige checken (Stichprobe), dann **Status auf Aktiviert**.

## Conversion-Tracking — kritischer Schritt

Das Code-Setup im Repo (`components/GoogleTag.tsx` + `lib/analytics.ts`) erwartet **drei Environment-Variablen**:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONV_BOOKING=AW-XXXXXXXXX/abcDef123
NEXT_PUBLIC_GOOGLE_ADS_CONV_AUDIT=AW-XXXXXXXXX/xyzAbc456
```

So bekommst du die Werte:

1. **Google Ads → Tools → Conversions → "Conversion erstellen" → Website**
2. Zwei Conversions anlegen:
   - **Erstgespräch buchen** — Kategorie: Buchungstermin, Wert: 80 € einmalig pro Klick, Zähl-Methode: "Eine"
   - **AEO-Audit abgeschlossen** — Kategorie: Lead, Wert: 20 € einmalig, Zähl-Methode: "Eine"
3. Als Tracking-Methode **"Google-Tag"** auswählen (nicht GTM, nicht manuell).
4. Die `AW-XXXX/Label`-Werte aus dem Code-Snippet kopieren — das ist das Conversion-Label.
5. In Vercel die drei `NEXT_PUBLIC_*`-Vars setzen (Production + Preview).
6. Redeploy. Dann auf 1020.dev: DevTools → Network-Tab → "googletagmanager.com/gtag" sollte 200 zurückgeben.
7. **Conversion testen**: Im Browser einen Cal.com-Klick simulieren, dann in Google Ads → Conversions → Status auf "Aktiv mit aktuellen Conversions" warten (kann bis zu 24 h dauern).

## Was im Code passiert

- `<GoogleTag />` lädt `gtag.js` global (nur wenn die Env-Var gesetzt ist).
- Ein **Click-Listener** auf `<a href="https://cal.eu/1020dev*">` (matcht auch `cal.com/1020dev`) firet automatisch die **Booking-Conversion** — egal ob der Link im Hero, Nav, Footer, Pricing oder Audit-Success-Screen klickt wird.
- Der **AuditWidget** firet die **Audit-Conversion**, sobald die E-Mail erfolgreich gesendet wurde (in `onEmailSubmit`-Success-Branch).

## Erwartete Werte (Wien, 20 €/Tag)

- CPC-Range: 1,00–3,50 €
- Klicks/Tag: 6–15
- CTR-Ziel: > 6 %
- Conversion-Rate Ziel: 2–4 %
- Erwartete Erstgespräche/Monat: 4–10
- Cost per Lead: 60–150 €

Bei einem Onepager-Auftrag (700 €) amortisiert sich also bereits **ein Abschluss/Monat**.

## Optimierung nach Launch

- **Tag 2**: Sichtbarkeit checken — Impressionen-Anteil oben sollte > 60 % sein. Wenn nicht: Max-CPC-Limit anheben.
- **Tag 7**: Suchanfragen-Bericht öffnen, irrelevante Suchbegriffe als Negatives ergänzen.
- **Nach 30 Conversions**: Gebotsstrategie auf **Conversions maximieren** mit Ziel-CPA umstellen (Start-CPA: 50 €).
- **Nach 90 Tagen**: schwächste 20 % der Keywords pausieren, Budget auf die starken umverteilen.
