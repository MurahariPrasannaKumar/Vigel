import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Hero3D } from "@/components/hero/Hero3D";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero3D />

      <SectionReveal
        className={cn("section-light section-shell")}
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-eyebrow flex items-center gap-2 text-zinc-500">
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-vigel-green dark:bg-vigel-accent"
              aria-hidden
            />
            Services
          </p>
          <h2 className="mt-5 max-w-2xl text-section-title">
            Three pillars of clean power — each crafted for scale and serenity.
          </h2>
          <div className="mt-12 lg:mt-16">
            <ServicesGrid />
          </div>
        </div>
      </SectionReveal>

      <BenefitsSection />

      <SectionReveal className={cn("section-light section-shell")}>
        <div className="mx-auto max-w-6xl">
          <p className="text-eyebrow flex items-center gap-2 text-zinc-500">
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-vigel-green/80 dark:bg-vigel-accent/90"
              aria-hidden
            />
            Impact
          </p>
          <h2 className="mt-5 text-section-title">
            Numbers that track the future we&apos;re wiring up.
          </h2>
          <div className="mt-12 lg:mt-16">
            <AnimatedStats />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        className="relative overflow-hidden bg-vigel-dark px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-section-title text-white">
              Ready for a site survey?
            </h2>
            <p className="mt-5 max-w-xl text-body-sm text-zinc-400">
              Share your goals — we&apos;ll model production, incentives, and payback before
              you sign anything.
            </p>
          </div>
          <PrimaryCTA href="/contact" className="shrink-0 px-10 py-4">
            Talk to VIGEL
          </PrimaryCTA>
        </div>
      </SectionReveal>
    </main>
  );
}
