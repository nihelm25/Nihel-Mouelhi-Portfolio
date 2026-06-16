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
    href: "https://www.linkedin.com/in/nihel-mouelhi-047552a8/",
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

      <div className="flex-1 flex items-end max-lg:items-start pb-[12vh] max-lg:pb-10 max-lg:pt-[100px] px-[3.33vw] max-lg:px-5">
        <div className="flex max-lg:flex-col w-full gap-[6vw] max-lg:gap-10 items-start">
          {/* Left — headline */}
          <div className="w-[50%] max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3">
            <motion.h1
              className="font-sans font-normal text-[3.89vw] max-lg:text-[28px] leading-[1.15] text-text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Let&rsquo;s turn ambitious ideas into products.
            </motion.h1>
            <motion.div
              className="flex items-center gap-[0.56vw] max-lg:gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-[0.83vw] max-lg:w-[10px] h-[0.83vw] max-lg:h-[10px] rounded-full bg-[#28ca41]" />
              <span className="font-sans text-[0.97vw] max-lg:text-[13px] tracking-[2.2px] text-text-primary">
                Available for new opportunities
              </span>
            </motion.div>
          </div>

          {/* Right — contact info */}
          <div className="flex-1 max-lg:w-full flex flex-col gap-[3.33vw] max-lg:gap-6">
            {contactSections.map((section, i) => (
              <motion.div
                key={section.label}
                className="flex flex-col gap-[0.56vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              >
                <span className="font-sans text-[0.97vw] max-lg:text-[12px] leading-[16.5px] tracking-[2.2px] text-text-primary">
                  {section.label}
                </span>
                {section.href ? (
                  <a
                    href={section.href}
                    target={section.href.startsWith("http") ? "_blank" : undefined}
                    rel={section.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-sans text-[1.67vw] max-lg:text-[18px] tracking-[2.2px] text-text-primary hover:underline underline-offset-4 transition-all"
                  >
                    {section.value}
                  </a>
                ) : (
                  <span className="font-sans text-[1.67vw] max-lg:text-[18px] tracking-[2.2px] text-text-primary">
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
      <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh]">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          © 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
