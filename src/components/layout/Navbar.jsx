import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar({ activeSection, onDownloadResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full box-border ${
        scrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-[clamp(0.5rem,3vw,1.5rem)] w-full box-border">
        <div
          className={`flex items-center justify-between px-[clamp(0.75rem,3vw,1.25rem)] py-2 sm:py-2.5 rounded-2xl transition-all duration-300 w-full box-border ${
            scrolled
              ? 'bg-[#0c0c0e]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_25px_rgba(229,9,20,0.16)]'
              : 'bg-[#101014]/85 backdrop-blur-lg border border-white/10 shadow-[0_4px_28px_rgba(0,0,0,0.65),0_0_20px_rgba(229,9,20,0.12)]'
          }`}
        >
          {/* Brand Logo: Clean circular logo with T + TANISH. */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer select-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500/50 rounded-lg flex-shrink-0"
            aria-label="Tanish Jangale Home"
          >
            {/* Circular Minimal Logo with subtle red neon glow */}
            <div className="w-8 h-8 rounded-full border border-red-500/70 bg-gradient-to-b from-[#240608] to-[#0d0203] flex items-center justify-center shadow-[0_0_12px_rgba(229,9,20,0.4)] group-hover:border-red-400 group-hover:shadow-[0_0_18px_rgba(229,9,20,0.65)] transition-all flex-shrink-0">
              <span className="font-bold text-white text-sm tracking-tight leading-none">
                T
              </span>
            </div>

            {/* Typography: TANISH. */}
            <span className="font-bold tracking-[0.05em] text-base sm:text-lg text-white group-hover:text-red-400 transition-colors flex items-center leading-none">
              TANISH<span className="text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.85)]">.</span>
            </span>
          </a>

          {/* Desktop Navigation (strictly hidden on screens <= 768px) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-xl text-xs lg:text-[13px] font-medium tracking-[0.02em] transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-red-600/15 border border-red-500/40 rounded-xl -z-10 shadow-[0_0_12px_rgba(229,9,20,0.22)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Desktop Download Resume Button (only on screens > 768px) */}
            <button
              onClick={onDownloadResume}
              className="hidden md:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] hover:from-[#c40811] hover:to-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            {/* Mobile menu hamburger button (screens <= 768px: md:hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-400 dark:text-zinc-400 hover:text-white hover:bg-white/5 border border-zinc-800 dark:border-[#292929] focus:outline-none focus:ring-2 focus:ring-red-500/40 cursor-pointer flex-shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (screens <= 768px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden max-w-7xl mx-auto px-[clamp(0.5rem,3vw,1.5rem)] mt-2 w-full box-border"
          >
            <div className="bg-[#0e0e12]/95 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 border border-red-950/60 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(229,9,20,0.12)] flex flex-col gap-1.5 w-full box-border">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-600/15 text-white font-semibold border border-red-500/30'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-[#222222] mt-1 flex flex-col gap-2.5">
                {/* Download Resume Button within Drawer */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] shadow-[0_0_20px_rgba(229,9,20,0.4)] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
