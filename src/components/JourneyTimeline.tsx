import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE1DC] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#174C3C] mb-2 uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>07 // EVOLUTION & MILESTONES</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight uppercase">
              MY JOURNEY
            </h2>
          </div>
          <p className="text-xs text-[#59635E] font-medium max-w-sm">
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
                className="p-6 rounded-2xl bg-white border border-[#DDE1DC] hover:border-[#174C3C] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DDE1DC]">
                    <span className="text-xs font-bold text-[#174C3C] px-2.5 py-0.5 rounded bg-[#DCE8E1]/60 border border-[#DDE1DC]">
                      {event.year} {event.month ? `· ${event.month}` : ''}
                    </span>
                    <span className="text-[10px] text-[#5F806F] uppercase font-bold tracking-wider">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[#17201D] mb-1 group-hover:text-[#174C3C] transition-colors">
                    {event.title}
                  </h3>

                  {event.subtitle && (
                    <p className="text-xs text-[#5F806F] mb-3 font-semibold">
                      {event.subtitle}
                    </p>
                  )}

                  {event.description && (
                    <p className="text-xs text-[#59635E] leading-relaxed font-sans font-normal">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-[#ECEBE5] flex items-center justify-between text-xs text-[#8A938E] font-medium">
                  <span>STEP 0{idx + 1}</span>
                  <ChevronRight size={13} className="text-[#5F806F] group-hover:text-[#174C3C] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
