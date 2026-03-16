export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const topics: Topic[] = [
  {
    id: 'data-platform-ownership',
    title: 'Data Platform Product Ownership',
    description:
      'Defining strategy and roadmaps for enterprise-scale data platforms. From pipeline architecture to compliance-ready delivery — turning data infrastructure into measurable business capability.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    color: '#1a2b4a',
  },
  {
    id: 'fintech-payments',
    title: 'Fintech & Payment Ecosystems',
    description:
      'Deep experience in global payment infrastructure, open banking APIs and fintech platforms. Navigating the intersection of product velocity, regulatory compliance and transaction reliability.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    color: '#0ea5a0',
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory Compliance (PCI / PII)',
    description:
      'Building compliant-by-design data products in PCI-DSS, PII and heavily regulated environments. Aligning product decisions with audit requirements without sacrificing delivery speed.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: '#d4af37',
  },
  {
    id: 'ai-automation',
    title: 'AI-Enabled Product Capabilities',
    description:
      'Integrating AI and automation into platform products — from SPARK-driven pipelines to AI-assisted workflows. Leveraging tools like Fireflies.ai, Jasper AI and Otter.ai to accelerate delivery and reduce manual overhead.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: '#7c3aed',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    description:
      'Modernizing aging platforms into scalable, cloud-ready architectures. Bridging the gap between legacy engineering constraints and modern product expectations without disrupting business continuity.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    color: '#059669',
  },
  {
    id: 'agile-delivery',
    title: 'Agile Delivery & Release Management',
    description:
      'Orchestrating sprint cycles, JAD sessions and cross-functional workshops that keep global teams aligned. Turning ambiguous enterprise backlogs into predictable, high-quality releases.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    color: '#0ea5a0',
  },
  {
    id: 'cross-functional-leadership',
    title: 'Cross-Functional Leadership',
    description:
      'Aligning engineering, compliance, data governance and regional stakeholders around a shared product direction. Building the bridges between technical execution and business strategy.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    color: '#dc2626',
  },
  {
    id: 'data-governance',
    title: 'Enterprise Data Governance',
    description:
      'Establishing robust data quality controls, stewardship practices and compliance standards across complex ecosystems. Making data trustworthy enough to drive real business decisions.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: '#1a2b4a',
  },
];
