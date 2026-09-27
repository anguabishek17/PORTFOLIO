import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>06 // ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              EDUCATION
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            RIGOROUS HARDWARE & SIGNAL THEORY INTEGRATED WITH AI CURRICULA.
          </p>
        </div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 corner-border shadow-2xl space-y-8"
        >
          {/* Top Degree Details */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-zinc-900">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
                <GraduationCap size={14} className="text-white" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>
              
              <h3 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight">
                {EDUCATION_DATA.institution}
              </h3>
              
              <p className="font-mono text-base sm:text-lg text-zinc-300 font-medium">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.major}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <MapPin size={13} />
                <span>{EDUCATION_DATA.location}</span>
              </div>
            </div>

            {/* Academic Standings Pill Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                <span className="text-[10px] text-zinc-500 block mb-1">CUMULATIVE GPA</span>
                <span className="text-2xl font-black text-white">{EDUCATION_DATA.cgpa}</span>
                <span className="text-[10px] text-emerald-400 block mt-1">First Class / Distinction</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
                <span className="text-[10px] text-zinc-500 block mb-1">CURRENT CLASS</span>
                <span className="text-2xl font-black text-white">{EDUCATION_DATA.year}</span>
                <span className="text-[10px] text-zinc-400 block mt-1">Graduation {EDUCATION_DATA.expectedGraduation}</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center flex flex-col justify-center">
                <span className="text-[10px] text-zinc-500 block mb-1">STANDING</span>
                <span className="text-sm font-bold text-white uppercase">{EDUCATION_DATA.academicStatus}</span>
                <span className="text-[10px] text-zinc-400 block mt-1">All Semesters Cleared</span>
              </div>
            </div>
          </div>

          {/* Key Coursework and Knowledge Areas */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={14} className="text-zinc-500" />
              <span>Core Theoretical & Laboratory Focus Areas:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EDUCATION_DATA.coreFocus.map((focus, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-2.5"
                >
                  <CheckCircle size={14} className="text-zinc-400 shrink-0" />
                  <span className="text-xs font-mono text-zinc-300">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
