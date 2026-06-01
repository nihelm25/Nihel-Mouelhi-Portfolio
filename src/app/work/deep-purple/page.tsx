import type { Metadata } from "next";
import DeepPurplePage from "@/components/DeepPurplePage";

export const metadata: Metadata = {
  title: "Deep Purple — BPCE Banking",
  description:
    "One unified product surface for BPCE credit products. +€1M funding requests, −42% inbound support calls in the first month.",
  openGraph: {
    title: "Deep Purple — Nihel Mouelhi",
    description:
      "One unified product surface for BPCE credit products. +€1M funding requests, −42% support calls.",
    images: ["/images/deep-purple-heroshot.png"],
  },
};

export default function DeepPurple() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <DeepPurplePage />
    </main>
  );
}
