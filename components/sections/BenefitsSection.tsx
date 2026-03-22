"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    title: "Performance-first engineering",
    body: "Every array is modeled for irradiance, shading, and inverter efficiency before install.",
  },
  {
    title: "Bankable quality",
    body: "Tier-1 modules, disciplined workmanship, and monitoring that proves production.",
  },
  {
    title: "White-glove delivery",
    body: "Permitting, interconnection, and commissioning handled end-to-end by one team.",
  },
];

export function BenefitsSection() {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const pin = pinRef.current;
    if (!root || !pin) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".benefit-card"),
      );
      const lines = cards
        .map((c) => c.querySelector(".benefit-line"))
        .filter((n): n is HTMLElement => n instanceof HTMLElement);

      if (cards.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top 68%",
            end: "+=130%",
            scrub: 1.15,
          },
        });

        tl.fromTo(
          cards,
          { opacity: 0.12, y: 48, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            stagger: 0.14,
          },
        );

        if (lines.length) {
          tl.fromTo(
            lines,
            { scaleX: 0.08, opacity: 0.15 },
            {
              scaleX: 1,
              opacity: 1,
              ease: "power3.out",
              stagger: 0.14,
            },
            "<0.1",
          );
        }
      }

      const leftCol = pin.querySelector("[data-benefits-sticky]");
      if (leftCol) {
        ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          pin: leftCol,
          pinSpacing: false,
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative section-dark">
      <div
        ref={pinRef}
        className="min-h-[100svh] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="max-w-md lg:top-28" data-benefits-sticky>
            <p className="text-eyebrow text-zinc-500">
              Why VIGEL
            </p>
            <h2 className="mt-5 text-section-title text-white">
              Solar that feels inevitable — engineered, cinematic, alive.
            </h2>
            <p className="mt-5 text-body-sm text-zinc-400">
              We design energy systems the way premium products are crafted: obsessive detail,
              transparent data, and a calm, confident experience from first call to flip-the-switch.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="benefit-card glass-panel rounded-2xl p-6 sm:p-8"
              >
                <div className="benefit-line mb-5 h-px origin-left bg-gradient-to-r from-white/35 to-transparent" />
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-body-sm text-zinc-400">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
