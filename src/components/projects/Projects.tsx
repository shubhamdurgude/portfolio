import React from 'react';
import { Github } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { projects, personalInfo } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Selected Work"
          title="Featured"
          highlight="Projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Clean GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-dark-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View More Repositories on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};
