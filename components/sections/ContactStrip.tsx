"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactStrip() {
  return (
    <section className="section-light py-12 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-12">

          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 mb-4">
              <Phone className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Phone</h3>
            <p className="mt-1 text-sm text-zinc-600">Primary project contact</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">+91 86883 33309</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 mb-4">
              <Mail className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Email</h3>
            <p className="mt-1 text-sm text-zinc-600">Share your project requirement</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">vigreenenergyltd@gmail.com</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 mb-4">
              <MapPin className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Reference Office</h3>
            <p className="mt-1 text-sm text-zinc-600">Santosh Nagar, Kallur, Kurnool</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">View on Maps &rarr;</p>
          </div>

        </div>
      </div>
    </section>
  );
}
