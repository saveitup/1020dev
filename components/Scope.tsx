import { SITE } from '@/lib/data';

type ScopeItem = {
  name: string;
  desc: string;
  isBase?: boolean;
  plus?: boolean;
};

type PackageItem = {
  name: string;
  desc: string;
  includes: readonly string[];
};

type ScopeData = {
  pakete?: readonly PackageItem[];
  einmalig: readonly ScopeItem[];
  laufend: readonly ScopeItem[];
};

type ScopeProps = {
  data: ScopeData;
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
};

/**
 * Leistungsumfang statt Preisliste.
 *
 * Auf der Site stehen bewusst keine Beträge — der Preis kommt nach dem
 * kostenlosen Audit als Fixpreis-Angebot. Die Daten (`SCOPE`,
 * `AUTOMATION_SCOPE`, `APPS_SCOPE`) enthalten deshalb nur Name und
 * Beschreibung der Module.
 */
export function Scope({
  data,
  marker = '04',
  title = (
    <>
      Modular und <em>klar.</em>
    </>
  ),
  lede = 'Sie buchen nur, was Sie brauchen — einzeln oder als Paket. Den Preis dafür bekommen Sie nach dem kostenlosen Audit als verbindliches Fixpreis-Angebot, bevor Sie sich entscheiden.',
}: ScopeProps) {
  return (
    <section className="chapter" id="angebot">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Angebot</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="scope-table">
        {data.pakete && data.pakete.length > 0 && (
          <div className="scope-group scope-pakete">
            <div className="scope-group-label">
              <span>Pakete</span>
            </div>

            {data.pakete.map((item) => (
              <div key={item.name} className="scope-row scope-package-row">
                <div className="scope-text">
                  <div className="scope-name">{item.name}</div>
                  <div className="scope-desc">{item.desc}</div>
                  <div className="scope-package-includes">
                    {item.includes.join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="scope-group">
          <div className="scope-group-label">
            <span>Einzeln buchbar</span>
          </div>

          {data.einmalig.map((item) => (
            <div
              key={item.name}
              className={['scope-row', item.isBase ? 'scope-base' : '']
                .filter(Boolean)
                .join(' ')}
            >
              <div className="scope-text">
                <div className="scope-name">
                  {item.plus && <span className="plus">+</span>}
                  {item.name}
                </div>
                <div className="scope-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="scope-group">
          <div className="scope-group-label">Laufend</div>

          {data.laufend.map((item) => (
            <div key={item.name} className="scope-row">
              <div className="scope-text">
                <div className="scope-name">{item.name}</div>
                <div className="scope-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="scope-cta">
          <div className="scope-konditionen">
            <div><strong>Angebot</strong> zum Fixpreis nach dem Audit — kein offener Stundensatz.</div>
            <div><strong>Preise</strong> netto, zzgl. 20&nbsp;% USt.</div>
            <div><strong>Zahlung</strong> 50&nbsp;% bei Auftragserteilung, 50&nbsp;% bei Übergabe.</div>
            <div><strong>Bugfix</strong> 30 Tage nach Launch inklusive.</div>
            <div><strong>Laufende Posten</strong> monatlich kündbar.</div>
            <div className="accent">Audit &amp; Erstgespräch immer kostenlos.</div>
          </div>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener"
            className="scope-cta-btn"
          >
            Angebot anfragen <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
