import React, { useEffect } from "react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Frontend Featured Box */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-card rounded-xl p-6 glass-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold mb-6 text-gradient">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2"
                  style={{ 
                    animationDelay: `${index * 0.1 + 0.3}s`,
                    animation: "fadeIn 0.8s ease-out forwards",
                    opacity: 0
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent" 
                      style={{ 
                        animationDelay: `${index * 0.1 + 0.6}s`,
                        animation: "growWidth 1s ease-out forwards",
                        width: "0%",
                        "--target-width": `${skill.level}%`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Box */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-card rounded-xl p-6 glass-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Backend Development</h3>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2"
                  style={{ 
                    animationDelay: `${index * 0.1 + 0.4}s`,
                    animation: "fadeIn 0.8s ease-out forwards",
                    opacity: 0
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent" 
                      style={{ 
                        animationDelay: `${index * 0.1 + 0.7}s`,
                        animation: "growWidth 1s ease-out forwards",
                        width: "0%",
                        "--target-width": `${skill.level}%`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Skills Boxes */}
          {otherSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="col-span-1 bg-card rounded-xl p-6 glass-card animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gradient">{skill.category}</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent" 
                      style={{ 
                        animationDelay: `${0.5 + index * 0.1}s`,
                        animation: "growWidth 1s ease-out forwards",
                        width: "0%",
                        "--target-width": `${skill.level}%`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Experience Box */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-card rounded-xl p-6 glass-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Experience</h3>
            <p className="text-muted-foreground">5+ years of professional development experience creating modern, responsive web applications with cutting-edge technologies.</p>
          </div>
        </div>
        
        <style>
          {`
            @keyframes growWidth {
              from { width: 0%; }
              to { width: var(--target-width); }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default SkillsSection;
