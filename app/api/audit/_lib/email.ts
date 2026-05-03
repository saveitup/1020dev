import { promises as dns } from 'node:dns';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  '10minutemail.com',
  '10minutemail.net',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamailblock.com',
  'sharklasers.com',
  'yopmail.com',
  'tempmail.com',
  'temp-mail.org',
  'temp-mail.io',
  'trashmail.com',
  'throwawaymail.com',
  'maildrop.cc',
  'getnada.com',
  'mohmal.com',
  'fakeinbox.com',
  'dispostable.com',
  'spamgourmet.com',
  'mintemail.com',
  'mytrashmail.com',
  'mailnesia.com',
  'tempinbox.com',
  'inboxalias.com',
  'mailcatch.com',
]);

export type EmailCheck =
  | { ok: true; email: string; domain: string }
  | { ok: false; reason: string };

export async function validateEmail(raw: string): Promise<EmailCheck> {
  const email = raw.trim().toLowerCase();

  if (!email) return { ok: false, reason: 'Bitte E-Mail-Adresse angeben.' };
  if (email.length > 254) return { ok: false, reason: 'E-Mail-Adresse ist zu lang.' };
  if (!EMAIL_RE.test(email))
    return { ok: false, reason: 'Bitte eine gültige E-Mail-Adresse eingeben.' };

  const domain = email.split('@')[1];

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      ok: false,
      reason: 'Wegwerf-E-Mail-Adressen werden nicht akzeptiert. Bitte eine echte Adresse angeben.',
    };
  }

  try {
    const records = await dns.resolveMx(domain);
    if (!records || records.length === 0) {
      return {
        ok: false,
        reason: 'Diese E-Mail-Domain existiert nicht oder kann keine E-Mails empfangen.',
      };
    }
  } catch {
    return {
      ok: false,
      reason: 'Diese E-Mail-Domain existiert nicht oder kann keine E-Mails empfangen.',
    };
  }

  return { ok: true, email, domain };
}
