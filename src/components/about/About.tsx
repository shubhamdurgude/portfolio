import React from 'react';
import { 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Zap, 
  Workflow, 
  Search, 
  Server 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

const corePillars = [
  {
    icon: Workflow,
    title: 'Agentic AI & Multi-Agent Systems',
    description:
      'Designing goal-oriented autonomous workflows using LangGraph and AutoGen. Creating stateful agent tools, dynamic rule generation, and multi-agent collaboration frameworks.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-950/20',
  },
  {
    icon: Search,
    title: 'Retrieval-Augmented Generation (RAG)',
    description:
      'Building semantic search and retrieval systems with AstraDB and ChromaDB vector stores, query expansion, metadata filtering, and document ingestion pipelines.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-950/20',
  },
  {
    icon: Zap,
    title: 'LLM Latency & Cost Optimization',
    description:
      'Achieving ~50% faster response times through prompt compression, parameter tuning, TOON serialization for flat structured payloads, and token caching.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-950/20',
  },
  {
    icon: Server,
    title: 'Scalable Python Backend & Queues',
    description:
      'Developing robust asynchronous microservices using Flask, FastAPI, Celery background workers, Redis Pub/Sub, and Prometheus telemetry instrumentation.',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-950/20',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="About Shubham"
          title="Bridging Theoretical AI &"
          highlight="Production Engineering"
          subtitle="A passionate AI Software Engineer focused on transforming cutting-edge LLMs and agent architectures into resilient enterprise systems."
        />

        {/* 3 Key Highlights Grid (Strictly from resume) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Highlight 1 */}
          <div className="p-6 rounded-2xl bg-dark-900/70 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-cyan-950/10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                Industry & Internship
              </span>
            </div>
            <div className="text-3xl font-extrabold text-white mb-1">1.5+ Years</div>
            <div className="text-sm font-semibold text-cyan-300 mb-2">Hands-on Experience</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proven track record building agentic data quality pipelines, RAG systems, and scalable backend services at VE3 Global & DisruptiveNext.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="p-6 rounded-2xl bg-dark-900/70 border border-violet-500/20 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-violet-950/10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-violet-950/60 text-violet-300 border border-violet-500/30">
                Production & Research
              </span>
            </div>
            <div className="text-3xl font-extrabold text-white mb-1">5+ Projects</div>
            <div className="text-sm font-semibold text-violet-300 mb-2">Featured AI Implementations</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              From RAG-based financial intelligence and Text-to-SQL banking assistants to deep CNN medical imaging and retail machine learning forecasts.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="p-6 rounded-2xl bg-dark-900/70 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-blue-950/10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-950/60 text-blue-300 border border-blue-500/30">
                Postgraduate
              </span>
            </div>
            <div className="text-3xl font-extrabold text-white mb-1">M.Sc. DS & AI</div>
            <div className="text-sm font-semibold text-blue-300 mb-2">Symbiosis International Univ.</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized master's degree in Data Science & Artificial Intelligence from Pune, building deep expertise in mathematical foundations and ML theory.
            </p>
          </div>

        </div>

        {/* Narrative & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative description */}
          <div className="lg:col-span-5 space-y-5 bg-dark-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800/80 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Engineering Journey & Focus
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              My engineering focus centers on building reliable <strong className="text-white">autonomous AI agents</strong> and production-grade <strong className="text-white">RAG architectures</strong> that don't just demo well, but operate deterministically in mission-critical environments.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              At <span className="text-cyan-300 font-semibold">VE3 Global</span>, I contribute to the core AI architecture of <span className="text-white font-semibold">MatchX</span>, an enterprise data quality platform. My work involves designing agent tools for automated data cleaning, building dynamic rule generation engines, hierarchical dataset matching (exact, deterministic, probabilistic, and fuzzy), and reducing LLM response latency by approximately 50%.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Prior to VE3 Global, during my Generative AI internship at <span className="text-violet-300 font-semibold">DisruptiveNext (Phoenixgen)</span>, I engineered multi-agent workflows using AutoGen, integrated Microsoft Graph APIs, developed Model Context Protocol (MCP) servers, and built XBRL financial data extraction pipelines for SEC 10-K and 10-Q filings.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
              <div className="text-xs font-mono text-slate-400">
                Core Stack: <span className="text-slate-200">Python &middot; LangChain &middot; LangGraph &middot; Celery &middot; AWS Bedrock</span>
              </div>
            </div>
          </div>

          {/* Core Pillars 2x2 grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-dark-900/60 border ${pillar.border} hover:border-slate-600/80 transition-all duration-200 backdrop-blur-sm group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center mb-3 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
