import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Shield,
  Brain,
  Code2,
  ArrowUpRight,
  Download,
  Mail,
  ChevronDown
} from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

// Transparent portrait cutout: Tanish standing in grey suit with folded hands
const PORTRAIT_CUTOUT = "/assets/photo.png";

export default function Hero({ onDownloadResume }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = () => {
    if (onDownloadResume) {
      onDownloadResume();
    } else {
      const link = document.createElement('a');
      link.href = personalInfo.resumeUrl || '/assets/Tanish Manoj Jangale - CV.pdf';
      link.download = personalInfo.resumeFilename || 'Tanish Manoj Jangale - CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-[100svh] lg:min-h-[860px] xl:min-h-[900px] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-20 pb-4 sm:pb-6 overflow-hidden bg-[#080808]"
    >
      {/* ======================================================== */}
      {/* LAYER 1: BASE TECHNICAL GRID & AMBIENT ATMOSPHERE        */}
      {/* ======================================================== */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Atmospheric Red Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/12 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-[5%] w-[360px] h-[360px] bg-red-950/25 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-24 right-[5%] w-[360px] h-[360px] bg-red-950/25 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Fine technical horizontal accent line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none z-0" />

      {/* ======================================================== */}
      {/* LAYER 2: FUTURISTIC CIRCULAR HALO & NEON RING BEHIND (DESKTOP ONLY) */}
      {/* =================================================================== */}
      <div className="hidden lg:block absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[5]">
        {/* Outer dashed spinning futuristic ring */}
        <div className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-red-500/20 animate-[spin_90s_linear_infinite]" />

        {/* Middle red neon accent ring */}
        <div className="absolute inset-3 sm:inset-5 lg:inset-7 rounded-full border border-red-500/30 shadow-[0_0_40px_rgba(229,9,20,0.25)]" />

        {/* Inner pulsing red radial glow */}
        <div className="absolute inset-8 sm:inset-12 lg:inset-14 rounded-full bg-gradient-to-tr from-red-600/15 via-red-900/10 to-transparent blur-2xl" />

        {/* Tech crosshair grid marks */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-red-500/15 to-transparent -translate-x-1/2" />
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-500/15 to-transparent -translate-y-1/2" />
      </div>

      {/* ======================================================== */}
      {/* LAYER 3: CENTER TRANSPARENT PORTRAIT (MAIN VISUAL FOCUS) */}
      {/* Placed in exact center, head to waist, suit unchanged     */}
      {/* ======================================================== */}
      <div className="hidden lg:flex absolute inset-x-0 bottom-14 lg:bottom-12 top-16 lg:top-14 items-end justify-center pointer-events-none select-none z-[10]">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[560px] xl:h-[620px] 2xl:h-[660px] w-auto max-w-[90vw] flex items-end justify-center"
        >
          {/* Transparent cutout of Tanish in grey suit with folded hands */}
          <img
            src={PORTRAIT_CUTOUT}
            alt="Tanish Jangale"
            className="h-full w-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] brightness-[1.02] contrast-[1.02]"
            loading="eager"
          />

          {/* Soft Bottom Grounding Fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 4: SINGLE HORIZONTAL LINE NAME TYPOGRAPHY          */}
      {/* Displayed ONLY ONCE. Layered over the lower torso only,  */}
      {/* completely below the face. TANISH white, JANGALE red.    */}
      {/* ======================================================== */}
      <div className="hidden lg:block absolute top-[70%] xl:top-[71%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-[20] pointer-events-none select-none px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-[5rem] font-black tracking-tight uppercase whitespace-nowrap leading-none"
        >
          <span className="text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            TANISH{' '}
          </span>
          <span className="text-[#E50914] drop-shadow-[0_0_40px_rgba(229,9,20,0.7)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            JANGALE
          </span>
        </motion.h1>
      </div>

      {/* ======================================================== */}
      {/* LAYER 5 (DESKTOP): FOREGROUND TWO-COLUMN CONTENT         */}
      {/* Left side aligned left, Right side aligned right,         */}
      {/* with portrait clear in center and NO wrapping!           */}
      {/* ======================================================== */}
      <div className="hidden lg:flex relative max-w-[1560px] mx-auto px-6 lg:px-8 xl:px-12 w-full z-[30] my-auto items-center justify-between">

        {/* ---------------------------------------------------- */}
        {/* LEFT SIDE: Greeting, Title, AI Card, Security Card, Socials */}
        {/* ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-start space-y-3.5 w-[310px] xl:w-[340px] flex-shrink-0"
        >
          {/* Greeting & Availability Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-red-400 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(229,9,20,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              <span>HELLO, I'M TANISH</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-zinc-300 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
              </span>
              <span className="tracking-wide">{personalInfo.availability}</span>
            </div>
          </div>

          {/* Professional Title Subtitle */}
          <div className="flex items-center gap-2 text-[12px] xl:text-[13px] font-mono font-semibold tracking-wide text-red-400 leading-snug">
            <Terminal className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
            <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              AI ENTHUSIAST | SOFTWARE DEVELOPER | CYBERSECURITY ENTHUSIAST
            </span>
          </div>

          {/* Floating Skill Card 1: AI & LLM Solutions */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full p-3.5 rounded-2xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800/90 hover:border-red-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Brain className="w-4 h-4 xl:w-5 xl:h-5 text-[#FF2633]" />
              </div>
              <div>
                <h3 className="text-xs xl:text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  AI & LLM Solutions
                </h3>
                <p className="text-[11px] xl:text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Generative AI apps, prompt engineering & practical machine intelligence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Skill Card 2: Cybersecurity & Threat Defense */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full p-3.5 rounded-2xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800/90 hover:border-red-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Shield className="w-4 h-4 xl:w-5 xl:h-5 text-[#E50914]" />
              </div>
              <div>
                <h3 className="text-xs xl:text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  Cybersecurity Defense
                </h3>
                <p className="text-[11px] xl:text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Threat analysis, vulnerability evaluation & defensive engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2.5 pt-0.5">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile - Tanish Jangale"
              className="p-2.5 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 text-zinc-400 hover:text-white transition-all shadow-md group cursor-pointer"
            >
              <Github className="w-4 h-4 text-zinc-300 group-hover:text-[#E50914] transition-colors" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile - Tanish Jangale"
              className="p-2.5 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 text-zinc-400 hover:text-white transition-all shadow-md group cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-zinc-300 group-hover:text-[#E50914] transition-colors" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Send Email to Tanish Jangale"
              className="p-2.5 rounded-xl bg-zinc-900/85 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 text-zinc-400 hover:text-white transition-all shadow-md group cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-300 group-hover:text-[#E50914] transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* ---------------------------------------------------- */}
        {/* RIGHT SIDE: Introduction, Statistics, Software Card  */}
        {/* Cleanly positioned on the right side of the portrait */}
        {/* ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-end space-y-3.5 w-[310px] xl:w-[340px] flex-shrink-0"
        >
          {/* Short Professional Introduction */}
          <div className="w-full p-4 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800/85 shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-left">
            <p className="text-xs xl:text-[13px] text-zinc-300 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Project & Technology Statistics */}
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="p-2.5 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-center shadow-sm">
              <span className="block text-base xl:text-lg font-black text-white">2026</span>
              <span className="block text-[9px] xl:text-[10px] font-mono text-zinc-400 uppercase mt-0.5">BCA Amity</span>
            </div>

            <div className="p-2.5 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-center shadow-sm">
              <span className="block text-base xl:text-lg font-black text-[#E50914]">5+</span>
              <span className="block text-[9px] xl:text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Projects</span>
            </div>

            <div className="p-2.5 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-center shadow-sm">
              <span className="block text-base xl:text-lg font-black text-white">3</span>
              <span className="block text-[9px] xl:text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Domains</span>
            </div>
          </div>

          {/* Floating Skill Card 3: Software Engineering */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full p-3.5 rounded-2xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800/90 hover:border-red-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.7)] group transition-all text-left"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Code2 className="w-4 h-4 xl:w-5 xl:h-5 text-[#E50914]" />
              </div>
              <div>
                <h3 className="text-xs xl:text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  Full-Stack Software
                </h3>
                <p className="text-[11px] xl:text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Python, React, TypeScript, scalable APIs & modern responsive architectures.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* ---------------------------------------------------- */}
      {/* DESKTOP BOTTOM CENTER: Primary Action Buttons        */}
      {/* ---------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="hidden lg:flex flex-wrap items-center justify-center gap-3 pt-3 pb-1 w-full z-[30]"
      >
        {/* Button 1: EXPLORE MY PROJECTS */}
        <button
          id="hero-explore-projects-btn"
          onClick={() => handleScrollTo('projects')}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs xl:text-sm text-white bg-gradient-to-r from-[#E50914] via-[#FF2633] to-[#c40811] shadow-[0_0_25px_rgba(229,9,20,0.45)] hover:shadow-[0_0_35px_rgba(229,9,20,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
        >
          <span>Explore My Projects</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Button 2: CONTACT ME */}
        <button
          id="hero-contact-btn"
          onClick={() => handleScrollTo('contact')}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs xl:text-sm text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500/60 shadow-[0_4px_16px_rgba(0,0,0,0.6)] active:scale-[0.98] transition-all duration-200 backdrop-blur-md cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#E50914]" />
          <span>Contact Me</span>
        </button>

        {/* Button 3: DOWNLOAD RESUME */}
        <button
          id="hero-download-resume-btn"
          onClick={handleResumeClick}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs xl:text-sm text-white bg-zinc-900/90 hover:bg-zinc-800 border border-red-500/40 hover:border-red-500 shadow-[0_0_15px_rgba(229,9,20,0.2)] hover:shadow-[0_0_22px_rgba(229,9,20,0.4)] active:scale-[0.98] transition-all duration-200 backdrop-blur-md cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#FF2633]" />
          <span>Download Resume</span>
        </button>
      </motion.div>

      {/* ======================================================== */}
      {/* MOBILE & TABLET LAYOUT (< lg)                            */}
      {/* Streamlined vertical flow: Header -> Visual Portrait with */}
      {/* Halo & Name across chest -> Action buttons -> Cards      */}
      {/* ======================================================== */}
      <div className="lg:hidden relative w-full px-4 sm:px-6 z-[30] flex flex-col items-center space-y-5 my-auto">

        {/* Mobile Header: Greeting & Availability */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-red-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(229,9,20,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span>HELLO, I'M TANISH</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-zinc-300 text-[11px] sm:text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>
        </div>

        {/* Mobile Professional Title */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs font-mono font-semibold text-red-400 max-w-md">
          <Terminal className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
          <span>AI ENTHUSIAST | SOFTWARE DEVELOPER | CYBERSECURITY ENTHUSIAST</span>
        </div>

        {/* Mobile Center Portrait & Halo Stage */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[340px] sm:h-[390px] flex items-end justify-center overflow-visible my-2">
          {/* Subtle single centered circular glow/outline behind portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[5]">
            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-red-500/25 bg-gradient-to-tr from-red-600/15 via-red-950/20 to-transparent shadow-[0_0_35px_rgba(229,9,20,0.25)]" />
          </div>

          {/* Centered Transparent Portrait */}
          <div className="relative h-full w-auto flex items-end justify-center z-[10]">
            <img
              src={PORTRAIT_CUTOUT}
              alt="Tanish Jangale"
              className="h-full w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
          </div>

          {/* Single-line Name layered across lower torso */}
          <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-[20] pointer-events-none select-none px-2">
            <h1 className="text-[clamp(1.25rem,5.6vw,2.5rem)] font-black tracking-tight uppercase whitespace-nowrap leading-none">
              <span className="text-white drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)]">
                TANISH{' '}
              </span>
              <span className="text-[#E50914] drop-shadow-[0_0_30px_rgba(229,9,20,0.8)] drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)]">
                JANGALE
              </span>
            </h1>
          </div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex flex-col items-center gap-2 w-full max-w-xs pt-1">
          <div className="grid grid-cols-2 gap-2 w-full">
            <button
              onClick={() => handleScrollTo('projects')}
              className="py-2.5 px-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#E50914] to-[#c40811] shadow-[0_0_20px_rgba(229,9,20,0.4)] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="py-2.5 px-2.5 rounded-xl font-bold text-xs text-white bg-zinc-900 border border-zinc-700 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
              <span>Contact Me</span>
            </button>
          </div>

          <button
            onClick={handleResumeClick}
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-zinc-900 border border-red-500/50 shadow-[0_0_12px_rgba(229,9,20,0.2)] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-[#FF2633] flex-shrink-0" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Stats Box */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
          <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
            <span className="block text-sm font-black text-white">2026</span>
            <span className="block text-[8px] font-mono text-zinc-400 uppercase">BCA Amity</span>
          </div>
          <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
            <span className="block text-sm font-black text-[#E50914]">5+</span>
            <span className="block text-[8px] font-mono text-zinc-400 uppercase">Projects</span>
          </div>
          <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
            <span className="block text-sm font-black text-white">3</span>
            <span className="block text-[8px] font-mono text-zinc-400 uppercase">Domains</span>
          </div>
        </div>

        {/* Mobile Skill Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-md">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left">
            <div className="p-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-red-400 flex-shrink-0">
              <Brain className="w-3.5 h-3.5 text-[#FF2633]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">AI & LLMs</h4>
              <p className="text-[10px] text-zinc-400">GenAI & Prompt Eng</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left">
            <div className="p-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-red-400 flex-shrink-0">
              <Shield className="w-3.5 h-3.5 text-[#E50914]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Cybersecurity</h4>
              <p className="text-[10px] text-zinc-400">Threat Defense</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left">
            <div className="p-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-red-400 flex-shrink-0">
              <Code2 className="w-3.5 h-3.5 text-[#E50914]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Software</h4>
              <p className="text-[10px] text-zinc-400">Full-Stack & APIs</p>
            </div>
          </div>
        </div>

        {/* Mobile Socials */}
        <div className="flex items-center gap-3 pt-1">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile - Tanish Jangale"
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#E50914] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile - Tanish Jangale"
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#E50914] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            aria-label="Send Email to Tanish Jangale"
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#E50914] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.button
        onClick={() => handleScrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="mt-2 mb-1 inline-flex flex-col items-center gap-1 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer group mx-auto z-[30]"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 group-hover:text-red-400">SCROLL DOWN</span>
        <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-500 animate-bounce" />
      </motion.button>
    </section>
  );
}
