import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
          <div className="relative h-64 md:h-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
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
            
            {project.github && project.github !== '#' && (
              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
