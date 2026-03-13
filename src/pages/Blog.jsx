import { motion as Motion } from 'framer-motion'
import { Seo } from '@/components/seo'
import { SectionHeading } from '@/components/editorial'
import { writingArticles } from '@/data/writing'

function parseDate(dateString) {
  return new Date(dateString)
}

const sortedArticles = [...writingArticles].sort((a, b) => parseDate(b.date) - parseDate(a.date))

export default function Blog() {
  return (
    <div className="page-shell">
      <Seo
        title="Blog | Harshil Shah"
        description="Essays, tutorials, and reflections by Harshil Shah on active inference, AI, learning, and interdisciplinary thinking."
        keywords="Harshil Shah blog, active inference writing, AI essays, research writing"
      />

      <section className="content-grid py-10 sm:py-14">
        <SectionHeading
          eyebrow="Blog"
          title="Blog & articles"
          description="Writing is part of how I clarify ideas for myself and make them more accessible to other people."
        />
      </section>

      <section className="content-grid pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {sortedArticles.map((article, index) => (
            <Motion.a
              key={article.slug}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="editorial-card overflow-hidden hover:no-underline"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted/70">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="section-eyebrow">{article.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">{article.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{article.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground/75">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.a>
          ))}
        </div>
      </section>
    </div>
  )
}
