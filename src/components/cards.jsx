import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ArticleCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-lg overflow-hidden card-hover"
    >
      {article.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        {article.date && (
          <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
        )}
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.description}
        </p>
        
        {article.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Button
          asChild
          variant="ghost"
          className="p-0 h-auto font-medium group/btn"
        >
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-lg overflow-hidden card-hover"
    >
      {project.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex gap-2">
          {project.github && (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          
          {project.demo && (
            <Button asChild size="sm">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

