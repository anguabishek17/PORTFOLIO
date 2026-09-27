import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-black relative z-10 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          
          {/* Brand & Monogram Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-2xl tracking-widest text-white">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                // {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-zinc-400">
              AI Developer · ECE Undergraduate · Builder
            </p>
            <p className="font-mono text-[11px] text-zinc-600">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Email
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all ml-auto md:ml-4"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Build Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-600">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <span>Built with React + Vite + TypeScript + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
