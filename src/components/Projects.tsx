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
    <section id="projects" className="py-24 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE1DC] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#174C3C] mb-2 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>03 // SELECTED WORK</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-mono text-xs text-[#59635E] max-w-sm">
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
                  ? 'bg-[#174C3C] text-white font-bold shadow-sm'
                  : 'bg-white text-[#59635E] hover:text-[#174C3C] border border-[#DDE1DC]'
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
                className={`${colSpan} group relative rounded-2xl bg-white border border-[#DDE1DC] hover:border-[#5F806F] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between corner-border-light shadow-sm hover:shadow-md cursor-pointer`}
              >
                {/* Project Header Bar */}
                <div className="p-6 pb-4 border-b border-[#DDE1DC] flex flex-wrap items-center justify-between gap-3 bg-[#F6F5F0]/40">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-[#DCE8E1] border border-[#174C3C]/20 text-[#123C32]">
                      PROJECT {project.number}
                    </span>
                    <span className="font-mono text-xs text-[#5F806F] font-semibold">
                      // {project.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F6F5F0] hover:bg-[#DCE8E1] border border-[#DDE1DC] text-xs font-mono text-[#17201D] hover:text-[#174C3C] transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#174C3C] hover:bg-[#123C32] text-white text-xs font-mono font-semibold transition-colors shadow-sm"
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
                      <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#17201D] tracking-tight group-hover:text-[#174C3C] transition-colors">
                        {project.displayName || project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#5F806F] mt-1 font-semibold">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-[#59635E] text-sm sm:text-base leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Technical Visual Widget for SPAMSENSE AI */}
                    {project.id === 'spamsense-ai' && (
                      <div className="p-4 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] font-mono text-xs text-[#17201D] space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-[#59635E] pb-2 border-b border-[#DDE1DC]">
                          <span className="flex items-center gap-1.5 text-[#123C32] font-semibold">
                            <Mail size={13} className="text-[#174C3C]" />
                            AGENTIC_EMAIL_PIPELINE
                          </span>
                          <span className="text-[#174C3C] font-bold">8 ACTIVE AGENTS</span>
                        </div>
                        <div className="flex items-center justify-between gap-1 text-[10px] text-center font-mono">
                          <div className="p-1.5 rounded bg-white border border-[#DDE1DC] flex-1">GMAIL</div>
                          <span className="text-[#8A938E]">→</span>
                          <div className="p-1.5 rounded bg-white border border-[#DDE1DC] flex-1">AI AGENTS</div>
                          <span className="text-[#8A938E]">→</span>
                          <div className="p-1.5 rounded bg-[#DCE8E1] border border-[#174C3C]/30 text-[#123C32] font-bold flex-1">SPAM/HAM</div>
                        </div>
                      </div>
                    )}

                    {/* Architecture / Key Innovations Highlights */}
                    {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                      <div className="pt-2">
                        <div className="text-[11px] font-mono text-[#5F806F] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                          <Binary size={12} className="text-[#174C3C]" />
                          <span>Key Architecture Innovations:</span>
                        </div>
                        <ul className="space-y-1.5">
                          {project.architectureHighlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs text-[#59635E] font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C] mt-1.5 shrink-0" />
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
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#ECEBE5] border border-[#DDE1DC] text-[11px] font-mono text-[#315C50] font-medium"
                          >
                            <ShieldCheck size={11} className="text-[#174C3C]" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies Tags Container */}
                  <div className="mt-8 pt-6 border-t border-[#DDE1DC]">
                    <div className="text-[10px] font-mono text-[#8A938E] uppercase tracking-wider mb-2.5 font-semibold">
                      TECH_STACK // IMPLEMENTATION
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#ECEBE5] border border-[#DDE1DC] text-[11px] font-mono text-[#315C50] font-medium group-hover:border-[#5F806F]/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Hover Indicator */}
                <div className="px-6 py-3 bg-[#F6F5F0]/60 border-t border-[#DDE1DC] flex items-center justify-between text-xs font-mono text-[#59635E]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
                    <span>VERIFIED PRODUCTION REPO</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[#174C3C] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE DETAILS →</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#123C32]/60 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#DDE1DC] rounded-2xl shadow-2xl overflow-y-auto corner-border-light flex flex-col p-6 sm:p-10 space-y-8"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-6 border-b border-[#DDE1DC] gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#5F806F]">
                    <span className="px-2.5 py-0.5 rounded bg-[#DCE8E1] border border-[#174C3C]/20 font-bold text-[#123C32]">
                      PROJECT {activeModalProject.number}
                    </span>
                    <span>// {activeModalProject.category}</span>
                  </div>
                  <h3 className="font-sans font-black text-2xl sm:text-4xl text-[#17201D] tracking-tight">
                    {activeModalProject.displayName || activeModalProject.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#59635E]">
                    {activeModalProject.tagline}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-lg bg-[#F6F5F0] border border-[#DDE1DC] hover:border-[#174C3C] text-[#59635E] hover:text-[#17201D] transition-all shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Overview Section */}
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#174C3C] uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Cpu size={14} className="text-[#174C3C]" />
                  <span>OVERVIEW & SYSTEM ARCHITECTURE</span>
                </div>
                <p className="text-[#59635E] text-sm sm:text-base leading-relaxed">
                  {activeModalProject.extendedDescription || activeModalProject.description}
                </p>
              </div>

              {/* Dedicated Agentic Pipeline Section */}
              {activeModalProject.agents && activeModalProject.agents.length > 0 && (
                <div className="space-y-6 pt-2">
                  <div className="font-mono text-xs text-[#123C32] uppercase tracking-wider flex items-center justify-between pb-2 border-b border-[#DDE1DC] font-bold">
                    <span className="flex items-center gap-2">
                      <Layers size={14} className="text-[#174C3C]" />
                      <span>AGENTIC PIPELINE ARCHITECTURE (8 AGENTS)</span>
                    </span>
                    <span className="text-[#59635E] font-mono text-[10px]">AUTONOMOUS MULTI-AGENT EXECUTION</span>
                  </div>

                  {/* Flow Diagram Summary */}
                  <div className="p-4 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] font-mono text-[11px] space-y-2">
                    <div className="text-[#59635E] text-[10px] uppercase font-semibold">PIPELINE EXECUTION FLOW:</div>
                    <div className="flex flex-wrap items-center gap-2 text-[#17201D]">
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">GMAIL</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">EMAIL FETCH</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">CONTENT ANALYSIS</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">SPAM ANALYSIS</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">PHISHING ANALYSIS</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">SENDER REPUTATION</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">MEMORY</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-[#DCE8E1] border border-[#174C3C]/30 text-[#123C32] font-bold">FINAL DECISION</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#DDE1DC]">USER FEEDBACK</span>
                      <span className="text-[#8A938E]">→</span>
                      <span className="px-2 py-0.5 rounded bg-[#174C3C] text-white font-bold">LEARNING</span>
                    </div>
                  </div>

                  {/* Connected Agent Nodes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {activeModalProject.agents.map((agent, aIdx) => (
                      <div
                        key={agent.number}
                        className="p-4 rounded-xl bg-[#F6F5F0] border border-[#DDE1DC] hover:border-[#174C3C] transition-colors flex flex-col justify-between space-y-2 relative"
                      >
                        <div>
                          <div className="flex items-center justify-between font-mono text-xs text-[#59635E] mb-1">
                            <span className="font-bold text-[#123C32] px-1.5 py-0.5 rounded bg-white border border-[#DDE1DC]">
                              {agent.number}
                            </span>
                            <span className="text-[10px] text-[#8A938E]">STEP {aIdx + 1}</span>
                          </div>
                          <h4 className="font-mono text-xs font-bold text-[#17201D] mt-2">
                            {agent.name}
                          </h4>
                          <p className="text-xs text-[#59635E] leading-relaxed font-sans mt-1">
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
                  <div className="font-mono text-xs text-[#174C3C] uppercase tracking-wider flex items-center gap-2 font-semibold">
                    <ShieldCheck size={14} className="text-[#174C3C]" />
                    <span>KEY CAPABILITIES</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.keyCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F6F5F0] border border-[#DDE1DC] text-xs text-[#17201D] font-sans"
                      >
                        <CheckCircle2 size={14} className="text-[#174C3C] mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Technology Stack */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs text-[#174C3C] uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Binary size={14} className="text-[#174C3C]" />
                  <span>COMPLETE TECHNOLOGY STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(activeModalProject.allTechnologies || activeModalProject.technologies).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#ECEBE5] border border-[#DDE1DC] text-xs font-mono text-[#315C50] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-[#DDE1DC] flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-[#59635E]">
                  REPOSITORY STATUS: PUBLIC
                </div>

                <div className="flex items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#174C3C] text-white font-mono font-bold text-xs tracking-wider uppercase hover:bg-[#123C32] transition-all shadow-md"
                    >
                      <GithubIcon size={15} />
                      <span>VIEW ON GITHUB →</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2.5 rounded-lg bg-[#F6F5F0] border border-[#DDE1DC] hover:border-[#174C3C] text-xs font-mono text-[#17201D] transition-colors"
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
