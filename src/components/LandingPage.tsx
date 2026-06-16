"use client";

import { motion } from "framer-motion";
import Header from "./Header";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <section className="relative w-full min-h-full bg-cream flex flex-col">
      <Header />

      {/* Header spacer */}
      <div className="shrink-0 h-[13.44vw] max-lg:h-[100px]" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-end px-[3.33vw] max-lg:px-5 max-lg:pt-4 pb-[8vw] max-lg:pb-10">
        <div className="flex flex-col items-start text-left gap-[4vw] max-lg:gap-8">
            <motion.div
              className="font-serif text-[3.96vw] max-lg:text-[32px] font-semibold text-text-primary leading-[1.1]"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p>Hi, I&apos;m Nihel.</p>
              <p>I specialize in taking products from <span className="text-accent">zero to one</span> shaping <span className="text-accent">B2B, B2C and B2E</span> web &amp; mobile applications over the past 9 years to drive business impact.</p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-[0.4vh] max-lg:gap-1 text-[0.97vw] max-lg:text-[13px]"
              {...fadeUp}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="flex gap-[1.1vw] max-lg:gap-3 whitespace-nowrap max-lg:whitespace-normal">
                <span className="font-sans font-light text-text-secondary max-lg:w-[80px] max-lg:shrink-0">
                  CURRENTLY
                </span>
                <span className="font-sans text-text-primary">
                  Senior Product Designer at J.P. Morgan Chase &amp; Co.
                </span>
              </div>
              <div className="flex gap-[1.1vw] max-lg:gap-3 whitespace-nowrap max-lg:whitespace-normal">
                <span className="font-sans font-light text-text-secondary max-lg:w-[80px] max-lg:shrink-0">
                  LEARNING
                </span>
                <span className="font-sans text-text-primary">
                  Leading with AI, Stanford University
                </span>
              </div>
              <div className="flex gap-[1.1vw] max-lg:gap-3">
                <span className="font-sans font-light text-text-secondary max-lg:w-[80px] shrink-0">
                  BUILDING
                </span>
                <span className="font-sans text-text-primary whitespace-nowrap">
                  Multi-agent design workflow
                </span>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh] z-30">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          © 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
