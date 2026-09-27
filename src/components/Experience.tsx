import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Calendar, Building2, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE1DC] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#174C3C] mb-2 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>05 // INDUSTRY TRAJECTORY</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight uppercase">
              INDUSTRIAL EXPERIENCE
            </h2>
          </div>
          <p className="font-mono text-xs text-[#59635E] max-w-sm">
            MANUFACTURING WORKFLOWS & EMBEDDED MAINTENANCE EXPOSURE.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#DDE1DC] ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Pin Node in Forest Green */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#174C3C] flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#DDE1DC] hover:border-[#174C3C] hover:shadow-md transition-all duration-300 corner-border-light shadow-sm space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DDE1DC]">
                  <div>
                    <div className="flex items-center gap-2 text-[#5F806F] text-xs font-mono mb-1 font-semibold">
                      <Building2 size={13} className="text-[#174C3C]" />
                      <span className="text-[#123C32]">{exp.company}</span>
                      {exp.division && (
                        <>
                          <span className="text-[#8A938E]">·</span>
                          <span className="text-[#59635E]">{exp.division}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#17201D] tracking-tight">
                      {exp.position}
                    </h3>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2 font-mono text-xs text-[#59635E]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#DCE8E1] border border-[#174C3C]/20 text-[#123C32] font-semibold">
                      <Calendar size={12} className="text-[#174C3C]" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-[#8A938E]">
                      Duration: {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#59635E] text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-[#174C3C] uppercase tracking-wider font-semibold">
                    Core Industrial Contributions:
                  </div>
                  <ul className="space-y-2">
                    {exp.keyResponsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#59635E]">
                        <CheckCircle2 size={14} className="text-[#174C3C] mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Live Project inside Experience (UNOMINDA SOP Platform) */}
                {exp.project && (
                  <div className="mt-4 p-5 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#123C32] tracking-wider flex items-center gap-1.5">
                        <Terminal size={14} className="text-[#174C3C]" />
                        DEPLOYED ENTERPRISE APPLICATION: {exp.project.name}
                      </span>
                      {exp.project.liveUrl && (
                        <a
                          href={exp.project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#174C3C] hover:bg-[#123C32] text-white font-mono text-xs font-bold transition-colors shadow-sm"
                        >
                          <span>VIEW PROJECT</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-[#59635E] leading-relaxed font-sans">
                      {exp.project.description}
                    </p>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
