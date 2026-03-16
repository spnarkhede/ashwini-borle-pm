import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import TopicsSection from '@/components/sections/TopicsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Alex Chen — Senior Product Manager',
  description:
    'Senior Product Manager with 8+ years building B2B SaaS, digital health, and fintech products. Specializing in product strategy, cross-functional leadership, and data-driven growth.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TopicsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
