"use client";

import { motion, type Variants } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { TextLink } from "@/components/ui/TextLink";
import { EASE } from "@/lib/motion";

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export function Hero3D() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[-1] bg-black/40 mix-blend-multiply" aria-hidden />

      <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
        <ParticleField className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={heroItem} className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-500/60" aria-hidden />
            <p className="text-eyebrow text-zinc-300">
              VI Green Energy Limited
            </p>
          </motion.div>
          <motion.h1
            variants={heroItem}
            className="mt-6 font-[family-name:var(--font-syne)] font-semibold tracking-tight text-white [font-size:clamp(2.5rem,5vw+1rem,4.5rem)] [line-height:1.02]"
          >
            Solar infrastructure
            <span className="text-gradient"> built like a flagship product.</span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-8 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            From elegant residential arrays to utility-scale solar farming, VIGEL pairs
            rigorous engineering with a calm, precise digital experience — so clean energy
            feels as inevitable as the sunrise.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <PrimaryCTA href="/contact">Start your project</PrimaryCTA>
            <TextLink href="/services" className="text-zinc-200 hover:text-white">
              View capabilities
            </TextLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
