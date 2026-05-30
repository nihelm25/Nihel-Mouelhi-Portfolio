"use client";

import { motion } from "framer-motion";
import Header from "./Header";

const contactSections = [
  {
    label: "EMAIL",
    value: "nihel.mouelhi@gmail.com",
    href: "mailto:nihel.mouelhi@gmail.com",
  },
  {
    label: "CONNECT",
    value: "Linkedin",
    href: "https://www.linkedin.com/in/nihelmouelhi",
  },
  {
    label: "LOCATION",
    value: "Los Angeles, CA",
  },
];

export default function ContactPage() {
  return (
    <section className="relative w-full h-screen bg-cream flex flex-col">
      <Header activeItem="CONTACT" />

      <div className="flex-1 flex items-end pb-[12vh] px-[3.33vw]">
        <div className="flex w-full gap-[6vw] items-start">
          {/* Left — headline */}
          <div className="w-[50%] flex flex-col gap-[1.11vw]">
            <motion.h1
              className="font-sans font-normal text-[3.89vw] leading-[1.15] text-text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Let&rsquo;s turn ambitious ideas into products.
            </motion.h1>
            <motion.div
              className="flex items-center gap-[0.56vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-[0.83vw] h-[0.83vw] rounded-full bg-[#28ca41]" />
              <span className="font-sans text-[0.97vw] tracking-[2.2px] text-text-primary">
                Available for new opportunities
              </span>
            </motion.div>
          </div>

          {/* Right — contact info */}
          <div className="flex-1 flex flex-col gap-[3.33vw]">
            {contactSections.map((section, i) => (
              <motion.div
                key={section.label}
                className="flex flex-col gap-[0.56vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              >
                <span className="font-sans text-[0.97vw] leading-[16.5px] tracking-[2.2px] text-text-primary">
                  {section.label}
                </span>
                {section.href ? (
                  <a
                    href={section.href}
                    target={section.href.startsWith("http") ? "_blank" : undefined}
                    rel={section.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-sans text-[1.67vw] tracking-[2.2px] text-text-primary hover:underline underline-offset-4 transition-all"
                  >
                    {section.value}
                  </a>
                ) : (
                  <span className="font-sans text-[1.67vw] tracking-[2.2px] text-text-primary">
                    {section.value}
                  </span>
                )}
                {i < contactSections.length - 1 && (
                  <div className="h-px bg-divider w-full mt-[1.67vw]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3.33vw] py-[2vh]">
        <span className="font-sans text-[0.76vw] text-text-secondary whitespace-nowrap">
          © 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
