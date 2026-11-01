import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F9F8F6',
          borderRadius: '36px',
          border: '4px solid rgba(127, 107, 87, 0.4)',
        }}
      >
        <span
          style={{
            fontSize: 90,
            fontFamily: 'serif',
            fontWeight: 700,
            color: '#7F6B57',
            letterSpacing: '-3px',
          }}
        >
          JS
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
