import { ImageResponse } from 'next/og';
import { FOCUS, SITE } from '@/lib/data';

/**
 * Open-Graph + Twitter-Image für Social-Shares (1200×630, Edge Runtime).
 * Zieht Tagline und Schwerpunkte aus `lib/data.ts` — ändert sich mit.
 */

export const runtime = 'edge';
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(180deg, #06110C 0%, #0A2017 40%, #163A2B 62%, #0E1A15 100%)',
          color: '#FAFAF9',
          fontFamily: 'system-ui, -apple-system, Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 44, letterSpacing: -1.5 }}>
          <span>1020</span>
          <span style={{ color: '#D9CCA8' }}>.</span>
          <span style={{ color: 'rgba(250,250,249,0.6)' }}>dev</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: -2.5,
              maxWidth: 980,
            }}
          >
            {SITE.tagline}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {FOCUS.map((f) => (
              <div
                key={f.id}
                style={{
                  display: 'flex',
                  padding: '10px 22px',
                  borderRadius: 999,
                  background: 'rgba(250,250,249,0.12)',
                  fontSize: 26,
                  color: 'rgba(250,250,249,0.88)',
                }}
              >
                {f.label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: 'rgba(250,250,249,0.55)',
          }}
        >
          <span>Studio · Wien</span>
          <span>1020.dev</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
