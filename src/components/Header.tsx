"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header({ activeItem }: { activeItem?: string } = {}) {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="relative flex items-start justify-between pt-8 px-[3.33vw] w-full">
        <div className="flex flex-col gap-8 items-start">
          <div className="w-[64px] h-[64px] opacity-0" aria-hidden="true" />
          <nav className="flex flex-col gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`font-sans text-[0.83vw] leading-[1.2] tracking-[2.2px] text-text-primary whitespace-nowrap underline-offset-4 decoration-text-primary transition-all ${
                  activeItem === item.label
                    ? "underline font-semibold"
                    : "hover:underline"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>

        <motion.a
          href="/"
          className="absolute left-[calc(3.33vw-16px)] top-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Logo className="w-[64px] h-[64px]" />
        </motion.a>

        <motion.div
          className="flex gap-8 items-start"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[14px] leading-[16.5px] tracking-[2.2px] text-text-primary whitespace-nowrap">
              Nihel Mouelhi
            </span>
            <span className="font-sans text-[14px] leading-[16.5px] tracking-[2.2px] text-text-secondary whitespace-nowrap">
              Product designer
            </span>
          </div>
          <span className="font-sans text-[14px] leading-[16.5px] tracking-[2.2px] text-text-primary whitespace-nowrap">
            Los Angeles, CA
          </span>
        </motion.div>
      </div>
    </header>
  );
}
