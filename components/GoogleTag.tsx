'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { trackBookingClick } from '@/lib/analytics';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleTag() {
  useEffect(() => {
    if (!GADS_ID) return;

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
  }, []);

  const primaryId = GA4_ID || GADS_ID;
  if (!primaryId) return null;

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
