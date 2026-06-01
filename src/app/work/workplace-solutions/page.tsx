import type { Metadata } from "next";
import WorkplaceSolutionsPage from "@/components/WorkplaceSolutionsPage";

export const metadata: Metadata = {
  title: "Workplace Solutions — JP Morgan",
  description:
    "Replacing a legacy equity platform for a global participant base. $19B assets under administration, 200K participants migrated.",
  openGraph: {
    title: "Workplace Solutions — Nihel Mouelhi",
    description:
      "Replacing a legacy equity platform for a global participant base. $19B AUA, 200K participants migrated.",
    images: ["/images/jpmorgan-heroshot.png"],
  },
};

export default function WorkplaceSolutions() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <WorkplaceSolutionsPage />
    </main>
  );
}
