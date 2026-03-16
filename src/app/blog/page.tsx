'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, categories, type BlogCategory } from '@/data/blog';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured);

  return (
    <div className="pt-16 md:pt-18">
      {/* Header */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold tracking-widest uppercase mb-6">
            Writing
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-4">
            Product Management Insights
          </h1>
          <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg max-w-2xl">
            Frameworks, lessons, and honest takes on building products — drawn from 8+ years of shipping and
            failing and shipping again.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-10 bg-white dark:bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#334155] bg-white dark:bg-[#1e293b] card-hover animate-on-scroll focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
            >
              <div className="grid md:grid-cols-5">
                {/* Color slab */}
                <div
                  className="md:col-span-2 h-48 md:h-auto min-h-[220px] flex items-center justify-center"
                  style={{ backgroundColor: featured.coverColor }}
                >
                  <div className="text-center px-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-3">
                      Featured
                    </span>
                    <div className="text-white font-heading font-bold text-4xl opacity-30 select-none">
                      {featured.category}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold">
                      {featured.category}
                    </span>
                    <span className="text-sm text-[#6b7280] dark:text-[#94a3b8]">{featured.readTime}</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-3 group-hover:text-[#0ea5a0] dark:group-hover:text-[#14b8a6] transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-[#6b7280] dark:text-[#94a3b8] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#6b7280] dark:text-[#94a3b8]">
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="text-[#0ea5a0] dark:text-[#14b8a6] font-semibold text-sm group-hover:underline">
                      Read article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="py-12 bg-[#f9fafb] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10 animate-on-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] ${
                  activeCategory === cat
                    ? 'bg-[#1a2b4a] dark:bg-[#3b82f6] text-white shadow-sm'
                    : 'bg-white dark:bg-[#1e293b] text-[#6b7280] dark:text-[#94a3b8] border border-[#e5e7eb] dark:border-[#334155] hover:border-[#0ea5a0] dark:hover:border-[#14b8a6] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`animate-on-scroll delay-${Math.min((i % 3 + 1) * 100, 300)} group block bg-white dark:bg-[#1e293b] rounded-2xl border border-[#e5e7eb] dark:border-[#334155] overflow-hidden card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2`}
              >
                {/* Color bar */}
                <div className="h-2" style={{ backgroundColor: post.coverColor }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#f9fafb] dark:bg-[#0f172a] border border-[#e5e7eb] dark:border-[#334155] text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#6b7280] dark:text-[#94a3b8]">{post.readTime}</span>
                    {post.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="font-heading font-bold text-[#1f2937] dark:text-[#f8fafc] mb-2 line-clamp-2 group-hover:text-[#0ea5a0] dark:group-hover:text-[#14b8a6] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#6b7280] dark:text-[#94a3b8] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-[#f9fafb] dark:bg-[#0f172a] text-xs text-[#6b7280] dark:text-[#94a3b8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb] dark:border-[#334155]">
                    <time
                      dateTime={post.date}
                      className="text-xs text-[#6b7280] dark:text-[#94a3b8]"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="text-xs font-semibold text-[#0ea5a0] dark:text-[#14b8a6] group-hover:underline">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#6b7280] dark:text-[#94a3b8]">
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
