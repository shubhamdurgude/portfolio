import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { educationList, certifications } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Credentials"
          title="Education &"
          highlight="Certifications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-start">
          
          {/* Degrees */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Academic Degrees
            </h3>

            {educationList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold text-white">{item.degree}</h4>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-dark-950 border border-slate-800 w-fit">
                    {item.duration}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  {item.institution}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-violet-400" />
              Certifications
            </h3>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-dark-950 border border-slate-800">
                    {cert.issuer}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">{cert.highlight}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
