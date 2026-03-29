import { LeadsTable } from "@/components/admin/LeadsTable";

export default function AdminPage() {
  return (
    <div className="min-h-[60vh] bg-transparent text-zinc-100">
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
    </div>
  );
}
