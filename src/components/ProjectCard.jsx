import { ExternalLink, Github, Star, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef, useState } from 'react'
import { ProjectActions } from '@/components/ProjectActions';

// Helper to render text with **bold** markdown
const renderDescription = (text) => {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
      )}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export const ProjectCard = ({ project, onShowLinks, children }) => {
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [lineClamp, setLineClamp] = useState(6)
  const descRef = useRef(null)
  const measureRef = useRef(null)

  // responsive line-clamp based on screen size
  useEffect(() => {
    const updateLineClamp = () => {
      const width = window.innerWidth
      if (width < 640) {
        // mobile: 4 lines
        setLineClamp(4)
      } else if (width < 1024) {
        // tablet: 5 lines
        setLineClamp(5)
      } else {
        // desktop: 6 lines
        setLineClamp(6)
      }
    }

    updateLineClamp()
    window.addEventListener('resize', updateLineClamp)
    return () => window.removeEventListener('resize', updateLineClamp)
  }, [])

  // proper overflow detection using hidden measurement element
  useEffect(() => {
    if (!descRef.current || !measureRef.current || expanded) return

    const checkOverflow = () => {
      const clampedEl = descRef.current
      const measureEl = measureRef.current
      if (!clampedEl || !measureEl) return

      // sync width of measurement element with clamped element
      const clampedWidth = clampedEl.offsetWidth
      measureEl.style.width = `${clampedWidth}px`

      // measure natural height without clamping
      const naturalHeight = measureEl.scrollHeight

      // measure clamped element's height
      // with line-clamp, we compare natural height with clamped height
      // get computed styles to calculate expected height for N lines
      const computedStyle = window.getComputedStyle(clampedEl)
      const lineHeight = parseFloat(computedStyle.lineHeight) || parseFloat(computedStyle.fontSize) * 1.5
      const expectedMaxHeight = lineHeight * lineClamp

      // measure actual clamped height
      const clampedHeight = clampedEl.clientHeight

      // content is overflowing if natural height significantly exceeds the expected max height
      // use a threshold of 5px to account for sub-pixel rendering and rounding differences
      // this ensures we only show "more" when content is actually truncated
      const hasOverflow = naturalHeight > expectedMaxHeight + 5 && naturalHeight > clampedHeight + 5
      setIsOverflowing(hasOverflow)
    }

    // check after a brief delay to ensure rendering is complete
    const timer = setTimeout(checkOverflow, 150)

    // use ResizeObserver to sync widths and check overflow
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow()
    })

    resizeObserver.observe(descRef.current)

    // also check on window resize
    window.addEventListener('resize', checkOverflow)

    return () => {
      clearTimeout(timer)
      resizeObserver.disconnect()
      window.removeEventListener('resize', checkOverflow)
    }
  }, [project.description, expanded, lineClamp])

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-border">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold flex-1 line-clamp-3" title={project.title}>{project.title}</h3>
        {project.wip && (
          <Badge variant="outline" className="ml-2 flex items-center gap-1 flex-shrink-0 text-muted-foreground border-muted-foreground/40">
            WIP
          </Badge>
        )}

      </div>
      {project.date && (
        <div className="text-xs text-muted-foreground mb-2 -mt-2">
          {project.date}
        </div>
      )}
      <div className="mb-4 flex-grow min-h-0 relative">
        {/* hidden element to measure natural height */}
        <div
          ref={measureRef}
          className="text-foreground/80 text-sm leading-relaxed absolute opacity-0 pointer-events-none -z-10 invisible"
          style={{ width: '100%' }}
        >
          {renderDescription(project.description)}
        </div>
        <div
          ref={descRef}
          className="text-foreground/80 text-sm leading-relaxed"
          style={{
            maxHeight: expanded ? 'none' : undefined,
            overflow: expanded ? 'visible' : 'hidden',
            display: expanded ? 'block' : '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : lineClamp,
            WebkitBoxOrient: expanded ? 'unset' : 'vertical',
            textOverflow: expanded ? 'unset' : 'ellipsis'
          }}
        >
          {renderDescription(project.description)}
        </div>
        {isOverflowing && (
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
      <ProjectActions project={project} onShowLinks={onShowLinks}>
        {children}
      </ProjectActions>
    </div>
  )
}
