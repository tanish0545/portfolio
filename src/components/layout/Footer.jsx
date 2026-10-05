import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-zinc-200 dark:border-[#1C1C1C] bg-zinc-50 dark:bg-[#080808] pt-16 pb-12 overflow-hidden transition-colors duration-300 w-full max-w-full box-border">
      {/* Top Red Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent shadow-[0_0_10px_#E50914]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200 dark:border-[#1A1A1A]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 mb-2 group">
              <div className="w-8 h-8 rounded-full border border-red-500/70 bg-gradient-to-b from-[#240608] to-[#100203] dark:from-[#240608] dark:to-[#0d0203] flex items-center justify-center shadow-[0_0_12px_rgba(229,9,20,0.4)] group-hover:border-red-400 group-hover:shadow-[0_0_18px_rgba(229,9,20,0.65)] transition-all flex-shrink-0">
                <span className="font-bold text-white text-sm tracking-tight leading-none">
                  T
                </span>
              </div>
              <span className="font-bold tracking-[0.05em] text-lg text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                TANISH JANGALE<span className="text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.85)]">.</span>
              </span>
            </a>
            <p className="text-xs font-mono tracking-widest text-red-600 dark:text-red-400 uppercase font-semibold">
              AI × SOFTWARE × CYBERSECURITY
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#141414] dark:hover:bg-[#1E1E1E] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-[#242424] hover:border-red-400 dark:hover:border-red-500/40 transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#141414] dark:hover:bg-[#1E1E1E] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-[#242424] hover:border-red-400 dark:hover:border-red-500/40 transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#141414] dark:hover:bg-[#1E1E1E] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-[#242424] hover:border-red-400 dark:hover:border-red-500/40 transition-colors shadow-sm"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-red-100 hover:bg-red-200 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-500/40 hover:border-red-500 transition-all hover:scale-105 active:scale-95 ml-2 shadow-[0_0_12px_rgba(229,9,20,0.2)]"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div>
            © {CURRENT_YEAR} Tanish Jangale. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            Designed & Engineered with React, Tailwind CSS & Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
}
