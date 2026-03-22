"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

/** Fade + slide + subtle scale when section enters view */
export const SectionReveal = memo(function SectionReveal({
  children,
  className,
  as = "section",
}: Props) {
  const Motion = as === "section" ? motion.section : motion.div;
  return (
    <Motion
      initial={{ opacity: 0, y: 32, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.12 }}
      transition={{ duration: 0.72, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </Motion>
  );
});
