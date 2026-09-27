import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PortfolioLoaderProps {
  onLoadingComplete: () => void;
}

const BOOT_LOGS = [
  { label: 'CORE_KERNEL', status: 'ONLINE', delay: 200 },
  { label: 'AI_ENGINE', status: 'READY', delay: 600 },
  { label: 'VISUAL_MODULE', status: 'CALIBRATED', delay: 1100 },
  { label: 'PROJECT_ARCHIVES', status: 'LOADED', delay: 1700 },
  { label: 'SYSTEM_STATUS', status: 'OPERATIONAL', delay: 2200 },
];

export const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState<number[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const statusMessages = [
    'INITIALIZING SYSTEM...',
    'CALIBRATING NEURAL MODELS...',
    'ANALYZING EMBEDDED ARCHIVES...',
    'SYNCHRONIZING AGENTIC CORES...',
    'SYSTEM READY',
  ];

  // Calculate dynamic B&W ↔ Color filter parameters based on progress
  const colorState = useMemo(() => {
    if (prefersReducedMotion) {
      if (progress < 50) return { grayscale: 100, saturation: 0, glowAlpha: 0, isColor: false };
      return { grayscale: 0, saturation: 1.1, glowAlpha: 0.08, isColor: true };
    }

    // Sequence:
    // 0% - 18%: B&W (100% Grayscale, 0 Saturation)
    // 18% - 42%: Color Emerges -> Full Color
    // 42% - 66%: Return to B&W
    // 66% - 88%: Second Color Pulse Emerges -> Full Color
    // 88% - 100%: Stays in Full Natural Color (System Ready)
    if (progress < 18) {
      return { grayscale: 100, saturation: 0, glowAlpha: 0.01, isColor: false };
    } else if (progress < 42) {
      // 18 -> 42 : B&W to Full Color
      const t = (progress - 18) / 24;
      const easeT = Math.sin((t * Math.PI) / 2);
      const grayscale = Math.max(0, Math.floor(100 - easeT * 100));
      const saturation = Number((easeT * 1.15).toFixed(2));
      return { grayscale, saturation, glowAlpha: 0.06 * easeT, isColor: easeT > 0.5 };
    } else if (progress < 66) {
      // 42 -> 66 : Full Color to B&W
      const t = (progress - 42) / 24;
      const easeT = Math.sin((t * Math.PI) / 2);
      const grayscale = Math.min(100, Math.floor(easeT * 100));
      const saturation = Number((1.15 - easeT * 1.15).toFixed(2));
      return { grayscale, saturation, glowAlpha: 0.06 * (1 - easeT), isColor: easeT < 0.5 };
    } else if (progress < 88) {
      // 66 -> 88 : Second Color Emergence
      const t = (progress - 66) / 22;
      const easeT = Math.sin((t * Math.PI) / 2);
      const grayscale = Math.max(0, Math.floor(100 - easeT * 100));
      const saturation = Number((easeT * 1.15).toFixed(2));
      return { grayscale, saturation, glowAlpha: 0.08 * easeT, isColor: easeT > 0.5 };
    } else {
      // 88 -> 100 : Final Natural Full Color
      return { grayscale: 0, saturation: 1.1, glowAlpha: 0.09, isColor: true };
    }
  }, [progress, prefersReducedMotion]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);

    const totalDuration = reducedMotion ? 900 : 2600;
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / totalDuration, 1);
      
      // Multi-stage cinematic curve
      let curved: number;
      if (rawProgress < 0.4) {
        curved = Math.pow(rawProgress / 0.4, 1.1) * 42;
      } else if (rawProgress < 0.8) {
        curved = 42 + Math.pow((rawProgress - 0.4) / 0.4, 0.95) * 44;
      } else {
        curved = 86 + Math.pow((rawProgress - 0.8) / 0.2, 0.85) * 14;
      }

      const currentVal = Math.min(Math.max(Math.floor(curved), 0), 100);
      setProgress(currentVal);

      // Status text synchronization
      if (currentVal < 22) setStatusIndex(0);
      else if (currentVal < 46) setStatusIndex(1);
      else if (currentVal < 70) setStatusIndex(2);
      else if (currentVal < 92) setStatusIndex(3);
      else setStatusIndex(4);

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsDone(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 420);
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
        scale: 1.05,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-none overflow-hidden select-none"
    >
      {/* Precision Background Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Reactive Ambient Glow that breathes with color state */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)',
          opacity: colorState.glowAlpha > 0 ? colorState.glowAlpha * 12 : 0.05,
        }}
      />

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
            ANGU_SYS // IDENTITY_INITIALIZATION
          </span>
        </div>
        <div className="hidden sm:block text-zinc-600 tracking-wider">
          MEM_ADDR: 0x7FFF8E · CHROMATIC: {colorState.isColor ? 'RGB_ACTIVE' : 'MONO_PASS'}
        </div>
      </motion.div>

      {/* Center Cinematic Portrait & HUD Cluster */}
      <div className="relative flex flex-col items-center justify-center px-6 max-w-lg w-full">
        
        {/* Top Boot Tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 uppercase mb-6 flex items-center gap-2"
        >
          <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${colorState.isColor ? 'bg-white shadow-[0_0_6px_white]' : 'bg-zinc-500'}`} />
          <span>SYSTEM INITIALIZING</span>
          <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${colorState.isColor ? 'bg-white shadow-[0_0_6px_white]' : 'bg-zinc-500'}`} />
        </motion.div>

        {/* Circular Frame + Portrait Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer Rotating Technical Reticle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className={`absolute w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full border border-dashed pointer-events-none transition-colors duration-700 ${
              colorState.isColor ? 'border-zinc-600' : 'border-zinc-800'
            }`}
            style={{ animation: prefersReducedMotion ? 'none' : 'spin 45s linear infinite' }}
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
          </motion.div>

          {/* Precision Static Ring with Pulse Reactive Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`absolute w-[210px] h-[210px] sm:w-[276px] sm:h-[276px] rounded-full border pointer-events-none transition-all duration-700 ${
              colorState.isColor
                ? 'border-zinc-500/80 shadow-[0_0_20px_rgba(255,255,255,0.06)]'
                : 'border-zinc-700/50'
            }`}
          >
            {/* Satellite pulsing dot */}
            <div className="absolute top-1 right-6 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
            <div className="absolute bottom-2 left-8 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          </motion.div>

          {/* Profile Photo Frame with Dynamic Color ↔ B&W Filter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden border-2 border-zinc-600 shadow-2xl bg-zinc-950 flex items-center justify-center transition-colors duration-700"
          >
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top transition-all duration-700 ease-out"
              style={{
                filter: `grayscale(${colorState.grayscale}%) saturate(${colorState.saturation}) contrast(105%)`,
              }}
            />

            {/* Subtle Color Light Sweep (Left -> Right) during emergence */}
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: ['-150%', '200%'] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.4,
              }}
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none skew-x-12"
            />

            {/* Face Scan Line Sheen (Top -> Bottom) */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: ['-100%', '250%'] }}
              transition={{
                duration: 2.1,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.2,
              }}
              className={`absolute inset-x-0 h-8 bg-gradient-to-b from-transparent pointer-events-none transition-colors duration-500 ${
                colorState.isColor ? 'via-white/25' : 'via-white/12'
              } to-transparent`}
            />

            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
          </motion.div>

        </div>

        {/* Main Name & Role Identification */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-center space-y-1.5"
        >
          <h1
            className="font-sans font-black text-xl sm:text-2xl tracking-tight text-white uppercase transition-opacity duration-500"
            style={{ opacity: colorState.isColor ? 1 : 0.8 }}
          >
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
