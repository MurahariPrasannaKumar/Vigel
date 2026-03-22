import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential solar, commercial solar, and solar farming — engineered by VIGEL.",
};

const blocks = [
  {
    id: "residential",
    title: "Residential Solar",
    body: "Custom rooftop arrays, storage-ready inverters, and monitoring that turns production into peace of mind. We obsess over curb appeal, roof integrity, and long-term warranties.",
    bullets: [
      "Design & permitting",
      "Premium modules & racking",
      "Concierge commissioning",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    body: "Peak demand management, resilient microgrids, and reporting that satisfies finance and ESG stakeholders alike. Built for campuses, logistics, and light industrial footprints.",
    bullets: [
      "Load profiling & tariffs",
      "Fleet & multi-site rollouts",
      "Ongoing performance ops",
    ],
  },
  {
    id: "farming",
    title: "Solar Farming",
    body: "Utility-scale development with disciplined grid studies, land stewardship, and asset management tuned for decades of predictable yield.",
    bullets: [
      "Interconnection strategy",
      "EPC coordination",
      "Lifecycle analytics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col bg-zinc-50 text-zinc-900 dark:bg-vigel-dark dark:text-zinc-100">

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
          <source src="/services-video.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Gradient Overlay */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* ✨ Content */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vigel-accent">
            Capabilities
          </p>

          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold sm:text-5xl">
            Solar programs that feel inevitable at every scale.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-base">
            Whether you are powering a home, a headquarters, or hundreds of acres, VIGEL
            brings the same product discipline: transparent modeling, elite execution, and
            support that does not disappear after install.
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES SECTION */}
      <section className="space-y-16 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {blocks.map((b) => (
            <article
              key={b.id}
              id={b.id}
              className="grid gap-10 rounded-2xl border border-zinc-200/80 bg-white/70 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-2 lg:p-10"
            >
              <div>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold sm:text-3xl">
                  {b.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  {b.body}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                {b.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-vigel-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}