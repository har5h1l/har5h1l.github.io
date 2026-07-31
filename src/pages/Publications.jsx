import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { publicationSections } from "@/data/publications";
import { SectionHeading, LinkChip } from "@/components/editorial";
import { Seo } from "@/components/seo";

export default function Publications() {
  return (
    <div className="page-shell">
      <Seo
        title="Publications | Harshil Shah"
        description="Papers, posters, and presentations from Harshil Shah’s research in Active Inference, autonomous systems, and social cognition."
        keywords="Harshil Shah publications, Active Inference papers, autonomous systems, social cognition"
      />
      <section className="content-grid py-10 sm:py-14">
        <SectionHeading
          eyebrow="Research outputs"
          title="Publications"
          description="Papers, posters, and presentations arising from my research."
        />
      </section>
      <section className="content-grid pb-16 sm:pb-24">
        <div className="space-y-16">
          {publicationSections.map((section, sectionIndex) => (
            <Motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: sectionIndex * 0.05 }}
              className="scroll-mt-32 border-t border-border pt-12 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="editorial-heading text-2xl text-foreground">
                  {section.title}
                </h2>
                <Link
                  to={`/research#${section.id}`}
                  className="text-sm text-primary underline hover:no-underline"
                >
                  Back to research area
                </Link>
              </div>
              <div className="mt-6 space-y-6">
                {section.items.map((item) => (
                  <article
                    key={`${item.title}-${item.venue}`}
                    className="border-t border-border pt-6 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="max-w-3xl">
                        <h3 className="editorial-heading text-xl text-foreground">
                          {item.title}
                        </h3>
                        {item.authors && (
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {item.authors}
                          </p>
                        )}
                        <p className="mt-2 text-sm font-medium text-foreground/75">
                          {item.venue}
                        </p>
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <LinkChip
                          key={link.href}
                          href={link.href}
                          label={link.label}
                        />
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
  );
}
