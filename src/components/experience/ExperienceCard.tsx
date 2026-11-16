import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { ExperienceItem } from '../../types/portfolio';

interface ExperienceCardProps {
  experience: ExperienceItem;
  defaultExpanded?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  // Show top 5 contributions initially when collapsed, or all when expanded
  const displayedContributions = isExpanded
    ? experience.contributions
    : experience.contributions.slice(0, 4);

  return (
    <div className="relative pl-6 sm:pl-10 pb-12 last:pb-0 group">
      {/* Vertical Timeline Line */}
      <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-slate-800/20 group-last:hidden" />

      {/* Timeline Node Dot */}
      <div className="absolute left-0 sm:left-2 top-3 w-6 h-6 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)]">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      {/* Card Content */}
      <div className="rounded-3xl bg-dark-900/70 border border-slate-800/80 hover:border-cyan-500/30 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-cyan-950/5">
        
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {experience.position}
              </h3>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                {experience.type}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                <Building2 className="w-4 h-4 text-cyan-400" />
                {experience.company}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {experience.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-700/80 text-xs font-mono text-cyan-300 font-semibold shadow-inner">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Platform / Role Summary */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {experience.summary}
        </p>

        {/* Architecture / Impact Highlights */}
        {experience.highlights && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {experience.highlights.map((h, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80 flex flex-col justify-center"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {h.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5">
                  {h.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Contributions List */}
        <div className="mb-6">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Key Contributions & Engineering Impact
          </div>

          <ul className="space-y-2.5">
            {displayedContributions.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400/90 mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {experience.contributions.length > 4 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <span>Show Less Details</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Show All {experience.contributions.length} Contributions</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Key Skills Tags */}
        <div className="pt-4 border-t border-slate-800/70">
          <div className="text-[11px] font-mono text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-cyan-400" />
            Skills & Technologies Applied:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {experience.keySkills.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-dark-950/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
