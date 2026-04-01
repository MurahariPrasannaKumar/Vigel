"use client";

import { Activity, ShieldCheck, Wifi } from "lucide-react";

const features = [
  {
    name: "SOFTCELL-led innovation",
    description:
      "We are developing compact solar-cell pathways intended to generate under sunlight and general lighting conditions.",
    icon: ShieldCheck,
  },
  {
    name: "Flexible and transparent BIPV",
    description:
      "Our BIPV direction emphasizes transparency, color adaptability, and integration into windows and facades.",
    icon: Activity,
  },
  {
    name: "Custom product architecture",
    description:
      "SOFTFORM and SOFTGOODS concepts support configurable circuits, sensing, storage, and communication features.",
    icon: Wifi,
  },
];

export function WhyVigel() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-600 leading-7">
            The Difference
          </h2>
          <p className="mt-2 font-[family-name:var(--font-syne)] text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Innovation backed by implementation intent.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            VIGEL combines manufacturing focus, technology collaboration, and practical
            deployment thinking to build renewable systems that can scale.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm">
                  <feature.icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <dt className="font-[family-name:var(--font-syne)] text-xl font-semibold leading-7 text-zinc-900">
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
