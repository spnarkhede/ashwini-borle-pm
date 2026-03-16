export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Strategy' | 'Execution' | 'Leadership' | 'Trends';
  tags: string[];
  date: string;
  readTime: string;
  featured: boolean;
  coverColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'product-strategy-north-star-metric',
    title: 'Why Your North Star Metric Is Probably Wrong (And How to Fix It)',
    excerpt:
      'Most teams pick a North Star that optimizes for short-term growth while masking the slow erosion of the customer relationships that drive long-term success. Here\'s a framework for getting it right.',
    content: `
## The Trap of Vanity Metrics

When Slack first defined their North Star Metric, they didn't choose DAU or messages sent — they chose "messages sent within a team where at least 3 members are active." That distinction is everything.

Most product teams make one of three mistakes with their North Star:

1. **They optimize for acquisition over retention.** New signups feel exciting, but if your activation and retention are broken, you're pouring water into a leaky bucket.
2. **They choose a metric that's easy to move, not meaningful.** Page views, downloads, and raw signups are all gameable. A good North Star should be difficult to game because it's closely tied to genuine value delivery.
3. **They don't differentiate by segment.** A B2B SaaS North Star is fundamentally different from a consumer app's North Star, yet teams often copy-paste frameworks without considering their unique value proposition.

## A Framework for Defining Your True North Star

The best North Star metrics have three properties:

### 1. It reflects value delivered to the customer

Ask yourself: "If this metric goes up, are customers genuinely getting more value?" For Spotify, it's "time spent listening." For Airbnb, it's "nights booked." For a B2B analytics platform, it might be "weekly active analysts who generate at least one shared insight."

### 2. It leads revenue, not lags it

Revenue is a lagging indicator. Your North Star should predict revenue by 1-3 quarters. If you can't draw a clear causal line from your North Star movement to eventual revenue impact, you haven't found the right metric yet.

### 3. It creates alignment across functions

A great North Star is a forcing function for cross-functional alignment. Marketing, engineering, customer success, and sales should all be able to map their work to movements in this single metric.

## The Diagnostic Test

Here's how to test if you have the right North Star:

1. **The fake improvement test**: Could you move this metric without actually making the product better? If yes, it's not your North Star.
2. **The executive test**: If your North Star is trending down, would your CEO be alarmed? If they'd shrug, it's not important enough.
3. **The team alignment test**: Ask 10 people across functions to define the metric. If you get 10 different answers, it's not specific enough.

## What To Do When Your Current North Star Is Wrong

Changing a North Star mid-flight is painful but sometimes necessary. The key is to:

1. Establish a parallel tracking period of at least one quarter where you track both the old and new metric
2. Build explicit mapping between the two metrics so stakeholders can see the relationship
3. Communicate the "why" extensively before making the switch official
4. Update all dashboards, OKRs, and team scorecards simultaneously

The teams that win long-term are the ones willing to have the hard conversation about whether their current compass is pointing them toward genuine customer value — or just toward metrics that look good in a board deck.
    `,
    category: 'Strategy',
    tags: ['Metrics', 'OKRs', 'Product Strategy', 'North Star'],
    date: '2024-03-12',
    readTime: '8 min read',
    featured: true,
    coverColor: '#1a2b4a',
  },
  {
    id: '2',
    slug: 'user-research-without-big-budget',
    title: 'High-Quality User Research on a Startup Budget',
    excerpt:
      'You don\'t need a $50K research budget to get meaningful user insights. These scrappy research techniques have informed product decisions at companies from seed stage to Series C.',
    content: `
## The Research Illusion

There's a dangerous myth in startup product culture: "We'll do proper user research once we have more resources." The irony is that startups — companies where every product decision is existential — are the teams that most need to validate assumptions cheaply and quickly.

Here are five high-signal research methods that cost more in creativity than dollars.

## 1. The Five-Customer Rule

Before building any significant feature, interview five customers who already experience the pain point you're addressing. Five is the magic number — research by Jakob Nielsen shows that five users will surface approximately 85% of usability issues in a prototype.

How to find them: Email your most engaged free-tier users, post in Slack communities where your ICP hangs out, or use LinkedIn to find people with the job title you're targeting. Offer a $25 Amazon gift card. You'll get 5 sessions scheduled within 48 hours.

## 2. Intercept Testing with Maze or UserTesting Micro

Platforms like Maze let you run unmoderated prototype tests for as little as $75/month. Send a Figma prototype to 20 users and watch where they click, where they hesitate, and where they give up. The insights from watching 20 people fail to complete an onboarding flow is worth more than a 200-slide research deck.

## 3. Support Ticket Mining

Your support tickets are a goldmine. Every support ticket is a user screaming a problem at you in their own words. I build a simple spreadsheet to categorize tickets by feature area and pain type, then run frequency analysis. This consistently reveals the top 3 problems your users experience that your team has normalized and stopped seeing.

## 4. Churn Exit Surveys

Automatically trigger a 3-question survey when a user cancels or goes inactive. Questions: (1) What was the primary reason you're leaving? (2) What would have made you stay? (3) What did you end up using instead? The answers to these three questions have shaped more of my roadmap decisions than any formal research study.

## 5. Shadow Your Sales Team

Sit in on 5 sales calls per month. Not to help close — just to listen. The questions prospects ask, the objections they raise, and the competitor comparisons they make are the most honest window into your market positioning gaps. I've discovered entire product gaps by hearing the same objection raised in three consecutive calls that sales was just working around rather than surfacing to product.

## Building a Research Practice with $0

The most important thing isn't budget — it's cadence. Even talking to two customers per week creates a compounding knowledge advantage over teams that only do research when they "have time." Put recurring 30-minute customer calls on your calendar and treat them as inviolable as your standup.

Research isn't a phase in the product development process. It's the ongoing practice of staying honest about what your users actually need.
    `,
    category: 'Execution',
    tags: ['User Research', 'Startups', 'Product Discovery', 'UX'],
    date: '2024-02-28',
    readTime: '7 min read',
    featured: false,
    coverColor: '#0ea5a0',
  },
  {
    id: '3',
    slug: 'managing-up-as-pm',
    title: 'The Art of Managing Up: How PMs Build Executive Influence',
    excerpt:
      'The PMs who advance fastest aren\'t just great at building products — they\'re exceptional at building trust with executives. Here\'s the playbook that took me from APM to Senior PM in four years.',
    content: `
## Why Managing Up Is a Core PM Competency

Product management is fundamentally a position of influence without authority. You rarely have direct reports, but you're responsible for outcomes that require the coordinated action of dozens of people. The most powerful lever available to PMs isn't their roadmap — it's their ability to build trust and alignment with the executives who control resources, priorities, and organizational will.

Managing up isn't politics. It's a craft. Here's how to do it well.

## Principle 1: Make Your Executives Look Smart

Executives are humans under enormous pressure to demonstrate good judgment to boards, investors, and their own managers. Your job as a PM is to give them the information and framing they need to make decisions confidently and look smart doing it.

This means: no surprises, ever. If a metric is trending the wrong direction, your executive should hear about it from you — with context and a plan — before they see it in a report.

## Principle 2: Speak in Outcomes, Not Activities

Junior PMs talk about what they're working on. Senior PMs talk about what will change as a result of their work. There's a world of difference between:

- "We're finishing the redesign of the onboarding flow this sprint."
- "We're on track to recover the 23% of users we're currently losing in onboarding by end of Q2, which translates to approximately $1.2M in ARR."

The second version answers the question every executive is actually asking: "Why does this matter to the business?"

## Principle 3: Bring the Recommendation, Not Just the Data

Executives don't want reports — they want recommendations. When you bring a problem or decision to leadership, always come with a point of view. "Here are three options, and I recommend Option B because X, Y, Z" is infinitely more useful than "here's the data, what should we do?"

This is also how you build a reputation as a decision-maker rather than an analyst.

## Principle 4: Build Relationships Before You Need Them

The worst time to build a relationship with a skeptical executive is when you need their buy-in on a contested roadmap decision. Invest in informal touchpoints proactively — a brief monthly check-in, a Slack message sharing an insight that's relevant to their world, or sharing credit loudly when their team's work helped you succeed.

## Principle 5: Create Predictable Rhythms

Executives trust PMs who operate predictably. Establish a consistent cadence of communication: a weekly async update (2-3 bullet points max), a monthly business review that never cancels, and a quarterly roadmap alignment that gives leadership meaningful input before decisions are locked.

Predictability isn't bureaucracy — it's the foundation of executive trust.
    `,
    category: 'Leadership',
    tags: ['Leadership', 'Communication', 'Career Growth', 'Stakeholder Management'],
    date: '2024-02-10',
    readTime: '9 min read',
    featured: true,
    coverColor: '#7c3aed',
  },
  {
    id: '4',
    slug: 'ai-product-management-2024',
    title: 'AI Is Reshaping Product Management — Here\'s What to Expect',
    excerpt:
      'From AI copilots in product tools to entirely new product categories, artificial intelligence is changing what product managers do and how they do it. A look at the trends shaping the next three years.',
    content: `
## The Transformation Is Already Happening

In the past 18 months, I've watched AI go from a "future of work" talking point to a daily reality for product teams. Here's what I'm seeing on the ground.

## Trend 1: AI-Augmented Product Discovery

Tools like Notion AI, Productboard's AI features, and emerging players like Dovetail are beginning to automate parts of research synthesis. What used to take a PM 2-3 days to synthesize from 20 user interviews can now be summarized and thematically clustered in under an hour.

The opportunity: PMs who learn to use AI-assisted synthesis will be able to run discovery at 5x the velocity of teams still doing it manually. The risk: AI summaries can flatten nuance. The best PMs will use AI as a first pass and then do their own sense-making on the key themes.

## Trend 2: AI as a Metrics Analyst

Natural language querying of product analytics (think: "Why did week-3 retention drop 12% last month?") is moving from demo to reality. Several platforms are shipping auto-insights features that proactively surface anomalies without requiring an analyst to dig.

This won't eliminate data analysts — it will elevate what PMs can do independently and make data skills less of a PM hiring requirement. What will matter more: the ability to ask the right questions.

## Trend 3: New Product Categories Require New PM Skills

The explosion of AI-native products requires PMs to understand probabilistic outputs, hallucination rates, and user trust patterns. Users interact with AI features differently than deterministic software. They're more exploratory, more forgiving of imperfection, but far less tolerant of unexpected or harmful outputs.

PMs on AI products need to add "responsible AI" literacy to their skill set — understanding bias in training data, building appropriate guardrails, and designing for appropriate user expectations around model accuracy.

## What Will Not Change

Despite all the change, the core of product management remains: understand what your users need, ruthlessly prioritize, align your team, and ship things that create genuine value. AI will make many parts of that faster and cheaper. It will not make judgment obsolete.

The best PM in 2027 will still be the one who can walk into a room, listen carefully, ask great questions, and synthesize a clear path forward that everyone believes in. That's a human skill, and it's not going away.
    `,
    category: 'Trends',
    tags: ['AI', 'Future of Product', 'Technology Trends', 'Innovation'],
    date: '2024-01-22',
    readTime: '10 min read',
    featured: false,
    coverColor: '#d4af37',
  },
  {
    id: '5',
    slug: 'prioritization-frameworks-compared',
    title: 'RICE vs. ICE vs. MoSCoW: Choosing the Right Prioritization Framework',
    excerpt:
      'After using every major prioritization framework across 8 years and 40+ products, here\'s my honest assessment of when each one works, when it doesn\'t, and how I combine them.',
    content: `## The Framework Trap

Every PM eventually collects prioritization frameworks like trading cards. RICE. ICE. MoSCoW. Kano. Value vs. Effort. The problem is that most teams pick one, apply it religiously, and then wonder why it stops feeling useful.

The reality is that different frameworks optimize for different things. The skill isn't in mastering one — it's in knowing which to reach for in a given situation.

## RICE: Best for Data-Rich Environments

RICE (Reach × Impact × Confidence ÷ Effort) shines when you have enough data to estimate its inputs with reasonable confidence. If you're a growth-stage company with solid analytics, RICE is powerful because it quantifies assumptions explicitly and creates a shared language for trade-off conversations.

Its weakness: in early-stage products or novel features, the inputs are pure guesswork. When your "confidence" score is 20% on everything, RICE produces a false sense of rigor.

## ICE: Best for Speed and Early Stage

ICE (Impact × Confidence × Ease) is RICE's scrappier cousin. It deliberately drops Reach, making it faster to score and better suited for teams that need to make rapid decisions without extensive data.

Use ICE when you're in discovery mode and need to rank 30 ideas quickly. Don't use it when you're making $1M+ investment decisions.

## MoSCoW: Best for Stakeholder Alignment

Must Have / Should Have / Could Have / Won't Have doesn't help you rank within a category, but it's invaluable for negotiation and scope management. When a stakeholder insists their feature is critical, asking them to place it in a MoSCoW bucket forces the conversation about trade-offs in terms everyone understands.

## My Actual Approach

In practice, I use a two-step process: ICE to quickly filter a large backlog down to a shortlist, then RICE on the shortlist when I have enough data to justify the scoring time. MoSCoW enters the picture during sprint/release planning when I'm negotiating scope with engineering and stakeholders.

The meta-principle: use the lightest-weight tool that's appropriate for the stakes of the decision. Not every backlog item warrants a RICE score. Not every roadmap conversation warrants a MoSCoW exercise. Judgment about when to apply rigor is itself a form of prioritization.`,
    category: 'Execution',
    tags: ['Prioritization', 'RICE', 'Frameworks', 'Product Execution'],
    date: '2024-01-08',
    readTime: '8 min read',
    featured: false,
    coverColor: '#059669',
  },
  {
    id: '6',
    slug: 'building-pm-team-from-scratch',
    title: 'How I Built a PM Team from 3 to 12 People Without Losing Culture',
    excerpt:
      'Scaling a product organization is one of the hardest things in product leadership. Here are the systems, rituals, and hiring principles that helped us 4x the PM team while actually improving our output quality.',
    content: `## The Scaling Problem

When I joined Nexus Health, the product org was three PMs and a VP. By the time I left three years later, we had twelve PMs across four product areas. That's a 4x growth in headcount — and if you've seen companies scale product teams poorly, you know that 4x more PMs does not automatically mean 4x more output. Often it means more meetings, more conflict, and slower decisions.

Here's what we did differently.

## Hire for the Mindset, Train the Craft

When we scaled from 3 to 12, the biggest risk was hiring "product order-takers" — people who were good at managing requirements but weak at product thinking. We designed our interview process around one question: "Does this person understand why they're building what they're building?"

Our best hire signal: candidates who, when describing past work, naturally connected features to business outcomes without being prompted. Our worst hire signal: candidates who described their job primarily in terms of writing PRDs and managing backlogs.

## Build Shared Language Before Scale

At 3 PMs, you don't need formal processes — you just talk to each other. At 12, you need shared frameworks and vocabulary. We built a "PM Playbook" that defined how we ran discovery, wrote PRDs, measured success, and escalated decisions. The playbook wasn't bureaucracy — it was a way to make the implicit explicit so new PMs could ramp fast.

## Create Deliberate Cross-PM Touchpoints

As the team grew, the risk of siloed PM fiefdoms increased. We countered this with two rituals: a weekly 45-minute cross-PM sync (just PMs, no executives) to share learnings and unblock each other, and a monthly "Product Review" where each PM presented one thing they'd learned from users that month.

These forums created a learning culture and caught many problems early — a PM struggling with a stakeholder, a feature that was solving the wrong problem, a data instrumentation gap — before they became crises.

## The Lesson on Culture

Culture is not ping-pong tables and free lunch. In a product org, culture is the shared set of beliefs about what good product work looks like. You preserve it through every hiring decision, every piece of feedback you give, and every decision you make that trades short-term output for long-term team quality.

Scaling without losing culture is possible. But it requires treating it like a product: defining what "good" looks like, measuring for it, and iterating relentlessly.`,
    category: 'Leadership',
    tags: ['Team Building', 'Hiring', 'Product Leadership', 'Scaling'],
    date: '2023-12-15',
    readTime: '11 min read',
    featured: false,
    coverColor: '#dc2626',
  },
  {
    id: '7',
    slug: 'writing-product-spec-that-engineers-love',
    title: 'Writing Product Specs That Engineers Actually Love Reading',
    excerpt:
      'The PRD is not dead. It just needs to evolve. Here\'s how to write product specifications that accelerate development instead of creating rework.',
    content: `## Why Most PRDs Fail

The standard 15-page PRD document has three fatal flaws: it tries to answer questions before they're asked, it captures decisions rather than reasoning, and it's written for the PM's comfort rather than the engineer's needs.

I've reviewed hundreds of PRDs and written dozens. The ones that work have almost nothing in common with the templates most PM books recommend.

## The Lean Spec Structure

A good spec is as short as possible and as long as necessary. Here's the structure I've landed on after years of iteration:

**1. Problem Statement (1 paragraph)**: What user problem are we solving? What's the evidence it's real and worth solving?

**2. Success Criteria (3-5 bullet points)**: How will we know this worked? Specific, measurable outcomes, not activities.

**3. User Stories (scoped list)**: Written from the user's perspective. Each story should be independently valuable and testable.

**4. Key Decisions (with rationale)**: What choices were made and why? What alternatives were considered and rejected?

**5. Out of Scope (explicit list)**: Often the most valuable section. Explicitly document what you're not building and why.

**6. Open Questions**: What don't you know yet? Who owns resolving each question?

## The Most Important Section Most PMs Skip

Open questions. Most PMs write specs as if all decisions have been made. The reality is that a good spec surfaces the key unknowns and assigns ownership for resolving them before development starts.

An open question documented in a spec is infinitely less expensive than the same question discovered mid-sprint.

## Working With Engineers, Not At Them

The single biggest improvement to my spec quality came from adding one ritual: I share the spec with one senior engineer for a 30-minute "spec review" before it goes to the full team. Their job is to identify: anything ambiguous, anything technically infeasible as specified, and any edge cases I missed.

This ritual catches 80% of the costly misunderstandings before they become costly.`,
    category: 'Execution',
    tags: ['PRD', 'Product Specs', 'Engineering Collaboration', 'Documentation'],
    date: '2023-11-20',
    readTime: '7 min read',
    featured: false,
    coverColor: '#0ea5a0',
  },
  {
    id: '8',
    slug: 'product-market-fit-signals',
    title: 'The Real Signals of Product-Market Fit Nobody Talks About',
    excerpt:
      'Everyone talks about the 40% rule and NPS scores. But the most reliable product-market fit signals are behavioral, not attitudinal. Here\'s what to look for.',
    content: `## The Problem With Standard PMF Tests

Sean Ellis's "40% would be very disappointed" test is famous for a reason — it's simple and it works. But it has a critical flaw: it measures intent, not behavior. Users will tell you they'd be very disappointed to lose your product and then quietly stop using it three weeks later.

The strongest PMF signals are behavioral. Here's what I look for.

## Signal 1: Organic Referrals Without Incentives

When users refer others without a referral incentive, that's a strong signal that they've internalized the value of the product and want to share it. Track referrals separately and look at the ratio of organic to incentivized. A product with true PMF should see organic referrals grow as a percentage over time.

## Signal 2: Users Building Workflows Around Your Product

When you start seeing users integrate your product into their daily workflows — adding it to their onboarding checklist, building Zapier automations, mentioning it in job descriptions — you have PMF for a specific use case. The specificity matters. "Our sales team couldn't function without X" is a better PMF signal than "users generally like X."

## Signal 3: Customers Defending You to Skeptics

When you start hearing stories of users advocating for your product internally against resistant stakeholders, you've found your champions. These are the people who have felt the pain you solve acutely enough that they'll spend political capital on your behalf.

## Signal 4: The Retention Curve Flattens

Plot retention at 30, 60, and 90 days. If retention is still declining steeply at 90 days, you haven't found PMF yet. When the retention curve flattens — even at a low percentage — it means you've found a core segment who has found genuine value. Your job is to understand who they are and build more for them.

## The Honest Truth About PMF

Product-market fit isn't a binary state — it's a spectrum, and you can have it for one segment while lacking it entirely for another. The companies that miss PMF usually aren't wrong about whether the product creates value; they're wrong about which users it creates value for.`,
    category: 'Strategy',
    tags: ['Product-Market Fit', 'Growth', 'Metrics', 'Early Stage'],
    date: '2023-10-30',
    readTime: '8 min read',
    featured: false,
    coverColor: '#1a2b4a',
  },
  {
    id: '9',
    slug: 'remote-product-team-playbook',
    title: 'The Async-First Product Team Playbook',
    excerpt:
      'After leading fully remote product teams for three years, here are the communication protocols and collaboration tools that separate high-functioning async teams from slow, meeting-bloated ones.',
    content: `## Async Is Not Just Remote Work

Async-first isn't about avoiding meetings — it's about designing for the highest-quality thinking by default. When you default to synchronous communication, you're constantly pulling people out of deep work for conversations that could have been a Notion page.

The best async teams I've been part of have one thing in common: they write more and meet less, but the meetings they do have are dramatically better because everyone comes in prepared.

## The Communication Stack

Our async stack at CloudBridge was simple: Slack for quick unblocking (with strong norms around response time expectations), Notion for decisions and documentation, Loom for walkthroughs that are awkward in writing, and a weekly 60-minute video call that was the one synchronous touchpoint everyone attended.

Critically, we had explicit norms: no expectation of same-day responses on Slack after 6pm, all major decisions documented in Notion with 48 hours for comments before being finalized, and meetings required a Notion doc with agenda and context sent 24 hours in advance.

## The Decision Log

The single highest-leverage practice we implemented was a team Decision Log — a Notion database where every significant product decision was recorded with: the question, the options considered, the decision made, the rationale, and the owner. Cross-functional teammates could comment or raise concerns within 48 hours. After that, the decision was final.

This eliminated the most common cause of async dysfunction: decisions that were made but not recorded, leading to revisiting the same debates repeatedly.

## The Weekly Shape-Up

We replaced daily standups (which work fine in-person but are brutal async) with a Friday "shape-up" async update: each PM shared three bullets — what shipped, what blocked them, and what they learned from users that week. It took 10 minutes to write and 5 minutes to read, and it kept the team informed without requiring a single meeting.

## What Async Can't Replace

Being honest: async doesn't work well for emotional conversations, complex ambiguous problems where quick back-and-forth is essential, or building relationships with new team members. When stakes are high and the problem is fuzzy, get on a call. The goal isn't to eliminate synchronous communication — it's to use it intentionally.`,
    category: 'Execution',
    tags: ['Remote Work', 'Async', 'Team Productivity', 'Communication'],
    date: '2023-09-14',
    readTime: '9 min read',
    featured: false,
    coverColor: '#7c3aed',
  },
  {
    id: '10',
    slug: 'enterprise-product-management',
    title: 'Enterprise PM vs. Consumer PM: The Overlooked Differences',
    excerpt:
      'Product management in enterprise B2B is a fundamentally different game than consumer products. Here\'s what shifts when your users are companies, not individuals.',
    content: `## The Buyer ≠ The User Problem

In consumer products, the person who decides to use your product is the person who uses it. In enterprise, there's a gulf between the economic buyer (the VP who signs the contract) and the end user (the analyst who logs in daily). Navigating that gap is the central challenge of enterprise product management — and it has no equivalent in consumer PM.

## Jobs to Be Done Multiplied

A consumer product has one primary JTBD per segment. An enterprise product has at least three: the job of the end user (do their work faster/better), the job of the economic buyer (justify the spend, look good to their leadership), and the job of the IT/security team (don't create new risk or complexity). Features that serve one often complicate another.

The best enterprise PMs design for all three personas simultaneously. This is why enterprise products sometimes feel bloated — they're not just shipping user features, they're shipping compliance reports, SSO integrations, and ROI calculators that nobody demos but that unblock dozens of deals.

## Implementation as Product

In consumer, if your product has a poor first-run experience, users churn. In enterprise, there's often a customer success team that can manually rescue a poor onboarding experience. This creates a dangerous culture: enterprise PMs sometimes stop optimizing onboarding because CS will handle it.

The best enterprise PMs treat implementation success as a product metric, not a CS metric. They track time-to-first-value, implementation completion rates, and CS escalations by product area. When implementation is painful, it's a product problem.

## The Feature Request Trap

Enterprise customers are loud and specific about what they want. A $2M customer who tells you their renewal depends on Feature X creates intense pressure to prioritize that request immediately. This is how enterprise products become one-off solution shops rather than scalable platforms.

The discipline of enterprise PM is extracting the underlying problem behind the specific feature request and solving it in a way that serves the broader market, not just the loud customer in the room.`,
    category: 'Strategy',
    tags: ['Enterprise', 'B2B', 'Product Strategy', 'SaaS'],
    date: '2023-08-01',
    readTime: '10 min read',
    featured: false,
    coverColor: '#d4af37',
  },
];

export const categories = ['All', 'Strategy', 'Execution', 'Leadership', 'Trends'] as const;
export type BlogCategory = (typeof categories)[number];
