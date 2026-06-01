import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nihel Mouelhi — lead product designer based in Paris.",
  openGraph: {
    title: "Contact — Nihel Mouelhi",
    description:
      "Get in touch with Nihel Mouelhi — lead product designer based in Paris.",
  },
};

export default function Contact() {
  return (
    <main className="w-screen min-h-screen bg-cream">
      <ContactPage />
    </main>
  );
}
