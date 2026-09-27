import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortfolioLoaderProps {
  onLoadingComplete: () => void;
}

const BOOT_LOGS = [
  { label: 'CORE_KERNEL', status: 'ONLINE', delay: 200 },
  { label: 'AI_ENGINE', status: 'READY', delay: 500 },
  { label: 'VISUAL_MODULE', status: 'READY', delay: 850 },
  { label: 'PROJECT_ARCHIVES', status: 'LOADED', delay: 1200 },
  { label: 'SYSTEM_STATUS', status: 'OPERATIONAL', delay: 1600 },
];

export const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState<number[]>([]);
  const [isDone, setIsDone] = useState(false);

  const statusMessages = [
    'INITIALIZING SYSTEM...',
    'CALIBRATING NEURAL MODELS...',
    'LOADING EMBEDDED ARCHIVES...',
    'SYNCHRONIZING PORTFOLIO...',
    'SYSTEM READY',
  ];

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const totalDuration = prefersReducedMotion ? 800 : 2100;
    const startTime = performance.now();

    // Progress counter animation
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / totalDuration, 1);
      
      // Smooth non-linear curve with slight pauses for realistic boot feel
      const curvedProgress = Math.floor(
        rawProgress < 0.6
          ? Math.pow(rawProgress / 0.6, 1.3) * 65
          : 65 + Math.pow((rawProgress - 0.6) / 0.4, 0.9) * 35
      );

      const currentVal = Math.min(Math.max(curvedProgress, 0), 100);
      setProgress(currentVal);

      // Status text sync
      if (currentVal < 25) setStatusIndex(0);
      else if (currentVal < 50) setStatusIndex(1);
      else if (currentVal < 75) setStatusIndex(2);
      else if (currentVal < 98) setStatusIndex(3);
      else setStatusIndex(4);

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsDone(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 380);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    // Progressive logs reveal
    BOOT_LOGS.forEach((log, index) => {
      const timer = setTimeout(() => {
        setActiveLogs((prev) => [...prev, index]);
      }, log.delay);
      return () => clearTimeout(timer);
    });

    return () => cancelAnimationFrame(frameId);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-none overflow-hidden select-none"
    >
      {/* Precision Background Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] to-transparent pointer-events-none" />

      {/* Top Header Telemetry */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-8 left-8 right-8 flex items-center justify-between font-mono text-[11px] text-zinc-500 border-b border-zinc-900/80 pb-3"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300 font-semibold tracking-widest uppercase">
            ANGU_SYS // BOOT_LOADER_v2.6
          </span>
        </div>
        <div className="hidden sm:block text-zinc-600 tracking-wider">
          MEM_ADDR: 0x7FFF8E · ARCH: ECE_AI
        </div>
      </motion.div>

      {/* Center Cinematic Portrait & HUD Cluster */}
      <div className="relative flex flex-col items-center justify-center px-6 max-w-lg w-full">
        
        {/* Subtle Top Boot Tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 uppercase mb-6 flex items-center gap-2"
        >
          <span className="w-1 h-1 rounded-full bg-white" />
          <span>SYSTEM INITIALIZING</span>
          <span className="w-1 h-1 rounded-full bg-white" />
        </motion.div>

        {/* Circular Frame + Portrait Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer Rotating Technical Reticle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="absolute w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full border border-dashed border-zinc-800 pointer-events-none"
            style={{ animation: 'spin 45s linear infinite' }}
          >
            {/* Coordinate Markers on Outer Ring */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest text-zinc-600 bg-[#050505] px-1">
              ANGU
            </span>
            <span className="absolute top-1/2 -right-3 -translate-y-1/2 font-mono text-[8px] tracking-widest text-zinc-600 bg-[#050505] px-1">
              AI
            </span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest text-zinc-600 bg-[#050505] px-1">
              ECE
            </span>
            <span className="absolute top-1/2 -left-3 -translate-y-1/2 font-mono text-[8px] tracking-widest text-zinc-600 bg-[#050505] px-1">
              2026
            </span>
          </motion.div>

          {/* Precision Outer Static Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute w-[210px] h-[210px] sm:w-[276px] sm:h-[276px] rounded-full border border-zinc-700/60 pointer-events-none"
          >
            {/* Satellite pulsing dot */}
            <div className="absolute top-1 right-6 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
            <div className="absolute bottom-2 left-8 w-1.5 h-1.5 rounded-full bg-zinc-500" />
          </motion.div>

          {/* Profile Photo Frame with Cinematic Blur In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden border-2 border-zinc-600/90 shadow-2xl bg-zinc-950 flex items-center justify-center"
          >
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top filter grayscale contrast-110"
            />

            {/* Face Scan Line Sheen */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: ['-100%', '250%'] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.3,
              }}
              className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
            />

            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
          </motion.div>

        </div>

        {/* Main Name & Role Identification */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 text-center space-y-1.5"
        >
          <h1 className="font-sans font-black text-xl sm:text-2xl tracking-tight text-white uppercase">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-mono text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
            AI DEVELOPER · ECE ENGINEER
          </p>
        </motion.div>

        {/* Synchronized Micro Progress Line & Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-xs mt-6 space-y-2"
        >
          {/* Track and Progress bar */}
          <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-white rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
            <span className="tracking-widest uppercase text-zinc-400">
              {statusMessages[statusIndex]}
            </span>
            <span className="font-bold text-white font-mono">
              {progress.toString().padStart(2, '0')}%
            </span>
          </div>
        </motion.div>

        {/* Dynamic Micro Diagnostics Feed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 hidden sm:grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[9.5px] text-zinc-600 max-w-xs w-full"
        >
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
        </motion.div>

      </div>

      {/* Bottom Telemetry Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-6 left-8 right-8 flex items-center justify-between font-mono text-[10px] text-zinc-600 border-t border-zinc-900/80 pt-3"
      >
        <span>SYS_CORE: ONLINE</span>
        <span className="text-zinc-500">
          {isDone ? 'INITIALIZATION COMPLETE' : 'BOOTSTRAP IN PROGRESS'}
        </span>
        <span>HOSUR // INDIA</span>
      </motion.div>
    </motion.div>
  );
};
