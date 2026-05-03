export const profileLinks = [
  {
    label: 'Email',
    href: 'mailto:28hshah@gmail.com',
    note: 'Best way to reach me for research conversations.',
    icon: 'mail',
  },
  {
    label: 'Discord',
    href: 'https://discordapp.com/users/harshils',
    note: 'harshils',
    icon: 'message-square',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/har5h1l',
    note: 'Code, experiments, and project repositories.',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/28hshah/',
    note: 'Professional profile and updates.',
    icon: 'linkedin',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@harshilshah28',
    note: 'Essays, tutorials, and reflections.',
    icon: 'medium',
  },
  {
    label: 'Shah-Maitra Research',
    href: 'https://www.shahmaitraresearch.com/',
    note: 'Collaborative research home for drone navigation work.',
    icon: 'globe',
  },
  {
    label: 'R.I.S.E. Tennis',
    href: 'https://risetennis.org/',
    note: 'Nonprofit work focused on access and community.',
    icon: 'globe',
  },
]

export const homeHero = {
  eyebrow: 'researcher, learner, thinker',
  title: "Hi, I'm Harshil...",
  intro:
    "I'm a student researcher from the Bay Area interested in how intelligent systems learn from experience, reason under uncertainty, and act in complex environments. My work connects Active Inference, neuroscience, affordance theory, social cognition, and multi-agent AI, with recent applications in autonomous navigation, biomedicine, and computational neuroscience. Beyond research, I enjoy debate, mathematics, tennis, and learning new things.",
}

export const currentFocus = [
  {
    title: "What I'm doing now",
    description:
      'Currently focused on VAMAI, multi-agent social learning with trust and theory of mind, and broader work at the intersection of AI, biology, and neuroscience.',
  },
]

export const achievements = [
  {
    title: 'ACSEF Grand Award / ISEF Finalist',
    subtitle: 'March 2026',
    description: [
      { type: 'text', value: 'DroneSuite/VAMAI received the Grand Award at the ' },
      { type: 'link', href: 'https://acsef.org/', value: 'Hitachi Science and Engineering Fair, Alameda County (ACSEF/HSEF)' },
      { type: 'text', value: ', and advanced as a Regeneron International Science and Engineering Fair (ISEF) finalist.' },
    ],
    links: [
      { label: 'Learn More', href: '/research#dronesuite' },
    ],
  },
  {
    title: 'Congressional App Challenge District Finalist',
    subtitle: 'January 2026',
    description:
      'WellnessGrid was recognized as a district finalist in the Congressional App Challenge.',
    links: [
      { label: 'Official Challenge', href: 'https://www.congressionalappchallenge.us/' },
      { label: 'WellnessGrid Video', href: 'https://www.youtube.com/watch?v=9Ah2SN2-cDc&t=1s' },
    ],
  },
  {
    title: 'Presented at the 5th Annual Active Inference Symposium',
    subtitle: 'November 2025',
    description:
      'Presented "Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation" (co-authored with Satyaki Maitra) at the 5th Annual Active Inference Symposium.',
    links: [
      { label: 'Learn More', href: '#' },
      { label: 'Watch Recording', href: '#' },
    ],
  },
]

export const recentMilestones = [
  {
    date: 'November 15, 2025',
    title: 'Presented drone-navigation research at the 5th Active Inference Symposium',
    description:
      'Presented the VAMAI work with Satyaki Maitra at the 5th Annual Active Inference Symposium.',
  },
  {
    date: 'July 29, 2025',
    title: 'Accepted to present at IWAI 2025',
    description:
      'Accepted to present VAMAI at IWAI 2025.',
  },
]

// paragraph can be a string or array of { type: 'text'|'link', value: string, href?: string }
export const bioParagraphs = [
  [
    {
      type: 'text',
      value:
        "I'm interested in a central question: how do intelligent systems, whether biological or artificial, turn experience into knowledge, act under uncertainty, and coordinate their own perspective with the perspectives of others? That question has led me toward Active Inference, neuroscience, affordance theory, social cognition, and multi-agent systems. Through projects like VAMAI, I've explored how autonomous agents can build beliefs about uncertain environments, infer what actions are possible, and adapt when the world is incomplete, noisy, or changing. Beyond Active Inference, I've applied machine learning and LLMs. As a contributor to ",
    },
    { type: 'link', href: 'https://www.medarc.ai/', value: "MedArc's fMRI foundational model" },
    {
      type: 'text',
      value:
        " and through ongoing research with signed GNNs for biomedicine, I've been exploring how modern AI can help model complex biological systems and generate useful scientific insights.",
    },
  ],
  "Outside research, I enjoy competing in public forum debate, playing tennis for my school team, reading, experimenting with recipes and drinks, listening to podcasts, and learning broadly. I'm also the founder and president of R.I.S.E. Tennis, a nonprofit focused on making tennis more accessible.",
  "Mathematics has shaped how I think because it teaches me to reason from structure rather than surface patterns. I love learning because it gives me new ways to connect ideas, from psychology and neuroscience to artificial intelligence and biology. Long term, I hope to keep asking questions at that intersection as a research scientist.",
]

export const homeResearchSlugs = ['dronesuite', 'multi-agent-theory-of-mind-with-trust-and-social-learning', 'signed-gnns-and-benchmarking']

export const homeProjectSlugs = ['rise-tennis', 'gaze-tracking-communication-system', 'focusgrid']

export const contactIntro =
  "I'm open to elaborating on my research or hearing about any opportunities. Feel free to reach out through any of the channels below."
