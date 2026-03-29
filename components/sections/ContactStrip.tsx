"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactStrip() {
  return (
    <section className="bg-white py-12 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-12">

          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 mb-4">
              <Phone className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Technical Support</h3>
            <p className="mt-1 text-sm text-zinc-600">Available 24/7 for critical sites</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">+1 (800) 555-0199</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 mb-4">
              <Mail className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Consultations</h3>
            <p className="mt-1 text-sm text-zinc-600">Send us your utility bill</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">hello@vigel.energy</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 mb-4">
              <MapPin className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Headquarters</h3>
            <p className="mt-1 text-sm text-zinc-600">San Francisco, CA</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">View on Maps &rarr;</p>
          </div>

        </div>
      </div>
    </section>
  );
}
