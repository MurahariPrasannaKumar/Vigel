"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import { EASE } from "@/lib/motion";

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
  { label: "Megawatts deployed", value: 420, suffix: "+" },
  { label: "Homes powered", value: 12800, suffix: "+" },
  { label: "CO₂ offset (tons / yr)", value: 96000, suffix: "" },
  { label: "Client satisfaction", value: 99, suffix: "%" },
];

export const AnimatedStats = memo(function AnimatedStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            delay: i * 0.1,
            duration: 0.58,
            ease: EASE,
          }}
          whileHover={{ y: -3, transition: { duration: 0.35, ease: EASE } }}
          className="glass-panel-light rounded-2xl p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50"
        >
          <p className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-zinc-900 dark:text-white sm:text-4xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-body-sm">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
});
