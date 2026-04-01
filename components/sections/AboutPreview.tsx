"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-zinc-950/50" />
      <div className="pointer-events-none absolute -inset-y-1/2 -z-10 right-0 w-1/2 bg-gradient-to-l from-emerald-500/10 to-transparent opacity-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500" />
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                The VIGEL Profile
              </p>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-medium leading-tight tracking-tight text-white lg:text-5xl">
              Renewable energy innovation from Kurnool to scalable deployment.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              VIGEL combines product development and project execution across
              photovoltaic modules, BIPV systems, flexible rollable modules, and smart
              shelter technologies with a long-term manufacturing vision.
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
              >
                Read our profile
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-2 shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 to-transparent" />
            <div className="group relative h-full w-full overflow-hidden rounded-xl bg-zinc-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">SOFTCELL / SOFTFORM</p>
                    <p className="mt-1 text-xs text-zinc-400">BIPV, flexible, and smart module roadmap</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
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
