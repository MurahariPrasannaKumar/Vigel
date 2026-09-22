import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact VI Green Energy Limited for photovoltaic products, BIPV solutions, and renewable energy project enquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <ContactForm />
    </main>
  );
}
