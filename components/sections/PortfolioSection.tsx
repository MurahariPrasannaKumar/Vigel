// "use client";

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { cn } from "@/lib/cn";

// const projects = [
//   {
//     id: 1,
//     title: "Kurnool On-Grid Project",
//     metric: "3.3 kW",
//     category: "Residential",
//     img: "https://images.unsplash.com/photo-1592833159057-6fc125381395?q=80&w=2664&auto=format&fit=crop",
//     colSpan: "md:col-span-2",
//   },
//   {
//     id: 2,
//     title: "Rooftop Demonstration Site",
//     metric: "3.3 kW",
//     category: "On-Grid",
//     img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop",
//     colSpan: "md:col-span-1",
//   },
//   {
//     id: 3,
//     title: "BIPV Integration Study",
//     metric: "Pilot",
//     category: "BIPV",
//     img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2676&auto=format&fit=crop",
//     colSpan: "md:col-span-1",
//   },
//   {
//     id: 4,
//     title: "Smart Shelter Concept",
//     metric: "R&D",
//     category: "Innovation",
//     img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
//     colSpan: "md:col-span-2",
//   },
// ];

// export function PortfolioSection() {
//   return (
//     <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
//       <div className="absolute inset-0 -z-10 bg-zinc-950/40 backdrop-blur-sm" />

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-2xl">
//             <h2 className="font-[family-name:var(--font-syne)] text-3xl font-medium tracking-tight text-white sm:text-4xl">
//               Project snapshots.
//             </h2>
//             <p className="mt-4 text-lg text-zinc-400">
//               Representative deployment and product tracks from the VIGEL profile.
//             </p>
//           </div>
//           <Link
//             href="/portfolio"
//             className="group flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
//           >
//             View all sites
//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className={cn(
//                 "group relative h-[350px] overflow-hidden rounded-3xl border border-white/5 bg-zinc-900",
//                 project.colSpan,
//               )}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
//                 style={{ backgroundImage: `url('${project.img}')` }}
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

//               <div className="absolute inset-0 flex flex-col justify-end p-8">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="mb-3 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
//                       {project.category}
//                     </span>
//                     <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white">
//                       {project.title}
//                     </h3>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-emerald-400">
//                       {project.metric}
//                     </p>
//                     <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
//                       Status
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { ArrowRight, Plus, Monitor } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const projects = [
  {
    id: 1,
    title: "Kurnool On-Grid Project",
    metric: "3.3 kW",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2 h-[600px] md:h-full",
  },
  {
    id: 2,
    title: "Rooftop Site",
    metric: "3.3 kW",
    category: "On-Grid",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop",
    className: "md:col-span-1 h-[300px] md:h-[350px]",
  },
  {
    id: 3,
    title: "BIPV Integration",
    metric: "Pilot",
    category: "BIPV",
    img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2676&auto=format&fit=crop",
    className: "md:col-span-1 h-[300px] md:h-[350px]",
  },
  {
    id: 4,
    title: "Smart Shelter Concept",
    metric: "R&D",
    category: "Innovation",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
    className: "md:col-span-2 h-[350px]",
  },
  {
    id: 5,
    title: "BIPV Integration",
    metric: "Pilot",
    category: "BIPV",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop",
    className: "md:col-span-1 h-[300px] md:h-[350px]",
  },
];

export function PortfolioSection() {
  return (
    <section className="section-dark relative overflow-hidden py-24 sm:py-32">
      {/* Top Accent */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="h-4 w-4 text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">Deployments</span>
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-white lg:text-7xl">
              Project <span className="text-zinc-500">snapshots.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-emerald-500 hover:bg-emerald-500 hover:text-zinc-950"
          >
            View all sites
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/40 transition-all duration-500 hover:border-emerald-500/30",
                project.className
              )}
            >
              {/* Image Layer: Black & White to Color */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-55 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.img}')` }}
              />

              {/* Glass Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-zinc-900/10 opacity-95 transition-opacity group-hover:opacity-72" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-emerald-500/20" />

              <div className="absolute inset-0 flex flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-[70%]">
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl font-medium leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] lg:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tighter text-emerald-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] lg:text-5xl">
                      {project.metric}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
                      System Status
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Info */}
        <div className="mt-12 border-t border-white/10 pt-12">
          <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-sm">
          {['24/7 Monitoring', 'Kurnool Hub', 'BIPV Certified', 'Smart Scaling'].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-200">{tag}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
