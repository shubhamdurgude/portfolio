import React from 'react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-24 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            // 03. TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Technical Competencies
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Backed by production engineering delivery at VE3 Global & DisruptiveNext.
          </p>
        </div>

        {/* 4 Clean Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80"
            >
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
