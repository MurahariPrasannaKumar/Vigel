// "use client";

// import { ArrowRight, Shield, Zap } from "lucide-react";
// import Link from "next/link";
// import { cn } from "@/lib/cn";

// const services = [
//   {
//     title: "Photovoltaic Modules",
//     desc: "Module-focused solutions for distributed and rooftop applications with reliable output planning.",
//     icon: HomeIcon,
//     link: "/services#residential",
//   },
//   {
//     title: "BIPV & Smart BIPV",
//     desc: "Building-integrated modules with flexibility, transparency, and design compatibility.",
//     icon: Shield,
//     link: "/services#commercial",
//   },
//   {
//     title: "Flexible Solar Formats",
//     desc: "Rollable and adaptable solar modules developed for next-generation product use cases.",
//     icon: Zap,
//     link: "/services#farming",
//   },
// ];

// function HomeIcon(props: React.ComponentProps<"svg">) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

// export function ServicesOverview() {
//   return (
//     <section className="relative overflow-hidden bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-2xl">
//             <h2 className="font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
//               Technology built for practical deployment.
//             </h2>
//             <p className="mt-4 text-lg text-zinc-600">
//               From product innovation to on-grid execution in Kurnool and beyond.
//             </p>
//           </div>
//           <Link
//             href="/services"
//             className="group flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-zinc-900 transition-colors hover:text-blue-600"
//           >
//             View all capabilities
//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {services.map((service, i) => (
//             <div
//               key={service.title}
//               className={cn(
//                 "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-50 p-8 transition-all duration-500 hover:bg-zinc-100 hover:shadow-lg",
//                 i === 1 && "md:-translate-y-8",
//               )}
//             >
//               <div>
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm transition-transform duration-300 group-hover:scale-110">
//                   <service.icon className="h-5 w-5" />
//                 </div>
//                 <h3 className="mt-6 font-[family-name:var(--font-syne)] text-2xl font-semibold text-zinc-900">
//                   {service.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.desc}</p>
//               </div>

//               <div className="mt-12">
//                 <Link
//                   href={service.link}
//                   className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition-all hover:bg-zinc-900 hover:text-white hover:ring-zinc-900"
//                 >
//                   Learn more
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { ArrowRight, Shield, Zap, Home, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Photovoltaic Modules",
    desc: "Precision-engineered solar solutions for distributed rooftop applications with reliable, long-term output planning.",
    icon: Home,
    link: "/services#residential",
  },
  {
    title: "BIPV & Smart Systems",
    desc: "Building-integrated modules blending flexibility and transparency with seamless architectural design compatibility.",
    icon: Shield,
    link: "/services#commercial",
  },
  {
    title: "Flexible Solar Formats",
    desc: "Rollable and adaptable thin-film modules developed for next-generation mobile and smart shelter use cases.",
    icon: Zap,
    link: "/services#farming",
  },
];

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Our Capabilities</span>
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Technology built for <br />
              <span className="text-zinc-500">practical deployment.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-emerald-400"
          >
            Explore all capabilities
            <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-10 transition-all duration-500 hover:border-emerald-500/30 hover:bg-zinc-900/60",
                i === 1 && "md:-translate-y-10"
              )}
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px] transition-opacity opacity-0 group-hover:opacity-100" />

              <div>
                {/* Icon Container */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950 text-emerald-400 shadow-inner transition-all duration-500 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="mt-8 font-[family-name:var(--font-syne)] text-2xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 transition-all group/btn"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all group-hover/btn:w-full" />
                  </span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-20 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }}
      />
    </section>
  );
}