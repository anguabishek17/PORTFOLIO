import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, GraduationCap, CheckCircle2 } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [cgpa, setCgpa] = useState(0);
  const [gradYear, setGradYear] = useState(2020);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCgpa(Number((8.51 * easeOut).toFixed(2)));
      setGradYear(Math.floor(2024 + (2029 - 2024) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setCgpa(8.51);
        setGradYear(2029);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isInView]);

  return (
    <section ref={ref} className="py-12 border-y border-[#DDE1DC] bg-[#ECEBE5]/40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* 8.51 CGPA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col p-5 rounded-xl bg-white border border-[#DDE1DC] hover:border-[#174C3C] transition-all hover:-translate-y-1 shadow-sm group"
          >
            <div className="flex items-center justify-between text-[#59635E] mb-3 font-mono text-xs">
              <span>METRIC // 01</span>
              <Award size={16} className="text-[#174C3C]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#123C32] tracking-tight">
                {isInView ? cgpa.toFixed(2) : '0.00'}
              </span>
            </div>
            <span className="font-mono text-xs font-semibold text-[#17201D] mt-2">CGPA</span>
            <span className="font-mono text-[11px] text-[#59635E]">Academic Standing</span>
          </motion.div>

          {/* 2029 Expected Graduation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col p-5 rounded-xl bg-white border border-[#DDE1DC] hover:border-[#174C3C] transition-all hover:-translate-y-1 shadow-sm group"
          >
            <div className="flex items-center justify-between text-[#59635E] mb-3 font-mono text-xs">
              <span>METRIC // 02</span>
              <Calendar size={16} className="text-[#174C3C]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#123C32] tracking-tight">
                {isInView ? gradYear : '2029'}
              </span>
            </div>
            <span className="font-mono text-xs font-semibold text-[#17201D] mt-2">GRADUATION</span>
            <span className="font-mono text-[11px] text-[#59635E]">B.E. ECE Class</span>
          </motion.div>

          {/* III Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col p-5 rounded-xl bg-white border border-[#DDE1DC] hover:border-[#174C3C] transition-all hover:-translate-y-1 shadow-sm group"
          >
            <div className="flex items-center justify-between text-[#59635E] mb-3 font-mono text-xs">
              <span>METRIC // 03</span>
              <GraduationCap size={16} className="text-[#174C3C]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#123C32] tracking-tight">
                III
              </span>
              <span className="text-[#59635E] font-mono text-lg font-normal ml-1">Year</span>
            </div>
            <span className="font-mono text-xs font-semibold text-[#17201D] mt-2">UNDERGRADUATE</span>
            <span className="font-mono text-[11px] text-[#59635E]">Electronics & Comm</span>
          </motion.div>

          {/* NO Backlogs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col p-5 rounded-xl bg-white border border-[#DDE1DC] hover:border-[#174C3C] transition-all hover:-translate-y-1 shadow-sm group"
          >
            <div className="flex items-center justify-between text-[#59635E] mb-3 font-mono text-xs">
              <span>METRIC // 04</span>
              <CheckCircle2 size={16} className="text-[#174C3C] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#123C32] tracking-tight">
                NO
              </span>
            </div>
            <span className="font-mono text-xs font-semibold text-[#17201D] mt-2">BACKLOGS</span>
            <span className="font-mono text-[11px] text-[#174C3C] font-semibold">100% Clear Standing</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
