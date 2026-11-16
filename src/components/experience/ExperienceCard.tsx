import React from 'react';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../../types/portfolio';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-white">{experience.position}</h3>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
              {experience.type}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Building2 className="w-4 h-4 text-cyan-400" />
              {experience.company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {experience.location}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-950 border border-slate-800 text-xs font-mono text-cyan-400 w-fit">
          <Calendar className="w-3.5 h-3.5" />
          <span>{experience.duration}</span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-slate-300 leading-relaxed mb-5">
        {experience.summary}
      </p>

      {/* Bullet Points */}
      <div className="space-y-2 mb-6">
        {experience.contributions.map((point, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <span>{point}</span>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
        {experience.keySkills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 bg-dark-950 border border-slate-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
