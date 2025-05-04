
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
  const [direction, setDirection] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setDirection("right");
    setActiveProject(prev => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  const getClassForIndex = (index: number) => {
    if (index === activeProject) return "active";
    if (
      (direction === "right" && ((index === activeProject + 1) || (activeProject === projects.length - 1 && index === 0))) ||
      (direction === "left" && ((index === activeProject - 1) || (activeProject === 0 && index === projects.length - 1)))
    ) 
      return "next";
    return "inactive";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="relative overflow-hidden w-full">
          {/* Project Selection Menu */}
          <div className="flex justify-center mb-8 space-x-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeProject === index 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => {
                  setDirection(index > activeProject ? "right" : "left");
                  setActiveProject(index);
                }}
              />
            ))}
          </div>
          
          {/* Cards Container */}
          <div className="relative h-[500px] md:h-[400px] w-full">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out p-4 ${
                  getClassForIndex(index) === "active" 
                    ? "opacity-100 translate-x-0 z-20" 
                    : getClassForIndex(index) === "next"
                      ? (direction === "right" ? "opacity-0 translate-x-full z-10" : "opacity-0 -translate-x-full z-10")
                      : "opacity-0 scale-95 z-0"
                }`}
              >
                <div className="bg-card h-full rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row glass-card">
                  <div className="md:w-1/2 relative">
                    <div className="h-48 md:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-secondary px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline"
                      className="mt-auto inline-flex items-center border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between absolute top-1/2 left-4 right-4 -translate-y-1/2 z-30">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-border"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-border"
              onClick={handleNext}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
