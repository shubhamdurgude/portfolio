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
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>Pune, Maharashtra, India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3">
              Hi, I'm <span className="text-cyan-600 dark:text-cyan-400">{personalInfo.name}</span>
            </h1>

            <div className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-300 mb-5 flex flex-wrap items-center gap-2">
              <span className="text-slate-900 dark:text-white font-extrabold">{personalInfo.role}</span>
              <span className="text-slate-400 dark:text-slate-600">&mdash;</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Building Intelligent AI Solutions.</span>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              Specialized in engineering <strong className="text-slate-900 dark:text-white font-semibold">Agentic AI workflows</strong>, high-precision <strong className="text-slate-900 dark:text-white font-semibold">RAG pipelines</strong>, and scalable Python backend microservices. Hands-on with LangChain, LangGraph, AutoGen, Celery, and AWS Bedrock, optimizing LLM latency and engineering reliable enterprise AI platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white dark:text-dark-950 bg-cyan-600 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-all shadow-md shadow-cyan-600/20 dark:shadow-cyan-500/20 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 dark:text-slate-400 pt-5 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="font-medium">{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Subtle ambient lighting aura behind image */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-violet-500/20 rounded-3xl blur-xl pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl aspect-[4/4.6]">
                <img
                  src={personalInfo.profileImage}
                  alt="Shubham Durgude - AI Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />

                {/* Bottom title pill inside image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 dark:bg-dark-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Shubham Durgude</div>
                    <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono font-medium">{personalInfo.role}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                    <MapPin className="w-3 h-3" />
                    <span>Pune</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Clean Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80">
          {personalInfo.highlights.map((h, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                {h.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                {h.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
