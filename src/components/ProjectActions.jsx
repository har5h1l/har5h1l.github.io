import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'react-router-dom'
import { getResearchAnchorId } from '@/lib/utils'

function splitLinks(project) {
  if (project.links?.length) {
    return {
      primary: project.links.filter((link) => link.variant !== 'secondary'),
      secondary: project.links.filter((link) => link.variant === 'secondary'),
    }
  }

  const fallback = []

  if (project.link) {
    fallback.push({ label: 'Project', href: project.link, variant: 'primary' })
  }

  if (project.video) {
    fallback.push({ label: 'Video', href: project.video, variant: 'primary' })
  }

  if (project.github) {
    fallback.push({ label: 'GitHub', href: project.github, variant: 'secondary' })
  }

  return {
    primary: fallback.filter((link) => link.variant !== 'secondary'),
    secondary: fallback.filter((link) => link.variant === 'secondary'),
  }
}

export function ProjectActions({ project, className = '', children }) {
  const location = useLocation()
  const isOnResearchPage = location.pathname === '/research'
  const { primary, secondary } = splitLinks(project)

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {!isOnResearchPage && project.type === 'research' && (
        <Button asChild size="sm">
          <Link to={`/research#${getResearchAnchorId(project.title)}`}>Read research</Link>
        </Button>
      )}

      {primary.map((link) => (
        <Button key={link.href} asChild size="sm">
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </Button>
      ))}

      {secondary.map((link) => (
        <Button key={link.href} asChild size="sm" variant="outline">
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </Button>
      ))}

      {children}
    </div>
  )
}
