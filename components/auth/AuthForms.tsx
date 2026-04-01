"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getClientFirebase } from "@/lib/firebase";
import { cn } from "@/lib/cn";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2),
});

type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

const input =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-vigel-accent focus:ring-2 focus:ring-vigel-accent/25";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [err, setErr] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginValues) => {
    setErr(null);
    const { auth, ready } = getClientFirebase();
    if (!ready || !auth) {
      setErr("Firebase is not configured.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push(searchParams.get("next") || "/dashboard");
      router.refresh();
    } catch {
      setErr("Invalid credentials or user not found.");
    }
  };

  const google = async () => {
    setErr(null);
    const { auth, ready } = getClientFirebase();
    if (!ready || !auth) {
      setErr("Firebase is not configured.");
      return;
    }
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push(searchParams.get("next") || "/dashboard");
      router.refresh();
    } catch {
      setErr("Google sign-in was cancelled or failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-xs font-medium text-zinc-600">Email</label>
        <input type="email" className={cn(input, "mt-1")} {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-500">Valid email required</p>}
      </div>
      <div>
        <label className="text-xs font-medium text-zinc-600">Password</label>
        <input type="password" className={cn(input, "mt-1")} {...register("password")} />
        {errors.password && <p className="mt-1 text-xs text-red-500">Min 8 characters</p>}
      </div>
      {err && <p className="text-sm text-red-500">{err}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-vigel-green to-vigel-accent py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Signing in…" : "Sign in"}
      </button>
      <button
        type="button"
        onClick={google}
        className="group flex w-full items-center justify-center gap-3 rounded-full border border-zinc-200 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
      >
        {/* 🔥 Google Logo */}
        <svg
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>

        Continue with Google
      </button>
      <p className="text-center text-sm text-zinc-500">
        No account?{" "}
        <Link href="/signup" className="font-medium text-vigel-green">
          Create one
        </Link>
      </p>
    </form>
  );
}

export function SignupForm() {
  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupValues) => {
    setErr(null);
    const { auth, ready } = getClientFirebase();
    if (!ready || !auth) {
      setErr("Firebase is not configured.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      router.push("/dashboard");
      router.refresh();
    } catch {
      setErr("Could not create account. Email may already be in use.");
    }
  };

  const google = async () => {
    setErr(null);
    const { auth, ready } = getClientFirebase();
    if (!ready || !auth) {
      setErr("Firebase is not configured.");
      return;
    }
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push("/dashboard");
      router.refresh();
    } catch {
      setErr("Google sign-in was cancelled or failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-xs font-medium text-zinc-600">Name</label>
        <input className={cn(input, "mt-1")} {...register("name")} />
        {errors.name && <p className="mt-1 text-xs text-red-500">Enter your name</p>}
      </div>
      <div>
        <label className="text-xs font-medium text-zinc-600">Email</label>
        <input type="email" className={cn(input, "mt-1")} {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-500">Valid email required</p>}
      </div>
      <div>
        <label className="text-xs font-medium text-zinc-600">Password</label>
        <input type="password" className={cn(input, "mt-1")} {...register("password")} />
        {errors.password && <p className="mt-1 text-xs text-red-500">Min 8 characters</p>}
      </div>
      {err && <p className="text-sm text-red-500">{err}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-vigel-green to-vigel-accent py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Creating…" : "Create account"}
      </button>
      <button
        type="button"
        onClick={google}
        className="group flex w-full items-center justify-center gap-3 rounded-full border border-zinc-200 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
      >
        {/* 🔥 Google Logo */}
        <svg
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>

        Continue with Google
      </button>
      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-vigel-green">
          Sign in
        </Link>
      </p>
    </form>
  );
}
