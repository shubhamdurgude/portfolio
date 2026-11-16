import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Eye, 
  BarChart2, 
  BookOpen, 
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { educationList, certifications } from '../../data/portfolioData';

const certIconMap: Record<string, LucideIcon> = {
  Eye,
  BarChart2,
  Award,
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Academic Background & Credentials"
          title="Education &"
          highlight="Certifications"
          subtitle="Rigorous academic grounding in advanced data science, AI architectures, and continuous professional upskilling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Academic Degrees & Qualifications
                </h3>
                <span className="text-xs text-slate-400">
                  From foundational science to postgraduate AI specialization
                </span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/40 before:via-blue-500/20 before:to-slate-800/20 pl-8">
              {educationList.map((item, index) => (
                <div
                  key={index}
                  className="relative p-5 sm:p-6 rounded-2xl bg-dark-900/70 border border-slate-800/80 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-200 group"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[27px] top-6 w-4 h-4 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_8px_#22d3ee]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h4>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-lg bg-dark-950 border border-slate-800 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Institution */}
                  <div className="text-sm font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.institution}</span>
                  </div>

                  {item.location && (
                    <div className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-600" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2.5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Professional Certifications
                </h3>
                <span className="text-xs text-slate-400">
                  Verified coursework & specialized training
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = certIconMap[cert.icon] || Award;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-dark-900/70 border border-slate-800/80 hover:border-violet-500/30 backdrop-blur-xl transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                            {cert.title}
                          </h4>
                          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-dark-950 text-slate-300 border border-slate-800">
                            {cert.issuer}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          {cert.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ISRO Special Highlight Card */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-dark-950 via-slate-900 to-cyan-950/30 border border-cyan-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  IIRS / ISRO Recognized Training
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Completed specialized machine learning for geospatial data analysis with Indian Institute of Remote Sensing (ISRO), exploring satellite imagery classification and remote sensing algorithms.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
