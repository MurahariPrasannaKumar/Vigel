import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;
  const missing = Object.entries(firebaseConfig).filter(([, v]) => !v);
  if (missing.length) return null;
  if (!getApps().length) {
    return initializeApp(firebaseConfig as Required<typeof firebaseConfig>);
  }
  return getApps()[0]!;
}

export function getClientFirebase() {
  const app = getFirebaseApp();
  if (!app) {
    return { app: null, auth: null, db: null, ready: false as const };
  }
  return {
    app,
    auth: getAuth(app),
    db: getFirestore(app),
    ready: true as const,
  };
}
