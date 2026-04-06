import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RobotBackground } from '@/components/robot-background'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ICRA 2026 Satellite School',
  description: 'Advanced educational program for robotics and automation professionals',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logos/smred.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logos/smred.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logos/smred.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <RobotBackground />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
