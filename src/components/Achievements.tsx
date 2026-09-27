import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileCheck, Shield } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE1DC] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#174C3C] mb-2 uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>08 // HONORS & RECOGNITIONS</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight uppercase">
              ACHIEVEMENTS
            </h2>
          </div>
          <p className="text-xs text-[#59635E] font-medium max-w-sm">
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
                    ? 'bg-[#123C32] text-white border-2 border-[#174C3C] shadow-xl md:col-span-1'
                    : 'bg-[#F6F5F0] border border-[#DDE1DC] hover:border-[#5F806F] hover:bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isPatent ? (
                        <div className="p-2 rounded-lg bg-[#DCE8E1] text-[#123C32]">
                          <FileCheck size={18} />
                        </div>
                      ) : (
                        <div className="p-2 rounded-lg bg-[#DCE8E1]/60 border border-[#DDE1DC] text-[#174C3C]">
                          <Trophy size={18} />
                        </div>
                      )}
                      <span className={`text-xs font-bold ${isPatent ? 'text-[#DCE8E1]' : 'text-[#5F806F]'}`}>
                        {item.category}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${
                      isPatent
                        ? 'bg-[#174C3C] border-[#5F806F] text-white'
                        : 'bg-white border-[#DDE1DC] text-[#174C3C]'
                    }`}>
                      {item.year}
                    </span>
                  </div>

                  <h3 className={`font-sans font-bold text-xl sm:text-2xl tracking-tight leading-snug ${
                    isPatent ? 'text-white' : 'text-[#17201D]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs font-semibold ${
                    isPatent ? 'text-[#DCE8E1]' : 'text-[#174C3C]'
                  }`}>
                    {item.summary}
                  </p>

                  {item.details && (
                    <p className={`text-xs leading-relaxed font-sans ${
                      isPatent ? 'text-[#ECEBE5]/80' : 'text-[#59635E]'
                    }`}>
                      {item.details}
                    </p>
                  )}
                </div>

                <div className={`mt-8 pt-4 border-t flex items-center justify-between text-xs ${
                  isPatent ? 'border-[#174C3C] text-[#DCE8E1]' : 'border-[#DDE1DC] text-[#59635E]'
                }`}>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Shield size={12} className={isPatent ? 'text-[#DCE8E1]' : 'text-[#174C3C]'} />
                    {item.organization}
                  </span>
                  <span className={`font-bold ${isPatent ? 'text-white' : 'text-[#174C3C]'}`}>VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
