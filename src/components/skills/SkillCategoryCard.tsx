import React from 'react';
import { 
  Brain, 
  Server, 
  Sparkles, 
  Database, 
  Layers, 
  Cloud, 
  LucideIcon 
} from 'lucide-react';
import { SkillCategory } from '../../types/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Server,
  Sparkles,
  Database,
  Layers,
  Cloud,
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  searchQuery: string;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  searchQuery,
}) => {
  const IconComponent = iconMap[category.icon] || Layers;

  // Filter skills based on query
  const query = searchQuery.toLowerCase().trim();
  const filteredSkills = category.skills.filter((s) =>
    s.name.toLowerCase().includes(query)
  );

  if (query && filteredSkills.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl p-6 bg-dark-900/70 border border-slate-800/80 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-lg shadow-cyan-950/5">
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              {category.title}
            </h3>
            <span className="text-[11px] text-slate-400">
              {category.skills.length} competencies
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          {category.description}
        </p>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => {
            const isMatch = query && skill.name.toLowerCase().includes(query);
            return (
              <span
                key={index}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isMatch
                    ? 'bg-cyan-500 text-dark-950 font-bold ring-2 ring-cyan-300 scale-105'
                    : skill.highlighted
                    ? 'bg-cyan-950/50 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/60 shadow-sm'
                    : 'bg-dark-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {skill.highlighted && !isMatch && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
