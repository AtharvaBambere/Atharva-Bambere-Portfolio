
import React from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";

interface HomeSectionProps {
  scrollToSection: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/90">
            Hello, I'm <Cover>Atharva</Cover>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 delayed-fade">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg delayed-fade" style={{ animationDelay: '0.4s' }}>
            I create beautiful, functional, and user-friendly digital experiences.
            With expertise in modern web technologies, I turn complex problems into
            elegant solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 delayed-fade" style={{ animationDelay: '0.6s' }}>
            <AnimatedButton 
              onClick={() => scrollToSection("projects")}
              icon={<ArrowRight className="h-5 w-5" />}
              className="px-6 py-2.5"
            >
              View Projects
            </AnimatedButton>
            
            <AnimatedButton 
              onClick={() => scrollToSection("contact")}
              variant="outline"
            >
              Contact Me
            </AnimatedButton>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-soft"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
              alt="Atharva" 
              className="rounded-2xl object-cover h-80 w-80 relative z-10 animate-card-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
