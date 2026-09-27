import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const GitHubShowcase: React.FC = () => {
  const openSourceProjects = PROJECTS.filter(p => p.githubUrl);

  return (
    <section id="github" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>09 // OPEN SOURCE ARCHITECTURE</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              BUILDING IN PUBLIC
            </h2>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-white text-xs font-mono font-medium text-white transition-all self-start md:self-auto"
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
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                    <Code2 size={15} className="text-zinc-500 group-hover:text-white transition-colors" />
                    <span className="font-bold text-white group-hover:underline">
                      {repo.title}
                    </span>
                  </div>
                  <ExternalLink size={13} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-sans">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{repo.technologies[0] || 'Python'}</span>
                </div>
                <span>Public Repository</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
