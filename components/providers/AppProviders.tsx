"use client";

import { AuthProvider } from "./AuthProvider";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </AuthProvider>
  );
}
