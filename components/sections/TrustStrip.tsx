"use client";

import { motion } from "framer-motion";

const clients = [
  "Lumina Grid",
  "AeroDynamics",
  "Meta Space",
  "Helix Ventures",
  "Echo Systems",
  "Nimbus Works",
  "Vertex Energy",
  "Quantum Labs",
];

export function TrustStrip() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-zinc-950 py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/3 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className="flex w-full">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // slow, premium crawl
          }}
        >
          {/* Double the list for seamless looping */}
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="mr-24 flex shrink-0 items-center justify-center grayscale transition-all duration-500 hover:grayscale-0"
            >
              <p className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-widest text-zinc-600 transition-colors hover:text-white">
                {client.toUpperCase()}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
