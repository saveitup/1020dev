import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Favicon: "10" auf Tannengrün mit Sand-Punkt — lesbar auch in 16 px.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#003D26',
          borderRadius: 14,
          color: '#FAFAF9',
          fontFamily: 'system-ui, -apple-system, Helvetica, Arial, sans-serif',
          fontSize: 34,
          fontWeight: 500,
          letterSpacing: '-2px',
        }}
      >
        10
        <div
          style={{
            display: 'flex',
            width: 7,
            height: 7,
            marginLeft: 2,
            marginTop: 18,
            borderRadius: 9999,
            background: '#D9CCA8',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
