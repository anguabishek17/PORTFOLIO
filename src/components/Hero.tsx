import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, MapPin, Terminal, Activity, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top Eyebrow Badge & Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/60 font-mono text-[11px] text-zinc-300 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">ACTIVE</span>
            <span className="text-zinc-500">|</span>
            <span>{PERSONAL_INFO.eyebrow}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800/80">
            <Activity size={12} className="text-zinc-400" />
            <span>HOSUR IST {timeString || '12:00:00'} (UTC+5:30)</span>
          </div>
        </motion.div>

        {/* Hero Grid: Typography + High-Tech Visual Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Cinematic Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-sans font-black tracking-tight text-white leading-[0.95] select-none text-[clamp(2.8rem,7vw,6.5rem)]">
                ANGU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                  ABISHEK M
                </span>
              </h1>
            </motion.div>

            {/* Role Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-2 font-mono text-sm sm:text-base text-zinc-300 font-medium"
            >
              <Terminal size={16} className="text-zinc-400 shrink-0" />
              <p className="tracking-tight text-zinc-300">
                {PERSONAL_INFO.headline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-zinc-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400"
            >
              <MapPin size={14} className="text-zinc-500" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary View Projects */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 active:scale-95"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Resume / Contact Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-zinc-800"
              >
                <FileText size={14} className="text-zinc-400" />
                <span>GET IN TOUCH / RESUME</span>
              </a>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub →</span>
              </a>
            </motion.div>
          </div>

          {/* Technical Visual Representation / Avatar Box (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl bg-zinc-950 border border-zinc-800/90 p-6 flex flex-col justify-between overflow-hidden group shadow-2xl corner-border">
              
              {/* Subtle top scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />
              
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm bg-white animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest">
                    SYS_PROFILE // ANGU
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  ID: 2026-ECE-AI
                </span>
              </div>

              {/* Center Abstract AI / Engineering Geometry Matrix */}
              <div className="relative my-auto flex flex-col items-center justify-center py-8">
                
                {/* Concentric Coordinate Rings */}
                <div className="relative w-44 h-44 rounded-full border border-zinc-800 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-zinc-700/60 animate-[spin_40s_linear_infinite]" />
                  <div className="w-32 h-32 rounded-full border border-zinc-800/90 flex items-center justify-center bg-zinc-900/50">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-950 border border-zinc-700 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-2xl font-black tracking-tighter text-white">
                        A
                      </span>
                    </div>
                  </div>

                  {/* Satellite indicators */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-zinc-500" />
                </div>

                {/* Subtitle Matrix */}
                <div className="mt-6 text-center space-y-1">
                  <p className="font-mono text-xs font-semibold text-white tracking-wide">
                    ANGU ABISHEK M
                  </p>
                  <p className="font-mono text-[11px] text-zinc-400">
                    B.E. ECE · CGPA 8.51 · Class of 2029
                  </p>
                </div>
              </div>

              {/* Bottom Real-time Metric Badges */}
              <div className="border-t border-zinc-800/80 pt-4 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-[10px] text-zinc-500 block">SPECIALTY</span>
                  <span className="text-xs font-bold text-zinc-200">AI + ECE</span>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-[10px] text-zinc-500 block">PATENT</span>
                  <span className="text-xs font-bold text-white">PUBLISHED</span>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/50">
                  <span className="text-[10px] text-zinc-500 block">HACKATHON</span>
                  <span className="text-xs font-bold text-zinc-200">TOP 50</span>
                </div>
              </div>

              {/* Hover Ambient Highlight */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/[0.04] blur-2xl rounded-full pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 sm:mt-24 flex items-center justify-between pt-6 border-t border-zinc-900 text-zinc-600 font-mono text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span>SCROLL TO EXPLORE SELECTED WORK</span>
          </div>

          <button
            onClick={() => handleScrollTo('about')}
            className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors"
          >
            <span>DISCOVER</span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
