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
};

export const PrimaryCTA = memo(function PrimaryCTA({
  href,
  children,
  className,
}: Props) {
  return (
    <MotionLink
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
        "bg-gradient-to-r from-vigel-green to-vigel-accent px-8 py-3.5 text-sm font-semibold text-white",
        "shadow-[0_12px_40px_-8px_rgba(22,163,74,0.25)] ring-1 ring-white/15",
        className,
      )}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 50px -12px rgba(34, 197, 94, 0.45)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={transition.spring}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </MotionLink>
  );
});
