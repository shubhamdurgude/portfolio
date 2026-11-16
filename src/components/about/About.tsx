import React from 'react';
import { 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Workflow, 
  Search, 
  Zap, 
  Server 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

const focusAreas = [
  {
    icon: Workflow,
    title: 'Agentic AI & Multi-Agent Systems',
    description: 'Autonomous workflows using LangGraph and AutoGen with custom rule generation and tool execution.',
  },
  {
    icon: Search,
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Document retrieval and financial intelligence with AstraDB, ChromaDB, and semantic vector indexing.',
  },
  {
    icon: Zap,
    title: 'LLM Optimization (~50% Faster)',
    description: 'Prompt compression, parameter tuning, and TOON serialization reducing API response latency by ~50%.',
  },
  {
    icon: Server,
    title: 'Scalable Python Backend & Queues',
    description: 'Asynchronous architectures using Flask, Celery, Redis Pub/Sub, and Apache Spark data scanning.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Background &"
          highlight="Engineering Focus"
        />

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {personalInfo.highlights.map((h, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  {idx === 0 && <Briefcase className="w-5 h-5" />}
                  {idx === 1 && <Code2 className="w-5 h-5" />}
                  {idx === 2 && <GraduationCap className="w-5 h-5" />}
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-500/20">
                  {h.label}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{h.value}</div>
              <div className="text-xs text-slate-400">{h.detail}</div>
            </div>
          ))}
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-dark-900/60 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Professional Journey</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I am a Software Engineer (AI) focused on building practical, deterministic AI applications. My work spans agentic systems, document RAG pipelines, and backend microservices that optimize latency and improve data quality.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Currently at <span className="text-slate-200 font-medium">VE3 Global</span>, I contribute to the MatchX data quality platform, designing agent tools for automated data cleaning, hierarchical matching, and reducing LLM response latency by approximately 50%.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              I completed my <span className="text-slate-200 font-medium">M.Sc. in Data Science & Artificial Intelligence</span> from Symbiosis International University, Pune, combining strong mathematical foundations with hands-on software development.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{area.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
