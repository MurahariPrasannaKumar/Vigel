"use client";

import { Hero3D } from "@/components/hero/Hero3D";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyVigel } from "@/components/sections/WhyVigel";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { Testimonials } from "@/components/sections/Testimonials";

import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-transparent selection:bg-emerald-500/30">
      <Hero3D />

      <SectionReveal>
        <TrustStrip />
      </SectionReveal>

      <SectionReveal>
        <ServicesOverview />
      </SectionReveal>

      <SectionReveal>
        <AboutPreview />
      </SectionReveal>

      <SectionReveal>
        <BenefitsSection />
      </SectionReveal>

      <SectionReveal>
        <ProcessSection />
      </SectionReveal>

      <ServicesGrid />

      <SectionReveal>
        <PortfolioSection />
      </SectionReveal>

      <SectionReveal className="border-t border-zinc-200">
        <WhyVigel />
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-transparent py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-zinc-950/40 backdrop-blur-[2px]" />

        <div
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-[100px]"
          aria-hidden="true"
        >
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Technology Highlights
              </p>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-white sm:text-5xl">
              Product metrics from the VIGEL profile.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-400">
              Key figures covering SOFTCELL output, SOFTFORM sizing, Soltria potential,
              and our current on-grid reference project.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <AnimatedStats />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      <SectionReveal className="relative bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 py-24 text-center shadow-2xl backdrop-blur-md sm:px-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-[100px]"
              aria-hidden="true"
            >
              <div className="aspect-[1155/678] w-[60rem] bg-gradient-to-tr from-emerald-500 to-blue-500 opacity-20" />
            </div>

            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Plan your solar project with VIGEL.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Share your requirement and site details. Our team will respond with a practical
              direction for products, configuration, and next steps.
            </p>

            <div className="relative z-10 mt-10 flex items-center justify-center gap-x-6">
              <PrimaryCTA
                href="/contact"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Contact VIGEL
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </PrimaryCTA>
            </div>

            <div className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
