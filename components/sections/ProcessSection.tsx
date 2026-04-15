"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cpu, Globe, Layers, Zap, ArrowRight, Rss } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Technology Partnership",
    description: "Aligning product strategy with advanced PV manufacturing pathways.",
    icon: Globe,
    metadata: "15.8° N",
  },
  {
    id: "02",
    title: "Product Engineering",
    description: "Engineering SOFTCELL and BIPV modules for specialized hardware.",
    icon: Cpu,
    metadata: "Rev 2.1",
  },
  {
    id: "03",
    title: "Site Deployment",
    description: "Optimizing for location-specific variables and building integration.",
    icon: Layers,
    metadata: "On-Grid",
  },
  {
    id: "04",
    title: "System Support",
    description: "Full-scale commissioning and operational performance tracking.",
    icon: Zap,
    metadata: "Lifecycle",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!pulseRef.current || !containerRef.current) return;

    const cards = cardsRef.current.filter((c) => c !== null);
    if (cards.length === 0) return;

    const pulse = pulseRef.current;
    const gridWidth = containerRef.current.offsetWidth;
    const distance = gridWidth + 400;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    tl.set(pulse, { x: -200, opacity: 0 });

    tl.to(pulse, {
      x: distance,
      opacity: 1,
      duration: 8,
    });

    const cardStagger = 8 / cards.length;

    cards.forEach((card, index) => {
      const glow = card.querySelector(".card-glow");
      const node = card.querySelector(".node-light");
      const innerCard = card.querySelector(".inner-card-container");

      // Synchronized Glow Timeline
      tl.to(glow, {
        opacity: 1,
        scale: 1.02,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      }, `<${index * cardStagger + 0.2}`)

        // Animate the actual card border and outer glow
        .to(innerCard, {
          borderColor: "rgba(16, 185, 129, 0.5)", // emerald-500/50
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.15)",
          backgroundColor: "rgba(24, 24, 27, 0.8)", // zinc-900/80
          duration: 0.8,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        }, "<")

        .to(node, {
          backgroundColor: "#10b981",
          boxShadow: "0 0 15px #10b981",
          duration: 0.5,
          yoyo: true,
          repeat: 1
        }, "<");
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section-dark relative overflow-hidden py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 mb-6">
              <Rss className="h-3 w-3 text-emerald-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">
                Connected Framework
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-white lg:text-7xl">
              Engineered <span className="text-zinc-500 font-light italic">Flow.</span>
            </h2>
          </div>
          <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:border-emerald-600 hover:bg-emerald-600 hover:text-white">
            Full Roadmap <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">
          {/* Main Power Rail */}
          <div className="absolute top-1/2 left-0 hidden h-[1px] w-full -translate-y-1/2 bg-zinc-100 lg:block">
            <div
              ref={pulseRef}
              className="absolute h-[2px] w-64 -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_25px_#10b981]"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative"
              >
                {/* The Animated Glow Layer */}
                <div className="card-glow absolute inset-0 -z-10 opacity-0 scale-95 transition-all">
                  <div className="absolute -inset-2 rounded-[2.5rem] bg-emerald-500/10 blur-2xl" />
                </div>

                {/* Card Container with animated border */}
                <div className="inner-card-container relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors duration-500">

                  {/* Central Node Light */}
                  <div className="node-light absolute left-1/2 top-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 lg:block" />

                  <div className="flex h-full flex-col justify-between relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-emerald-400 group-hover:border-emerald-500/50 transition-colors shadow-sm">
                        <step.icon size={22} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-zinc-500">
                        {step.id}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium text-white lg:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-zinc-400 transition-colors">
                        {step.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-[10px] font-mono tracking-tighter text-zinc-500 uppercase">{step.metadata}</span>
                      <div className="flex gap-1">
                        <div className="h-1 w-3 rounded-full bg-emerald-500/20" />
                        <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Diagnostics Footer */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 rounded-2xl border border-white/10 bg-white/5 px-10 py-6 backdrop-blur-md">
          {["Pipeline Synchronized", "Latency: 0.02ms", "Kurnool Edge Node"].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
