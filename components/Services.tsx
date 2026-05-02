import { SERVICES } from '@/lib/data';

export function Services() {
  return (
    <section className="section" id="leistungen">
      <div className="section-head">
        <div className="section-tag">Leistungen</div>
        <h2 className="section-title">Was wir tatsächlich machen.</h2>
        <p className="section-sub">
          Drei Bausteine, die einzeln Sinn ergeben und zusammen besonders. Kein Marketing-Sprech,
          sondern das, was Sie bei uns wirklich bekommen.
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
