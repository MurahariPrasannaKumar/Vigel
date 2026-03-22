import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { SiteShell } from "@/components/layout/SiteShell";
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
  metadataBase: new URL("https://vigel.energy"),
  title: {
    default: "VIGEL — VI Green Energy Limited",
    template: "%s · VIGEL",
  },
  description:
    "Premium solar energy for residential, commercial, and utility-scale projects. Engineering-led installation, monitoring, and lifecycle performance.",
  openGraph: {
    title: "VIGEL — VI Green Energy Limited",
    description:
      "Solar infrastructure built like a flagship product — residential, commercial, and solar farming.",
    url: "https://vigel.energy",
    siteName: "VIGEL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIGEL — VI Green Energy Limited",
    description:
      "Premium solar design, installation, and energy strategy for homes, businesses, and utility-scale projects.",
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
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
