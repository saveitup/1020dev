import { SERVICES } from '@/lib/data';

export function Services() {
  return (
    <section className="chapter" id="leistungen">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">02</span>
          <span className="slash">/</span>
          <span>Leistungen</span>
        </div>
        <h2 className="chapter-title">
          Was wir <em>tatsächlich</em> machen.
        </h2>
        <p className="chapter-lede">
          Drei Bausteine, die einzeln Sinn ergeben und zusammen besonders. Kein
          Marketing-Sprech, sondern das, was Sie bei uns wirklich bekommen.
        </p>
      </div>

      <div className="rows rows-services">
        {SERVICES.map((service) => (
          <article key={service.num} className="row">
            <div className="row-side">
              <div className="row-num">{service.num}</div>
            </div>
            <div className="row-body">
              <h3 className="row-title row-title-lg">{service.title}</h3>
              <p className="row-desc">{service.desc}</p>
              <ul className="row-list">
                {service.items.map((item, i) => (
                  <li key={i}>
                    <span className="bullet">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
