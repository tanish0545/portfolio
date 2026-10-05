import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Target, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 scroll-mt-20 bg-white dark:bg-[#0A0A0A] border-y border-zinc-200 dark:border-[#1E1E1E] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            BEYOND THE <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">CODE.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E50914] to-[#FF2633] rounded-full mt-4 shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Bio Narrative & Core Focus */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-zinc-50 dark:bg-[#121212] p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-[#262626] shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:border-red-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/40 flex items-center justify-center text-[#FF2633] shadow-[0_0_15px_rgba(229,9,20,0.25)]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-wide">Professional Overview</h3>
                  <p className="text-xs font-mono text-red-600 dark:text-red-400 font-semibold tracking-wider uppercase">ARCHITECTING SECURE & INTELLIGENT SYSTEMS</p>
                </div>
              </div>

              {/* Bio Intro Quote */}
              <p className="text-zinc-800 dark:text-zinc-200 text-lg sm:text-xl leading-relaxed mb-6 font-medium italic border-l-2 border-[#E50914] pl-4">
                "{personalInfo.about.intro}"
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                My approach unites software development, artificial intelligence workflows, and cybersecurity principles. Having completed my Bachelor of Computer Applications, I focus on constructing resilient web architectures, studying threat vectors, and engineering applications that provide real-world utility with clean UX.
              </p>
            </div>

            {/* Career Focus Callout Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#171717] border border-zinc-200 dark:border-[#2B2B2B] flex items-start gap-4 mt-4 shadow-sm">
              <div className="p-2 rounded-xl bg-red-100 dark:bg-red-600/20 text-[#E50914] border border-red-300 dark:border-red-500/30 flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase mb-1">
                  Core Mission & Focus
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {personalInfo.about.careerFocus}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Technical Domains */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-50 dark:bg-[#121212] p-7 rounded-3xl border border-zinc-200 dark:border-[#262626] shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:border-red-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-red-600/15 border border-red-500/40 flex items-center justify-center text-[#FF2633]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Academic Foundation</h4>
                  <span className="text-xs font-mono text-red-600 dark:text-red-400 font-semibold tracking-wider">COMPLETED 2026</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#181818] p-5 rounded-2xl border border-zinc-200 dark:border-[#262626] shadow-sm">
                <div className="font-bold text-zinc-900 dark:text-white text-base">
                  Bachelor of Computer Applications (BCA)
                </div>
                <div className="text-xs text-red-600 dark:text-red-400 font-mono mt-1 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E50914]" />
                  <span>Amity University Maharashtra</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">
                  Rigorous curriculum in algorithmic data structures, computer networking, relational database engineering, software lifecycle, and practical system development.
                </p>
              </div>
            </motion.div>

            {/* Core Technical Domains */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-50 dark:bg-[#121212] p-7 rounded-3xl border border-zinc-200 dark:border-[#262626] shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:border-red-500/40 transition-all flex-1 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-red-600/15 border border-red-500/40 flex items-center justify-center text-[#FF2633]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Areas of Focus</h4>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 font-medium">CORE SPECIALIZATIONS</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {personalInfo.about.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-[#181818] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2B2B2B] hover:border-red-500/60 hover:text-red-600 dark:hover:text-white transition-all shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
