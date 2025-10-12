import actinfImage from '@/assets/images/actinf1_2.jpeg';
import droneImage from '@/assets/images/drone.jpg';
import eyetrackingImage from '@/assets/images/eyetracking.jpg';
import AIvenndiagramImage from '@/assets/images/AIvenndiagram.webp';

export const allProjects = [
  {
    title: "An Active Inference Approach to Autonomous Navigation",
    description: "This project compares active inference algorithms to Deep Q-Networks (DQNs) in a realistic 3D robotics environment called CoppeliaSim. The research explores how active inference can improve navigation performance in complex, uncertain environments. This project won 2nd place in Computational Biology at the Alameda County Science and Engineering Fair.",
    image: actinfImage,
    technologies: ["Active Inference", "Python", "Deep RL", "Robotics", "CoppeliaSim"],
    github: "https://github.com/JojiGitHub/Active-Inference-2025",
    category: "Active Inference"
  },
  {
    title: "Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation",
    description: "This research integrates hierarchical active inference with affordance theory to address three critical challenges in autonomous drone navigation: managing continuous environments in hierarchical planning, connecting abstract reasoning to real-world perception, and maintaining computational efficiency for edge computing. Our framework introduces a latent suitability state that represents how the environment affords safety and navigability, intelligently filtering viable waypoints while bridging low-level perception with high-level planning. The system balances exploration with goal-directed behavior, tested in Microsoft AirSim with plans for real-world implementation. Presented at IWAI 2025. Co-authored with Satyaki Maitra. Code will be open-sourced soon.",
    image: droneImage,
    technologies: ["Active Inference", "Julia", "Python", "Robotics", "Drones"],
    github: "https://github.com/har5h1l/Hierarchical-Active-Inference-for-Autonomous-Drone-Navigation-in-Microsoft-AirSim",
    link: "https://shahmaitraresearch.com/",
    category: "Active Inference",
    date: "Oct 2025",
    featured: true
  },
  {
    title: "Nutritional Behavior Analytics",
    description: "Designed and conducted a comprehensive survey to identify local nutrition habits and patterns. Collected data from diverse demographics and performed statistical analysis to uncover insights about dietary behaviors and health awareness.",
    image: AIvenndiagramImage,
    technologies: ["Data Analysis", "Statistics", "Python", "Nutrition"],
    github: "https://github.com/har5h1l/NutritionProject",
    category: "Biomedicine"
  },

  {
    title: "Nutritional Recommendation System Development",
    description: "Currently developing a recommendation system to provide personalized nutritional guidance. This ongoing project involves researching neural network architectures specialized for recommendation systems, with plans to deploy as a user-friendly application.",
    image: AIvenndiagramImage,
    technologies: ["Machine Learning", "Python", "Neural Networks", "Nutrition"],
    category: "AI/ML"
  },

  {
    title: "GazeTracking Communication System",
    description: "A fork of GazeTracking that implements an assistive communication system using eye gaze. This project enables users to build sentences and communicate through eye movements, particularly beneficial for individuals with limited mobility. Built with React, TypeScript, and MediaPipe's face mesh detection.",
    image: AIvenndiagramImage,
    technologies: ["React", "TypeScript", "MediaPipe", "Computer Vision", "Accessibility"],
    github: "https://github.com/har5h1l/GazeTracking",
    category: "AI/ML"
  },
  {
    title: "WellnessGrid",
    description: "A comprehensive healthcare application designed to centralize medical information and provide support for chronic disease patients. WellnessGrid offers personalized health tracking, medication reminders, and a secure platform for storing medical records, making it easier for patients to manage their health conditions.",
    image: AIvenndiagramImage,
    technologies: ["React", "Next.js", "TypeScript", "Healthcare"],
    category: "Biomedicine",
    featured: true
  },
  {
    title: "fMRI Foundation Model (Acknowledged Contributor)",
    description: "Contributed to the fMRI Foundation Model project by MedARC (Connor Lane et al.), which develops large-scale self-supervised models for analyzing human brain activity. Worked on explicit denoising method with masked autoencoder. **Acknowledged contributor; not my own project or co-author.**",
    image: AIvenndiagramImage,
    technologies: ["Deep Learning", "Python", "Neuroscience", "fMRI"],
    github: "https://github.com/medarc-ai/",
    link: "https://www.medarc.ai/",
    category: "Biomedicine",
    featured: true
  },
  {
    title: "FocusGrid - AI-Powered Study Planning App",
    description: "A minimalist study planning application that helps students create and optimize their study schedules using AI. Built with React, TypeScript, and integrated with OpenRouter AI for intelligent study plan optimization. Currently a work in progress.",
    image: AIvenndiagramImage,
    technologies: ["React", "TypeScript", "AI", "Web App"],
    github: "https://github.com/har5h1l/FocusGrid",
    category: "Other"
  }
]