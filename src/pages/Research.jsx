import { motion as Motion } from "framer-motion";
import { SectionHeading, LinkChip } from "@/components/editorial";
import { Seo } from "@/components/seo";
import { researchDomains } from "@/data/research";

function ResearchEntry({ entry, index }) {
  return (
    <article
      className={
        entry.secondary || index > 0
          ? "border-t border-border px-5 py-6 sm:px-6"
          : "px-5 py-6 sm:px-6"
      }
    >
      <p className="section-eyebrow">{entry.status}</p>
      <h3
        className={`editorial-heading mt-2 text-foreground ${
          entry.secondary ? "text-xl sm:text-2xl" : "text-2xl"
        }`}
      >
        {entry.title}
      </h3>
      {entry.subtitle && (
        <p className="mt-2 text-base text-foreground/80">{entry.subtitle}</p>
      )}
      {entry.supportingTitle && (
        <p className="mt-2 text-sm text-muted-foreground">
          {entry.supportingTitle}
        </p>
      )}
      {entry.byline && (
        <p className="mt-2 text-sm text-muted-foreground">{entry.byline}</p>
      )}
      <p className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground">
        {entry.description}
      </p>
      {!!entry.links?.length && (
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.links.map((link) => (
            <LinkChip key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      )}
    </article>
  );
}

export default function Research() {
  return (
    <div className="page-shell">
      <Seo
        title="Research | Harshil Shah"
        description="Harshil Shah’s research in autonomous and embodied intelligence, social cognition, and biomedical AI."
        keywords="Harshil Shah research, autonomous intelligence, embodied intelligence, social cognition, biomedical AI"
      />

      <section className="content-grid py-10 sm:py-14">
        <SectionHeading
          eyebrow="Research"
          title="Research"
          description="My research asks how intelligent systems can form and revise models of their environments and other agents, adapt their behavior, and act under uncertainty. I explore these questions through autonomous robotics, multi-agent systems, and biomedical knowledge graphs, alongside emerging work in probabilistic and thermodynamic computing."
        />
      </section>

      <section className="content-grid pb-16 sm:pb-24">
        <div className="space-y-16">
          {researchDomains.map((domain, index) => (
            <Motion.section
              key={domain.id}
              id={domain.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="scroll-mt-32 border-t border-border pt-12 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="editorial-heading text-3xl text-foreground">
                  {domain.title}
                </h2>
                {domain.status && (
                  <p className="section-eyebrow">{domain.status}</p>
                )}
              </div>
              <div className="mt-5 max-w-4xl space-y-5 text-lg leading-9 text-muted-foreground">
                {domain.overview.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {domain.entries && (
                <div
                  data-testid="research-entry-container"
                  className="mt-8 rounded-[24px] border border-border bg-card"
                >
                  {domain.entries.map((entry, entryIndex) => (
                    <ResearchEntry
                      key={entry.title}
                      entry={entry}
                      index={entryIndex}
                    />
                  ))}
                </div>
              )}
              {domain.outputHref && (
                <div className="mt-7">
                  <LinkChip
                    href={domain.outputHref}
                    label="View related outputs"
                  />
                </div>
              )}
            </Motion.section>
          ))}
        </div>
      </section>
    </div>
  );
}
