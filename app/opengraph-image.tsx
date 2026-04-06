import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'ICRA 2026 Satellite School'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              marginBottom: 20,
              background: 'linear-gradient(90deg, #f20136 0%, #ff6b9d 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            ICRA 2026
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              marginBottom: 30,
            }}
          >
            Satellite School
          </div>
          <div
            style={{
              fontSize: 32,
              opacity: 0.9,
              marginBottom: 20,
            }}
          >
            June 1-3, 2026 • Tunis, Tunisia
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.8,
              color: '#06b6d4',
            }}
          >
            IEEE RAS Tunisia Chapter
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
