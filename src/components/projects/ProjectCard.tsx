import React from 'react';
import { CheckCircle2, Github } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { personalInfo } from '../../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
      <div>
        {/* Category Pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-500/20">
            {project.category}
          </span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            title="View code on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <div className="text-xs text-slate-400 mb-3 font-medium">
          {project.subtitle}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features (Brief) */}
        <div className="space-y-1.5 mb-5">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags */}
      <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-slate-400 bg-dark-950 border border-slate-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
