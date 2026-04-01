import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Create account | VIGEL",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 text-zinc-900">
      <div className="pointer-events-none absolute top-[-80px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-zinc-200/70 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[350px] w-[350px] rounded-full bg-emerald-100/70 blur-[100px]" />

      <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-[0_20px_60px_-15px_rgba(148,163,184,0.45)] backdrop-blur-2xl">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-zinc-900">
              Create your account
            </h1>
            <p className="mt-3 text-sm text-zinc-600">
              Join VIGEL to track proposals and manage your solar journey.
            </p>
          </div>

          <div className="mt-10">
            <SignupForm />
          </div>

          <div className="mt-10 border-t border-zinc-200 pt-6 text-center">
            <p className="text-sm text-zinc-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-zinc-900 hover:underline">
                Sign in
              </Link>
            </p>

            <div className="mt-4">
              <Link
                href="/"
                className="group inline-flex items-center text-xs text-zinc-500 transition-colors hover:text-black"
              >
                <span className="mr-2 transition-transform group-hover:-translate-x-1">&lt;-</span>
                Back to website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
