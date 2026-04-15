"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/ui/loader";

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(pathname !== "/");
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      setLoading(pathname !== "/");
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
