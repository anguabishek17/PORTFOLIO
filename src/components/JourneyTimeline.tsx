import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>07 // EVOLUTION & MILESTONES</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              MY JOURNEY
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            CHRONOLOGICAL ACCELERATION FROM CLASSROOM TO PATENTS & HACKATHONS.
          </p>
        </div>

        {/* Milestone Cards Grid / Interactive Stepper */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-900">
                    <span className="font-mono text-sm font-black text-white px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {event.year} {event.month ? `· ${event.month}` : ''}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-zinc-100 transition-colors">
                    {event.title}
                  </h3>

                  {event.subtitle && (
                    <p className="font-mono text-xs text-zinc-400 mb-3">
                      {event.subtitle}
                    </p>
                  )}

                  {event.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between font-mono text-[10px] text-zinc-600">
                  <span>STEP 0{idx + 1}</span>
                  <ChevronRight size={13} className="text-zinc-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
