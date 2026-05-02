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

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div key={service.num} className="service-card">
            <div className="service-num">{service.num}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i}>
                  <span className="bullet">›</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
