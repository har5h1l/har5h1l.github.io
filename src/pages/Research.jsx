import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ProjectActions } from '@/components/ProjectActions'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading, LinkChip } from '@/components/editorial'
import { Seo } from '@/components/seo'
import { portfolioProjects, researchProjects } from '@/data/projects'
import { getResearchAnchorId } from '@/lib/utils'

const sections = [
  'Active Inference & Multi-Agent Cognition',
  'AI for Biology, Medicine, and Neuroscience',
]

function ResearchEntry({ project }) {
  return (
    <article id={getResearchAnchorId(project.title)} className="rounded-[24px] border border-border bg-card p-6 sm:p-8">
      <p className="section-eyebrow">{project.date || project.researchCategory}</p>
      <h3 className="editorial-heading mt-3 text-3xl text-foreground">{project.title}</h3>
      {project.kicker && <p className="mt-3 text-lg text-foreground/80">{project.kicker}</p>}
      <p className="mt-5 max-w-4xl text-lg leading-9 text-muted-foreground">{project.description}</p>
      <ProjectActions project={project} className="mt-6" />

      {!!project.recognition?.length && (
        <div className="mt-8 border-t border-border pt-6">
          <h4 className="text-lg font-semibold text-foreground">Publications and features</h4>
          <div className="mt-4 space-y-4 text-base text-muted-foreground">
            {project.recognition.map((item) => (
              <div key={item.label}>
                <p className="font-medium text-foreground">{item.label}</p>
                {item.detail && <p className="mt-1 leading-7">{item.detail}</p>}
                {!!item.links?.length && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <LinkChip key={link.href} href={link.href} label={link.label} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default function Research() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const element = document.getElementById(location.hash.replace('#', ''))
    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }, [location.hash])

  return (
    <div className="page-shell">
      <Seo
        title="Research & Projects | Harshil Shah"
        description="Research and selected projects by Harshil Shah across active inference, autonomous navigation, theory of mind, and AI for biology and medicine."
        keywords="Harshil Shah research and projects, active inference, drone navigation, theory of mind, GNNs, neuroscience"
      />

      <section className="content-grid py-10 sm:py-14">
        <SectionHeading
          eyebrow="Research & Projects"
          title="Research & Projects"
          description="My research focuses on developing more intelligent AI systems that can operate robustly in uncertain, real-world environments. I work primarily within the Active Inference framework, applying it to autonomous navigation problems and multi-agent systems with theory of mind. I'm also exploring how deep learning can advance our understanding of biological systems, particularly through graph neural networks for computational biology and foundational models for neuroscience."
        />
      </section>

      <section className="content-grid pb-16 sm:pb-24">
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => {
            const items = researchProjects.filter((project) => project.researchCategory === section)

            return (
              <Motion.section
                key={section}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35, delay: sectionIndex * 0.04 }}
              >
                <h2 className="editorial-heading text-3xl text-foreground">{section}</h2>
                <div className="mt-8 space-y-6">
                  {items.map((project) => (
                    <ResearchEntry key={project.slug} project={project} />
                  ))}
                </div>
              </Motion.section>
            )
          })}
        </div>
      </section>

      <section className="content-grid pb-16 sm:pb-24">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="A simple list of other projects and initiatives."
        />
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <Motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <ProjectCard project={project} hideImage />
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
