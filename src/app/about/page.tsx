import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lead product designer with 8+ years shaping fintech, AI, and enterprise tools at scale.",
  openGraph: {
    title: "About — Nihel Mouelhi",
    description:
      "Lead product designer with 8+ years shaping fintech, AI, and enterprise tools at scale.",
  },
};

export default function About() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <AboutPage />
    </main>
  );
}
