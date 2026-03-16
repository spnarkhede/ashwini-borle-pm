import { topics } from '@/data/topics';

export default function TopicsSection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#f9fafb] dark:bg-[#0f172a]"
      aria-labelledby="topics-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-3">
            Areas of Expertise
          </p>
          <h2
            id="topics-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-[#1f2937] dark:text-[#f8fafc] mb-4"
          >
            What I Bring to the Table
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mx-auto mb-4" aria-hidden="true" />
          <p className="text-[#6b7280] dark:text-[#94a3b8] max-w-2xl mx-auto text-lg leading-relaxed">
            Eight core areas where I drive measurable impact for product teams and organizations.
          </p>
        </div>

        {/* Topic Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          role="list"
          aria-label="Expertise areas"
        >
          {topics.map((topic, index) => (
            <article
              key={topic.id}
              role="listitem"
              className="group bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#334155] shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-250 cursor-default"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${topic.color}18` }}
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke={topic.color}
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
                </svg>
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-base text-[#1f2937] dark:text-[#f8fafc] mb-2 leading-snug">
                {topic.title}
              </h3>
              <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed line-clamp-4">
                {topic.description}
              </p>

              {/* Hover accent line */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: `linear-gradient(90deg, ${topic.color}, transparent)` }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
