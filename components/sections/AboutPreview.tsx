"use client";

import { ArrowRight, Globe2, Sparkles, Box, CircleDot } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PREVIEW_IMAGES = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=2600",
  "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=2600",
];

export function AboutPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PREVIEW_IMAGES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* --- Left Content: Unchanged but Polished --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-emerald-600" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">
                The VIGEL Profile
              </p>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-zinc-950 lg:text-7xl leading-[1.1]">
              Renewable innovation <br />
              <span className="bg-gradient-to-b from-zinc-700 to-zinc-400 bg-clip-text text-transparent italic font-light">
                from Kurnool to the world.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-500 font-light">
              VIGEL bridges the gap between high-tech product R&D and
              large-scale project execution. We specialize in BIPV systems
              engineered for the next generation of infrastructure.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600"
              >
                Read our profile
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
                  <Globe2 className="h-3 w-3" />
                  Coordinates
                </div>
                <span className="text-xs font-medium text-zinc-900">
                  15.8281° N, 78.0373° E
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: The Premium Vessel --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The Container (Ultra-Simple, High-Depth) */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
              {/* Inner Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-zinc-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={PREVIEW_IMAGES[currentIndex]}
                      alt="Vigel Innovation"
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                    {/* Shadow masking for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* --- Premium Technical Overlays --- */}

                {/* 1. Floating Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Live: Ops Kurnool
                    </span>
                  </div>
                </div>

                {/* 2. Simplified Information Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-end justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                        Ref: System-24
                      </p>
                      <h4 className="text-2xl font-medium text-white tracking-tight">
                        SOFTCELL Structure
                      </h4>
                      <div className="flex gap-4 pt-2">
                        <div className="h-1 w-12 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: ["0%", "100%"] }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="h-full bg-emerald-500"
                          />
                        </div>
                        <span className="text-[9px] text-zinc-300 font-mono">
                          0{currentIndex + 1} // Deployment
                        </span>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-xl">
                      <Box className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Background Glow (Minimal) */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
