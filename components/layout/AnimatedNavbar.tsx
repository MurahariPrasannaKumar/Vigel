"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// Import your utilities
// import { useAuth } from "@/components/providers/AuthProvider";
// import { cn } from "@/lib/cn";

// Fallback cn utility if needed
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

const MotionLink = motion.create(Link);

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/divisions", label: "Our Divisions" },
  { href: "/about", label: "About" },
  // { href: "/contact", label: "Contact" },
];

export function AnimatedNavbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const actionLink = "/contact";
  const actionLabel = "Contact";

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Condense the navbar after a 50px scroll down the page
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pb-4 pt-4 pointer-events-none sm:px-6 sm:pt-6"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={cn(
          "pointer-events-auto flex min-w-0 items-center justify-between rounded-full border transition-all duration-300 ease-in-out",
          isScrolled
            ? "w-full max-w-[820px] border-white/20 bg-black/60 px-3 py-2 shadow-xl backdrop-blur-md sm:w-[94%] sm:px-4"
            : "w-full max-w-[980px] border-white/10 bg-black/30 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:px-6 sm:py-3",
        )}
      >
        {/* Updated Logo Section using public/logo.png */}
        <MotionLink
          href="/"
          className="group relative z-10 flex items-center pr-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Container height dynamically scales down on scroll to match the tighter navbar */}
          <div
            className={cn(
              "relative flex items-center transition-all duration-300",
              isScrolled ? "h-10 sm:h-12" : "h-10 sm:h-12",
            )}
          >
            <Image
              src="/logo.png"
              alt="VIGEL Logo"
              width={100} // Adjust width/height base numbers to match your image aspect ratio
              height={496}
              priority
              className="h-32 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 sm:h-40"
            />
          </div>
        </MotionLink>

        {/* Navigation Links */}
        <nav className="relative z-10 hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" && !activeHash
                : link.href.startsWith("/#")
                  ? pathname === "/" && activeHash === link.href.slice(1)
                  : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:text-white lg:px-4",
                  isActive ? "text-white" : "text-white/60",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 border border-white/20 shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="relative z-10 flex items-center">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <MotionLink
            href={actionLink}
            className={cn(
              "flex items-center justify-center rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-gray-200",
              isScrolled ? "px-3 py-1.5 text-xs sm:px-4 sm:text-sm" : "px-4 py-2 text-xs sm:px-6 sm:text-sm",
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {actionLabel}
          </MotionLink>
        </div>
      </motion.div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto absolute left-3 right-3 top-[5.25rem] overflow-hidden rounded-3xl border border-white/15 bg-black/85 p-2 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" && !activeHash
                : link.href.startsWith("/#")
                  ? pathname === "/" && activeHash === link.href.slice(1)
                  : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                  isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.nav>
      )}
    </motion.header>
  );
}
