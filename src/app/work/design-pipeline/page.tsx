import type { Metadata } from "next";
import DesignPipelinePage from "@/components/DesignPipelinePage";

export const metadata: Metadata = {
  title: "The Design Pipeline — Stanford Capstone",
  description:
    "An AI pipeline that removes 45 minutes of ticket interpretation from every design morning. Stanford capstone project.",
  openGraph: {
    title: "The Design Pipeline — Nihel Mouelhi",
    description:
      "An AI system that removes 45 minutes of ticket interpretation from every design morning, built as a purpose-designed workflow.",
  },
};

export default function DesignPipeline() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <DesignPipelinePage />
    </main>
  );
}
