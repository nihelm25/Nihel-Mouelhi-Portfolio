"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import LandingPage from "@/components/LandingPage";

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="w-screen min-h-screen bg-cream">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            className="fixed inset-0 z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            className="w-full min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LandingPage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
