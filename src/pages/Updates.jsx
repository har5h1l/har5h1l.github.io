import { motion as Motion } from 'framer-motion'
import { LinkChip, SectionHeading } from '@/components/editorial'
import { Seo } from '@/components/seo'
import { updates } from '@/data/updates'

export default function Updates() {
  return <div className="page-shell">
    <Seo title="Updates | Harshil Shah" description="Research, publication, presentation, academic, and project milestones from Harshil Shah." />
    <section className="content-grid py-10 sm:py-14"><SectionHeading eyebrow="Timeline" title="Updates" headingLevel={1} description="Selected milestones from my research, presentations, academic programs, projects, and community work." /></section>
    <section className="content-grid pb-16 sm:pb-24"><div className="space-y-5">{updates.map((update, index) => <Motion.article key={`${update.date}-${update.title}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.03 }} className="rounded-[24px] border border-border bg-card p-6 sm:p-7">
      <p className="section-eyebrow">{update.date}</p><h2 className="editorial-heading mt-3 text-2xl text-foreground">{update.title}</h2><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{update.description}</p>
      {update.links?.length ? <div className="mt-5 flex flex-wrap gap-2">{update.links.map((link) => <LinkChip key={link.href} {...link} />)}</div> : null}
    </Motion.article>)}</div></section>
  </div>
}
