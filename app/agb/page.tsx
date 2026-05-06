import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `AGB · ${SITE.name}`,
  description: `Allgemeine Geschäftsbedingungen für die Leistungen von ${SITE.name} — Webentwicklung, SEO, AEO, Automatisierung.`,
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return (
    <main className="legal">
      <header className="legal-head">
        <div className="chapter-marker">
          <span className="num">§</span>
          <span className="slash">/</span>
          <span>AGB</span>
        </div>
        <h1 className="chapter-title">
          Allgemeine <em>Geschäftsbedingungen.</em>
        </h1>
        <p className="chapter-lede">
          Stand: 6. Mai 2026. Diese AGB regeln alle Verträge zwischen {SITE.legal.owner}
          {' '}({SITE.name}) und seinen Auftraggebern über Webentwicklung, SEO, Answer-Engine-
          Optimization (AEO), Backend-Entwicklung, Workflow-Automatisierung und damit
          verbundene laufende Leistungen.
        </p>
      </header>

      <section className="legal-section">
        <h2 className="legal-h2">1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle
          Verträge zwischen <strong>{SITE.legal.owner}</strong>, {SITE.legal.legalForm},
          {' '}{SITE.address.street}, {SITE.address.postalCode} {SITE.address.city},
          {' '}{SITE.address.countryName} (nachfolgend „Auftragnehmer") und seinen Kund:innen
          (nachfolgend „Auftraggeber") über die im Angebot bzw. Auftrag näher beschriebenen
          Leistungen.
        </p>
        <p>
          Die AGB gelten in der zum Zeitpunkt des Vertragsabschlusses gültigen Fassung.
          Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des
          Auftraggebers werden nur dann Vertragsbestandteil, wenn der Auftragnehmer
          ihrer Geltung ausdrücklich schriftlich zustimmt.
        </p>
        <p>
          Die AGB richten sich primär an Unternehmer im Sinne des § 1 Abs. 1 Z 1 KSchG.
          Schließen Verbraucher Verträge mit dem Auftragnehmer, gelten die zwingenden
          Bestimmungen des Konsumentenschutzgesetzes (KSchG) und des Fern- und
          Auswärtsgeschäfte-Gesetzes (FAGG) vorrangig.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">2. Vertragsabschluss</h2>
        <p>
          Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht
          ausdrücklich als verbindlich gekennzeichnet sind. Verbindliche Angebote sind ab
          Zugang beim Auftraggeber 30 Tage gültig, sofern im Angebot keine andere Frist
          angegeben ist.
        </p>
        <p>
          Der Vertrag kommt durch schriftliche oder elektronische Auftragsbestätigung
          des Auftragnehmers, durch Gegenzeichnung des Angebots durch den Auftraggeber
          oder durch Beginn der Leistungserbringung mit Wissen und Zustimmung des
          Auftraggebers zustande. Für den Inhalt des Vertrags ist die Auftragsbestätigung
          bzw. das gegengezeichnete Angebot maßgeblich.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">3. Leistungsumfang</h2>
        <p>
          Art und Umfang der zu erbringenden Leistungen ergeben sich aus dem jeweiligen
          Angebot bzw. der Auftragsbestätigung. Typische Leistungsbereiche sind:
        </p>
        <p>
          <strong>Web-Track:</strong> Website-Basis (eine fokussierte Seite mit Performance-
          Zielen LCP &lt; 1,8 s, INP &lt; 200 ms, CLS &lt; 0,1), zusätzliche Unterseiten,
          SEO-Optimierung (Meta-Tags, sitemap.xml, robots.txt, Schema, Core-Web-Vitals),
          AEO-Optimierung (FAQ-Schema, LocalBusiness, llms.txt), Backend (CMS-Anbindung,
          API-Routen, Datenbank), Automatisierung (Workflows, LLM-Anbindung, CRM-Sync).
        </p>
        <p>
          <strong>Automation-Track:</strong> Workflow-Setup, API-Integrationen,
          LLM-Anbindungen (Anthropic, OpenAI, Open-Source), interne Tools und Dashboards,
          RAG- und Agentic-Workflows.
        </p>
        <p>
          Anpassungen, Erweiterungen oder zusätzliche Leistungen außerhalb des
          ursprünglich vereinbarten Umfangs („Change Requests") werden einvernehmlich
          geregelt und nach Aufwand zu den jeweils gültigen Stundensätzen oder als
          gesondertes Angebot abgerechnet.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">4. Mitwirkungspflichten des Auftraggebers</h2>
        <p>
          Der Auftraggeber stellt dem Auftragnehmer alle für die Leistungserbringung
          erforderlichen Inhalte, Texte, Bilder, Marken- und Designvorgaben, Logos sowie
          Zugänge (z. B. Domain-Registrar, DNS, Hosting, CMS, CRM, Analytics, Mail-Provider)
          rechtzeitig, vollständig und in einem üblichen Format zur Verfügung.
        </p>
        <p>
          Freigaben (Designs, Texte, Funktionen, Inbetriebnahme) sind zeitnah, im Regelfall
          innerhalb von fünf Werktagen nach Vorlage, zu erteilen. Verzögert sich die Mitwirkung
          des Auftraggebers, verschieben sich vereinbarte Termine entsprechend; daraus
          entstehender Mehraufwand kann nach Aufwand verrechnet werden.
        </p>
        <p>
          Der Auftraggeber sichert zu, dass die von ihm beigestellten Inhalte frei von
          Rechten Dritter sind oder die erforderlichen Nutzungsrechte vorliegen, und stellt
          den Auftragnehmer von Ansprüchen Dritter aus einer Verletzung dieser Pflicht frei.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">5. Termine und Lieferfristen</h2>
        <p>
          Termine und Lieferfristen sind, sofern nicht ausdrücklich schriftlich als
          „Fixtermin" vereinbart, indikativ. Sie verstehen sich vorbehaltlich rechtzeitiger
          und vollständiger Mitwirkung des Auftraggebers (siehe § 4).
        </p>
        <p>
          Ereignisse höherer Gewalt sowie unvorhersehbare, vom Auftragnehmer nicht zu
          vertretende Umstände (z. B. längere Ausfälle bei Drittanbietern wie Hosting-,
          Domain- oder API-Diensten) verlängern Liefertermine um die Dauer der Behinderung
          zuzüglich einer angemessenen Anlaufzeit.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">6. Preise und Zahlungsbedingungen</h2>
        <p>
          Alle Preise verstehen sich in Euro netto, zuzüglich der gesetzlichen Umsatzsteuer
          (derzeit 20 %), sofern nicht ausdrücklich etwas anderes vereinbart oder eine
          gesetzliche Steuerbefreiung anwendbar ist.
        </p>
        <p>
          Sofern nicht anders vereinbart, gilt für einmalige Projektleistungen ein
          50/50-Zahlungsplan: 50 % der Auftragssumme bei Auftragserteilung, 50 % bei
          Übergabe bzw. Inbetriebnahme. Audit und Erstgespräch sind kostenlos.
        </p>
        <p>
          Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung
          fällig. Bei Zahlungsverzug werden gegenüber Unternehmern Verzugszinsen in
          gesetzlicher Höhe nach § 456 UGB sowie Mahn- und Inkassospesen nach Aufwand
          verrechnet. Gegenüber Verbrauchern gelten die gesetzlichen Verzugszinsen.
        </p>
        <p>
          Der Auftragnehmer ist berechtigt, bei Zahlungsverzug oder berechtigten Zweifeln
          an der Zahlungsfähigkeit des Auftraggebers laufende Leistungen bis zur Begleichung
          offener Forderungen auszusetzen.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">7. Laufende Leistungen (Hosting, Monitoring)</h2>
        <p>
          Bei Buchung der Website-Basis sind Hosting und SSL-Zertifikat für 12 Monate ab
          Inbetriebnahme inklusive. Im Anschluss kann die Hosting-Leistung gegen gesonderte
          Vergütung fortgeführt oder vom Auftraggeber zu einem Drittanbieter migriert
          werden. Die Domain wird vom Auftraggeber selbst registriert und gehalten.
        </p>
        <p>
          Das Web-Monitoring wird zum Pauschalpreis von 25 € netto pro Monat angeboten,
          das Automation-Hosting &amp; Monitoring zum Pauschalpreis von 60 € netto pro Monat.
          Beide werden monatlich im Voraus abgerechnet und können vom Auftraggeber
          ordentlich jeweils zum Monatsende gekündigt werden (Textform, z. B. E-Mail,
          genügt).
        </p>
        <p>
          Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide
          Parteien unberührt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">8. Subunternehmer und Drittanbieter</h2>
        <p>
          Der Auftragnehmer ist berechtigt, qualifizierte Dritte und Subunternehmer zur
          Leistungserbringung beizuziehen. Für deren Leistungen haftet der Auftragnehmer
          wie für eigene Erfüllungsgehilfen.
        </p>
        <p>
          Zur Leistungserbringung können Dienste Dritter eingesetzt werden, etwa
          Hosting- und Plattformanbieter, Termin- und Kalenderdienste, KI- und LLM-Provider,
          E-Mail-Versanddienste sowie Datenbank- und Caching-Dienste. Eine Liste der
          aktuell eingesetzten Drittanbieter wird auf Anfrage offengelegt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">9. Nutzungsrechte und Urheberrecht</h2>
        <p>
          Mit vollständiger Bezahlung der vereinbarten Vergütung erhält der Auftraggeber
          ein einfaches, zeitlich und räumlich unbeschränktes, übertragbares Nutzungsrecht
          an den im Rahmen des Auftrags eigens erstellten Werken (Quellcode, Designs,
          Texten, Konfigurationen) für den im Vertrag vereinbarten Verwendungszweck.
        </p>
        <p>
          Eingesetzte Open-Source-Komponenten, Frameworks, Bibliotheken, Schriftarten und
          sonstige Drittinhalte verbleiben unter ihren jeweiligen Lizenzbedingungen. Der
          Auftragnehmer wählt diese mit branchenüblicher Sorgfalt; eine darüber hinausgehende
          Gewähr für Drittlizenzen wird nicht übernommen.
        </p>
        <p>
          Der Auftragnehmer behält das Recht, allgemeine Konzepte, Methoden, Vorlagen und
          nicht projektspezifische Code-Bausteine sowie sein Know-how für andere Projekte
          weiterzuverwenden, soweit dadurch keine vertraulichen Informationen oder
          individuellen Lösungen des Auftraggebers offengelegt werden.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">10. Referenz und Veröffentlichung</h2>
        <p>
          Der Auftragnehmer ist berechtigt, das fertiggestellte Projekt (Logo, Screenshot,
          Projektname und eine kurze Leistungsbeschreibung) im eigenen Portfolio, auf der
          Website {SITE.url.replace(/^https?:\/\//, '')} sowie in Angeboten und Pitches
          als Referenz zu nennen, sofern der Auftraggeber dem nicht schriftlich oder per
          E-Mail an{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{' '}
          widerspricht.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">11. Gewährleistung</h2>
        <p>
          Die gesetzliche Gewährleistung richtet sich nach §§ 922 ff ABGB. Der Auftragnehmer
          gewährleistet, dass die erbrachten Leistungen zum Zeitpunkt der Übergabe der
          vereinbarten Leistungsbeschreibung entsprechen.
        </p>
        <p>
          Über die gesetzliche Gewährleistung hinaus gewährt der Auftragnehmer eine
          30-Tage-Bugfix-Garantie ab Übergabe: reproduzierbare Fehler im vereinbarten
          Leistungsumfang werden in diesem Zeitraum kostenfrei behoben.
        </p>
        <p>
          Von der Gewährleistung und der Bugfix-Garantie ausgenommen sind: Mängel durch
          nachträgliche Änderungen am Werk durch den Auftraggeber oder Dritte; Ausfälle
          oder Änderungen bei eingesetzten Drittanbietern; Anpassungswünsche, die über
          die ursprüngliche Spezifikation hinausgehen; sowie Mängel, die durch unsachgemäße
          Nutzung oder durch Inhalte des Auftraggebers verursacht werden.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">12. Haftung</h2>
        <p>
          Der Auftragnehmer haftet gegenüber Unternehmern nur für Vorsatz und grobe
          Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen,
          ausgenommen sind Personenschäden sowie zwingende gesetzliche Haftungstatbestände.
        </p>
        <p>
          Soweit gehaftet wird, ist die Haftung gegenüber Unternehmern der Höhe nach mit dem
          Auftragswert des betreffenden Auftrags (netto, ohne Umsatzsteuer) begrenzt.
          Bei laufenden Verträgen gilt als Auftragswert die im letzten Vertragsjahr
          gezahlte Vergütung.
        </p>
        <p>
          Eine Haftung für mittelbare Schäden, entgangenen Gewinn, Folgeschäden und Datenverluste
          ist gegenüber Unternehmern ausgeschlossen, soweit eine zumutbare Datensicherung durch
          den Auftraggeber möglich war. Gegenüber Verbrauchern gelten ausschließlich die
          zwingenden gesetzlichen Haftungsregeln.
        </p>
        <p>
          Schadenersatzansprüche gegen den Auftragnehmer verjähren, soweit gesetzlich
          zulässig, in sechs Monaten ab Kenntnis von Schaden und Schädiger.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">13. Datenschutz</h2>
        <p>
          Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich nach den
          Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des österreichischen
          Datenschutzgesetzes (DSG).
        </p>
        <p>
          Sofern der Auftragnehmer im Rahmen der Leistungserbringung personenbezogene
          Daten im Auftrag des Auftraggebers verarbeitet, wird auf Verlangen des
          Auftraggebers eine Auftragsverarbeitungsvereinbarung (AVV) gemäß Art. 28 DSGVO
          abgeschlossen.
        </p>
        <p>
          Details zur Verarbeitung personenbezogener Daten der Besucher:innen dieser
          Website werden in der{' '}
          <Link href="/datenschutz">Datenschutzerklärung</Link>{' '}
          beschrieben.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">14. Geheimhaltung</h2>
        <p>
          Die Vertragsparteien verpflichten sich, alle ihnen im Rahmen der Zusammenarbeit
          bekannt werdenden, nicht offenkundigen Informationen der jeweils anderen Partei
          (insbesondere geschäftliche, technische und konzeptionelle Informationen) vertraulich
          zu behandeln, nicht an Dritte weiterzugeben und ausschließlich zur Erfüllung des
          Vertrags zu verwenden.
        </p>
        <p>
          Die Geheimhaltungspflicht gilt zeitlich unbefristet über das Vertragsende hinaus.
          Ausgenommen sind Informationen, die allgemein bekannt sind, der empfangenden Partei
          nachweislich bereits vor Mitteilung bekannt waren oder aufgrund gesetzlicher oder
          behördlicher Verpflichtung offenzulegen sind.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">15. Höhere Gewalt</h2>
        <p>
          Ereignisse höherer Gewalt — insbesondere Naturereignisse, Pandemien, Streik,
          längere Ausfälle des Internets oder der Stromversorgung, Ausfälle bei wesentlichen
          Drittanbietern sowie behördliche Anordnungen — entbinden die betroffene Partei
          für die Dauer der Behinderung von ihren Leistungspflichten und schließen einen
          Verzug aus.
        </p>
        <p>
          Dauert die Behinderung länger als 30 Tage, ist jede Partei berechtigt, vom Vertrag
          zurückzutreten. Bereits erbrachte Teilleistungen sind in diesem Fall verhältnismäßig
          abzugelten.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">16. Vertragsdauer und Kündigung</h2>
        <p>
          Verträge über einmalige Projektleistungen enden mit der vollständigen Leistungs­
          erbringung und Übergabe.
        </p>
        <p>
          Verträge über laufende Leistungen (Monitoring, Hosting nach Ablauf der inkludierten
          12 Monate, Hosting &amp; Monitoring im Automation-Track) sind von beiden Parteien
          ordentlich jeweils zum Monatsende kündbar (Textform genügt). Die außerordentliche
          Kündigung aus wichtigem Grund bleibt für beide Parteien unberührt; ein wichtiger
          Grund liegt insbesondere bei nachhaltiger Verletzung wesentlicher Vertragspflichten
          trotz angemessener Frist zur Behebung vor.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">17. Schlussbestimmungen</h2>
        <p>
          Es gilt ausschließlich österreichisches Recht unter Ausschluss seiner Verweisungs­
          normen und des UN-Kaufrechts.
        </p>
        <p>
          Als Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit Verträgen
          mit Unternehmern wird das sachlich zuständige Gericht in Wien vereinbart. Für
          Verbraucher gilt der gesetzliche Gerichtsstand.
        </p>
        <p>
          Vertragssprache ist Deutsch. Änderungen und Ergänzungen des Vertrags bedürfen
          zur Wirksamkeit der Schrift- bzw. Textform; das gilt auch für die Aufhebung
          dieses Formerfordernisses.
        </p>
        <p>
          Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein
          oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die
          unwirksame Bestimmung ist durch eine wirksame Regelung zu ersetzen, die dem
          wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
        </p>
        <p>
          Verbraucher können Beschwerden zudem an die Online-Streitbeilegungs-Plattform
          der EU richten:{' '}
          <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener">
            ec.europa.eu/odr
          </a>
          . Der Auftragnehmer ist nicht verpflichtet und nicht bereit, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </main>
  );
}
