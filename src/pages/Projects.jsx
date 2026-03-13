import { useEffect, useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/editorial'
import { Seo } from '@/components/seo'
import { portfolioProjects } from '@/data/projects'

const categories = ['All', 'Applied Products', 'Leadership & Service', 'Explorations & Early Work']

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const filter = searchParams.get('filter')
    const mappedFilter =
      filter === 'Biomedicine' ? 'Applied Products' :
      filter === 'Other' ? 'Explorations & Early Work' :
      filter
    setSelectedCategory(mappedFilter && categories.includes(mappedFilter) ? mappedFilter : 'All')
  }, [searchParams])

  const visibleProjects = useMemo(() => {
    if (selectedCategory === 'All') return portfolioProjects
    return portfolioProjects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  const featuredProjects = portfolioProjects.filter((project) => project.featured)

  function handleCategoryChange(category) {
    setSelectedCategory(category)
    setSearchParams(category === 'All' ? {} : { filter: category })
  }

  return (
    <div className="page-shell">
      <Seo
        title="Projects | Harshil Shah"
        description="Applied products, service initiatives, and early-stage explorations by Harshil Shah across accessibility, community, and AI."
        keywords="Harshil Shah projects, RISE Tennis, accessibility, student projects, AI"
      />

      <section className="content-grid py-10 sm:py-14">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Product work, leadership, and other non-research projects."
        />
      </section>

      <section className="content-grid pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category ? 'bg-foreground text-background' : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {selectedCategory === 'All' && featuredProjects.length > 0 && (
        <section className="content-grid py-10">
          <SectionHeading eyebrow="Featured" title="Featured projects" />
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.slug} id={project.slug}>
                <ProjectCard project={project} hideImage />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="content-grid py-10 sm:pb-24">
        <div className="grid items-start gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Motion.div
              key={project.slug}
              id={project.slug}
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
