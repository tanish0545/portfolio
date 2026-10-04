import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/common/ParticleCanvas';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import ResumePreview from './components/sections/ResumePreview';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Tanish_Jangale_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-[#E50914]/25 selection:text-[#FF2633]">
      {/* Cinematic Red/Crimson Ambient Canvas */}
      <ParticleCanvas />

      {/* Floating Dark Glassmorphic Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onDownloadResume={handleDownloadResume} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onDownloadResume={handleDownloadResume} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResumePreview onDownloadResume={handleDownloadResume} />
        <Contact />
      </main>

      {/* Cinematic Minimal Footer */}
      <Footer />
    </div>
  );
}
