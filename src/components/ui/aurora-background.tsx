"use client";
import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
  intensity?: "light" | "medium" | "default";
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  intensity = "default",
  ...props
}: AuroraBackgroundProps) => {
  // Reduced opacity values across the board to make the effect more subtle
  const opacityValue =
    intensity === "light" ? "30" : intensity === "medium" ? "30" : "30";

  return (
    <div
      className={cn("relative w-full text-slate-950 transition-bg", className)}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(-80deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(-80deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(-80deg,#1c92d2_5%,#95d7f3_15%,#1c92d2_25%,#95d7f3_35%,#1c92d2_45%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:400%,_400%]
            [background-position:100%_0%,100%_0%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:[background-position:100%_0%,100%_0%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-${opacityValue} will-change-transform`,

            // Modified mask to focus the effect at the right side
            showRadialGradient
              ? `[mask-image:radial-gradient(ellipse_at_90%_50%,black_30%,transparent_70%)]`
              : ""
          )}
        />
      </div>
      {children}
    </div>
  );
};
