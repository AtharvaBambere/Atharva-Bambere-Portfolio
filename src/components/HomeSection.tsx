"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface HomeSectionProps {
  scrollToSection: (section: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 bg-[#0C0C0E] text-white relative"
      ref={ref}
    >
      {/* Background with shooting stars and stars */}
      <div className="absolute inset-0 w-full h-full">
        <ShootingStars />
        <StarsBackground />
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Animated Left Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm{" "}
            <span className="text-gradient">
              <Cover>Atharva</Cover>
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
            Full Stack Developer & UI/UX Designer
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            I create beautiful, functional, and user-friendly digital experiences.
            With expertise in modern web technologies, I turn complex problems into elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4">
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
        </motion.div>

        {/* Animated Right Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative h-80 w-80 rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/9a4cafe9-1678-46ad-bcba-0bce4de897e2.png"
              alt="Atharva"
              className="rounded-2xl object-cover h-full w-full relative z-10 border-4 border-primary shadow-lg shadow-primary"
            />

            {/* Sparkles Below Image */}
            <div className="absolute -bottom-24 w-full h-32 z-0">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
