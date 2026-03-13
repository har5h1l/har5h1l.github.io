import { useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenText,
  Brain,
  FlaskConical,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MessageSquare,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import harshilImage from '@/assets/images/harshil_pfp.jpg'
import riseTennisLogo from '@/assets/images/risetennis.png'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProjectCard } from '@/components/ProjectCard'
import { Seo } from '@/components/seo'
import { achievements, bioParagraphs, contactIntro, homeHero, profileLinks } from '@/data/siteContent'
import { allProjects } from '@/data/projects'
import { writingArticles } from '@/data/writing'

const featuredProjects = allProjects.filter((project) => project.featured)

const expandedAbout = [
  {
    title: 'Why Research',
    body: "There's a strong force pulling me toward research. My favorite moments are unglamorous: pacing in my room, sketching the same system for the millionth time, realizing one assumption is wrong, and redesigning the architecture until it finally clicks. Those are the moments I love most.",
  },
  {
    title: 'What I Keep Coming Back To',
    body: "I'm obsessed with intelligence that survives real life: systems that still work when the data is messy, the lighting changes, or the full picture is missing. That's a big reason I gravitated toward Active Inference. It treats uncertainty as something you model and act with, not something you pretend away.",
  },
  {
    title: 'What Keeps Me Sharp',
    body: "Debate, tennis, and reading all sharpen the same muscles I care about in research: adaptation under pressure, disciplined curiosity, and the ability to revise your thinking instead of defending a weak assumption forever.",
  },
  {
    title: 'My Goals',
    body: 'Long term, I want to become a researcher building socially aligned AI systems that hold up in messy reality while still leaving room for a full, balanced life outside the lab.',
  },
]

const topicCards = [
  {
    title: 'Active Inference',
    description:
      'Applied this neuroscience-based AI to autonomous navigation and am currently working on real-world drones and multi-agent social learning systems with theory of mind.',
    href: '/research',
    icon: Brain,
  },
  {
    title: 'Biomedicine Applications',
    description:
      'Passionate about AI in healthcare and biology, especially computational biology, neuroscience, and tools that can help in real-world settings.',
    href: '/projects',
    icon: FlaskConical,
  },
  {
    title: 'Leadership',
    description:
      "Founder and president of R.I.S.E. Tennis, with additional leadership experience across school and community initiatives.",
    href: 'https://risetennis.org/',
    external: true,
    icon: Users,
  },
]

const profileIcons = {
  mail: Mail,
  'message-square': MessageSquare,
  github: Github,
  linkedin: Linkedin,
  medium: BookOpenText,
  globe: Globe2,
}

function parseDate(dateString) {
  return new Date(dateString)
}

export default function Home() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const featuredWriting = useMemo(() => [...writingArticles].sort((a, b) => parseDate(b.date) - parseDate(a.date)).slice(0, 3), [])

  return (
    <div className="page-shell">
      <Seo
        title="Harshil Shah | Researcher, Learner, Thinker"
        description="Personal website of Harshil Shah, covering research in active inference, autonomous navigation, multi-agent learning, and projects across medicine, biology, and neuroscience."
        keywords="Harshil Shah, active inference, autonomous navigation, multi-agent learning, biology, medicine, neuroscience"
      />

      <section className="hero-section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid items-start gap-6 md:grid-cols-3 md:gap-8">
            <Motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="md:col-span-1">
              <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_14px_50px_rgba(22,34,44,0.08)]">
                <img src={harshilImage} alt="Harshil Shah" className="h-full w-full object-cover" />
              </div>
            </Motion.div>

            <Motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.08 }} className="md:col-span-2">
              <p className="text-base font-medium text-primary sm:text-lg">{homeHero.eyebrow}</p>
              <h1 className="editorial-heading mt-3 text-4xl text-foreground sm:text-5xl md:text-6xl">{homeHero.title}</h1>
              <p className="mt-5 text-lg leading-9 text-foreground/85">{homeHero.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={() => document.getElementById('more-about-me')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  size="lg"
                >
                  More About Me
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/publications">Publications</Link>
                </Button>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <section id="more-about-me" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">More about me</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">The bigger picture</h2>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)] sm:p-8">
            <div className="space-y-5 text-lg leading-9 text-foreground/85">
              {bioParagraphs.map((paragraph, i) => (
                <p key={i}>
                  {typeof paragraph === 'string'
                    ? paragraph
                    : paragraph.map((part, j) =>
                        part.type === 'link' ? (
                          <a key={j} href={part.href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                            {part.value}
                          </a>
                        ) : (
                          part.value
                        )
                      )}
                </p>
              ))}
            </div>

            {isAboutExpanded && (
              <div className="mt-8 space-y-7 border-t border-border pt-8">
                {expandedAbout.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">{section.body}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <Button variant={isAboutExpanded ? 'outline' : 'default'} onClick={() => setIsAboutExpanded((value) => !value)}>
                {isAboutExpanded ? 'Collapse' : 'Still curious?'}
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {topicCards.map((card) => {
              const Icon = card.icon

              return card.external ? (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="editorial-card flex flex-col gap-4 p-5 hover:no-underline">
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{card.description}</p>
                  <div className="mt-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </a>
              ) : (
                <Link key={card.title} to={card.href} className="editorial-card flex flex-col gap-4 p-5 hover:no-underline">
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{card.description}</p>
                  <div className="mt-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Awards & achievements</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Recent recognition</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-border bg-card p-5 shadow-[0_10px_30px_rgba(22,34,44,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{item.subtitle}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Button key={link.href} size="sm" variant="outline" asChild>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Latest articles</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Writing and reflections</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Check out my{' '}
              <a href="https://medium.com/@harshilshah28" target="_blank" rel="noopener noreferrer">
                Medium articles
              </a>
              .
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredWriting.map((article) => (
              <a key={article.slug} href={article.link} target="_blank" rel="noopener noreferrer" className="editorial-card overflow-hidden hover:no-underline">
                <div className="aspect-video overflow-hidden border-b border-border bg-muted/60">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{article.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">{article.date}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/blog" className="inline-flex items-center gap-2">
                See All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Featured projects</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Selected work</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/projects" className="inline-flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Contact me + more</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Let&apos;s connect</h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">{contactIntro}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)]">
              <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
              <div className="mt-5 space-y-4">
                {profileLinks
                  .filter((item) => item.icon === 'mail' || item.icon === 'message-square')
                  .map((item) => {
                    const Icon = profileIcons[item.icon] || Globe2
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="flex items-center gap-3 text-foreground hover:no-underline hover:text-primary"
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span>{item.icon === 'message-square' ? item.note : item.label === 'Email' ? '28hshah@gmail.com' : item.label}</span>
                      </a>
                    )
                  })}
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)]">
              <h3 className="text-xl font-semibold text-foreground">Find Me Online</h3>
              <div className="mt-5 space-y-4">
                {profileLinks
                  .filter((item) => item.icon !== 'mail' && item.icon !== 'message-square')
                  .map((item) => {
                    const Icon = profileIcons[item.icon] || Globe2
                    return (
                      <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:no-underline hover:text-primary">
                        {item.label === 'R.I.S.E. Tennis' ? (
                          <img src={riseTennisLogo} alt="R.I.S.E. Tennis" className="h-5 w-5 object-contain" />
                        ) : (
                          <Icon className="h-5 w-5 flex-shrink-0" />
                        )}
                        <span>{item.label}</span>
                      </a>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
