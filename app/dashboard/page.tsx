import type { Metadata } from "next";
import Link from "next/link";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/components/providers/AuthProvider";
// import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
// import { TextLink } from "@/components/ui/TextLink";
// import { clearJwtSession } from "@/lib/auth-api";
// import { isAdminEmail } from "@/lib/admin";
// import { getClientFirebase } from "@/lib/firebase";
// import { EASE } from "@/lib/motion";
// import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <main className="min-h-[60vh] bg-white text-zinc-900">
      {/*
      const router = useRouter();
      const { user } = useAuth();

      const email = user?.email ?? "-";
      const admin = isAdminEmail(user?.email);
      */}
      <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-start justify-center gap-6 px-6 py-16 sm:px-8">
        <p className="text-sm uppercase tracking-[0.24em] text-vigel-accent">Dashboard disabled</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Authentication is currently turned off.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600">
          The dashboard is unavailable while authentication is disabled. You can continue exploring the public website.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-vigel-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-vigel-green"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
