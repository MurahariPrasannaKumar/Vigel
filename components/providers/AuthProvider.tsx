"use client";

import { onAuthStateChanged, signOut, type Auth, type User } from "firebase/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearJwtSession,
  exchangeFirebaseIdToken,
  refreshAccessToken,
} from "@/lib/auth-api";
import { getClientFirebase } from "@/lib/firebase";
import {
  getStoredAccessToken,
  isAccessTokenExpired,
} from "@/lib/jwt-storage";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  firebaseReady: boolean;
  /** App JWT issued by Express after Firebase sign-in */
  jwtReady: boolean;
  jwtExchangeError: string | null;
  /** Clears JWT error after user acknowledges (e.g. retry login) */
  clearJwtExchangeError: () => void;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  firebaseReady: false,
  jwtReady: false,
  jwtExchangeError: null,
  clearJwtExchangeError: () => {},
});

function authApiConfigured(): boolean {
  return Boolean(
    typeof window !== "undefined" && process.env.NEXT_PUBLIC_AUTH_API_URL,
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<Auth | null>(null);
  const [ready, setReady] = useState(false);
  const [jwtReady, setJwtReady] = useState(false);
  const [jwtExchangeError, setJwtExchangeError] = useState<string | null>(null);
  const userUid = user?.uid ?? null;

  const clearJwtExchangeError = useCallback(() => {
    setJwtExchangeError(null);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      const { auth: a, ready: r } = getClientFirebase();
      setAuth(a);
      setReady(r && !!a);
      if (!a) setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!auth) return;
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, [auth]);

  /** Exchange Firebase ID token for JWT whenever Firebase session exists */
  useEffect(() => {
    if (!auth || !user || !userUid) {
      clearJwtSession();
      queueMicrotask(() => {
        setJwtReady(false);
        setJwtExchangeError(null);
      });
      return;
    }

    if (!authApiConfigured()) {
      queueMicrotask(() => {
        setJwtReady(false);
        setJwtExchangeError(
          "Auth API URL missing. Set NEXT_PUBLIC_AUTH_API_URL and run the Express server.",
        );
      });
      return;
    }

    let cancelled = false;
    queueMicrotask(() => {
      setJwtReady(false);
      setJwtExchangeError(null);
    });

    (async () => {
      try {
        const idToken = await user.getIdToken();
        await exchangeFirebaseIdToken(idToken);
        if (!cancelled) {
          setJwtReady(true);
          setJwtExchangeError(null);
        }
      } catch (e) {
        if (!cancelled) {
          setJwtReady(false);
          setJwtExchangeError(
            e instanceof Error ? e.message : "Could not complete secure sign-in.",
          );
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [auth, user, userUid]);

  /** Proactive refresh before access JWT expires; hard redirect if refresh fails */
  useEffect(() => {
    if (!user || !jwtReady || !auth) return;

    const tick = async () => {
      const access = getStoredAccessToken();
      if (!access) return;
      if (!isAccessTokenExpired(access, 150)) return;
      const ok = await refreshAccessToken();
      if (!ok) {
        clearJwtSession();
        try {
          await signOut(auth);
        } catch {
          /* ignore */
        }
        window.location.assign("/login?reason=session_expired");
      }
    };

    const id = window.setInterval(tick, 30_000);
    void tick();
    return () => clearInterval(id);
  }, [user, jwtReady, auth]);

  const value = useMemo(
    () => ({
      user,
      loading,
      firebaseReady: ready && !!auth,
      jwtReady,
      jwtExchangeError,
      clearJwtExchangeError,
    }),
    [user, loading, ready, auth, jwtReady, jwtExchangeError, clearJwtExchangeError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
