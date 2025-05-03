
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Code, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 }
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "GraphQL", level: 75 }
  ];
  
  const otherSkills = [
    { name: "Python", level: 85 },
    { name: "UI/UX Design", level: 80 }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-primary/80 to-accent/60 min-h-[500px] lg:min-h-[300px]"
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white flex items-center gap-2">
                <Code className="h-6 w-6" /> Frontend Development
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Creating responsive, interactive user interfaces with modern frameworks and tools.
              </p>
              
              <div className="mt-8 space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-accent/80 to-primary/60">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white flex items-center gap-2">
              <Server className="h-6 w-6" /> Backend Development
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Building robust, scalable server solutions and APIs.
            </p>
            
            <div className="mt-8 space-y-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-white/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-primary/70 via-accent/60 to-primary/70 min-h-[300px] lg:min-h-[300px] xl:min-h-[250px]">
            <div className="max-w-lg">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white flex items-center gap-2">
                <Palette className="h-6 w-6" /> Other Skills & Experience
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                With 5+ years of professional development experience, I've developed expertise in various technologies and domains.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
