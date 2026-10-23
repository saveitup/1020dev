import Image from 'next/image';
import { REFS, REFS_HEAD } from '@/lib/data';
import { ArrowUpRightIcon } from './Icons';

export function References() {
  return (
    <section className="section refs" id="referenzen" aria-labelledby="refs-title">
      <header className="section-head section-head--split">
        <h2 id="refs-title" className="section-title">
          {REFS_HEAD.title}
        </h2>
        <p className="section-sub">{REFS_HEAD.sub}</p>
      </header>

      <ul className="refs-grid" role="list">
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
                      sizes="(max-width: 760px) 92vw, (max-width: 960px) 46vw, 30vw"
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
