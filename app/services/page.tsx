import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Photovoltaic modules, BIPV, flexible rollable modules, and smart energy product solutions by VIGEL.",
};

const blocks = [
  {
    id: "residential",
    title: "Photovoltaic Modules",
    body: "We support rooftop and distributed installations with manufacturing-focused quality controls and deployment planning for reliable long-term output.",
    bullets: [
      "Module design and sourcing strategy",
      "Site-fit integration guidance",
      "Commissioning and performance readiness",
    ],
  },
  {
    id: "commercial",
    title: "BIPV & Smart BIPV Modules",
    body: "Our building-integrated photovoltaic solutions prioritize flexibility, transparency, and color adaptability so power generation aligns with architectural design.",
    bullets: [
      "Facade and window integration",
      "Design-friendly energy generation",
      "Support for modern smart building use cases",
    ],
  },
  {
    id: "farming",
    title: "Flexible & Rollable Solar Modules",
    body: "VIGEL is developing lightweight, flexible photovoltaic formats suitable for varied surfaces and next-generation product integration use cases.",
    bullets: [
      "Technology-led module formats",
      "Adaptability for non-standard surfaces",
      "Roadmap for smart shelters and urban solutions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-zinc-200/80">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-[-1] h-full w-full object-cover"
        >
          <source src="/services-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vigel-accent">
            Capabilities
          </p>

          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold sm:text-5xl">
            Product and project capabilities for modern solar infrastructure.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-base">
            From module technology to building-integrated solutions, VIGEL develops and
            deploys renewable energy systems that balance technical performance,
            manufacturability, and real-world usability.
          </p>
        </div>
      </section>

      <section className="space-y-16 bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {blocks.map((b) => (
            <article
              key={b.id}
              id={b.id}
              className="grid gap-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10"
            >
              <div>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900 sm:text-3xl">
                  {b.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {b.body}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-zinc-700">
                {b.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-vigel-green" />
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
