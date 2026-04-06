import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { CountdownTimer } from '@/components/countdown-timer';
import { ProgramTimeline } from '@/components/program-timeline';
import { About } from '@/components/about';
import { Speakers } from '@/components/speakers';
import { Committee } from '@/components/committee';
import { Partners } from '@/components/partners';
import { FAQSection } from '@/components/faq-section';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { StickyCTABar } from '@/components/sticky-cta-bar';
import { ScrollProgress } from '@/components/scroll-progress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICRA 2026 Satellite School | IEEE RAS Tunisia Chapter',
  description: 'Join world-leading roboticists for an intensive 3-day program covering advanced topics in robotics, control systems, and autonomous systems. June 1-3, 2026 in Tunis, Tunisia.',
  openGraph: {
    title: 'ICRA 2026 Satellite School | IEEE RAS Tunisia Chapter',
    description: 'Join world-leading roboticists for an intensive 3-day program covering advanced topics in robotics, control systems, and autonomous systems. June 1-3, 2026.',
    url: '/',
    siteName: 'ICRA Satellite School 2026',
    images: [
      {
        url: '/Logos/black.png',
        width: 1200,
        height: 630,
        alt: 'ICRA 2026 Satellite School',
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
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <CountdownTimer />
      <About />
      <ProgramTimeline />
      <Speakers />
      <Committee />
      <Partners />
      <FAQSection />
      <CTA />
      <Footer />
      <ScrollToTop />
      <StickyCTABar />
    </main>
  );
}
