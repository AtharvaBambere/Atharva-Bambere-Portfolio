
"use client";
import React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

export const AnimatedButton = ({
  children,
  icon,
  onClick,
  className = "",
  variant = "primary",
}: AnimatedButtonProps) => {
  const baseClasses = "flex justify-center items-center group/btn relative overflow-hidden transition duration-300";
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "bg-transparent border border-white/20 hover:bg-white/10 text-white"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} rounded-md px-4 py-2 ${className}`}
    >
      <span className="group-hover/btn:translate-x-40 text-center transition duration-500">
        {children}
      </span>
      {icon && (
        <div className="-translate-x-40 group-hover/btn:translate-x-0 absolute inset-0 flex items-center justify-center transition duration-500 z-20">
          {icon}
        </div>
      )}
    </button>
  );
};
