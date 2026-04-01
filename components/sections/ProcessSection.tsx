"use client";

const steps = [
  {
    id: "01",
    title: "Technology Partnership",
    description:
      "We align product strategy with proven technology pathways, including advanced photovoltaic manufacturing collaboration.",
  },
  {
    id: "02",
    title: "Product Engineering",
    description:
      "Our roadmap covers SOFTCELL, SOFTFORM, SOFTGOODS, BIPV modules, and flexible solar formats for practical use.",
  },
  {
    id: "03",
    title: "Site & Deployment Planning",
    description:
      "From building integration to on-grid systems, we plan around location, use case, and long-term maintainability.",
  },
  {
    id: "04",
    title: "Installation & Support",
    description:
      "Projects are commissioned with clear communication, and support continues through operational performance phases.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-zinc-950/30 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-medium tracking-tight text-white sm:text-4xl">
            A clear delivery framework.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Structured execution from technology intent to field readiness.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative pt-6">
                {index !== steps.length - 1 && (
                  <div className="pointer-events-none absolute left-6 right-0 top-6 hidden h-px -translate-y-1/2 bg-zinc-800 lg:block" />
                )}

                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900 shadow-sm">
                  <span className="font-[family-name:var(--font-syne)] text-sm font-semibold text-emerald-400">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
