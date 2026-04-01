"use client";

import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { TextLink } from "@/components/ui/TextLink";
import { clearJwtSession } from "@/lib/auth-api";
import { isAdminEmail } from "@/lib/admin";
import { getClientFirebase } from "@/lib/firebase";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const card = "rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg shadow-zinc-200/70";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();

  const email = user?.email ?? "-";
  const admin = isAdminEmail(user?.email);

  return (
    <main className="flex flex-1 flex-col bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-eyebrow flex items-center gap-2 text-zinc-500">
              <span className="h-1 w-1 shrink-0 rounded-full bg-vigel-green" aria-hidden />
              Account
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Dashboard
            </h1>
            <p className="mt-4 max-w-xl text-body-sm">
              Signed in with a verified Firebase session and a valid API access token.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.5, ease: EASE }}
            className={cn(card, "lg:col-span-2")}
          >
            <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-zinc-900">
              Profile
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-eyebrow text-zinc-500">Email</dt>
                <dd className="mt-1 font-medium text-zinc-900">{email}</dd>
              </div>
              <div>
                <dt className="text-eyebrow text-zinc-500">User ID</dt>
                <dd className="mt-1 break-all font-mono text-xs text-zinc-600">{user?.uid ?? "-"}</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: EASE }}
            className={card}
          >
            <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-zinc-900">
              API session
            </h2>
            <p className="mt-3 text-body-sm">
              Your JWT was validated against the auth server. Refresh runs automatically before
              expiry.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-vigel-accent/35 bg-vigel-accent/10 px-3 py-1.5 text-xs font-medium text-vigel-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vigel-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-vigel-accent" />
              </span>
              JWT active
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5, ease: EASE }}
            className={cn(card, "lg:col-span-3")}
          >
            <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-zinc-900">
              Quick actions
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA href="/contact" className="px-6 py-2.5 text-sm">
                Request consultation
              </PrimaryCTA>
              <TextLink href="/" className="self-center text-zinc-600 hover:text-zinc-900">
                Back to home
              </TextLink>
              {admin && (
                <Link
                  href="/admin"
                  className="self-center rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
                >
                  Admin inbox
                </Link>
              )}
              <button
                type="button"
                onClick={async () => {
                  clearJwtSession();
                  const { auth } = getClientFirebase();
                  if (auth) await signOut(auth);
                  router.replace("/login");
                  router.refresh();
                }}
                className="self-center rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
              >
                Sign out
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
