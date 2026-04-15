"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function AnimatedNavbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Placeholder user state - replace with your actual useAuth hook
  const user = null;

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
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 pb-4 sm:px-6 pointer-events-none"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between rounded-full border transition-all duration-300 ease-in-out",
          isScrolled
            ? "w-[90%] max-w-[700px] border-white/20 bg-black/60 px-4 py-2 shadow-xl backdrop-blur-md"
            : "w-full max-w-[850px] border-white/10 bg-black/30 px-6 py-3 shadow-lg backdrop-blur-sm",
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
              isScrolled ? "h-12" : "h-12",
            )}
          >
            <Image
              src="/logo.png"
              alt="VIGEL Logo"
              width={100} // Adjust width/height base numbers to match your image aspect ratio
              height={496}
              priority
              className="h-40 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
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
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:text-white",
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
          <MotionLink
            href={user ? "/dashboard" : "/login"}
            className={cn(
              "flex items-center justify-center rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-gray-200",
              isScrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2 text-sm",
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {user ? "Dashboard" : "Sign In"}
          </MotionLink>
        </div>
      </motion.div>
    </motion.header>
  );
}
