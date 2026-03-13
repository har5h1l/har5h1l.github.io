import { motion as Motion } from 'framer-motion'
import { publicationSections } from '@/data/publications'
import { SectionHeading, LinkChip } from '@/components/editorial'
import { Seo } from '@/components/seo'

export default function Publications() {
  return (
    <div className="page-shell">
      <Seo
        title="Publications | Harshil Shah"
        description="Publications, conference papers, posters, and talks by Harshil Shah across active inference, autonomous systems, and AI for biology."
        keywords="Harshil Shah publications, active inference papers, drone navigation research, theory of mind AI, AI biology"
      />

      <section className="content-grid py-10 sm:py-14">
        <SectionHeading
          eyebrow="Publications"
          title="Publications, posters, and talks"
        />
      </section>

      <section className="content-grid pb-16 sm:pb-24">
        <div className="space-y-10">
          {publicationSections.map((section, sectionIndex) => (
            <Motion.section
              key={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: sectionIndex * 0.05 }}
              className="rounded-[24px] border border-border bg-card p-6 shadow-[0_10px_30px_rgba(22,34,44,0.05)] sm:p-8"
            >
              <h2 className="editorial-heading text-2xl text-foreground">{section.title}</h2>
              <div className="mt-6 space-y-8">
                {section.items.map((item) => (
                  <article key={item.title} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-3xl">
                        <h2 className="editorial-heading text-xl text-foreground">{item.title}</h2>
                        <p className="mt-2 text-sm font-medium text-foreground/75">{item.venue}</p>
                        {item.authors && (
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">With {item.authors}</p>
                        )}
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {item.role}
                      </span>
                    </div>

                    {item.summary && (
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{item.summary}</p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <LinkChip key={link.href} href={link.href} label={link.label} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </Motion.section>
          ))}
        </div>
      </section>
    </div>
  )
}
