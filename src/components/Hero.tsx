import React from 'react';
import { ArrowRight, Mail, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Intro & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-3">
              Hi, I'm <span className="text-cyan-600 dark:text-cyan-400">{personalInfo.name}</span>
            </h1>

            {/* Role & Core Focus */}
            <div className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              <span>{personalInfo.role}</span>
              <span className="text-slate-400 dark:text-slate-600 mx-2 font-normal">&mdash;</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Building Intelligent AI Systems</span>
            </div>

            {/* Crisp 2-sentence summary */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              Specialized in engineering autonomous <strong className="text-slate-900 dark:text-white font-semibold">Agentic AI workflows</strong>, high-precision <strong className="text-slate-900 dark:text-white font-semibold">RAG architectures</strong>, and scalable Python backend microservices for enterprise production.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 transition-all shadow-sm cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Clean Social Links */}
            <div className="flex items-center gap-3 pt-5 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-500 transition-colors"
                title="Instagram Profile"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                title="Email Shubham"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Subtle ambient glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-violet-500/20 rounded-3xl blur-lg pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl aspect-[4/4.7]">
                <img
                  src={personalInfo.profileImage}
                  alt="Shubham Durgude - AI Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />

                {/* Bottom caption pill */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 dark:bg-dark-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-md">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Shubham Durgude</div>
                    <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono font-medium">{personalInfo.role}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                    <MapPin className="w-3 h-3" />
                    <span>Pune</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Clean Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          {personalInfo.highlights.map((h, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm text-center sm:text-left"
            >
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {h.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                {h.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
