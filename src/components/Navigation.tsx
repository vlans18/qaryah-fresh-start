import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['overview', 'app-progress', 'kodana', 'tokenomics', 'modules', 'roadmap'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'app-progress', label: 'App Progress' },
    { id: 'kodana', label: 'Kodana.ai' },
    { id: 'tokenomics', label: 'Token & Value' },
    { id: 'modules', label: 'Modules' },
    { id: 'roadmap', label: 'Roadmap' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('overview')}
            className="flex-shrink-0 text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent hover:from-emerald-300 hover:to-emerald-500 transition-all"
          >
            Qaryah Digital
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {section.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('investor')}
              className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium hover:from-emerald-500 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-600/30"
            >
              ★ Investor Access
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {section.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('investor')}
              className="w-full px-4 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors duration-200"
            >
              ★ Investor Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
