import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0] overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#174C3C]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cinematic Large CTA Container - Dark Forest Green (#123C32) */}
        <div className="p-8 sm:p-14 lg:p-20 rounded-3xl bg-[#123C32] border-2 border-[#174C3C] shadow-2xl space-y-12 text-white">
          
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-[#DCE8E1] uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCE8E1] animate-pulse" />
              <span>10 // DIRECT TRANSMISSION</span>
            </div>

            <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] uppercase">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DCE8E1] to-[#5F806F]">
                SOMETHING.
              </span>
            </h2>

            <p className="text-[#DCE8E1]/90 text-lg sm:text-xl font-normal max-w-xl leading-relaxed">
              Have an interesting idea, engineering problem, or collaboration in AI, software, or embedded systems?
            </p>
          </div>

          {/* Interactive Email Bar & Direct Copy */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-2xl">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 flex items-center justify-between p-4 rounded-xl bg-[#174C3C]/80 border border-[#5F806F]/50 hover:border-white transition-all text-white font-medium text-sm sm:text-base group shadow-inner"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail size={18} className="text-[#DCE8E1] group-hover:text-white transition-colors shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <ArrowUpRight size={16} className="text-[#DCE8E1] group-hover:text-white transition-colors shrink-0 ml-2" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-4 rounded-xl bg-[#174C3C] border border-[#5F806F]/60 hover:border-white text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all active:scale-95 shrink-0"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-[#DCE8E1]" />
                  <span className="text-[#DCE8E1] font-bold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-[#DCE8E1]" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Buttons Matrix */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#174C3C]">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#123C32] font-bold text-xs tracking-wider uppercase hover:bg-[#DCE8E1] transition-all shadow-md active:scale-95"
            >
              <Send size={14} />
              <span>EMAIL ME</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="ANGU_ABISHEK_RESUME.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[#DCE8E1]/60 hover:border-white hover:bg-[#174C3C]/50 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              <ArrowUpRight size={14} className="text-[#DCE8E1]" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[#DCE8E1]/40 hover:border-white text-white font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#174C3C]/50"
            >
              <GithubIcon size={14} />
              <span>GITHUB</span>
              <ArrowUpRight size={12} className="text-[#DCE8E1]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[#DCE8E1]/40 hover:border-white text-white font-semibold text-xs tracking-wider uppercase transition-all hover:bg-[#174C3C]/50"
            >
              <LinkedinIcon size={14} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={12} className="text-[#DCE8E1]" />
            </a>
          </div>

          {/* Bottom Telemetry Status */}
          <div className="pt-6 border-t border-[#174C3C] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#DCE8E1]/80">
            <span className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#DCE8E1] animate-ping" />
              INBOX OPEN FOR INTERNSHIPS, R&D & HACKATHON COLLABORATION
            </span>
            <span className="font-semibold">LOCATION: {PERSONAL_INFO.location}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
