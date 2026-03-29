"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { memo, MouseEvent } from "react";
import { Building2, Home, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Residential Solar",
    desc: "Bespoke rooftop systems engineered for yield, aesthetics, and long-term reliability.",
    href: "/services#residential",
    tag: "Homes",
    icon: Home,
    theme: {
      floor: "group-hover:from-purple-500/30 group-hover:border-purple-400/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
      glow: "bg-purple-400/20",
      iconHover: "group-hover:text-purple-600",
      rotation: "group-hover:-rotate-12",
    },
  },
  {
    title: "Commercial Solar",
    desc: "Peak-shaving, ESG reporting, and resilient power for campuses and industrial sites.",
    href: "/services#commercial",
    tag: "Business",
    icon: Building2,
    theme: {
      floor: "group-hover:from-blue-500/30 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
      glow: "bg-blue-400/20",
      iconHover: "group-hover:text-blue-600",
      rotation: "group-hover:rotate-[15deg]",
    },
  },
  {
    title: "Solar Farming",
    desc: "Utility-scale development, grid integration, and lifecycle asset performance.",
    href: "/services#farming",
    tag: "Utility",
    icon: Zap,
    theme: {
      floor: "group-hover:from-teal-500/30 group-hover:border-teal-400/50 group-hover:shadow-[0_0_40px_rgba(20,184,166,0.3)]",
      glow: "bg-teal-400/20",
      iconHover: "group-hover:text-teal-600",
      rotation: "group-hover:-rotate-6",
    },
  },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="h-full"
    >
      <Link href={service.href} className="block h-full group">
        <motion.article
          onMouseMove={handleMouseMove}
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springTransition}
          className={cn(
            // FIX: Removed overflow-hidden, added z-10 hover:z-50
            "relative flex h-full flex-col rounded-2xl p-8 z-10 hover:z-50",
            "bg-white border border-black/5 shadow-md",
            "transition-all duration-500 hover:border-black/10 hover:shadow-xl",
            "[perspective:1200px]" // Required for the 3D children
          )}
        >
          {/* Spotlight Glow Effect - FIX: Wrapped in its own overflow-hidden container */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <motion.div
              className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    400px circle at ${mouseX}px ${mouseY}px,
                    rgba(22, 163, 74, 0.05),
                    transparent 80%
                  )
                `,
              }}
            />
          </div>

          {/* Added relative z-20 so content stays above the background glow */}
          <div className="flex items-center justify-between mb-8 relative z-20">
            {/* The 3D Portal Wrapper */}
            <div className="relative flex items-center justify-center w-14 h-14 [transform-style:preserve-3d]">

              {/* Layer 1: The Box -> Morphs into a 3D Portal Floor */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-zinc-50 border border-zinc-200",
                  "transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                  "group-hover:rounded-full group-hover:bg-gradient-to-t group-hover:to-transparent",
                  "group-hover:[transform:rotateX(70deg)_translateY(20px)_scale(1.6)]",
                  service.theme.floor
                )}
              />

              {/* Layer 2: Core Portal Glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-full blur-md opacity-0",
                  "transition-all duration-[800ms]",
                  "group-hover:opacity-100 group-hover:[transform:rotateX(70deg)_translateY(20px)_scale(0.8)]",
                  service.theme.glow
                )}
              />

              {/* Layer 3: The Floating Logo (Pops OUT wildly now) */}
              <service.icon
                className={cn(
                  "relative z-30 w-6 h-6 text-zinc-500", // Increased z-index
                  "transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                  "group-hover:-translate-y-16 group-hover:scale-[2.5] group-hover:drop-shadow-[0_20px_15px_rgba(0,0,0,0.2)]", // Exaggerated the pop-out height and scale
                  service.theme.rotation,
                  service.theme.iconHover
                )}
              />
            </div>

            {/* Tag Badge */}
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-all duration-300",
                "border-zinc-200 bg-zinc-50 text-zinc-600",
                "group-hover:-translate-y-1 group-hover:shadow-sm relative z-20"
              )}
            >
              {service.tag}
            </span>
          </div>

          {/* Text Content */}
          <div className="relative z-20 flex-1 flex flex-col">
            <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900 transition-transform duration-700 group-hover:-translate-y-1">
              {service.title}
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-600 text-sm transition-transform duration-700 group-hover:-translate-y-1 group-hover:text-zinc-500">
              {service.desc}
            </p>
          </div>

          {/* Call to Action */}
          <div className="relative z-20 mt-8 flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors duration-300 group-hover:text-blue-700">
            <span>Explore Details</span>
            <motion.div
              initial={false}
              whileHover={{ x: 4 }}
              transition={springTransition}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

export const ServicesGrid = memo(function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {services.map((s, i) => (
        <ServiceCard key={s.title} service={s} index={i} />
      ))}
    </div>
  );
});