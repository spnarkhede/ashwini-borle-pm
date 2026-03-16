import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#f9fafb] dark:bg-[#1e293b]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-gradient-to-br from-[#1a2b4a] via-[#1f3560] to-[#0ea5a0] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0ea5a0]/20 rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#0ea5a0]/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90">Let&rsquo;s Work Together</span>
            </div>

            <h2
              id="cta-heading"
              className="font-heading font-bold text-3xl md:text-5xl text-white mb-4 leading-tight"
            >
              Ready to Transform{' '}
              <span className="text-[#d4af37]">Your Product?</span>
            </h2>

            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you need a strategic roadmap, a complete product overhaul, or a trusted thought
              partner for your next big challenge — I&rsquo;m here to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a2b4a] font-bold rounded-xl hover:bg-[#f9fafb] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2b4a]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule Consultation
              </Link>

              <Link
                href="/profile"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2b4a]"
              >
                View Case Studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Response within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free initial 30-min consultation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                NDA available on request
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
