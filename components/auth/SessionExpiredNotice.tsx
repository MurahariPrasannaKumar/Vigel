"use client";

import { useSearchParams } from "next/navigation";
import { memo } from "react";

const MESSAGES: Record<string, string> = {
  session_expired:
    "Your session has expired. Please sign in again to continue.",
  jwt_invalid:
    "Your secure token could not be verified. Please sign in again to open the dashboard.",
};

export const SessionExpiredNotice = memo(function SessionExpiredNotice() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const message = reason ? MESSAGES[reason] : null;

  if (!message) return null;

  return (
    <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      {message}
    </div>
  );
});
