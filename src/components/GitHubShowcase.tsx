import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GitHubShowcase: React.FC = () => {
  const openSourceProjects = PROJECTS.filter(p => p.githubUrl);

  return (
    <section id="github" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE1DC] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#174C3C] mb-2 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>09 // OPEN SOURCE ARCHITECTURE</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight uppercase">
              BUILDING IN PUBLIC
            </h2>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#174C3C] hover:bg-[#123C32] text-xs font-mono font-medium text-white shadow-sm transition-all self-start md:self-auto active:scale-95"
          >
            <GithubIcon size={15} />
            <span>@anguabishek17 on GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Repositories Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceProjects.map((repo, idx) => (
            <motion.a
              key={repo.id}
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-white border border-[#DDE1DC] hover:border-[#5F806F] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#59635E]">
                    <Code2 size={15} className="text-[#174C3C] group-hover:text-[#123C32] transition-colors" />
                    <span className="font-bold text-[#17201D] group-hover:text-[#174C3C] transition-colors">
                      {repo.title}
                    </span>
                  </div>
                  <ExternalLink size={13} className="text-[#8A938E] group-hover:text-[#174C3C] transition-colors" />
                </div>

                <p className="text-xs text-[#59635E] line-clamp-3 leading-relaxed font-sans">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECEBE5] flex items-center justify-between font-mono text-[11px] text-[#59635E]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#174C3C]" />
                  <span className="font-medium text-[#17201D]">{repo.technologies[0] || 'Python'}</span>
                </div>
                <span className="text-[#8A938E]">Public Repository</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
