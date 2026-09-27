import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Binary } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';

const CATEGORIES = ['ALL', 'AI / ML', 'Full-Stack', 'Embedded / ECE', 'Computer Vision', 'System Architecture'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>03 // PORTFOLIO ARCHIVES</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            ENGINEERING INTELLIGENT SYSTEMS FOR REAL-WORLD PROBLEMS.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured;
            const colSpan = isFeatured ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                data-cursor="project"
                className={`${colSpan} group relative rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 overflow-hidden flex flex-col justify-between corner-border shadow-2xl`}
              >
                {/* Project Header Bar */}
                <div className="p-6 pb-4 border-b border-zinc-900/90 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-white">
                      PROJECT {project.number}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      // {project.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono text-zinc-200 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <GithubIcon size={13} />
                        <span>CODE</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white hover:bg-zinc-200 text-black text-xs font-mono font-semibold transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span>LIVE</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                        {project.displayName || project.title}
                      </h3>
                      <p className="font-mono text-xs text-zinc-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Architecture / Key Innovations Highlights */}
                    {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                      <div className="pt-2">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Binary size={12} className="text-zinc-400" />
                          <span>Key Architecture Innovations:</span>
                        </div>
                        <ul className="space-y-1.5">
                          {project.architectureHighlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Metric Badges */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.metrics.map((metric, mIdx) => (
                          <span
                            key={mIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                          >
                            <ShieldCheck size={11} className="text-zinc-400" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies Tags Container */}
                  <div className="mt-8 pt-6 border-t border-zinc-900/90">
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-2.5">
                      TECH_STACK // IMPLEMENTATION
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 group-hover:border-zinc-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Hover Indicator */}
                <div className="px-6 py-3 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>PRODUCTION REPOSITORY</span>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white hover:text-zinc-300 font-semibold transition-colors"
                    >
                      <span>VIEW REPO →</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
