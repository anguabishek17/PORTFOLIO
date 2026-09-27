import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortfolioLoaderProps {
  onLoadingComplete: () => void;
}

const BOOT_LOGS = [
  { label: 'CORE_KERNEL', status: 'ONLINE', delay: 150 },
  { label: 'AI_ENGINE', status: 'READY', delay: 450 },
  { label: 'VISUAL_MODULE', status: 'CALIBRATED', delay: 900 },
  { label: 'PROJECT_ARCHIVES', status: 'LOADED', delay: 1400 },
  { label: 'SYSTEM_STATUS', status: 'OPERATIONAL', delay: 1900 },
];

export const PortfolioLoader: React.FC<PortfolioLoaderProps> = memo(({ onLoadingComplete }) => {
  // Stage state: 0 = Init B&W, 1 = First Color, 2 = Return B&W, 3 = Second Color, 4 = Final System Ready
  const [stage, setStage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [activeLogs, setActiveLogs] = useState<number[]>([]);
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...');

  useEffect(() => {
    // 1. Prevent scrolling during fullscreen loader
    const originalOverflow = document.body.style.overflow;
    const originalHtmlBg = document.documentElement.style.backgroundColor;
    const originalBodyBg = document.body.style.backgroundColor;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.backgroundColor = '#050505';
    document.body.style.backgroundColor = '#050505';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Timers tracking array for leak-proof cleanup
    const timers: number[] = [];

    if (prefersReduced) {
      // Reduced motion fast-path (900ms)
      setStage(3);
      setProgress(100);
      setStatusText('SYSTEM READY');
      const timer = window.setTimeout(() => {
        onLoadingComplete();
      }, 950);
      timers.push(timer);
    } else {
      // Stage 0: 0 - 500ms (Grayscale init)
      timers.push(window.setTimeout(() => {
        setProgress(24);
        setStatusText('CALIBRATING NEURAL MODELS...');
      }, 400));

      // Stage 1: 600ms (First Color Emergence)
      timers.push(window.setTimeout(() => {
        setStage(1);
        setProgress(48);
        setStatusText('ANALYZING EMBEDDED ARCHIVES...');
      }, 650));

      // Stage 2: 1400ms (Smooth Return toward Grayscale)
      timers.push(window.setTimeout(() => {
        setStage(2);
        setProgress(68);
        setStatusText('SYNCHRONIZING AGENTIC CORES...');
      }, 1450));

      // Stage 3: 2050ms (Second Color Pulse Emerges -> Full Color)
      timers.push(window.setTimeout(() => {
        setStage(3);
        setProgress(92);
      }, 2050));

      // Stage 4: 2600ms (Final System Ready)
      timers.push(window.setTimeout(() => {
        setStage(4);
        setProgress(100);
        setStatusText('SYSTEM READY');
      }, 2600));

      // Exit transition trigger: 3000ms
      timers.push(window.setTimeout(() => {
        onLoadingComplete();
      }, 3000));

      // Progressive logs reveal
      BOOT_LOGS.forEach((log, index) => {
        const logTimer = window.setTimeout(() => {
          setActiveLogs((prev) => (prev.includes(index) ? prev : [...prev, index]));
        }, log.delay);
        timers.push(logTimer);
      });
    }

    return () => {
      // Clean up all timers on unmount
      timers.forEach((t) => clearTimeout(t));
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.backgroundColor = originalHtmlBg || '#F6F5F0';
      document.body.style.backgroundColor = originalBodyBg || '#F6F5F0';
    };
  }, [onLoadingComplete]);

  // Derive color styling directly without continuous per-frame JS execution
  const isColor = stage === 1 || stage === 3 || stage === 4;
  const grayscaleValue = stage === 0 ? 100 : stage === 1 ? 0 : stage === 2 ? 85 : 0;
  const saturationValue = stage === 0 ? 0 : stage === 1 ? 1.15 : stage === 2 ? 0.2 : 1.15;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden select-none w-screen h-[100dvh]"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Precision Background Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Reactive Ambient Glow that breathes with color state */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)',
          opacity: isColor ? 0.7 : 0.2,
        }}
      />

      {/* Top Header Telemetry */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between font-mono text-[11px] text-zinc-500 border-b border-zinc-900/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300 font-semibold tracking-widest uppercase text-[10px] sm:text-[11px]">
            ANGU_SYS // INITIALIZATION
          </span>
        </div>
        <div className="hidden sm:block text-zinc-600 tracking-wider">
          CHROMATIC: {isColor ? 'RGB_ACTIVE' : 'MONO_PASS'} · V2.6
        </div>
      </div>

      {/* Center Cinematic Portrait & HUD Cluster */}
      <div className="relative flex flex-col items-center justify-center px-6 max-w-lg w-full">
        
        {/* Top Boot Tag */}
        <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 uppercase mb-6 flex items-center gap-2">
          <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${isColor ? 'bg-white shadow-[0_0_6px_white]' : 'bg-zinc-500'}`} />
          <span>SYSTEM INITIALIZING</span>
          <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${isColor ? 'bg-white shadow-[0_0_6px_white]' : 'bg-zinc-500'}`} />
        </div>

        {/* Circular Frame + Portrait Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer Rotating Technical Reticle */}
          <div
            className={`absolute w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed pointer-events-none transition-colors duration-700 animate-[spin_45s_linear_infinite] ${
              isColor ? 'border-zinc-600' : 'border-zinc-800'
            }`}
          >
            {/* Coordinate Markers on Outer Ring */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest text-zinc-500 bg-[#050505] px-1">
              ANGU
            </span>
            <span className="absolute top-1/2 -right-3 -translate-y-1/2 font-mono text-[8px] tracking-widest text-zinc-500 bg-[#050505] px-1">
              AI
            </span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest text-zinc-500 bg-[#050505] px-1">
              ECE
            </span>
            <span className="absolute top-1/2 -left-3 -translate-y-1/2 font-mono text-[8px] tracking-widest text-zinc-500 bg-[#050505] px-1">
              2026
            </span>
          </div>

          {/* Precision Static Ring with Pulse Reactive Halo */}
          <div
            className={`absolute w-[205px] h-[205px] sm:w-[268px] sm:h-[268px] rounded-full border pointer-events-none transition-all duration-700 ${
              isColor
                ? 'border-zinc-500/80 shadow-[0_0_20px_rgba(255,255,255,0.06)]'
                : 'border-zinc-700/50'
            }`}
          >
            {/* Satellite pulsing dots */}
            <div className="absolute top-1 right-6 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
            <div className="absolute bottom-2 left-8 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          </div>

          {/* Profile Photo Frame with Hardware-accelerated CSS filter transitions */}
          <div className="relative w-[176px] h-[176px] sm:w-[230px] sm:h-[230px] rounded-full overflow-hidden border-2 border-zinc-600 shadow-2xl bg-zinc-950 flex items-center justify-center">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              width="230"
              height="230"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-top will-change-[filter] transition-all duration-700 ease-out"
              style={{
                filter: `grayscale(${grayscaleValue}%) saturate(${saturationValue}) contrast(105%)`,
              }}
            />

            {/* Subtle Color Light Sweep during emergence */}
            <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none skew-x-12 animate-[float_4s_ease-in-out_infinite]" />

            {/* Face Scan Line Sheen */}
            <div className={`absolute inset-x-0 h-8 bg-gradient-to-b from-transparent ${isColor ? 'via-white/20' : 'via-white/10'} to-transparent pointer-events-none animate-pulse`} />

            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
          </div>

        </div>

        {/* Main Name & Role Identification with Inter font */}
        <div className="mt-7 text-center space-y-1">
          <h1
            className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-white uppercase transition-opacity duration-500"
            style={{ opacity: isColor ? 1 : 0.85 }}
          >
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-zinc-300 font-semibold tracking-wide">
            AI DEVELOPER · ECE ENGINEER
          </p>
        </div>

        {/* Synchronized Micro Progress Line & Percentage */}
        <div className="w-full max-w-xs mt-6 space-y-2">
          {/* Track and Progress bar */}
          <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
            <span className="tracking-widest uppercase text-zinc-400">
              {statusText}
            </span>
            <span className="font-bold text-white font-mono">
              {progress.toString().padStart(2, '0')}%
            </span>
          </div>
        </div>

        {/* Dynamic Micro Diagnostics Feed */}
        <div className="mt-7 hidden sm:grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[9.5px] text-zinc-600 max-w-xs w-full">
          {BOOT_LOGS.slice(0, 4).map((log, idx) => {
            const isReady = activeLogs.includes(idx);
            return (
              <div key={log.label} className="flex justify-between items-center py-0.5">
                <span className="text-zinc-500">{log.label}</span>
                <span className={isReady ? 'text-zinc-300 font-semibold' : 'text-zinc-800'}>
                  {isReady ? `.. ${log.status}` : '.. WAIT'}
                </span>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Telemetry Footer */}
      <div className="absolute bottom-6 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between font-mono text-[10px] text-zinc-600 border-t border-zinc-900/80 pt-3">
        <span>SYS_CORE: ONLINE</span>
        <span className="text-zinc-500 font-medium">
          {stage >= 4 ? 'INITIALIZATION COMPLETE' : 'BOOTSTRAP IN PROGRESS'}
        </span>
        <span>HOSUR // INDIA</span>
      </div>
    </motion.div>
  );
});
