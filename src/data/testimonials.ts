export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'VP of Engineering',
    company: 'TechScale Inc.',
    avatar: 'SM',
    rating: 5,
    text: "Alex transformed how our engineering and product teams collaborate. Within 6 months of implementing her product frameworks, we reduced our time-to-market by 40% and saw a 3x improvement in feature adoption rates. She has an exceptional ability to translate technical constraints into business opportunities.",
  },
  {
    id: '2',
    name: 'David Park',
    role: 'CEO & Co-Founder',
    company: 'Nexus Health',
    avatar: 'DP',
    rating: 5,
    text: "Working with Alex during our Series B growth phase was a game-changer. Her data-driven approach to prioritization helped us focus on the right features at the right time. We grew our user base from 50K to 500K users in just 18 months, and I credit a significant portion of that success to her product leadership.",
  },
  {
    id: '3',
    name: 'Jennifer Torres',
    role: 'Chief Product Officer',
    company: 'FinPath Solutions',
    avatar: 'JT',
    rating: 5,
    text: "Alex's expertise in go-to-market strategy was invaluable when we launched our B2B product line. She built a comprehensive launch framework that our entire organization could rally around. The result was our most successful product launch to date, achieving $8M ARR in the first year — three months ahead of schedule.",
  },
  {
    id: '4',
    name: 'Marcus Thompson',
    role: 'Head of Product',
    company: 'CloudBridge Analytics',
    avatar: 'MT',
    rating: 5,
    text: "I've worked with many product managers throughout my career, but Alex stands in a class of her own. Her ability to run effective user research, synthesize insights quickly, and turn them into actionable product decisions is remarkable. She doesn't just talk about being user-centric — she embeds it into the team's DNA.",
  },
];
