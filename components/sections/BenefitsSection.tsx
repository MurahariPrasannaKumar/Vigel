// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Cpu, ShieldCheck, Zap } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const benefits = [
//   {
//     title: "Long-term savings",
//     body: "Solar generation reduces lifetime electricity spending with clear payback direction.",
//     icon: Zap,
//   },
//   {
//     title: "Energy independence",
//     body: "On-site generation helps reduce dependence on unstable tariff conditions and outages.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Renewable and sustainable",
//     body: "Clean-energy deployment supports long-term environmental and operational goals.",
//     icon: Cpu,
//   },
// ];

// export function BenefitsSection() {
//   const rootRef = useRef<HTMLElement>(null);

//   useLayoutEffect(() => {
//     const root = rootRef.current;
//     if (!root) return;

//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray<HTMLElement>(".benefit-card");
//       const lines = cards
//         .map((c) => c.querySelector(".benefit-line"))
//         .filter((n): n is HTMLElement => n instanceof HTMLElement);

//       if (cards.length) {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: root,
//             start: "top 60%",
//             end: "bottom 80%",
//             scrub: 1,
//           },
//         });

//         tl.fromTo(
//           cards,
//           { opacity: 0, y: 50, filter: "blur(12px)", scale: 0.95 },
//           {
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//             scale: 1,
//             ease: "power3.out",
//             stagger: 0.2,
//           },
//         );

//         if (lines.length) {
//           tl.fromTo(
//             lines,
//             { scaleX: 0, opacity: 0 },
//             {
//               scaleX: 1,
//               opacity: 1,
//               ease: "power3.out",
//               stagger: 0.2,
//             },
//             "<0.1",
//           );
//         }
//       }
//     }, root);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={rootRef} className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
//         <div className="h-[40rem] w-[40rem] rounded-full bg-vigel-accent/30 blur-[120px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto flex max-w-2xl flex-col gap-16 lg:max-w-none lg:flex-row lg:items-start lg:gap-20">
//           <div className="lg:sticky lg:top-32 lg:w-5/12 lg:shrink-0">
//             <div className="flex items-center gap-2">
//               <span className="h-1 w-6 rounded-full bg-vigel-accent"></span>
//               <p className="text-sm font-semibold uppercase tracking-wide text-vigel-accent">
//                 Advantages Of Solar Energy
//               </p>
//             </div>

//             <h2 className="mt-6 font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
//               Practical benefits that stay relevant for decades.
//             </h2>

//             <p className="mt-6 text-lg leading-8 text-zinc-600">
//               VIGEL focuses on outcome-driven solar adoption where savings,
//               independence, and sustainability are measurable and meaningful.
//             </p>

//             <div className="mt-8 flex gap-4">
//               <button className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105">
//                 View solar advantages
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-1 flex-col gap-6 lg:mt-0">
//             {benefits.map((b) => (
//               <div
//                 key={b.title}
//                 className="benefit-card group relative overflow-hidden rounded-3xl border border-black/5 bg-zinc-50 p-8 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-md"
//               >
//                 <div className="benefit-line absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-vigel-green/50 via-zinc-200 to-transparent" />

//                 <div className="flex items-start gap-6">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
//                     <b.icon className="h-6 w-6 text-vigel-green" strokeWidth={1.5} />
//                   </div>

//                   <div>
//                     <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium text-zinc-900 transition-colors group-hover:text-vigel-green">
//                       {b.title}
//                     </h3>
//                     <p className="mt-3 leading-relaxed text-zinc-600">{b.body}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    title: "Long-term Savings",
    body: "Solar generation drastically reduces lifetime electricity expenditure with a clear, data-driven payback trajectory.",
    icon: Zap,
    metric: "40% ROI",
  },
  {
    title: "Energy Independence",
    body: "On-site generation mitigates risks from grid instability and volatile tariff hikes, ensuring operational continuity.",
    icon: ShieldCheck,
    metric: "24/7 Uptime",
  },
  {
    title: "Sustainable Impact",
    body: "Clean-energy deployment aligns your infrastructure with global ESG goals and long-term environmental mandates.",
    icon: Cpu,
    metric: "0% Emissions",
  },
];

export function BenefitsSection() {
  const rootRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".benefit-card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-dark relative w-full py-24 lg:py-40">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">

          {/* Left Column: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                Advantages
              </span>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-5xl font-medium leading-[1.1] tracking-tight text-white lg:text-7xl">
              Future-proof <br />
              <span className="text-zinc-400">infrastructure.</span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-zinc-300">
              VIGEL delivers outcome-driven solar integration where the benefits
              are as transparent as they are measurable.
            </p>

            <div className="mt-12 group">
              <button className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white transition-all">
                <span className="relative">
                  View Full Roadmap
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-emerald-500 origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 transition-transform group-hover:rotate-45 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Animated Card Stack */}
          <div ref={scrollRef} className="flex flex-col gap-8 lg:col-span-7">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={cn(
                  "benefit-card group relative overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-8 lg:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-colors hover:border-emerald-500/40 hover:bg-zinc-900",
                  "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-emerald-500/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
                )}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-10 transition-opacity group-hover:opacity-100">
                  <span className="font-mono text-4xl font-black text-zinc-100">0{i + 1}</span>
                </div>

                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg">
                    <b.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-[family-name:var(--font-syne)] text-2xl font-medium text-white lg:text-3xl">
                        {b.title}
                      </h3>
                      <span className="rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-bold text-zinc-300 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
                        {b.metric}
                      </span>
                    </div>
                    <p className="mt-4 text-lg leading-relaxed text-zinc-300 group-hover:text-zinc-200">
                      {b.body}
                    </p>
                  </div>
                </div>

                {/* Bottom Scanning Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
