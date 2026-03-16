import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about Ashwini Borle — Senior Technical Product Manager with 14+ years bridging business intent and engineering execution across Mastercard, IBM, Vodafone and more.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Technical Depth',
    description:
      "I operate comfortably at the level of data pipelines, APIs, ETL systems and cloud architecture — not to write the code, but to translate technical constraints into product direction that engineering teams can execute confidently.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance by Design',
    description:
      "In regulated environments like payments and fintech, compliance is not a gate at the end of delivery — it is an architectural constraint from day one. I embed PCI, PII and governance requirements into discovery, not just UAT.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Bias for Outcomes',
    description:
      "I measure success in production incidents reduced, release timelines accelerated, and operational overhead eliminated — not in features shipped or PRDs written. The platform is only as good as the business outcomes it enables.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Bridge Builder',
    description:
      "My core value is translation — turning complex architecture into clear product direction for business, and turning business priorities into precise technical requirements for engineering. I live at that intersection by choice.",
  },
];

const highlights = [
  { label: 'Years of Experience', value: '14+' },
  { label: 'Global Data Platforms', value: '5' },
  { label: 'Production Incident Reduction', value: '40%' },
  { label: 'Operational Efficiency Gain', value: '60%' },
];

const companies = ['Mastercard', 'IBM', 'Tech Mahindra', 'Vodafone Idea', 'Infosys'];

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
                Closing the gap between{' '}
                <span className="text-gradient">intent and execution</span>
              </h1>
              <div className="space-y-4 text-[#6b7280] dark:text-[#94a3b8] text-lg leading-relaxed">
                <p>
                  Most complex platforms fail not because of bad technology, but because the gap between business
                  intent and engineering execution is never fully bridged. That is the gap I have spent 14+ years
                  solving.
                </p>
                <p>
                  I am a Senior Technical Product Manager based in Pune, India, currently at Mastercard where I
                  own product strategy and delivery for 5 global data platforms powering payment ecosystems
                  across multiple regulatory regions. My role sits at the intersection of engineering, data
                  architecture, compliance and product strategy.
                </p>
                <p>
                  What differentiates my work is that I operate comfortably in both worlds — strategic product
                  thinking and deep technical understanding of data pipelines, APIs, ETL systems and cloud
                  data platforms. That combination allows me to translate complex architecture into clear
                  product direction that engineering teams can execute and businesses can benefit from.
                </p>
              </div>

              {/* Companies */}
              <div className="mt-6 mb-8">
                <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-3">
                  Experience across
                </p>
                <div className="flex flex-wrap gap-2">
                  {companies.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full bg-[#f9fafb] dark:bg-[#1e293b] border border-[#e5e7eb] dark:border-[#334155] text-xs font-semibold text-[#1f2937] dark:text-[#f8fafc]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
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
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#3b82f6] dark:to-[#14b8a6] flex items-center justify-center shadow-2xl">
                  <span className="font-heading font-bold text-white text-8xl md:text-9xl">AB</span>
                </div>
                <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-0 bg-white dark:bg-[#1e293b] rounded-2xl px-4 py-3 shadow-lg border border-[#e5e7eb] dark:border-[#334155]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
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
              What I believe about great platform work
            </h2>
            <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg max-w-2xl mx-auto">
              These principles have guided 14+ years of product and platform delivery across global fintech.
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
            "To be the person who connects the dots between technology, product strategy and measurable
            business outcomes. Complex platforms should not fail because of communication gaps — and
            they do not have to, if someone in the room speaks both languages fluently."
          </blockquote>
          <p className="mt-6 font-semibold text-[#1f2937] dark:text-[#f8fafc] text-lg">
            — Ashwini Borle
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#1e293b] dark:to-[#0f172a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Building data platforms or fintech infrastructure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            I am available for consulting engagements, advisory roles, and select full-time opportunities.
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
