import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Layers,
  Wrench,
  ShieldCheck,
  BrainCircuit,
  Cpu
} from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

// Category icon mapper
const categoryIcons = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  AI: BrainCircuit,
  Cybersecurity: ShieldCheck,
  "Developer Tools": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 scroll-mt-20 bg-[#F8F9FA] dark:bg-[#080808] transition-colors duration-300 overflow-hidden w-full max-w-full box-border">
      {/* Background Red Ambient strictly bounded */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[700px] h-[90vw] max-h-[700px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#E50914]" />
            <span>ARSENAL & CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            MY TECH <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">STACK.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            A comprehensive toolset spanning modern frontend interfaces, backend APIs, machine intelligence pipelines, and security analysis.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E50914] to-[#FF2633] rounded-full mt-4 shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, idx) => {
            const Icon = categoryIcons[categoryGroup.category] || Layers;

            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white dark:bg-[#121212] p-7 rounded-3xl border border-zinc-200 dark:border-[#242424] hover:border-red-500/50 shadow-sm dark:shadow-none hover:shadow-[0_0_30px_rgba(229,9,20,0.18)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-red-50 dark:bg-red-600/15 border border-red-200 dark:border-red-500/35 flex items-center justify-center text-[#FF2633] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-white text-base tracking-wide">
                          {categoryGroup.category}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider uppercase font-semibold">
                          {categoryGroup.skills.length} TECHNOLOGIES
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                    {categoryGroup.description}
                  </p>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/item inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-[#181818] hover:bg-zinc-100 dark:hover:bg-[#202020] border border-zinc-200 dark:border-[#2A2A2A] hover:border-red-500/40 transition-all cursor-default shadow-xs"
                      >
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 group-hover/item:text-red-500 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-200/70 dark:bg-black/50 px-1.5 py-0.5 rounded border border-zinc-300 dark:border-[#333]">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-[#1F1F1F] flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="group-hover:text-red-500 transition-colors font-medium">
                    Verified Competency
                  </span>
                  <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-[#E50914] group-hover:shadow-[0_0_8px_#E50914] transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
