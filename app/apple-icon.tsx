import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #030615 0%, #07112e 55%, #0e1a44 100%)',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
          letterSpacing: '-3px',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 600, lineHeight: 1 }}>1020</div>
        <div
          style={{
            display: 'flex',
            width: 12,
            height: 12,
            borderRadius: 9999,
            background: '#818CF8',
            boxShadow: '0 0 18px 4px rgba(129,140,248,0.85)',
            margin: '14px 0',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '-1.5px',
            color: 'rgba(255,255,255,0.62)',
          }}
        >
          dev
        </div>
      </div>
    ),
    { ...size },
  );
}
