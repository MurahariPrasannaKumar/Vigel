"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { HeroCanvasSkeleton } from "@/components/ui/HeroCanvasSkeleton";
import { ParticleField } from "@/components/ui/ParticleField";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { TextLink } from "@/components/ui/TextLink";
import { EASE } from "@/lib/motion";

const PremiumHeroSceneCanvas = dynamic(
  () => import("./PremiumHeroScene").then((m) => m.PremiumHeroSceneCanvas),
  {
    ssr: false,
    loading: () => <HeroCanvasSkeleton />,
  },
);

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
    <section className="relative isolate min-h-[100svh] overflow-hidden hero-radial">
      <div className="hero-ambient" aria-hidden />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[min(560px,55svh)] w-[min(560px,90vw)] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] translate-x-1/4 translate-y-1/4 rounded-full bg-vigel-accent/10 blur-[90px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
        <ParticleField className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-24 pt-28 sm:gap-10 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl lg:max-w-none"
        >
          <motion.div variants={heroItem} className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-500/60" aria-hidden />
            <p className="text-eyebrow text-zinc-400">
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
            className="mt-8 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base"
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
            <TextLink href="/services" className="text-zinc-300 hover:text-white">
              View capabilities
            </TextLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.85, ease: EASE }}
          className="relative h-[min(72svh,540px)] w-full"
        >
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.75rem] opacity-95"
            style={{
              background:
                "radial-gradient(ellipse at 50% 45%, rgba(34,197,94,0.28) 0%, rgba(34,197,94,0.06) 42%, transparent 68%)",
              filter: "blur(32px)",
            }}
          />
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/55 backdrop-blur-[2px]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <PremiumHeroSceneCanvas />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.06]" />
        </motion.div>
      </div>
    </section>
  );
}
