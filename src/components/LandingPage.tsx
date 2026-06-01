"use client";

import { motion } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import Header from "./Header";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <section className="relative w-full h-full bg-cream overflow-hidden flex flex-col">
      <Header />

      {/* Header spacer — clears the vertical nav */}
      <div className="shrink-0 h-[14vw]" />

      {/* Main content */}
      <div className="flex-1 flex items-start px-[3.33vw]">
        <div className="flex items-start justify-between w-full gap-[2vw]">
          {/* Left column */}
          <div className="flex flex-col gap-[2.5vh] flex-1 min-w-0">
            <motion.div
              className="font-serif text-[3.6vw] font-semibold text-text-primary"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p className="leading-[1.15]">I design for the space between </p>
              <p className="leading-[1.15] text-accent">
                structure and feeling.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-[2vh]"
              {...fadeUp}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="flex flex-col gap-[2vh]">
                <p className="font-sans text-[1.1vw] leading-[1.6] text-text-primary max-w-[50vw]">
                  High-stakes products, designed to feel like nothing&apos;s at
                  stake. I work on tools where one bad interaction breaks trust and
                  costs money: fintech, defense, healthcare and telecom. Nine
                  years getting them to feel calm anyway. Interior architect before
                  that.
                </p>

                <div className="flex flex-col gap-[0.4vh] text-[0.97vw]">
                  <div className="flex gap-[1.1vw] whitespace-nowrap">
                    <span className="font-sans font-light text-text-secondary">
                      CURRENTLY
                    </span>
                    <span className="font-sans text-text-primary">
                      Senior Product Designer at J.P. Morgan Chase &amp; Co.
                    </span>
                  </div>
                  <div className="flex gap-[1.9vw] whitespace-nowrap">
                    <span className="font-sans font-light text-text-secondary">
                      LEARNING
                    </span>
                    <span className="font-sans text-text-primary">
                      Leading with AI, Stanford University
                    </span>
                  </div>
                  <div className="flex gap-[1.9vw]">
                    <span className="font-sans font-light text-text-secondary w-[4.65vw] shrink-0">
                      BUILDING
                    </span>
                    <span className="font-sans text-text-primary whitespace-nowrap">
                      Multi-agent design workflow
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                {[
                  { value: "$19B", label: "ASSETS\nUNDER ADMIN" },
                  { value: "-42%", label: "SUPPORT\nCALLS" },
                  { value: "5", label: "DESIGNERS\nMENTORED" },
                  { value: "4", label: "REGULATED\nINDUSTRIES" },
                ].map((stat, i) => (
                  <div key={stat.value} className={`flex flex-col gap-[0.3vh] ${i > 0 ? 'ml-[5vw]' : ''}`} style={{ minWidth: '6vw' }}>
                    <p className="font-sans text-[1.39vw] leading-[2] tracking-[-0.037vw] text-text-primary whitespace-nowrap">
                      {stat.value}
                    </p>
                    <p className="font-sans text-[0.69vw] leading-[1.4] tracking-[0.14vw] text-text-primary whitespace-pre-line">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            className="flex flex-col gap-[1.5vh] items-start w-[31.17vw] shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Dashboard hero card */}
            <div className="w-full aspect-[528/340] rounded-[3px] overflow-hidden relative bg-[#faf6ee]">
              <ShimmerImage src="/images/ws-hero-card.png" alt="JP Morgan Dashboard" fill className="object-cover object-top pointer-events-none" sizes="37vw" priority />
              {/* Gradient overlay on visible card area */}
              <div
                className="absolute left-0 bottom-0 w-full h-[40%] z-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(250,246,238,0) 0%, rgba(250,246,238,0.3) 40%, rgba(250,246,238,0.85) 75%, rgb(250,246,238) 100%)",
                }}
              />
            </div>

            {/* Three small project cards */}
            <div className="flex gap-[1.5vh] w-full">
              {/* Safe — surveillance */}
              <div className="flex-1 aspect-[8/9] rounded-[3px] overflow-hidden relative drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)]">
                <ShimmerImage src="/images/surveillance-feed.png" alt="Safe — AI surveillance" fill className="object-cover pointer-events-none" sizes="12vw" />
                <div className="absolute left-[51.88%] top-[42.22%] w-[20%] h-[27.78%] border border-[#00d4ab] rounded-[1px]" />
                <div className="absolute left-[50%] top-[40.56%] w-[3.75%] h-[0.83%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[50%] top-[40.56%] w-[0.94%] h-[3.33%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[70%] top-[40.56%] w-[3.75%] h-[0.83%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[72.81%] top-[40.56%] w-[0.94%] h-[3.33%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[50%] top-[70.83%] w-[3.75%] h-[0.83%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[50%] top-[68.33%] w-[0.94%] h-[3.33%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[70%] top-[70.83%] w-[3.75%] h-[0.83%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-[72.81%] top-[68.33%] w-[0.94%] h-[3.33%] bg-[rgba(38,217,115,0.9)]" />
                <div className="absolute left-0 top-[43.33%] w-full h-px bg-[rgba(115,148,158,0.1)]" />
                <p className="absolute left-[5%] top-[92.22%] text-[0.31vw] font-medium tracking-[0.5px] text-black whitespace-pre">
                  14:34:12 CAM 22
                </p>
                <div className="absolute left-[50.63%] top-[72.78%] bg-[rgba(46,184,135,0.85)] rounded-[2px] h-[5.56%] flex items-center justify-center overflow-hidden">
                  <span className="text-white text-[0.38vw] font-semibold whitespace-nowrap px-[3px]">
                    94% MATCH
                  </span>
                </div>
              </div>

              {/* Safe — train station */}
              <div className="flex-1 aspect-[8/9] rounded-[3px] overflow-hidden relative">
                <div className="absolute inset-0 bg-[#09090f]" />
                <ShimmerImage src="/images/train-station.png" alt="Train station scene" fill className="object-cover pointer-events-none rounded-[3px]" sizes="12vw" />
              </div>

              {/* Deep Purple — mobile mockups */}
              <div
                className="flex-1 aspect-[8/9] rounded-[3px] overflow-hidden relative shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]"
                style={{
                  background: "linear-gradient(90deg, rgb(247,246,245) 0%, rgb(247,246,245) 100%)",
                }}
              >
                <div className="absolute left-[7.2%] top-[11.5%] w-[42.5%] aspect-[68/146] rotate-[5deg] rounded-[6px] border border-[#e0ded9] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden opacity-45">
                  <ShimmerImage src="/images/deep-purple-back.png" alt="" fill className="object-cover rounded-[6px]" sizes="5vw" />
                </div>
                <div className="absolute left-[37.5%] top-[5.5%] w-[46.25%] aspect-[74/158] -rotate-[3deg] rounded-[6px] border border-[#e0ded9] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden">
                  <ShimmerImage src="/images/deep-purple-front.png" alt="" fill className="object-cover rounded-[6px]" sizes="6vw" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 flex items-center justify-between px-[3.33vw] py-[2vh]">
        <span className="font-sans text-[0.76vw] text-text-secondary whitespace-nowrap">
          © 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
