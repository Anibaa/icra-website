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
