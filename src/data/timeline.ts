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
    title: 'Senior Technical Product Manager',
    company: 'Mastercard',
    location: 'Pune, Maharashtra, India',
    description:
      'Owning product strategy and delivery for 5 global data platforms powering payment ecosystems across multiple regulatory regions. Role sits at the intersection of engineering, data architecture, compliance and product strategy — ensuring teams build the right capabilities while staying aligned with regulatory, operational and customer needs.',
    highlights: [
      'Owned roadmap for 5 global data platforms ensuring PCI/PII compliance, reducing clarification cycles by 30% and operational overhead by 20%',
      'Reduced production incidents by 40% and accelerated partner onboarding by 35% by modernizing a legacy payment platform with streamlined APIs',
      'Boosted feature adoption by 45% and increased transaction volume by 18% within two quarters, driving multi-million-rupee revenue growth',
      'Automated SPARK-based data pipelines eliminating manual intervention and accelerating release velocity by 40%',
    ],
    type: 'work',
  },
  {
    id: '2',
    year: '2020 – 2022',
    title: 'Associate Consultant – Product Manager',
    company: 'IBM',
    location: 'Pune, Maharashtra, India',
    description:
      'Led product and data initiatives for critical banking and automotive clients. Drove end-to-end requirements discovery, data quality governance, legacy-to-cloud migrations and Agile delivery frameworks across enterprise data engineering solutions.',
    highlights: [
      'Reduced job failures by 60% and improved batch processing time by 25% by optimizing scripts and automating monitoring alerts for a banking client',
      'Achieved 40% reduction in manual effort and improved data accuracy to 99.5% by automating data reconciliation processes',
      'Drove service revenue growth for General Motors CDAO by delivering BI analytics that improved project delivery efficiency by 25%',
    ],
    type: 'work',
  },
  {
    id: '3',
    year: '2019 – 2020',
    title: 'Senior Software Engineer',
    company: 'Tech Mahindra',
    location: 'Pune, Maharashtra, India',
    description:
      'Enhanced application performance and data integrity through refactoring, ETL/DWH testing and data pipeline validation. Contributed to migration projects from Netezza to Hadoop using Apache NiFi.',
    highlights: [
      'Enhanced application performance by 35% and reduced defects by 45% by refactoring code and optimizing processes',
      'Cut release cycles from 4 weeks to 2 weeks, significantly elevating client satisfaction',
      'Validated Apache NiFi data pipelines during Netezza-to-Hadoop migration using SQL-based verification techniques',
    ],
    type: 'work',
  },
  {
    id: '4',
    year: '2017 – 2019',
    title: 'Assistant Manager – Production Support',
    company: 'Vodafone Idea Limited',
    location: 'Pune, Maharashtra, India',
    description:
      'Owned end-to-end production support for the CENT (Customer Interaction Management Enterprise) platform. Led automation initiatives and maintained 99.9% system uptime across critical batch lifecycle workflows.',
    highlights: [
      'Reduced manual effort by 50% and improved reporting accuracy to 99% through process automation and team upskilling',
      'Maintained 99.9% system uptime with zero order loss managing TWS Job Scheduler and CENT–Salesforce batch workflows',
      'Reduced incident volumes by 35% through proactive monitoring, root-cause analysis and business process optimization',
      'Cross-platform automation initiatives reduced operational workload by 60%, saving 15+ hours per week',
    ],
    type: 'work',
  },
  {
    id: '5',
    year: '2014 – 2017',
    title: 'Senior Software Engineer',
    company: 'Infosys Public Services',
    location: 'Pune, Maharashtra, India',
    description:
      'Configured enterprise IPVPN and EVPL network solutions on Juniper, Cisco and Alcatel infrastructure. Managed L3 routing operations and led a 10-member team while proactively monitoring applications and resolving incidents within SLA.',
    highlights: [
      'Reduced average resolution time by 30% and decreased escalation rate by 40% by standardizing troubleshooting processes',
      'Improved customer satisfaction scores by 20% over six months by automating health checks',
      'Administered IP configurations in UNIX environments while supporting and coordinating a 10-member team',
    ],
    type: 'work',
  },
  {
    id: '6',
    year: '2008 – 2012',
    title: 'BE – Electrical, Electronics & Communications Engineering',
    company: 'Rashtrasant Tukadoji Maharaj Nagpur University',
    location: 'Nagpur, Maharashtra, India',
    description:
      'Bachelor of Engineering with a strong foundation in electronics, communication systems and engineering fundamentals — the technical bedrock that informs a product approach grounded in deep engineering understanding.',
    highlights: [
      'Graduated with a Bachelor of Engineering in Electrical, Electronics and Communications Engineering',
      'Built foundational knowledge in systems engineering, communication networks and electronics',
    ],
    type: 'education',
  },
];

export const certifications = [
  {
    id: '1',
    name: 'ITIL Foundation Level',
    issuer: 'AXELOS',
    year: '2020',
    badge: 'ITIL',
  },
  {
    id: '2',
    name: 'Product Management First Steps',
    issuer: 'LinkedIn Learning',
    year: '2021',
    badge: 'PM',
  },
  {
    id: '3',
    name: 'Microsoft Azure Data Engineer',
    issuer: 'Microsoft',
    year: '2022',
    badge: 'AZ',
  },
  {
    id: '4',
    name: 'Containers & Kubernetes Essentials',
    issuer: 'IBM',
    year: '2022',
    badge: 'K8s',
  },
  {
    id: '5',
    name: 'Technical Product Management',
    issuer: 'Product School',
    year: '2023',
    badge: 'TPM',
  },
];
