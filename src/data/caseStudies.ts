export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  category: string;
  duration: string;
  year: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'ai-insights-engine',
    title: 'AI-Powered Insights Engine',
    company: 'CloudBridge Analytics',
    category: 'AI / Machine Learning',
    duration: '9 months',
    year: '2023',
    tags: ['AI', 'B2B SaaS', 'Data Analytics', 'Enterprise'],
    challenge:
      'Enterprise clients were drowning in data but lacked the time and expertise to extract actionable insights. Manual analysis was taking analysts 8-12 hours per report, leading to slow decision-making and high churn among analyst personas.',
    solution:
      'Designed and launched an ML-powered natural language query interface that allowed users to ask questions in plain English. Built an automated anomaly detection engine that proactively surfaced critical trends. Created a collaborative insights layer that enabled teams to annotate, share, and act on findings without leaving the platform.',
    result:
      'The insights engine became the fastest-adopted feature in company history. Time-to-insight dropped from 8 hours to under 15 minutes. The feature directly contributed to a record low churn quarter and became a top reason cited in sales win/loss analysis.',
    metrics: [
      { label: 'Time-to-Insight', value: '96% faster' },
      { label: 'User Engagement', value: '+45%' },
      { label: 'Churn Reduction', value: '-28%' },
      { label: 'ARR Impact', value: '+$8M' },
    ],
    color: '#1a2b4a',
  },
  {
    id: '2',
    slug: 'telehealth-expansion',
    title: 'Telehealth Platform Scale-Up',
    company: 'Nexus Health',
    category: 'Digital Health',
    duration: '14 months',
    year: '2021',
    tags: ['Healthcare', 'Growth', 'Mobile', 'Telehealth'],
    challenge:
      'The COVID-19 pandemic created an overnight surge in telehealth demand, but the existing platform could support only 5,000 concurrent sessions and had a dated mobile experience with a 2-star App Store rating. The business needed to scale 10x while dramatically improving patient satisfaction.',
    solution:
      'Led an emergency redesign and infrastructure overhaul simultaneously. Partnered with engineering to architect a microservices migration that unlocked horizontal scaling. Rebuilt the patient-facing mobile app with a focus on accessibility and reducing appointment booking to under 2 minutes. Launched provider scheduling automation to reduce administrative burden by 70%.',
    result:
      'Successfully scaled to 100K+ concurrent sessions during peak demand. The app redesign lifted App Store ratings from 2.1 to 4.6 stars. The platform handled a 10x traffic spike during Omicron peak without a single critical incident, earning recognition in healthcare tech press.',
    metrics: [
      { label: 'Concurrent Sessions', value: '20x capacity' },
      { label: 'App Store Rating', value: '2.1 → 4.6★' },
      { label: 'Booking Time', value: '-78%' },
      { label: 'New Revenue', value: '$15M' },
    ],
    color: '#0ea5a0',
  },
  {
    id: '3',
    slug: 'open-banking-api',
    title: 'Open Banking API Platform',
    company: 'FinPath Solutions',
    category: 'Fintech / API',
    duration: '11 months',
    year: '2019',
    tags: ['Fintech', 'API Platform', 'B2B', 'Developer Experience'],
    challenge:
      'FinPath\'s core product required deep integrations with 30+ banking partners, each with proprietary data formats and authentication schemes. The custom integration work was consuming 60% of engineering capacity and creating an 8-month wait time for new clients to go live.',
    solution:
      'Designed a standards-based open banking API platform using the Open Banking UK specification as a model. Created a self-service developer portal with sandbox environments, comprehensive documentation, and automated testing suites. Built a partner certification program that shifted integration work to third parties.',
    result:
      'Time-to-integration dropped from 8 months to 3 weeks. The developer portal attracted 200+ registered third-party developers in 6 months, creating a thriving ecosystem. Engineering capacity recaptured from integrations was redirected to core product features, accelerating the product roadmap by an estimated 18 months.',
    metrics: [
      { label: 'Integration Time', value: '8mo → 3wks' },
      { label: 'Partner Integrations', value: '30 → 80+' },
      { label: 'Eng. Capacity Saved', value: '60%' },
      { label: 'Fundraise', value: '$24M Series B' },
    ],
    color: '#d4af37',
  },
  {
    id: '4',
    slug: 'design-system-implementation',
    title: 'Enterprise Design System',
    company: 'Nexus Health',
    category: 'Platform / Design',
    duration: '6 months',
    year: '2020',
    tags: ['Design System', 'Developer Experience', 'Accessibility', 'Scale'],
    challenge:
      'A rapidly growing product team of 45 engineers and 12 designers had accumulated significant UI inconsistency across 8 product surfaces. Duplicate component code was causing an estimated 30% rework tax, and accessibility compliance issues were creating regulatory risk in healthcare contexts.',
    solution:
      'Championed and product-managed the creation of a comprehensive design system called "Pulse." Defined the governance model, component prioritization framework, and adoption incentive structure. Partnered with the design lead and engineering architect to build a 120-component library with WCAG 2.1 AA compliance built in from the start.',
    result:
      'Pulse was adopted by 100% of product teams within 4 months. Design-to-development handoff time dropped by 60%. The company passed its first HIPAA accessibility audit with zero critical findings. Pulse has since been cited in 3 engineering blog posts and contributed to the company\'s Series C pitch narrative around "world-class platform foundations."',
    metrics: [
      { label: 'Handoff Time', value: '-60%' },
      { label: 'Component Library', value: '120 components' },
      { label: 'Team Adoption', value: '100% in 4mo' },
      { label: 'Rework Reduction', value: '-30% tax' },
    ],
    color: '#7c3aed',
  },
];
