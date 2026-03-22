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
  "w-full rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-vigel-accent focus:ring-2 focus:ring-vigel-accent/25 dark:border-white/10 dark:bg-white/5 dark:text-white";

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
        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Email</label>
        <input type="email" className={cn(input, "mt-1")} {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-500">Valid email required</p>}
      </div>
      <div>
        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Password</label>
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
        className="w-full rounded-full border border-zinc-200/80 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
      >
        Continue with Google
      </button>
      <p className="text-center text-sm text-zinc-500">
        No account?{" "}
        <Link href="/signup" className="font-medium text-vigel-green dark:text-vigel-accent">
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
        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Name</label>
        <input className={cn(input, "mt-1")} {...register("name")} />
        {errors.name && <p className="mt-1 text-xs text-red-500">Enter your name</p>}
      </div>
      <div>
        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Email</label>
        <input type="email" className={cn(input, "mt-1")} {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-500">Valid email required</p>}
      </div>
      <div>
        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Password</label>
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
        className="w-full rounded-full border border-zinc-200/80 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
      >
        Continue with Google
      </button>
      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-vigel-green dark:text-vigel-accent">
          Sign in
        </Link>
      </p>
    </form>
  );
}
