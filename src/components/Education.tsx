import React from 'react';
import { Calendar, Award, GraduationCap } from 'lucide-react';
import { educationList, certifications } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
            // 05. EDUCATION & CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Background & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              University Degrees
            </h3>

            {educationList.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h4>
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </span>
                </div>

                <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {item.institution}
                </div>
                {item.location && (
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.location}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Certifications
            </h3>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                  {cert.highlight}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
