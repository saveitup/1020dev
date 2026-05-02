import Link from 'next/link';
import { SITE } from '@/lib/data';

export function Nav() {
  return (
    <nav>
      <Link href="/" className="wordmark" aria-label={SITE.name}>
        <span className="num">1020</span>
        <span className="dot">.</span>
        <span className="tld">dev</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="#audit">Audit</Link>
        </li>
        <li>
          <Link href="#methode">Methode</Link>
        </li>
        <li>
          <Link href="#leistungen">Leistungen</Link>
        </li>
        <li>
          <Link href="#preise">Preise</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>
      <Link
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener"
        className="nav-cta"
      >
        Termin buchen <span className="arrow">→</span>
      </Link>
    </nav>
  );
}
