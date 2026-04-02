"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/ui/loader";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Detect page changes
    if (pathname !== prevPathname.current) {
      setLoading(true);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  const handleComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      {children}
    </>
  );
}
