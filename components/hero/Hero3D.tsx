"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { TextLink } from "@/components/ui/TextLink";
import { EASE } from "@/lib/motion";

const HeroOrbitCarousel = dynamic(
  () =>
    import("@/components/hero/HeroOrbitCarousel").then(
      (mod) => mod.HeroOrbitCarousel,
    ),
  { ssr: false },
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
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [activeHeroBackground, setActiveHeroBackground] = useState<
    string | null
  >(null);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const schedule = window.setTimeout(() => setShowCarousel(true), 150);

    return () => {
      window.clearTimeout(schedule);
    };
  }, []);

  const handleHorizontalStart = useCallback(() => {
    setShowHeroContent(true);
  }, []);

  const handleActiveImageChange = useCallback((imageSrc: string) => {
    setActiveHeroBackground(imageSrc);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video> */}
      <div
        className="absolute inset-0 z-[-3] bg-black bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: activeHeroBackground
            ? `url(${activeHeroBackground})`
            : undefined,
          opacity: activeHeroBackground ? 1 : 1,
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
        <ParticleField className="h-full w-full" />
      </div>
      {showCarousel ? (
        <HeroOrbitCarousel
          onHorizontalStart={handleHorizontalStart}
          onActiveImageChange={handleActiveImageChange}
        />
      ) : null}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate={showHeroContent ? "show" : "hidden"}
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
            Solar energy solutions
            <span className="text-gradient"> for the next generation.</span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-8 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            VIGEL develops renewable energy products and practical solar
            solutions, including photovoltaic modules, BIPV systems, flexible
            rollable modules, and smart shelter technologies.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <PrimaryCTA href="/contact">Contact our team</PrimaryCTA>
            <TextLink
              href="/services"
              className="text-zinc-200 hover:text-white"
            >
              View products
            </TextLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
