"use client";

import { motion } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import Header from "./Header";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function WorkplaceSolutionsPage() {
  return (
    <section className="relative w-full min-h-screen bg-cream overflow-x-hidden">
      <Header activeItem="WORK" />

      <div className="h-[19.4vw] max-lg:h-[100px]" />

      {/* ── HERO ── */}
      <div className="px-[3.33vw] max-lg:px-5">
        <motion.p
          className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]"
          {...fadeUp}
        >
          01 / 04 &middot; JP MORGAN CHASE &amp; CO &middot; REDESIGN &middot; RESPONSIVE WEB &middot; B2C
        </motion.p>

        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[0.56vw] max-lg:mt-1"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Workplace Solutions
        </motion.h1>

      </div>

      {/* Hero image */}
      <div className="px-[3.33vw] max-lg:px-5">
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative max-h-[49.17vw] max-lg:max-h-none overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/dashboard-screenshot.png"
              alt="Workplace Solutions Dashboard"
              width={5376}
              height={3032}
              className="shimmer w-full h-auto object-cover object-top pointer-events-none"
              sizes="93vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-[8.33vw] bg-gradient-to-t from-white to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="flex max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 items-start mt-[2.22vw] max-lg:mt-5"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { label: "ROLE", value: "Product Designer" },
            { label: "STATUS", value: "Shipped · Live" },
            { label: "TEAM", value: "5 designers" },
            { label: "SCOPE", value: "Led 2 of 4 journey lines" },
            { label: "YEAR", value: "2025–2026" },
          ].map((item, i, arr) => (
            <div key={item.label} className={`flex-1 max-lg:flex-none ${i < arr.length - 1 ? "border-r max-lg:border-r-0 border-[#d9d9d9] pr-[1.39vw] max-lg:pr-0 mr-[1.39vw] max-lg:mr-0" : ""}`}>
              <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-semibold text-[#888] tracking-[0.092vw]">
                {item.label}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[13px] font-normal text-[#555] mt-[0.28vw] max-lg:mt-0.5">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── PROBLEM ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          PROBLEM
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          A legacy equity platform that couldn&rsquo;t scale{" "}
          <span className="font-semibold text-[#9c4221]">or keep up.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          J.P. Morgan&rsquo;s equity compensation platform needed a full redesign. The existing system served 1M+ participants across 50+ countries, but it had been built screen by screen over years, patching rather than solving. Participants use it to make high-stakes, often irrevocable financial decisions: exercising stock options, selling shares within compliance windows, enrolling in purchase plans. A confusing interface didn&rsquo;t just create friction, it cost people money.
        </p>
      </motion.div>

      {/* ── CHALLENGES ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          CHALLENGES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Combinatorial complexity at{" "}
          <span className="font-semibold text-[#9c4221]">every layer.</span>
        </h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              PRODUCT
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Multiple plan types (RSUs, options, ESPPs, SAYE, SIPs), each with different mechanics, tax events, and terminology, running simultaneously per client, across 50+ jurisdictions with different regulations.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              PEOPLE
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Led 2 of 4 journey lines (View &amp; Manage, Model &amp; Transact) within a team of 5 designers, coordinating with product, legal, compliance, and engineering across time zones.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              USERS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Same platform for a first-time enroller and a CEO preclearing a sale. Vastly different confidence levels, vocabulary, and stakes, all needing clarity from one interface.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── SOLUTIONS ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          SOLUTIONS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          One decision pipeline:{" "}
          <span className="font-semibold text-[#9c4221]">view, model, act.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Instead of designing two separate journey lines, I reframed them as a single pipeline that mirrors how participants actually think: What do I have? What could I do with it? Do it.
        </p>

        {/* View → Model → Transact pipeline */}
        <div className="flex max-lg:flex-col items-stretch gap-[0.83vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              VIEW
            </p>
            <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
              What do I have?
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Dashboard and portfolio. Holdings, vesting schedules, grants, contribution plans, surfaced in plain language with insights answering the questions a participant would otherwise call to ask.
            </p>
          </div>
          <div className="flex items-center shrink-0 max-lg:justify-center">
            <span className="font-sans text-[2.22vw] max-lg:text-[20px] text-[#ccc] font-light max-lg:rotate-90">&rarr;</span>
          </div>
          <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              MODEL
            </p>
            <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
              What could I do with it?
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Simulators that let participants test scenarios, exercise timing, post-tax proceeds, contribution percentage, withdrawal impact, before any commitment. Confidence is built here.
            </p>
          </div>
          <div className="flex items-center shrink-0 max-lg:justify-center">
            <span className="font-sans text-[2.22vw] max-lg:text-[20px] text-[#ccc] font-light max-lg:rotate-90">&rarr;</span>
          </div>
          <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              TRANSACT
            </p>
            <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
              Do it.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Exercise, sell, transfer, preclear, enroll, change contribution. Whatever the participant modeled in the previous step is what they&rsquo;re confirming here: same numbers, same assumptions, no re-entry.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Solution detail: ESPP */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          ESPP ENROLLMENT
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.83vw]">
          Most participants enroll once and don&rsquo;t return until something needs adjusting. The view and management actions sit on one screen: current period status, contribution amount, and mid-period actions (change, suspend, withdraw). Regulated terms are explained in context, not buried in a help center.
        </p>
        <div className="flex justify-center mt-[2.22vw]">
          <div className="w-[70vw] max-lg:w-full">
            <div className="relative rounded-[0.56vw] max-lg:rounded-[6px] overflow-hidden" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
              <ShimmerImage
                src="/images/espp-screenshot.png"
                alt="ESPP summary view"
                width={4032}
                height={3032}
                className="shimmer w-full h-auto object-cover object-top pointer-events-none"
                sizes="70vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[6.94vw] bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Solution detail: Preclearance */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          PRECLEARANCE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.83vw]">
          Public-company employees with material nonpublic information must preclear before selling. A rare, high-stakes flow where nobody wants to misread anything. The form is simple; the SEC acknowledgment is present but doesn&rsquo;t dominate.
        </p>
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="flex-1">
            <ShimmerImage
              src="/images/sell-shares-screenshot.png"
              alt="Sell shares flow"
              width={2736}
              height={1908}
              className="shimmer w-full h-auto object-cover object-top pointer-events-none"
              sizes="45vw"
            />
          </div>
          <div className="flex-1">
            <ShimmerImage
              src="/images/preclearance-screenshot.png"
              alt="Preclearance request"
              width={2736}
              height={1908}
              className="shimmer w-full h-auto object-cover object-top pointer-events-none"
              sizes="45vw"
            />
          </div>
        </div>
      </motion.div>

      {/* ── OUTCOME ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          OUTCOME
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          A full platform replacement,{" "}
          <span className="font-semibold text-[#9c4221]">zero churn.</span>
        </h2>

        <div className="flex max-lg:flex-wrap gap-[2.22vw] max-lg:gap-6 mt-[2.78vw]">
          {[
            { value: "200K+", label: "Active users on the platform today, grown steadily since the initial migration from legacy." },
            { value: "100+", label: "Public and private companies live on the new platform, roughly 50/50 US and global." },
            { value: "$19B", label: "Total value of equity awards and contributions managed on the platform today." },
            { value: "50+", label: "Geographies covered, each with its own regulatory floor and plan rules." },
          ].map((stat) => (
            <div key={stat.value} className="flex-1 max-lg:basis-[calc(50%-12px)] flex flex-col gap-[0.56vw] max-lg:gap-2">
              <p className="font-sans text-[3.89vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.078vw]">
                {stat.value}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR USERS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              A unified experience that makes equity legible. Participants can view holdings, model scenarios, and transact with confidence. Compliance is built in as guardrails, not gates.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR THE BUSINESS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Successful migration with no data loss and no client churn. The platform now scales across plan types, jurisdictions, and client configurations from a single design system.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── LEARNINGS ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          LEARNINGS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          What regulated finance{" "}
          <span className="font-semibold text-[#9c4221]">taught me.</span>
        </h2>
        <div className="flex flex-col gap-[1.11vw] max-lg:gap-4 mt-[1.67vw] font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw]">
          <p>
            Regulation, tax rules, and plan logic aren&rsquo;t obstacles to design around, they&rsquo;re the material. The most impactful decisions were about defaults, ordering, and when to pause a participant before they committed.
          </p>
          <p>
            Leading two journey lines across a team of 5 designers taught me that stakeholder alignment is the design work. The screen is the last thing I design now, after the system underneath it has been figured out.
          </p>
        </div>
      </motion.div>

      {/* ── Closing navigation ── */}
      <div className="h-[5vw] max-lg:h-[60px]" />

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-sm border-t border-[#d9d9d9]">
        <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[1.39vw] max-lg:py-4">
          <a
            href="/work"
            className="font-sans text-[1.39vw] max-lg:text-[16px] font-normal text-[#555] hover:underline underline-offset-4"
          >
            &larr; Back to work
          </a>
          <a
            href="/work/safe"
            className="font-sans text-[1.39vw] max-lg:text-[16px] font-normal text-[#555] hover:underline underline-offset-4"
          >
            Next case study &rarr;
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh] mt-[3.33vw] max-lg:mt-8">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
