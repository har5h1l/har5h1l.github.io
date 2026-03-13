import { ProjectActions } from '@/components/ProjectActions'
import { ProjectVisual } from '@/components/ProjectVisual'
import { getProjectMediaClasses } from '@/lib/utils'

export const ProjectCard = ({ project, children, compact = false, hideImage = false }) => {
  const description = project.cardSummary || project.summary || project.description

  return (
    <article className="editorial-card flex self-start flex-col overflow-hidden">
      {!hideImage && project.image ? (
        <div className={`${compact ? 'aspect-[4/3]' : 'aspect-[5/4]'} overflow-hidden border-b border-border bg-muted/70`}>
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full transition-transform duration-500 hover:scale-[1.02] ${getProjectMediaClasses(project)}`}
          />
        </div>
      ) : !hideImage && (project.type === 'research' || project.visualTags?.length) ? (
        <div className={`${compact ? 'aspect-[4/3]' : 'aspect-[5/4]'} flex overflow-hidden border-b border-border`}>
          <ProjectVisual project={project} compact={compact} fillHeight />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="section-eyebrow">{project.date || project.category || project.researchCategory}</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
          </div>
          {project.role && (
            <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {project.role}
            </span>
          )}
        </div>

        {project.kicker && <p className="mt-3 text-sm font-medium text-foreground/75">{project.kicker}</p>}
        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{description}</p>

        {!!project.badges?.length && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground/75">
                {badge}
              </span>
            ))}
          </div>
        )}

        <ProjectActions project={project} className="mt-6">
          {children}
        </ProjectActions>
      </div>
    </article>
  )
}
