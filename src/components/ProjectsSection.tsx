
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2670&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task tracking system with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2669&auto=format&fit=crop",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with dynamic content management.",
      image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2670&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Framer Motion"],
      link: "#"
    },
    {
      id: 4,
      title: "AI Image Generator",
      description: "An application that uses machine learning to generate unique images from text descriptions.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      link: "#"
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState("right");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setDirection("right");
    setActiveProject(prev => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  const handleCardClick = (index: number) => {
    setDirection(index > activeProject ? "right" : "left");
    setActiveProject(index);
  };

  useEffect(() => {
    // Apply animation classes based on the selected project
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      const htmlCard = card as HTMLElement;
      
      if (index === activeProject) {
        htmlCard.style.transform = "translateX(0) scale(1)";
        htmlCard.style.opacity = "1";
        htmlCard.style.zIndex = "10";
      } else if (index < activeProject) {
        htmlCard.style.transform = "translateX(-100%) scale(0.8)";
        htmlCard.style.opacity = "0.5";
        htmlCard.style.zIndex = `${5 - Math.abs(activeProject - index)}`;
      } else {
        htmlCard.style.transform = "translateX(100%) scale(0.8)";
        htmlCard.style.opacity = "0.5";
        htmlCard.style.zIndex = `${5 - Math.abs(activeProject - index)}`;
      }
    });
  }, [activeProject]);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Project Navigation - Stack on the left */}
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col space-y-3">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`p-4 text-left rounded-lg transition-all duration-300 ${
                    activeProject === index 
                      ? "bg-primary/20 border-l-4 border-primary" 
                      : "bg-card/50 hover:bg-card"
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <h3 className="font-medium">{project.title}</h3>
                </button>
              ))}
            </div>
          </div>
          
          {/* Project Cards Display */}
          <div className="w-full lg:w-2/3 relative h-[500px]">
            <div ref={containerRef} className="relative w-full h-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-card absolute top-0 left-0 w-full bg-card rounded-xl overflow-hidden shadow-xl transition-all duration-500 h-full`}
                  style={{
                    transform: index === activeProject 
                      ? "translateX(0) scale(1)" 
                      : index < activeProject 
                        ? "translateX(-100%) scale(0.8)" 
                        : "translateX(100%) scale(0.8)",
                    opacity: index === activeProject ? 1 : 0.5,
                    zIndex: index === activeProject ? 10 : 5 - Math.abs(activeProject - index)
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-secondary px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <Button 
                onClick={handlePrev} 
                variant="secondary" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                onClick={handleNext} 
                variant="secondary" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm pointer-events-auto"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
