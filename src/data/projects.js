import actinfImage from '@/assets/images/actinf1_2.jpeg'
import droneImage from '@/assets/images/drone.jpg'
import eyetrackingImage from '@/assets/images/eyetracking.jpg'
import riseTennisLogo from '@/assets/images/risetennis.png'

export const allProjects = [
  {
    slug: 'dronesuite',
    type: 'research',
    title: 'VAMAI',
    authors: 'Harshil Shah, Satyaki Maitra',
    kicker:
      'Affordance-based hierarchical active inference for autonomous drone navigation',
    summary:
      'Affordance-based hierarchical active inference for autonomous drone navigation, previously known as DroneSuite.',
    description:
      'Previously known as DroneSuite.',
    cardSummary:
      'Affordance-based hierarchical active inference for autonomous drone navigation, previously known as DroneSuite.',
    image: droneImage,
    mediaFit: 'cover',
    mediaPosition: 'center',
    researchCategory: 'Active Inference & Multi-Agent Cognition',
    technologies: ['Active Inference', 'Julia', 'Python', 'Robotics', 'Drones'],
    badges: ['Featured', 'Conference Talk', 'Autonomy'],
    date: '2025-2026',
    featured: true,
    role: 'Co-author and presenter',
    links: [
      { label: 'Project', href: 'https://www.shahmaitraresearch.com/vamai', variant: 'primary' },
    ],
    recognition: [
      {
        label: 'IWAI 2025',
        detail: 'Extended abstract and poster accepted at the International Workshop on Active Inference.',
        links: [
          { label: 'Workshop', href: 'https://iwaiworkshop.github.io/' },
          { label: 'Poster & Abstract', href: 'https://www.shahmaitraresearch.com/vamai' },
          { label: 'Project Page', href: 'https://www.shahmaitraresearch.com/vamai' },
        ],
      },
      {
        label: '5th Active Inference Symposium',
        detail: 'Oral presentation in November 2025.',
        links: [{ label: 'Recording', href: 'https://www.youtube.com/watch?v=1q40Jqk1HYs&t=36000s' }],
      },
      {
        label: 'ACSEF Grand Award / ISEF Finalist',
        detail: 'March 2026',
      },
    ],
  },
  {
    slug: 'multi-agent-theory-of-mind-with-trust-and-social-learning',
    type: 'research',
    title: 'Multi-Agent Theory of Mind with Trust and Social Learning',
    summary:
      'An emerging research direction on how active inference agents infer hidden intentions, calibrate trust, and learn socially from one another.',
    description:
      'This project explores theory of mind in active inference agents through the lens of trust, modeled as precision, and social learning. The goal is to understand how agents build beliefs about other agents, revise those beliefs under uncertainty, and coordinate more intelligently when information is incomplete or unreliable.',
    cardSummary:
      'An emerging research direction on trust, social learning, and theory of mind in active inference agents.',
    researchCategory: 'Active Inference & Multi-Agent Cognition',
    technologies: ['Active Inference', 'Multi-Agent Systems', 'Theory of Mind'],
    badges: ['Current Focus', 'Work in Progress'],
    visualTags: ['Theory of Mind', 'Trust', 'Social Learning', 'Active Inference'],
    visualNote: 'Current work on how agents infer intentions, calibrate trust, and learn from one another.',
    date: '2025-2026',
    featured: true,
    role: 'Research direction',
    researchQuestions: [
      'How should trust be represented so agents can distinguish noise from meaningful social evidence?',
      'What kinds of belief updates support theory of mind without brittle overfitting to other agents?',
      'How can social learning improve cooperation when agents operate with partial or conflicting information?',
    ],
    recognition: [
      {
        label: 'Open for feedback',
        detail: 'I am actively looking for mentorship, critique, and conversations with researchers interested in social cognition and active inference.',
      },
    ],
  },
  {
    slug: 'an-active-inference-approach-to-autonomous-navigation',
    type: 'research',
    title: 'An Active Inference Approach to Autonomous Navigation',
    summary:
      'A comparative study of active inference and DQNs for navigation in uncertain 3D environments.',
    description:
      'This project compares active inference algorithms to Deep Q-Networks (DQNs) in a realistic 3D robotics environment called CoppeliaSim. The research explores how active inference can improve navigation performance in complex, uncertain environments.',
    cardSummary:
      'A comparative study of active inference and DQNs for navigation in uncertain 3D environments.',
    image: actinfImage,
    mediaFit: 'cover',
    researchCategory: 'Active Inference & Multi-Agent Cognition',
    technologies: ['Active Inference', 'Python', 'Deep RL', 'Robotics', 'CoppeliaSim'],
    badges: ['Research', 'ACSEF 2025'],
    date: '2025',
    role: 'Student researcher',
    researchQuestions: [
      'How does active inference compare with DQNs in unknown environments when uncertainty and exploration matter?',
      'What does the free energy principle add to navigation in changing or partially observed settings?',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JojiGitHub/Active-Inference-2025',
        variant: 'secondary',
      },
      {
        label: 'Poster',
        href: 'https://github.com/har5h1l/Active-Inference-AutoNav-2025/blob/main/An%20Active%20Inference%20Approach%20to%20Autonomus%20Navigation%20Trifold%20copy.pdf',
        variant: 'secondary',
      },
    ],
    recognition: [
      {
        label: 'ACSEF 2025',
        detail: 'Placed 2nd in Computational Biology at the Alameda County Science and Engineering Fair.',
      },
      {
        label: 'Active Inference Institute',
        detail: 'Featured in newsletters and roundtable discussion.',
        links: [
          { label: 'Active Inference Institute', href: 'https://activeinference.org/' },
          {
            label: 'January 2025 Newsletter',
            href: 'https://activeinferenceinstitute.substack.com/p/january-2025-newsletter-active-inference',
          },
          {
            label: 'March 2025 Newsletter',
            href: 'https://activeinferenceinstitute.substack.com/p/march-2025-newsletter-active-inference',
          },
          {
            label: 'Quarterly Roundtable',
            href: 'https://www.youtube.com/live/aEe8y9Ebs10?si=jMUqsJ8YDQ0rBfKN&t=2689',
          },
        ],
      },
    ],
  },
  {
    slug: 'signed-gnns-and-benchmarking',
    type: 'research',
    title: 'Signed GNNs and Benchmarking',
    summary:
      'Signed graph neural networks and benchmarking for relational structure and representation learning.',
    description:
      'This line of work focuses on signed graph neural networks and benchmarking: modeling positive and negative relations in graphs and developing evaluation setups for higher-quality representation learning and downstream reasoning.',
    cardSummary:
      'Signed GNNs and benchmarking for relational structure and representation learning.',
    researchCategory: 'Graph Machine Learning',
    technologies: ['Graph Neural Networks', 'Python', 'Signed Graphs', 'Benchmarking', 'Deep Learning'],
    badges: ['Research'],
    visualTags: ['GNNs', 'Signed Graphs', 'Benchmarking', 'Representation Learning'],
    visualNote: 'Exploring signed graph neural networks and benchmarking for relational representation learning.',
    date: '2025-2026',
    role: 'Research direction',
  },
  {
    slug: 'fmri-foundation-model',
    type: 'research',
    title: 'fMRI Foundation Model',
    summary:
      'Contributed to self-supervised representation learning workflows for fMRI and downstream analysis.',
    description:
      'I contributed to work on self-supervised representation learning for fMRI, helping with model and workflow ideas connected to downstream neuroscience analysis.',
    cardSummary:
      'Contributed to self-supervised representation learning workflows for fMRI and downstream analysis.',
    researchCategory: 'AI for Biology, Medicine, and Neuroscience',
    technologies: ['Deep Learning', 'Python', 'Neuroscience', 'fMRI'],
    badges: ['Contributor'],
    visualTags: ['fMRI', 'Neuroscience', 'Deep Learning', 'Foundation Models'],
    visualNote: 'Contributed to self-supervised workflows for fMRI and downstream neuroscience analysis.',
    date: '2025',
    role: 'Acknowledged contributor',
    links: [
      { label: 'MedArc', href: 'https://www.medarc.ai/', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/medarc-ai/', variant: 'secondary' },
    ],
  },
  {
    slug: 'wellnessgrid',
    type: 'project',
    title: 'WellnessGrid',
    summary:
      'A health-management platform designed to centralize medical information and support people managing chronic conditions.',
    description:
      'A comprehensive healthcare application designed to centralize medical information and provide support for chronic disease patients. WellnessGrid offers personalized health tracking, medication reminders, and a secure platform for storing medical records, making it easier for patients to manage their health conditions.',
    cardSummary:
      'A health-management platform designed to centralize medical information and support people managing chronic conditions.',
    category: 'Applied Products',
    technologies: ['React', 'Next.js', 'TypeScript', 'Healthcare'],
    badges: ['React/Next.js', 'MedTech', 'Award Finalist'],
    date: '2025-2026',
    role: 'Co-builder',
    links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=9Ah2SN2-cDc&t=1s', variant: 'primary' }],
    recognition: [
      {
        label: 'Congressional App Challenge',
        detail: 'District finalist recognition in 2026.',
        links: [{ label: 'Official Challenge', href: 'https://www.congressionalappchallenge.us/' }],
      },
      {
        label: 'Blue Ocean Pitch Video',
        detail: 'Pitch video prepared for the 2026 competition.',
        links: [{ label: 'Pitch Video', href: 'https://www.youtube.com/watch?v=9Ah2SN2-cDc&t=1s' }],
      },
      {
        label: 'Presidential AI Challenge Video',
        detail: 'Presentation video prepared for the 2026 submission.',
        links: [{ label: 'Presentation Video', href: 'https://www.youtube.com/watch?v=9Ah2SN2-cDc&t=1s' }],
      },
    ],
  },
  {
    slug: 'rise-tennis',
    type: 'project',
    title: 'R.I.S.E. Tennis',
    summary:
      'A leadership and service initiative focused on expanding access to tennis and building community through youth programming.',
    description:
      'R.I.S.E. Tennis is a nonprofit effort I founded and lead to make tennis more accessible. The organization combines sport, mentorship, and community service while reflecting a broader commitment to leadership beyond technical work.',
    cardSummary:
      'A leadership and service initiative focused on expanding access to tennis and building community through youth programming.',
    image: riseTennisLogo,
    mediaFit: 'contain',
    category: 'Leadership & Service',
    technologies: ['Nonprofit', 'Leadership', 'Community'],
    badges: ['Founder', 'Community Service'],
    date: 'Ongoing',
    role: 'Founder and president',
    links: [{ label: 'Website', href: 'https://risetennis.org/', variant: 'primary' }],
  },
  {
    slug: 'gaze-tracking-communication-system',
    type: 'project',
    title: 'GazeTracking Communication System',
    summary:
      'An assistive communication system that lets users build phrases through eye movement and face-mesh tracking.',
    description:
      'A fork of GazeTracking that implements an assistive communication system using eye gaze. This project enables users to build sentences and communicate through eye movements, particularly beneficial for individuals with limited mobility. Built with React, TypeScript, and MediaPipe face-mesh detection.',
    cardSummary:
      'An assistive communication system that lets users build phrases through eye movement and face-mesh tracking.',
    image: eyetrackingImage,
    mediaFit: 'cover',
    category: 'Applied Products',
    technologies: ['React', 'TypeScript', 'MediaPipe', 'Computer Vision', 'Accessibility'],
    badges: ['Accessibility', 'Computer Vision'],
    date: '2024',
    role: 'Builder',
    links: [{ label: 'GitHub', href: 'https://github.com/har5h1l/GazeTracking', variant: 'secondary' }],
  },
  {
    slug: 'focusgrid',
    type: 'project',
    title: 'FocusGrid',
    summary:
      'An AI-assisted study-planning app for generating and refining student schedules.',
    description:
      'A minimalist study planning application that helps students create and optimize their study schedules using AI. Built with React, TypeScript, and integrated with OpenRouter AI for intelligent study plan optimization. Currently a work in progress.',
    cardSummary:
      'An AI-assisted study-planning app for generating and refining student schedules.',
    category: 'Applied Products',
    technologies: ['React', 'TypeScript', 'AI', 'Web App'],
    badges: ['Work in Progress'],
    date: '2025',
    role: 'Builder',
    links: [{ label: 'GitHub', href: 'https://github.com/har5h1l/FocusGrid', variant: 'secondary' }],
  },
  {
    slug: 'nutritional-behavior-analytics',
    type: 'project',
    title: 'Nutritional Behavior Analytics',
    summary:
      'A survey-driven analytics project studying local nutrition habits and health awareness patterns.',
    description:
      'Designed and conducted a comprehensive survey to identify local nutrition habits and patterns. Collected data from diverse demographics and performed statistical analysis to uncover insights about dietary behaviors and health awareness.',
    cardSummary:
      'A survey-driven analytics project studying local nutrition habits and health awareness patterns.',
    category: 'Explorations & Early Work',
    technologies: ['Data Analysis', 'Statistics', 'Python', 'Nutrition'],
    badges: ['Health Data'],
    date: '2024',
    role: 'Researcher',
    links: [{ label: 'GitHub', href: 'https://github.com/har5h1l/NutritionProject', variant: 'secondary' }],
  },
  {
    slug: 'nutritional-recommendation-system-development',
    type: 'project',
    title: 'Nutritional Recommendation System Development',
    summary:
      'An early-stage recommendation system for personalized nutrition guidance.',
    description:
      'Currently developing a recommendation system to provide personalized nutritional guidance. This ongoing project involves researching neural network architectures specialized for recommendation systems, with plans to deploy as a user-friendly application.',
    cardSummary:
      'An early-stage recommendation system for personalized nutrition guidance.',
    category: 'Explorations & Early Work',
    technologies: ['Machine Learning', 'Python', 'Neural Networks', 'Nutrition'],
    badges: ['Work in Progress'],
    date: '2024-2025',
    role: 'Builder',
  },
]

export const researchProjects = allProjects.filter((project) => project.type === 'research')
export const portfolioProjects = allProjects.filter((project) => project.type === 'project')
