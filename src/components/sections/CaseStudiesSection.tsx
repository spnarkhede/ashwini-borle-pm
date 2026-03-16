import { caseStudies } from '@/data/caseStudies';
import Badge from '@/components/ui/Badge';

export default function CaseStudiesSection() {
  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-[#0f172a]"
      aria-labelledby="case-studies-heading"
      id="case-studies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-3">
            Selected Work
          </p>
          <h2
            id="case-studies-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-[#1f2937] dark:text-[#f8fafc] mb-4"
          >
            Case Studies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mx-auto mb-4" aria-hidden="true" />
          <p className="text-[#6b7280] dark:text-[#94a3b8] max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of product challenges solved with measurable, documented impact.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list" aria-label="Case studies">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              role="listitem"
              className="group bg-[#f9fafb] dark:bg-[#1e293b] rounded-2xl border border-[#e5e7eb] dark:border-[#334155] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-250"
            >
              {/* Top color bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${study.color}, ${study.color}80)` }}
                aria-hidden="true"
              />

              <div className="p-6 md:p-7">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{study.category}</Badge>
                  <span className="text-xs text-[#6b7280] dark:text-[#94a3b8]">{study.duration}</span>
                  <span className="text-xs text-[#6b7280] dark:text-[#94a3b8]">&middot;</span>
                  <span className="text-xs text-[#6b7280] dark:text-[#94a3b8]">{study.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-[#1f2937] dark:text-[#f8fafc] mb-1 group-hover:text-[#0ea5a0] dark:group-hover:text-[#14b8a6] transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-[#6b7280] dark:text-[#94a3b8] mb-4">
                  {study.company}
                </p>

                {/* Three columns */}
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-bold text-[#1a2b4a] dark:text-[#3b82f6] uppercase tracking-wider mb-1">
                      Challenge
                    </p>
                    <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed line-clamp-2">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed line-clamp-2">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-1">
                      Result
                    </p>
                    <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed line-clamp-2">
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#e5e7eb] dark:border-[#334155]">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-heading font-bold text-base text-[#1a2b4a] dark:text-[#3b82f6]">
                        {metric.value}
                      </p>
                      <p className="text-xs text-[#6b7280] dark:text-[#94a3b8] mt-0.5 leading-tight">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-white dark:bg-[#0f172a] text-[#6b7280] dark:text-[#94a3b8] border border-[#e5e7eb] dark:border-[#334155]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
