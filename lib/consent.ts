// ============================================
// Consent state management
// ============================================
// Tiny module for the cookie banner. Persists the user's choice in
// localStorage and broadcasts changes via a CustomEvent so client
// components (notably GoogleTag) can react without prop drilling.
//
// Values:
//   'all'        — user accepted analytics + marketing cookies
//   'essential'  — user declined; only technically-necessary storage
//   null         — no decision yet (banner should be shown)

export type ConsentValue = 'all' | 'essential';

export const CONSENT_KEY = '1020-consent';
export const CONSENT_EVENT = '1020-consent-change';
export const CONSENT_REOPEN_EVENT = '1020-consent-reopen';

export function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    if (v === 'all' || v === 'essential') return v;
    return null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (value === null) {
      window.localStorage.removeItem(CONSENT_KEY);
    } else {
      window.localStorage.setItem(CONSENT_KEY, value);
    }
    window.dispatchEvent(new CustomEvent<ConsentValue | null>(CONSENT_EVENT, { detail: value }));
  } catch {}
}

export function onConsentChange(handler: (value: ConsentValue | null) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const listener = (e: Event) => {
    const ce = e as CustomEvent<ConsentValue | null>;
    handler(ce.detail);
  };
  window.addEventListener(CONSENT_EVENT, listener);
  return () => window.removeEventListener(CONSENT_EVENT, listener);
}

export function reopenConsentBanner(): void {
  if (typeof window === 'undefined') return;
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_REOPEN_EVENT));
  } catch {}
}
