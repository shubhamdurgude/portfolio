import React from 'react';
import { Bot, Search, Zap, Server } from 'lucide-react';

const pillars = [
  {
    icon: Bot,
    title: 'Agentic AI & Multi-Agent Workflows',
    description: 'Developing autonomous workflows with LangGraph and AutoGen. Creating stateful agent tools, dynamic rule generation, and multi-agent coordination.',
  },
  {
    icon: Search,
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Building semantic search engines using AstraDB and ChromaDB vector databases, embedding search, and document ingestion pipelines.',
  },
  {
    icon: Zap,
    title: 'LLM Performance & Latency Optimization',
    description: 'Optimizing model response efficiency through prompt compression, parameter tuning, TOON payload serialization, and token caching.',
  },
  {
    icon: Server,
    title: 'Scalable Python Backend & Queues',
    description: 'Engineering asynchronous microservices with Flask, FastAPI, Celery background workers, Redis Pub/Sub, and Prometheus monitoring.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
            // 01. ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Reliable AI Systems for Production
          </h2>
        </div>

        {/* Narrative & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            <p>
              I am an <strong className="text-slate-900 dark:text-white">AI Engineer</strong> focused on building autonomous agentic workflows and production-grade RAG architectures that run deterministically in enterprise environments.
            </p>
            <p>
              At <strong className="text-slate-900 dark:text-white">VE3 Global</strong>, I work on <span className="text-cyan-600 dark:text-cyan-300 font-semibold">MatchX</span>, a modular AI data quality platform. I develop agentic workflows for automated data cleaning, dynamic rule generation, hierarchical dataset matching, and optimize LLM response latency.
            </p>
            <p>
              Prior to VE3 Global, during my Generative AI internship at <strong className="text-slate-900 dark:text-white">DisruptiveNext (Phoenixgen)</strong>, I developed AutoGen multi-agent systems, document RAG pipelines, Model Context Protocol (MCP) servers, and financial document extraction pipelines.
            </p>
            <p>
              I hold a Master's degree (<strong className="text-slate-900 dark:text-white">M.Sc. in Data Science & Artificial Intelligence</strong>) from <strong className="text-slate-900 dark:text-white">Symbiosis International University, Pune</strong>.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{p.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
