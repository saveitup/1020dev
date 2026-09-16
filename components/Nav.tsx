'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/data';

type NavLink = { href: string; label: string };

const WEB_LINKS: NavLink[] = [
  { href: '#audit', label: 'Audit' },
  { href: '#methode', label: 'Methode' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#angebot', label: 'Angebot' },
  { href: '#faq', label: 'FAQ' },
  { href: '/journal', label: 'Journal' },
];

const AUTOMATION_LINKS: NavLink[] = [
  { href: '#methode', label: 'Methode' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#angebot', label: 'Angebot' },
  { href: '#faq', label: 'FAQ' },
  { href: '/journal', label: 'Journal' },
];

const APPS_LINKS: NavLink[] = [
  { href: '#methode', label: 'Methode' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#referenz', label: 'Referenz' },
  { href: '#angebot', label: 'Angebot' },
  { href: '#faq', label: 'FAQ' },
  { href: '/journal', label: 'Journal' },
];

const TRACK_LINKS: NavLink[] = [
  { href: '/web', label: 'Web' },
  { href: '/automation', label: 'Software' },
  { href: '/apps', label: 'Apps' },
  { href: '/journal', label: 'Journal' },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isChooser = pathname === '/';
  const isWeb = pathname === '/web';
  const isAutomation = pathname === '/automation';
  const isApps = pathname === '/apps';

  // The chooser landing renders its own prominent logo and footer CTAs, so
  // the sticky nav is suppressed entirely there.
  if (isChooser) return null;

  let links: NavLink[] = [];
  if (isWeb) links = WEB_LINKS;
  else if (isAutomation) links = AUTOMATION_LINKS;
  else if (isApps) links = APPS_LINKS;
  else links = TRACK_LINKS;

  const otherTracks = TRACK_LINKS.filter(
    (t) => t.href !== pathname && !links.some((l) => l.href === t.href),
  );

  return (
    <nav className={[scrolled ? 'is-scrolled' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')}>
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label={SITE.name}>
          <span className="num">1020</span>
          <span className="dot">.</span>
          <span className="tld">dev</span>
        </Link>
        {links.length > 0 && (
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        )}
        <div className="nav-actions">
          <Link
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener"
            className="nav-cta"
          >
            Termin buchen <span className="arrow">→</span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Schließen' : 'Menü'}
          </button>
        </div>
      </div>

      <div id="nav-menu" className="nav-menu" hidden={!open}>
        {links.length > 0 && (
          <ul className="nav-menu-list">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {otherTracks.length > 0 && (
          <>
            <div className="nav-menu-label">Weitere Tracks</div>
            <ul className="nav-menu-list">
              {otherTracks.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} onClick={() => setOpen(false)}>
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}
