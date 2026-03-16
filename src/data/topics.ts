export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path data
  color: string;
}

export const topics: Topic[] = [
  {
    id: 'product-strategy',
    title: 'Product Strategy & Roadmapping',
    description:
      'Crafting long-term product visions aligned with business goals. From opportunity discovery to phased roadmaps that balance user needs and technical feasibility.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    color: '#1a2b4a',
  },
  {
    id: 'cross-functional',
    title: 'Cross-Functional Leadership',
    description:
      'Aligning engineering, design, marketing, and sales teams around a shared product vision. Building collaborative cultures that ship faster and smarter.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    color: '#0ea5a0',
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Decision Making',
    description:
      'Leveraging analytics, A/B testing, and user data to validate hypotheses and prioritize features. Turning raw data into clear, actionable product insights.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: '#d4af37',
  },
  {
    id: 'gtm-strategy',
    title: 'Go-to-Market Strategy',
    description:
      'Defining positioning, pricing, and launch plans that maximize market penetration. Coordinating product launches that create lasting competitive advantage.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: '#7c3aed',
  },
  {
    id: 'metrics-analytics',
    title: 'Product Metrics & Analytics',
    description:
      'Defining the right KPIs and OKRs to measure product success. Building dashboards and instrumentation strategies that keep teams aligned on what matters.',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    color: '#059669',
  },
  {
    id: 'user-research',
    title: 'User Research & Insights',
    description:
      'Conducting qualitative and quantitative research to understand user pain points. Synthesizing insights into personas, journey maps, and validated problem statements.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    color: '#dc2626',
  },
  {
    id: 'agile-scrum',
    title: 'Agile & Scrum Methodologies',
    description:
      'Running efficient sprints, standups, retros, and planning sessions. Adapting agile frameworks to team culture for maximum velocity without sacrificing quality.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    color: '#0ea5a0',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description:
      'Guiding organizations through technology-led change initiatives. From legacy modernization to AI integration, leading teams through complex transformational journeys.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: '#1a2b4a',
  },
];
