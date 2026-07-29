"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/about#contact" },
];

export default function Header({ activeItem }: { activeItem?: string } = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="flex items-center justify-between pt-8 px-[3.33vw] max-lg:px-5 w-full">
          <motion.a
            href="/"
            className="transition-opacity duration-200 hover:opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Logo className="w-[64px] h-[64px] max-lg:w-[44px] max-lg:h-[44px] -ml-[16px] max-lg:-ml-[11px]" />
          </motion.a>

          <nav className="flex gap-8 items-center max-lg:hidden">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`font-sans text-[0.83vw] leading-[1.2] tracking-[2.2px] text-text-primary whitespace-nowrap underline-offset-4 decoration-text-primary transition-all ${
                  activeItem === item.label
                    ? "underline font-semibold"
                    : "hover:underline"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <motion.button
            className="lg:hidden ml-auto relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span
              className="block w-6 h-[2px] bg-text-primary transition-all duration-300"
              style={{
                transform: mobileMenuOpen
                  ? "translateY(7.5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-[2px] bg-text-primary transition-all duration-300"
              style={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[2px] bg-text-primary transition-all duration-300"
              style={{
                transform: mobileMenuOpen
                  ? "translateY(-7.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </motion.button>
        </div>
      </header>

      {/* Mobile fullscreen menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-cream flex flex-col items-start justify-center px-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`font-sans text-[32px] leading-[1.2] tracking-[3px] text-text-primary underline-offset-8 decoration-text-primary ${
                    activeItem === item.label
                      ? "underline font-semibold"
                      : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
