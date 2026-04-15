"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MoveUpRight,
  ArrowRight,
  X,
  Box,
  Cpu,
  Zap,
  CircleDot,
  Hexagon,
} from "lucide-react";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Infrastructure Design",
    desc: "Precision-engineered solar frameworks for large-scale utility deployment.",
    details:
      "Our design philosophy centers on structural integrity and maximum energy yield through advanced geometric optimization.",
    points: [
      "Load-bearing analysis",
      "CAD modeling",
      "Environmental stress testing",
    ],
    icon: Box, // Geometric/Architectural
    color: "emerald",
    link: "/services/design",
  },
  {
    title: "Smart Operations",
    desc: "AI-driven maintenance and performance tracking for maximum uptime.",
    details:
      "Utilizing real-time telemetry and edge computing to predict failure points before they occur.",
    points: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Fault detection",
    ],
    icon: Cpu, // Processing/Intelligence
    color: "blue",
    link: "/services/ops",
  },
  {
    title: "Energy Harvesting",
    desc: "Next-gen BIPV technology seamlessly integrated into building envelopes.",
    details:
      "Bridging the gap between architecture and energy production with transparent and flexible modules.",
    points: [
      "High-efficiency cells",
      "Aesthetic integration",
      "Sustainable materials",
    ],
    icon: Zap, // Power/Energy
    color: "amber",
    link: "/services/harvesting",
  },
];

export function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const active = activeIndex === null ? null : services[activeIndex];

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
      <section className="relative overflow-hidden bg-[#fafafa] py-24 sm:py-32 lg:py-48">
        {/* --- Background Polish --- */}
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.05),transparent)]" />

        {/* Top Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* --- Header --- */}
          <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <CircleDot className="h-3 w-3 text-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                  Capabilities & Systems
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-zinc-950 sm:text-7xl leading-[1.05]"
              >
                Technology built for <br />
                <span className="bg-gradient-to-r from-zinc-400 via-zinc-900 to-zinc-950 bg-clip-text text-transparent italic">
                  practical deployment.
                </span>
              </motion.h2>
            </div>

            <Link
              href="/services"
              className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all hover:text-zinc-950"
            >
              Explore all capabilities
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 transition-all group-hover:bg-zinc-950 group-hover:text-white group-hover:scale-110">
                <MoveUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          {/* --- Services Grid --- */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-[3.5rem] border border-zinc-200/60 bg-white p-12 text-left transition-all duration-700",
                  "hover:shadow-[0_80px_100px_-40px_rgba(0,0,0,0.12)] hover:-translate-y-3",
                  i === 1 && "md:translate-y-12",
                )}
              >
                {/* Subtle Grainy Inner Shadow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent)]" />

                <div>
                  <div className="relative mb-12">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-100 bg-zinc-50/50 text-zinc-950 shadow-sm transition-all duration-700 group-hover:rotate-[10deg] group-hover:bg-zinc-950 group-hover:text-white group-hover:shadow-xl">
                      <service.icon className="h-8 w-8" strokeWidth={1.2} />
                    </div>
                    <Hexagon className="absolute -bottom-2 -right-2 h-8 w-8 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors" />
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-3xl font-medium tracking-tight text-zinc-950 leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-zinc-500 font-light">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-20 flex items-center justify-between border-t border-zinc-50 pt-8">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                    <span className="h-1 w-6 bg-emerald-600 transition-all group-hover:w-10" />
                    Details
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-300">
                    VGL-0{i + 1}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* --- Grain Texture Overlay --- */}
        <div className="absolute inset-0 -z-20 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </section>

      {/* --- Detail Portal --- */}
      <AnimatePresence>
        {mounted && active && (
          <div className="fixed inset-0 z-[2147483640] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
              onClick={() => setActiveIndex(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[4rem] bg-white p-14 lg:p-20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute right-10 top-10 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-100 bg-zinc-50 text-zinc-400 transition-all hover:bg-zinc-950 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-14 flex items-center gap-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-zinc-950 text-white">
                  <active.icon className="h-10 w-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-2">
                    Technical Specification
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-zinc-950">
                    {active.title}
                  </h3>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-zinc-600 font-light">
                {active.details}
              </p>

              <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {active.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-4 rounded-3xl border border-zinc-100 p-6 transition-all hover:border-emerald-500/20 hover:bg-emerald-50/10"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-semibold text-zinc-800">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8">
                <Link
                  href={active.link}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 rounded-full bg-zinc-950 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-600 hover:scale-105"
                >
                  Project Roadmap
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em]">
                    Documentation
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    REF: VIGEL-SYS-2026
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
