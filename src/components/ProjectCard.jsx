import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const ProjectCard = ({ project, onMoreInfo, isActInf }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-foreground/80 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3 mt-auto items-center">
        {project.github && project.github !== '#' && (
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {isActInf && (
          <Button onClick={() => onMoreInfo(project)} size="sm">
            More Info
          </Button>
        )}
      </div>
    </div>
  )
}
