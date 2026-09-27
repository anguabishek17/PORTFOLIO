import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Cpu, Navigation } from 'lucide-react';
import { PATENT_DETAILS } from '../data/portfolioData';

export const PatentFeature: React.FC = () => {
  return (
    <section id="patent" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow / Category */}
        <div className="flex items-center gap-2 text-xs text-[#174C3C] mb-4 uppercase tracking-wider font-semibold">
          <Satellite size={14} className="text-[#174C3C] animate-pulse" />
          <span>04 // INTELLECTUAL PROPERTY & PUBLISHED RESEARCH</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-[#17201D] tracking-tight uppercase max-w-4xl mb-12 leading-tight">
          PATENTED / <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17201D] via-[#174C3C] to-[#5F806F]">
            PUBLISHED RESEARCH
          </span>
        </h2>

        {/* Main Patent Showcase Box in Editorial Dark Green #123C32 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-[#123C32] border border-[#174C3C] p-8 sm:p-12 shadow-2xl overflow-hidden text-white"
        >
          {/* Background Grid & Radar Graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
            <div className="w-full h-full rounded-full border border-dashed border-white animate-[spin_60s_linear_infinite]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Cols: Patent Info */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badge Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white text-[#123C32] text-xs font-bold uppercase tracking-wider shadow-sm">
                  {PATENT_DETAILS.status}
                </span>
                <span className="text-xs font-medium text-[#DCE8E1]">
                  {PATENT_DETAILS.field}
                </span>
              </div>

              {/* Patent Title */}
              <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                "{PATENT_DETAILS.title}"
              </h3>

              {/* Description */}
              <p className="text-[#DCE8E1] text-base sm:text-lg leading-relaxed font-normal">
                {PATENT_DETAILS.description}
              </p>

              {/* Key Technical Highlights */}
              <div className="pt-4 space-y-3">
                <div className="text-xs text-[#DCE8E1] uppercase tracking-wider flex items-center gap-2 font-bold">
                  <Cpu size={14} className="text-white" />
                  <span>Research Pillars & Innovation Mechanisms:</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PATENT_DETAILS.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#174C3C]/60 border border-[#5F806F]/40"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span className="text-xs text-[#DCE8E1] font-sans leading-relaxed">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Technical Telemetry Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#174C3C]/40 border border-[#5F806F]/40 space-y-4 text-xs">
              <div className="pb-3 border-b border-[#5F806F]/40 flex justify-between items-center text-[#DCE8E1]">
                <span className="font-semibold uppercase">SENSOR FUSION</span>
                <span className="text-white font-bold">SAR + OPTICAL</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-1 border-b border-[#5F806F]/30 text-[#DCE8E1]/80">
                  <span className="font-medium">Modality:</span>
                  <span className="text-white font-semibold">Multi-Temporal SAR</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5F806F]/30 text-[#DCE8E1]/80">
                  <span className="font-medium">Grounding:</span>
                  <span className="text-white font-semibold">Spatial Mask Evidence</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5F806F]/30 text-[#DCE8E1]/80">
                  <span className="font-medium">Interaction:</span>
                  <span className="text-white font-semibold">Natural Language</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#5F806F]/30 text-[#DCE8E1]/80">
                  <span className="font-medium">Origin:</span>
                  <span className="text-white font-semibold">ECE + AI Innovation</span>
                </div>
                <div className="flex justify-between py-1 text-[#DCE8E1]/80">
                  <span className="font-medium">Geo Anchor:</span>
                  <span className="text-white font-semibold">{PATENT_DETAILS.coordinates}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#5F806F]/40 flex items-center justify-between text-xs text-[#DCE8E1]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  AUTHENTICATED RECORD
                </span>
                <Navigation size={12} className="text-white" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
