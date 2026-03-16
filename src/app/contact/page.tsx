import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Alex Chen — Senior Product Manager. Available for consulting, advisory roles, speaking engagements, and select full-time opportunities.',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'Email',
    value: 'alex@alexchen.pm',
    href: 'mailto:alex@alexchen.pm',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'Availability',
    value: 'Open to new projects',
    href: null,
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'What types of consulting do you offer?',
    a: 'I work with B2B SaaS, digital health, and fintech companies on product strategy, roadmap planning, team structure, and execution. Engagements range from one-time strategy sprints to ongoing monthly advisory retainers.',
  },
  {
    q: 'What does a typical consulting engagement look like?',
    a: 'Most engagements start with a 3-week discovery sprint (product audit, stakeholder interviews, data review) followed by a strategic roadmap and prioritization framework. From there, I can stay on as an embedded advisor or hand off to your team.',
  },
  {
    q: 'Are you available for speaking engagements?',
    a: 'Yes — I speak on product strategy, AI-driven product development, and scaling PM teams. I speak at conferences, company all-hands, and university programs. Reach out with your event details.',
  },
  {
    q: 'Do you offer PM mentorship?',
    a: 'I offer a limited number of mentorship slots for early and mid-career PMs. Sessions are 1-hour Zoom calls, bi-weekly. Select "Mentorship" in the inquiry type and tell me where you are in your PM career.',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Header */}
      <section className="relative py-20 md:py-28 bg-white dark:bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#0ea5a0]/8 to-transparent dark:from-[#14b8a6]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#d4af37]/8 to-transparent blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] text-xs font-semibold tracking-widest uppercase mb-6">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-5 leading-tight">
              Let's build something{' '}
              <span className="text-gradient">great together</span>
            </h1>
            <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg leading-relaxed">
              Whether you're looking for a product consulting partner, advisory support, or want to explore a
              full-time collaboration — I'd love to hear from you. Fill in the form or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-[#f9fafb] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-8 animate-on-scroll-left">
              {/* Contact info card */}
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#334155]">
                <h2 className="font-heading font-semibold text-lg text-[#1f2937] dark:text-[#f8fafc] mb-5">
                  Contact Details
                </h2>
                <ul className="space-y-4">
                  {contactInfo.map((info) => (
                    <li key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0ea5a0]/10 dark:bg-[#14b8a6]/10 text-[#0ea5a0] dark:text-[#14b8a6] flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-0.5">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-[#1f2937] dark:text-[#f8fafc] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] rounded"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[#1f2937] dark:text-[#f8fafc]">{info.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social links */}
                <div className="mt-6 pt-6 border-t border-[#e5e7eb] dark:border-[#334155]">
                  <p className="text-xs font-semibold text-[#6b7280] dark:text-[#94a3b8] uppercase tracking-wider mb-3">
                    Connect
                  </p>
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} profile`}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#f9fafb] dark:bg-[#0f172a] border border-[#e5e7eb] dark:border-[#334155] text-[#6b7280] dark:text-[#94a3b8] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] hover:border-[#0ea5a0] dark:hover:border-[#14b8a6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0]"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability card */}
              <div className="bg-gradient-to-br from-[#1a2b4a] to-[#0ea5a0] dark:from-[#1e293b] dark:to-[#0f172a] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <p className="font-semibold text-white text-sm">Currently Available</p>
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  I'm open to consulting engagements, advisory roles, and select full-time opportunities starting Q2 2024.
                </p>
                <ul className="space-y-2">
                  {['Product Consulting', 'Advisory Roles', 'Full-Time (select)'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-emerald-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-5 border border-[#e5e7eb] dark:border-[#334155] flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d4af37]/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#d4af37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1f2937] dark:text-[#f8fafc]">Quick Response</p>
                  <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">
                    Typically replies within 1–2 business days
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3 animate-on-scroll-right">
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-[#e5e7eb] dark:border-[#334155] shadow-sm">
                <h2 className="font-heading font-bold text-2xl text-[#1f2937] dark:text-[#f8fafc] mb-2">
                  Send a Message
                </h2>
                <p className="text-[#6b7280] dark:text-[#94a3b8] text-sm mb-8">
                  All fields marked with <span className="text-red-500">*</span> are required.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[#1f2937] dark:text-[#f8fafc] mb-8 text-center animate-on-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className={`animate-on-scroll delay-${(i + 1) * 100} group bg-[#f9fafb] dark:bg-[#1e293b] rounded-xl border border-[#e5e7eb] dark:border-[#334155]`}
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1f2937] dark:text-[#f8fafc] hover:text-[#0ea5a0] dark:hover:text-[#14b8a6] transition-colors duration-200 select-none list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0ea5a0]">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 ml-4 text-[#6b7280] dark:text-[#94a3b8] transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[#6b7280] dark:text-[#94a3b8] text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#f9fafb] dark:bg-[#1e293b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <p className="text-[#6b7280] dark:text-[#94a3b8] text-lg mb-6">
            Prefer to explore my work before reaching out?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/profile"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
            >
              View My Profile
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#e5e7eb] dark:border-[#334155] text-[#1f2937] dark:text-[#f8fafc] font-semibold rounded-xl hover:bg-white dark:hover:bg-[#0f172a] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
            >
              Read My Writing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
