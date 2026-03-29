"use client";

import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { clearJwtSession } from "@/lib/auth-api";
import { isAdminEmail } from "@/lib/admin";
import { getClientFirebase } from "@/lib/firebase";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {
    user,
    loading,
    firebaseReady,
    jwtReady,
    jwtExchangeError,
  } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!firebaseReady) return;
    if (!user) {
      router.replace("/login?next=/admin");
      return;
    }
    if (!isAdminEmail(user.email)) {
      router.replace("/");
    }
  }, [user, loading, firebaseReady, router]);

  if (loading || !firebaseReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-transparent text-zinc-400">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-vigel-accent border-t-transparent" />
      </div>
    );
  }

  if (!user || !isAdminEmail(user.email)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-transparent text-zinc-300">
        <p>Checking access…</p>
        <Link href="/login" className="text-vigel-accent underline">
          Sign in
        </Link>
      </div>
    );
  }

  if (jwtExchangeError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-transparent px-6 text-center text-zinc-300">
        <div className="max-w-md rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
          <p className="font-medium text-white">JWT session unavailable</p>
          <p className="mt-2 text-red-200/90">{jwtExchangeError}</p>
          <p className="mt-3 text-xs text-zinc-400">
            Ensure the Express auth server is running and env vars are set (see
            .env.example).
          </p>
        </div>
        <button
          type="button"
          onClick={async () => {
            clearJwtSession();
            const { auth } = getClientFirebase();
            if (auth) await signOut(auth);
            router.replace("/login?next=/admin");
          }}
          className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15"
        >
          Sign out and retry
        </button>
      </div>
    );
  }

  if (!jwtReady) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-transparent text-zinc-400">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-vigel-accent border-t-transparent" />
        <p className="text-sm text-zinc-500">Establishing secure JWT session…</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/10 bg-transparent px-6 py-4">
        <span className="text-sm font-medium text-white">VIGEL Admin</span>
        <button
          type="button"
          onClick={async () => {
            clearJwtSession();
            const { auth } = getClientFirebase();
            if (auth) await signOut(auth);
            router.push("/");
            router.refresh();
          }}
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
        >
          Log out
        </button>
      </div>
      {children}
    </div>
  );
}
