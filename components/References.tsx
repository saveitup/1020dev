import Image from 'next/image';
import Link from 'next/link';
import { APPS_SHOWCASE, REFS, REFS_HEAD } from '@/lib/data';
import { ArrowIcon, ArrowUpRightIcon } from './Icons';
import { PhoneMock } from './PhoneMock';

export function References() {
  const app = APPS_SHOWCASE[0];

  return (
    <section className="section refs" id="referenzen" aria-labelledby="refs-title">
      <header className="section-head section-head--split">
        <h2 id="refs-title" className="section-title">
          {REFS_HEAD.title}
        </h2>
        <p className="section-sub">{REFS_HEAD.sub}</p>
      </header>

      <ul className="refs-grid" role="list">
        {/* Eigene App als breite Karte vorneweg — führt auf /apps */}
        <li className="ref ref--feature">
          <Link href="/apps" className="ref-card">
            <div className="ref-frame ref-frame--app">
              <div className="phones">
                {app.screenshots.map((shot) => (
                  <PhoneMock key={shot.src} shot={shot} />
                ))}
              </div>
            </div>
            <div className="ref-meta">
              <span className="ref-name">
                {app.name}
                <ArrowIcon />
              </span>
              <span className="ref-tag">{app.tag}</span>
            </div>
          </Link>
        </li>
        {REFS.map((ref) => {
          const inner = (
            <>
              <div className="ref-frame">
                <div className="ref-shot">
                  {ref.screenshots.map((img, i) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={i === 0 ? img.alt : ''}
                      fill
                      sizes="(max-width: 760px) 92vw, 46vw"
                      className={i === 0 ? 'ref-img' : 'ref-img ref-img--alt'}
                    />
                  ))}
                </div>
              </div>
              <div className="ref-meta">
                <span className="ref-name">
                  {ref.domain}
                  {ref.href && <ArrowUpRightIcon />}
                </span>
                <span className="ref-tag">{ref.tag}</span>
              </div>
            </>
          );

          return (
            <li key={ref.id} className="ref">
              {ref.href ? (
                <a href={ref.href} target="_blank" rel="noopener" className="ref-card">
                  {inner}
                </a>
              ) : (
                <div className="ref-card">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
