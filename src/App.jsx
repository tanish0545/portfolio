import React, { useState, useEffect } from 'react';
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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore localStorage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
    <div className="relative min-h-screen bg-[#F8F9FA] dark:bg-[#080808] text-[#0F172A] dark:text-white selection:bg-[#E50914]/25 selection:text-[#FF2633] transition-colors duration-300">
      {/* Floating Glassmorphic Navbar with Theme Toggle (z-50) */}
      <Navbar 
        activeSection={activeSection} 
        onDownloadResume={handleDownloadResume} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onDownloadResume={handleDownloadResume} theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience theme={theme} />
        <ResumePreview onDownloadResume={handleDownloadResume} theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
