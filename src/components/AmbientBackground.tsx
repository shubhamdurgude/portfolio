import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    interface Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      phase: number;
    }

    let points: Point[] = [];

    const initNodes = () => {
      const count = Math.min(Math.floor((width * height) / 22000), 40);
      points = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.3 + 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      time += 0.003;

      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      // 1. Slow-Motion Ambient Radial Aurora Glows
      const aura1X = width * 0.25 + Math.sin(time * 0.7) * 90;
      const aura1Y = height * 0.3 + Math.cos(time * 0.6) * 70;
      const aura1 = ctx.createRadialGradient(aura1X, aura1Y, 0, aura1X, aura1Y, 450);
      if (isDark) {
        aura1.addColorStop(0, 'rgba(6, 182, 212, 0.07)');
        aura1.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
      } else {
        aura1.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
        aura1.addColorStop(0.5, 'rgba(59, 130, 246, 0.06)');
      }
      aura1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aura1;
      ctx.fillRect(0, 0, width, height);

      const aura2X = width * 0.75 + Math.cos(time * 0.5) * 110;
      const aura2Y = height * 0.65 + Math.sin(time * 0.8) * 80;
      const aura2 = ctx.createRadialGradient(aura2X, aura2Y, 0, aura2X, aura2Y, 500);
      if (isDark) {
        aura2.addColorStop(0, 'rgba(139, 92, 246, 0.05)');
        aura2.addColorStop(0.5, 'rgba(59, 130, 246, 0.02)');
      } else {
        aura2.addColorStop(0, 'rgba(147, 51, 234, 0.08)');
        aura2.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
      }
      aura2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aura2;
      ctx.fillRect(0, 0, width, height);

      // 2. Cursor Follower Glow
      const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
      cursorGlow.addColorStop(0, isDark ? 'rgba(34, 211, 238, 0.04)' : 'rgba(6, 182, 212, 0.08)');
      cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Synaptic Connections
      const maxDist = 150;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.14 : 0.18);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(14, 116, 144, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 4. Floating Nodes
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const pulse = Math.sin(time * 2 + p.phase) * 0.15 + 0.85;
        const currentAlpha = p.baseAlpha * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(34, 211, 238, ${currentAlpha})`
          : `rgba(8, 145, 178, ${currentAlpha * 1.2})`;
        ctx.shadowBlur = isDark ? 10 : 4;
        ctx.shadowColor = isDark ? 'rgba(34, 211, 238, 0.4)' : 'rgba(8, 145, 178, 0.2)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
