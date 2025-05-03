
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function AnimatedTestimonials({
  testimonials,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getClassForIndex = (index: number) => {
    if (index === activeIndex) return "active";
    if (
      (direction === "right" && ((index === activeIndex + 1) || (activeIndex === testimonials.length - 1 && index === 0))) ||
      (direction === "left" && ((index === activeIndex - 1) || (activeIndex === 0 && index === testimonials.length - 1)))
    ) 
      return "next";
    return "inactive";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  return (
    <div className={cn("relative overflow-hidden w-full", className)} ref={containerRef}>
      {/* Cards Container */}
      <div className="relative h-[450px] md:h-[400px] w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out p-4",
              getClassForIndex(index) === "active" 
                ? "opacity-100 translate-x-0 z-20" 
                : getClassForIndex(index) === "next"
                  ? (direction === "right" ? "opacity-0 translate-x-full z-10" : "opacity-0 -translate-x-full z-10")
                  : "opacity-0 scale-90 z-0"
            )}
          >
            <div className="bg-card h-full rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row glass-card">
              <div className="md:w-1/3 relative">
                <div className="h-48 md:h-full bg-gradient-to-br from-primary/30 to-accent/30">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <blockquote className="mb-4 text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.designation}
                  </p>
                </div>
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
          onClick={goToPrev}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm border-border"
          onClick={goToNext}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeIndex === index 
                ? "bg-primary w-6" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            onClick={() => {
              setDirection(index > activeIndex ? "right" : "left");
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
