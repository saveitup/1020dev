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
          background: '#003D26',
          fontFamily: 'system-ui, -apple-system, Helvetica, Arial, sans-serif',
          letterSpacing: '-3px',
          color: '#FAFAF9',
        }}
      >
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 500, lineHeight: 1 }}>1020</div>
        <div
          style={{
            display: 'flex',
            width: 12,
            height: 12,
            borderRadius: 9999,
            background: '#D9CCA8',
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
            color: 'rgba(250,250,249,0.6)',
          }}
        >
          dev
        </div>
      </div>
    ),
    { ...size },
  );
}
