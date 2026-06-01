import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Nihel Mouelhi — Product Designer",
  description:
    "Lead product designer with 8+ years of experience. I design for the space between structure and feeling.",
  openGraph: {
    title: "Nihel Mouelhi — Product Designer",
    description:
      "Lead product designer with 8+ years of experience. I design for the space between structure and feeling.",
    images: ["/images/ws-hero-card.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
