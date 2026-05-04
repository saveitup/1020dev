type GtagFn = (
  command: 'event' | 'config' | 'js' | 'set',
  ...args: unknown[]
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

const BOOKING_CONV = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONV_BOOKING;
const BOOKING_CONFIRMED_CONV = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONV_BOOKING_CONFIRMED;
const AUDIT_CONV = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONV_AUDIT;

export function trackBookingClick(): void {
  if (!BOOKING_CONV || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', {
    send_to: BOOKING_CONV,
    value: 80,
    currency: 'EUR',
  });
}

export function trackBookingConfirmed(): void {
  if (!BOOKING_CONFIRMED_CONV || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', {
    send_to: BOOKING_CONFIRMED_CONV,
    value: 200,
    currency: 'EUR',
    transaction_id: `booking-${Date.now()}`,
  });
}

export function trackAuditCompleted(domain: string): void {
  if (!AUDIT_CONV || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', {
    send_to: AUDIT_CONV,
    value: 20,
    currency: 'EUR',
    transaction_id: `audit-${domain}-${Date.now()}`,
  });
}

export {};
