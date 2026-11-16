import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Bot, 
  Database, 
  Cpu 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { AgentTerminal } from './AgentTerminal';

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
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle ambient glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 mb-6 shadow-sm shadow-cyan-950/50 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineer (AI) &middot; Pune, India</span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400">
                {personalInfo.name}
              </span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-5 flex flex-wrap items-center gap-2">
              <span className="text-cyan-400">Software Engineer (AI)</span>
              <span className="text-slate-600 hidden sm:inline">&mdash;</span>
              <span className="text-slate-300 font-medium text-lg sm:text-2xl">
                Building Intelligent AI Solutions.
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Specialized in engineering <span className="text-cyan-300 font-semibold">Agentic AI workflows</span>, robust <span className="text-blue-300 font-semibold">RAG pipelines</span>, high-throughput <span className="text-violet-300 font-semibold">LLM applications</span>, and scalable Python backend architectures. Experienced in accelerating LLM performance (~50% faster responses) and deploying multi-agent systems with LangChain, LangGraph, AutoGen, Flask, Celery, and AWS Bedrock.
            </p>

            {/* Two Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-dark-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-dark-950" />
              </button>

              <a
                href={personalInfo.resumePath}
                download="Shubham_Durgude_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 w-full text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/60 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 transition-colors"
                  aria-label="Visit Shubham's LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="Visit Shubham's GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/60 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                  aria-label="Send email to Shubham"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-medium">Email</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image & AI Visual Elements */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Elegant Portrait Container */}
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Multi-layered ambient aura behind image */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-800/80 via-dark-900/90 to-dark-950 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
                
                {/* Photo frame */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/4.4] bg-dark-950">
                  <img
                    src={personalInfo.profileImage}
                    alt="Shubham Durgude - Software Engineer (AI)"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle inner gradient shadow to blend into the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Identity Badge at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-dark-950/90 backdrop-blur-md border border-cyan-500/20 shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        Shubham Durgude
                      </div>
                      <div className="text-[11px] font-mono text-cyan-300">
                        AI Workflows &middot; RAG &middot; Backend
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badges */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-900/95 border border-cyan-400/40 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] font-mono font-medium text-slate-200">
                    Agentic AI & LangGraph
                  </span>
                </div>

                <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-900/95 border border-violet-400/40 shadow-lg shadow-violet-950/50 backdrop-blur-md">
                  <Database className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-[11px] font-mono font-medium text-slate-200">
                    RAG & Vector Stores
                  </span>
                </div>
              </div>

            </div>

            {/* Interactive Agent Terminal Widget below photo */}
            <div className="w-full mt-6 max-w-sm sm:max-w-md">
              <AgentTerminal />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
