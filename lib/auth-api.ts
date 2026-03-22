import {
  clearStoredTokens,
  getStoredAccessToken,
  getStoredRefreshToken,
  setStoredAccessToken,
  setStoredTokens,
} from "@/lib/jwt-storage";

function apiBase(): string {
  const base = process.env.NEXT_PUBLIC_AUTH_API_URL;
  if (!base) {
    throw new Error("NEXT_PUBLIC_AUTH_API_URL is not set");
  }
  return base.replace(/\/$/, "");
}

export type AuthApiError = {
  error: string;
  status: number;
};

export async function exchangeFirebaseIdToken(idToken: string): Promise<void> {
  const res = await fetch(`${apiBase()}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error || `login_failed_${res.status}`);
  }
  const data = (await res.json()) as {
    accessToken: string;
    refreshToken: string;
  };
  setStoredTokens(data.accessToken, data.refreshToken);
}

export async function refreshAccessToken(): Promise<boolean> {
  const refresh = getStoredRefreshToken();
  if (!refresh) return false;
  const res = await fetch(`${apiBase()}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: refresh }),
  });
  if (!res.ok) {
    clearStoredTokens();
    return false;
  }
  const data = (await res.json()) as { accessToken: string };
  setStoredAccessToken(data.accessToken);
  return true;
}

export async function fetchWithAuth(
  path: string,
  init?: RequestInit,
): Promise<Response> {
  let token = getStoredAccessToken();
  if (!token) {
    const ok = await refreshAccessToken();
    if (!ok) throw new Error("no_session");
    token = getStoredAccessToken();
  }
  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${token}`);
  let res = await fetch(`${apiBase()}${path}`, { ...init, headers });
  if (res.status === 401) {
    const renewed = await refreshAccessToken();
    if (renewed) {
      const t2 = getStoredAccessToken();
      if (t2) {
        headers.set("Authorization", `Bearer ${t2}`);
        res = await fetch(`${apiBase()}${path}`, { ...init, headers });
      }
    }
  }
  return res;
}

export function clearJwtSession() {
  clearStoredTokens();
}

export type AuthMeResponse = {
  uid: string;
  email: string | null;
};

/**
 * Validates the current access JWT with the auth server (Bearer).
 * Returns null if missing, expired, or invalid.
 */
export async function fetchAuthMe(): Promise<AuthMeResponse | null> {
  try {
    const res = await fetchWithAuth("/auth/me");
    if (!res.ok) return null;
    return (await res.json()) as AuthMeResponse;
  } catch {
    return null;
  }
}
