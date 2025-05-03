
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Code } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "Python", level: 85, category: "Languages" },
    { name: "UI/UX Design", level: 80, category: "Design" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "GraphQL", level: 75, category: "Backend" },
  ];

  const frontendSkills = skills.filter(skill => skill.category === "Frontend");
  const backendSkills = skills.filter(skill => skill.category === "Backend");
  const otherSkills = skills.filter(skill => !["Frontend", "Backend"].includes(skill.category));

  return (
    <section id="skills" className="min-h-screen flex items-center section-padding bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-primary/80 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Frontend Development
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200 mb-6">
                Building beautiful, responsive, and user-friendly interfaces
              </p>
              
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white/70" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Code className="absolute -right-4 lg:-right-[10%] -bottom-10 h-32 w-32 text-white/30" />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-accent/80">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
              Backend Development
            </h2>
            <p className="mt-2 text-left text-base/6 text-neutral-200">
              Building robust and scalable server-side applications
            </p>
            
            <div className="space-y-4 mt-4">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-white/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white/70" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-800/80 min-h-[300px] lg:min-h-[250px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Additional Skills
                </h2>
                <p className="mt-2 text-left text-base/6 text-neutral-200 mb-4">
                  More tools and technologies I work with
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {otherSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white/70" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
                <div className="space-y-2">
                  <span className="font-medium text-white">Experience</span>
                  <p className="text-sm text-white/70">5+ years professional development</p>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
