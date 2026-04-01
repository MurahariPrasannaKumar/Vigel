"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    title: "Long-term savings",
    body: "Solar generation reduces lifetime electricity spending with clear payback direction.",
    icon: Zap,
  },
  {
    title: "Energy independence",
    body: "On-site generation helps reduce dependence on unstable tariff conditions and outages.",
    icon: ShieldCheck,
  },
  {
    title: "Renewable and sustainable",
    body: "Clean-energy deployment supports long-term environmental and operational goals.",
    icon: Cpu,
  },
];

export function BenefitsSection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".benefit-card");
      const lines = cards
        .map((c) => c.querySelector(".benefit-line"))
        .filter((n): n is HTMLElement => n instanceof HTMLElement);

      if (cards.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        });

        tl.fromTo(
          cards,
          { opacity: 0, y: 50, filter: "blur(12px)", scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            ease: "power3.out",
            stagger: 0.2,
          },
        );

        if (lines.length) {
          tl.fromTo(
            lines,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              ease: "power3.out",
              stagger: 0.2,
            },
            "<0.1",
          );
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[40rem] w-[40rem] rounded-full bg-vigel-accent/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 lg:max-w-none lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:w-5/12 lg:shrink-0">
            <div className="flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-vigel-accent"></span>
              <p className="text-sm font-semibold uppercase tracking-wide text-vigel-accent">
                Advantages Of Solar Energy
              </p>
            </div>

            <h2 className="mt-6 font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
              Practical benefits that stay relevant for decades.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              VIGEL focuses on outcome-driven solar adoption where savings,
              independence, and sustainability are measurable and meaningful.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105">
                View solar advantages
              </button>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6 lg:mt-0">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="benefit-card group relative overflow-hidden rounded-3xl border border-black/5 bg-zinc-50 p-8 shadow-sm transition-all duration-300 hover:border-black/10 hover:shadow-md"
              >
                <div className="benefit-line absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-vigel-green/50 via-zinc-200 to-transparent" />

                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <b.icon className="h-6 w-6 text-vigel-green" strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium text-zinc-900 transition-colors group-hover:text-vigel-green">
                      {b.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-zinc-600">{b.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
