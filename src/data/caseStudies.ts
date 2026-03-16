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
    slug: 'mastercard-payment-platform-modernization',
    title: 'Legacy Payment Platform Modernization',
    company: 'Mastercard',
    category: 'Fintech / Payments',
    duration: '12 months',
    year: '2023',
    tags: ['Fintech', 'API Modernization', 'PCI Compliance', 'Payment Ecosystems'],
    challenge:
      'A legacy payment platform was creating significant operational drag: production incidents were frequent, partner onboarding took months due to brittle custom integrations, and the platform lacked the auditability demanded by multi-region regulatory frameworks including PCI-DSS.',
    solution:
      'Led the product strategy and delivery for a full modernization effort — streamlining APIs to industry standards, introducing automated workflow layers, and building compliance audit trails directly into the platform architecture. Facilitated JAD sessions across engineering, compliance, and regional stakeholder teams to align on a phased delivery roadmap that reduced risk while accelerating timelines.',
    result:
      'The modernized platform significantly reduced operational burden and unlocked faster, more reliable partnerships. Production stability improved markedly, and the platform became a model for compliance-ready data product delivery across the organization.',
    metrics: [
      { label: 'Production Incidents', value: '-40%' },
      { label: 'Release Predictability', value: '+30%' },
      { label: 'Partner Onboarding', value: '-35% time' },
      { label: 'Operational Overhead', value: '-20%' },
    ],
    color: '#1a2b4a',
  },
  {
    id: '2',
    slug: 'mastercard-spark-data-pipeline-automation',
    title: 'SPARK-Driven Global Data Platform Strategy',
    company: 'Mastercard',
    category: 'Data Platform',
    duration: '18 months',
    year: '2022',
    tags: ['Data Platforms', 'Apache Spark', 'Automation', 'PCI/PII Compliance'],
    challenge:
      'Five global data platforms serving payment ecosystems across multiple regions were managed through manual, error-prone processes. Clarification cycles between engineering and business stakeholders were long, releases were unpredictable, and manual intervention in data pipelines created compliance risk in PCI/PII-regulated contexts.',
    solution:
      'Defined and executed a unified product roadmap across all 5 platforms aligned with enterprise risk and regulatory frameworks. Translated business priorities into technical specifications and automated SPARK-based data pipelines to eliminate manual intervention. Established a structured governance process for cross-regional prioritization, reducing ambiguity at every stage of delivery.',
    result:
      'Release timelines accelerated significantly through automation and improved backlog discipline. Operational overhead fell as manual pipeline steps were eliminated. Compliance confidence improved across all regulatory regions, enabling the platforms to support expanding payment volume without proportional cost increases.',
    metrics: [
      { label: 'Release Timeline', value: '-40% faster' },
      { label: 'Clarification Cycles', value: '-30%' },
      { label: 'Operational Overhead', value: '-20%' },
      { label: 'Platforms Owned', value: '5 global' },
    ],
    color: '#0ea5a0',
  },
  {
    id: '3',
    slug: 'ibm-banking-data-reconciliation',
    title: 'Banking Data Reconciliation Automation',
    company: 'IBM',
    category: 'Enterprise Data',
    duration: '8 months',
    year: '2021',
    tags: ['Banking', 'Data Automation', 'ETL', 'Data Quality'],
    challenge:
      'A critical banking client was running error-prone manual data reconciliation processes that consumed significant analyst time, produced inconsistent results, and created downstream data integrity issues that affected reporting and regulatory submissions.',
    solution:
      'Led end-to-end requirements discovery with banking stakeholders, translating pain points into a clearly scoped automation solution. Directed data profiling and quality assessments to establish the baseline, then governed the delivery of an automated reconciliation pipeline with full audit traceability and exception-handling built in. Also optimized batch processing scripts and implemented automated monitoring alerts to reduce job failures.',
    result:
      'Manual effort was dramatically reduced and data accuracy reached a level acceptable for regulatory reporting. The client could now run reconciliation processes that previously took days in hours, with built-in alerts catching exceptions before they reached downstream systems.',
    metrics: [
      { label: 'Manual Effort', value: '-40%' },
      { label: 'Data Accuracy', value: '99.5%' },
      { label: 'Job Failures', value: '-60%' },
      { label: 'Batch Processing', value: '+25% faster' },
    ],
    color: '#d4af37',
  },
  {
    id: '4',
    slug: 'vodafone-cent-platform-automation',
    title: 'CENT Platform Operational Excellence',
    company: 'Vodafone Idea',
    category: 'Telecom / Operations',
    duration: '2 years 10 months',
    year: '2019',
    tags: ['Production Support', 'Automation', 'Operational Efficiency', 'Telecom'],
    challenge:
      'The CENT (Customer Interaction Management Enterprise) platform required constant manual oversight. Reporting processes were labor-intensive and error-prone, incident volumes were high, and the nightly batch lifecycle between CENT and Salesforce was managed reactively rather than proactively.',
    solution:
      'Owned end-to-end production support and championed a series of cross-platform automation initiatives. Collaborated with IT teams to automate reporting workflows, implemented proactive monitoring with root-cause analysis processes, and upskilled the support team to operate more independently. Managed TWS Job Scheduler to bring discipline to the CENT–Salesforce batch lifecycle.',
    result:
      'System uptime reached 99.9% with zero order loss. Manual effort fell sharply as automation took over repetitive operational tasks. Incident volumes dropped as proactive monitoring replaced reactive firefighting, freeing the team to focus on higher-value platform improvements.',
    metrics: [
      { label: 'Manual Effort', value: '-50%' },
      { label: 'Reporting Accuracy', value: '99%' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Incident Volume', value: '-35%' },
    ],
    color: '#7c3aed',
  },
];
