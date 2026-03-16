export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  relationship: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bibhuti Chanda',
    role: 'Director, Data Engineering',
    company: 'Mastercard',
    avatar: 'BC',
    rating: 5,
    date: 'March 2026',
    relationship: 'Senior colleague at Mastercard',
    text: "I've had the pleasure of working with Ashwini on multiple occasions and can confidently say she is a standout Product Manager. Her ownership and follow-through are second to none—she ensures every detail is accounted for so the end product remains unimpacted by gaps. Ashwini excels at navigating complex hierarchies and collaborating across diverse groups to move projects forward. She brings a fresh perspective to every challenge and acts as a strong, reliable bridge between stakeholders and development teams. Ashwini remains focused on protecting the product's integrity and delivering high-quality results. She is a reliable, positive, and highly valued team member.",
  },
  {
    id: '2',
    name: 'Kumar Balajii Rajappa',
    role: 'Director',
    company: 'Mastercard',
    avatar: 'KR',
    rating: 5,
    date: 'February 2026',
    relationship: 'Direct manager at Mastercard',
    text: "I highly recommend Ashwini Borle as an exceptional System Analyst. She has a remarkable ability to quickly understand and interpret requirements, asking the right questions to understand underlying needs and potential gaps. One of her key strengths is connecting the dots across business objectives, technical constraints, and user expectations. She consistently translates high-level ideas into clear, structured requirements that development teams can execute with confidence. Ashwini collaborates seamlessly with both product and development teams, acting as a strong bridge between stakeholders. Her proactive communication, analytical thinking, and solution-oriented mindset significantly contribute to smoother delivery cycles and better product outcomes. Beyond technical skills, she brings a positive attitude and a strong sense of ownership, making her a reliable and valued team member in any cross-functional environment.",
  },
  {
    id: '3',
    name: 'Pratiksha Gupta',
    role: 'Senior Technical Product Manager',
    company: 'Mastercard',
    avatar: 'PG',
    rating: 5,
    date: 'June 2020',
    relationship: 'Peer at Mastercard',
    text: "Ashwini is dedicated to her work. She is clear about her process and is open for discussions. A kind hearted soul who can accept a challenge, work through it and shine bright.",
  },
  {
    id: '4',
    name: 'Meenal Lashkare',
    role: 'Technical Lead',
    company: 'Vodafone Idea',
    avatar: 'ML',
    rating: 5,
    date: 'June 2020',
    relationship: 'Teammate at Vodafone',
    text: "I know Ashwini as a hard working and very serious team player. She is a great team player, and certainly can get my full recommendation.",
  },
  {
    id: '5',
    name: 'Komal Bhansali',
    role: 'Application Analyst & DevOps',
    company: 'Vodafone Idea',
    avatar: 'KB',
    rating: 5,
    date: 'June 2020',
    relationship: 'Teammate at Vodafone',
    text: "Ashwini is wonderful to work with and has exceptional expertise as a technical person. She constantly demonstrated a solid work ethic at Vodafone plus a dedication to success. She is dedicated, self motivated and very capable. She is not only reliable but also an inspiring team player. As a team member Ashwini earns my highest recommendation.",
  },
  {
    id: '6',
    name: 'Vishwas Chopde',
    role: 'Senior Technical Lead',
    company: 'Vodafone Idea',
    avatar: 'VC',
    rating: 5,
    date: 'June 2020',
    relationship: 'Teammate at Vodafone',
    text: "I've worked alongside Ashwini for close to two years. In those two years, I've seen her not only excel at the core elements of her job but also learn other tasks that extend well beyond the scope of her role. Her willingness to learn and take on these new responsibilities is something to be desired in any professional. This rare mix of productivity and ambition sets a great example for the rest of the team, and explains why everyone loves working with her.",
  },
  {
    id: '7',
    name: 'Neha Kale',
    role: 'AVP',
    company: 'DWS',
    avatar: 'NK',
    rating: 5,
    date: 'June 2020',
    relationship: 'Teammate at Vodafone',
    text: "Sincere to work. Highly recommended.",
  },
];
