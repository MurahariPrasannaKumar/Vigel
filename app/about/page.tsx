import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Vision and story of VIGEL — VI Green Energy Limited.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      {/* 🔥 HERO SECTION WITH FULL-WIDTH VIDEO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-zinc-200/80">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-[-1] h-full w-full object-cover"
        >
          <source src="/about-video.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Gradient Overlay */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/60 via-black/30 to-black/40" />

        {/* ✨ Content */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vigel-accent">
            Vision
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold text-white sm:text-5xl">
            Energy should feel as refined as the devices we live on.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            VIGEL exists to close the gap between utility infrastructure and product craft.
            We treat every array — from a single home to a solar farm — as a long-lived
            asset that deserves obsessive modeling, transparent economics, and a calm,
            premium experience.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900">
              Company story
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Born from a team of engineers and operators frustrated by opaque installers,
              VIGEL pairs field discipline with digital storytelling. We built our own
              delivery playbook — design automation, partner-vetted crews, and monitoring
              that turns raw telemetry into decisions you can trust.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Today we deploy across residential, commercial, and utility programs, with a
              single promise: measurable production, human support, and an aesthetic that
              matches the ambition of clean energy itself.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
            <blockquote className="font-[family-name:var(--font-syne)] text-xl font-medium leading-snug text-zinc-900">
              &ldquo;We don&apos;t sell panels — we ship confidence in every kilowatt-hour.&rdquo;
            </blockquote>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              VIGEL founding principle
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
