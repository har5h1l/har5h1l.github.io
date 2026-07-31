export const researchDomains = [
  {
    id: "autonomous-intelligence",
    title: "Autonomous and Embodied Intelligence",
    overview:
      "Robotics is a problem space where perception, memory, planning, and control must operate together under partial observability and changing conditions. Within it, I focus on building Active Inference agents that form persistent, abstract models of their environments and use them to act efficiently while explicitly representing uncertainty.",
    outputHref: "/publications#autonomous-intelligence",
    entries: [
      {
        status: "CURRENT",
        title: "VAMAI",
        subtitle:
          "Variational Affordance Mapping and Active Inference for UAV Navigation in GNSS-Denied Environments",
        byline: "With Satyaki Maitra",
        description:
          "VAMAI is a training-free hierarchical Active Inference architecture for autonomous UAV navigation in unknown, GNSS-denied environments. It builds a persistent probabilistic affordance map from onboard sensing and uses it to support safe, goal-directed exploration with computation suitable for edge deployment.",
        links: [
          {
            label: "Project",
            href: "https://www.shahmaitraresearch.com/vamai",
          },
        ],
      },
      {
        status: "2025",
        title: "An Active Inference Approach to Autonomous Navigation",
        description:
          "A comparative study of Active Inference and Deep Q-Networks for navigation in a simulated 3D environment, examining how each approach handles uncertainty and exploration.",
        secondary: true,
        links: [
          {
            label: "GitHub",
            href: "https://github.com/JojiGitHub/Active-Inference-2025",
          },
          {
            label: "Poster",
            href: "https://github.com/har5h1l/Active-Inference-AutoNav-2025/blob/main/An%20Active%20Inference%20Approach%20to%20Autonomus%20Navigation%20Trifold%20copy.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "social-cognition",
    title: "Social Cognition and Multi-Agent Intelligence",
    overview:
      "I study how agents can reason about and learn from other agents under uncertainty. My work asks how confidence in a social model should shape action, and how an agent can learn without imitating.",
    outputHref: "/publications#social-cognition",
    entries: [
      {
        status: "ACCEPTED PAPER · IWAI 2026",
        title: "Partner-Specific Affective Precision in Social Active Inference",
        description:
          "This project models affective precision as a metacognitive estimate of confidence in the agent’s model of a particular partner. Each relationship maintains a confidence estimate based on that partner’s behavioral predictability, which modulates policy precision and shapes how strongly beliefs guide action without changing the beliefs themselves.",
        links: [
          { label: "GitHub", href: "https://github.com/har5h1l/affect_aif" },
        ],
      },
      {
        status: "Ongoing",
        title: "Social Learning",
        description:
          "This project studies how an active-inference agent can learn useful strategies from another agent while evaluating them through its own preferences. I’m particularly interested in whether that information can be retained and applied after the other agent is no longer present.",
      },
    ],
  },
  {
    id: "biomedical-ai",
    title: "Biomedical AI",
    overview:
      "I also contribute to research applying machine learning to complex biological and biomedical systems, particularly signed interaction graphs and representation learning for neuroscience data.",
    entries: [
      {
        status: "Current research",
        title: "Biomedical Signed Graph Neural Networks",
        description:
          "This work studies signed graph neural networks for biomedical relation modeling, with emphasis on preserving positive and negative interaction structure and evaluating how models generalize across drugs and biological targets.",
      },
      {
        status: "Contribution",
        title: "fMRI Foundation Model",
        description:
          "I contributed to self-supervised representation-learning workflows for fMRI and ideas connected to downstream neuroscience analysis.",
        links: [
          { label: "MedARC", href: "https://www.medarc.ai/" },
          { label: "GitHub", href: "https://github.com/medarc-ai/" },
        ],
      },
    ],
  },
];

export const featuredResearch = researchDomains.filter((domain) =>
  ["autonomous-intelligence", "social-cognition"].includes(domain.id),
);
