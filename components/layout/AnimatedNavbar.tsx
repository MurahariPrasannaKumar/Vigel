"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function AnimatedNavbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const { user } = useAuth();
  const onDarkHero = pathname === "/" && !condensed;

  useMotionValueEvent(scrollY, "change", (y) => {
    setCondensed(y > 20);
  });

  return (
    <motion.header
      layout
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        condensed
          ? "border-zinc-200/70 bg-white/75 shadow-sm backdrop-blur-2xl dark:border-white/[0.08] dark:bg-vigel-dark/70 dark:shadow-black/20"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <MotionLink
          href="/"
          className="group flex items-center gap-3"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={transition.spring}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 shadow-lg ring-1 ring-white/10 dark:bg-white dark:ring-white/20">
            <span className="text-sm font-bold tracking-tight text-white dark:text-vigel-dark">
              V
            </span>
          </span>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight",
                onDarkHero ? "text-white" : "text-zinc-900 dark:text-white",
              )}
            >
              VIGEL
            </span>
            <span
              className={cn(
                "text-[10px] font-medium uppercase tracking-[0.2em]",
                onDarkHero ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400",
              )}
            >
              Green Energy
            </span>
          </div>
        </MotionLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href}>
                <motion.span
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active
                      ? onDarkHero
                        ? "text-white"
                        : "text-zinc-900 dark:text-white"
                      : onDarkHero
                        ? "text-zinc-300 hover:text-white"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white",
                  )}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={transition.spring}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/12 ring-1 ring-white/15 dark:bg-white/10 dark:ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <MotionLink
            href={user ? "/dashboard" : "/login"}
            className={cn(
              "hidden rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md sm:inline-flex",
              onDarkHero
                ? "border-white/15 bg-white/8 text-white hover:bg-white/12"
                : "border-zinc-200/90 bg-white/80 text-zinc-800 hover:bg-white dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10",
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={transition.spring}
          >
            {user ? "Dashboard" : "Sign in"}
          </MotionLink>
          <PrimaryCTA
            href="/contact"
            className="px-5 py-2.5 text-sm shadow-[0_10px_36px_-10px_rgba(22,163,74,0.4)]"
          >
            Get a quote
          </PrimaryCTA>
        </div>
      </div>
    </motion.header>
  );
}
