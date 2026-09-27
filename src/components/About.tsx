import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Layers, Zap, Radio, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const PILLAR_ICONS = [
  Radio, // ECE
  Cpu, // AI/ML
  Code, // Full-Stack
  Zap, // Hackathon
  Layers // Real-World
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>01 // PROFILE & BACKGROUND</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              ABOUT ME
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-xs">
            TRANSFORMING HARDWARE & AI THEORY INTO PRODUCTION ARCHITECTURES.
          </p>
        </div>

        {/* Main Statement & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Main Statement (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-sans font-medium text-2xl sm:text-3xl lg:text-4xl text-zinc-100 leading-snug tracking-tight">
              "{PERSONAL_INFO.aboutStatement}"
            </h3>
            
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.aboutParagraph}
            </p>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <Check size={16} className="text-white shrink-0" />
                <span className="text-xs font-mono text-zinc-300">V.S.B Engineering College, Karur</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <Check size={16} className="text-white shrink-0" />
                <span className="text-xs font-mono text-zinc-300">Published Patent Author</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <Check size={16} className="text-white shrink-0" />
                <span className="text-xs font-mono text-zinc-300">Top 50 Hackathon Finalist</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <Check size={16} className="text-white shrink-0" />
                <span className="text-xs font-mono text-zinc-300">Titan & UNOMINDA Industrial Alum</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Technical Summary Card (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative corner-border overflow-hidden"
          >
            <div className="font-mono text-xs text-zinc-500 mb-4 pb-3 border-b border-zinc-900 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-7 h-7 rounded-full object-cover object-top border border-zinc-700"
                />
                <span>ENGINEER_ID // 2026</span>
              </div>
              <span className="text-emerald-400 font-bold">5 PILLARS</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">DOMAIN:</span>
                <span className="text-white font-semibold">AI + ECE Convergence</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">MODELS:</span>
                <span className="text-white font-semibold">PyTorch, U-Net, YOLO, RAG</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">STACK:</span>
                <span className="text-white font-semibold">React, Vite, Next.js, FastAPI</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">EMBEDDED:</span>
                <span className="text-white font-semibold">LoRa RF, Microcontrollers</span>
              </div>
              <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">LOCATION:</span>
                <span className="text-white font-semibold">Hosur, TN, India</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>BUILDING FOR REALITY</span>
              <span className="text-zinc-400 font-bold">ACTIVE</span>
            </div>
          </motion.div>
        </div>

        {/* 5 Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PERSONAL_INFO.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || Code;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-4">
                    <span className="text-white font-bold">{pillar.number}</span>
                    <Icon size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-sans font-bold text-base text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between font-mono text-[10px] text-zinc-600">
                  <span>DISCIPLINE</span>
                  <span className="group-hover:text-zinc-400 transition-colors">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
