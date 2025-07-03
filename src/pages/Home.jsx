import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, Mail, MessageSquare, Brain, FlaskConical, Users } from 'lucide-react'
import riseTennisLogo from '@/assets/images/risetennis.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import harshilImage1 from "@/assets/images/harshil_pfp.jpeg";
import freakonomicsImage from '@/assets/images/freakonomics.jpg'
import websiteTutorialImage from '@/assets/images/website_tutorial.webp'
import housePricesImage from '@/assets/images/HousePricesArticle.webp'
import windows11Image from '@/assets/images/windows11.webp'
import actinfImage from '@/assets/images/actinf1_2.jpeg'
import polymathImage from '@/assets/images/polymath_article_image.png'
import { allProjects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
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

const featuredProjects = allProjects.filter(p => 
  p.title === 'Hierarchical Active Inference for Autonomous Drone Navigation in Microsoft AirSim with Environmentally Aware Adaptive Planning' ||
  p.title === 'WellnessGrid'
);

export default function Home() {
  const [isLeadershipExpanded, setIsLeadershipExpanded] = useState(false)
  const { theme } = useTheme()
  
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
    return isDarkMode() 
      ? 'https://ghchart.rshah.org/39d353/har5h1l' // GitHub's dark mode green
      : 'https://ghchart.rshah.org/har5h1l' // Default green for light mode
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero-section" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
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
                <span className="text-xl font-medium bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  researcher, developer, learner
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Harshil...</h1>
              <p className="text-lg leading-relaxed mb-6">
                I'm a student from the Bay Area passionate about AI's ability to solve scientific challenges. I've applied <strong>active inference</strong> and <strong>machine learning</strong> and am passionate about <strong>medicine</strong>, <strong>biology</strong>, and <strong>neuroscience</strong>. Other than research, I enjoy reading, writing, and trying various recipes. I consider myself a life-long learner because I'm constantly seeking new knowledge and skills to expand my understanding of the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="mt-8 flex flex-wrap justify-center gap-6 px-4 sm:px-0">
              {/* Active Inference Card */}
              <Link 
                to="/projects?filter=Active+Inference" 
                className="group flex flex-col items-center text-center gap-4 rounded-xl border bg-card text-card-foreground p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-1 w-full sm:max-w-xs lg:max-w-none lg:w-[calc(33.333%-1.5rem)] flex-grow"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Active Inference</h3>
                <p className="text-sm text-foreground/80">
                  Applied this neuroscience-based AI to autonomous navigation and am currently working on real-world drones.
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 text-primary flex-shrink-0 transition-colors mt-auto">
                  <Brain size={28} />
                </div>
              </Link>

              {/* Biomedicine Card */}
              <Link 
                to="/projects?filter=Biomedicine" 
                className="group flex flex-col items-center text-center gap-4 rounded-xl border bg-card text-card-foreground p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-1 w-full sm:max-w-xs lg:max-w-none lg:w-[calc(33.333%-1.5rem)] flex-grow"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Biomedicine Applications</h3>
                <p className="text-sm text-foreground/80">
                  Passionate about AI in healthcare and biology. Currently building an app to centralize healthcare information and support chronic disease patients.
                </p>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 text-primary flex-shrink-0 transition-colors mt-auto">
                  <FlaskConical size={28} />
                </div>
              </Link>

              {/* Leadership Card */}
              <div className="group flex flex-col items-center text-center gap-4 rounded-xl border bg-card text-card-foreground p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-1 w-full sm:max-w-xs lg:max-w-none lg:w-[calc(33.333%-1.5rem)] flex-grow">
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Leadership</h3>
                <p className="text-sm text-foreground/80">
                  {isLeadershipExpanded ? (
                    <>
                      President and founder of numerous organizations like <a href="https://risetennis.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">R.I.S.E. Tennis</a>, Empower Debate Bay Area chapter, leading elementary school debate program for Fremont Debate Academy, and Activities Coordinator for school Neuroscience Club.{' '}
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
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Latest Articles</h2>
            <p className="text-foreground/80">
              Check out my <a href="https://medium.com/@harshilshah28" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Medium articles</a>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-xs text-foreground/60">
                      {project.date}
                    </span>
                    <div className="flex gap-2">
                      {project.github && project.github !== '#' && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code
                          </a>
                        </Button>
                      )}
                      <Button size="sm" asChild>
                        <Link 
                          to={`/projects?filter=${encodeURIComponent(project.category)}#${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
                          className="text-xs"
                        >
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">My GitHub Contributions</h2>
            <img 
              src={getChartUrl()} 
              alt="har5h1l's GitHub chart" 
              className="w-full max-w-2xl" 
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Contact Me + More</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl">
              I'm open to elaborating on my research or hearing about any opportunities. Feel free to reach out through any of the channels below. You can also find more about me and my work through these links:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
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
                <h3 className="text-xl font-semibold mb-3">Find Me Online</h3>
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
    </div>
  )
}
