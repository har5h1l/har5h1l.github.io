import actinfImage from '@/assets/images/actinf1_2.jpeg';
import droneImage from '@/assets/images/drone.jpg';
import eyetrackingImage from '@/assets/images/eyetracking.jpg';
import AIvenndiagramImage from '@/assets/images/AIvenndiagram.webp';

export const allProjects = [
  {
    title: "An Active Inference Approach to Autonomous Navigation",
    description: "This project compares active inference algorithms to Deep Q-Networks (DQNs) in a realistic 3D robotics environment called CoppeliaSim. The research explores how active inference can improve navigation performance in complex, uncertain environments. This project won 2nd place in Computational Biology at the Alameda County Science and Engineering Fair.",
    image: actinfImage,
    technologies: ["Active Inference", "Python", "Deep RL", "Robotics", "CoppeliaSim", "Research"],
    github: "https://github.com/JojiGitHub/Active-Inference-2025",
    category: "Active Inference",
    research: true,
    date: "May 2025",
    researchQuestions: [
      "How does Active Inference compare with Reinforcement Learning (specifically DQN) in unknown environments, regarding: \n\t– avoiding myopic behavior? \n\t– balancing exploration and exploitation? \n\t– mitigating uncertainty?",
      "How does the Free Energy Principle contribute to efficient navigation in unknown or changing environments?"
    ],
    recognition: [
      { text: "2nd in Comp Bio @ ACSEF 2025" },
      {
        text: "Active Inference Institute Features",
        links: [
          { text: "Jan 2025 Newsletter", url: "https://activeinferenceinstitute.substack.com/p/january-2025-newsletter-active-inference" },
          { text: "Mar 2025 Newsletter", url: "https://activeinferenceinstitute.substack.com/p/march-2025-newsletter-active-inference" },
          { text: "Apr 2025 Newsletter", url: "https://activeinferenceinstitute.substack.com/p/april-newsletter-2025-newsletter" },
          { text: "Quarterly Roundtable", url: "https://www.youtube.com/live/aEe8y9Ebs10?si=jMUqsJ8YDQ0rBfKN&t=2689" }
        ]
      },
      { text: "Project Presentation Slides", url: "https://github.com/har5h1l/Active-Inference-AutoNav-2025/blob/main/An%20Active%20Inference%20Approach%20to%20Autonomus%20Navigation%20Trifold%20copy.pdf" }
    ]
  },
  {
    title: "DroneSuite",
    description: "**Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation**\n\nThis research integrates hierarchical active inference with affordance theory to address autonomous drone navigation. Our framework introduces a latent suitability state that represents how the environment affords safety and navigability, bridging low-level perception with high-level planning. The system balances exploration with goal-directed behavior, effectively filtering viable waypoints for scalable policy selection.",
    image: droneImage,
    technologies: ["Active Inference", "Julia", "Python", "Robotics", "Drones"],
    github: "https://github.com/har5h1l/Hierarchical-Active-Inference-for-Autonomous-Drone-Navigation-in-Microsoft-AirSim",
    link: "https://shahmaitraresearch.com/",
    category: "Active Inference",
    research: true,
    researchQuestions: [
      "How can hierarchical active inference manage continuous environmental states for scalable planning?",
      "How does affordance theory enable efficient bridging of low-level perception and high-level abstract reasoning?",
      "Can latent suitability states effectively filter viable waypoints to improve computational efficiency on edge devices?",
      "How does the proposed framework robustness transfer from simulation (AirSim) to real-world drone constraints?"
    ],

    featured: true,
    wip: true,
    video: "https://www.youtube.com/live/1q40Jqk1HYs?si=5W1C52U7gNkRb2l0&t=36000",
    recognition: [
      { text: "Shah-Maitra Research Website", url: "https://www.shahmaitraresearch.com/" },
      {
        text: "IWAI 2025",
        links: [
          { text: "Workshop Page", url: "https://iwaiworkshop.github.io/" },
          { text: "OpenReview (Abstract/Posters)", url: "https://openreview.net/group?id=IWAI/2025/Workshop#tab-recent-activity" }
        ]
      },
      {
        text: "5th Active Inference Symposium",
        links: [
          { text: "Symposium Page", url: "https://www.activeinference.institute/symposium" },
          { text: "Presentation Recording", url: "https://www.youtube.com/watch?v=1q40Jqk1HYs&t=36000s" },
          { text: "Zenodo", url: "https://zenodo.org/records/17575211" }
        ]
      },
      {
        text: "Institute Features",
        links: [
          { text: "Apr 2025 Newsletter", url: "https://activeinferenceinstitute.substack.com/p/april-newsletter-2025-newsletter" },
          { text: "Sep 2025 Newsletter", url: "https://activeinferenceinstitute.substack.com/p/september-2025-newsletter-active" },
          { text: "Livestream Highlight 1", url: "https://www.youtube.com/live/-cKpXSZLvMQ?si=R4RpvNs9JmTdVltQ&t=1741" },
          { text: "Livestream Highlight 2", url: "https://www.youtube.com/live/PPKFlARc7gY?si=lbreH9qcy3G6qlUA&t=1301" },
          { text: "Livestream Highlight 3", url: "https://www.youtube.com/live/09FfbL1YYOI?si=GkmaxYor17nrINOt&t=1267" }
        ]
      }
    ]
  },
  {
    title: "Nutritional Behavior Analytics",
    description: "Designed and conducted a comprehensive survey to identify local nutrition habits and patterns. Collected data from diverse demographics and performed statistical analysis to uncover insights about dietary behaviors and health awareness.",
    image: AIvenndiagramImage,
    technologies: ["Data Analysis", "Statistics", "Python", "Nutrition"],
    github: "https://github.com/har5h1l/NutritionProject",
    category: "Biomedicine",
    date: "2024"
  },

  {
    title: "Nutritional Recommendation System Development",
    description: "Currently developing a recommendation system to provide personalized nutritional guidance. This ongoing project involves researching neural network architectures specialized for recommendation systems, with plans to deploy as a user-friendly application.",
    image: AIvenndiagramImage,
    technologies: ["Machine Learning", "Python", "Neural Networks", "Nutrition"],
    category: "AI/ML",
    wip: true,

  },

  {
    title: "GazeTracking Communication System",
    description: "A fork of GazeTracking that implements an assistive communication system using eye gaze. This project enables users to build sentences and communicate through eye movements, particularly beneficial for individuals with limited mobility. Built with React, TypeScript, and MediaPipe's face mesh detection.",
    image: AIvenndiagramImage,
    technologies: ["React", "TypeScript", "MediaPipe", "Computer Vision", "Accessibility"],
    github: "https://github.com/har5h1l/GazeTracking",
    category: "AI/ML",
    date: "2024"
  },
  {
    title: "WellnessGrid",
    description: "A comprehensive healthcare application designed to centralize medical information and provide support for chronic disease patients. WellnessGrid offers personalized health tracking, medication reminders, and a secure platform for storing medical records, making it easier for patients to manage their health conditions.",
    image: AIvenndiagramImage,
    technologies: ["React", "Next.js", "TypeScript", "Healthcare"],
    category: "Biomedicine",
    featured: true,
    video: "https://www.youtube.com/watch?v=9Ah2SN2-cDc&t=1s",
    date: "2025"
  },
  {
    title: "fMRI Foundation Model (Acknowledged Contributor)",
    description: "Contributed to self-supervised representation learning for fMRI and downstream analysis workflows.",
    image: AIvenndiagramImage,
    technologies: ["Deep Learning", "Python", "Neuroscience", "fMRI"],
    github: "https://github.com/medarc-ai/",
    link: "https://www.medarc.ai/",
    category: "Biomedicine",
    research: true
  },
  {
    title: "FocusGrid - AI-Powered Study Planning App",
    description: "A minimalist study planning application that helps students create and optimize their study schedules using AI. Built with React, TypeScript, and integrated with OpenRouter AI for intelligent study plan optimization. Currently a work in progress.",
    image: AIvenndiagramImage,
    technologies: ["React", "TypeScript", "AI", "Web App"],
    github: "https://github.com/har5h1l/FocusGrid",
    category: "Other",
    wip: true,

  },
  {
    title: "Building GNNs for Drug Discovery",
    description: "Message passing GNNs that use knowledge graphs of drugs and diseases to learn high-dimensional representations of drugs.",
    image: AIvenndiagramImage,
    technologies: ["Graph Neural Networks", "Python", "Drug Discovery", "Deep Learning"],
    category: "Biomedicine",
    research: true
  },
  {
    title: "Modelling Trust in Multi-Agent Active Inference",
    description: "More details coming soon.",
    image: AIvenndiagramImage,
    technologies: ["Active Inference", "Multi-Agent Systems"],
    category: "Active Inference",
    research: true,
    wip: true,
    featured: true,

  }
]