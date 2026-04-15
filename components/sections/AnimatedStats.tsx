"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EASE } from "@/lib/motion";
import { Zap, Home, Leaf, Star, X } from "lucide-react";

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
    details:
      "Early-stage ambient conversion unit designed for low-light test environments and compact edge devices.",
    points: [
      "Prototype ID: SOL-A1",
      "Validation window: 30-day baseline run",
      "Target use case: indoor sensing nodes",
    ],
  },
  {
    label: "SOFTCELL output",
    value: 350,
    suffix: " uW",
    icon: Home,
    desc: "Approximate per-cell output equivalent to 0.35 mW under standard test conditions.",
    details:
      "Benchmark figure used for module planning and comparative simulation before production tuning.",
    points: [
      "Test profile: STC comparative bench",
      "Revision note: Cell stack v2.1",
      "Application focus: modular panel arrays",
    ],
  },
  {
    label: "SOFTFORM max size",
    value: 500,
    suffix: " mm",
    icon: Leaf,
    desc: "Current reference maximum size from profile specifications (extendable roadmap).",
    details:
      "Current form-factor cap for pilot builds, with roadmap space for larger sheets after tooling updates.",
    points: [
      "Current format: 500 mm reference edge",
      "Roadmap: extended format compatibility",
      "Use case: BIPV and flexible integration",
    ],
  },
  {
    label: "Kurnool reference project",
    value: 33,
    suffix: "00 W",
    icon: Star,
    desc: "On-grid project reference highlighted in company profile materials (3.3 kW).",
    details:
      "Field reference deployment used as the baseline for reliability reviews, support playbooks, and reporting.",
    points: [
      "Site class: On-grid reference node",
      "Commissioning status: stable operations",
      "Monitoring: periodic performance snapshots",
    ],
  },
];

export const AnimatedStats = memo(function AnimatedStats() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const active = activeIndex === null ? null : stats[activeIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.button
            key={s.label}
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: EASE,
            }}
            onClick={() => setActiveIndex(i)}
            className="group relative h-[250px] w-full cursor-pointer text-left [perspective:1200px]"
          >
            <div className="relative h-full w-full transition-all duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-zinc-500/30 bg-[linear-gradient(145deg,rgba(82,82,91,0.44),rgba(39,39,42,0.62))] p-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl [backface-visibility:hidden]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_45%)]" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-inner transition-colors duration-500 group-hover:border-emerald-400/60 group-hover:bg-emerald-500/12">
                  <s.icon
                    className="h-7 w-7 text-emerald-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="px-4 font-[family-name:var(--font-syne)] text-xl font-medium text-white/95">
                  {s.label}
                </h3>
              </div>

              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-400/35 bg-[linear-gradient(150deg,rgba(63,63,70,0.54),rgba(24,24,27,0.72))] p-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.34)] backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(16,185,129,0.16)_0%,rgba(255,255,255,0.04)_65%)]" />
                <p className="font-[family-name:var(--font-syne)] text-4xl font-semibold text-emerald-200 sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <div className="mt-4 h-px w-12 bg-emerald-300/40" />
                <p className="mt-4 text-sm leading-relaxed text-zinc-200/85">
                  {s.desc}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {mounted &&
        active &&
        createPortal(
          <div
            className="fixed inset-0 z-[9500] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(145deg,rgba(24,24,27,0.96),rgba(39,39,42,0.95))] p-8 text-white shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close details popup"
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/10">
                  <active.icon
                    className="h-6 w-6 text-emerald-300"
                    strokeWidth={1.6}
                  />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-medium text-white">
                  {active.label}
                </h3>
              </div>

              <p className="mt-6 font-[family-name:var(--font-syne)] text-4xl font-semibold text-emerald-200">
                {`${active.value.toLocaleString()}${active.suffix}`}
              </p>

              <p className="mt-5 text-base leading-relaxed text-zinc-300">
                {active.desc}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {active.details}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                {active.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
});
