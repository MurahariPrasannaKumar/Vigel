"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Activity, ShieldCheck, Wifi, CheckCircle2 } from "lucide-react";

const features = [
  {
    name: "SOFTCELL-led innovation",
    description:
      "Developing compact solar-cell pathways intended to generate power under sunlight and general ambient lighting conditions.",
    icon: ShieldCheck,
  },
  {
    name: "Flexible and transparent BIPV",
    description:
      "Our BIPV direction emphasizes transparency, color adaptability, and seamless integration into windows and facades.",
    icon: Activity,
  },
  {
    name: "Custom product architecture",
    description:
      "SOFTFORM and SOFTGOODS concepts support configurable circuits, sensing, storage, and communication features.",
    icon: Wifi,
  },
];

export function WhyVigel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="why-vigel" className="section-dark py-24 sm:py-32 overflow-hidden relative">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-20 lg:grid-cols-12">

          {/* Sticky Left Content */}
          <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              <Activity className="h-3 w-3" />
              The Difference
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl">
              Innovation backed by <br />
              <span className="text-zinc-500 font-light italic">implementation.</span>
            </h2>

            <p className="mt-8 max-w-sm text-lg leading-relaxed text-zinc-400">
              VIGEL combines manufacturing focus, technology collaboration, and practical
              deployment thinking to build renewable systems that scale.
            </p>
          </div>

          {/* Right Side Timeline */}
          <div className="relative lg:col-span-7" ref={containerRef}>
            {/* Static Background Rail */}
            <div className="absolute left-6 top-2 h-full w-[2px] bg-white/15 lg:left-8" />

            {/* Animated Emerald Progress Line */}
            <motion.div
              className="absolute left-6 top-2 origin-top bg-emerald-500 lg:left-8 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              style={{ height: "100%", scaleY, width: "2px" }}
            />

            <div className="space-y-24">
              {features.map((feature, index) => (
                <div key={feature.name} className="relative pl-16 lg:pl-24">

                  {/* Timeline Node */}
                  <div className="absolute left-[18px] top-1 z-10 flex h-[14px] w-[14px] items-center justify-center lg:left-[26px]">
                    <motion.div
                      className="h-full w-full rounded-full border-2 border-black bg-zinc-700 shadow-sm transition-colors duration-500"
                      whileInView={{ backgroundColor: "#10b981", borderColor: "#064e3b", scale: 1.2 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                  </div>

                  <div className="group relative">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-emerald-400/80 transition-colors">
                      Phase 0{index + 1}
                    </span>

                    <div className="mt-3 flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                      <h3 className="font-[family-name:var(--font-syne)] text-2xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                        {feature.name}
                      </h3>
                    </div>

                    <p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                        Vigel Standard
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
