import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Calendar, Building2, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>05 // INDUSTRY TRAJECTORY</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            INDUSTRIAL MANUFACTURING & EMBEDDED MAINTENANCE EXPOSURE.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 corner-border shadow-xl space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-900">
                  <div>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono mb-1">
                      <Building2 size={13} className="text-zinc-500" />
                      <span className="font-semibold text-white">{exp.company}</span>
                      {exp.division && (
                        <>
                          <span className="text-zinc-600">·</span>
                          <span className="text-zinc-400">{exp.division}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      {exp.position}
                    </h3>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
                      <Calendar size={12} className="text-zinc-400" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Duration: {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                    Core Industrial Contributions:
                  </div>
                  <ul className="space-y-2">
                    {exp.keyResponsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                        <CheckCircle2 size={14} className="text-zinc-500 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Live Project inside Experience (UNOMINDA SOP Platform) */}
                {exp.project && (
                  <div className="mt-4 p-5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                        <Terminal size={14} className="text-emerald-400" />
                        DEPLOYED ENTERPRISE APPLICATION: {exp.project.name}
                      </span>
                      {exp.project.liveUrl && (
                        <a
                          href={exp.project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                          <span>VIEW PROJECT</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
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
