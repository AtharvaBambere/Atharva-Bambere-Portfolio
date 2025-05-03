
import React, { useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
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

  // Group skills by category
  const categories = skills.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  useEffect(() => {
    // Initialize the width animations when component mounts
    const bars = document.querySelectorAll('.bg-gradient-to-r');
    bars.forEach(bar => {
      const parent = bar.parentElement;
      if (parent && parent.previousElementSibling) {
        const percentText = parent.previousElementSibling.lastElementChild?.textContent;
        if (percentText) {
          const percent = percentText.replace('%', '');
          (bar as HTMLElement).style.setProperty('--target-width', percent + '%');
        }
      }
    });
  }, []);

  return (
    <section id="skills" className="min-h-screen flex items-center section-padding bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
            <div 
              key={category} 
              className="bg-card rounded-xl p-6 shadow-lg glass-card"
              style={{ 
                animationDelay: `${categoryIndex * 0.1}s`,
                animation: "fadeIn 0.8s ease-out forwards",
                opacity: 0
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2"
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.1) + (index * 0.1) + 0.2}s`,
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
                          animationDelay: `${(categoryIndex * 0.1) + (index * 0.1) + 0.5}s`,
                          animation: "growWidth 1s ease-out forwards",
                          width: "0%"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
