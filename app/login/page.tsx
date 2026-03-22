import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth/AuthForms";
import { SessionExpiredNotice } from "@/components/auth/SessionExpiredNotice";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-24 dark:bg-vigel-dark">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <h1 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900 dark:text-white">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Sign in to manage your VIGEL account.
        </p>
        <div className="mt-8">
          <Suspense
            fallback={
              <div className="h-48 animate-pulse rounded-xl bg-zinc-100 dark:bg-white/5" />
            }
          >
            <SessionExpiredNotice />
            <LoginForm />
          </Suspense>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-500">
          <Link href="/" className="hover:text-vigel-green dark:hover:text-vigel-accent">
            ← Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
