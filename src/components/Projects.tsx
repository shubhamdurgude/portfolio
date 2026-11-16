import React from 'react';
import { ArrowUpRight, Github, Check, GitFork, Sparkles } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="py-20 lg:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
              // 04. FEATURED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              End-to-end AI applications covering Vector RAG, Text-to-SQL assistants, medical CNNs, and ML forecasting.
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors w-fit"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          </a>
        </div>

        {/* Featured Project (Full-Width Card) */}
        {featuredProject && (
          <div className="mb-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/90 shadow-sm transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-500/30">
                  <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                  Featured System
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {featuredProject.category}
                </span>
              </div>
              {featuredProject.metrics && (
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 bg-slate-100 dark:bg-slate-950 px-2.5 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                  {featuredProject.metrics}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {featuredProject.title}
                </h3>
                <p className="text-xs text-cyan-600 dark:text-cyan-400/90 font-medium mb-3">
                  {featuredProject.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {featuredProject.description}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Key Architecture</div>
                {featuredProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.repoUrl || personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-cyan-600 dark:text-cyan-400 hover:underline text-xs shrink-0"
              >
                <GitFork className="w-3 h-3" />
                <span>View Repository Placeholder &rarr;</span>
              </a>
            </div>
          </div>
        )}

        {/* 2x2 Grid for Remaining 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-500/30">
                    {proj.category}
                  </span>
                  {proj.metrics && (
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {proj.metrics}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs text-cyan-600 dark:text-cyan-400/90 font-medium mb-3">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mb-6">
                  {proj.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Git Repo Placeholder */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <a
                    href={proj.repoUrl || personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-cyan-600 dark:text-cyan-400 hover:underline text-[11px]"
                  >
                    <GitFork className="w-3 h-3" />
                    <span>View Repository Placeholder &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
