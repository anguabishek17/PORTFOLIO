import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortfolioLoaderProps {
  onLoadingComplete: () => void;
}

export const PortfolioLoader: React.FC<PortfolioLoaderProps> = memo(({ onLoadingComplete }) => {
  const [percent, setPercent] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const percentRef = useRef<number>(0);

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
    const duration = 1850; // Fast, intentional, premium intro duration

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
        }, 280);
      }
    };

    // Delay slightly so photo smoothly mounts first
    const initTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateProgress);
    }, 100);

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
        scale: 1.02,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none w-screen h-[100dvh] overflow-hidden"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Atmospheric Ambient Glow behind Portrait */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] rounded-full pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(23, 76, 60, 0.22) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 70%)',
          opacity: percent > 40 ? 0.9 : 0.4,
        }}
      />

      {/* Ultra-faint Grid Texture */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      {/* Center Focused Portrait & Progress Cluster */}
      <div className="relative flex flex-col items-center justify-center px-6 max-w-sm w-full space-y-8">
        
        {/* Personal Profile Photo Focal Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle Outer Halo Ring */}
          <div 
            className="absolute -inset-2 rounded-full border border-zinc-800 transition-colors duration-700 pointer-events-none"
            style={{ borderColor: isReady ? 'rgba(52, 211, 153, 0.3)' : 'rgba(255, 255, 255, 0.08)' }}
          />

          {/* Profile Photo Frame */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-zinc-700 shadow-2xl bg-zinc-950 flex items-center justify-center">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              width="192"
              height="192"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out"
              style={{
                filter: percent > 60 ? 'contrast(103%)' : 'grayscale(15%) contrast(105%)',
              }}
            />

            {/* Subtle light sweep */}
            <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none skew-x-12 animate-[float_4s_ease-in-out_infinite]" />

            {/* Subtle inner shadow ring */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 pointer-events-none" />
          </div>

          {/* Active green indicator satellite */}
          <div className="absolute bottom-1 right-2 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#050505] shadow-[0_0_8px_#34d399]" />
        </motion.div>

        {/* Minimal Progress Bar & Synchronized Percentage Unit */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="w-full max-w-[200px] flex flex-col items-center space-y-3"
        >
          {/* Synchronized Percentage Counter */}
          <div className="flex items-center justify-center">
            <span className="font-mono text-sm font-semibold text-zinc-300 tracking-widest tabular-nums select-none">
              {percent.toString().padStart(2, '0')}%
            </span>
          </div>

          {/* Ultra-fine progress line */}
          <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-zinc-400 via-white to-emerald-400 rounded-full transition-all duration-75 ease-out"
              style={{ 
                width: `${percent}%`,
                willChange: 'width' 
              }}
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
});

