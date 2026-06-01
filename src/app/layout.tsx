import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nihelmouelhi.com"
  ),
  title: {
    default: "Nihel Mouelhi — Product Designer",
    template: "%s — Nihel Mouelhi",
  },
  description:
    "Lead product designer with 8+ years of experience transforming ambitious ideas into elegant, high-impact experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nihel Mouelhi — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
