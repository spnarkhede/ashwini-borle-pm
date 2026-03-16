'use client';

import { useEffect, useRef, useState } from 'react';
import { skills } from '@/data/skills';

const categories = ['All', 'Core PM', 'Analytics', 'Leadership', 'Strategy', 'Process', 'Design', 'Technical'];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#f9fafb] dark:bg-[#0f172a]"
      aria-labelledby="skills-heading"
      id="skills"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] uppercase tracking-wider mb-3">
            Capabilities
          </p>
          <h2
            id="skills-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-[#1f2937] dark:text-[#f8fafc] mb-4"
          >
            Skills &amp; Proficiency
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0ea5a0] to-[#d4af37] rounded-full mx-auto" aria-hidden="true" />
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filter skills by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] ${
                activeCategory === cat
                  ? 'bg-[#0ea5a0] dark:bg-[#14b8a6] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1e293b] text-[#6b7280] dark:text-[#94a3b8] border border-[#e5e7eb] dark:border-[#334155] hover:border-[#0ea5a0] dark:hover:border-[#14b8a6] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills list */}
        <div className="space-y-4" aria-label="Skills with proficiency levels">
          {filteredSkills.map((skill, index) => (
            <div key={skill.id} style={{ transitionDelay: `${index * 50}ms` }}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#1f2937] dark:text-[#f8fafc]">
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#f9fafb] dark:bg-[#334155] text-[#6b7280] dark:text-[#94a3b8] border border-[#e5e7eb] dark:border-[#475569]">
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm font-bold text-[#0ea5a0] dark:text-[#14b8a6]">
                  {skill.level}%
                </span>
              </div>
              <div
                className="h-2 bg-[#e5e7eb] dark:bg-[#334155] rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name}: ${skill.level}% proficiency`}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, #0ea5a0, #1a2b4a)`,
                    transitionDelay: `${index * 50}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
