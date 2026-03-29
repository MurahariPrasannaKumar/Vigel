"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-transparent px-6 py-24 text-center text-zinc-200">
      <h1 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm text-zinc-400">
        An unexpected error occurred. You can retry or return to the homepage.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-vigel-green to-vigel-accent px-6 py-2 text-sm font-semibold text-white"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
