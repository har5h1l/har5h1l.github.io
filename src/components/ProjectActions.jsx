import { Button } from '@/components/ui/button'
import { ExternalLink, Github, PlayCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { getResearchAnchorId } from '@/lib/utils'

export function ProjectActions({ project, onShowLinks, className = '', children }) {
    if (!project) return null
    
    const location = useLocation()
    const isOnResearchPage = location.pathname === '/research'

    return (
        <div className={`flex gap-3 items-center flex-wrap ${className}`}>
            {/* 1. Research Page / Details (Primary) */}
            {/* If there's a specific link, use it. Otherwise, if it's not a link-only project, maybe show Details if needed, but per request we strictly follow order */}
            {project.link ? (
                <Button asChild variant="default" size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Research Page
                    </a>
                </Button>
            ) : null}

            {/* Details button for research projects (only show when NOT on Research page) */}
            {project.research && !project.link && !isOnResearchPage && (
                <Button asChild variant="default" size="sm">
                    <Link to={`/research#${getResearchAnchorId(project.title)}`} className="inline-flex items-center gap-2">
                        Details
                    </Link>
                </Button>
            )}

            {/* 2. Video Demo */}
            {project.video && (
                <Button asChild variant="default" size="sm">
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <PlayCircle className="h-4 w-4" />
                        Video
                    </a>
                </Button>
            )}

            {/* 3. GitHub */}
            {project.github && project.github !== '#' && !project.title.includes("DroneSuite") && (
                <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </Button>
            )}

            {/* For other projects with recognition, keep modal behavior */}
            {project.recognition && !project.title.includes("DroneSuite") && !project.title.includes("An Active Inference Approach") && onShowLinks && (
                <Button onClick={() => onShowLinks(project)} size="sm" variant="secondary">
                    Links & Recognition
                </Button>
            )}

            {/* 5. Custom Children (e.g. Details link from Home) */}
            {children}
        </div>
    )
}
