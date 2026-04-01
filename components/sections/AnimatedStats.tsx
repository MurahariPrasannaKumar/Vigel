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
    label: "Soltria ambient output",
    value: 1,
    suffix: " unit/day",
    icon: Zap,
    desc: "Profile target for compact plant-like generation under ambient-light conditions.",
  },
  {
    label: "SOFTCELL output",
    value: 350,
    suffix: " uW",
    icon: Home,
    desc: "Approximate per-cell output equivalent to 0.35 mW under standard test conditions.",
  },
  {
    label: "SOFTFORM max size",
    value: 500,
    suffix: " mm",
    icon: Leaf,
    desc: "Current reference maximum size from profile specifications (extendable roadmap).",
  },
  {
    label: "Kurnool reference project",
    value: 33,
    suffix: "00 W",
    icon: Star,
    desc: "On-grid project reference highlighted in company profile materials (3.3 kW).",
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
          <div className="relative h-full w-full transition-all duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center shadow-xl backdrop-blur-md [backface-visibility:hidden]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner transition-colors duration-500 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                <s.icon className="h-7 w-7 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="px-4 font-[family-name:var(--font-syne)] text-xl font-medium text-zinc-100">
                {s.label}
              </h3>
            </div>

            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-zinc-900/60 p-6 text-center shadow-2xl backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="font-[family-name:var(--font-syne)] text-4xl font-semibold text-emerald-400 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <div className="mt-4 h-px w-12 bg-emerald-500/30" />
              <p className="mt-4 text-sm leading-relaxed text-emerald-100/70">{s.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
});
