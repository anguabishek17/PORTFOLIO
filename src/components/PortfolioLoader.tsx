import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';

interface PortfolioLoaderProps {
  onLoadingComplete: () => void;
}

export const PortfolioLoader: React.FC<PortfolioLoaderProps> = memo(({ onLoadingComplete }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const percentRef = useRef<number>(0);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 1. Prevent scrolling during fullscreen loader
    const originalOverflow = document.body.style.overflow;
    const originalHtmlBg = document.documentElement.style.backgroundColor;
    const originalBodyBg = document.body.style.backgroundColor;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.backgroundColor = '#050505';
    document.body.style.backgroundColor = '#050505';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Instant fast-path for reduced motion
      const fastTimer = setTimeout(() => {
        onLoadingComplete();
      }, 700);
      return () => {
        clearTimeout(fastTimer);
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.backgroundColor = originalHtmlBg || '#F6F5F0';
        document.body.style.backgroundColor = originalBodyBg || '#F6F5F0';
      };
    }

    // High-performance 60-FPS continuous interpolation using requestAnimationFrame
    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 1900; // 1.9s fast, intentional, premium boot duration

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic ease-out progression
      const easeProgress = 1 - Math.pow(1 - rawProgress, 3);
      const currentPercent = Math.min(Math.round(easeProgress * 100), 100);

      if (currentPercent !== percentRef.current) {
        percentRef.current = currentPercent;
        setPercent(currentPercent);
      }

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsReady(true);
        // Short pause at 100% before smooth fade transition into portfolio
        setTimeout(() => {
          onLoadingComplete();
        }, 320);
      }
    };

    // Slight delay (120ms) so monogram mounts smoothly first
    const initTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateProgress);
    }, 120);

    return () => {
      clearTimeout(initTimer);
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.backgroundColor = originalHtmlBg || '#F6F5F0';
      document.body.style.backgroundColor = originalBodyBg || '#F6F5F0';
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -10,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none w-screen h-[100dvh] overflow-hidden"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Subtle Precision Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(23, 76, 60, 0.18) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)',
          opacity: percent > 50 ? 0.9 : 0.4,
        }}
      />

      {/* Ultra-faint Grid Texture */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      {/* Center Minimal Focal Cluster */}
      <div className="relative flex flex-col items-center justify-center px-6 max-w-sm w-full space-y-9">
        
        {/* Monogram / Brand Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle Outer Ring */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center shadow-2xl relative group">
            {/* Subtle corner ticks */}
            <span className="absolute top-1 left-1 w-1 h-1 bg-zinc-600 rounded-full" />
            <span className="absolute top-1 right-1 w-1 h-1 bg-zinc-600 rounded-full" />
            <span className="absolute bottom-1 left-1 w-1 h-1 bg-zinc-600 rounded-full" />
            <span className="absolute bottom-1 right-1 w-1 h-1 bg-zinc-600 rounded-full" />

            {/* Monogram letter */}
            <span className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight">
              A
            </span>

            {/* Active glow pulse */}
            <div 
              className="absolute -inset-1 rounded-2xl bg-emerald-500/10 blur-md pointer-events-none transition-opacity duration-500"
              style={{ opacity: isReady ? 0.8 : 0.2 }}
            />
          </div>
        </motion.div>

        {/* Minimal Progress Bar & Percentage Unit */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="w-full max-w-[200px] flex flex-col items-center space-y-3"
        >
          {/* Ultra-fine progress line */}
          <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-zinc-400 via-white to-emerald-400 rounded-full transition-all duration-75 ease-out"
              style={{ 
                width: `${percent}%`,
                willChange: 'width' 
              }}
            />
          </div>

          {/* Synchronized Percentage Counter */}
          <div className="flex items-center justify-center">
            <span 
              ref={percentTextRef}
              className="font-mono text-xs font-semibold text-zinc-400 tracking-widest tabular-nums select-none"
            >
              {percent.toString().padStart(2, '0')}%
            </span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
});

