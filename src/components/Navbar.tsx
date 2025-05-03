
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY;
      
      // Set navbar background based on scroll position
      setScrolled(scrollPosition > 10);
      
      // Find current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gradient">Atharva</div>
        <ul className="flex space-x-2 md:space-x-8">
          {["home", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <button 
                onClick={() => scrollToSection(section)}
                className={cn(
                  "py-2 px-3 rounded-lg capitalize font-medium transition-all",
                  activeSection === section 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
