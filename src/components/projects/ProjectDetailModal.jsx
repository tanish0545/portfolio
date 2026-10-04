import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, ExternalLink, ShieldCheck, Terminal, Layers, Sparkles, AlertCircle, Code2, Flame, Wrench } from 'lucide-react';
import { Github } from '../common/Icons';

const statusBadgeStyles = {
  completed: "bg-red-950/40 text-red-300 border-red-500/40 shadow-[0_0_8px_rgba(229,9,20,0.2)]",
  in_development: "bg-amber-950/40 text-amber-300 border-amber-500/50 shadow-[0_0_8px_rgba(245,158,11,0.2)]",
  prototype: "bg-zinc-900 text-zinc-300 border-zinc-700",
};

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const isThreatScope = project.id === 'threatscope';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#111111] rounded-3xl border border-[#2B2B2B] shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#1E1E1E] bg-[#161616]">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${statusBadgeStyles[project.statusType] || statusBadgeStyles.completed}`}>
                {project.badge}
              </span>
              <span className="text-xs font-mono text-zinc-400 font-medium hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Project Image Banner if available */}
            {project.image && (
              <div className="relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden border border-[#2B2B2B]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
              </div>
            )}

            {/* Title & Overview */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {project.fullDescription || project.shortDescription}
              </p>
            </div>

            {/* IN-DEPTH CASE STUDY SECTION FOR THREATSCOPE */}
            {isThreatScope && project.caseStudy ? (
              <div className="space-y-6 pt-2">
                {/* Problem Statement */}
                <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>The Problem</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* Proposed Solution */}
                <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E50914]" />
                    <span>Proposed Architecture & Solution</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>

                {/* Development Progress Alert */}
                <div className="p-5 rounded-2xl bg-[#161616] border border-[#2B2B2B]">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-zinc-400" />
                    <span>Development Status & Milestone</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.caseStudy.developmentProgress}
                  </p>
                </div>

                {/* Current Implemented Features */}
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                    <span>Currently Implemented Modules</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.currentFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#161616] border border-[#252525] flex items-start gap-2.5 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Future Improvements Roadmap */}
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase mb-3 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <span>Future Engineering Roadmap</span>
                  </h3>
                  <div className="space-y-2">
                    {project.caseStudy.futureImprovements.map((imp, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#161616] border border-[#252525] flex items-center gap-2.5 text-xs text-zinc-400"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#E50914] flex-shrink-0" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* STANDARD PROJECT DETAILS LAYOUT */
              <>
                {/* Implemented Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                      <span>Key Features & Implementation</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-[#161616] border border-[#252525]"
                        >
                          <div className="font-semibold text-white text-xs mb-1">
                            {feat.name}
                          </div>
                          <div className="text-[11px] text-zinc-400 leading-relaxed">
                            {feat.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Planned Features */}
                {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-zinc-400" />
                      <span>Future Roadmap</span>
                    </h3>
                    <ul className="space-y-2">
                      {project.plannedFeatures.map((pFeat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-zinc-400 p-3 rounded-xl bg-[#161616] border border-[#252525]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-1.5 flex-shrink-0" />
                          <span>{pFeat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#181818] text-zinc-300 border border-[#2B2B2B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-[#1E1E1E] bg-[#161616] flex items-center justify-between">
            <div className="text-[11px] font-mono text-zinc-400">
              REPO: <span className="text-white font-semibold">{project.repoName}</span>
            </div>

            <div className="flex items-center gap-3">
              {isThreatScope ? (
                <>
                  {project.githubFrontendUrl && (
                    <a
                      href={project.githubFrontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-[#1F1F1F] hover:bg-[#282828] hover:text-white border border-[#333] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Frontend Repo</span>
                    </a>
                  )}
                  {project.githubBackendUrl && (
                    <a
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-[#1F1F1F] hover:bg-[#282828] hover:text-white border border-[#333] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Backend Repo</span>
                    </a>
                  )}
                  <span className="text-xs font-mono text-amber-300 bg-amber-950/50 px-3 py-1.5 rounded-xl border border-amber-500/40 font-semibold shadow-sm">
                    In Development
                  </span>
                </>
              ) : (
                <>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-[#1F1F1F] hover:bg-[#282828] hover:text-white border border-[#333] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] hover:opacity-95 shadow-[0_0_15px_rgba(229,9,20,0.35)] transition-transform active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
