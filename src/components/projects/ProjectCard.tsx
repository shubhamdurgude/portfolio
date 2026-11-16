import React from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Landmark, 
  Activity 
} from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

// Custom SVG Visual Schematics for each project
const ProjectVisual: React.FC<{ projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'ai-in-finance':
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-dark-950 via-slate-900 to-cyan-950/40 p-4 overflow-hidden border border-cyan-500/15 flex flex-col justify-between group-hover:border-cyan-500/30 transition-colors">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
              RAG &middot; Vector Retrieval
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              AstraDB + ChromaDB
            </span>
          </div>

          {/* Schematic Graphic */}
          <div className="relative z-10 flex items-center justify-around py-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-300 text-[10px] font-mono">
                Docs
              </div>
              <span className="text-[9px] text-slate-400 mt-1">Tracxn / SEC</span>
            </div>

            <div className="w-8 h-0.5 bg-gradient-to-r from-slate-600 to-cyan-400" />

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-cyan-300 font-mono mt-1">Cohere RAG</span>
            </div>

            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400" />

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-violet-500/30 flex items-center justify-center text-violet-300 text-[10px] font-mono">
                Insight
              </div>
              <span className="text-[9px] text-slate-400 mt-1">Finance Q&A</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>LangFlow Orchestration</span>
            <span className="text-emerald-400">Embedding Search</span>
          </div>
        </div>
      );

    case 'ai-chat-banking':
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-dark-950 via-slate-900 to-blue-950/40 p-4 overflow-hidden border border-blue-500/15 flex flex-col justify-between group-hover:border-blue-500/30 transition-colors">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-500/20">
              Text-to-SQL &middot; PyPDF2
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Google GenAI + Postgres
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-around py-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-300 text-[10px] font-mono">
                PDF
              </div>
              <span className="text-[9px] text-slate-400 mt-1">Statements</span>
            </div>

            <div className="w-8 h-0.5 bg-gradient-to-r from-slate-600 to-blue-400" />

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/50 flex items-center justify-center text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.25)]">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-blue-300 font-mono mt-1">GenAI SQL</span>
            </div>

            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400" />

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-[10px] font-mono">
                Gradio
              </div>
              <span className="text-[9px] text-slate-400 mt-1">Interactive UI</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Natural Language Queries</span>
            <span className="text-blue-400">Dynamic SQL</span>
          </div>
        </div>
      );

    case 'customer-segmentation':
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-dark-950 via-slate-900 to-purple-950/40 p-4 overflow-hidden border border-purple-500/15 flex flex-col justify-between group-hover:border-purple-500/30 transition-colors">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-500/20">
              RFM &middot; Clustering
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              K-Means & Hierarchical
            </span>
          </div>

          {/* Scatter Cluster Graphic */}
          <div className="relative z-10 flex items-center justify-center gap-6 py-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[10px] font-mono text-slate-300">High-Value (C1)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
              <span className="text-[10px] font-mono text-slate-300">Regular (C2)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              <span className="text-[10px] font-mono text-slate-300">At-Risk (C3)</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Silhouette & Calinski Score</span>
            <span className="text-purple-400">UK Retail Data</span>
          </div>
        </div>
      );

    case 'brain-tumor-detection':
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-dark-950 via-slate-900 to-rose-950/40 p-4 overflow-hidden border border-rose-500/15 flex flex-col justify-between group-hover:border-rose-500/30 transition-colors">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-500/20">
              CNN &middot; Medical CV
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              MRI Multiclass Classifier
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-around py-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-300 text-[10px] font-mono">
                MRI
              </div>
              <span className="text-[9px] text-slate-400 mt-1">Raw Scans</span>
            </div>

            <div className="w-8 h-0.5 bg-gradient-to-r from-slate-600 to-rose-400" />

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-rose-950/80 border border-rose-400/50 flex items-center justify-center text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.25)]">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-rose-300 font-mono mt-1">Deep CNN</span>
            </div>

            <div className="w-8 h-0.5 bg-gradient-to-r from-rose-400 to-emerald-400" />

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-[10px] font-mono">
                98%
              </div>
              <span className="text-[9px] text-slate-400 mt-1">Diagnosis</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>TensorFlow & OpenCV</span>
            <span className="text-rose-400">Multiclass Output</span>
          </div>
        </div>
      );

    case 'walmart-sales-forecasting':
      return (
        <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-dark-950 via-slate-900 to-emerald-950/40 p-4 overflow-hidden border border-emerald-500/15 flex flex-col justify-between group-hover:border-emerald-500/30 transition-colors">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/20">
              Demand ML &middot; Time Series
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              XGBoost vs Linear Reg
            </span>
          </div>

          {/* Trend lines graphic */}
          <div className="relative z-10 flex items-center justify-around py-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-slate-300">WMAE</span>
              <span className="text-[9px] text-slate-500">Loss Metric</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-emerald-400">XGBoost</span>
              <span className="text-[9px] text-emerald-500">Lowest RMSE</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-cyan-400">Markdown</span>
              <span className="text-[9px] text-cyan-500">Feature Eng</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Department-level Forecast</span>
            <span className="text-emerald-400">Optimized Inventory</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="rounded-3xl bg-dark-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl shadow-cyan-950/10 group">
      <div>
        {/* Visual Schematic Box */}
        <div className="mb-5">
          <ProjectVisual projectId={project.id} />
        </div>

        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            {project.category}
          </span>
          {project.metrics && (
            <span className="text-[11px] font-mono text-slate-400">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-slate-400 mb-4">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features preview (top 2 bullets) */}
        <ul className="space-y-1.5 mb-6">
          {project.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/70 mb-5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-dark-950 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card CTA: Deep Dive Modal */}
        <button
          onClick={() => onOpenDetails(project)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <span>View Architecture & Full Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
