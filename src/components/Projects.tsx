import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, ShieldCheck, Binary, X, Cpu, 
  Layers, CheckCircle2, Mail
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

const CATEGORIES = ['ALL', 'AI / ML', 'Full-Stack', 'Embedded / ECE', 'Computer Vision', 'System Architecture'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
                onClick={() => setActiveModalProject(project)}
                className={`${colSpan} group relative rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-500 transition-all duration-300 overflow-hidden flex flex-col justify-between corner-border shadow-2xl cursor-pointer`}
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

                    {/* Technical Visual Widget for SPAMSENSE AI */}
                    {project.id === 'spamsense-ai' && (
                      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/90 font-mono text-xs text-zinc-300 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-2 border-b border-zinc-800">
                          <span className="flex items-center gap-1.5 text-zinc-400">
                            <Mail size={13} className="text-zinc-300" />
                            AGENTIC_EMAIL_PIPELINE
                          </span>
                          <span className="text-emerald-400 font-bold">8 ACTIVE AGENTS</span>
                        </div>
                        <div className="flex items-center justify-between gap-1 text-[10px] text-center font-mono">
                          <div className="p-1.5 rounded bg-zinc-950 border border-zinc-800 flex-1">GMAIL</div>
                          <span className="text-zinc-600">→</span>
                          <div className="p-1.5 rounded bg-zinc-950 border border-zinc-800 flex-1">AI AGENTS</div>
                          <span className="text-zinc-600">→</span>
                          <div className="p-1.5 rounded bg-zinc-950 border border-zinc-700 text-white font-bold flex-1">SPAM/HAM</div>
                        </div>
                      </div>
                    )}

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
                    <span>CLICK FOR ARCHITECTURE & DETAILS</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-white group-hover:text-zinc-300 font-semibold transition-colors">
                    <span>EXPLORE →</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#09090b] border border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto corner-border flex flex-col p-6 sm:p-10 space-y-8"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-6 border-b border-zinc-800/80 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 font-bold text-white">
                      PROJECT {activeModalProject.number}
                    </span>
                    <span>// {activeModalProject.category}</span>
                  </div>
                  <h3 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight">
                    {activeModalProject.displayName || activeModalProject.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-zinc-400">
                    {activeModalProject.tagline}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-all shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Overview Section */}
              <div className="space-y-3">
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                  <Cpu size={14} className="text-zinc-400" />
                  <span>OVERVIEW & SYSTEM ARCHITECTURE</span>
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.extendedDescription || activeModalProject.description}
                </p>
              </div>

              {/* Dedicated Agentic Pipeline Section (for SPAMSENSE AI or projects with agents) */}
              {activeModalProject.agents && activeModalProject.agents.length > 0 && (
                <div className="space-y-6 pt-2">
                  <div className="font-mono text-xs text-white uppercase tracking-wider flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="flex items-center gap-2">
                      <Layers size={14} className="text-emerald-400" />
                      <span>AGENTIC PIPELINE ARCHITECTURE (8 AGENTS)</span>
                    </span>
                    <span className="text-zinc-500 font-mono text-[10px]">AUTONOMOUS MULTI-AGENT EXECUTION</span>
                  </div>

                  {/* Flow Diagram Summary */}
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-[11px] space-y-2">
                    <div className="text-zinc-500 text-[10px] uppercase">PIPELINE EXECUTION FLOW:</div>
                    <div className="flex flex-wrap items-center gap-2 text-zinc-300">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">GMAIL</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">EMAIL FETCH</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">CONTENT ANALYSIS</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">SPAM ANALYSIS</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">PHISHING ANALYSIS</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">SENDER REPUTATION</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">MEMORY</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-white font-bold">FINAL DECISION</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">USER FEEDBACK</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-emerald-400 font-bold">LEARNING</span>
                    </div>
                  </div>

                  {/* Connected Agent Nodes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {activeModalProject.agents.map((agent, aIdx) => (
                      <div
                        key={agent.number}
                        className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-600 transition-colors flex flex-col justify-between space-y-2 relative"
                      >
                        <div>
                          <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-1">
                            <span className="font-bold text-white px-1.5 py-0.5 rounded bg-zinc-900">
                              {agent.number}
                            </span>
                            <span className="text-[10px] text-zinc-500">STEP {aIdx + 1}</span>
                          </div>
                          <h4 className="font-mono text-xs font-bold text-zinc-200 mt-2">
                            {agent.name}
                          </h4>
                          <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-1">
                            {agent.responsibility}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Capabilities */}
              {activeModalProject.keyCapabilities && (
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck size={14} className="text-zinc-400" />
                    <span>KEY CAPABILITIES</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.keyCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300 font-sans"
                      >
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Technology Stack */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                  <Binary size={14} className="text-zinc-400" />
                  <span>COMPLETE TECHNOLOGY STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(activeModalProject.allTechnologies || activeModalProject.technologies).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-zinc-500">
                  REPOSITORY STATUS: PUBLIC
                </div>

                <div className="flex items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-md"
                    >
                      <GithubIcon size={15} />
                      <span>VIEW ON GITHUB →</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-xs font-mono text-zinc-300 transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
