// "use client";

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export function AboutPreview() {
//   return (
//     <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
//       <div className="absolute inset-0 -z-10 bg-zinc-950/50" />
//       <div className="pointer-events-none absolute -inset-y-1/2 -z-10 right-0 w-1/2 bg-gradient-to-l from-emerald-500/10 to-transparent opacity-50 blur-3xl" />

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
//           <div>
//             <div className="flex items-center gap-2">
//               <span className="h-px w-8 bg-emerald-500" />
//               <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
//                 The VIGEL Profile
//               </p>
//             </div>

//             <h2 className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-medium leading-tight tracking-tight text-white lg:text-5xl">
//               Renewable energy innovation from Kurnool to scalable deployment.
//             </h2>

//             <p className="mt-6 text-lg leading-relaxed text-zinc-400">
//               VIGEL combines product development and project execution across
//               photovoltaic modules, BIPV systems, flexible rollable modules, and smart
//               shelter technologies with a long-term manufacturing vision.
//             </p>

//             <div className="mt-10">
//               <Link
//                 href="/about"
//                 className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
//               >
//                 Read our profile
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>

//           <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-2 shadow-2xl">
//             <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 to-transparent" />
//             <div className="group relative h-full w-full overflow-hidden rounded-xl bg-zinc-800">
//               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" />

//               <div className="absolute bottom-8 left-8 right-8 z-20">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-white">SOFTCELL / SOFTFORM</p>
//                     <p className="mt-1 text-xs text-zinc-400">BIPV, flexible, and smart module roadmap</p>
//                   </div>
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
//                     <ArrowRight className="h-4 w-4 text-white" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { ArrowRight, Globe2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PREVIEW_IMAGES = [
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1466611653911-95282ee39567?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509391366360-fe5bb60c8e5c?q=80&w=2670&auto=format&fit=crop",
];

// Double the array for seamless infinite looping
const SCROLL_IMAGES = [...PREVIEW_IMAGES, ...PREVIEW_IMAGES];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32">
      {/* Background Polish */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(16,185,129,0.08)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-[600px] w-1/2 bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left Content Column */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/90">
                The VIGEL Profile
              </p>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-medium leading-[1.1] tracking-tight text-white lg:text-6xl">
              Renewable innovation <br />
              <span className="text-zinc-500">from Kurnool to the world.</span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400/90">
              VIGEL bridges the gap between high-tech product development and
              large-scale project execution. We specialize in BIPV systems and
              flexible smart modules engineered for the next generation of energy.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-emerald-400"
              >
                Read our profile
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Globe2 className="h-4 w-4" />
                <span className="font-mono tracking-tighter">15.8281° N, 78.0373° E</span>
              </div>
            </div>
          </div>

          {/* Right Image Carousel Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-3 shadow-2xl backdrop-blur-sm">

              {/* Carousel Track */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-950">
                <motion.div
                  className="flex h-full"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  {SCROLL_IMAGES.map((src, index) => (
                    <div
                      key={index}
                      className="relative h-full min-w-full flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt="Vigel Innovation"
                        className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-transform duration-700 hover:scale-110 hover:opacity-80 hover:mix-blend-normal"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Overlays */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20" />

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 z-30 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Innovation Roadmap</p>
                      <p className="mt-1 text-sm font-medium text-white">SOFTCELL / SOFTFORM</p>
                      <p className="text-xs text-zinc-500">BIPV & Smart Module Deployment</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-emerald-500 hover:border-emerald-500">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic accent behind the card */}
            <div className="absolute -bottom-12 -right-12 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}