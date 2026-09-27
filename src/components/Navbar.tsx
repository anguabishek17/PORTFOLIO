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

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
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
            ? 'py-3.5 bg-black/70 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80'
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
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 group-hover:border-white transition-all duration-300">
              <span className="font-mono text-sm font-black tracking-tighter text-white group-hover:scale-105 transition-transform">
                A
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-sm text-white group-hover:text-zinc-200 transition-colors">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider hidden sm:block">
                ECE · AI DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-zinc-950/80 border border-white/[0.08] px-3 py-1.5 shadow-inner">
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
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-zinc-800/90 border border-zinc-700/60 rounded-full"
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
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { name: 'Contact', href: '#contact' })}
              className="hidden md:flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all shadow-sm"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
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
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-10 px-8"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 pb-4 border-b border-zinc-800 font-mono text-xs text-zinc-500">
                <Terminal size={14} className="text-emerald-400" />
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
                      className={`text-2xl font-bold py-2.5 flex items-center justify-between border-b border-zinc-900 ${
                        isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-900">
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-white"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-white"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <p className="text-center font-mono text-[11px] text-zinc-600">
                ANGU ABISHEK M · {PERSONAL_INFO.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
