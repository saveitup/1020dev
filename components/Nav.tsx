'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/data';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'is-scrolled' : ''}>
      <div className="nav-inner">
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
      </div>
    </nav>
  );
}
