'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { trackBookingClick } from '@/lib/analytics';
import { getConsent, onConsentChange, type ConsentValue } from '@/lib/consent';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleTag() {
  const [consent, setConsentState] = useState<ConsentValue | null>(null);

  // Read initial consent and subscribe to changes. Until consent === 'all',
  // no Google scripts are loaded and no events are tracked.
  useEffect(() => {
    setConsentState(getConsent());
    return onConsentChange((v) => setConsentState(v));
  }, []);

  // Booking-link conversion listener — only active after consent.
  useEffect(() => {
    if (!GADS_ID) return;
    if (consent !== 'all') return;

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      if (!/^https?:\/\/(www\.)?cal\.(com|eu)\/1020dev/i.test(href)) return;
      trackBookingClick();
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [consent]);

  const primaryId = GA4_ID || GADS_ID;
  if (!primaryId) return null;
  if (consent !== 'all') return null;

  const configs = [
    GA4_ID ? `gtag('config', '${GA4_ID}');` : '',
    GADS_ID ? `gtag('config', '${GADS_ID}');` : '',
  ]
    .filter(Boolean)
    .join('\n          ');

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${configs}
        `}
      </Script>
    </>
  );
}
