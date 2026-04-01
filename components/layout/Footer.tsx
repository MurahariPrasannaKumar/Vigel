import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  explore: [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Client Dashboard" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  socials: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 pb-8 pt-24 sm:pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-900/20 to-zinc-950 opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold tracking-tight text-zinc-950 shadow-lg ring-1 ring-white/20 transition-transform hover:scale-105">
                V
              </span>
              <div>
                <p className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-wide text-white">
                  VIGEL
                </p>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  VI Green Energy Limited
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Renewable energy products and project solutions including photovoltaic
              modules, BIPV, flexible solar modules, and smart energy concepts.
            </p>

            <form className="relative max-w-xs pt-2">
              <input
                type="email"
                placeholder="Get product updates"
                className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-4 pr-12 text-sm text-white transition-colors placeholder:text-zinc-600 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />
              <button
                type="button"
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-blue-500 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="flex gap-x-5 pt-4">
              {footerLinks.socials.map((item) => (
                <a key={item.name} href={item.href} className="text-zinc-500 transition-colors hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.explore.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        <span className="relative overflow-hidden">
                          {item.label}
                          <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="mailto:vigreenenergyltd@gmail.com"
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      vigreenenergyltd@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918688333309" className="text-sm text-zinc-400 transition-colors hover:text-white">
                      +91 86883 33309
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919441290776" className="text-sm text-zinc-400 transition-colors hover:text-white">
                      +91 94412 90776
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:mt-20 md:flex-row">
          <p className="text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} VI Green Energy Limited. All rights reserved.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 md:mt-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400">Profile details updated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
