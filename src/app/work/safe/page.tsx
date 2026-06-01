import type { Metadata } from "next";
import SafePage from "@/components/SafePage";

export const metadata: Metadata = {
  title: "SAFE — AI Surveillance Platform",
  description:
    "AI that augments a 14-person control room without breaking the chain of command. 40K cameras across the Paris underground.",
  openGraph: {
    title: "SAFE — Nihel Mouelhi",
    description:
      "AI that augments a 14-person control room without breaking the chain of command. 40K cameras, ~5min report to interception.",
    images: ["/images/safe-heroshot.png"],
  },
};

export default function Safe() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <SafePage />
    </main>
  );
}
