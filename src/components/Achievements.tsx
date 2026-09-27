import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileCheck, Shield } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>08 // HONORS & RECOGNITIONS</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              ACHIEVEMENTS
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            VALIDATED COMPETITIVE ENGINEERING & INTELLECTUAL MILESTONES.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const isPatent = item.isPatent;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPatent
                    ? 'bg-zinc-950 border-2 border-white/80 shadow-2xl corner-border md:col-span-1'
                    : 'bg-zinc-950 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isPatent ? (
                        <div className="p-2 rounded-lg bg-white text-black">
                          <FileCheck size={18} />
                        </div>
                      ) : (
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white">
                          <Trophy size={18} />
                        </div>
                      )}
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        {item.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs font-medium text-zinc-300">
                    {item.summary}
                  </p>

                  {item.details && (
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} className={isPatent ? 'text-white' : 'text-zinc-500'} />
                    {item.organization}
                  </span>
                  <span className="text-zinc-400 font-bold">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
