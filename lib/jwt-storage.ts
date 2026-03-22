const ACCESS_KEY = "vigel_jwt_access";
const REFRESH_KEY = "vigel_jwt_refresh";

export function getStoredAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ACCESS_KEY);
}

export function getStoredRefreshToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(REFRESH_KEY);
}

export function setStoredTokens(access: string, refresh: string) {
  sessionStorage.setItem(ACCESS_KEY, access);
  sessionStorage.setItem(REFRESH_KEY, refresh);
}

export function setStoredAccessToken(access: string) {
  sessionStorage.setItem(ACCESS_KEY, access);
}

export function clearStoredTokens() {
  sessionStorage.removeItem(ACCESS_KEY);
  sessionStorage.removeItem(REFRESH_KEY);
}

/** Decode JWT exp (seconds since epoch); does not verify signature */
export function decodeJwtExp(token: string): number | null {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    const json = JSON.parse(
      atob(part.replace(/-/g, "+").replace(/_/g, "/")),
    ) as { exp?: number };
    return typeof json.exp === "number" ? json.exp : null;
  } catch {
    return null;
  }
}

export function isAccessTokenExpired(
  token: string | null,
  skewSeconds = 90,
): boolean {
  if (!token) return true;
  const exp = decodeJwtExp(token);
  if (!exp) return true;
  return Date.now() / 1000 >= exp - skewSeconds;
}
