import { STUDIO } from '@/lib/data';

export function Studio() {
  return (
    <section className="section studio" id="studio" aria-labelledby="studio-title">
      <h2 id="studio-title" className="studio-title">
        {STUDIO.title}
      </h2>
      <div className="studio-cols">
        {STUDIO.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
