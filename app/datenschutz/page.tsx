import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `Datenschutz · ${SITE.name}`,
  description: `Datenschutzerklärung gemäß DSGVO und österreichischem DSG für ${SITE.name}.`,
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="legal">
      <header className="legal-head">
        <div className="chapter-marker">
          <span className="num">§</span>
          <span className="slash">/</span>
          <span>Datenschutz</span>
        </div>
        <h1 className="chapter-title">
          Daten<em>schutzerklärung.</em>
        </h1>
        <p className="chapter-lede">
          Stand: 6. Mai 2026. Information über die Verarbeitung personenbezogener Daten
          gemäß Art. 13 und 14 Datenschutz-Grundverordnung (DSGVO) sowie dem
          österreichischen Datenschutzgesetz (DSG) auf {SITE.url.replace(/^https?:\/\//, '')}.
        </p>
      </header>

      <section className="legal-section">
        <h2 className="legal-h2">1. Verantwortlicher</h2>
        <p>
          Verantwortlicher für die Datenverarbeitung im Sinne des Art. 4 Z 7 DSGVO ist:
        </p>
        <p>
          <strong>{SITE.legal.owner}</strong>
          <br />
          {SITE.legal.legalForm}
          <br />
          {SITE.address.street}
          <br />
          {SITE.address.postalCode} {SITE.address.city}, {SITE.address.countryName}
        </p>
        <dl className="legal-dl">
          <dt>Telefon</dt>
          <dd>
            <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
          </dd>
          <dt>E-Mail</dt>
          <dd>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </dd>
          <dt>Web</dt>
          <dd>
            <a href={SITE.url}>{SITE.url.replace(/^https?:\/\//, '')}</a>
          </dd>
        </dl>
        <p>
          Datenschutzanfragen bitte ausschließlich an{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Personenbezogene Daten werden nur erhoben, verarbeitet und genutzt, soweit
          dies für die Bereitstellung dieser Website, ihrer Funktionen und der angebotenen
          Dienstleistungen erforderlich ist oder soweit eine ausdrückliche Einwilligung
          vorliegt.
        </p>
        <p>
          Rechtsgrundlagen sind je nach Verarbeitungszweck Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung), lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen),
          lit. c DSGVO (rechtliche Verpflichtung) und lit. f DSGVO (berechtigte Interessen).
        </p>
        <p>
          Eine Pflicht zur Bereitstellung personenbezogener Daten besteht nicht; ohne die
          erforderlichen Angaben können bestimmte Funktionen (z. B. das Audit-Widget oder
          eine Kontaktaufnahme per E-Mail) jedoch nicht oder nur eingeschränkt genutzt werden.
          Eine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO findet nicht statt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">3. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
          USA („Vercel") gehostet. Beim Aufruf der Seite werden technisch notwendige
          Verbindungsdaten an die Server von Vercel übermittelt und in Logfiles
          gespeichert. Verarbeitet werden insbesondere:
        </p>
        <p>
          IP-Adresse des anfragenden Geräts, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz
          zur Greenwich Mean Time, Inhalt der Anforderung (konkrete Seite), Zugriffsstatus
          bzw. HTTP-Statuscode, jeweils übertragene Datenmenge, Website, von der die
          Anforderung kommt (Referer), Browser, Betriebssystem und dessen Oberfläche,
          Sprache und Version der Browsersoftware.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht
          im sicheren und stabilen Betrieb der Website sowie in der Abwehr von Angriffen.
          Die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework
          (Angemessenheitsbeschluss der Europäischen Kommission vom 10. Juli 2023) bzw.
          ergänzend auf Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
        </p>
        <p>
          Mit Vercel besteht ein Vertrag über die Auftragsverarbeitung nach Art. 28 DSGVO.
          Logfiles werden grundsätzlich nach 30 Tagen gelöscht, sofern sie nicht zur
          Aufklärung eines konkreten Sicherheitsvorfalls länger benötigt werden.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">4. Cookies und lokale Speicherung</h2>
        <p>
          Diese Website setzt grundsätzlich keine eigenen Cookies. Für die Darstellung der
          Eingangsanimation („Splash") wird einmalig pro Browser-Sitzung ein technisch
          notwendiger Eintrag im{' '}
          <code>sessionStorage</code> Ihres Browsers gesetzt (Schlüssel:{' '}
          <code>1020-splash-seen</code>, Wert: <code>1</code>). Dieser Eintrag enthält keine
          personenbezogenen Daten und wird beim Schließen der Browsersitzung automatisch
          gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte
          Interesse besteht in einer reibungslosen Nutzererfahrung bei wiederholtem Aufruf
          innerhalb derselben Sitzung.
        </p>
        <p>
          Cookies und Speichertechnologien, die nicht technisch notwendig sind (insbesondere
          für Webanalyse oder Conversion-Tracking, siehe Punkte 5 und 6), werden nur mit
          Ihrer ausdrücklichen Einwilligung gemäß § 165 Abs. 3 TKG 2021 und Art. 6 Abs. 1
          lit. a DSGVO gesetzt. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung
          für die Zukunft widerrufen.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">5. Reichweitenmessung mit Vercel Analytics</h2>
        <p>
          Auf dieser Website wird Vercel Analytics, ein Dienst der Vercel Inc., zur
          datenschutzfreundlichen Reichweitenmessung eingesetzt. Vercel Analytics arbeitet
          ohne Cookies und ohne Fingerprinting; gespeichert werden ausschließlich aggregierte
          Statistiken zu Seitenaufrufen, ungefährer geografischer Herkunft (Land/Region auf
          Basis der IP, ohne Speicherung der vollständigen IP-Adresse), Geräteklasse und
          Referrer.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse besteht
          in der bedarfsgerechten Gestaltung und kontinuierlichen Verbesserung der Website.
          Aufgrund der Aggregation und der fehlenden Speicherung individuell zuordenbarer
          Kennungen ist eine Identifikation einzelner Besucher:innen nicht möglich.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">6. Google Analytics 4 und Google Ads (nur mit Einwilligung)</h2>
        <p>
          Sofern Sie hierzu ausdrücklich eingewilligt haben, setzen wir Google Analytics 4
          („GA4") und Google Ads-Conversion-Tracking ein. Anbieter ist die Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland; übergeordnete Verantwortliche
          ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Bei aktivierter Einwilligung lädt Ihr Browser das Skript{' '}
          <code>gtag.js</code> von <code>googletagmanager.com</code> und Google verarbeitet
          insbesondere folgende Daten: gekürzte IP-Adresse, Online-Kennungen (Cookies wie{' '}
          <code>_ga</code>), Geräteinformationen (Browser, Betriebssystem, Bildschirmauflösung,
          Sprache), Referrer, aufgerufene Seiten, Verweildauer und Interaktionen sowie
          Conversion-Ereignisse (z. B. Klick auf den Termin-Buchungs-Link, abgeschlossenes
          Audit). Conversion-Werte werden zur Wirksamkeitsmessung von Anzeigenkampagnen an
          Google übertragen; eine Übermittlung in die USA findet statt.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO sowie § 165 Abs. 3 TKG 2021. Die
          Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework bzw.
          ergänzend auf Standardvertragsklauseln. Sie können Ihre Einwilligung jederzeit
          mit Wirkung für die Zukunft widerrufen, indem Sie die Einstellungen über das
          Consent-Tool ändern oder die Cookies <code>_ga*</code> in Ihrem Browser löschen.
          Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            policies.google.com/privacy
          </a>
          .
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">7. Audit-Widget (kostenlose AEO-Analyse)</h2>
        <p>
          Über das Audit-Widget auf dieser Website können Sie eine kostenlose AEO-Analyse
          Ihrer Domain anfordern. Dabei werden folgende Daten verarbeitet:
        </p>
        <p>
          <strong>(a) Bei Anforderung der Analyse:</strong> die von Ihnen eingegebene Domain,
          Ihre IP-Adresse, der User-Agent Ihres Browsers, der Referer und der Zeitstempel der
          Anfrage. Diese Daten werden verarbeitet, um die Anfrage technisch durchzuführen,
          Missbrauch zu verhindern (Rate-Limiting, siehe Punkt 9) und die Ergebnisse intern
          nachvollziehen zu können. Domain, IP-Adresse, User-Agent, Referer und Zeitstempel
          werden zudem zu internen Audit- und Lead-Zwecken per E-Mail an unser Postfach
          versendet.
        </p>
        <p>
          <strong>(b) Inhaltliche Analyse:</strong> Die eingegebene Domain wird an die
          Anthropic PBC, 548 Market St, PMB 90375, San Francisco, CA 94104, USA („Anthropic")
          übermittelt, deren KI-Modell die Domain analysiert und ein Audit-Ergebnis erstellt.
          Anthropic verarbeitet diese Daten als unser Auftragsverarbeiter ausschließlich zur
          Erbringung des angefragten Audits. Anthropic gibt an, dass über die API
          übermittelte Inhalte nicht zum Trainieren von Modellen verwendet werden.
        </p>
        <p>
          <strong>(c) Zustellung des Berichts:</strong> Wenn Sie Ihre E-Mail-Adresse zur
          Zustellung des Audit-Berichts angeben, wird diese mit dem fertigen Bericht an die
          Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA („Resend"),
          übergeben, die den Versand als unser Auftragsverarbeiter durchführt. Vor dem Versand
          erfolgt eine technische Validierung der E-Mail-Adresse mittels DNS-Abfrage; dabei
          werden keine Daten dauerhaft gespeichert. Eine Kopie des Versands geht zur internen
          Dokumentation an unser Postfach.
        </p>
        <p>
          Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf
          Anfrage der betroffenen Person) für die Durchführung und Zustellung des Audits sowie
          Art. 6 Abs. 1 lit. f DSGVO für die interne Dokumentation und Missbrauchsabwehr.
          Unser berechtigtes Interesse besteht in der Nachvollziehbarkeit erbrachter
          Leistungen sowie in der Bewertung von Leads. Die Übermittlung an Anthropic und
          Resend in die USA stützt sich auf das EU-US Data Privacy Framework bzw.
          Standardvertragsklauseln.
        </p>
        <p>
          Eingegebene Domains und übermittelte Bericht-E-Mails werden für die Dauer der
          ordnungsgemäßen Geschäftskorrespondenz gespeichert (in der Regel bis zu 24 Monate
          nach letzter Interaktion), längstens bis zum Ablauf gesetzlicher Aufbewahrungs­
          fristen (sieben Jahre nach § 132 BAO, sofern eine Geschäftsbeziehung entsteht).
          Die Daten werden anschließend gelöscht, sofern keine Einwilligung in eine
          weitergehende Speicherung vorliegt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">8. Kontaktaufnahme per E-Mail und Terminbuchung</h2>
        <p>
          Wenn Sie uns per E-Mail (z. B. an{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>) kontaktieren, werden die in der
          Nachricht enthaltenen Daten (Name, E-Mail-Adresse, Inhalt der Nachricht und
          eventuell weitere von Ihnen mitgeteilte Informationen) zum Zweck der Bearbeitung
          Ihrer Anfrage und für mögliche Folgekorrespondenz gespeichert. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen, andernfalls Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
          Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>
        <p>
          Für die Terminbuchung verlinken wir auf den externen Dienst{' '}
          <a href={SITE.bookingUrl} target="_blank" rel="noopener">
            cal.com/1020dev
          </a>{' '}
          der Cal.com, Inc. Mit dem Klick auf den Buchungslink verlassen Sie diese Website;
          die Datenverarbeitung erfolgt sodann eigenverantwortlich durch Cal.com nach deren
          Datenschutzbestimmungen. Eine Übermittlung von Daten an Cal.com durch uns findet
          ohne Ihre aktive Buchung nicht statt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">9. Rate-Limiting (Missbrauchsabwehr)</h2>
        <p>
          Zur Abwehr automatisierter Massenanfragen und zum Schutz unserer Schnittstellen
          setzen wir ein Rate-Limiting ein. Hierbei wird Ihre IP-Adresse für ein kurzes
          Zeitfenster (in der Regel 60 Sekunden) bei der Upstash, Inc., 340 S Lemon Ave
          #4133, Walnut, CA 91789, USA („Upstash") in einem Sliding-Window-Zähler verarbeitet.
          Eine darüber hinausgehende Speicherung der IP-Adresse findet bei Upstash nicht statt.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse besteht
          im Schutz der Verfügbarkeit und Integrität unserer Dienste. Mit Upstash besteht ein
          Vertrag über die Auftragsverarbeitung nach Art. 28 DSGVO. Die Übermittlung in die
          USA stützt sich auf Standardvertragsklauseln.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">10. Schriftarten</h2>
        <p>
          Diese Website verwendet die Schriftarten „DM Sans" und „DM Mono". Die Schriften
          werden über das in Next.js integrierte Modul <code>next/font</code> bereits zur
          Bauzeit lokal in das Build-Artefakt aufgenommen und ausschließlich von der Domain{' '}
          {SITE.url.replace(/^https?:\/\//, '')} ausgeliefert. Eine Verbindung Ihres Browsers
          zu Servern von Google findet zur Schriftauslieferung nicht statt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">11. Empfänger und Auftragsverarbeiter</h2>
        <p>
          Im Rahmen des Betriebs dieser Website und der angebotenen Dienste werden
          personenbezogene Daten an folgende Empfänger weitergegeben, die für uns als
          Auftragsverarbeiter gemäß Art. 28 DSGVO tätig sind:
        </p>
        <dl className="legal-dl">
          <dt>Vercel Inc. (USA)</dt>
          <dd>Hosting der Website und Reichweitenmessung (Vercel Analytics).</dd>
          <dt>Anthropic PBC (USA)</dt>
          <dd>Erstellung von Audit-Berichten über das KI-Modell „Claude" (nur Domain-Eingaben).</dd>
          <dt>Resend, Inc. (USA)</dt>
          <dd>Versand transaktionaler E-Mails (Audit-Berichte und interne Benachrichtigungen).</dd>
          <dt>Upstash, Inc. (USA)</dt>
          <dd>Rate-Limiting (kurzzeitige Speicherung der IP-Adresse).</dd>
          <dt>Google Ireland Ltd. / Google LLC (IE / USA)</dt>
          <dd>
            Webanalyse mit Google Analytics 4 und Conversion-Tracking mit Google Ads — nur
            bei aktiver Einwilligung.
          </dd>
          <dt>Cal.com, Inc.</dt>
          <dd>
            Externe Terminbuchung (Drittanbieter, eigenverantwortlich; Datenverarbeitung
            erst bei aktiver Nutzung des Buchungslinks).
          </dd>
        </dl>
        <p>
          Über die genannten Empfänger hinaus geben wir personenbezogene Daten an Dritte nur
          weiter, soweit dies zur Vertragserfüllung erforderlich ist, eine gesetzliche
          Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">12. Datenübermittlung in Drittländer</h2>
        <p>
          Die unter Punkt 11 aufgeführten Auftragsverarbeiter mit Sitz in den USA verarbeiten
          personenbezogene Daten teilweise auf Servern außerhalb des Europäischen
          Wirtschaftsraums (EWR). Soweit diese Anbieter unter dem EU-US Data Privacy
          Framework (Angemessenheitsbeschluss der Europäischen Kommission vom 10. Juli 2023)
          zertifiziert sind, gilt für sie ein angemessenes Datenschutzniveau. Ergänzend bzw.
          für Anbieter ohne Zertifizierung schließen wir Standardvertragsklauseln gemäß
          Art. 46 Abs. 2 lit. c DSGVO ab. Trotz dieser Maßnahmen verbleiben Restrisiken (z. B.
          Zugriff durch Behörden des Drittlands), auf die wir Sie hiermit ausdrücklich hinweisen.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">13. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen
          Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten dies vorsehen.
          Insbesondere gelten folgende Richtwerte:
        </p>
        <dl className="legal-dl">
          <dt>Server-Logfiles</dt>
          <dd>30 Tage, sofern nicht zur Aufklärung eines Sicherheitsvorfalls länger erforderlich.</dd>
          <dt>Rate-Limit-Daten</dt>
          <dd>Sliding-Window von rund 60 Sekunden.</dd>
          <dt>Audit-Anfragen und versendete Berichte</dt>
          <dd>Bis zu 24 Monate ab letzter Interaktion zur Lead-Dokumentation.</dd>
          <dt>Geschäftskorrespondenz (Verträge)</dt>
          <dd>Sieben Jahre nach Ende des Geschäftsjahrs gemäß § 132 BAO und § 212 UGB.</dd>
          <dt>Webanalyse-Daten (GA4, bei Einwilligung)</dt>
          <dd>Standardspeicherdauer 14 Monate, anschließend automatische Löschung durch Google.</dd>
        </dl>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">14. Sicherheit der Datenverarbeitung</h2>
        <p>
          Wir treffen technische und organisatorische Maßnahmen gemäß Art. 32 DSGVO, um den
          Schutz personenbezogener Daten zu gewährleisten. Insbesondere wird die gesamte
          Kommunikation zwischen Ihrem Browser und unseren Servern mit TLS verschlüsselt
          (HTTPS, HSTS-Preload). Zugänge zu Verarbeitungssystemen sind durch starke
          Authentifizierung geschützt; API-Schlüssel werden ausschließlich serverseitig
          verwendet und nie an den Browser übermittelt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">15. Ihre Rechte als betroffene Person</h2>
        <p>Sie haben uns gegenüber jederzeit das Recht auf:</p>
        <dl className="legal-dl">
          <dt>Auskunft (Art. 15 DSGVO)</dt>
          <dd>über die zu Ihrer Person gespeicherten Daten und deren Verarbeitung.</dd>
          <dt>Berichtigung (Art. 16 DSGVO)</dt>
          <dd>unrichtiger oder unvollständiger personenbezogener Daten.</dd>
          <dt>Löschung (Art. 17 DSGVO)</dt>
          <dd>Ihrer bei uns gespeicherten personenbezogenen Daten.</dd>
          <dt>Einschränkung (Art. 18 DSGVO)</dt>
          <dd>der Datenverarbeitung.</dd>
          <dt>Widerspruch (Art. 21 DSGVO)</dt>
          <dd>gegen die Verarbeitung, die auf Art. 6 Abs. 1 lit. f DSGVO gestützt ist.</dd>
          <dt>Datenübertragbarkeit (Art. 20 DSGVO)</dt>
          <dd>Erhalt Ihrer Daten in einem strukturierten, gängigen, maschinenlesbaren Format.</dd>
          <dt>Widerruf (Art. 7 Abs. 3 DSGVO)</dt>
          <dd>einer einmal erteilten Einwilligung jederzeit mit Wirkung für die Zukunft.</dd>
        </dl>
        <p>
          Zur Geltendmachung dieser Rechte genügt eine formlose Mitteilung an{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Zur Sicherstellung Ihrer
          Identität können wir in Einzelfällen einen geeigneten Identitätsnachweis verlangen.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">16. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Unbeschadet anderer Rechtsbehelfe steht Ihnen das Recht zu, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die
          Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. Zuständige
          Aufsichtsbehörde in Österreich ist:
        </p>
        <p>
          <strong>Österreichische Datenschutzbehörde</strong>
          <br />
          Barichgasse 40–42, 1030 Wien
          <br />
          Telefon: +43 1 52 152-0
          <br />
          E-Mail: <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>
          <br />
          Web:{' '}
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">
            dsb.gv.at
          </a>
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">17. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte
          Rechtslagen oder bei Änderungen unserer Dienste und der Datenverarbeitung
          fortzuschreiben. Die jeweils aktuelle Fassung ist unter{' '}
          {SITE.url.replace(/^https?:\/\//, '')}/datenschutz abrufbar. Maßgeblich für Ihre
          Rechte ist stets die zum Zeitpunkt der Datenerhebung geltende Fassung.
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </main>
  );
}
