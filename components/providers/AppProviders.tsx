"use client";

import { AuthProvider } from "./AuthProvider";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { LoaderProvider } from "./LoaderProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <LoaderProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </LoaderProvider>
    </AuthProvider>
  );
}
