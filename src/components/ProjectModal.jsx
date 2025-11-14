import { Button } from '@/components/ui/button';
import { X, ExternalLink, Github, PlayCircle } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        className="relative z-10 w-full max-w-4xl bg-card rounded-lg shadow-2xl overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card/90"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-auto bg-muted flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[80vh] md:max-h-[70vh]">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="prose prose-sm text-foreground/90">
              <p className="whitespace-pre-line">{project.description}</p>
            </div>
            
            <div className="mt-6 flex gap-3 flex-wrap">
              {project.link && (
                <Button asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Research Page
                  </a>
                </Button>
              )}
              {project.github && project.github !== '#' && (
                <Button asChild variant="outline">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.video && (
                <Button asChild variant="outline">
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch Video
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
