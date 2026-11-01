import { ImageResponse } from 'next/og';

export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

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
          background: '#F9F8F6',
          borderRadius: '50%',
          border: '2px solid rgba(127, 107, 87, 0.5)',
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontFamily: 'serif',
            fontWeight: 700,
            color: '#7F6B57',
            letterSpacing: '-1px',
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
