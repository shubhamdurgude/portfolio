import React from 'react';
import { SkillCategory } from '../../types/portfolio';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  return (
    <div className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
      <h3 className="text-base font-bold text-white mb-4 flex items-center justify-between">
        <span>{category.title}</span>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
          {category.skills.length}
        </span>
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
