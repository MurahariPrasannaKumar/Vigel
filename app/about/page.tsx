import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Profile and technology direction of VIGEL - VI Green Energy Limited.",
};

export default function AboutPage() {
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
          <source src="/about-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/60 via-black/30 to-black/40" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vigel-accent">
            Introduction
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold text-white sm:text-5xl">
            Renewable energy products designed for practical deployment.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            VIGEL (VI Green Energy Ltd) is advancing photovoltaic manufacturing and project
            development with global technology collaboration. Our focus includes
            photovoltaic modules, flexible rollable modules, BIPV modules, smart shelters,
            smart towns, and smart cities.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900">
              Company profile
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              We are registered under the Ministry of Corporate Affairs with CIN
              U35105AP2024PLC114311. Our reference office is 3-3, Plot No: 76, Santosh
              Nagar, Kallur, Kurnool - 518003, Andhra Pradesh, India.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Through our technology roadmap, we are positioning products like SOFTCELL,
              SOFTFORM, SOFTGOODS, and BIPV modules for energy generation under diverse
              real-world conditions, including ambient-light scenarios.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
            <blockquote className="font-[family-name:var(--font-syne)] text-xl font-medium leading-snug text-zinc-900">
              &ldquo;We build renewable energy solutions that are efficient, adaptable, and
              ready for the next generation of infrastructure.&rdquo;
            </blockquote>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              VIGEL technology statement
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
