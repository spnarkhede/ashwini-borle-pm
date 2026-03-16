export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  icon: string; // initials or short name for display
}

export const skills: Skill[] = [
  { id: '1', name: 'Product Strategy', level: 95, category: 'Core PM' },
  { id: '2', name: 'Roadmap Planning', level: 93, category: 'Core PM' },
  { id: '3', name: 'User Research', level: 90, category: 'Core PM' },
  { id: '4', name: 'Data Analysis & SQL', level: 85, category: 'Analytics' },
  { id: '5', name: 'A/B Testing & Experimentation', level: 88, category: 'Analytics' },
  { id: '6', name: 'OKRs & Metrics', level: 92, category: 'Analytics' },
  { id: '7', name: 'Agile / Scrum', level: 95, category: 'Process' },
  { id: '8', name: 'Stakeholder Management', level: 90, category: 'Leadership' },
  { id: '9', name: 'Go-to-Market Strategy', level: 87, category: 'Strategy' },
  { id: '10', name: 'Competitive Analysis', level: 88, category: 'Strategy' },
  { id: '11', name: 'Wireframing & Prototyping', level: 80, category: 'Design' },
  { id: '12', name: 'Cross-functional Leadership', level: 93, category: 'Leadership' },
  { id: '13', name: 'Product Marketing', level: 82, category: 'Strategy' },
  { id: '14', name: 'Technical Architecture', level: 75, category: 'Technical' },
  { id: '15', name: 'API & Integration Design', level: 78, category: 'Technical' },
];

export const tools: Tool[] = [
  { id: '1', name: 'Jira', category: 'Project Mgmt', icon: 'Ji' },
  { id: '2', name: 'Figma', category: 'Design', icon: 'Fi' },
  { id: '3', name: 'Notion', category: 'Docs & Wiki', icon: 'No' },
  { id: '4', name: 'Mixpanel', category: 'Analytics', icon: 'Mx' },
  { id: '5', name: 'Amplitude', category: 'Analytics', icon: 'Am' },
  { id: '6', name: 'Tableau', category: 'Data Viz', icon: 'Tb' },
  { id: '7', name: 'Confluence', category: 'Docs & Wiki', icon: 'Co' },
  { id: '8', name: 'Miro', category: 'Whiteboarding', icon: 'Mi' },
  { id: '9', name: 'Linear', category: 'Project Mgmt', icon: 'Li' },
  { id: '10', name: 'Looker', category: 'Analytics', icon: 'Lo' },
  { id: '11', name: 'Productboard', category: 'Product Mgmt', icon: 'Pb' },
  { id: '12', name: 'Pendo', category: 'User Analytics', icon: 'Pe' },
  { id: '13', name: 'Slack', category: 'Communication', icon: 'Sl' },
  { id: '14', name: 'Google Analytics', category: 'Web Analytics', icon: 'GA' },
  { id: '15', name: 'Intercom', category: 'Customer Success', icon: 'In' },
];
