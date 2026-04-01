"use client";

import React from "react";

const testimonials = [
  {
    title: "3.3 kW on-grid reference",
    text: "Our project at Kurnool demonstrates a 3.3 kW on-grid deployment with long-term savings and practical operating visibility.",
    author: "Kurnool Project Note",
    role: "On-grid reference installation",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Kurnool",
  },
  {
    title: "BIPV built for design integrity",
    text: "VIGEL's BIPV direction combines flexibility, transparency, and visual integration so buildings can generate energy without compromising design.",
    author: "BIPV Profile Note",
    role: "Product and architecture integration",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "BIPV",
  },
  {
    title: "SOFT product family roadmap",
    text: "SOFTCELL, SOFTFORM, and SOFTGOODS enable a roadmap where power, sensing, and communication can be integrated for smart energy products.",
    author: "Technology Roadmap",
    role: "SOFT product family direction",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Innovation",
  },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [
  ...testimonials.slice(1),
  ...testimonials.slice(0, 1),
  ...testimonials.slice(1),
  ...testimonials.slice(0, 1),
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <div
    className="testimonial-card mx-3 flex w-[320px] flex-shrink-0 select-none flex-col gap-4 rounded-2xl p-6"
    style={{
      background: "rgba(255,255,255,0.72)",
      border: "1px solid rgba(226,232,240,0.9)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
      backdropFilter: "blur(12px)",
    }}
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <img
          src={item.img}
          alt={item.author}
          className="h-11 w-11 flex-shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div>
          <p className="text-[13px] font-semibold leading-tight text-gray-900">{item.author}</p>
          <p className="mt-0.5 text-[11px] leading-tight text-gray-400">{item.role}</p>
        </div>
      </div>
      <span
        className="whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide"
        style={{
          background: "rgba(37,99,235,0.08)",
          color: "#2563eb",
          border: "1px solid rgba(37,99,235,0.15)",
        }}
      >
        {item.tag}
      </span>
    </div>

    <Stars count={item.stars} />

    <div>
      <p className="mb-1.5 text-[13px] font-semibold leading-snug text-gray-900">
        &ldquo;{item.title}&rdquo;
      </p>
      <p className="line-clamp-3 text-[12.5px] leading-relaxed text-gray-500">{item.text}</p>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 font-sans" style={{ background: "#ffffff" }}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto mb-16 max-w-[1300px] px-6 text-center lg:px-16">
        <span className="mb-4 block text-[15px] font-medium uppercase tracking-wide text-gray-900">
          Project Notes
        </span>

        <h2 className="mb-5 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 lg:text-[52px]">
          Trusted product and project{" "}
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #2563eb, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            highlights
          </span>
        </h2>

        <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
          Real statements from our current VIGEL content and deployment profile.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Stars count={5} />
            <span className="text-sm font-semibold text-gray-700">5.0 / 5</span>
          </div>
          <div className="h-5 w-px bg-gray-200" />
          <span className="text-sm text-gray-500">
            <span className="font-semibold text-gray-800">3</span> active profile notes
          </span>
          <div className="h-5 w-px bg-gray-200" />
          <span className="text-sm text-gray-500">
            <span className="font-semibold text-gray-800">100%</span> VIGEL-aligned content
          </span>
        </div>
      </div>

      <div
        className="relative z-10 mb-5 overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="marquee-left flex" style={{ width: "max-content" }}>
          {row1.map((item, i) => (
            <TestimonialCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      <div
        className="relative z-10 overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="marquee-right flex" style={{ width: "max-content" }}>
          {row2.map((item, i) => (
            <TestimonialCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.06) !important;
        }
      `}</style>
    </section>
  );
}
