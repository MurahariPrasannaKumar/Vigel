"use client";

const steps = [
  {
    id: "01",
    title: "Discovery & Yield Modeling",
    description: "We analyze your energy load, structural geometry, and shading to architect an array that maximizes pure yield.",
  },
  {
    id: "02",
    title: "Engineering & Permitting",
    description: "Our in-house engineers lock in structural stamps and navigate local utility bureaucracy so you don't have to.",
  },
  {
    id: "03",
    title: "Precision Installation",
    description: "Vetted, disciplined crews deploy tier-1 hardware with obsessive cable management and watertight mounting.",
  },
  {
    id: "04",
    title: "Commissioning & Telemetry",
    description: "We flip the switch, connect your real-time performance dashboard, and monitor system health for decades.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-zinc-950/30 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl font-[family-name:var(--font-syne)]">
            Execution without excuses.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A linear, predictable roadmap from contract to commissioning.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative pt-6">
                {/* Connecting Line (Desktop) */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-6 right-0 left-6 hidden h-px -translate-y-1/2 bg-zinc-800 lg:block pointer-events-none" />
                )}
                
                {/* Step Marker */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900 shadow-sm z-10 mb-6">
                  <span className="font-[family-name:var(--font-syne)] text-sm font-semibold text-emerald-400">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
