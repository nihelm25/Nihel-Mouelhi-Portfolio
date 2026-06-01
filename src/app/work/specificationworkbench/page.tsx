import type { Metadata } from "next";
import ESGPage from "@/components/ESGPage";

export const metadata: Metadata = {
  title: "Specification Workbench — ESG",
  description:
    "Unifying two opaque internal tools into one workspace for ESG methodologies. 2 legacy tools consolidated, 200+ methodologies managed.",
  openGraph: {
    title: "Specification Workbench — Nihel Mouelhi",
    description:
      "Unifying two opaque internal tools into one workspace for ESG methodologies.",
    images: ["/images/esg-heroshot.png"],
  },
};

export default function ESG() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <ESGPage />
    </main>
  );
}
