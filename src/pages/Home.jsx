import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MessageSquare,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import harshilImage from '@/assets/images/harshil_pfp.jpg'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'
import { Seo } from '@/components/seo'
import { beyondTheLab, contactIntro, homeHero, profileLinks, researchDirection } from '@/data/siteContent'
import { allProjects } from '@/data/projects'
import { updates } from '@/data/updates'

const featuredProjects = allProjects.filter((project) => project.featured)

const profileIcons = {
  mail: Mail,
  'message-square': MessageSquare,
  github: Github,
  linkedin: Linkedin,
  medium: BookOpenText,
  globe: Globe2,
}

export default function Home() {
  return (
    <div className="page-shell">
      <Seo
        title="Harshil Shah | Intelligent Systems and Efficient Computing"
        description="Student researcher exploring NeuroAI, Active Inference, embodied intelligence, robotics, multi-agent cognition, and efficient computing paradigms."
        keywords="Harshil Shah, NeuroAI, Active Inference, embodied intelligence, robotics, multi-agent cognition, efficient computing, probabilistic computing, neuromorphic computing"
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
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#research-direction">Research Direction</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/publications">Publications</Link>
                </Button>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <section id="research-direction" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">More about me</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">The bigger picture</h2>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)] sm:p-8">
            <div className="text-lg leading-9 text-foreground/85">
              <div className="space-y-6">
                {researchDirection.directions.map((direction) => (
                  <div key={direction.title} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
                    <h3 className="text-xl font-semibold text-foreground">{direction.title}</h3>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">{direction.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beyond-the-lab" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-6">
            <p className="section-eyebrow">More about me</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Beyond the lab</h2>
          </div>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)] sm:p-8">
            <div className="space-y-5 text-lg leading-9 text-foreground/85">
              {beyondTheLab.map((paragraph, index) => (
                <p key={index}>
                  {typeof paragraph === 'string'
                    ? paragraph
                    : paragraph.map((part, partIndex) =>
                        part.type === 'link' ? (
                          <a key={partIndex} href={part.href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                            {part.value}
                          </a>
                        ) : (
                          part.value
                        )
                      )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="updates" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8"><p className="section-eyebrow">Latest</p><h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Recent updates</h2></div>
          <div className="grid gap-5 md:grid-cols-2">{updates.slice(0, 4).map((update) => <article key={update.title} data-testid="homepage-update" className="rounded-[24px] border border-border bg-card p-5 sm:p-6"><p className="section-eyebrow">{update.date}</p><h3 className="mt-3 text-xl font-semibold text-foreground">{update.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{update.description}</p>{update.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-medium text-primary underline hover:no-underline">{link.label}</a>)}</article>)}</div>
          <div className="mt-8 text-center"><Button asChild variant="outline"><Link to="/updates">View all updates<ArrowRight className="h-4 w-4" /></Link></Button></div>
        </div>
      </section>

      <section id="selected-work" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Featured projects</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Selected work</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline"><Link to="/research" className="inline-flex items-center gap-2">View All Projects<ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section id="writing" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Writing</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">Notes and essays</h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">I publish new essays and research reflections on Substack. My earlier technical writing and tutorials remain available on Medium.</p>
          </div>
          <div className="flex flex-wrap gap-3"><Button asChild variant="outline"><a href="https://substack.com/@harshilshah28" target="_blank" rel="noopener noreferrer">Read on Substack</a></Button><Button asChild variant="outline"><a href="https://medium.com/@harshilshah28" target="_blank" rel="noopener noreferrer">Browse Medium</a></Button></div>
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
                        <Icon className="h-5 w-5 flex-shrink-0" />
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
