export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'work' | 'education' | 'achievement';
}

export const timelineItems: TimelineItem[] = [
  {
    id: '1',
    year: '2022 – Present',
    title: 'Senior Product Manager',
    company: 'CloudBridge Analytics',
    location: 'San Francisco, CA',
    description:
      'Leading product strategy for the enterprise analytics platform serving 500+ B2B clients. Responsible for a suite of products generating $32M ARR, managing a cross-functional team of 18 engineers, 4 designers, and 3 data scientists.',
    highlights: [
      'Launched AI-powered insights engine, driving 45% increase in user engagement',
      'Reduced customer churn by 28% through a data-driven retention program',
      'Grew NPS from 32 to 67 through systematic UX improvements',
    ],
    type: 'work',
  },
  {
    id: '2',
    year: '2019 – 2022',
    title: 'Product Manager II',
    company: 'Nexus Health',
    location: 'New York, NY',
    description:
      'Owned the patient engagement and telehealth product lines during a period of hypergrowth. Scaled the product team from 3 to 12 PMs while managing relationships with healthcare system partners.',
    highlights: [
      'Led digital health expansion from 50K to 500K active users',
      'Launched telehealth feature set that drove $15M in new revenue',
      'Pioneered the company\'s first design system, cutting design-to-dev handoff time by 60%',
    ],
    type: 'work',
  },
  {
    id: '3',
    year: '2017 – 2019',
    title: 'Associate Product Manager',
    company: 'FinPath Solutions',
    location: 'Chicago, IL',
    description:
      'Joined as one of the first APMs at a Series A fintech startup. Built foundational product processes from scratch and owned the core banking integration and onboarding flows.',
    highlights: [
      'Reduced onboarding drop-off by 52% through extensive A/B testing',
      'Launched open banking API platform that enabled 30+ third-party integrations',
      'Helped company achieve Series B fundraise of $24M',
    ],
    type: 'work',
  },
  {
    id: '4',
    year: '2016 – 2017',
    title: 'Product & Strategy Analyst',
    company: 'McKinsey & Company',
    location: 'Boston, MA',
    description:
      'Focused on digital transformation engagements for Fortune 500 clients in retail and financial services. Developed product assessments, competitive landscapes, and digital strategy roadmaps.',
    highlights: [
      'Delivered 6 major transformation projects across 4 industries',
      'Co-authored internal framework for product maturity assessments',
      'Mentored 3 junior analysts on product thinking and structured problem-solving',
    ],
    type: 'work',
  },
  {
    id: '5',
    year: '2012 – 2016',
    title: 'B.S. Computer Science + MBA (Dual Degree)',
    company: 'Cornell University',
    location: 'Ithaca, NY',
    description:
      'Dual-degree program combining computer science fundamentals with business strategy. Graduated magna cum laude. President of the Product Management Club. Research assistant in the Human-Computer Interaction lab.',
    highlights: [
      'Dean\'s List all 4 years; GPA 3.87/4.0',
      'Founded the university\'s first Product Management Club (120+ members)',
      'Won the Johnson School Business Plan Competition',
    ],
    type: 'education',
  },
];

export const certifications = [
  {
    id: '1',
    name: 'Certified Product Manager (CPM)',
    issuer: 'Product Management Institute',
    year: '2019',
    badge: 'CPM',
  },
  {
    id: '2',
    name: 'Professional Scrum Product Owner I',
    issuer: 'Scrum.org',
    year: '2018',
    badge: 'PSPO',
  },
  {
    id: '3',
    name: 'Google Analytics Certified',
    issuer: 'Google',
    year: '2021',
    badge: 'GA',
  },
  {
    id: '4',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022',
    badge: 'AWS',
  },
];
