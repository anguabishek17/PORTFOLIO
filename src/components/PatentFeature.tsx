import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Cpu, Navigation } from 'lucide-react';
import { PATENT_DETAILS } from '../data/portfolioData';

export const PatentFeature: React.FC = () => {
  return (
    <section id="patent" className="py-24 relative z-10 border-b border-zinc-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow / Category */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-4 uppercase tracking-widest">
          <Satellite size={14} className="text-white animate-pulse" />
          <span>04 // INTELLECTUAL PROPERTY & PUBLISHED RESEARCH</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase max-w-4xl mb-12 leading-tight">
          PATENTED / <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
            PUBLISHED RESEARCH
          </span>
        </h2>

        {/* Main Patent Showcase Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 corner-border shadow-2xl overflow-hidden"
        >
          {/* Background Grid & Radar Graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
            <div className="w-full h-full rounded-full border border-dashed border-white animate-[spin_60s_linear_infinite]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Cols: Patent Info */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badge Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider">
                  {PATENT_DETAILS.status}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {PATENT_DETAILS.field}
                </span>
              </div>

              {/* Patent Title */}
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                "{PATENT_DETAILS.title}"
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {PATENT_DETAILS.description}
              </p>

              {/* Key Technical Highlights */}
              <div className="pt-4 space-y-3">
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu size={14} className="text-zinc-300" />
                  <span>Research Pillars & Innovation Mechanisms:</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PATENT_DETAILS.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span className="text-xs text-zinc-300 font-sans leading-relaxed">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Technical Telemetry Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4 font-mono text-xs">
              <div className="pb-3 border-b border-zinc-800 flex justify-between items-center text-zinc-500">
                <span>SENSOR_FUSION</span>
                <span className="text-white font-bold">SAR + OPTICAL</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                  <span>Modality:</span>
                  <span className="text-white">Multi-Temporal SAR</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                  <span>Grounding:</span>
                  <span className="text-white">Spatial Mask Evidence</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                  <span>Interaction:</span>
                  <span className="text-white">Natural Language Reasoning</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                  <span>Origin:</span>
                  <span className="text-white">ECE + AI Innovation</span>
                </div>
                <div className="flex justify-between py-1 text-zinc-400">
                  <span>Geo Anchor:</span>
                  <span className="text-white font-mono">{PATENT_DETAILS.coordinates}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  AUTHENTICATED RECORD
                </span>
                <Navigation size={12} className="text-zinc-400" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
