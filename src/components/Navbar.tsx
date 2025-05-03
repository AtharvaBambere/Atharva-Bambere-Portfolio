
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Code } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const currentPosition = window.scrollY + 100;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      scrolled ? "bg-indigo-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-indigo-100 p-1.5 rounded-lg">
            <Code className="h-5 w-5 text-indigo-600" />
          </div>
          <span className="font-heading font-bold text-2xl text-white">
            Atharva
          </span>
        </a>
        <div className="hidden md:flex space-x-1">
          {['home', 'skills', 'projects', 'contact'].map((section) => (
            <div
              key={section}
              className={cn(
                "nav-link capitalize text-white/80 hover:text-white",
                activeSection === section ? "active text-white" : ""
              )}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button - simplified for this version */}
        <div className="md:hidden">
          <button
            className="p-2 text-white/80 hover:text-white"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
