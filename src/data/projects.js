import actinfImage from '@/assets/images/actinf1_2.jpeg';
import droneImage from '@/assets/images/drone.jpg';
import eyetrackingImage from '@/assets/images/eyetracking.jpg';
import AIvenndiagramImage from '@/assets/images/AIvenndiagram.webp';

export const allProjects = [
  {
    title: "An Active Inference Approach to Autonomous Navigation",
    description: "This project compares active inference algorithms to Deep Q-Networks (DQNs) in a realistic 3D robotics environment called CoppeliaSim. The research explores how active inference can improve navigation performance in complex, uncertain environments. This project won 2nd place in Computational Biology at the Alameda County Science and Engineering Fair.",
    image: actinfImage,
    technologies: ["PYMDP", "Deep RL", "CoppeliaSim"],
    github: "https://github.com/JojiGitHub/Active-Inference-2025",
    category: "Active Inference"
  },
  {
    title: "Hierarchical Active Inference for Autonomous Drone Navigation in Microsoft AirSim with Environmentally Aware Adaptive Planning",
    description: "Currently working in Microsoft AirSim with drone navigation. Developing hierarchical active inference framework and using hybrid methods to scale it up. The project implements dynamic planning to optimize computational cost and ensure drone safety. Enhanced robustness is achieved through this framework design. Implementation uses RxInfer (Julia) and Python for AirSim integration.",
    image: droneImage,
    technologies: ["RxInfer (Julia)", "Python", "Microsoft AirSim", "Hierarchical Active Inference"],
    github: "https://github.com/har5h1l/Hierarchical-Active-Inference-for-Autonomous-Drone-Navigation-in-Microsoft-AirSim",
    category: "Active Inference"
  },
  {
    title: "Nutritional Behavior Analytics",
    description: "Designed and conducted a comprehensive survey to identify local nutrition habits and patterns. Collected data from diverse demographics and performed statistical analysis to uncover insights about dietary behaviors and health awareness.",
    image: AIvenndiagramImage,
    technologies: ["Data Analysis", "Survey Design", "Statistical Methods", "Data Visualization"],
    github: "https://github.com/har5h1l/NutritionProject",
    category: "Biomedicine"
  },

  {
    title: "Nutritional Recommendation System Development",
    description: "Currently developing a recommendation system to provide personalized nutritional guidance. This ongoing project involves researching neural network architectures specialized for recommendation systems, with plans to deploy as a user-friendly application.",
    image: AIvenndiagramImage,
    technologies: ["Neural Networks", "Recommendation Systems", "Machine Learning", "App Development"],
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
    technologies: ["React", "Next.js", "App Development", "Biomedicine", "Healthcare"],
    category: "Biomedicine"
  },
  {
    title: "FocusGrid - AI-Powered Study Planning App",
    description: "A minimalist study planning application that helps students create and optimize their study schedules using AI. Built with React, TypeScript, and integrated with OpenRouter AI for intelligent study plan optimization. Currently a work in progress.",
    image: AIvenndiagramImage,
    technologies: ["React", "TypeScript", "OpenRouter AI", "Tailwind CSS"],
    github: "https://github.com/har5h1l/FocusGrid",
    category: "Other"
  }
]