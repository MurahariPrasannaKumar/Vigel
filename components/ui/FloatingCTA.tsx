"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { transition } from "@/lib/motion";

const MotionLink = motion.create(Link);

export const FloatingCTA = memo(function FloatingCTA() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 hidden sm:block"
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionLink
        href="/contact"
        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-vigel-green to-vigel-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_48px_-8px_rgba(22,163,74,0.45)] ring-1 ring-white/20"
        whileHover={{
          scale: 1.04,
          boxShadow: "0 22px 55px -10px rgba(34, 197, 94, 0.5)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={transition.spring}
      >
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative">Book consultation</span>
        <motion.span
          className="relative text-lg leading-none"
          animate={{ x: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </MotionLink>
    </motion.div>
  );
});
