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

    // Mouse coordinates with smooth lerping
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
      colorDark: string;
      colorLight: string;
    }

    let points: Point[] = [];

    const initNodes = () => {
      const count = Math.min(Math.floor((width * height) / 20000), 45);
      points = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25, // Slow-motion velocity
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.35 + 0.15,
          phase: Math.random() * Math.PI * 2,
          colorDark: i % 2 === 0 ? 'rgba(34, 211, 238, ' : 'rgba(168, 85, 247, ',
          colorLight: i % 2 === 0 ? 'rgba(8, 145, 178, ' : 'rgba(99, 102, 241, ',
        });
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      time += 0.003; // Slow-motion progression
      const isDark = document.documentElement.classList.contains('dark');

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Slow-Motion Ambient Radial Aurora Glows
      const aura1X = width * 0.25 + Math.sin(time * 0.7) * 90;
      const aura1Y = height * 0.3 + Math.cos(time * 0.6) * 70;
      const aura1 = ctx.createRadialGradient(aura1X, aura1Y, 0, aura1X, aura1Y, 450);
      aura1.addColorStop(0, isDark ? 'rgba(6, 182, 212, 0.07)' : 'rgba(6, 182, 212, 0.05)');
      aura1.addColorStop(0.5, isDark ? 'rgba(99, 102, 241, 0.03)' : 'rgba(99, 102, 241, 0.02)');
      aura1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aura1;
      ctx.fillRect(0, 0, width, height);

      const aura2X = width * 0.75 + Math.cos(time * 0.5) * 110;
      const aura2Y = height * 0.65 + Math.sin(time * 0.8) * 80;
      const aura2 = ctx.createRadialGradient(aura2X, aura2Y, 0, aura2X, aura2Y, 500);
      aura2.addColorStop(0, isDark ? 'rgba(139, 92, 246, 0.06)' : 'rgba(139, 92, 246, 0.04)');
      aura2.addColorStop(0.5, isDark ? 'rgba(59, 130, 246, 0.02)' : 'rgba(59, 130, 246, 0.01)');
      aura2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aura2;
      ctx.fillRect(0, 0, width, height);

      // 2. Interactive Subtle Cursor Follower Glow
      const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280);
      cursorGlow.addColorStop(0, isDark ? 'rgba(34, 211, 238, 0.04)' : 'rgba(6, 182, 212, 0.03)');
      cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Slow-Motion Synaptic Filaments
      const maxDist = 160;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.14 : 0.10);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(14, 165, 233, ${alpha * 1.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 4. Update & Draw Slow-Motion Floating Nodes
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const pulse = Math.sin(time * 2 + p.phase) * 0.15 + 0.85;
        const currentAlpha = p.baseAlpha * pulse;
        const colorPrefix = isDark ? p.colorDark : p.colorLight;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${colorPrefix}${currentAlpha})`;
        ctx.shadowBlur = isDark ? 10 : 6;
        ctx.shadowColor = isDark ? 'rgba(34, 211, 238, 0.3)' : 'rgba(6, 182, 212, 0.2)';
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
