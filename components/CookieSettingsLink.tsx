'use client';

import { reopenConsentBanner } from '@/lib/consent';

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => reopenConsentBanner()}
    >
      Cookie-Einstellungen
    </button>
  );
}
