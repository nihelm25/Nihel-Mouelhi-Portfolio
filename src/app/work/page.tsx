import type { Metadata } from "next";
import WorkPage from "@/components/WorkPage";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies — JP Morgan, SAFE, ESG Workspace, Deep Purple. Fintech, AI, and enterprise product design.",
  openGraph: {
    title: "Work — Nihel Mouelhi",
    description:
      "Selected case studies — JP Morgan, SAFE, ESG Workspace, Deep Purple.",
    images: ["/images/jpmorgan-heroshot.png"],
  },
};

export default function Work() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <WorkPage />
    </main>
  );
}
