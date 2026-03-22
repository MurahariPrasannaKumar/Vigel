"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Text link with animated underline (Framer Motion) */
export const TextLink = memo(function TextLink({ href, children, className }: Props) {
  return (
    <MotionLink
      href={href}
      className={cn("relative inline-flex text-sm font-medium", className)}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-px w-full bg-current"
        style={{ originX: 0 }}
        variants={{
          rest: { scaleX: 0.2, opacity: 0.35 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      />
    </MotionLink>
  );
});
