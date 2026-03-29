"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const projects = [
  {
    id: 1,
    title: "Apex Logistics Hub",
    metric: "2.4 MW",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1592833159057-6fc125381395?q=80&w=2664&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Horizon Estate",
    metric: "18 kW",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Eco Valley Farm",
    metric: "15 MW",
    category: "Utility",
    img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2676&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Nexus Tech Campus",
    metric: "4.1 MW",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
];

export function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-zinc-950/40 backdrop-blur-sm" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl font-[family-name:var(--font-syne)]">
              Proven Architecture.
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Live installations pushing the grid forward.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex flex-shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 whitespace-nowrap"
          >
            View all sites
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group relative h-[350px] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5",
                project.colSpan
              )}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity bg-cover bg-center"
                style={{ backgroundImage: `url('${project.img}')` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold font-[family-name:var(--font-syne)] text-emerald-400">
                      {project.metric}
                    </p>
                    <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mt-1">
                      Capacity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
