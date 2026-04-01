"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
  title: string;
  img: string;
  details: string;
  highlights: string[];
  availability: string;
};

const services: ServiceItem[] = [
  {
    title: "Photovoltaic Modules",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=900",
    details:
      "Reliable module solutions for distributed and rooftop projects with performance-focused planning and deployment readiness.",
    highlights: [
      "Module-focused design and planning",
      "Reliable distributed deployment strategy",
      "Performance-oriented commissioning approach",
    ],
    availability: "Available for consultation and project planning throughout the week.",
  },
  {
    title: "BIPV & Smart BIPV",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900",
    details:
      "Building-integrated photovoltaic solutions designed for modern architecture with flexibility, transparency, and design compatibility.",
    highlights: [
      "Facade and window integration options",
      "Transparency and color adaptability",
      "Architecture-friendly solar implementation",
    ],
    availability: "Specialist discussions and design evaluation sessions are available by appointment.",
  },
  {
    title: "Flexible & Rollable Solar",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=900",
    details:
      "Adaptable photovoltaic formats for advanced product and infrastructure applications, including evolving smart-solution pathways.",
    highlights: [
      "Flexible photovoltaic form factors",
      "Designed for diverse deployment surfaces",
      "Aligned with smart shelter product direction",
    ],
    availability: "Roadmap-aligned implementation support available for pilot and scaling use cases.",
  },
  {
    title: "Photovoltaic Modules",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=900",
    details:
      "Reliable module solutions for distributed and rooftop projects with performance-focused planning and deployment readiness.",
    highlights: [
      "Module-focused design and planning",
      "Reliable distributed deployment strategy",
      "Performance-oriented commissioning approach",
    ],
    availability: "Available for consultation and project planning throughout the week.",
  },
  {
    title: "BIPV & Smart BIPV",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900",
    details:
      "Building-integrated photovoltaic solutions designed for modern architecture with flexibility, transparency, and design compatibility.",
    highlights: [
      "Facade and window integration options",
      "Transparency and color adaptability",
      "Architecture-friendly solar implementation",
    ],
    availability: "Specialist discussions and design evaluation sessions are available by appointment.",
  },
  {
    title: "Flexible & Rollable Solar",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=900",
    details:
      "Adaptable photovoltaic formats for advanced product and infrastructure applications, including evolving smart-solution pathways.",
    highlights: [
      "Flexible photovoltaic form factors",
      "Designed for diverse deployment surfaces",
      "Aligned with smart shelter product direction",
    ],
    availability: "Roadmap-aligned implementation support available for pilot and scaling use cases.",
  },
  {
    title: "Photovoltaic Modules",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=900",
    details:
      "Reliable module solutions for distributed and rooftop projects with performance-focused planning and deployment readiness.",
    highlights: [
      "Module-focused design and planning",
      "Reliable distributed deployment strategy",
      "Performance-oriented commissioning approach",
    ],
    availability: "Available for consultation and project planning throughout the week.",
  },
  {
    title: "BIPV & Smart BIPV",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900",
    details:
      "Building-integrated photovoltaic solutions designed for modern architecture with flexibility, transparency, and design compatibility.",
    highlights: [
      "Facade and window integration options",
      "Transparency and color adaptability",
      "Architecture-friendly solar implementation",
    ],
    availability: "Specialist discussions and design evaluation sessions are available by appointment.",
  },
  {
    title: "Flexible & Rollable Solar",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=900",
    details:
      "Adaptable photovoltaic formats for advanced product and infrastructure applications, including evolving smart-solution pathways.",
    highlights: [
      "Flexible photovoltaic form factors",
      "Designed for diverse deployment surfaces",
      "Aligned with smart shelter product direction",
    ],
    availability: "Roadmap-aligned implementation support available for pilot and scaling use cases.",
  },
];

export const ServicesGrid = React.memo(function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const denseLayout = services.length >= 7;
  const center = (services.length - 1) / 2;
  const spreadPerCard = services.length > 1 ? 70 / (services.length - 1) : 0;
  const sectionHeightVh = Math.max(320, 140 + services.length * 26);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const cardElements = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);
    if (!cardElements.length) return;

    const ctx = gsap.context(() => {
      gsap.set(cardElements, {
        rotation: (i) => (i - center) * spreadPerCard + 24,
      });

      gsap.to(cardElements, {
        rotation: (i) => (i - center) * spreadPerCard - 24,
        ease: "none",
        stagger: { each: 0.05 },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionEl);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 60);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, [center, spreadPerCard]);

  return (
    <div id="services" className="services-container relative scroll-mt-24 bg-white">
      <section
        ref={sectionRef}
        className="relative w-full bg-[#ffffff] font-sans"
        style={{ height: `${sectionHeightVh}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-[#ffffff]">
          <div className="pointer-events-none absolute left-0 top-0 z-20 w-full px-8 pt-24 lg:px-12">
            <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between lg:flex-row lg:items-end">
              <div className="pointer-events-auto">
                <span className="mb-4 block text-[15px] font-medium uppercase tracking-wide text-gray-900">
                  We Have Your Solar Needs Covered
                </span>
                <h2 className="text-4xl font-medium leading-[1.1] text-black lg:text-[52px]">
                  Renewable Solutions for Today&apos;s Infrastructure
                </h2>
              </div>
              <a
                href="/contact"
                className="pointer-events-auto mt-8 flex items-center gap-2 rounded-full bg-[#0B64F4] px-8 py-4 text-sm font-medium text-white transition-colors lg:mt-0"
              >
                Contact VIGEL Team
              </a>
            </div>
          </div>

          <div className="absolute left-0 top-0 z-10 mt-24 flex h-full w-full justify-center">
            {services.map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="pointer-events-none absolute left-0 top-0 h-full w-full"
                style={{
                  transformOrigin: "50% 280%",
                  willChange: "transform",
                }}
              >
                <div
                  className={cn(
                    "group pointer-events-auto absolute left-1/2 -translate-x-1/2 cursor-pointer overflow-hidden rounded-[22px] border border-gray-200/50 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)]",
                    denseLayout
                      ? "top-[26%] h-[255px] w-[190px] lg:h-[300px] lg:w-[220px]"
                      : "top-[30%] h-[280px] w-[210px] lg:h-[320px] lg:w-[240px]",
                  )}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative h-full w-full">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex h-[45%] items-end justify-center bg-gradient-to-t from-gray-200 via-gray-200/80 to-transparent pb-6">
                      <h3 className="px-4 text-center text-[17px] font-medium tracking-tight text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md transition hover:bg-white/35"
                aria-label="Close service details"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">{selectedService.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{selectedService.details}</p>
              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Key Highlights
                </h4>
                <ul className="mt-2 space-y-2">
                  {selectedService.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B64F4]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Availability:</span> {selectedService.availability}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
