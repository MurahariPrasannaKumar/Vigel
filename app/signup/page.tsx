import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Create account",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-24 dark:bg-vigel-dark">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <h1 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900 dark:text-white">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Join VIGEL to track proposals and project milestones.
        </p>
        <div className="mt-8">
          <SignupForm />
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
