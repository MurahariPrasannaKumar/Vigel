"use client";

import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { TextLink } from "@/components/ui/TextLink";
import {
  clearJwtSession,
  fetchAuthMe,
  type AuthMeResponse,
} from "@/lib/auth-api";
import { isAdminEmail } from "@/lib/admin";
import { getClientFirebase } from "@/lib/firebase";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const card =
  "glass-panel-light rounded-2xl border border-zinc-200/80 p-6 shadow-lg dark:border-white/10 dark:shadow-xl dark:shadow-black/40";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [me, setMe] = useState<AuthMeResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await fetchAuthMe();
      if (!cancelled) setMe(data);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const email = user?.email ?? me?.email ?? "—";
  const admin = isAdminEmail(user?.email ?? me?.email);

  return (
    <main className="flex flex-1 flex-col bg-transparent text-white">
      <section className="border-b border-zinc-200/80 bg-white/70 px-4 py-16 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-eyebrow flex items-center gap-2 text-zinc-500">
              <span
                className="h-1 w-1 shrink-0 rounded-full bg-vigel-green dark:bg-vigel-accent"
                aria-hidden
              />
              Account
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Dashboard
            </h1>
            <p className="mt-4 max-w-xl text-body-sm">
              Signed in with a verified Firebase session and a valid API access token.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.5, ease: EASE }}
            className={cn(card, "lg:col-span-2")}
          >
            <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-zinc-900 dark:text-white">
              Profile
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-eyebrow text-zinc-500">Email</dt>
                <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">
                  {email}
                </dd>
              </div>
              <div>
                <dt className="text-eyebrow text-zinc-500">User ID</dt>
                <dd className="mt-1 break-all font-mono text-xs text-zinc-600 dark:text-zinc-400">
                  {user?.uid ?? me?.uid ?? "—"}
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: EASE }}
            className={card}
          >
            <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-zinc-900 dark:text-white">
              API session
            </h2>
            <p className="mt-3 text-body-sm">
              Your JWT was validated against the auth server. Refresh runs automatically before
              expiry.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-vigel-accent/35 bg-vigel-accent/10 px-3 py-1.5 text-xs font-medium text-vigel-green dark:text-vigel-accent">
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
            <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-zinc-900 dark:text-white">
              Quick actions
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA href="/contact" className="px-6 py-2.5 text-sm">
                Request consultation
              </PrimaryCTA>
              <TextLink
                href="/"
                className="self-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Back to home
              </TextLink>
              {admin && (
                <Link
                  href="/admin"
                  className="self-center rounded-full border border-zinc-200/90 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
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
                className="self-center rounded-full border border-zinc-200/90 px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10"
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
