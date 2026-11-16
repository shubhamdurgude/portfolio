import React, { useState } from 'react';
import { Github, FolderGit2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { projects, personalInfo } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'GenAI & RAG', label: 'GenAI & RAG' },
    { id: 'Agentic & NLP', label: 'Agentic & NLP' },
    { id: 'Machine Learning', label: 'Machine Learning' },
    { id: 'Deep Learning & CV', label: 'Deep Learning & CV' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-gradient-to-l from-violet-900/10 via-cyan-900/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Featured Projects"
          title="Engineered for Impact &"
          highlight="Architectural Rigor"
          subtitle="A showcase of end-to-end AI applications, from multi-source vector RAG engines and Text-to-SQL assistants to computer vision neural networks."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-950/50'
                  : 'bg-dark-900/60 text-slate-400 border border-slate-800/80 hover:text-white hover:bg-dark-850'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Verified Code / GitHub Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 rounded-2xl bg-dark-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Looking for code samples, experiments, and active repositories?</span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Explore github.com/shubhamdurgude</span>
            </a>
          </div>
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
