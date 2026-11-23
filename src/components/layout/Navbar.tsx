import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section for indicator underline
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-3 border-b border-neutral-800/80 shadow-md'
          : 'bg-black/25 backdrop-blur-[2px] py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Monogram on Left */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Vindya Somathilake Home"
        >
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-display font-bold text-xs tracking-wider text-white bg-black/40 group-hover:bg-white group-hover:text-black transition-colors">
            VS
          </div>
          <span className="font-display font-bold tracking-[0.2em] text-xs uppercase text-white/95 group-hover:text-white transition-colors hidden sm:inline-block">
            VINDYA S.
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-200"
          aria-label="Main navigation"
        >
          {portfolioData.navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-white font-bold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                {/* Active Underline in Olive/Sage Accent #8e9c78 */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#8e9c78] transition-all duration-200 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-xs border border-white/30 text-white hover:border-white focus:outline-none transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-5 transition-all">
          <nav className="flex flex-col space-y-3 text-xs font-bold tracking-[0.2em] uppercase text-neutral-200">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 hover:bg-neutral-900 border-b border-neutral-800/80 transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-[#8e9c78] text-xs">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
