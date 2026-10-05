import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetailModal from '../projects/ProjectDetailModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Exact filters specified in prompt
  const filters = ['All', 'Web Development', 'AI & Cybersecurity', 'E-commerce', 'Client Projects'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (project.categories) {
      return project.categories.includes(activeFilter);
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-28 scroll-mt-20 bg-zinc-50 dark:bg-[#0A0A0A] border-t border-zinc-200 dark:border-[#1E1E1E] transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#E50914]" />
            <span>VERIFIED GITHUB REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
            SELECTED <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">WORK.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            A curated portfolio of client applications, web systems, e-commerce storefronts, and cybersecurity intelligence platforms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E50914] to-[#FF2633] rounded-full mt-4 shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-2.5 mb-14 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#E50914] to-[#FF2633] text-white shadow-[0_0_18px_rgba(229,9,20,0.4)] border border-red-500/50'
                  : 'bg-white dark:bg-[#141414] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#1E1E1E] border border-zinc-200 dark:border-[#242424] shadow-xs'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid (9 Verified Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
