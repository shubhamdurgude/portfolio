import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';

export const AgentTerminal: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const simulateRun = () => {
    setIsRunning(true);
    setActiveStep(0);
    setTimeout(() => setActiveStep(1), 500);
    setTimeout(() => setActiveStep(2), 1100);
    setTimeout(() => {
      setActiveStep(3);
      setIsRunning(false);
    }, 1700);
  };

  return (
    <div className="w-full rounded-2xl bg-dark-900/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-dark-950/80 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            matchx-agent-runtime :: pipeline_v2.py
          </span>
        </div>

        <button
          onClick={simulateRun}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors disabled:opacity-50 cursor-pointer"
          title="Run Agent Pipeline simulation"
        >
          {isRunning ? (
            <Activity className="w-3 h-3 animate-spin text-cyan-400" />
          ) : (
            <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" />
          )}
          <span className="text-[10px] uppercase font-semibold">
            {isRunning ? 'Running' : 'Trigger Agent'}
          </span>
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-2 text-slate-300">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="text-cyan-400">$</span>
          <span>python -m agents.orchestrator --mode=matchx --optimize=toon</span>
        </div>

        {/* Step 1 */}
        <div className={`flex items-start gap-2.5 transition-opacity duration-200 ${activeStep >= 0 ? 'opacity-100' : 'opacity-25'}`}>
          <Zap className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-cyan-300">[LangGraph]</span> Graph compiled with 4 tool nodes:
            <span className="text-slate-400"> (S3Ingest, Profiler, FuzzyMatch, CleanAudit)</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`flex items-start gap-2.5 transition-opacity duration-200 ${activeStep >= 1 ? 'opacity-100' : 'opacity-25'}`}>
          <Cpu className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-violet-300">[Vector RAG]</span> AstraDB & ChromaDB queried.
            Payload serialized with <span className="text-emerald-300 font-semibold">TOON format</span>.
          </div>
        </div>

        {/* Step 3 */}
        <div className={`flex items-start gap-2.5 transition-opacity duration-200 ${activeStep >= 2 ? 'opacity-100' : 'opacity-25'}`}>
          <Activity className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-blue-300">[Spark + Redis]</span> Parallel rule execution finished.
            Job status published via Redis Pub/Sub.
          </div>
        </div>

        {/* Step 4 */}
        <div className={`flex items-start gap-2.5 p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 transition-opacity duration-200 ${activeStep >= 3 ? 'opacity-100' : 'opacity-25'}`}>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-emerald-200">
              Agent execution complete. Latency reduced by ~50%
            </div>
            <div className="text-[11px] text-emerald-400/80 font-sans">
              Metrics emitted to Prometheus | AES-256 S3 export verified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
