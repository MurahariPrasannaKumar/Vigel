"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

export const PrimaryCTA = memo(function PrimaryCTA({
  href,
  children,
  className,
  variant = "primary",
}: Props) {
  return (
    <MotionLink
      href={href}
      className={cn(
        // Base — pill shape, tight tracking, refined weight
        "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full",
        "px-8 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase",
        "transition-colors duration-300",

        // Primary variant — dark button on light bg
        variant === "primary" && [
          "bg-zinc-950 text-white",
          "shadow-[0_2px_20px_rgba(0,0,0,0.12)]",
          "hover:bg-emerald-600 hover:text-white",
          "hover:shadow-[0_4px_32px_rgba(16,185,129,0.25)]",
        ],

        // Ghost variant — outlined, for secondary actions
        variant === "ghost" && [
          "border border-zinc-300 bg-transparent text-zinc-700",
          "hover:bg-zinc-100 hover:border-zinc-400 hover:text-zinc-900",
        ],

        className,
      )}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={transition.spring}
    >
      {/* Subtle top-edge shimmer line on hover */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      {/* Button label + icon */}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </MotionLink>
  );
});
