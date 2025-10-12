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
      <div className="container mx-auto px-4 py-8">
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
                    onMoreInfo={handleMoreInfo}
                    isActInf={project.category === 'Active Inference'}
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
            <h2 className="text-2xl font-semibold">
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
                  onMoreInfo={handleMoreInfo}
                  isActInf={project.category === 'Active Inference'}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      
      {/* Technical Skills & Expertise Section */}
      <section className="py-16 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Active Inference & Bayesian Methods */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Active Inference & Bayesian Methods</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  RxInfer.jl (Julia)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  PYMDP (Python)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Variational Inference
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Hierarchical Planning
                </li>
              </ul>
            </motion.div>

            {/* Deep Learning & Neural Networks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Deep Learning & Neural Networks</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Masked Autoencoders (MAE)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Self-Supervised Learning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Deep Reinforcement Learning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Graph Neural Networks (GNN)
                </li>
              </ul>
            </motion.div>

            {/* Robotics & Simulation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Robotics & Simulation</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Microsoft AirSim
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  CoppeliaSim
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Autonomous Navigation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Drone Systems
                </li>
              </ul>
            </motion.div>

            {/* Neuroscience & Biomedicine */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Neuroscience & Biomedicine</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  fMRI Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Computational Biology
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Healthcare Applications
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Nutritional Analytics
                </li>
              </ul>
            </motion.div>

            {/* AI/ML Tools & Frameworks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">AI/ML Tools & Frameworks</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Python (Primary Language)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  LLMs & RAG Systems
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Computer Vision (MediaPipe)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Statistical Analysis
                </li>
              </ul>
            </motion.div>

            {/* Research & Conceptual Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Research & Conceptual Skills</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Affordance Theory
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Interdisciplinary Thinking
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Research Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Technical Writing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
