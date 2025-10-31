import { ExternalLink, Github, Star, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef, useState } from 'react'

// Helper to render text with **bold** markdown
const renderDescription = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) => 
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export const ProjectCard = ({ project, onMoreInfo, isActInf }) => {
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const descRef = useRef(null)

  // Fixed height overflow detection
  useEffect(() => {
    if (!descRef.current) return
    
    const checkOverflow = () => {
      const el = descRef.current
      if (!el) return
      
      // Check if content exceeds the fixed max height (140px)
      const hasOverflow = el.scrollHeight > 140
      setIsOverflowing(hasOverflow)
    }

    // Check after a brief delay to ensure rendering is complete
    const timer = setTimeout(checkOverflow, 150)
    
    return () => clearTimeout(timer)
  }, [project.description])

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-border">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold flex-1">{project.title}</h3>
        {project.featured && (
          <Badge variant="default" className="ml-2 flex items-center gap-1 flex-shrink-0">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </Badge>
        )}
      </div>
      <div className="mb-4 flex-grow">
        <div
          ref={descRef}
          className="text-foreground/80 text-sm leading-relaxed"
          style={{
            maxHeight: expanded ? 'none' : '140px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 7,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {renderDescription(project.description)}
        </div>
        {(isOverflowing || expanded) && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:underline text-sm mt-1 inline-block"
          >
            {expanded ? '(less)' : '(more)'}
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        {project.link && (
          <Button asChild variant="default" size="sm">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Research Page
            </a>
          </Button>
        )}
        {project.video && (
          <Button asChild variant="default" size="sm">
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Video Demo
            </a>
          </Button>
        )}
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
