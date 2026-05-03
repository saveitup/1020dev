import Link from 'next/link';
import { SITE } from '@/lib/data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-mark" aria-label={SITE.name}>
          <span className="num">1020</span>
          <span className="dot">.</span>
          <span className="tld">dev</span>
        </div>
        <div className="footer-tag">
          {SITE.tagline}
          <br />
          Studio · Wien · gebaut für KMU in ganz Österreich.
        </div>
      </div>
      <div className="footer-right">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <a href={SITE.bookingUrl} target="_blank" rel="noopener">
          cal.com/1020dev ↗
        </a>
        <Link href="/impressum">Impressum</Link>
        <div className="footer-meta">© 2026 · {SITE.location}</div>
      </div>
    </footer>
  );
}
