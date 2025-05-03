
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HomeSectionProps {
  scrollToSection: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-gradient">Atharva</span>
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
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
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
