"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const CORRECT_HASH = "designwork";
const STORAGE_KEY = "portfolio-unlocked";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored === "true") setUnlocked(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === CORRECT_HASH) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (checking) return null;
  if (unlocked) return <>{children}</>;

  return (
    <section className="w-screen h-screen bg-cream flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-[2.22vw] max-lg:gap-8 px-5 w-full max-w-[32vw] max-lg:max-w-[420px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo className="w-[4.17vw] max-lg:w-[56px] h-[4.17vw] max-lg:h-[56px]" />

        <div className="flex flex-col items-center gap-[0.56vw] max-lg:gap-2 text-center">
          <h1 className="font-sans text-[1.67vw] max-lg:text-[22px] font-semibold text-text-primary">
            Protected case study
          </h1>
          <p className="font-sans text-[1.11vw] max-lg:text-[16px] text-text-secondary leading-[1.5]">
            This project is under NDA. Enter the password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[0.83vw] max-lg:gap-3 w-full">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            autoFocus
            className="w-full px-[1.11vw] max-lg:px-4 py-[0.83vw] max-lg:py-3 rounded-[0.56vw] max-lg:rounded-[8px] border border-[#d9d9d9] bg-white font-sans text-[1.04vw] max-lg:text-[16px] text-text-primary placeholder:text-[#bbb] outline-none focus:border-[#888] transition-colors"
          />
          {error && (
            <p className="font-sans text-[0.9vw] max-lg:text-[14px] text-[#c0392b]">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full py-[0.83vw] max-lg:py-3 rounded-[0.56vw] max-lg:rounded-[8px] bg-text-primary text-cream font-sans text-[1.04vw] max-lg:text-[16px] font-medium transition-opacity hover:opacity-80"
          >
            View case study
          </button>
        </form>

        <a
          href="/work"
          className="font-sans text-[0.97vw] max-lg:text-[14px] text-text-secondary hover:text-text-primary transition-colors"
        >
          &larr; Back to work
        </a>
      </motion.div>
    </section>
  );
}
