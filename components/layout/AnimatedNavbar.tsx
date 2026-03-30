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

  // Pages that should have a white/light header theme with black text
  const isLightPage = ["/contact", "/login", "/signup", "/register"].includes(pathname);

  useMotionValueEvent(scrollY, "change", (y) => {
    setCondensed(y > 20);
  });

  return (
    <motion.header
      layout
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        condensed
          ? isLightPage
            ? "border-zinc-200/50 bg-white/80 backdrop-blur-2xl shadow-sm"
            : "border-white/10 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-2xl shadow-lg"
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
            {/* If the background is light, we can optionally dim or grayscale to ensure visibility, though the current logo is visibility-balanced. */}
            <Image 
              src="/logo.png" 
              alt="VIGEL Logo" 
              width={140} 
              height={40} 
              priority 
              className={cn(
                "object-contain transition-transform duration-300 group-hover:scale-105"
                // isLightPage ? "brightness-90" : "" // Example if logo was too white
              )} 
            />
          </div>
        </MotionLink>

        {/* 🔥 NAV LINKS */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href}>
                <motion.span
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isLightPage
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
                        isLightPage
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
              isLightPage
                ? "border-zinc-200 bg-white/80 text-zinc-900 hover:bg-zinc-100"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={transition.spring}
          >
            {user ? "Dashboard" : "Sign in"}
          </MotionLink>
        </div>
      </div>
    </motion.header>
  );
}