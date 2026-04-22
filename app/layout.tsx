import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RobotBackground } from '@/components/robot-background'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ICRA 2026 Satellite School | IEEE RAS Tunisia Chapter',
  description: 'Join world-leading roboticists for an intensive 3-day program covering advanced topics in robotics, control systems, and autonomous systems. June 1-3, 2026 in Tunis, Tunisia.',
  keywords: ['ICRA', 'robotics', 'satellite school', 'IEEE RAS', 'Tunisia', 'automation', 'AI', 'machine learning', 'workshops'],
  authors: [{ name: 'IEEE RAS Tunisia Chapter' }],
  creator: 'IEEE RAS Tunisia Chapter',
  publisher: 'IEEE RAS Tunisia Chapter',
  metadataBase: new URL('https://icra-tep.ieee.tn'),
  openGraph: {
    title: 'ICRA 2026 Satellite School | IEEE RAS Tunisia Chapter',
    description: 'Join world-leading roboticists for an intensive 3-day program covering advanced topics in robotics, control systems, and autonomous systems. June 1-3, 2026.',
    url: 'https://icra-tep.ieee.tn',
    siteName: 'ICRA Satellite School 2026',
    images: [
      {
        url: '/Logos/white.png',
        width: 1200,
        height: 630,
        alt: 'ICRA 2026 Satellite School Logo',
      },
      {
        url: '/Logos/black.png',
        width: 1200,
        height: 630,
        alt: 'ICRA 2026 Satellite School Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICRA 2026 Satellite School | IEEE RAS Tunisia Chapter',
    description: 'Join world-leading roboticists for an intensive 3-day program. June 1-3, 2026 in Tunis, Tunisia.',
    images: ['/Logos/white.png'],
    creator: '@IEEERAS_Tunisia',
  },
  icons: {
    icon: [
      {
        url: '/Logos/smred.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/Logos/white.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Logos/dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/Logos/smred.png',
    shortcut: '/Logos/smred.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <RobotBackground />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
