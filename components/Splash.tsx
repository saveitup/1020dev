'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Splash() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [out, setOut] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (!isHome) {
      setOut(true);
      setMounted(false);
      document.body.classList.add('ready');
      return;
    }

    // Already seen this session? skip immediately
    let alreadySeen = false;
    try {
      alreadySeen = !!sessionStorage.getItem('1020-splash-seen');
    } catch {}

    if (alreadySeen) {
      setOut(true);
      setMounted(false);
      document.body.classList.add('ready');
      return;
    }

    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      try {
        sessionStorage.setItem('1020-splash-seen', '1');
      } catch {}
      setOut(true);
      document.body.classList.add('ready');
    };

    const timer = setTimeout(dismiss, 2200);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isHome]);

  // Unmount after fade-out completes (700ms)
  useEffect(() => {
    if (out) {
      const t = setTimeout(() => setMounted(false), 800);
      return () => clearTimeout(t);
    }
  }, [out]);

  if (!mounted) return null;

  return (
    <div
      className={`splash ${out ? 'out' : ''}`}
      onClick={() => {
        if (out) return;
        try {
          sessionStorage.setItem('1020-splash-seen', '1');
        } catch {}
        setOut(true);
        document.body.classList.add('ready');
      }}
      aria-hidden="true"
    >
      <div className="splash-logo">
        <span className="num">1020</span>
        <span className="dot">.</span>
        <span className="tld">dev</span>
      </div>
      <div className="splash-sub">
        <span>Wien</span>
        <span className="sep">·</span>
        <span>Leopoldstadt</span>
      </div>
    </div>
  );
}
