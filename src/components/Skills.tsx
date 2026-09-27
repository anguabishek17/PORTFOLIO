import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Layout, Server, Database, Wrench, Radio, 
  Terminal, Sparkles, ChevronRight 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Layout,
  Server,
  Database,
  Wrench,
  Radio,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredCategories = activeCategory === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative z-10 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>02 // ARCHITECTURE & TOOLING</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              TECHNICAL STACK
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-xs">
            CURATED TECHNOLOGIES FOR HIGH-PERFORMANCE AI & EMBEDDED COMPUTING.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${
              activeCategory === 'ALL'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            ALL CATEGORIES
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all ${
                activeCategory === cat.title
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => {
            const Icon = CATEGORY_ICON_MAP[category.iconName] || Terminal;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-900">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-mono text-xs font-bold tracking-wider text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">
                      {category.skills.length} MODULES
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 font-sans">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-zinc-900 border border-zinc-700/80 text-zinc-100 hover:border-white hover:text-white'
                            : 'bg-zinc-950 border border-zinc-800/70 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${skill.highlight ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/80 flex items-center justify-between font-mono text-[10px] text-zinc-600">
                  <span>PRODUCTION READY</span>
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform text-zinc-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Philosophy Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs"
        >
          <div className="flex items-center gap-3 text-zinc-300">
            <Sparkles size={16} className="text-zinc-400 shrink-0" />
            <span>CORE PHILOSOPHY: Zero fake metrics. Built on verified code, rigorous math, and reproducible architectures.</span>
          </div>
          <div className="text-zinc-500 text-[11px] shrink-0">
            ENGINEERING &gt; BUZZWORDS
          </div>
        </motion.div>

      </div>
    </section>
  );
};
