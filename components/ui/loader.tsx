"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          // 🔥 Reduced delay (faster exit)
          setTimeout(() => {
            setIsExit(true);
            setTimeout(onComplete, 600); // was 1000
          }, 300); // was 800

          return 100;
        }

        // ⚡ Faster but still smooth progression
        const remaining = 100 - prev;

        const increment =
          remaining > 50
            ? Math.floor(Math.random() * 12) + 6 // fast start
            : remaining > 20
              ? Math.floor(Math.random() * 8) + 4 // medium
              : Math.floor(Math.random() * 4) + 2; // smooth end

        return Math.min(prev + increment, 100);
      });
    }, 80); // was 150 → faster updates

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div className="fixed inset-0 z-[10000] flex items-center justify-center bg-white overflow-hidden">
          {/* Background Panels */}
          <motion.div
            className="absolute inset-0 flex flex-col"
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-1/2 w-full bg-white border-b border-gray-50"
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6 }} // faster
            />
            <motion.div
              className="h-1/2 w-full bg-white"
              exit={{ y: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative flex flex-col items-center">
            {/* Loader */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="transparent"
                  className="text-gray-100"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  stroke="#eb6105"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="100 100"
                  animate={{ strokeDashoffset: 100 - progress }}
                  transition={{ ease: "linear" }}
                  strokeLinecap="round"
                />
              </svg>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} // faster
                className="z-10 p-8"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-26 md:h-32 w-auto object-contain"
                />
              </motion.div>
            </div>

            {/* Status */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <span className="text-[11px] font-medium tracking-[0.5em] uppercase text-gray-400">
                {progress < 100 ? "Loading" : "Ready"}
              </span>

              <div className="flex items-baseline gap-1">
                <span className="text-xl font-light text-black">
                  {progress}
                </span>
                <span className="text-[10px] font-bold text-[#eb6105]">
                  / 100
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
