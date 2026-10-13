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
        status: "PREPRINT · ACCEPTED FULL PAPER, IWAI 2026",
        title: "Partner-Specific Affective Precision in Social Active Inference",
        byline: "With Andrew Pashea",
        description:
          "We model affective precision as partner-specific confidence in a multi-partner trust game, showing how it shapes policy commitment rather than partner-state inference. The work explores how confidence develops and changes across relationships, and why greater confidence does not necessarily lead to higher rewards.",
        links: [
          { label: "Preprint", href: "https://arxiv.org/abs/2609.24876" },
          { label: "IWAI 2026", href: "https://openreview.net/forum?id=QNzsV3aqt9" },
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
        status: "Research in progress",
        title: "Topology-Guided Self-Training for Drug–Target Mechanism-of-Action Prediction",
        byline: "With Dr. Lei Xie (Northeastern University) and Mohammadsadeq Mottaqi (Vincent, CUNY Graduate Center)",
        description:
          "Building on the lab’s existing FLASH model, I explore how the structure of biomedical interaction networks can help predict missing drug–target mechanisms of action and improve learning from incomplete data. Contact me for more details.",
      },
      {
        status: "Research in progress",
        title: "Spectrome: Learning Filters for Brain Structure–Function Modeling",
        byline: "UCSF Raj Lab · With Anil Kamat",
        description:
          "I explore how machine learning can extend models that connect the brain’s structural wiring to its activity. The project studies whether learned filters can improve predictions of brain activity and generalize across individuals. Contact me for more details.",
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
