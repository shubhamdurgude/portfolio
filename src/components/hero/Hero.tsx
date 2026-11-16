import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI Engineering Roles</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400">
                {personalInfo.name}
              </span>
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mb-6">
              <span className="text-cyan-400">Software Engineer (AI)</span>
              <span className="text-slate-500 mx-2">&mdash;</span>
              <span>Building Intelligent AI Solutions</span>
            </div>

            {/* Concise Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl font-normal">
              Specializing in <span className="text-slate-200 font-medium">Agentic AI workflows</span>, <span className="text-slate-200 font-medium">RAG pipelines</span>, and scalable Python backend architectures. Experienced in building multi-agent systems and optimizing LLM response latency by ~50% across enterprise platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumePath}
                download="Shubham_Durgude_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/80 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Socials & Location */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-slate-800/80 w-full text-slate-400 text-sm">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 ml-auto sm:ml-0">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Profile Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-dark-900 shadow-2xl aspect-[4/4.6]">
                <img
                  src={personalInfo.profileImage}
                  alt="Shubham Durgude"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm font-semibold text-white">Shubham Durgude</div>
                  <div className="text-xs text-cyan-400 font-mono">Software Engineer (AI)</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
