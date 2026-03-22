export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-1 flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-vigel-dark">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-vigel-accent border-t-transparent" />
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading…</p>
    </div>
  );
}
