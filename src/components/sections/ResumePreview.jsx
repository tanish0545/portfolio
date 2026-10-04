import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, GraduationCap, Briefcase, Code } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ResumePreview({ onDownloadResume }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    onDownloadResume();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="relative py-28 scroll-mt-20 bg-[#0A0A0A] border-y border-[#1E1E1E]">
      {/* Background Red Ambient */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono font-medium uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5 text-[#E50914]" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            PROFESSIONAL <span className="bg-gradient-to-r from-[#E50914] to-[#FF4D4D] bg-clip-text text-transparent">PROFILE.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            A comprehensive overview of academic milestones, verified skills, and engineering projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E50914] to-[#FF2633] rounded-full mt-4 shadow-[0_0_12px_rgba(229,9,20,0.6)]" />
        </div>

        {/* Premium Resume Card in Dark Cinematic Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] rounded-3xl border border-[#242424] p-6 sm:p-10 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] hover:border-red-500/40 transition-all"
        >
          {/* Subtle Red Flare in Corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Resume Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#202020]">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-xs font-bold mb-2">
                VERIFIED PROFILE OVERVIEW
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-red-400 mt-1 font-semibold">
                {personalInfo.roleSubtitle}
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#E50914] to-[#FF2633] hover:from-[#c40811] hover:to-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] transition-all active:scale-95 flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>
          </div>

          {/* Download notice feedback */}
          {downloadSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3.5 rounded-2xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#E50914]" />
              <span>Resume download initiated from <code className="font-mono text-white font-bold">{personalInfo.resumeUrl}</code>.</span>
            </motion.div>
          )}

          {/* Resume Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">

            {/* Left Column: Education & Core Competencies */}
            <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-[#202020] pb-8 md:pb-0 md:pr-8">

              {/* Education Block */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#E50914]" />
                  <span>Education</span>
                </h4>
                <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626]">
                  <div className="text-sm font-bold text-white">
                    Bachelor of Computer Applications (BCA)
                  </div>
                  <div className="text-xs text-red-400 mt-1 font-mono font-medium">
                    Amity University Maharashtra
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-1 font-semibold">
                    Graduation Year: Completed in 2026
                  </div>
                </div>
              </div>

              {/* Skills Highlights */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#E50914]" />
                  <span>Key Competencies</span>
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1.5 font-medium">Languages:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "JavaScript", "TypeScript", "C++"].map((l) => (
                        <span key={l} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#181818] text-zinc-300 border border-[#2B2B2B]">{l}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1.5 font-medium">Frameworks & Tools:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["React.js", "Next.js", "Flask", "Node.js", "Tailwind CSS", "MySQL", "Git"].map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#181818] text-zinc-300 border border-[#2B2B2B]">{f}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1.5 font-medium">Specialized Domains:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["LLM Integration", "Threat Analysis", "System Security", "Web Engineering"].map((fa) => (
                        <span key={fa} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-red-950/40 text-red-300 border border-red-500/30 font-medium">{fa}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Experience & Projects */}
            <div className="md:col-span-7 space-y-6">

              {/* Experience */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#E50914]" />
                  <span>Experience</span>
                </h4>
                <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">Technology & Digital Solutions</span>
                    <span className="text-[11px] font-mono text-red-400 font-semibold">2026 — Present</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mb-2">
                    XQORA Technologies
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    Delivering modern web engineering solutions, strategic design systems, and client software products.
                  </p>
                </div>
              </div>

              {/* Projects Snapshot */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#E50914]" />
                  <span>Featured Software Implementations</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">ThreatScope</span>
                      <span className="text-[10px] font-mono text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/40 font-semibold">In Development</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                      AI-driven threat intelligence platform architected for scanning suspicious artifacts, calculating risk scores, and generating security reports.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Octacore & Leafly Tea Store </span>
                      <span className="text-[10px] font-mono text-red-300 bg-red-950/40 px-2 py-0.5 rounded border border-red-500/40 font-semibold">Completed</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                      High-performance fitness platforms featuring interactive 3D hero experiences, lead generation, and dynamic class scheduling.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
