import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Subtle top ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left: Text & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI Engineering Roles &middot; Pune, India</span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3">
              Hi, I'm <span className="text-cyan-400">{personalInfo.name}</span>
            </h1>

            <div className="text-xl sm:text-2xl font-bold text-slate-300 mb-5">
              <span className="text-white">Software Engineer (AI)</span>
              <span className="text-slate-500 mx-2">&mdash;</span>
              <span className="text-cyan-400/90 font-medium">Building Intelligent AI Solutions.</span>
            </div>

            {/* Short Intro */}
            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              Specialized in engineering <strong className="text-white font-semibold">Agentic AI workflows</strong>, high-precision <strong className="text-white font-semibold">RAG pipelines</strong>, and scalable Python backend microservices. Hands-on with LangChain, LangGraph, AutoGen, Celery, and AWS Bedrock, optimizing LLM latency by ~50% in enterprise data platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={personalInfo.resumePath}
                download="Shubham_Durgude_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800/80 w-full">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
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
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-1.5 text-slate-500 sm:ml-auto">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right: Clean Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Subtle ambient blur behind photo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-lg pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl aspect-[4/4.6]">
                <img
                  src={personalInfo.profileImage}
                  alt="Shubham Durgude - Software Engineer (AI)"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />

                {/* Bottom title pill inside image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-dark-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Shubham Durgude</div>
                    <div className="text-[11px] text-cyan-300 font-mono">Software Engineer (AI)</div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80">
          {personalInfo.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-2xl font-bold text-white mb-0.5">{h.value}</div>
              <div className="text-xs text-slate-400 font-medium">{h.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
