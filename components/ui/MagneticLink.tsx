"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const MagneticLink = memo(function MagneticLink({
  href,
  className,
  children,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.14 });
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.14 });

  return (
    <motion.div
      className="inline-flex"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.1);
        y.set(dy * 0.1);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={transition.spring}
    >
      <Link href={href} className={cn(className)}>
        {children}
      </Link>
    </motion.div>
  );
});
