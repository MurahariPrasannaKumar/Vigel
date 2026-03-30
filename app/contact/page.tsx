import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a consultation with VIGEL — solar for homes, businesses, and utilities.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <ContactForm />
    </main>
  );
}
