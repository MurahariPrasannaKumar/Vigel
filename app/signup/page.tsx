import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Create account | VIGEL",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 dark:bg-[#08140c]">

      {/* 🔥 Ambient Glow (Premium subtle effect) */}
      <div className="pointer-events-none absolute top-[-80px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-zinc-300/20 blur-[100px] dark:bg-white/10" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[350px] w-[350px] rounded-full bg-zinc-400/20 blur-[100px] dark:bg-white/5" />

      {/* 🔥 Card */}
      <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/80 p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/60">

          {/* ✨ Header */}
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Create your account
            </h1>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Join VIGEL to track proposals and manage your solar journey.
            </p>
          </div>

          {/* 🔽 Form */}
          <div className="mt-10">
            <SignupForm />
          </div>

          {/* 🔚 Footer */}
          <div className="mt-10 border-t border-zinc-200 pt-6 text-center dark:border-white/10">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-zinc-900 hover:underline dark:text-white"
              >
                Sign in
              </Link>
            </p>

            <div className="mt-4">
              <Link
                href="/"
                className="group inline-flex items-center text-xs text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                <span className="mr-2 transition-transform group-hover:-translate-x-1">
                  ←
                </span>
                Back to website
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}