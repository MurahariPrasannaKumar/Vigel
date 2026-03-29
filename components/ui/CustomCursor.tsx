"use client";

import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sectionColor, setSectionColor] = useState("purple");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 240, mass: 0.7 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  /* =============================
     AURA COLOR SYSTEM
  ============================== */

  const auraColors: Record<string, string> = {
    purple:
      "radial-gradient(circle, rgba(148,66,200,0.25) 0%, rgba(86,94,255,0.15) 45%, transparent 70%)",
    blue: "radial-gradient(circle, rgba(86,94,255,0.25) 0%, rgba(120,160,255,0.15) 45%, transparent 70%)",
    red: "radial-gradient(circle, rgba(255,88,88,0.25) 0%, rgba(255,120,120,0.15) 45%, transparent 70%)",
    green:
      "radial-gradient(circle, rgba(34,197,94,0.22) 0%, rgba(16,185,129,0.15) 45%, transparent 70%)",
  };

  /* =============================
     EFFECTS
  ============================== */

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    /* =============================
       HOVER LOGIC (Scaling only)
    ============================== */

    const handleHoverStart = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [role='button']");
      if (!target) return;

      setIsHovering(true);
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    /* =============================
       SECTION AWARE COLOR
    ============================== */

    const sections = document.querySelectorAll<HTMLElement>("[data-cursor]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && target.dataset.cursor) {
            setSectionColor(target.dataset.cursor);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    /* =============================
       EVENT LISTENERS
    ============================== */

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    document.body.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    document.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseout", handleHoverEnd, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);

      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);

      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Intentionally removing global <style> cursor: none injection from here to prevent side effects in React, relying on globals.css instead */}

      {/* =============================
         CORE DOT
      ============================== */}

      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: "white",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* =============================
         AURA
      ============================== */}

      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: auraColors[sectionColor] || auraColors.purple,
          filter: "blur(14px)",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.6 : 1,
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* =============================
         CLICK RIPPLE
      ============================== */}

      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-28 h-28 rounded-full pointer-events-none z-[9997]"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </>
  );
};

export default CustomCursor;
