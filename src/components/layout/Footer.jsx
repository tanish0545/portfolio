import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

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
    <footer className="relative border-t border-[#1C1C1C] bg-[#080808] pt-16 pb-12 overflow-hidden">
      {/* Top Red Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent shadow-[0_0_10px_#E50914]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#1A1A1A]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 mb-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#E50914] to-[#FF2633] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(229,9,20,0.5)] text-sm tracking-tighter">
                T
              </div>
              <span className="font-extrabold tracking-wider text-xl text-white group-hover:text-red-400 transition-colors">
                TANISH JANGALE<span className="text-[#E50914]">.</span>
              </span>
            </a>
            <p className="text-xs font-mono tracking-widest text-red-400 uppercase font-semibold">
              AI × SOFTWARE × CYBERSECURITY
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
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
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-zinc-400 hover:text-white border border-[#242424] hover:border-red-500/40 transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-zinc-400 hover:text-white border border-[#242424] hover:border-red-500/40 transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-zinc-400 hover:text-white border border-[#242424] hover:border-red-500/40 transition-colors shadow-sm"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-500/40 hover:border-red-500 transition-all hover:scale-105 active:scale-95 ml-2 shadow-[0_0_12px_rgba(229,9,20,0.2)]"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Tanish Jangale. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            Designed & Engineered with React, Tailwind CSS & Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
}
