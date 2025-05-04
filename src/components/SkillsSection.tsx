"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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

  const frontendSkills = skills.filter(
    (skill) => skill.category === "Frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "Backend");
  const otherSkills = skills.filter(
    (skill) => !["Frontend", "Backend"].includes(skill.category)
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center section-padding bg-secondary/20"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 auto-rows-fr">
          {/* Frontend Skills */}
          <motion.div
            className="col-span-1 md:col-span-2 row-span-2 relative bg-card rounded-xl shadow-lg glass-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="p-6 md:p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gradient">
                Frontend Development
              </h3>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="col-span-1 row-span-1 relative bg-card rounded-xl shadow-lg glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="p-6 md:p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Backend Development
              </h3>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other Skills */}
          {otherSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="col-span-1 relative bg-card rounded-xl shadow-lg glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="p-6 md:p-8 h-full">
                <h3 className="text-lg font-semibold mb-4 text-gradient">
                  {skill.category}
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Tools & Technologies */}
          <motion.div
            className="col-span-1 row-span-1 relative bg-card rounded-xl shadow-lg glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="p-6 md:p-8 h-full w-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Tools & Technologies
              </h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Docker (Basics)</li>
              </ul>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="col-span-1 row-span-1 relative bg-card rounded-xl shadow-lg glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="p-6 md:p-8 h-full w-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Soft Skills
              </h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
