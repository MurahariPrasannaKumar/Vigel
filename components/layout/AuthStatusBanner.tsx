"use client";

import { signOut } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { clearJwtSession } from "@/lib/auth-api";
import { getClientFirebase } from "@/lib/firebase";

export function AuthStatusBanner() {
  const pathname = usePathname();
  const { user, jwtExchangeError, clearJwtExchangeError } = useAuth();

  if (pathname.startsWith("/admin")) return null;
  if (!user || !jwtExchangeError) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] border-t border-amber-500/30 bg-amber-950/95 px-4 py-3 text-center text-sm text-amber-100 backdrop-blur-md">
      <p className="mx-auto max-w-2xl">
        <span className="font-medium">Secure session unavailable.</span>{" "}
        {jwtExchangeError} — API sign-in is required for protected areas.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => clearJwtExchangeError()}
          className="text-xs font-semibold uppercase tracking-wider text-amber-200/90 underline-offset-2 hover:underline"
        >
          Dismiss
        </button>
        <Link
          href="/login"
          className="text-xs font-semibold uppercase tracking-wider text-white underline-offset-2 hover:underline"
        >
          Sign in again
        </Link>
        <button
          type="button"
          onClick={async () => {
            clearJwtSession();
            const { auth } = getClientFirebase();
            if (auth) await signOut(auth);
            clearJwtExchangeError();
          }}
          className="text-xs font-semibold uppercase tracking-wider text-amber-300 underline-offset-2 hover:underline"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
