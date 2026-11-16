import React, { useEffect, useRef, useState } from 'react';
import { Activity, RefreshCw } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  pulse: number;
}

interface Particle {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const LiveNeuralVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState<string>('LangGraph Agent');
  const [isFiring, setIsFiring] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Dynamic Nodes based on Shubham's AI engineering stack
    let nodes: Node[] = [];
    let connections: Array<[number, number]> = [];
    let particles: Particle[] = [];

    const initNodes = () => {
      const cy = height / 2;
      const wStep = width / 6;

      nodes = [
        { id: '1', label: 'User Intent', category: 'Input', x: wStep * 0.9, y: cy, radius: 18, color: '#38bdf8', pulse: 0 },
        { id: '2', label: 'RAG Retriever', category: 'Vector Search', x: wStep * 2.1, y: cy - 70, radius: 20, color: '#22d3ee', pulse: 0 },
        { id: '3', label: 'AstraDB / ChromaDB', category: 'Embeddings', x: wStep * 2.1, y: cy + 70, radius: 19, color: '#06b6d4', pulse: 0 },
        { id: '4', label: 'LangGraph Agent', category: 'Orchestrator', x: wStep * 3.5, y: cy, radius: 24, color: '#818cf8', pulse: 0 },
        { id: '5', label: 'Spark & Celery', category: 'Distributed', x: wStep * 4.7, y: cy - 65, radius: 19, color: '#a78bfa', pulse: 0 },
        { id: '6', label: 'TOON Serializer', category: 'Optimization', x: wStep * 4.7, y: cy + 65, radius: 18, color: '#34d399', pulse: 0 },
        { id: '7', label: 'Verified Output', category: 'Action', x: wStep * 5.4, y: cy, radius: 20, color: '#10b981', pulse: 0 },
      ];

      connections = [
        [0, 1],
        [0, 2],
        [1, 3],
        [2, 3],
        [3, 4],
        [3, 5],
        [4, 6],
        [5, 6],
        [1, 2],
      ];

      particles = [];
      for (let i = 0; i < 24; i++) {
        const connIndex = Math.floor(Math.random() * connections.length);
        const [from, to] = connections[connIndex];
        particles.push({
          fromNode: from,
          toNode: to,
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.009,
          color: nodes[to].color,
        });
      }
    };

    initNodes();

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Check hover on nodes
      for (const node of nodes) {
        const dist = Math.hypot(node.x - mouseX, node.y - mouseY);
        if (dist < node.radius + 8) {
          setActiveNode(node.label);
          break;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background circuit lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // 2. Draw connections with glowing gradients
      connections.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];

        const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
        grad.addColorStop(0, n1.color + '40');
        grad.addColorStop(1, n2.color + '40');

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // 3. Update & Draw synaptic energy particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          const connIndex = Math.floor(Math.random() * connections.length);
          const [from, to] = connections[connIndex];
          p.fromNode = from;
          p.toNode = to;
          p.color = nodes[to].color;
          nodes[to].pulse = 1;
        }

        const n1 = nodes[p.fromNode];
        const n2 = nodes[p.toNode];
        const curX = n1.x + (n2.x - n1.x) * p.progress;
        const curY = n1.y + (n2.y - n1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Draw Nodes
      nodes.forEach((node) => {
        const mouseDist = Math.hypot(node.x - mouseX, node.y - mouseY);
        const isHovered = mouseDist < node.radius + 6;

        if (node.pulse > 0) {
          node.pulse -= 0.03;
          if (node.pulse < 0) node.pulse = 0;
        }

        if (node.pulse > 0 || isHovered) {
          const ringRad = node.radius + (node.pulse * 14) + (isHovered ? 4 : 0);
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringRad, 0, Math.PI * 2);
          ctx.strokeStyle = node.color + (isHovered ? '80' : '40');
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#060B18';
        ctx.fill();

        ctx.lineWidth = isHovered ? 2.5 : 1.8;
        ctx.strokeStyle = node.color;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = isHovered ? '#ffffff' : '#cbd5e1';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius + 14);

        ctx.fillStyle = '#64748b';
        ctx.font = '8px JetBrains Mono, monospace';
        ctx.fillText(node.category, node.x, node.y + node.radius + 24);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const triggerCascade = () => {
    setIsFiring(true);
    setActiveNode('Cascading Agent Workflow...');
    setTimeout(() => {
      setIsFiring(false);
      setActiveNode('LangGraph Agent');
    }, 1500);
  };

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl bg-slate-900/40 border border-slate-800/80 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden"
    >
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-wide flex items-center gap-2">
              <span>Live Agent Topology & Synaptic Flow</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Interactive visualization of autonomous RAG & agent execution
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-cyan-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
            Node: <span className="text-white font-semibold">{activeNode}</span>
          </div>

          <button
            onClick={triggerCascade}
            disabled={isFiring}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer disabled:opacity-50"
            title="Trigger agent synapse wave"
          >
            <RefreshCw className={`w-3 h-3 ${isFiring ? 'animate-spin' : ''}`} />
            <span>Trigger Wave</span>
          </button>
        </div>
      </div>

      {/* Live Canvas */}
      <div className="relative w-full overflow-hidden rounded-xl bg-dark-950/80">
        <canvas
          ref={canvasRef}
          className="w-full block cursor-crosshair"
          height={360}
        />
        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-400 pointer-events-none">
          Hover nodes to inspect topology &middot; 60 FPS
        </div>
      </div>
    </div>
  );
};
