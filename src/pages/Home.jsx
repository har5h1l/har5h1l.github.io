import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, Mail, MessageSquare, Brain, FlaskConical, Users, Calendar, PlayCircle, Zap } from 'lucide-react'
import riseTennisLogo from '@/assets/images/risetennis.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import harshilImage1 from "@/assets/images/harshil_pfp.jpg";
import freakonomicsImage from '@/assets/images/freakonomics.jpg'
import websiteTutorialImage from '@/assets/images/website_tutorial.webp'
import housePricesImage from '@/assets/images/HousePricesArticle.webp'
import windows11Image from '@/assets/images/windows11.webp'
import actinfImage from '@/assets/images/actinf1_2.jpeg'
import polymathImage from '@/assets/images/polymath_article_image.png'
import { allProjects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { useTheme } from '@/components/theme-provider';

// Function to parse date string into Date object for consistent sorting
const parseDate = (dateStr) => {
  const months = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  const [month, day, year] = dateStr.split(' ')[1].split(',').join('').split(' ');
  return new Date(year, months[month], parseInt(day));
};

const articles = [
  {
    title: "Explore, Specialize, Repeat: What It Means to Be a Polymath Today",
    description: "Discover the modern approach to becoming a polymath in today's specialized world. Learn how to balance broad exploration with deep expertise and why this matters more than ever in the 21st century.",
    date: "July 3, 2025",
    image: polymathImage,
    tags: ["Personal Development", "Learning", "Polymath"],
    link: "https://medium.com/@harshilshah28/explore-specialize-repeat-what-it-means-to-be-a-polymath-today-b692f8b47c24"
  },
  {
    title: "How to Set Up a Free Windows or Linux Virtual Machine on Azure (Step-by-Step Guide for Beginners)",
    description: "Step-by-step guide to set up a free Windows or Linux virtual machine through Azure on Mac or any OS using free credits.",
    date: "May 18, 2025",
    image: windows11Image,
    tags: ["Cloud Computing", "Tutorial", "Azure"],
    link: "https://medium.com/@harshilshah28/how-to-set-up-a-free-windows-or-linux-virtual-machine-on-azure-step-by-step-guide-for-beginners-2391bce5235a"
  },
  {
    title: "Autonomous Navigation with Active Inference: My Journey So Far",
    description: "A Beginner-Friendly Guide to Active Inference for Autonomous Navigation: Pathfinding with Generative Models and Variational Free Energy",
    date: "May 11, 2025",
    image: actinfImage,
    tags: ["Active Inference", "AI/ML", "Research"],
    link: "https://medium.com/@harshilshah28/autonomous-navigation-with-active-inference-my-journey-so-far-d1852e23cc2a"
  },
  {
    title: "What Freakonomics Taught Me About Incentives, Information, and the Hidden Side of Life",
    description: "Explore Freakonomics by Steven Levitt & Stephen Dubner—learn how data, incentives, and curiosity uncover hidden truths about everyday life.",
    date: "April 20, 2025",
    image: freakonomicsImage,
    tags: ["Economics", "Psychology", "Book Review"],
    link: "https://medium.com/@harshilshah28/what-freakonomics-taught-me-about-incentives-information-and-the-hidden-side-of-life-72d2d6d24f1a"
  },
  {
    title: "Build Your Own Website (Personal Portfolio, Blog, Anything!) Using Just Cursor and GitHub — No Code Needed & 100% Free",
    description: "A beginner-friendly guide to building any website (personal portfolio, blog, anything!) using only Cursor and GitHub Pages: 100% free & no coding.",
    date: "April 18, 2025",
    image: websiteTutorialImage,
    tags: ["Web Development", "Tutorial", "AI Tools"],
    link: "https://medium.com/@harshilshah28/build-a-personal-portfolio-website-using-only-cursor-and-github-for-free-no-coding-164419b86b54"
  },
  {
    title: "Beginner Machine Learning Project: Step-by-Step Guide to Predicting London House Prices",
    description: "A comprehensive guide to building your first machine learning project.",
    date: "Apr 4, 2025",
    image: housePricesImage,
    tags: ["AI/ML", "Guide", "Project"],
    link: "https://medium.com/@harshilshah28/beginner-machine-learning-project-step-by-step-guide-to-predicting-london-house-prices-c4bcb36a9c6c"
  }
]

const featuredProjects = allProjects.filter(p => p.featured === true);

export default function Home() {
  const [isLeadershipExpanded, setIsLeadershipExpanded] = useState(false)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showGitHubChart, setShowGitHubChart] = useState(false) // Hide by default since it's not working
  const { theme } = useTheme()

  // check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Function to determine if we should use dark mode chart
  const isDarkMode = () => {
    if (theme === 'dark') return true
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }

  // Get appropriate chart URL based on theme
  const getChartUrl = () => {
    const timestamp = new Date().toISOString().split('T')[0]; // Cache-busting with current date
    return isDarkMode()
      ? `https://ghchart.rshah.org/39d353/har5h1l?timestamp=${timestamp}` // GitHub's dark mode green
      : `https://ghchart.rshah.org/har5h1l?timestamp=${timestamp}` // Default green for light mode
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero-section" className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src={harshilImage1}
                  alt="Harshil Shah"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="mb-2">
                <span className="text-base sm:text-lg md:text-xl font-medium bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  researcher, learner, thinker
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Hi, I'm Harshil...</h1>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                I'm a student from the Bay Area in California passionate about the development of more intelligent AI and its application to solve critical problems. I'm part of the <strong>Active Inference</strong> community, where I'm conducting research in <strong>autonomous drone navigation</strong> and <strong>multi-agent learning systems</strong>. I've also built projects in other disciplines, including <strong>medicine</strong>, <strong>biology</strong>, and <strong>neuroscience</strong>. Beyond research, I love <strong>debate</strong>, <strong>mathematics</strong>, <strong>reading</strong>, and <strong>tennis</strong>. I consider myself a life-long learner because I'm constantly seeking new knowledge and skills to expand my understanding of the world.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById('more-about-me')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="mt-2"
              >
                More About Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Now Callout Box */}
      <section className="pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What I'm doing now</h2>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/50">
              <p className="mb-4 text-foreground/80">Grinding during Winter Break</p>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-foreground/80">
                <li>
                  <strong>DroneSuite</strong> — seeking reviewers with Active Inference experience
                </li>
                <li>
                  <strong>Multi-agent social learning (trust + ToM)</strong> — seeking mentors/feedback
                </li>
              </ul>
              <p className="text-foreground/90 font-medium">
                If you can review code or give feedback, <a href="mailto:28hshah@gmail.com" className="text-primary hover:underline">contact me</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Recent Activity</h2>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="text-xs sm:text-sm font-medium text-foreground/60 sm:min-w-[120px]">
                    Nov 15, 2025
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-foreground mb-3">
                      Presented "<a href="https://www.shahmaitraresearch.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation</a>" (co-authored with Satyaki Maitra) at the <a href="https://www.activeinference.institute/symposium" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">5th Annual Active Inference Symposium</a>.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          const droneProject = allProjects.find(p =>
                            p.title === "Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation"
                          )
                          setSelectedProject(droneProject)
                        }}
                        className="inline-flex items-center gap-1"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="inline-flex items-center gap-1"
                      >
                        <a
                          href="https://www.youtube.com/live/1q40Jqk1HYs?si=5W1C52U7gNkRb2l0&t=36000"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Watch Recording</span>
                          <PlayCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="text-xs sm:text-sm font-medium text-foreground/60 sm:min-w-[120px]">
                    Jul 29, 2025
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-foreground mb-3">
                      Accepted to present at{' '}
                      <a
                        href="https://iwaiworkshop.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        IWAI (International Workshop on Active Inference)
                      </a>
                      {' '}for October 15-17! My presentation on the 17th will cover{' '}
                      <a
                        href="https://shahmaitraresearch.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        "Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation"
                      </a>
                      {' '}(co-authored with Satyaki Maitra).
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const droneProject = allProjects.find(p =>
                          p.title === "Combining Hierarchical Active Inference with Affordance Theory for Scalable Policy Selection in Autonomous Drone Navigation"
                        )
                        setSelectedProject(droneProject)
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="more-about-me" className="py-8 sm:py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">More About Me</h2>
            
            {/* Content area with cross-fade animation */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait" initial={false}>
                {!isAboutExpanded ? (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.3,
                      ease: 'easeInOut'
                    }}
                  >
                    <p className="text-base sm:text-lg text-foreground/80 mb-3 sm:mb-4 leading-relaxed">
                      I've been learning and applying Active Inference for around a year now (big thanks to <a href="https://activeinference.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Active Inference Institute</a> & my mentor Dr. Friedman). Beyond that, I've been working with mainstream AI, including machine learning models and LLMs. I'm a contributor to <a href="https://www.medarc.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MedArc's fMRI foundational model</a> and built a simple app called <Link to="/projects#wellnessgrid" className="text-primary hover:underline">WellnessGrid</Link> to centralize healthcare information and support chronic disease patients. Recently, I've been getting more involved with GNNs for computational biology research.
                    </p>
                    <p className="text-base sm:text-lg text-foreground/80 mb-3 sm:mb-4 leading-relaxed">
                      Other than research, I love competing in public forum debate (3rd year), playing tennis (6 years) for my school team, <Link to="/reading" className="text-primary hover:underline">reading</Link>, experimenting with recipes and drinks (huge chocolate lover), listening to podcasts, and more. I'm the founder and president of <a href="https://risetennis.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">R.I.S.E. Tennis</a>, a nonprofit organization where we aim to spread tennis to everyone.
                    </p>
                    <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                      Mathematics has been a huge part of my life and I love learning more; it teaches you to think really well. I love interdisciplinary thinking in every aspect of my life; I enjoy learning about topics like psychology, how the brain works, how the world works, and more. One day, I hope to be a research scientist.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.3,
                      ease: 'easeInOut'
                    }}
                    className="space-y-6 sm:space-y-8 text-base sm:text-lg text-foreground/80 leading-relaxed"
                  >
                    {/* Why Research */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">Why Research</h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
                      >
                        There's a strong force pulling me toward research. My favorite moments are unglamorous: I'm pacing in my room, sketching the same system for the millionth time, realizing one assumption is wrong, and redesigning the architecture until it finally clicks. But those are the moments I love. Research is how I think. It's how I turn confusion into something I can test, refine, and trust.
                      </motion.p>
                    </div>

                    {/* What I Keep Coming Back To */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">What I Keep Coming Back To</h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.1 }}
                      >
                        I'm obsessed with intelligence. Real intelligence. I mean the kind that survives real life. The kind that still works when the lighting changes, the data is messy, and you don't have the full picture. I'm drawn to messy reality. Noise, missing information, shifting conditions. The stuff most "clean" models pretend isn't there. I learned early that smooth behavior in a perfect sim can be a lie, and that real intelligence has to include the ability to say, "I don't know yet."
                        <br /><br />
                        That's why I gravitated toward Active Inference. It doesn't treat uncertainty as something to smooth away. It treats it as something you model, carry, and act with. Once I started thinking that way in research, I realized I'd been chasing the same principle everywhere. Debate rounds. Tennis matches. Chemistry labs. Testing, updating, and trying to be wrong in useful ways.
                      </motion.p>
                    </div>

                    {/* How I Move Through The World */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">How I Move Through The World</h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.2 }}
                      >
                        I'm very direction-driven. I usually know what I'm trying to become, and I'm stubborn about aligning my habits with that direction. That's why I love systems. Writing things down. Refining plans. Tracking what changed and why. My Notion space, Harshil's Aesthetic Cafe, is basically an embedded representation of my personality. Part organization. Part curiosity museum. Part "how do I design a life that makes sense." It's where I collect ideas, connect themes across fields, and turn vague motivation into concrete next steps.
                      </motion.p>
                    </div>

                    {/* What Keeps Me Sharp */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">What Keeps Me Sharp</h3>
                      <motion.p
                        className="mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.3 }}
                      >
                        Debate and tennis are my reality checks. They reward the same thing I want in research. Adaptation under pressure. I'm in my third year of competing in Public Forum debate, and I love the grind. I love growing with my partner. I started in middle school after being exposed to an amazing debate coach, and I got hooked. Tournament after tournament, learning from other teams, learning from losses, rebuilding my thinking. Debate taught me to build arguments that survive scrutiny and to name confusion instead of hiding it.
                      </motion.p>
                      <motion.p
                        className="mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.4 }}
                      >
                        I've been playing tennis for six years. Tennis is one of the hardest things I've ever done. It taught me resilience. Reset after a mistake. Stay present. Keep refining. I play on my JV team and recreationally, and I love improving for the sake of improving because it's something I want to prove to myself.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.5 }}
                      >
                        But a huge part of what keeps me sharp is quieter. I genuinely love studying. I'll read research papers for fun. I'll chase new math concepts until they finally make sense. I'll go down rabbit holes on ideas that feel "too hard" at first because the moment they become clear is addictive. That habit of learning is the engine behind everything I do. Slow at first, then suddenly fast. Disciplined and curious.
                      </motion.p>
                    </div>

                    {/* My Goals */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">My Goals</h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.6 }}
                      >
                        One day, I want to have full autonomy over my life. I want to be a researcher I'd look up to, building systems that actually hold up in messy reality. I want a life that's full, not just impressive. A family. Close friends I still make time for. Days that still include reading, thinking, and exploring new directions in my work. I want to still be playing tennis, still learning new things, still moving forward. Enjoying life while staying curious enough to keep becoming someone new.
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="mt-4 sm:mt-6">
              <Button
                onClick={() => {
                  setIsAboutExpanded(!isAboutExpanded)
                }}
                variant={isAboutExpanded ? "outline" : "default"}
                className="text-base sm:text-lg"
                aria-expanded={isAboutExpanded}
                aria-label={isAboutExpanded ? 'Collapse expanded about section' : 'Expand about section'}
              >
                {isAboutExpanded ? 'Collapse' : 'Still curious?'}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-0">
              {/* Active Inference Card */}
              <Link
                to="/projects?filter=Active+Inference"
                className="group flex flex-col items-center text-center gap-3 sm:gap-4 rounded-xl border bg-card text-card-foreground p-4 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-1 w-full sm:max-w-xs lg:max-w-none lg:w-[calc(33.333%-1.5rem)] flex-grow"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Active Inference</h3>
                <p className="text-sm text-foreground/80">
                  Applied this neuroscience-based AI to autonomous navigation and am currently working on real-world drones and multi-agent social learning systems with theory of mind.
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 text-primary flex-shrink-0 transition-colors mt-auto">
                  <Brain size={28} />
                </div>
              </Link>

              {/* Biomedicine Card */}
              <div className="group flex flex-col items-center text-center gap-3 sm:gap-4 rounded-xl border bg-card text-card-foreground p-4 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-1 w-full sm:max-w-xs lg:max-w-none lg:w-[calc(33.333%-1.5rem)] flex-grow">
                <Link to="/projects?filter=Biomedicine" className="text-lg font-semibold text-card-foreground mb-1 hover:text-primary transition-colors">
                  Biomedicine Applications
                </Link>
                <p className="text-sm text-foreground/80">
                  Passionate about AI in healthcare and biology. Built <Link to="/projects#wellnessgrid" className="text-primary hover:underline">WellnessGrid</Link> to centralize healthcare information and support chronic disease patients. Also researching signed GNNs on drug and disease representations.
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 text-primary flex-shrink-0 transition-colors mt-auto">
                  <FlaskConical size={28} />
                </div>
              </div>

              {/* Leadership Card */}
              <div className="group flex flex-col items-center text-center gap-3 sm:gap-4 rounded-xl border bg-card text-card-foreground p-4 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-1 w-full sm:max-w-xs lg:max-w-none lg:w-[calc(33.333%-1.5rem)] flex-grow">
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Leadership</h3>
                <p className="text-sm text-foreground/80">
                  {isLeadershipExpanded ? (
                    <>
                      President and founder of <a href="https://risetennis.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">R.I.S.E. Tennis</a>, leading elementary school debate program for Fremont Debate Academy, President of school's AI Club, and Activities Coordinator for school Neuroscience Club.{' '}
                      <button onClick={() => setIsLeadershipExpanded(false)} className="text-primary/80 hover:text-primary font-medium">(less)</button>
                    </>
                  ) : (
                    <>
                      I've become a capable and experienced leader after founding and leading many initiatives{' '}
                      <button onClick={() => setIsLeadershipExpanded(true)} className="text-primary hover:underline font-medium">... (more)</button>
                    </>
                  )}
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 text-primary flex-shrink-0 transition-colors mt-auto">
                  <Users size={28} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Latest Articles</h2>
            <p className="text-foreground/80">
              Check out my <a href="https://medium.com/@harshilshah28" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Medium articles</a>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[...articles]
              .sort((a, b) => new Date(parseDate(b.date)) - new Date(parseDate(a.date)))
              .slice(0, 3)
              .map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-foreground/80 mb-3 line-clamp-2">
                        {article.description}
                      </p>
                      <p className="text-xs text-foreground/80">
                        {article.date}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline">
              <Link to="/blog" className="inline-flex items-center gap-2">
                See All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Featured Projects */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onShowLinks={(p) => setSelectedProject(p)}
                >
                  <Button size="sm" asChild variant="outline">
                    <Link
                      to={
                        project.title.includes("DroneSuite")
                          ? "/research#dronesuite"
                          : project.title.includes("An Active Inference Approach")
                          ? "/research#active-inference-approach"
                          : `/projects?filter=${encodeURIComponent(project.category)}#${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`
                      }
                      className="text-xs"
                    >
                      Details
                    </Link>
                  </Button>
                </ProjectCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild variant="outline">
              <Link to="/projects" className="inline-flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GitHub Contribution Chart */}
      {showGitHubChart && (
        <section className="py-8 sm:py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">My GitHub Contributions</h2>
              <img
                src={getChartUrl()}
                alt="har5h1l's GitHub chart"
                className="w-full max-w-2xl"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section id="contact" className="py-8 sm:py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Contact Me + More</h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-3xl">
              I'm open to elaborating on my research or hearing about any opportunities. Feel free to reach out through any of the channels below. You can also find more about me and my work through these links:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Get In Touch</h3>
                <a
                  href="mailto:28hshah@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>28hshah@gmail.com</span>
                </a>
                <a
                  href="https://discordapp.com/users/harshils"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare className="h-5 w-5 flex-shrink-0" />
                  <span>harshils (Discord)</span>
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Find Me Online</h3>
                <a
                  href="https://github.com/har5h1l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/28hshah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://medium.com/@harshilshah28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 1.2-.31 2.15-.93 2.85-.62.7-1.38 1.05-2.27 1.05-.89 0-1.62-.35-2.2-1.04-.57-.7-.86-1.66-.86-2.86s.29-2.16.86-2.86c.58-.7 1.31-1.04 2.2-1.04.89 0 1.65.35 2.27 1.05.62.7.93 1.66.93 2.86zM24 12c0 1.12-.12 2.05-.37 2.78-.24.73-.54 1.26-.89 1.59-.35.33-.7.5-1.04.5-.24 0-.45-.08-.64-.24-.19-.16-.28-.44-.28-.85v-7.6c0-.4.09-.68.28-.85.19-.17.4-.25.64-.25.34 0 .69.17 1.04.5.35.33.65.86.89 1.59.25.73.37 1.66.37 2.78z"></path>
                  </svg>
                  <span>Medium</span>
                </a>
                <a
                  href="https://shahmaitraresearch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5 flex-shrink-0" />
                  <span>Research Page (Shah-Maitra)</span>
                </a>
                <a
                  href="https://risetennis.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <img
                    src={riseTennisLogo}
                    alt="R.I.S.E. Tennis"
                    className="h-5 w-5 flex-shrink-0 object-contain"
                  />
                  <span>R.I.S.E. Tennis</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
