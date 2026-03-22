"use client";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getClientFirebase } from "@/lib/firebase";

export type LeadRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt?: { seconds?: number };
};

export function LeadsTable() {
  const [rows, setRows] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { db, ready } = getClientFirebase();
      if (!ready || !db) {
        setErr("Firebase not configured.");
        setLoading(false);
        return;
      }
      try {
        const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        if (cancelled) return;
        const list: LeadRow[] = snap.docs.map((d) => {
          const data = d.data() as Record<string, unknown>;
          return {
            id: d.id,
            name: String(data.name ?? ""),
            email: String(data.email ?? ""),
            phone: String(data.phone ?? ""),
            message: String(data.message ?? ""),
            createdAt: data.createdAt as LeadRow["createdAt"],
          };
        });
        setRows(list);
      } catch (e) {
        console.error(e);
        setErr(
          "Could not load leads. Check Firestore rules allow authenticated reads for admins.",
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="space-y-3 p-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-xl bg-white/5"
          />
        ))}
      </div>
    );
  }

  if (err) {
    return <p className="p-6 text-sm text-red-400">{err}</p>;
  }

  if (!rows.length) {
    return (
      <p className="p-6 text-sm text-zinc-500">
        No leads yet — submissions from the contact form will appear here when Firestore
        rules permit reads.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto p-6">
      <table className="w-full min-w-[640px] text-left text-sm text-zinc-300">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-zinc-500">
            <th className="pb-3 pr-4">Name</th>
            <th className="pb-3 pr-4">Email</th>
            <th className="pb-3 pr-4">Phone</th>
            <th className="pb-3">Message</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-white/5 align-top">
              <td className="py-4 pr-4 font-medium text-white">{r.name}</td>
              <td className="py-4 pr-4">{r.email}</td>
              <td className="py-4 pr-4">{r.phone}</td>
              <td className="py-4 text-zinc-400">{r.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
