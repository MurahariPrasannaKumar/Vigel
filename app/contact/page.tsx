import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a consultation with VIGEL — solar for homes, businesses, and utilities.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-zinc-50 dark:bg-vigel-dark">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.18),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vigel-green dark:text-vigel-accent">
              Contact
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold text-zinc-900 dark:text-white sm:text-5xl">
              Tell us about your site.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Share a few details — our engineers review every submission and respond with
              next steps, typically within one business day. For urgent utility-scale
              inquiries, note it in your message.
            </p>
            <dl className="mt-10 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  Email
                </dt>
                <dd className="mt-1 text-zinc-900 dark:text-white">hello@vigel.energy</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Phone
                </dt>
                <dd className="mt-1 text-zinc-900 dark:text-white">+1 (555) 014-9200</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
