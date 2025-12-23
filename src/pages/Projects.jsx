import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';

import { allProjects } from '@/data/projects';

const categories = ['All', 'Active Inference', 'Biomedicine', 'Other'];

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Update selected category when URL changes
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && categories.includes(filter)) {
      setSelectedCategory(filter);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: category });
    }
  };

  // Separate featured projects
  const featuredProjects = allProjects.filter(p => p.featured === true);

  // Regular projects respect the selected category and exclude featured
  const regularProjects = (
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(p => p.category === selectedCategory)
  )
    .filter(p => !p.featured)
    .sort((a, b) => 0);

  const handleMoreInfo = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-[900px]">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        {/* Featured Section */}
        {featuredProjects.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold">Featured</h2>
            </div>
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map(project => (
                <motion.div
                  layout
                  key={project.title}
                  id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}
                >
                  <ProjectCard
                    project={project}
                    onShowLinks={handleMoreInfo}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Regular Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">
              {selectedCategory === 'All' ? 'All Projects' : selectedCategory}
            </h2>
          </div>
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularProjects.map(project => (
              <motion.div
                layout
                key={project.title}
                id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}
              >
                <ProjectCard
                  project={project}
                  onShowLinks={handleMoreInfo}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}
