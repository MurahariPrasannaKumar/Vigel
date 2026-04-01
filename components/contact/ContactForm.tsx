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
  message: z.string().min(10, "Tell us a bit more"),
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
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    setErrorMsg(null);

    try {
      const authApiUrl = process.env.NEXT_PUBLIC_AUTH_API_URL?.replace(/\/$/, "");
      await fetch(`${authApiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { db, ready } = getClientFirebase();
      if (ready && db) {
        await addDoc(collection(db, "leads"), {
          ...data,
          createdAt: serverTimestamp(),
        });
      }

      setStatus("ok");
      reset();
    } catch {
      setStatus("err");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const field =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition";

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-3xl font-semibold text-gray-900">Contact VI Green Energy Limited</h2>
          <p className="mt-2 text-sm text-gray-500">
            Share your project requirement for photovoltaic products, BIPV, or smart solar
            solutions. Our team will respond shortly.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <input type="text" className="hidden" {...register("company")} />

            <div>
              <label className="text-xs font-medium text-gray-500">Name</label>
              <input className={cn(field, "mt-2")} {...register("name")} />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-gray-500">Email</label>
                <input className={cn(field, "mt-2")} {...register("email")} />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500">Phone</label>
                <input className={cn(field, "mt-2")} {...register("phone")} />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500">Message</label>
              <textarea rows={4} className={cn(field, "mt-2 resize-none")} {...register("message")} />
            </div>

            {status === "ok" && <p className="text-sm text-green-600">Message sent successfully.</p>}

            {status === "err" && <p className="text-sm text-red-500">{errorMsg}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-900"
            >
              {isSubmitting ? "Sending..." : "Submit enquiry"}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[500px] overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
        >
          <iframe
            src="https://www.google.com/maps?q=Santosh%20Nagar%2C%20Kallur%2C%20Kurnool&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
