import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ShieldCheck, Terminal, Layers, Sparkles, Dumbbell, Home, Scissors, Shirt, Palette, Globe } from 'lucide-react';
import { Github } from '../common/Icons';

const statusBadgeStyles = {
  completed: "bg-red-950/40 text-red-300 border-red-500/40 shadow-[0_0_8px_rgba(229,9,20,0.2)]",
  in_development: "bg-amber-950/40 text-amber-300 border-amber-500/50 shadow-[0_0_8px_rgba(245,158,11,0.2)]",
  prototype: "bg-zinc-900 text-zinc-300 border-zinc-700",
};

const projectIcons = {
  "leafly-tea-store": Layers,
  "lifefitness-virar": Dumbbell,
  "akhada-gym": Dumbbell,
  "interiorflow": Home,
  "saloon": Scissors,
  "veloura": Shirt,
  "canvaskart": Palette,
  "octacore-brilliance": Globe,
  "threatscope": ShieldCheck,
};

export default function ProjectCard({ project, onSelect }) {
  const IconComponent = projectIcons[project.id] || Sparkles;
  const isThreatScope = project.id === 'threatscope';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="bg-[#121212] rounded-3xl overflow-hidden border border-[#242424] hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(229,9,20,0.22)] transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Project Thumbnail with Tech Matrix Backdrop */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-[#181818] to-[#101010] p-5 flex flex-col justify-between border-b border-[#1E1E1E]">

          {/* Thumbnail Backdrop: Image or Tech Grid */}
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/70 to-[#181818]/60" />
            </>
          ) : (
            <>
              {/* Subtle tech grid inside thumbnail */}
              <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-red-600/20 transition-all" />
            </>
          )}

          {/* Top Bar inside thumbnail */}
          <div className="relative z-10 flex items-center justify-between">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${statusBadgeStyles[project.statusType] || statusBadgeStyles.completed}`}>
              {project.badge}
            </span>

            <span className="text-[11px] font-mono text-zinc-400 bg-black/60 px-2.5 py-1 rounded-md border border-[#292929] font-medium">
              {project.category}
            </span>
          </div>

          {/* Center Graphic Icon */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,9,20,0.35)] transition-all duration-300 bg-[#161616]"
              style={{
                borderColor: '#E5091440',
              }}
            >
              <IconComponent
                className="w-7 h-7 text-[#FF2633]"
              />
            </div>
            <span className="mt-2 text-[10px] font-mono text-zinc-400 font-semibold tracking-widest uppercase">
              {project.repoName}
            </span>
          </div>

          {/* Bottom Bar: Quick Trigger */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>VERIFIED GITHUB</span>
            <span className="text-red-400 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore Details <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs font-mono font-semibold text-red-400 mb-3 tracking-wide">
            {project.categories ? project.categories.join(' • ') : project.category}
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#181818] text-zinc-300 border border-[#2B2B2B] font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-lg text-[11px] font-mono bg-red-950/40 text-red-300 border border-red-500/30 font-semibold">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Action Buttons */}
      <div className="px-6 pb-6 pt-3 border-t border-[#1C1C1C] flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-200 bg-[#181818] hover:bg-[#E50914] hover:text-white border border-[#2A2A2A] hover:border-red-500 shadow-sm transition-all duration-200"
        >
          <span>{isThreatScope ? 'View Case Study' : 'View Project'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-[#222] border border-[#2A2A2A] transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {/* Note: ThreatScope has liveDemoUrl: null, so no live link is rendered */}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-950/30 border border-[#2A2A2A] hover:border-red-500/40 transition-colors"
              title="Open Live Deployment"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
