import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#F6F5F0] relative z-10 border-t border-[#DDE1DC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#DDE1DC]">
          
          {/* Brand & Monogram Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-2xl tracking-widest text-[#123C32]">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="font-mono text-xs text-[#5F806F]">
                // {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-[#59635E]">
              AI Developer · ECE Undergraduate · Builder
            </p>
            <p className="font-mono text-[11px] text-[#8A938E]">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#59635E] hover:text-[#174C3C] font-medium transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#59635E] hover:text-[#174C3C] font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#59635E] hover:text-[#174C3C] font-medium transition-colors"
            >
              Email
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-white border border-[#DDE1DC] text-[#174C3C] hover:bg-[#DCE8E1]/50 hover:border-[#5F806F] transition-all ml-auto md:ml-4 font-semibold shadow-sm"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Build Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8A938E]">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[#59635E]">
            <span>Built with React + Vite + TypeScript + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
