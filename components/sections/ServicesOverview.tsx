"use client";

import { ArrowRight, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Photovoltaic Modules",
    desc: "Module-focused solutions for distributed and rooftop applications with reliable output planning.",
    icon: HomeIcon,
    link: "/services#residential",
  },
  {
    title: "BIPV & Smart BIPV",
    desc: "Building-integrated modules with flexibility, transparency, and design compatibility.",
    icon: Shield,
    link: "/services#commercial",
  },
  {
    title: "Flexible Solar Formats",
    desc: "Rollable and adaptable solar modules developed for next-generation product use cases.",
    icon: Zap,
    link: "/services#farming",
  },
];

function HomeIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
              Technology built for practical deployment.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              From product innovation to on-grid execution in Kurnool and beyond.
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-zinc-900 transition-colors hover:text-blue-600"
          >
            View all capabilities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-50 p-8 transition-all duration-500 hover:bg-zinc-100 hover:shadow-lg",
                i === 1 && "md:-translate-y-8",
              )}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.desc}</p>
              </div>

              <div className="mt-12">
                <Link
                  href={service.link}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition-all hover:bg-zinc-900 hover:text-white hover:ring-zinc-900"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
