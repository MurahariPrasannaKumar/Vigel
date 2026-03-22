"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/cn";
import Image from "next/image";

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

  useMotionValueEvent(scrollY, "change", (y) => {
    setCondensed(y > 20);
  });

  return (
    <motion.header
      layout
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        condensed
          ? "border-white/10 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-2xl shadow-lg"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">

        {/* 🔥 LOGO */}
        <MotionLink
          href="/"
          className="group flex items-center gap-3"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={transition.spring}
        >
          <div className="relative flex items-center">
            <Image src="/logo.png" alt="VIGEL Logo" width={140} height={40} priority className="object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>
        </MotionLink>

        {/* 🔥 NAV LINKS */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            const isAuthPage = pathname === "/login" || pathname === "/signup" || pathname === "/register";
            return (
              <Link key={l.href} href={l.href}>
                <motion.span
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isAuthPage
                      ? active
                        ? "text-zinc-900 font-semibold"
                        : "text-zinc-600 hover:text-zinc-900"
                      : active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  )}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={transition.spring}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full",
                        isAuthPage
                          ? "bg-zinc-100 ring-1 ring-zinc-200"
                          : "bg-white/10 ring-1 ring-white/20"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        {/* 🔥 ACTION BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          <MotionLink
            href={user ? "/dashboard" : "/login"}
            className={cn(
              "hidden rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors sm:inline-flex",
              (pathname === "/login" || pathname === "/signup" || pathname === "/register")
                ? "border-zinc-200 bg-white/80 text-zinc-900 hover:bg-zinc-100"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
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