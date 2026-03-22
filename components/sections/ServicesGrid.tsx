"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Residential Solar",
    desc: "Bespoke rooftop systems engineered for yield, aesthetics, and long-term reliability.",
    href: "/services#residential",
    tag: "Homes",
  },
  {
    title: "Commercial Solar",
    desc: "Peak-shaving, ESG reporting, and resilient power for campuses and industrial sites.",
    href: "/services#commercial",
    tag: "Business",
  },
  {
    title: "Solar Farming",
    desc: "Utility-scale development, grid integration, and lifecycle asset performance.",
    href: "/services#farming",
    tag: "Utility",
  },
];

export const ServicesGrid = memo(function ServicesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            delay: i * 0.1,
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href={s.href} className="block h-full">
            <motion.article
              whileHover={{
                y: -5,
                scale: 1.015,
                rotateX: 2,
                rotateY: -2,
              }}
              whileTap={{ scale: 0.992 }}
              transition={transition.springCard}
              style={{ transformStyle: "preserve-3d" }}
              className={cn(
                "group relative h-full overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-8 shadow-md backdrop-blur-xl",
                "transition-shadow duration-500 hover:border-zinc-300/90 hover:shadow-2xl hover:shadow-zinc-900/10",
                "dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-xl dark:shadow-black/40 dark:hover:border-white/15 dark:hover:shadow-black/60",
              )}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl dark:via-white/10" />
              </div>
              <span
                className={cn(
                  "inline-flex rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300",
                  "border-zinc-200/90 bg-zinc-50/90 text-zinc-600",
                  "group-hover:border-vigel-green/25 group-hover:text-vigel-green",
                  "dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 dark:group-hover:border-vigel-accent/30 dark:group-hover:text-vigel-accent",
                )}
              >
                {s.tag}
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-syne)] text-xl font-semibold text-zinc-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-body-sm">{s.desc}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                <span className="relative">
                  Explore
                  <span
                    className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-[0.2] bg-current opacity-40 transition duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
                <motion.span
                  className="inline-block text-lg leading-none"
                  initial={false}
                  whileHover={{ x: 4 }}
                  transition={transition.spring}
                >
                  →
                </motion.span>
              </span>
            </motion.article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
});
