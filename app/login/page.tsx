import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth/AuthForms";
import { SessionExpiredNotice } from "@/components/auth/SessionExpiredNotice";

export const metadata: Metadata = {
  title: "Sign in | VIGEL",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 text-zinc-900">
      <div className="pointer-events-none absolute top-0 -translate-y-12 translate-x-1/4 opacity-50">
        <div className="h-[400px] w-[400px] rounded-full bg-zinc-200/70 blur-[80px]" />
      </div>
      <div className="pointer-events-none absolute bottom-0 -translate-x-1/4 translate-y-1/3 opacity-45">
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-100/70 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-200/70 backdrop-blur-2xl">
          <div className="flex flex-col items-center space-y-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm">
              <svg
                className="h-5 w-5 text-zinc-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>

            <div className="space-y-1.5">
              <h1 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight text-zinc-900">
                Welcome back
              </h1>
              <p className="text-sm text-zinc-600">
                Sign in to your VI Green Energy account
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-4 text-zinc-500">Or continue with email</span>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="space-y-4">
                  <div className="h-10 w-full animate-pulse rounded-xl bg-zinc-200" />
                  <div className="h-10 w-full animate-pulse rounded-xl bg-zinc-200" />
                  <div className="h-10 w-full animate-pulse rounded-xl bg-zinc-300/40" />
                </div>
              }
            >
              <SessionExpiredNotice />
              <LoginForm />
            </Suspense>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6 text-center">
            <Link
              href="/"
              className="group inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-black"
            >
              <span className="mr-2 transition-transform group-hover:-translate-x-1">&lt;-</span>
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
