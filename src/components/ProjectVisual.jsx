import { cn } from '@/lib/utils'

function getVisualTags(project) {
  return (project.visualTags || project.badges || project.technologies || []).slice(0, 4)
}

export function ProjectVisual({ project, className = '', compact = false, fillHeight = false }) {
  const tags = getVisualTags(project)
  const note = project.visualNote || project.summary || project.description

  // minimal block for card: no duplicate date/tags/note, just icon + short line
  if (fillHeight) {
    return (
      <div
        className={cn(
          'relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden border-0 bg-[radial-gradient(circle_at_top_left,rgba(33,84,133,0.16),transparent_34%),linear-gradient(145deg,rgba(242,245,247,0.98),rgba(232,237,241,0.9))] p-5',
          className
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_62%,rgba(33,84,133,0.06)_100%)]" />
        <div className="relative flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">More info coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden border-0 bg-[radial-gradient(circle_at_top_left,rgba(33,84,133,0.16),transparent_34%),linear-gradient(145deg,rgba(242,245,247,0.98),rgba(232,237,241,0.9))] p-5',
        'rounded-[24px] border border-border',
        compact ? 'min-h-[180px]' : 'min-h-[320px] sm:min-h-[360px]',
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_62%,rgba(33,84,133,0.06)_100%)]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="space-y-3">
          <p className="section-eyebrow">{project.date || project.category || project.researchCategory}</p>
          <div className="flex max-w-sm flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative max-w-md">
          <div className="mb-4 h-px w-20 bg-primary/35" />
          <p className={cn('text-pretty text-foreground/85', compact ? 'text-sm leading-6' : 'text-base leading-7 sm:text-lg sm:leading-8')}>
            {note}
          </p>
        </div>
      </div>
    </div>
  )
}
