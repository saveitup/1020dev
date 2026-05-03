import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/data';

/**
 * Open-Graph + Twitter-Image für Social-Shares.
 *
 * Next.js erkennt diese Datei automatisch und injiziert:
 *   <meta property="og:image" content="/opengraph-image?...">
 *   <meta name="twitter:image" content="/opengraph-image?...">
 *
 * Generierung läuft am Edge — kein Build-Step nötig, aktualisiert sich
 * automatisch wenn `SITE.tagline` in `lib/data.ts` geändert wird.
 *
 * Spec: 1200×630 PNG (LinkedIn / X / Slack / WhatsApp / Discord)
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
          padding: '80px',
          background: '#FFFFFF',
          color: '#0B1020',
          fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtiler Indigo-Akzent oben-rechts */}
        <div
          style={{
            position: 'absolute',
            top: -240,
            right: -240,
            width: 640,
            height: 640,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(129,140,248,0.18) 0%, rgba(129,140,248,0.05) 50%, transparent 75%)',
            display: 'flex',
          }}
        />

        {/* Top: Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            fontSize: 140,
            letterSpacing: -6,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#0B1020' }}>1020</span>
          <span
            style={{
              color: '#818CF8',
              textShadow:
                '0 0 24px rgba(129,140,248,0.55), 0 0 48px rgba(129,140,248,0.3)',
            }}
          >
            .
          </span>
          <span style={{ color: '#6B7494', fontWeight: 500 }}>dev</span>
        </div>

        {/* Middle: Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 36,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 1000,
              color: '#0B1020',
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#818CF8',
              letterSpacing: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span>Webentwicklung</span>
            <span style={{ color: '#C7CCE0' }}>·</span>
            <span>SEO</span>
            <span style={{ color: '#C7CCE0' }}>·</span>
            <span>AEO</span>
            <span style={{ color: '#C7CCE0' }}>·</span>
            <span>Automation</span>
          </div>
        </div>

        {/* Bottom: Footer-Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#6B7494',
            borderTop: '1px solid #E5E7F0',
            paddingTop: 28,
          }}
        >
          <span>Studio · Wien · Leopoldstadt</span>
          <span style={{ color: '#0B1020', fontWeight: 500 }}>1020.dev</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
