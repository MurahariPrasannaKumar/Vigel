import type { Metadata } from "next";
import { DivisionsShowcase } from "./DivisionsShowcase";

export const metadata: Metadata = {
  title: "Our Divisions",
  description:
    "Explore VIGEL divisions across solar manufacturing, integrated energy solutions, and future infrastructure programs.",
};

export default function DivisionsPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#f7f8f6]">
      <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden border-b border-white/10 bg-zinc-950 px-4 pb-24 pt-36 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(250,204,21,0.12),transparent_26%),linear-gradient(135deg,#050505_0%,#102018_58%,#070707_100%)]" />

        <div className="w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vigel-accent">
            Our Divisions
          </p>
          <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-syne)] text-4xl font-semibold sm:text-6xl lg:text-7xl">
            Dedicated teams shaping VIGEL&apos;s renewable energy portfolio.
          </h1>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-lg">
            This page contains dummy division content for now. Replace these sections
            later with the final division names, descriptions, leadership notes, and
            capabilities you want to publish.
          </p>
        </div>
      </section>

      <DivisionsShowcase />
    </main>
  );
}
