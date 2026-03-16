import { timelineItems, certifications } from '@/data/timeline';

export default function TimelineSection() {
  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#0f172a]"
      aria-labelledby="timeline-heading"
      id="experience"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-3">
            Career Journey
          </p>
          <h2
            id="timeline-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-[#1f2937] dark:text-[#f8fafc] mb-4"
          >
            Experience &amp; Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mx-auto" aria-hidden="true" />
        </div>

        {/* Timeline */}
        <ol className="relative" aria-label="Career timeline">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[#e5e7eb] dark:bg-[#334155]"
            aria-hidden="true"
          />

          {timelineItems.map((item, index) => (
            <li
              key={item.id}
              className="relative pl-12 md:pl-16 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div
                className={`absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  item.type === 'education'
                    ? 'bg-[#d4af37]/12 border-[#d4af37]'
                    : index === 0
                    ? 'bg-[#0ea5a0]/12 border-[#0ea5a0]'
                    : 'bg-white dark:bg-[#0f172a] border-[#e5e7eb] dark:border-[#334155]'
                }`}
                aria-hidden="true"
              >
                {item.type === 'education' ? (
                  <svg className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                ) : index === 0 ? (
                  <svg className="w-3.5 h-3.5 text-[#0ea5a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6b7280] dark:bg-[#94a3b8]" />
                )}
              </div>

              {/* Content */}
              <div className="group">
                {/* Year badge */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#f9fafb] dark:bg-[#1e293b] text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] border border-[#e5e7eb] dark:border-[#334155] mb-3">
                  {item.year}
                </span>

                <div className="bg-[#f9fafb] dark:bg-[#1e293b] rounded-2xl p-5 md:p-6 border border-[#e5e7eb] dark:border-[#334155] hover:border-[#0ea5a0]/40 dark:hover:border-[#14b8a6]/30 hover:shadow-sm transition-all duration-200">
                  <h3 className="font-heading font-bold text-lg text-[#1f2937] dark:text-[#f8fafc] mb-0.5">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-sm">
                    <span className="font-semibold text-[#0ea5a0] dark:text-[#14b8a6]">{item.company}</span>
                    <span className="text-[#6b7280] dark:text-[#94a3b8]">&middot;</span>
                    <span className="text-[#6b7280] dark:text-[#94a3b8]">{item.location}</span>
                  </div>

                  <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5" aria-label="Key achievements">
                    {item.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-[#1f2937] dark:text-[#f8fafc]">
                        <svg
                          className="w-4 h-4 text-[#0ea5a0] dark:text-[#14b8a6] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="font-heading font-bold text-xl text-[#1f2937] dark:text-[#f8fafc] mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Certifications">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                role="listitem"
                className="bg-[#f9fafb] dark:bg-[#1e293b] rounded-2xl p-4 border border-[#e5e7eb] dark:border-[#334155] text-center hover:border-[#d4af37]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-[#d4af37]">{cert.badge}</span>
                </div>
                <p className="text-xs font-semibold text-[#1f2937] dark:text-[#f8fafc] leading-tight mb-1">
                  {cert.name}
                </p>
                <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">{cert.issuer}</p>
                <p className="text-xs text-[#0ea5a0] dark:text-[#14b8a6] font-semibold mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
