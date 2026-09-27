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

    // Subtle floating green/gray nodes for engineering background
    const particleCount = Math.min(Math.floor(width / 60), 25);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + i));

        ctx.fillStyle = `rgba(23, 76, 60, ${currentAlpha * 0.4})`;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#F6F5F0]">
      {/* Precision Ivory / Green tech grid */}
      <div className="absolute inset-0 tech-grid-light opacity-80" />
      
      {/* Fine micro-dot texture */}
      <div className="absolute inset-0 tech-dots-light opacity-60" />

      {/* Canvas for micro-particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Subtle coordinate watermark / technical telemetry */}
      <div className="hidden lg:flex fixed bottom-6 left-6 flex-col text-[11px] text-[#59635E] tracking-wide space-y-1 select-none pointer-events-none z-10 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#174C3C] animate-pulse" />
          SYSTEM_ONLINE // ECE-AI_CORE
        </span>
        <span className="text-[#8A938E] text-[10px]">12.7409° N · 77.8253° E // HOSUR_IN</span>
      </div>

      <div className="hidden lg:block fixed bottom-6 right-6 text-[11px] text-[#8A938E] tracking-wide select-none pointer-events-none z-10 font-medium">
        ANGU_PORTFOLIO // V2.6
      </div>
    </div>
  );
};
