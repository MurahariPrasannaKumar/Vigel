import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { SiteShell } from "@/components/layout/SiteShell";
import { CursorGrid } from "@/components/ui/CursorGrid";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vigel.net"),
  title: {
    default: "VIGEL - VI Green Energy Limited",
    template: "%s | VIGEL",
  },
  description:
    "VI Green Energy Limited manufactures renewable energy products including photovoltaic modules, flexible rollable modules, and BIPV solutions.",
  openGraph: {
    title: "VIGEL - VI Green Energy Limited",
    description:
      "Renewable energy manufacturing and project development with SOFTCELL, SOFTFORM, SOFTGOODS, BIPV modules, and smart shelters.",
    url: "https://www.vigel.net",
    siteName: "VIGEL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIGEL - VI Green Energy Limited",
    description:
      "Solar and renewable energy innovation from VI Green Energy Limited, Kurnool, India.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans">
        <AppProviders>
          <CursorGrid />
          <CustomCursor />
          <WhatsAppButton />
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
