import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/ANGU_ABISHEK_RESUME.pdf', isExternal: true },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.filter(l => !l.isExternal).map(link => link.href.substring(1));
      const currentPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string; isExternal?: boolean }) => {
    if (link.isExternal) {
      setMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-white/85 backdrop-blur-xl border-b border-[#DDE1DC] shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, { name: 'Home', href: '#home' })}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#123C32] border border-[#174C3C] group-hover:bg-[#174C3C] transition-all duration-300 shadow-sm">
              <span className="font-mono text-sm font-black tracking-tighter text-white group-hover:scale-105 transition-transform">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-sm text-[#123C32] group-hover:text-[#174C3C] transition-colors">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="font-mono text-[9px] text-[#59635E] uppercase tracking-wider hidden sm:block">
                ECE · AI DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/90 border border-[#DDE1DC] px-3 py-1.5 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  download={link.isExternal ? 'ANGU_ABISHEK_RESUME.pdf' : undefined}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#123C32] font-semibold'
                      : 'text-[#59635E] hover:text-[#174C3C]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#DCE8E1]/70 border border-[#174C3C]/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#DDE1DC] text-[#59635E] hover:text-[#174C3C] hover:border-[#174C3C] transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#DDE1DC] text-[#59635E] hover:text-[#174C3C] hover:border-[#174C3C] transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { name: 'Contact', href: '#contact' })}
              className="hidden md:flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-lg bg-[#174C3C] hover:bg-[#123C32] text-white transition-all shadow-sm"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#DDE1DC] text-[#123C32] hover:text-[#174C3C]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Cinematic Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-[#F6F5F0]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-10 px-8"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 pb-4 border-b border-[#DDE1DC] font-mono text-xs text-[#59635E]">
                <Terminal size={14} className="text-[#174C3C]" />
                <span>NAVIGATION // MENU</span>
              </div>

              <div className="flex flex-col space-y-2 mt-4">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      download={link.isExternal ? 'ANGU_ABISHEK_RESUME.pdf' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`text-2xl font-bold py-2.5 flex items-center justify-between border-b border-[#DDE1DC] ${
                        isActive ? 'text-[#123C32]' : 'text-[#59635E] hover:text-[#174C3C]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="font-mono text-xs text-[#8A938E]">0{idx + 1}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#DDE1DC]">
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white border border-[#DDE1DC] text-sm font-medium text-[#17201D]"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white border border-[#DDE1DC] text-sm font-medium text-[#17201D]"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <p className="text-center font-mono text-[11px] text-[#59635E]">
                ANGU ABISHEK M · {PERSONAL_INFO.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
