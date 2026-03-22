"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnimatedNavbar } from "./AnimatedNavbar";
import { AuthStatusBanner } from "./AuthStatusBanner";
import { Footer } from "./Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { EASE } from "@/lib/motion";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdmin && <ScrollProgress />}
      {!isAdmin && <AnimatedNavbar />}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 16, scale: 0.992, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, scale: 0.992, filter: "blur(8px)" }}
          transition={{ duration: 0.48, ease: EASE }}
          className="flex flex-1 flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {!isAdmin && <Footer />}
      {!isAdmin && pathname !== "/contact" && <FloatingCTA />}
      <AuthStatusBanner />
    </div>
  );
}
