"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import { EASE } from "@/lib/motion";
import { Zap, Home, Leaf, Star } from "lucide-react";

const Counter = memo(function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 85, damping: 24 });
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      }
    });
    return () => unsub();
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
});

const stats = [
  { 
    label: "Megawatts deployed", 
    value: 420, 
    suffix: "+", 
    icon: Zap, 
    desc: "Utility-scale generation capacity installed and active." 
  },
  { 
    label: "Homes powered", 
    value: 12800, 
    suffix: "+", 
    icon: Home, 
    desc: "Clean energy delivered to residential communities." 
  },
  { 
    label: "CO₂ offset (tons / yr)", 
    value: 96000, 
    suffix: "", 
    icon: Leaf, 
    desc: "Carbon emission reduction driving global impact." 
  },
  { 
    label: "Client satisfaction", 
    value: 99, 
    suffix: "%", 
    icon: Star, 
    desc: "Five-star premium experience from design to flip-the-switch." 
  },
];

export const AnimatedStats = memo(function AnimatedStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            delay: i * 0.15,
            duration: 0.6,
            ease: EASE,
          }}
          className="group relative h-[250px] w-full cursor-pointer [perspective:1200px]"
        >
          {/* Inner 3D Container */}
          <div className="relative h-full w-full transition-all duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Face */}
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm [backface-visibility:hidden]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 shadow-inner transition-colors duration-500 group-hover:bg-emerald-50">
                <s.icon className="h-7 w-7 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium text-zinc-900 px-4">
                {s.label}
              </h3>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="font-[family-name:var(--font-syne)] text-4xl font-semibold text-emerald-900 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <div className="mt-4 h-px w-12 bg-emerald-200/60" />
              <p className="mt-4 text-sm leading-relaxed text-emerald-800/80">
                {s.desc}
              </p>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
});
