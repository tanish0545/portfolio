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
import ParticleCanvas from '../common/ParticleCanvas';
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
      className="relative min-h-screen lg:h-[100svh] lg:min-h-[860px] xl:min-h-[900px] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-20 pb-4 sm:pb-6 overflow-hidden bg-transparent"
    >
      {/* ======================================================== */}
      {/* LAYER 1 & 2: BASE TECHNICAL GRID & BACKGROUND EFFECTS     */}
      {/* ======================================================== */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-[1]" aria-hidden="true" />

      {/* Atmospheric Red Ambient Glows (Layer 3: z-index 2) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] bg-red-600/10 dark:bg-red-600/12 rounded-full blur-[180px] pointer-events-none z-[2]" aria-hidden="true" />
      <div className="absolute bottom-20 left-[5%] w-[320px] h-[320px] bg-red-950/20 dark:bg-red-950/25 rounded-full blur-[150px] pointer-events-none z-[2]" aria-hidden="true" />
      <div className="absolute top-24 right-[5%] w-[320px] h-[320px] bg-red-950/20 dark:bg-red-950/25 rounded-full blur-[150px] pointer-events-none z-[2]" aria-hidden="true" />

      {/* Fine technical horizontal accent line (z-index 2) */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/15 to-transparent pointer-events-none z-[2]" aria-hidden="true" />

      {/* ====================================================================== */}
      {/* LAYER 4 (Z-INDEX 3): RED ATMOSPHERIC PARTICLES                         */}
      {/* Floating behind the portrait, circle, name, cards, and interactive UI  */}
      {/* ====================================================================== */}
      <ParticleCanvas className="absolute inset-0 pointer-events-none z-[3]" />

      {/* ====================================================================== */}
      {/* LAYER 5 & 6 (DESKTOP): PORTRAIT STAGE WITH RED HALO RING               */}
      {/* Ring is at z-0, Portrait image is at relative z-10                     */}
      {/* The portrait naturally covers the ring wherever they overlap.          */}
      {/* The ring arches above and frames head/shoulders as a background halo.  */}
      {/* ====================================================================== */}
      <div className="hidden lg:flex absolute inset-x-0 bottom-14 lg:bottom-12 top-16 lg:top-14 items-end justify-center pointer-events-none select-none z-[5]">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[560px] xl:h-[620px] 2xl:h-[660px] w-auto max-w-[90vw] flex items-end justify-center"
        >
          {/* Symmetrical Red Halo Ring behind portrait head & upper torso (z-0) */}
          <div
            className="absolute top-[28%] xl:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
            aria-hidden="true"
          >
            <div className="w-[330px] h-[330px] xl:w-[370px] xl:h-[370px] 2xl:w-[450px] 2xl:h-[450px] rounded-full border-2 border-red-500/40 bg-gradient-to-tr from-red-600/10 via-red-950/15 to-transparent shadow-[0_0_30px_rgba(229,9,20,0.3),inset_0_0_15px_rgba(229,9,20,0.12)]" />
          </div>

          {/* Transparent cutout of Tanish in grey suit with folded hands (relative z-10) */}
          <img
            src={PORTRAIT_CUTOUT}
            alt="Tanish Jangale"
            className="relative z-10 h-full w-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] brightness-[1.02] contrast-[1.02]"
            loading="eager"
          />

          {/* Soft Bottom Grounding Fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F8F9FA] dark:from-[#080808] to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* LAYER 7 (Z-INDEX 6): SUBSTANTIALLY ENLARGED HERO NAME     */}
      {/* Single line, strong modern bold sans-serif, tasteful     */}
      {/* letter-spacing, across lower torso/chest (NEVER face!)   */}
      {/* TANISH in white, JANGALE in red.                         */}
      {/* ======================================================== */}
      <div className="hidden lg:block absolute top-[68%] xl:top-[69%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-[6] pointer-events-none select-none px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl lg:text-[4.4rem] xl:text-[5.4rem] 2xl:text-[6.2rem] font-black tracking-[0.04em] uppercase whitespace-nowrap leading-none select-none"
        >
          <span className="text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            TANISH{' '}
          </span>
          <span className="text-[#E50914] drop-shadow-[0_0_35px_rgba(229,9,20,0.7)]">
            JANGALE
          </span>
        </motion.h1>
      </div>

      {/* ======================================================== */}
      {/* LAYER 10 (DESKTOP): FOREGROUND TWO-COLUMN CONTENT        */}
      {/* Left side aligned left, Right side aligned right,         */}
      {/* with portrait clear in center and NO collision!          */}
      {/* ======================================================== */}
      <div className="hidden lg:flex relative max-w-[1560px] mx-auto px-6 lg:px-8 xl:px-12 w-full z-[10] my-auto items-center justify-between">

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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/70 border border-red-300 dark:border-red-500/40 text-red-600 dark:text-red-400 text-xs font-semibold tracking-wider uppercase shadow-sm dark:shadow-[0_0_15px_rgba(229,9,20,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              <span>HELLO, I'M TANISH</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>
          </div>

          {/* Professional Title */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 dark:text-red-400 tracking-wide">
            <Terminal className="w-4 h-4 text-[#E50914] flex-shrink-0" />
            <span>AI ENTHUSIAST | DEVELOPER | CYBERSECURITY</span>
          </div>

          {/* Floating Skill Card 1: AI & LLMs */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 hover:border-red-500/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.7)] group transition-all text-left"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Brain className="w-4 h-4 xl:w-5 xl:h-5 text-[#E50914]" />
              </div>
              <div>
                <h3 className="text-xs xl:text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors">
                  AI & Intelligent Systems
                </h3>
                <p className="text-[11px] xl:text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                  Generative AI, neural workflows, smart automation & modern LLM agent orchestration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Skill Card 2: Cybersecurity */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 hover:border-red-500/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.7)] group transition-all text-left"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Shield className="w-4 h-4 xl:w-5 xl:h-5 text-[#E50914]" />
              </div>
              <div>
                <h3 className="text-xs xl:text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors">
                  Cybersecurity Defense
                </h3>
                <p className="text-[11px] xl:text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                  Network vulnerability assessment, zero-trust protocols & secure code auditing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2.5 pt-1">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile - Tanish Jangale"
              className="p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#E50914] dark:hover:text-[#E50914] hover:border-red-500/50 shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile - Tanish Jangale"
              className="p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#E50914] dark:hover:text-[#E50914] hover:border-red-500/50 shadow-sm transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Send Email to Tanish Jangale"
              className="p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#E50914] dark:hover:text-[#E50914] hover:border-red-500/50 shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* ---------------------------------------------------- */}
        {/* RIGHT SIDE: Tagline, Statistics, Full-Stack Card     */}
        {/* ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-end space-y-3.5 w-[310px] xl:w-[340px] flex-shrink-0"
        >
          {/* Professional Introduction */}
          <div className="w-full p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/85 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-left">
            <p className="text-xs xl:text-[13px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="p-2.5 rounded-xl bg-white/95 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
              <span className="block text-base xl:text-lg font-black text-zinc-900 dark:text-white">2026</span>
              <span className="block text-[9px] xl:text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mt-0.5">BCA Amity</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/95 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
              <span className="block text-base xl:text-lg font-black text-[#E50914]">5+</span>
              <span className="block text-[9px] xl:text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mt-0.5">Projects</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/95 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
              <span className="block text-base xl:text-lg font-black text-zinc-900 dark:text-white">3</span>
              <span className="block text-[9px] xl:text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mt-0.5">Domains</span>
            </div>
          </div>

          {/* Floating Skill Card 3: Software Engineering */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/85 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 hover:border-red-500/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.7)] group transition-all text-left"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Code2 className="w-4 h-4 xl:w-5 xl:h-5 text-[#E50914]" />
              </div>
              <div>
                <h3 className="text-xs xl:text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors">
                  Full-Stack Software
                </h3>
                <p className="text-[11px] xl:text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
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
        className="hidden lg:flex flex-wrap items-center justify-center gap-3 pt-3 pb-1 w-full z-[10]"
      >
        <button
          id="hero-explore-projects-btn"
          onClick={() => handleScrollTo('projects')}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs xl:text-sm text-white bg-gradient-to-r from-[#E50914] via-[#FF2633] to-[#c40811] shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:shadow-[0_0_35px_rgba(229,9,20,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
        >
          <span>Explore My Projects</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <button
          id="hero-contact-btn"
          onClick={() => handleScrollTo('contact')}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs xl:text-sm text-zinc-900 dark:text-white bg-white/90 hover:bg-zinc-100 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-red-500/60 shadow-sm dark:shadow-[0_4px_16px_rgba(0,0,0,0.6)] active:scale-[0.98] transition-all duration-200 backdrop-blur-md cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#E50914]" />
          <span>Contact Me</span>
        </button>

        <button
          id="hero-download-resume-btn"
          onClick={handleResumeClick}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs xl:text-sm text-zinc-900 dark:text-white bg-white/90 hover:bg-zinc-100 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 border border-red-500/40 hover:border-red-500 shadow-sm dark:shadow-[0_0_15px_rgba(229,9,20,0.2)] hover:shadow-[0_0_22px_rgba(229,9,20,0.4)] active:scale-[0.98] transition-all duration-200 backdrop-blur-md cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#FF2633]" />
          <span>Download Resume</span>
        </button>
      </motion.div>

      {/* ======================================================== */}
      {/* MOBILE & TABLET LAYOUT (< lg)                            */}
      {/* Streamlined vertical flow: Header -> Visual Portrait with */}
      {/* Single Halo & Name across chest -> Action buttons -> Cards */}
      {/* ======================================================== */}
      <div className="lg:hidden relative w-full px-3.5 sm:px-6 z-[10] flex flex-col items-center space-y-4 my-auto">

        {/* Mobile Header: Greeting & Availability */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/70 border border-red-300 dark:border-red-500/40 text-red-600 dark:text-red-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span>HELLO, I'M TANISH</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] sm:text-xs font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>
        </div>

        {/* Mobile Professional Title */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs font-mono font-semibold text-red-600 dark:text-red-400 max-w-md px-1">
          <Terminal className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
          <span>AI ENTHUSIAST | SOFTWARE DEVELOPER | CYBERSECURITY</span>
        </div>

        {/* Mobile Center Portrait & Single Halo Stage */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] h-[320px] sm:h-[370px] flex items-end justify-center overflow-visible my-1">
          {/* Exactly ONE subtle centered circular neon halo ring behind portrait (Layer 5: z-0) */}
          <div
            className="absolute top-[28%] sm:top-[29%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
            aria-hidden="true"
          >
            <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border-2 border-red-500/40 bg-gradient-to-tr from-red-600/10 via-red-950/15 to-transparent shadow-[0_0_24px_rgba(229,9,20,0.3),inset_0_0_12px_rgba(229,9,20,0.12)]" />
          </div>

          {/* Centered Transparent Portrait (Layer 6: relative z-10) */}
          <div className="relative z-10 h-full w-auto flex items-end justify-center">
            <img
              src={PORTRAIT_CUTOUT}
              alt="Tanish Jangale"
              className="relative z-10 h-full w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#F8F9FA] dark:from-[#080808] to-transparent pointer-events-none z-10" />
          </div>

          {/* Single-line Name layered across LOWER TORSO / CHEST area (Layer 7: z-20, NEVER face!) */}
          <div className="absolute bottom-7 sm:bottom-9 left-1/2 -translate-x-1/2 w-full text-center z-20 pointer-events-none select-none px-2">
            <h1 className="text-[clamp(1.35rem,7.4vw,2.4rem)] font-black tracking-[0.04em] uppercase whitespace-nowrap leading-none select-none">
              <span className="text-white drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)]">
                TANISH{' '}
              </span>
              <span className="text-[#E50914] drop-shadow-[0_0_25px_rgba(229,9,20,0.7)]">
                JANGALE
              </span>
            </h1>
          </div>
        </div>

        {/* Mobile Action Buttons (fitted within viewport without horizontal scrolling) */}
        <div className="flex flex-col items-center gap-2 w-full max-w-[300px] sm:max-w-xs pt-1">
          <div className="grid grid-cols-2 gap-2 w-full">
            <button
              onClick={() => handleScrollTo('projects')}
              className="py-2.5 px-2 rounded-xl font-bold text-[11px] sm:text-xs text-white bg-gradient-to-r from-[#E50914] to-[#c40811] shadow-[0_0_20px_rgba(229,9,20,0.35)] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1 truncate"
            >
              <span className="truncate">Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="py-2.5 px-2 rounded-xl font-bold text-[11px] sm:text-xs text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1 shadow-sm truncate"
            >
              <Mail className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
              <span className="truncate">Contact</span>
            </button>
          </div>

          <button
            onClick={handleResumeClick}
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 border border-red-500/50 shadow-sm dark:shadow-[0_0_12px_rgba(229,9,20,0.2)] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-[#FF2633] flex-shrink-0" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Stats Box */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] sm:max-w-xs">
          <div className="p-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
            <span className="block text-sm font-black text-zinc-900 dark:text-white">2026</span>
            <span className="block text-[8px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">BCA Amity</span>
          </div>
          <div className="p-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
            <span className="block text-sm font-black text-[#E50914]">5+</span>
            <span className="block text-[8px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Projects</span>
          </div>
          <div className="p-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
            <span className="block text-sm font-black text-zinc-900 dark:text-white">3</span>
            <span className="block text-[8px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Domains</span>
          </div>
        </div>

        {/* Mobile Skill Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-md">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-left shadow-sm">
            <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 flex-shrink-0">
              <Brain className="w-3.5 h-3.5 text-[#FF2633]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">AI & LLMs</h4>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400">GenAI & Prompt Eng</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-left shadow-sm">
            <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 flex-shrink-0">
              <Shield className="w-4 h-4 text-[#E50914]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">Cybersecurity</h4>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Threat Defense</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-left shadow-sm">
            <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 flex-shrink-0">
              <Code2 className="w-3.5 h-3.5 text-[#E50914]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white">Software</h4>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Full-Stack & APIs</p>
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
            className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#E50914] shadow-sm transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile - Tanish Jangale"
            className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#E50914] shadow-sm transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            aria-label="Send Email to Tanish Jangale"
            className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#E50914] shadow-sm transition-colors"
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
        className="mt-2 mb-1 inline-flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer group mx-auto z-[10]"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 group-hover:text-red-500 dark:group-hover:text-red-400">SCROLL DOWN</span>
        <ChevronDown className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 group-hover:text-red-500 animate-bounce" />
      </motion.button>
    </section>
  );
}
