"use client";

import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl font-[family-name:var(--font-syne)]">
            What our clients say
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Real data from property owners and commercial asset managers.
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Review 1 */}
            <div className="flex flex-col justify-between rounded-3xl bg-zinc-50 p-8 shadow-sm border border-zinc-200">
              <div>
                <div className="flex gap-x-1 text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-zinc-700">
                  "VIGEL completely overhauled our industrial cold-storage facility. The microgrid they designed offset our peak demand charges by 80%. An absolute masterclass in commercial energy."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-600">
                  MR
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-zinc-900">Marcus Reynolds</h3>
                  <p className="text-sm leading-6 text-zinc-500">VP Operations, Nexus Cold Storage</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col justify-between rounded-3xl bg-zinc-50 p-8 shadow-sm border border-zinc-200">
              <div>
                <div className="flex gap-x-1 text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-zinc-700">
                  "The aesthetic was critical to us. VIGEL managed to tuck the conduit inside the walls and align the panels perfectly to our roofline. You hardly notice it's there, but the app shows us zeroing out our bill every month."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-600">
                  SJ
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-zinc-900">Sarah Jenkins</h3>
                  <p className="text-sm leading-6 text-zinc-500">Residential Client</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col justify-between rounded-3xl bg-zinc-50 p-8 shadow-sm border border-zinc-200 lg:col-start-3">
              <div>
                <div className="flex gap-x-1 text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-zinc-700">
                  "Transparent communication from day one. Their system modeling was precise, and the final production numbers matched their spreadsheet. Highly recommended for asset-grade installations."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-600">
                  DB
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-zinc-900">David Baxter</h3>
                  <p className="text-sm leading-6 text-zinc-500">Director, Horizon Estate</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
