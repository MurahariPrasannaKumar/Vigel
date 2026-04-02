// "use client";

// import { Hero3D } from "@/components/hero/Hero3D";
// import { TrustStrip } from "@/components/sections/TrustStrip";
// import { ServicesOverview } from "@/components/sections/ServicesOverview";
// import { AboutPreview } from "@/components/sections/AboutPreview";
// import { BenefitsSection } from "@/components/sections/BenefitsSection";
// import { ProcessSection } from "@/components/sections/ProcessSection";
// import { ServicesGrid } from "@/components/sections/ServicesGrid";
// import { PortfolioSection } from "@/components/sections/PortfolioSection";
// import { WhyVigel } from "@/components/sections/WhyVigel";
// import { AnimatedStats } from "@/components/sections/AnimatedStats";
// import { Testimonials } from "@/components/sections/Testimonials";

// import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
// import { SectionReveal } from "@/components/ui/SectionReveal";
// import { ArrowRight } from "lucide-react";

// export default function HomePage() {
//   return (
//     <main className="flex flex-1 flex-col bg-transparent selection:bg-emerald-500/30">
//       <Hero3D />

//       <SectionReveal>
//         <TrustStrip />
//       </SectionReveal>

//       <SectionReveal>
//         <ServicesOverview />
//       </SectionReveal>

//       <SectionReveal>
//         <AboutPreview />
//       </SectionReveal>

//       <SectionReveal>
//         <BenefitsSection />
//       </SectionReveal>

//       <SectionReveal>
//         <ProcessSection />
//       </SectionReveal>

//       <ServicesGrid />

//       <SectionReveal>
//         <PortfolioSection />
//       </SectionReveal>

//       <SectionReveal className="border-t border-zinc-200">
//         <WhyVigel />
//       </SectionReveal>

//       <SectionReveal className="relative overflow-hidden bg-transparent py-24 sm:py-32">
//         <div className="absolute inset-0 -z-10 bg-zinc-950/40 backdrop-blur-[2px]" />

//         <div
//           className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-[100px]"
//           aria-hidden="true"
//         >
//           <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 opacity-40" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
//               </span>
//               <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
//                 Technology Highlights
//               </p>
//             </div>

//             <h2 className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-white sm:text-5xl">
//               Product metrics from the VIGEL profile.
//             </h2>
//             <p className="mt-4 max-w-xl text-lg text-zinc-400">
//               Key figures covering SOFTCELL output, SOFTFORM sizing, Soltria potential,
//               and our current on-grid reference project.
//             </p>
//           </div>

//           <div className="mt-16 sm:mt-20">
//             <AnimatedStats />
//           </div>
//         </div>
//       </SectionReveal>

//       <SectionReveal>
//         <Testimonials />
//       </SectionReveal>

//       <SectionReveal className="relative bg-transparent py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 py-24 text-center shadow-2xl backdrop-blur-md sm:px-16">
//             <div
//               className="pointer-events-none absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-[100px]"
//               aria-hidden="true"
//             >
//               <div className="aspect-[1155/678] w-[60rem] bg-gradient-to-tr from-emerald-500 to-blue-500 opacity-20" />
//             </div>

//             <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-medium tracking-tight text-white sm:text-4xl">
//               Plan your solar project with VIGEL.
//             </h2>
//             <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
//               Share your requirement and site details. Our team will respond with a practical
//               direction for products, configuration, and next steps.
//             </p>

//             <div className="relative z-10 mt-10 flex items-center justify-center gap-x-6">
//               <PrimaryCTA
//                 href="/contact"
//                 className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
//               >
//                 Contact VIGEL
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </PrimaryCTA>
//             </div>

