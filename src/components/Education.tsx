import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE1DC] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#174C3C] mb-2 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>06 // ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight uppercase">
              EDUCATION
            </h2>
          </div>
          <p className="font-mono text-xs text-[#59635E] max-w-sm">
            HARDWARE & SIGNAL THEORY INTEGRATED WITH AI CURRICULA.
          </p>
        </div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE1DC] corner-border-light shadow-md space-y-8"
        >
          {/* Top Degree Details */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#DDE1DC]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE8E1] border border-[#174C3C]/20 font-mono text-xs text-[#123C32] font-semibold">
                <GraduationCap size={14} className="text-[#174C3C]" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>
              
              <h3 className="font-sans font-black text-2xl sm:text-4xl text-[#17201D] tracking-tight">
                {EDUCATION_DATA.institution}
              </h3>
              
              <p className="font-mono text-base sm:text-lg text-[#174C3C] font-semibold">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.major}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-[#59635E]">
                <MapPin size={13} className="text-[#174C3C]" />
                <span>{EDUCATION_DATA.location}</span>
              </div>
            </div>

            {/* Academic Standings Pill Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] text-center">
                <span className="text-[10px] text-[#59635E] block mb-1">CUMULATIVE GPA</span>
                <span className="text-2xl font-black text-[#123C32]">{EDUCATION_DATA.cgpa}</span>
                <span className="text-[10px] text-[#174C3C] block mt-1 font-semibold">First Class Standing</span>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] text-center">
                <span className="text-[10px] text-[#59635E] block mb-1">CURRENT CLASS</span>
                <span className="text-2xl font-black text-[#123C32]">{EDUCATION_DATA.year}</span>
                <span className="text-[10px] text-[#59635E] block mt-1">Graduation {EDUCATION_DATA.expectedGraduation}</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] text-center flex flex-col justify-center">
                <span className="text-[10px] text-[#59635E] block mb-1">STANDING</span>
                <span className="text-sm font-bold text-[#174C3C] uppercase">{EDUCATION_DATA.academicStatus}</span>
                <span className="text-[10px] text-[#59635E] block mt-1">All Semesters Cleared</span>
              </div>
            </div>
          </div>

          {/* Key Coursework and Knowledge Areas */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#174C3C] uppercase tracking-wider flex items-center gap-2 font-semibold">
              <BookOpen size={14} className="text-[#174C3C]" />
              <span>Core Theoretical & Laboratory Focus Areas:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EDUCATION_DATA.coreFocus.map((focus, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3.5 rounded-lg bg-[#F6F5F0] border border-[#DDE1DC] flex items-center gap-2.5"
                >
                  <CheckCircle size={14} className="text-[#174C3C] shrink-0" />
                  <span className="text-xs font-mono text-[#17201D] font-medium">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
