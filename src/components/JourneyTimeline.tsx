import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Cpu, 
  FileCheck2, 
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

// Milestone category icons mapping
const TYPE_ICONS: Record<string, React.ReactNode> = {
  Education: <GraduationCap size={15} className="text-[#174C3C]" />,
  Internship: <Briefcase size={15} className="text-[#174C3C]" />,
  Hackathon: <Trophy size={15} className="text-[#174C3C]" />,
  Project: <Cpu size={15} className="text-[#174C3C]" />,
  Patent: <FileCheck2 size={15} className="text-[#174C3C]" />,
  Future: <Sparkles size={15} className="text-[#174C3C]" />,
};

interface JourneyMilestone {
  year: string;
  month?: string;
  title: string;
  type: string;
  subtitle?: string;
  description?: string;
  side: 'left' | 'right';
  highlight?: string;
  tag?: string;
}

// Complete verified timeline dataset incorporating all verified data points
const JOURNEY_ITEMS: JourneyMilestone[] = [
  {
    year: '2024',
    title: 'Joined B.E. Electronics & Communication Engineering',
    type: 'Education',
    subtitle: 'V.S.B Engineering College, Karur',
    description: 'Joined V.S.B Engineering College, beginning my Electronics & Communication Engineering journey with a dual focus on electronics fundamentals and software systems.',
    side: 'left',
    highlight: 'Foundation in Circuit Theory, Digital Logic & C/C++',
    tag: 'FOUNDATION'
  },
  {
    year: '2025',
    month: 'June',
    title: 'Titan Company Ltd Internship',
    type: 'Internship',
    subtitle: 'Watches Division · Electronic Case Maintenance',
    description: 'Studied high-precision electronic watch assembly, calibration workflows, hermetic sealing validation, and preventive maintenance protocols.',
    side: 'right',
    highlight: 'Precision Micro-Electronics & Case Testing',
    tag: 'INDUSTRY'
  },
  {
    year: '2025',
    title: 'Smart India Hackathon Internal Finalist',
    type: 'Hackathon',
    subtitle: 'National Innovation Hackathon',
    description: 'Selected as Internal Finalist representing the institution for developing high-impact engineering architectures addressing national problem statements.',
    side: 'left',
    highlight: 'Selected as College Representative',
    tag: 'COMPETITION'
  },
  {
    year: '2025',
    title: 'Embedded Systems & Applied Engineering',
    type: 'Project',
    subtitle: 'LoRa Sensor Telemetry & Applied Deep Learning',
    description: 'Engineered hardware prototypes with Sub-GHz LoRa RF communication and explored neural architectures with U-Net image restoration.',
    side: 'right',
    highlight: 'Long-Range RF Telemetry & Computer Vision',
    tag: 'SYSTEMS'
  },
  {
    year: '2026',
    title: 'KPRIET Ignitron 24-Hour Hackathon — Top 50',
    type: 'Hackathon',
    subtitle: 'National Level Hackathon · JARVIS-AML',
    description: 'Developed JARVIS-AML in a 24-hour sprint, qualifying in the Top 50 teams nationally with a graph-based financial forensics engine.',
    side: 'left',
    highlight: 'Ranked Top 50 Nationally · Money Trail DNA',
    tag: 'AI / FINTECH'
  },
  {
    year: '2026',
    month: 'June – July',
    title: 'Unominda Company Ltd Internship',
    type: 'Internship',
    subtitle: 'Seating Division Plant 2 · Production & Digital SOP Platform',
    description: 'Production department internship and engineering of the production-ready UNOMINDA Digital Standard Operating Procedure application.',
    side: 'right',
    highlight: 'Automotive Manufacturing & Production Web App',
    tag: 'AUTOMATION'
  },
  {
    year: '2026',
    title: 'Published Patent on Satellite AI Analysis',
    type: 'Patent',
    subtitle: 'Evidence-Grounded Multi-Temporal Satellite Platform',
    description: 'Authored and published research patent covering natural-language multimodal interaction with optical and SAR satellite imagery (SATQUERY AI).',
    side: 'left',
    highlight: 'Published Research Patent · SAR & Optical AI',
    tag: 'PATENT'
  },
  {
    year: 'PRESENT',
    title: 'Building the Future of Intelligent Systems',
    type: 'Future',
    subtitle: 'AI · ECE · Autonomous Systems · Next-Gen Products',
    description: 'Continuously learning, building projects, and exploring AI, software, electronics, and intelligent engineering systems for real-world impact.',
    side: 'right',
    highlight: 'Multimodal AI · Agentic Workflows · Embedded Computing',
    tag: 'FORWARD'
  }
];

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll tracking across the entire Journey section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 90%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001
  });

  // ScaleY progress for the central vertical line (0 -> 1)
  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="py-24 sm:py-32 relative z-10 border-b border-[#DDE1DC] bg-[#F6F5F0] overflow-hidden"
    >
      {/* Top subtle section progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#DDE1DC]/50 overflow-hidden">
        <motion.div 
          className="h-full bg-[#174C3C] origin-left"
          style={{ scaleX: lineScaleY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 pb-6 border-b border-[#DDE1DC] gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs text-[#174C3C] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
              <span>07 // MY JOURNEY</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#17201D] tracking-tight">
              From Electronics <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17201D] via-[#174C3C] to-[#5F806F]">
                to Intelligent Systems.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#59635E] font-medium max-w-md leading-relaxed">
            A timeline of the projects, competitions, engineering experiences, and ideas that shaped how I build today.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          
          {/* Central Timeline Spine (Desktop / Tablet: Centered, Mobile: Left-aligned) */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#DDE1DC]">
            {/* Scroll-driven active green fill */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#174C3C] via-[#174C3C] to-[#5F806F] origin-top"
              style={{ 
                height: '100%',
                scaleY: lineScaleY 
              }}
            />
          </div>

          {/* Milestones Sequence */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {JOURNEY_ITEMS.map((item, idx) => {
              const isLeft = item.side === 'left';
              const isLast = idx === JOURNEY_ITEMS.length - 1;

              return (
                <TimelineMilestoneItem
                  key={idx}
                  item={item}
                  index={idx}
                  total={JOURNEY_ITEMS.length}
                  isLeft={isLeft}
                  isLast={isLast}
                />
              );
            })}
          </div>

        </div>

        {/* Transition into Next Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-24 sm:mt-32 pt-12 border-t border-[#DDE1DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/70 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border shadow-sm"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#174C3C] uppercase tracking-wider">
              <Sparkles size={14} />
              <span>NEXT MILESTONES IN PROGRESS</span>
            </div>
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#17201D] tracking-tight">
              Ready to Explore Verified Achievements & Honors?
            </h3>
            <p className="text-xs sm:text-sm text-[#59635E] font-medium">
              Discover competition laurels, hackathon awards, and institutional credentials.
            </p>
          </div>

          <a
            href="#achievements"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#174C3C] hover:bg-[#123C32] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-95 shrink-0"
          >
            <span>VIEW ACHIEVEMENTS</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// Reusable milestone component with localized viewport interaction
const TimelineMilestoneItem: React.FC<{
  item: JourneyMilestone;
  index: number;
  total: number;
  isLeft: boolean;
  isLast: boolean;
}> = ({ item, index, total, isLeft, isLast }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  // Individual milestone viewport scroll progress
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start 85%', 'center 50%']
  });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.85, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 0.99, 1]);
  const yearOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 1]);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative flex items-center md:justify-between ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row pl-12 md:pl-0 group`}
    >
      {/* 1. Milestone Card (Desktop: 42% width, Mobile: 100% width) */}
      <motion.div 
        className="w-full md:w-[44%]"
        style={{ opacity: cardOpacity, scale: cardScale }}
      >
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DDE1DC] hover:border-[#5F806F] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md corner-border-light flex flex-col justify-between space-y-4">
          
          {/* Card Top Metadata Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#DDE1DC]">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#ECEBE5] border border-[#DDE1DC]">
                {TYPE_ICONS[item.type] || <Cpu size={14} className="text-[#174C3C]" />}
              </span>
              <span className="text-xs font-bold text-[#174C3C] uppercase tracking-wider">
                {item.type}
              </span>
            </div>

            <span className="text-[10px] font-bold text-[#59635E] px-2 py-0.5 rounded bg-[#F6F5F0] border border-[#DDE1DC]">
              {item.tag}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5">
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#17201D] tracking-tight group-hover:text-[#174C3C] transition-colors">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-[#5F806F] font-semibold">
                {item.subtitle}
              </p>
            )}
          </div>

          {/* Detailed Narrative */}
          {item.description && (
            <p className="text-xs sm:text-sm text-[#59635E] leading-relaxed font-normal">
              {item.description}
            </p>
          )}

          {/* Key Highlight Pill */}
          {item.highlight && (
            <div className="pt-2 border-t border-[#ECEBE5]">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C32] bg-[#DCE8E1]/60 px-2.5 py-1 rounded-md border border-[#174C3C]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]" />
                <span>{item.highlight}</span>
              </div>
            </div>
          )}

          {/* Step Sequence Indicator */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-[#8A938E] font-medium border-t border-[#ECEBE5]">
            <span>MILESTONE 0{index + 1} / 0{total}</span>
            <span className="text-[#174C3C] font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
              <span>EXPLORE</span>
              <ChevronRight size={12} />
            </span>
          </div>

        </div>
      </motion.div>

      {/* 2. Central Interactive Timeline Node (Desktop: Centered, Mobile: Left-aligned) */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
        <div className="relative flex items-center justify-center">
          {/* Subtle outer ping pulse on active milestone */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#174C3C]/30 bg-white/90 shadow-sm flex items-center justify-center group-hover:border-[#174C3C] transition-colors">
            {/* Core Node Dot */}
            <div 
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
                isLast 
                  ? 'bg-[#174C3C] shadow-[0_0_8px_rgba(23,76,60,0.5)] scale-110' 
                  : 'bg-[#174C3C] group-hover:scale-125'
              }`}
            />
          </div>
        </div>
      </div>

      {/* 3. Opposite Side Large Year Label & Telemetry (Desktop Only) */}
      <motion.div 
        style={{ opacity: yearOpacity }}
        className={`hidden md:flex w-[44%] flex-col ${
          isLeft ? 'items-start pl-8 text-left' : 'items-end pr-8 text-right'
        } space-y-1`}
      >
        <span className="text-[11px] font-bold text-[#5F806F] uppercase tracking-widest">
          {item.month ? `${item.month.toUpperCase()} // ` : ''}TIMELINE STAGE
        </span>
        <div className="font-sans font-black text-4xl sm:text-6xl text-[#17201D] group-hover:text-[#174C3C] transition-colors duration-500 select-none tracking-tight">
          {item.year}
        </div>
        <span className="text-xs font-semibold text-[#59635E] max-w-xs">
          {item.tag} // {item.type.toUpperCase()}
        </span>
      </motion.div>

    </motion.div>
  );
};

