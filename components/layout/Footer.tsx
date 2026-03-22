import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vigel-dark text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold tracking-tight text-vigel-dark shadow-lg ring-1 ring-white/20">
                V
              </span>
              <div>
                <p className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white">
                  VIGEL
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  VI Green Energy Limited
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Premium solar design, installation, and energy strategy for homes,
              businesses, and utility-scale projects.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-zinc-300 underline-offset-4 transition duration-300 hover:text-white hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Legal
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <span className="text-zinc-400">Privacy</span>
                </li>
                <li>
                  <span className="text-zinc-400">Terms</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Contact
              </p>
              <p className="mt-4 text-sm text-zinc-400">
                hello@vigel.energy
                <br />
                +1 (555) 014-9200
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} VIGEL. All rights reserved.</span>
          <span className="text-zinc-600">
            Crafted for the future of clean power.
          </span>
        </div>
      </div>
    </footer>
  );
}
