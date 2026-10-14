import Image from 'next/image';

type Shot = { readonly src: string; readonly alt: string };

/**
 * CSS-Smartphone-Rahmen um einen echten App-Screenshot.
 * `decorative` setzt ein leeres alt, wenn derselbe Screenshot auf der
 * Seite schon einmal beschrieben ist.
 */
export function PhoneMock({
  shot,
  decorative = false,
  sizes = '(max-width: 760px) 45vw, 300px',
}: {
  shot: Shot;
  decorative?: boolean;
  sizes?: string;
}) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <Image
          src={shot.src}
          alt={decorative ? '' : shot.alt}
          fill
          sizes={sizes}
          className="phone-img"
        />
      </div>
    </div>
  );
}
