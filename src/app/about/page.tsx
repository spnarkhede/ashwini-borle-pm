import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Alex Chen — Senior Product Manager with 8+ years of experience in B2B SaaS, digital health, and fintech. Mission, values, and what drives great product work.',
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Users First',
    description:
      "Every product decision starts with a clear understanding of who we're building for and what problem we're solving. Opinions are cheap; user insight is priceless.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Informed',
    description:
      'I follow the data where it leads — even when it contradicts my instincts. Good product intuition is shaped by disciplined measurement, not in spite of it.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Bias for Action',
    description:
      'Velocity matters. A good decision today beats a perfect decision next month. I ship, learn, and iterate — not plan, plan, and plan some more.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Radical Transparency',
    description:
      'Trust is built through honest communication — especially when the news is bad. I believe in surfacing problems early and making the reasoning behind decisions visible.',
  },
];

const highlights = [
  { label: 'Years of Experience', value: '8+' },
  { label: 'Products Shipped', value: '40+' },
  { label: 'Revenue Influenced', value: '$50M+' },
  { label: 'Industries', value: '15+' },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-white dark:bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#0ea5a0]/8 to-transparent dark:from-[#14b8a6]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#d4af37]/8 to-transparent blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="animate-on-scroll">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold tracking-widest uppercase mb-6">
                About Me
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-6 leading-tight">
                Building products that{' '}
                <span className="text-gradient">actually matter</span>
              </h1>
              <div className="space-y-4 text-[#6b7280] dark:text-[#94a3b8] text-lg leading-relaxed">
                <p>
                  I'm Alex Chen — a Senior Product Manager based in San Francisco with over 8 years of experience
                  turning complex problems into products people love. I've worked across B2B SaaS, digital health,
                  and fintech, building products that have collectively impacted hundreds of thousands of users and
                  generated over $50M in revenue.
                </p>
                <p>
                  My path to product management started in engineering and consulting — a combination that gave me
                  a rare ability to speak fluently with both technical teams and business stakeholders. I hold a
                  dual B.S./MBA from Cornell University and have spent my career at the intersection of strategy
                  and execution.
                </p>
                <p>
                  When I'm not shipping products, I'm writing about product management, mentoring early-career PMs,
                  and hunting for great coffee shops in the Mission District.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#e5e7eb] dark:border-[#334155] text-[#1f2937] dark:text-[#f8fafc] font-semibold rounded-xl hover:bg-[#f9fafb] dark:hover:bg-[#1e293b] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
                >
                  View Full Profile
                </Link>
              </div>
            </div>

            {/* Profile card */}
            <div className="animate-on-scroll-right">
              <div className="relative">
                {/* Avatar */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center shadow-2xl">
                  <span className="font-heading font-bold text-white text-8xl md:text-9xl">AC</span>
                </div>
                {/* Floating badge — currently available */}
                <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-0 bg-white dark:bg-[#1e293b] rounded-2xl px-4 py-3 shadow-lg border border-[#e5e7eb] dark:border-[#334155]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                    <span className="text-sm font-semibold text-[#1f2937] dark:text-[#f8fafc]">
                      Open to Consulting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 bg-[#1a2b4a] dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((h) => (
              <div key={h.label} className="animate-on-scroll">
                <dt className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{h.value}</dt>
                <dd className="text-sm text-[#94a3b8]">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-[#f9fafb] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-4">
              What I believe about great product work
            </h2>
            <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg max-w-2xl mx-auto">
              These principles have guided every product decision I've made across 8 years and 40+ products.
            </p>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`animate-on-scroll delay-${(i + 1) * 100} bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-[#e5e7eb] dark:border-[#334155] card-hover`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-[#1f2937] dark:text-[#f8fafc] mb-2">
                  {v.title}
                </h3>
                <p className="text-[#6b7280] dark:text-[#94a3b8] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-6">
            My mission
          </h2>
          <blockquote className="text-xl md:text-2xl text-[#6b7280] dark:text-[#94a3b8] italic leading-relaxed border-l-4 border-[#0ea5a0] dark:border-[#14b8a6] pl-6 text-left">
            "To build products that create genuine value for the people who use them — not just impressive metrics
            for the people who build them. The best products feel inevitable in hindsight. Getting there requires
            relentless curiosity, honest measurement, and the courage to kill your darlings."
          </blockquote>
          <p className="mt-6 font-semibold text-[#1f2937] dark:text-[#f8fafc] text-lg">
            — Alex Chen
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#1e293b] dark:to-[#0f172a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Let's build something great together
          </h2>
          <p className="text-white/80 text-lg mb-8">
            I'm available for consulting engagements, advisory roles, and select full-time opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#1a2b4a] font-bold rounded-xl hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2b4a]"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Read My Writing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
