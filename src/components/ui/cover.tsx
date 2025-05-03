
import React from "react";
import { cn } from "@/lib/utils";

interface CoverProps {
  children: React.ReactNode;
  className?: string;
}

export const Cover: React.FC<CoverProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "relative inline-block px-2 before:absolute before:inset-0 before:z-0 before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-md",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </span>
  );
};
