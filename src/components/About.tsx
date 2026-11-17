import React from 'react';
import { Bot, Search, Zap, GraduationCap } from 'lucide-react';

const coreStrengths = [
  {
    icon: Bot,
    title: 'Autonomous Agentic Systems',
    desc: 'Designing stateful multi-agent workflows with LangGraph and AutoGen for automated data cleaning, tool execution, and dynamic rule generation.',
  },
  {
    icon: Search,
    title: 'Enterprise RAG Architecture',
    desc: 'Building high-precision semantic retrieval systems using AstraDB and ChromaDB vector stores with contextual document ingestion.',
  },
  {
    icon: Zap,
    title: 'Scalable Backends & Optimization',
    desc: 'Developing asynchronous microservices with FastAPI, Celery, Redis queues, Spark batch jobs, and optimizing LLM response latency.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
            // 01. ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Reliable AI Systems
          </h2>
        </div>

        {/* Cohesive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am an <strong className="text-slate-900 dark:text-white font-semibold">AI Engineer</strong> with 1.5+ years of hands-on experience building deterministic, production-grade artificial intelligence workflows and scalable Python backend architectures.
            </p>
            <p>
              Currently at <strong className="text-slate-900 dark:text-white">VE3 Global</strong>, I develop backend services and agentic workflows for <strong className="text-cyan-600 dark:text-cyan-400">MatchX</strong> — an enterprise data quality platform — implementing automated data cleaning, dynamic transformation rules, and connector-based cloud ingestion.
            </p>
            <p>
              Prior to VE3 Global, I engineered multi-agent workflows (AutoGen), Model Context Protocol (MCP) servers, and financial document RAG extraction pipelines at <strong className="text-slate-900 dark:text-white">DisruptiveNext (Phoenixgen)</strong>.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-medium text-slate-800 dark:text-slate-200 border-t border-slate-200 dark:border-slate-800/80">
              <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>M.Sc. in Data Science & AI &middot; Symbiosis International University, Pune</span>
            </div>
          </div>

          {/* 3 Core Strengths (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5">
            {coreStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
