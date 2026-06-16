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
        className="flex flex-col items-center gap-8 px-5 w-full max-w-[380px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo className="w-[48px] h-[48px]" />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-sans text-[20px] font-semibold text-text-primary">
            Protected case study
          </h1>
          <p className="font-sans text-[14px] text-text-secondary leading-[1.5]">
            This project is under NDA. Enter the password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            autoFocus
            className="w-full px-4 py-3 rounded-[8px] border border-[#d9d9d9] bg-white font-sans text-[15px] text-text-primary placeholder:text-[#bbb] outline-none focus:border-[#888] transition-colors"
          />
          {error && (
            <p className="font-sans text-[13px] text-[#c0392b]">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-[8px] bg-text-primary text-cream font-sans text-[15px] font-medium transition-opacity hover:opacity-80"
          >
            View case study
          </button>
        </form>

        <a
          href="/work"
          className="font-sans text-[13px] text-text-secondary hover:text-text-primary transition-colors"
        >
          &larr; Back to work
        </a>
      </motion.div>
    </section>
  );
}
