import React from 'react';
import { Bot, Server, Database } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

const groupIcons = [Bot, Server, Database];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
            // 03. TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Competencies
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Specialized engineering skill set tested in enterprise production.
          </p>
        </div>

        {/* 3 Focused Skill Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = groupIcons[idx] || Bot;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
