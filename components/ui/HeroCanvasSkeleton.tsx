"use client";

import { motion } from "framer-motion";
import { memo } from "react";

export const HeroCanvasSkeleton = memo(function HeroCanvasSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full bg-white/5"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.92, 1, 0.92] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md"
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
});
