import { ArrowUpRight } from 'lucide-react'

export function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="editorial-heading text-3xl sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>}
    </div>
  )
}

export function LinkChip({ href, label, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary hover:no-underline ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  )
}
