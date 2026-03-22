"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getClientFirebase } from "@/lib/firebase";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", company: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    setErrorMsg(null);
    if (data.company) {
      setStatus("ok");
      reset();
      return;
    }
    const { db, ready } = getClientFirebase();
    if (!ready || !db) {
      setErrorMsg(
        "Firebase is not configured. Add NEXT_PUBLIC_FIREBASE_* keys to .env.local.",
      );
      setStatus("err");
      return;
    }
    try {
      await addDoc(collection(db, "leads"), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        createdAt: serverTimestamp(),
      });
      setStatus("ok");
      reset();
    } catch (e) {
      console.error(e);
      setStatus("err");
      setErrorMsg("Could not send right now. Please try again shortly.");
    }
  };

  const field =
    "w-full rounded-xl border border-zinc-200/90 bg-white/80 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-vigel-accent focus:ring-2 focus:ring-vigel-accent/25 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel-light space-y-5 rounded-2xl p-6 sm:p-8"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("company")}
      />

      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Name
        </label>
        <input className={cn(field, "mt-2")} {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Email
          </label>
          <input className={cn(field, "mt-2")} type="email" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Phone
          </label>
          <input className={cn(field, "mt-2")} type="tel" {...register("phone")} />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Project details
        </label>
        <textarea
          rows={4}
          className={cn(field, "mt-2 resize-y")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === "ok" && (
        <p className="rounded-xl border border-vigel-accent/30 bg-vigel-accent/10 px-4 py-3 text-sm text-vigel-green dark:text-vigel-accent">
          Thank you — we&apos;ll reach out within one business day.
        </p>
      )}
      {status === "err" && errorMsg && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {errorMsg}
        </p>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={
          isSubmitting
            ? undefined
            : { scale: 1.01, boxShadow: "0 16px 48px -12px rgba(34, 197, 94, 0.4)" }
        }
        whileTap={isSubmitting ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="w-full rounded-full bg-gradient-to-r from-vigel-green to-vigel-accent py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(22,163,74,0.35)] ring-1 ring-white/15 transition-[filter] hover:brightness-[1.03] disabled:opacity-60 disabled:hover:brightness-100"
      >
        {isSubmitting ? "Sending…" : "Submit inquiry"}
      </motion.button>
    </motion.form>
  );
}
