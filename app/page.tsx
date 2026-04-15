"use client";

import { Hero3D } from "@/components/hero/Hero3D";

import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyVigel } from "@/components/sections/WhyVigel";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Rss, Mail, Shield, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <Hero3D />

      {/* Primary Section Stack */}
      <div className="space-y-0">
        {/* Core Services */}
        <SectionReveal>
          <ServicesOverview />
        </SectionReveal>
        {/* Differentiators Section */}
        <SectionReveal className="section-dark border-t border-white/10 mt-32 lg:mt-48">
          <WhyVigel />
        </SectionReveal>

        {/* Company Profile Preview */}
        <SectionReveal>
          <AboutPreview />
        </SectionReveal>

        {/* Value Propositions */}
        <SectionReveal>
          <BenefitsSection />
        </SectionReveal>

        {/* Operational Framework (Process) */}
        {/* <SectionReveal>
          <ProcessSection />
        </SectionReveal> */}

        {/* Interactive Services Fan Grid */}
        <div className="py-12">
          <ServicesGrid />
        </div>

        {/* Project Snapshots Bento Grid */}
        <SectionReveal>
          <PortfolioSection />
        </SectionReveal>
      </div>

      {/* Technical Status & Support Rail */}
      <div className="section-dark border-y border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[
            {
              label: "Pipeline Status",
              value: "Syncing (Kurnool Hub)",
              icon: Rss,
            },
            {
              label: "Direct Support",
              value: "lifecycle@vigel.in",
              icon: Mail,
            },
            {
              label: "Validated",
              value: "Hardware Level Security",
              icon: Shield,
            },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white">
                <stat.icon className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {stat.label}
                </span>
                <span className="text-sm font-medium text-zinc-100">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data & Product Metrics */}
      <SectionReveal className="section-light relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(16,185,129,0.08),transparent_36%),radial-gradient(circle_at_85%_90%,rgba(16,185,129,0.06),transparent_40%)]" />

        {/* Subtle Emerald Ambient Glow */}
        <div
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-[120px]"
          aria-hidden="true"
        >
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-500/10 to-emerald-100/10 opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5 shadow-xl">
              <Zap className="h-3 w-3 text-emerald-500 fill-emerald-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                Technology Metrics
              </p>
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-zinc-900 lg:text-7xl leading-[1.05]">
              Product benchmarks <br />
              <span className="text-zinc-400">from the VIGEL profile.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-500">
              High-performance figures covering SOFTCELL output, SOFTFORM
              sizing, and our flagship on-grid reference project data.
            </p>
          </div>

          <div className="mt-16 sm:mt-24">
            <AnimatedStats />
          </div>
        </div>
      </SectionReveal>

      {/* Client Feedback / Testimonials */}
      <SectionReveal className="section-dark border-t border-white/10 py-12">
        <Testimonials />
      </SectionReveal>

      <FinalCTASection />
    </main>
  );
}
