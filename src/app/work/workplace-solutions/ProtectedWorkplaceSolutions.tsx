"use client";

import PasswordGate from "@/components/PasswordGate";
import WorkplaceSolutionsPage from "@/components/WorkplaceSolutionsPage";

export default function ProtectedWorkplaceSolutions() {
  return (
    <PasswordGate>
      <main className="w-screen min-h-screen bg-cream">
        <WorkplaceSolutionsPage />
      </main>
    </PasswordGate>
  );
}
