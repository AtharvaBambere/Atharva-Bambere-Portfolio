
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ icon, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-md px-4 py-2 flex justify-center items-center group/btn transition-all duration-300",
          className
        )}
        {...props}
      >
        <span className="group-hover/btn:translate-x-[150%] transition-transform duration-500">
          {children}
        </span>
        {icon && (
          <div className="-translate-x-[150%] group-hover/btn:translate-x-0 absolute inset-0 flex items-center justify-center transition-transform duration-500">
            {icon}
          </div>
        )}
      </button>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";
