import type { Metadata } from "next";
import Link from "next/link";
// import { LeadsTable } from "@/components/admin/LeadsTable";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="min-h-[60vh] bg-transparent text-zinc-100">
      {/*
      <div className="border-b border-white/10 px-6 py-8">
        <h1 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white">
          Lead inbox
        </h1>
        <p className="mt-2 max-w-xl text-sm text-zinc-400">
          Submissions from the public contact form. Ensure Firestore rules allow your admin
          role to read the <code className="text-vigel-accent">leads</code> collection.
        </p>
      </div>
      <LeadsTable />
      */}
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-white">
          Admin access disabled
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-zinc-400">
          Admin and protected sections are currently hidden while authentication is turned off.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/15"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
