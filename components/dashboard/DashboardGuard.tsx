"use client";

import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { clearJwtSession, fetchAuthMe } from "@/lib/auth-api";
import { getClientFirebase } from "@/lib/firebase";

function Spinner({ label }: { label: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-transparent px-6 text-white">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-vigel-accent border-t-transparent" />
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}

export function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading, firebaseReady, jwtReady, jwtExchangeError } = useAuth();
  const [jwtVerified, setJwtVerified] = useState(false);

  useEffect(() => {
    if (loading || !firebaseReady) return;
    if (!user) {
      router.replace("/login?next=/dashboard");
    }
  }, [user, loading, firebaseReady, router]);

  useEffect(() => {
    if (!user || !jwtReady) {
      queueMicrotask(() => setJwtVerified(false));
      return;
    }

    let cancelled = false;

    (async () => {
      const me = await fetchAuthMe();
      if (cancelled) return;
      if (!me) {
        clearJwtSession();
        try {
          const { auth } = getClientFirebase();
          if (auth) await signOut(auth);
        } catch {
          /* ignore */
        }
        router.replace("/login?next=/dashboard&reason=jwt_invalid");
        return;
      }
      setJwtVerified(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [user, jwtReady, router]);

  if (loading || !firebaseReady) {
    return <Spinner label="Loading…" />;
  }

  if (!user) {
    return <Spinner label="Redirecting to sign in…" />;
  }

  if (jwtExchangeError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-transparent px-6 text-white">
        <div className="max-w-md rounded-2xl border border-red-500/25 bg-red-500/10 px-6 py-5 text-center text-sm text-red-200">
          <p className="font-medium text-white">Cannot open dashboard</p>
          <p className="mt-2 text-red-200/90">{jwtExchangeError}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/login?next=/dashboard"
            className="rounded-full bg-gradient-to-r from-vigel-green to-vigel-accent px-6 py-2.5 text-sm font-semibold text-white"
          >
            Sign in again
          </Link>
          <button
            type="button"
            onClick={async () => {
              clearJwtSession();
              const { auth } = getClientFirebase();
              if (auth) await signOut(auth);
              router.replace("/login?next=/dashboard");
            }}
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  if (!jwtReady) {
    return <Spinner label="Establishing secure JWT session…" />;
  }

  if (!jwtVerified) {
    return <Spinner label="Verifying JWT with server…" />;
  }

  return <>{children}</>;
}
