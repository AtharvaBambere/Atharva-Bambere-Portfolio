import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["home", "skills", "projects", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));
      const currentPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-indigo-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div>
            <img
              src="/finallogo.png"
              alt="Logo"
              className="h-8 w-10 object-contain"
            />
          </div>
          <span className="font-heading font-bold text-2xl text-white">
            Atharva Bambere
          </span>
        </a>

        <div className="hidden md:flex space-x-1">
          {["home", "skills", "projects", "contact"].map((section) => (
            <div
              key={section}
              className={cn(
                "nav-link capitalize text-white/80 hover:text-white px-4 py-2 cursor-pointer",
                activeSection === section ? "active text-white" : ""
              )}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button
                className="p-2 text-white/80 hover:text-white"
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-indigo-900/95 backdrop-blur-md">
              <div className="p-6 flex flex-col space-y-4">
                {["home", "skills", "projects", "contact"].map((section) => (
                  <DrawerClose
                    key={section}
                    className={cn(
                      "nav-link capitalize text-white/80 hover:text-white px-4 py-3 text-xl font-medium cursor-pointer text-center",
                      activeSection === section ? "active text-white" : ""
                    )}
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
