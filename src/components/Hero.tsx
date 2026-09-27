import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, MapPin, Terminal, Activity, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#F6F5F0]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#174C3C]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top Eyebrow Badge & Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDE1DC] text-xs text-[#174C3C] tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#174C3C] animate-ping" />
            <span className="font-bold text-[#123C32]">ACTIVE</span>
            <span className="text-[#8A938E]">|</span>
            <span className="text-[#59635E] font-medium">{PERSONAL_INFO.eyebrow}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#59635E] px-3 py-1 rounded-full bg-white/70 border border-[#DDE1DC]">
            <Activity size={12} className="text-[#174C3C]" />
            <span>HOSUR IST {timeString || '12:00:00'} (UTC+5:30)</span>
          </div>
        </motion.div>

        {/* Hero Grid: Typography + High-Tech Visual Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Cinematic Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-sans font-extrabold tracking-tight text-[#17201D] leading-[0.95] select-none text-[clamp(2.8rem,7vw,6.5rem)]">
                ANGU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17201D] via-[#174C3C] to-[#5F806F]">
                  ABISHEK M
                </span>
              </h1>
            </motion.div>

            {/* Role Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-2 text-sm sm:text-base text-[#174C3C] font-semibold"
            >
              <Terminal size={16} className="text-[#174C3C] shrink-0" />
              <p className="tracking-tight">
                {PERSONAL_INFO.headline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#59635E] text-base sm:text-lg max-w-xl font-normal leading-relaxed"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-2 text-xs font-medium text-[#59635E]"
            >
              <MapPin size={14} className="text-[#174C3C]" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary View Projects */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#174C3C] text-white font-semibold text-xs tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-[#123C32] hover:shadow-lg hover:shadow-[#174C3C]/20 active:scale-95"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Download Resume Button */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="ANGU_ABISHEK_RESUME.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[#174C3C] hover:bg-[#DCE8E1]/60 text-[#174C3C] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <FileText size={14} className="text-[#174C3C]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-xs font-semibold text-[#59635E] hover:text-[#174C3C] transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub →</span>
              </a>
            </motion.div>
          </div>

          {/* Technical Visual Representation / Avatar Box (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl bg-white border border-[#DDE1DC] p-6 flex flex-col justify-between overflow-hidden group shadow-xl corner-border-light">
              
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between border-b border-[#DDE1DC] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#174C3C] animate-pulse" />
                  <span className="text-xs font-bold text-[#123C32] tracking-wider">
                    SYS_PROFILE // ANGU
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#5F806F]">
                  ID: 2026-ECE-AI
                </span>
              </div>

              {/* Center Profile Visual & Engineering Geometry Matrix */}
              <div className="relative my-auto flex flex-col items-center justify-center py-6">
                
                {/* Concentric Coordinate Rings with Profile Portrait */}
                <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-full border border-[#DDE1DC] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#5F806F]/40 animate-[spin_50s_linear_infinite]" />
                  
                  {/* Outer glow ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#DCE8E1] via-transparent to-transparent blur-sm" />

                  {/* Profile Image Container */}
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[#174C3C] shadow-lg bg-[#ECEBE5] group-hover:border-[#123C32] transition-all duration-500">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Satellite indicators */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#174C3C] shadow-[0_0_8px_rgba(23,76,60,0.4)]" />
                  <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-[#5F806F]" />
                </div>

                {/* Subtitle Matrix */}
                <div className="mt-5 text-center space-y-1">
                  <p className="text-sm font-bold text-[#123C32] tracking-wide uppercase">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="text-xs font-medium text-[#59635E]">
                    B.E. ECE · CGPA 8.51 · Class of 2028
                  </p>
                </div>
              </div>

              {/* Bottom Real-time Metric Badges */}
              <div className="border-t border-[#DDE1DC] pt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-[#ECEBE5]/60 border border-[#DDE1DC]">
                  <span className="text-[10px] text-[#59635E] block font-medium">SPECIALTY</span>
                  <span className="text-xs font-bold text-[#174C3C]">AI + ECE</span>
                </div>
                <div className="p-2 rounded bg-[#ECEBE5]/60 border border-[#DDE1DC]">
                  <span className="text-[10px] text-[#59635E] block font-medium">PATENT</span>
                  <span className="text-xs font-bold text-[#123C32]">PUBLISHED</span>
                </div>
                <div className="p-2 rounded bg-[#ECEBE5]/60 border border-[#DDE1DC]">
                  <span className="text-[10px] text-[#59635E] block font-medium">HACKATHON</span>
                  <span className="text-xs font-bold text-[#174C3C]">TOP 50</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 sm:mt-24 flex items-center justify-between pt-6 border-t border-[#DDE1DC] text-[#59635E] text-xs font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
            <span>SCROLL TO EXPLORE SELECTED WORK</span>
          </div>

          <button
            onClick={() => handleScrollTo('about')}
            className="flex items-center gap-1.5 text-[#59635E] hover:text-[#174C3C] transition-colors font-semibold"
          >
            <span>DISCOVER</span>
            <ArrowDown size={14} className="animate-bounce text-[#174C3C]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
