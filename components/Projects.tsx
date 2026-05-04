import Image from 'next/image';
import { REFS } from '@/lib/data';

export function Projects() {
  return (
    <section className="projects" id="projekte" aria-labelledby="projekte-title">
      <div className="projects-head">
        <div className="left">
          <div className="chapter-marker">
            <span className="num">03</span>
            <span className="slash">/</span>
            <span>Projekte</span>
          </div>
          <h2 id="projekte-title" className="chapter-title">
            Aktuelle Arbeiten.
          </h2>
        </div>
        <div className="meta">
          <span>{REFS.length} Projekte</span>
          <span aria-hidden="true">·</span>
          <span>2024 — 2026</span>
        </div>
      </div>

      <div className="projects-rail" role="list">
        {REFS.map((ref) => {
          const inner = (
            <>
              <div className="project-thumb">
                {ref.screenshots.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 920px) 80vw, 460px"
                    style={{ objectFit: 'cover' }}
                  />
                ))}
              </div>
              <div className="project-meta">
                <span className="project-tag">{ref.tag}</span>
                <span className="project-domain">
                  {ref.domain}
                  {ref.href && <span className="ext" aria-hidden="true">↗</span>}
                </span>
              </div>
            </>
          );

          return ref.href ? (
            <a
              key={ref.id}
              href={ref.href}
              target="_blank"
              rel="noopener"
              className="project"
              role="listitem"
            >
              {inner}
            </a>
          ) : (
            <div key={ref.id} className="project" role="listitem">
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
