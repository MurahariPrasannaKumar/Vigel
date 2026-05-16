"use client";

import { ArrowRight, Images } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const pmSuryaGharVendorUrl = "https://vendor.pmsuryaghar.gov.in/vendor/#/login";

type FocusItem = {
  label: string;
  href?: string;
};

type Division = {
  name: string;
  summary: string;
  focus: FocusItem[];
  metric: string;
  images: string[];
};

const divisions: Division[] = [
  {
    name: "Roof Top Division",
    summary:
      "We are registered vendors for PM SURYA GHAR MUFT BIJILI YOJANA SCHEME in INDIA for the state of Andhra Pradesh.",
    focus: [
      { label: "Consumer Roof tops", href: pmSuryaGharVendorUrl },
      { label: "Commercial Roof tops", href: pmSuryaGharVendorUrl },
    ],
    metric: "01",
    images: [
      "/hero-images/01.jpg",
      "/hero-images/02.jpg",
      "/hero-images/03.jpg",
    ],
  },
  {
    name: "Large Scale Solar Power Projects Division",
    summary:
      "Placeholder content for the group working on BIPV, smart shelters, and site-fit renewable energy deployments.",
    focus: [
      { label: "BIPV concepts" },
      { label: "Smart infrastructure" },
      { label: "Deployment support" },
    ],
    metric: "02",
    images: [
      "/hero-images/04.jpg",
      "/hero-images/05.jpg",
      "/hero-images/06.jpg",
    ],
  },
  {
    name: "Research & Assembly Division",
    summary:
      "Placeholder content for future-facing work around flexible modules, ambient-light generation, and product experimentation.",
    focus: [
      { label: "Flexible solar formats" },
      { label: "Prototype development" },
      { label: "Technology roadmap" },
    ],
    metric: "03",
    images: [
      "/hero-images/07.jpg",
      "/hero-images/08.jpg",
      "/hero-images/09.jpg",
    ],
  },
];

export function DivisionsShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedDivision = divisions[selectedIndex];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-zinc-200 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vigel-green">
              Division Portfolio
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold text-zinc-950 sm:text-4xl">
              Select a division to preview related visuals.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600">
            Dummy imagery is connected to each card for now. Swap these files later with
            final project photos, product shots, or division-specific media.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {divisions.map((division, index) => {
            const isSelected = selectedIndex === index;

            return (
              <article
                key={division.name}
                className={[
                  "group flex min-h-[460px] flex-col rounded-lg border bg-white p-6 shadow-sm transition-all duration-300",
                  isSelected
                    ? "border-vigel-green shadow-xl shadow-emerald-950/10"
                    : "border-zinc-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg",
                ].join(" ")}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-500">
                    Division {division.metric}
                  </span>
                  <Images
                    aria-hidden="true"
                    className={[
                      "h-5 w-5 transition-colors",
                      isSelected ? "text-vigel-green" : "text-zinc-400",
                    ].join(" ")}
                  />
                </div>

                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold leading-tight text-zinc-950">
                  {division.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  {division.summary}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                  {division.focus.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vigel-green" />
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-zinc-800 underline decoration-vigel-green/40 underline-offset-4 transition-colors hover:text-vigel-green"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={[
                    "mt-auto flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-semibold transition-all",
                    isSelected
                      ? "bg-zinc-950 text-white"
                      : "border border-zinc-200 bg-white text-zinc-950 hover:border-zinc-950",
                  ].join(" ")}
                >
                  <span>{isSelected ? "Viewing Gallery" : "View Images"}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl shadow-zinc-900/5">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-zinc-950 sm:min-h-[480px]">
              <Image
                key={selectedDivision.images[0]}
                src={selectedDivision.images[0]}
                alt={`${selectedDivision.name} featured visual`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vigel-accent">
                  Active Preview
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold">
                  {selectedDivision.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                  Related visual set for this division. Replace these placeholder
                  images when your final assets are ready.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                  Gallery
                </p>
                <h4 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-950">
                  {selectedDivision.images.length} related images
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  These visuals are grouped by the selected division, giving the page a
                  product-style interaction while your final content is still being
                  prepared.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {selectedDivision.images.map((image, index) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] overflow-hidden rounded-md border border-zinc-200 bg-zinc-100"
                  >
                    <Image
                      src={image}
                      alt={`${selectedDivision.name} gallery image ${index + 1}`}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
