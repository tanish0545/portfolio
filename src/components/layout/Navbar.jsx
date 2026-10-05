import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeSection, onDownloadResume, theme = 'dark', onToggleTheme }) {
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

  const isDark = theme === 'dark';

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 dark:bg-[#0c0c0e]/90 backdrop-blur-xl border border-zinc-200/90 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.1),0_0_20px_rgba(229,9,20,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_25px_rgba(229,9,20,0.16)]'
              : 'bg-white/80 dark:bg-[#101014]/85 backdrop-blur-lg border border-zinc-200/80 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_15px_rgba(229,9,20,0.06)] dark:shadow-[0_4px_28px_rgba(0,0,0,0.65),0_0_20px_rgba(229,9,20,0.12)]'
          }`}
        >
          {/* Brand Logo: Clean circular logo with T + TANISH. */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer select-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500/50 rounded-lg"
            aria-label="Tanish Jangale Home"
          >
            {/* Circular Minimal Logo with subtle red neon glow */}
            <div className="w-8 h-8 rounded-full border border-red-500/70 bg-gradient-to-b from-[#240608] to-[#100203] dark:from-[#240608] dark:to-[#0d0203] flex items-center justify-center shadow-[0_0_12px_rgba(229,9,20,0.4)] group-hover:border-red-400 group-hover:shadow-[0_0_18px_rgba(229,9,20,0.65)] transition-all flex-shrink-0">
              <span className="font-bold text-white text-sm tracking-tight leading-none">
                T
              </span>
            </div>

            {/* Typography: TANISH. */}
            <span className="font-bold tracking-[0.05em] text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors flex items-center leading-none">
              TANISH<span className="text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.85)]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
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
                      ? 'text-red-600 dark:text-white font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-red-600/10 dark:bg-red-600/15 border border-red-500/35 dark:border-red-500/40 rounded-xl -z-10 shadow-[0_0_12px_rgba(229,9,20,0.22)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button (Desktop & Mobile) */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200/80 dark:bg-[#1A1A1A] dark:hover:bg-[#252525] border border-zinc-200 dark:border-[#333] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer shadow-sm"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-red-500 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Desktop Download Resume Button */}
            <button
              onClick={onDownloadResume}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] hover:from-[#c40811] hover:to-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 border border-zinc-200 dark:border-[#292929] focus:outline-none focus:ring-2 focus:ring-red-500/40 cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -15, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-7xl mx-auto px-3 sm:px-4 mt-2"
          >
            <div className="bg-white/95 dark:bg-[#101010]/95 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 border border-zinc-200 dark:border-[#292929] shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.9)] flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-500/10 dark:bg-red-600/15 text-red-600 dark:text-white font-semibold border border-red-500/30'
                        : 'text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-zinc-200 dark:border-[#222222] mt-1 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] shadow-[0_0_20px_rgba(229,9,20,0.4)]"
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
