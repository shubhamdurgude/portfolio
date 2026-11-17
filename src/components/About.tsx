import React from 'react';
import { Bot, Search, Zap, Sparkles, ShieldCheck, Gauge } from 'lucide-react';

const capabilityPillars = [
  {
    icon: Bot,
    title: 'Autonomous Agentic Systems',
    description:
      'Designing stateful multi-agent workflows with LangGraph and AutoGen that execute custom tools, generate dynamic rules, and orchestrate complex tasks autonomously.',
    color: 'from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  },
  {
    icon: Search,
    title: 'Enterprise RAG & Semantic Search',
    description:
      'Building contextual retrieval pipelines using AstraDB and ChromaDB vector databases, structured chunking, and embedding models for high-accuracy document intelligence.',
    color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  },
  {
    icon: Zap,
    title: 'Scalable Backends & Optimization',
    description:
      'Engineering high-throughput asynchronous services with FastAPI, Celery, and Redis queues, optimizing LLM inference latency, and tracking live telemetry with Prometheus.',
    color: 'from-violet-500/10 to-purple-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  },
];

const impactHighlights = [
  {
    icon: Gauge,
    title: 'Latency & Cost Optimized',
    subtitle: 'Prompt compression & payload tuning',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Reliability',
    subtitle: 'Distributed queues & telemetry',
  },
  {
    icon: Sparkles,
    title: 'Real-World Impact',
    subtitle: 'Automated data quality & finance AI',
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
            Bridging AI Capabilities & Production Reliability
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Crafting intelligent autonomous workflows, robust RAG pipelines, and scalable Python architectures.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Narrative Card (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                I am an <strong className="text-slate-900 dark:text-white font-semibold">AI Engineer</strong> with 1.5+ years of experience dedicated to transforming modern Large Language Models and Agentic workflows into deterministic, production-ready software solutions.
              </p>

              <p>
                My work centers on the intersection of <strong className="text-slate-900 dark:text-white font-semibold">autonomous AI orchestration</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Retrieval-Augmented Generation (RAG)</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">distributed Python backend services</strong>. I design systems that solve tangible enterprise problems — from automated data cleaning and dynamic validation rule generation to connector-based cloud ingestion and high-volume background processing.
              </p>

              <p>
                Whether fine-tuning prompt strategies to cut inference latency, engineering custom Model Context Protocol (MCP) servers, or building parallel data-scanning pipelines with Apache Spark and Celery, I prioritize system reliability, observability, and clean software architecture.
              </p>

              <p>
                I hold an <strong className="text-slate-900 dark:text-white font-semibold">M.Sc. in Data Science & Artificial Intelligence</strong> from <strong className="text-slate-900 dark:text-white font-semibold">Symbiosis International University, Pune</strong>, and I am passionate about building practical, deterministic AI systems that solve complex, real-world problems.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {capabilityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pillar.color} border flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Impact Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {impactHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-center gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
