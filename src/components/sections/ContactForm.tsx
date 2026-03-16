'use client';

import { useState, FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'success';

interface FormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

const inquiryTypes = [
  { value: 'consulting', label: 'Product Consulting' },
  { value: 'advisory', label: 'Advisory Role' },
  { value: 'fulltime', label: 'Full-Time Opportunity' },
  { value: 'speaking', label: 'Speaking Engagement' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    type: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const next: Partial<FormData> = {};
    if (!data.name.trim()) next.name = 'Name is required.';
    if (!data.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!data.type) next.type = 'Please select an inquiry type.';
    if (!data.message.trim()) {
      next.message = 'Message is required.';
    } else if (data.message.trim().length < 20) {
      next.message = 'Please write at least 20 characters.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');

    // Simulate network request — wire to Formspree, EmailJS, Resend, etc. in production
    await new Promise((r) => setTimeout(r, 1200));
    setFormState('success');
  };

  const field = (key: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-5">
          <svg
            className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-[#1f2937] dark:text-[#f8fafc] mb-3">
          Message received!
        </h3>
        <p className="text-[#6b7280] dark:text-[#94a3b8] max-w-sm">
          Thanks for reaching out, {data.name.split(' ')[0]}. I typically respond within 1–2 business days.
        </p>
        <button
          onClick={() => {
            setFormState('idle');
            setData({ name: '', email: '', type: '', message: '' });
          }}
          className="mt-8 text-sm font-semibold text-[#0ea5a0] dark:text-[#14b8a6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1f2937] dark:text-[#f8fafc] mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={(e) => field('name', e.target.value)}
            placeholder="Alex Johnson"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`form-input${errors.name ? ' error' : ''}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1f2937] dark:text-[#f8fafc] mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => field('email', e.target.value)}
            placeholder="you@company.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`form-input${errors.email ? ' error' : ''}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Inquiry type */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-[#1f2937] dark:text-[#f8fafc] mb-1.5">
          Inquiry Type <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="type"
          value={data.type}
          onChange={(e) => field('type', e.target.value)}
          aria-required="true"
          aria-describedby={errors.type ? 'type-error' : undefined}
          className={`form-input${errors.type ? ' error' : ''}`}
        >
          <option value="">Select an inquiry type…</option>
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.type && (
          <p id="type-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.type}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1f2937] dark:text-[#f8fafc] mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          value={data.message}
          onChange={(e) => field('message', e.target.value)}
          placeholder="Tell me about your project, timeline, and what you're hoping to accomplish…"
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`form-input resize-none${errors.message ? ' error' : ''}`}
        />
        <div className="flex items-center justify-between mt-1.5">
          {errors.message ? (
            <p id="message-error" role="alert" className="text-xs text-red-500">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-[#6b7280] dark:text-[#94a3b8]">{data.message.length} chars</span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a2b4a] dark:bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-[#243d6b] dark:hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5a0] focus-visible:ring-offset-2"
      >
        {formState === 'submitting' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-[#6b7280] dark:text-[#94a3b8] text-center">
        I respond to all serious inquiries within 1–2 business days.
      </p>
    </form>
  );
}
