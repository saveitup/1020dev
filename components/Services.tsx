import { SERVICES } from '@/lib/data';

type Service = {
  num: string;
  title: string;
  desc: string;
  items: readonly string[];
};

type ServicesProps = {
  services?: readonly Service[];
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
};

export function Services({
  services = SERVICES,
  marker = '02',
  title = (
    <>
      Was wir <em>tatsächlich</em> machen.
    </>
  ),
  lede = 'Drei Bausteine, die einzeln Sinn ergeben und zusammen besonders. Kein Marketing-Sprech, sondern das, was Sie bei uns wirklich bekommen.',
}: ServicesProps = {}) {
  return (
    <section className="chapter chapter-tinted" id="leistungen">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Leistungen</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="rows rows-services">
        {services.map((service) => (
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
