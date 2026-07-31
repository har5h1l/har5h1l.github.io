import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  Github,
  Globe2,
  Linkedin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import harshilImage from "@/assets/images/harshil_pfp.jpg";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo";
import {
  beyondTheLab,
  contactIntro,
  homeHero,
  profileLinks,
  researchDirection,
} from "@/data/siteContent";
import { featuredResearch } from "@/data/research";
import { updates } from "@/data/updates";

function DiscordIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      data-testid="discord-icon"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

const profileIcons = {
  mail: Mail,
  discord: DiscordIcon,
  github: Github,
  linkedin: Linkedin,
  medium: BookOpenText,
  globe: Globe2,
};

function SelectedResearchCard({ domain }) {
  const autonomous = domain.id === "autonomous-intelligence";
  return (
    <article className="flex min-h-full flex-col rounded-[24px] border border-border bg-card p-6 sm:p-7">
      <p className="section-eyebrow">
        {autonomous ? "AUTONOMOUS SYSTEMS" : "SOCIAL COGNITION"}
      </p>
      <h3 className="editorial-heading mt-3 text-3xl text-foreground">
        {autonomous ? "VAMAI" : "Social Active Inference"}
      </h3>
      <p className="mt-4 text-base leading-8 text-muted-foreground">
        {autonomous
          ? "A training-free hierarchical Active Inference architecture for autonomous UAV navigation in unfamiliar, GNSS-denied environments."
          : "Research on how agents represent confidence in their models of other agents, translate social beliefs into action, and learn from others without simply copying them."}
      </p>
      <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-medium">
        <Link
          to={
            autonomous
              ? "/research#autonomous-intelligence"
              : "/research#social-cognition"
          }
          className="text-primary underline hover:no-underline"
        >
          View research
        </Link>
        {autonomous && (
          <a
            href="https://www.shahmaitraresearch.com/vamai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            Project
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <Seo
        title="Harshil Shah | Intelligent Systems and Efficient Computing"
        description="Student researcher studying intelligent systems, Active Inference, embodied intelligence, social cognition, and efficient computation."
        keywords="Harshil Shah, Active Inference, embodied intelligence, robotics, social cognition, multi-agent systems, efficient computation, probabilistic computing, thermodynamic computing"
      />
      <section className="hero-section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid items-start gap-6 md:grid-cols-3 md:gap-8">
            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="md:col-span-1"
            >
              <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_14px_50px_rgba(22,34,44,0.08)]">
                <img
                  src={harshilImage}
                  alt="Harshil Shah"
                  className="h-full w-full object-cover"
                />
              </div>
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="md:col-span-2"
            >
              <p className="text-base font-medium text-primary sm:text-lg">
                {homeHero.eyebrow}
              </p>
              <h1 className="editorial-heading mt-3 text-4xl text-foreground sm:text-5xl md:text-6xl">
                {homeHero.title}
              </h1>
              <div className="mt-5 space-y-4 text-lg leading-9 text-foreground/85">
                {homeHero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#research-direction">Research Interests</a>
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
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">
              The bigger picture
            </h2>
          </div>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)] sm:p-8">
            <div className="space-y-6">
              {researchDirection.directions.map((direction) => (
                <div
                  key={direction.title}
                  className="border-t border-border pt-6 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {direction.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    {direction.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="beyond-the-lab" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-6">
            <p className="section-eyebrow">More about me</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">
              Beyond the lab
            </h2>
          </div>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)] sm:p-8">
            <div className="space-y-5 text-lg leading-9 text-foreground/85">
              {beyondTheLab.map((paragraph, index) => (
                <p key={index}>
                  {typeof paragraph === "string"
                    ? paragraph
                    : paragraph.map((part, partIndex) =>
                        part.type === "link" ? (
                          <a
                            key={partIndex}
                            href={part.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:no-underline"
                          >
                            {part.value}
                          </a>
                        ) : (
                          part.value
                        ),
                      )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="updates" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Latest</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">
              Recent updates
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {updates.slice(0, 3).map((update) => (
              <article
                key={update.title}
                data-testid="homepage-update"
                className="rounded-[24px] border border-border bg-card p-5 sm:p-6"
              >
                <p className="section-eyebrow">{update.date}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {update.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {update.description}
                </p>
                {update.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-medium text-primary underline hover:no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/updates">
                View all updates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section id="selected-research" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">RESEARCH</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">
              Current research
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredResearch.map((domain) => (
              <SelectedResearchCard key={domain.id} domain={domain} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/research" className="inline-flex items-center gap-2">
                Explore all research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section id="writing" className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Writing</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">
              Notes and essays
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">
              I publish new essays and research reflections on Substack. My
              earlier technical writing and tutorials remain available on
              Medium.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a
                href="https://substack.com/@harshilshah28"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Substack
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://medium.com/@harshilshah28"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Medium
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section id="contact" className="py-10 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="section-eyebrow">Contact me + more</p>
            <h2 className="editorial-heading mt-2 text-3xl text-foreground sm:text-4xl">
              Let&apos;s connect
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-muted-foreground">
              {contactIntro}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Get In Touch", ["mail", "discord"]],
              ["Find Me Online", null],
            ].map(([title, icons]) => (
              <div
                key={title}
                className="rounded-[28px] border border-border bg-card p-6 shadow-[0_12px_40px_rgba(22,34,44,0.06)]"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <div className="mt-5 space-y-4">
                  {profileLinks
                    .filter((item) =>
                      icons
                        ? icons.includes(item.icon)
                        : !["mail", "discord"].includes(item.icon),
                    )
                    .map((item) => {
                      const Icon = profileIcons[item.icon] || Globe2;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          target={
                            item.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            item.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="flex items-center gap-3 text-foreground hover:no-underline hover:text-primary"
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <span>
                            {item.icon === "discord"
                              ? item.note
                              : item.label === "Email"
                                ? "28hshah@gmail.com"
                                : item.label}
                          </span>
                        </a>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
