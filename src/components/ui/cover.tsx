
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Cover({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative", className)}>
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 bg-purple-400 mix-blend-difference"></span>
      </span>
      <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white">
        {children}
      </span>
    </span>
  );
}
