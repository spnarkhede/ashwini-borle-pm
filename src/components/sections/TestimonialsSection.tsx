'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/data/testimonials';

const AVATAR_COLORS = [
  '#1a2b4a',
  '#0ea5a0',
  '#7c3aed',
  '#d97706',
  '#059669',
  '#dc2626',
  '#0284c7',
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#0f172a]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-3">
            LinkedIn Recommendations
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-[#1f2937] dark:text-[#f8fafc] mb-4"
          >
            What Colleagues Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mx-auto" aria-hidden="true" />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto" role="region" aria-label="LinkedIn recommendations slider" aria-live="polite">
          <div
            className={`transition-all duration-400 ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="bg-[#f9fafb] dark:bg-[#1e293b] rounded-3xl p-8 md:p-12 border border-[#e5e7eb] dark:border-[#334155] shadow-sm relative">
              {/* Quote mark */}
              <div
                className="absolute top-6 left-8 text-7xl font-serif text-[#0ea5a0]/15 dark:text-[#14b8a6]/15 leading-none pointer-events-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-[#1f2937] dark:text-[#f8fafc] leading-relaxed mb-8 relative z-10">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: AVATAR_COLORS[current % AVATAR_COLORS.length] }}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[#1f2937] dark:text-[#f8fafc]">{t.name}</p>
                    <p className="text-sm text-[#6b7280] dark:text-[#94a3b8]">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                </div>
                {/* LinkedIn-style meta */}
                <div className="text-right">
                  <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">{t.relationship}</p>
                  <p className="text-xs text-[#9ca3af] dark:text-[#64748b] mt-0.5">{t.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2 flex-wrap" role="tablist" aria-label="Recommendation navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`View recommendation ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] ${
                    i === current
                      ? 'w-8 h-2.5 bg-[#0ea5a0] dark:bg-[#14b8a6]'
                      : 'w-2.5 h-2.5 bg-[#e5e7eb] dark:bg-[#334155] hover:bg-[#6b7280] dark:hover:bg-[#94a3b8]'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous recommendation"
                className="w-10 h-10 rounded-xl border border-[#e5e7eb] dark:border-[#334155] flex items-center justify-center text-[#6b7280] dark:text-[#94a3b8] hover:bg-[#f9fafb] dark:hover:bg-[#1e293b] hover:text-[#1f2937] dark:hover:text-[#f8fafc] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next recommendation"
                className="w-10 h-10 rounded-xl bg-[#1a2b4a] dark:bg-[#3b82f6] flex items-center justify-center text-white hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Count indicator */}
          <p className="text-center text-xs text-[#9ca3af] dark:text-[#64748b] mt-4">
            {current + 1} of {testimonials.length} recommendations
          </p>
        </div>
      </div>
    </section>
  );
}