//             <div className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//           </div>
//         </div>
//       </SectionReveal>
//     </main>
//   );
// }




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
import { ArrowRight, Rss, Mail, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-zinc-950 selection:bg-emerald-500/30">

      {/* Global Background Grid (SaaS/Industrial Aesthetic) */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Hero Section */}
      <Hero3D />

      {/* Trust & Social Proof Strip */}
      <SectionReveal className="relative z-20">
        <TrustStrip />
      </SectionReveal>

      {/* Primary Section Stack */}
      <div className="space-y-24 lg:space-y-40">

        {/* Core Services */}
        <SectionReveal>
          <ServicesOverview />
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
        <SectionReveal>
          <ProcessSection />
        </SectionReveal>

        {/* Interactive Services Fan Grid */}
        <div className="py-12">
          <ServicesGrid />
        </div>

        {/* Project Snapshots Bento Grid */}
        <SectionReveal>
          <PortfolioSection />
        </SectionReveal>
      </div>

      {/* Differentiators Section */}
      <SectionReveal className="border-t border-white/5 bg-zinc-950/40 backdrop-blur-sm mt-32 lg:mt-48">
        <WhyVigel />
      </SectionReveal>

      {/* Technical Status & Support Rail */}
      <div className="bg-zinc-900/50 border-t border-b border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[
            { label: "Pipeline Status", value: "Syncing (Kurnool Hub)", icon: Rss },
            { label: "Direct Support", value: "lifecycle@vigel.in", icon: Mail },
            { label: "Validated", value: "Hardware Level Security", icon: Shield }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-zinc-950">
                <stat.icon className="h-4 w-4 text-emerald-500/70" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">{stat.label}</span>
                <span className="text-sm font-medium text-zinc-300">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data & Product Metrics */}
      <SectionReveal className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-zinc-950/80 backdrop-blur-sm" />

        {/* Deep Emerald Background Ambient Glow */}
        <div
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-[120px]"
          aria-hidden="true"
        >
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-500/10 to-emerald-900/10 opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5 shadow-xl">
              <Zap className="h-3 w-3 text-emerald-500 fill-emerald-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                Technology Metrics
              </p>
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-syne)] text-5xl font-medium tracking-tight text-white lg:text-7xl leading-[1.05]">
              Product benchmarks <br />
              <span className="text-zinc-600">from the VIGEL profile.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              High-performance figures covering SOFTCELL output, SOFTFORM sizing,
              and our flagship on-grid reference project data.
            </p>
          </div>

          <div className="mt-16 sm:mt-24">
            <AnimatedStats />
          </div>
        </div>
      </SectionReveal>

      {/* Client Feedback / Testimonials */}
      <SectionReveal className="border-t border-white/5 py-12">
        <Testimonials />
      </SectionReveal>

      {/* Final Premium Bento Call to Action */}
      <SectionReveal className="relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="relative isolate overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900/40 p-8 py-24 text-center shadow-2xl backdrop-blur-md sm:px-16 lg:py-32 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(9,9,11,0.95), rgba(9,9,11,0.6)), url('https://images.unsplash.com/photo-1509391366360-fe5bb60c8e5c?q=80&w=2670&auto=format&fit=crop')`
            }}
          >

            {/* Subtle Gradient Glow inside the Card */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-[100px]"
              aria-hidden="true"
            >
              <div className="aspect-[1155/678] w-[60rem] bg-emerald-500/10 opacity-30" />
            </div>

            <div className="relative z-10">
              <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-medium leading-[1.1] tracking-tight text-white lg:text-7xl">
                Ready to plan your <br />
                <span className="text-zinc-500 italic font-light">solar transition?</span>
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                Contact our engineering team in Kurnool. We provide a structured roadmap
                covering product configuration, site deployment, and next steps.
              </p>

              <div className="mt-12 flex items-center justify-center gap-x-6">
                <PrimaryCTA
                  href="/contact"
                  className="group flex items-center justify-center gap-2.5 rounded-full bg-white px-10 py-4.5 text-sm font-bold text-zinc-950 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:text-black"
                >
                  Connect with VIGEL
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </PrimaryCTA>
              </div>
            </div>

            {/* Aesthetic Top Border Trace */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}