"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      {/* Background Elements to merge with global cursor grid */}
      <div className="absolute inset-0 -z-10 bg-zinc-950/50" />
      <div className="pointer-events-none absolute -inset-y-1/2 -z-10 right-0 w-1/2 bg-gradient-to-l from-emerald-500/10 to-transparent blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          
          {/* Left Column: Typography */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500" />
              <p className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                The VIGEL Standard
              </p>
            </div>
            
            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-white lg:text-5xl leading-tight">
              We treat solar infrastructure like premium consumer hardware.
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              The industry has historically treated solar as an opaque construction project. We operate differently. From architectural modeling to live telemetry, our arrays are designed to be gorgeous, bankable, and entirely transparent.
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
              >
                Read our story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Visual / Image Placeholder */}
          <div className="relative aspect-[4/5] w-full rounded-2xl bg-zinc-900 border border-white/10 p-2 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
            <div className="h-full w-full rounded-xl bg-zinc-800 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Tier-1 Modules</p>
                    <p className="text-xs text-zinc-400 mt-1">25-Year Performance</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
