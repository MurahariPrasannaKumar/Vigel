"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleDot } from "lucide-react";
import Link from "next/link";

export function FinalCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // 3D Perspective Tilt Logic
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    setRotate({ x: -dy / 25, y: dx / 25 });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ perspective: "1000px" }}
          className="group relative isolate overflow-hidden rounded-[3rem] border border-white/10 bg-[#050505] p-12 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] sm:p-20"
        >
          {/* --- 1. Background Layer --- */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Subtle Bevel Highlight (Top Edge Glow) */}
          <div className="absolute inset-px rounded-[2.9rem] bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Ambient Emerald Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px] transition-all duration-700 group-hover:bg-emerald-500/20" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-400/5 blur-[80px]" />

          {/* Top Shimmer Beam */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.3)]" />

          <div className="relative z-10">
            {/* --- 2. Eyebrow Component --- */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <CircleDot className="h-2.5 w-2.5 text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400/80">
                Start Your Project
              </span>
            </motion.div>

            {/* --- 3. Heading & Typography --- */}
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Scale your vision with <br />
              <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent italic font-light">
                clean energy engineering.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-zinc-400 font-light">
              Connect with our team to receive a structured roadmap covering{" "}
              <span className="text-zinc-200">
                products, configuration, and next steps.
              </span>
            </p>

            {/* --- 4. Interactive Action Row --- */}
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-emerald-500 hover:text-white"
              >
                Connect with VIGEL
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-white"
              >
                Explore Services
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </div>

            {/* --- 5. Engineering Signature Footer --- */}
            <div className="mt-16 pt-8 border-t border-white/5">
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-600">
                Based in Kurnool · CIN U35105AP2024PLC114311
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
