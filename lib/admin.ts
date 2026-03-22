/**
 * Client-side admin gate for /admin. Prefer Firebase custom claims + rules in production.
 */
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const raw = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.trim();
  if (!raw) return true;
  const allowed = raw.split(",").map((e) => e.trim().toLowerCase());
  return allowed.includes(email.toLowerCase());
}
