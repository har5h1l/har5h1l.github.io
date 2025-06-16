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

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

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

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div layout key={project.title}>
              <ProjectCard
                project={project}
                onMoreInfo={handleMoreInfo}
                isActInf={project.category === 'Active Inference'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      
      {/* Skills Section */}
      <section className="py-16 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Machine Learning & Statistical Methods */}
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Machine Learning & Statistics</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Supervised & Unsupervised Learning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Statistical Analysis & Inference
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Model Evaluation & Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Feature Engineering
                </li>
              </ul>
            </motion.div>

            {/* Active Inference */}
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Active Inference</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Bayesian Inference
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  pymdp Framework
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  RxInfer
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Variational Inference
                </li>
              </ul>
            </motion.div>

            {/* Languages */}
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
                    <path d="m12 3-1.9 5.7a2 2 0 0 1-1.9 1.3H3l4.5 3.3c.8.6 1.3 1.6 1 2.5l-2 6a1 1 0 0 0 1.5 1.1l5.1-3.7c.9-.6 2.1-.6 3 0l5.1 3.7c.7.5 1.6.4 2.1-.3.3-.5.3-1.1-.1-1.6l-2-6c-.3-.9.2-1.9 1-2.5L21 10h-5.2a2 2 0 0 1-1.9-1.3L12 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  JavaScript/TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  C/C++
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  MATLAB
                </li>
              </ul>
            </motion.div>

            {/* Simulations */}
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
                <h3 className="text-xl font-semibold">Simulations</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  CoppeliaSim
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Microsoft AirSim
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Simulation Environments
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                  Virtual Testing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
