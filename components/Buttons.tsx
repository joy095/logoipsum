"use client";

import { ArrowUpRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils"; // optional: if using shadcn or similar

type FancyButtonVariant = "primary" | "secondary";

interface FancyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: FancyButtonVariant;
  className?: string;
}

export default function Buttons({
  children,
  variant = "primary",
  className,
  ...props
}: FancyButtonProps) {
  const baseStyles = `
    relative group
    px-5 py-2
    rounded-md
    font-medium
    overflow-hidden
    transition-all duration-500 ease-out
    hover:shadow-xl
    focus:outline-none focus:ring-4 focus:ring-offset-2
    cursor-pointer select-none
    flex items-center gap-2
  `;

  const variants = {
    primary: `
      text-[#2DC67D] border-2 border-[#2DC67D]
      hover:shadow-[#2DC67D]/50
      focus:ring-[#2DC67D]/30 focus:ring-offset-white
    `,
    secondary: `
      text-white bg-[#FF8C91]
      hover:shadow-pink-500/50
      focus:ring-pink-400/30 focus:ring-offset-transparent
    `,
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {/* Shimmer Effect */}
      <span
        className="
          absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-transform duration-1000 ease-out skew-x-12
        "
      />

      {/* Glass Overlay */}
      <span
        className="
          absolute inset-0 rounded-md
          bg-white/10 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      <div className="relative flex items-center gap-2 z-10">
        <span className="tracking-wide">{children}</span>

        {/* Arrow Animation Container */}
        <div className="relative w-6 h-6 overflow-hidden">
          {/* Arrow A: Flies up-right & fades */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:translate-x-3 group-hover:-translate-y-3
              group-hover:opacity-0 group-hover:scale-50
            "
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>

          {/* Arrow B: Slides in from bottom-left */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              opacity-0 scale-50
              translate-x-[-12px] translate-y-[12px]
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              delay-75
              group-hover:translate-x-0 group-hover:translate-y-0
              group-hover:opacity-100 group-hover:scale-100
            "
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Inner Glow */}
      <span
        className={cn(
          "absolute -inset-1 rounded-md blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10",
          variant === "primary"
            ? "bg-gradient-to-r from-emerald-400/20 to-teal-500/20"
            : "bg-gradient-to-r from-pink-400/30 to-rose-500/30"
        )}
      />
    </button>
  );
}
