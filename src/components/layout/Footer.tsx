import React from 'react';
import { Linkedin, Github, Mail, ArrowUp, Bot } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-cyan-400">
                {personalInfo.role}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              {personalInfo.tagline}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Pune, Maharashtra, India &middot; Agentic AI &middot; RAG &middot; Scalable Python Backend
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/30 flex items-center justify-center text-slate-400 hover:text-blue-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/30 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="Email Shubham"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-400 hover:bg-cyan-950/40 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
