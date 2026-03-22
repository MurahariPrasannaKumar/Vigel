"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { memo } from "react";

export const ScrollProgress = memo(function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 32,
    restDelta: 0.0005,
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-zinc-400/80 via-vigel-accent to-amber-300/90"
      style={{ scaleX }}
    />
  );
});
