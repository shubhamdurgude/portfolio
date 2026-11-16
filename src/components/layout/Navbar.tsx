import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-cyan-950/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Navigate to Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-violet-600/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
              <span className="font-mono font-bold text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
                SD
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Software Engineer (AI)
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Download Resume & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Shubham_Durgude_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-100 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-violet-500/30 border border-cyan-500/40 hover:border-cyan-400 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-200 group"
              aria-label="Download Shubham's Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Shubham_Durgude_Resume.pdf"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-b border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-dark-900/60 text-slate-300 hover:bg-slate-800/50 hover:text-white border border-slate-800/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-2">
            <a
              href={personalInfo.resumePath}
              download="Shubham_Durgude_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 shadow-lg shadow-cyan-900/30"
            >
              <Download className="w-4 h-4 text-cyan-200" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
