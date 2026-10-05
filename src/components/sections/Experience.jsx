import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, GraduationCap, Briefcase, Code, Calendar } from 'lucide-react';
import { journeyTimeline } from '../../data/portfolioData';

export default function Experience() {
  const getTimelineIcon = (type) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'experience':
        return Briefcase;
      default:
        return Code;
    }
  };

  return (
    <section id="experience" className="relative py-28 scroll-mt-20 bg-[#F8F9FA] dark:bg-[#080808] transition-colors duration-300 overflow-hidden w-full max-w-full box-border">
      {/* Ambient background glow strictly bounded */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] max-w-[384px] h-[70vw] max-h-[384px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full box-border">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#E50914]" />
            <span>PATH & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            MY <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">JOURNEY.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Key academic foundation, verified professional engagement, and continuous technical explorations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E50914] to-[#FF2633] rounded-full mt-4 shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-red-600/25 space-y-12 my-8 ml-4 sm:ml-8 box-border">
          {journeyTimeline.map((item, idx) => {
            const Icon = getTimelineIcon(item.type);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className="relative group box-border"
              >
                {/* Glowing Node Dot on Timeline Line */}
                <div
                  className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#121212] border-2 border-red-500/60 flex items-center justify-center text-[#FF2633] group-hover:scale-110 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(229,9,20,0.6)] transition-all duration-300 z-10 shadow-md"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Content Card */}
                <div className="bg-white dark:bg-[#121212] p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-[#242424] shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)] group-hover:border-red-500/50 group-hover:shadow-[0_0_25px_rgba(229,9,20,0.2)] transition-all duration-300 box-border">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-red-300 dark:border-red-500/30 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                      {item.period}
                    </span>

                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">
                      {item.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-sm font-semibold text-red-600 dark:text-red-400 font-mono mb-4">
                    {item.institution}
                  </div>

                  <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
