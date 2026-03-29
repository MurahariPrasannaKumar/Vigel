"use client";

import { Activity, ShieldCheck, Wifi } from "lucide-react";

const features = [
  {
    name: "Architectural Intent",
    description: "Conduit paths are concealed, mounts are flush, and arrays are symmetric. We believe utility infrastructure shouldn't ruin the aesthetic of a property.",
    icon: ShieldCheck,
  },
  {
    name: "Granular Telemetry",
    description: "Panel-level optimization and millisecond-accurate monitoring ensure you know exactly what your asset is yielding at any given moment.",
    icon: Activity,
  },
  {
    name: "Always Online",
    description: "Every commercial and residential site we deploy features battery-firmware logic to island seamlessly during major grid instability.",
    icon: Wifi,
  },
];

export function WhyVigel() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600 uppercase tracking-wide">
            The Difference
          </h2>
          <p className="mt-2 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl font-[family-name:var(--font-syne)]">
            Engineering over salesmanship.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            We don't knock on doors. We model, build, and support. If the math doesn't mandate solar, we won't sell it to you. Period.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 shadow-sm border border-emerald-100">
                  <feature.icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-zinc-900 font-[family-name:var(--font-syne)]">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
