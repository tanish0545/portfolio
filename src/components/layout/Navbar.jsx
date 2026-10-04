import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#0D0D0D]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-[#292929]'
              : 'bg-[#101010]/80 backdrop-blur-lg border border-[#292929]/70 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#E50914] to-[#FF2633] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(229,9,20,0.5)] text-sm tracking-tighter">
              T
            </div>
            <span className="font-extrabold tracking-wider text-lg text-white group-hover:text-red-400 transition-colors">
              TANISH<span className="text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-red-600/15 border border-red-500/40 rounded-lg -z-10 shadow-[0_0_12px_rgba(229,9,20,0.25)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] hover:from-[#c40811] hover:to-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] active:scale-[0.98] transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 border border-[#292929] focus:outline-none"
              aria-label="Toggle Navigation Menu"
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
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-[#101010]/95 backdrop-blur-2xl rounded-2xl p-5 border border-[#292929] shadow-[0_12px_40px_rgba(0,0,0,0.9)] flex flex-col gap-2">
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

              <div className="pt-3 border-t border-[#222222] mt-1">
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
