import React, { useEffect, useRef } from 'react';

export const TechGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle floating nodes/particles for high-tech ambiance
    const particleCount = Math.min(Math.floor(width / 50), 30);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.1,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render ultra-subtle particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + i));

        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Precision tech grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Fine micro-dot texture */}
      <div className="absolute inset-0 tech-dots opacity-20" />
      
      {/* Ambient center spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent blur-3xl pointer-events-none" />

      {/* Canvas for micro-particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Subtle coordinate watermark / technical telemetry */}
      <div className="hidden lg:flex fixed bottom-6 left-6 flex-col font-mono text-[10px] text-zinc-600 tracking-wider space-y-1 select-none pointer-events-none z-10">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM_ONLINE // ECE-AI_CORE
        </span>
        <span className="text-zinc-700">12.7409° N · 77.8253° E // HOSUR_IN</span>
      </div>

      <div className="hidden lg:block fixed bottom-6 right-6 font-mono text-[10px] text-zinc-700 tracking-wider select-none pointer-events-none z-10">
        ANGU_PORTFOLIO_V2.6 // PROD
      </div>
    </div>
  );
};
