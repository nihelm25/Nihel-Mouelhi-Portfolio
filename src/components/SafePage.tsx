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

export default function SafePage() {
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
          02 / 04 &middot; THALES &times; SNCF &middot; NEW PRODUCT &middot; AI &middot; B2B
        </motion.p>

        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[0.56vw] max-lg:mt-1"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Safe
        </motion.h1>
      </div>

      {/* Hero image */}
      <div className="px-[3.33vw] max-lg:px-5">
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/safe-hero-desktop-mobile.png"
            alt="SAFE Surveillance Platform -Desktop and Mobile"
            width={5376}
            height={2519}
            className="shimmer w-full h-auto object-cover object-top pointer-events-none"
            sizes="93vw"
            priority
          />
        </motion.div>

        <motion.div
          className="flex max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 items-start mt-[2.22vw] max-lg:mt-5"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { label: "ROLE", value: "Product Designer" },
            { label: "STATUS", value: "Shipped to pilot" },
            { label: "TEAM", value: "2 designers" },
            { label: "SCOPE", value: "End-to-end new product" },
            { label: "YEAR", value: "2018" },
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
          The brief said &ldquo;help operators monitor more cameras.&rdquo;{" "}
          <span className="font-semibold text-[#9c4221]">
            After a day in the room, I rewrote it.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          SNCF&rsquo;s control room wasn&rsquo;t one operator drowning in feeds. It was fourteen people moving in concert: video patrollers scanning cameras, analysts cross-referencing evidence, investigators tracing movement, and a lead who held final authority over dispatch. They moved from signal to interception in about 15 minutes, over voice-only talkie-walkie, with no shared record.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The design problem wasn&rsquo;t &ldquo;make one operator faster.&rdquo; It was: how does AI fit into a system that already works, without breaking the chain that makes it possible?
        </p>

        <div className="flex max-lg:flex-col items-start mt-[2.78vw] max-lg:mt-6 gap-[4.44vw] max-lg:gap-4">
          <div className="flex flex-col gap-[0.56vw] max-lg:gap-1">
            <p className="font-sans text-[3.89vw] max-lg:text-[32px] font-semibold text-[#555] tracking-[-0.139vw] leading-[1.14]">
              ~15 min
            </p>
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#9c4221] tracking-[0.104vw]">
              CURRENT
            </p>
            <p className="font-sans text-[0.9vw] max-lg:text-[13px] font-normal text-[#555] leading-[1.54] w-[20.83vw] max-lg:w-full">
              Time from incident signal to suspect interception, end-to-end.
            </p>
          </div>

          <div className="flex items-center pt-[0.56vw] max-lg:rotate-90 max-lg:self-center">
            <span className="font-sans text-[3.89vw] max-lg:text-[24px] text-[#9c4221] font-normal">
              &rarr;
            </span>
          </div>

          <div className="flex flex-col gap-[0.56vw] max-lg:gap-1">
            <p className="font-sans text-[3.89vw] max-lg:text-[32px] font-semibold text-[#555] tracking-[-0.139vw] leading-[1.14]">
              &le; 5 min
            </p>
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#9c4221] tracking-[0.104vw]">
              TEAM&rsquo;S TARGET
            </p>
            <p className="font-sans text-[0.9vw] max-lg:text-[13px] font-normal text-[#555] leading-[1.54] w-[20.83vw] max-lg:w-full">
              The threshold the team set. Anything slower meant the suspect had already moved beyond reach.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── CHALLENGES ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          CHALLENGES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Fitting AI into a system that{" "}
          <span className="font-semibold text-[#9c4221]">already works.</span>
        </h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              WORKFLOW
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Fourteen operators across four roles with a working escalation chain. AI had to compress the work inside each role without collapsing the handoffs between them.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              AUTHORITY
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Every dispatch is approved by the control room lead. AI could never auto-escalate. Every promotion up the chain had to remain a human decision with the AI&rsquo;s evidence visible, not hidden.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FIELD LOOP
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Updates went back to field agents by voice: a description and a location. No photo, no route, no shared record. The agent who reported the incident had no way to close the loop.
            </p>
          </div>
        </div>

        {/* Role needs grid */}
        <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[8px] mt-[2.78vw] max-lg:mt-6">
          <div className="px-[2.78vw] max-lg:px-5 py-[2.22vw] max-lg:py-5">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw] mb-[1.11vw] max-lg:mb-3">
              WHAT EACH ROLE NEEDS FROM AI
            </p>
            {[
              {
                role: "VIDEO PATROLLER",
                need: "Surface candidate matches faster than manual scanning. Don’t replace the search. Accelerate it.",
              },
              {
                role: "ANALYST",
                need: "Cross-reference fragments and rank evidence by confidence, with the underlying signals visible.",
              },
              {
                role: "INVESTIGATOR",
                need: "Trace movement across cameras automatically. Suggest the next viewing angle, not the next decision.",
              },
              {
                role: "CONTROL ROOM LEAD",
                need: "Show the chain of evidence and why the team escalated. Authority stays human, but informed.",
              },
              {
                role: "FIELD AGENT",
                need: "Receive identification with photo, last location, suggested route. Close the loop they opened.",
              },
            ].map((row) => (
              <div
                key={row.role}
                className="flex max-lg:flex-col items-center max-lg:items-start py-[1.11vw] max-lg:py-3 border-t border-[#d9d9d9]"
              >
                <p className="font-sans text-[0.97vw] max-lg:text-[13px] font-bold text-[#555] w-[15.28vw] max-lg:w-full shrink-0">
                  {row.role}
                </p>
                <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45] max-lg:mt-1">
                  {row.need}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── SOLUTIONS ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          SOLUTIONS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Compress the work. Preserve the chain.{" "}
          <span className="font-semibold text-[#9c4221]">
            Close the loop.
          </span>
        </h2>
      </motion.div>

      {/* Solution detail: Existing workflow (Before) */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          BEFORE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          The existing workflow
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          A diagram I drew to align Thales engineering and SNCF stakeholders on the system we&rsquo;d actually walked into. It became the spec for every design decision after.
        </p>

        {/* System map diagram */}
        <div className="bg-[#f5f0e8] rounded-[0.28vw] max-lg:rounded-[8px] mt-[2.22vw] max-lg:mt-6 px-[3.89vw] max-lg:px-5 py-[3.89vw] max-lg:py-5 max-lg:overflow-x-auto max-lg:-mx-5 max-lg:mx-0">
          <div className="flex mb-[1.67vw]">
            <div className="w-[15.28vw]">
              <p className="font-sans text-[0.69vw] font-normal text-[#888] tracking-[0.139vw]">
                ON THE GROUND
              </p>
            </div>
            <div className="flex-1 ml-[13.19vw]">
              <p className="font-sans text-[0.69vw] font-normal text-[#888] tracking-[0.139vw]">
                CONTROL ROOM &nbsp;&middot;&nbsp; 14 OPERATORS
              </p>
            </div>
          </div>

          <div className="flex items-start gap-0 max-lg:min-w-[700px]">
            <div className="w-[15.28vw] shrink-0 bg-[#faf6ee] border border-[#bab5ad] rounded-[0.28vw] p-[1.25vw] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[0.21vw] bg-[rgba(156,66,33,0.5)]" />
              <p className="font-sans text-[0.76vw] font-semibold text-[#1a1a1a] tracking-[0.069vw]">
                FIELD AGENT
              </p>
              <p className="font-sans text-[0.69vw] text-[#9c4221] mt-[0.56vw]">
                On the ground
              </p>
              <p className="font-sans text-[0.76vw] text-[#555] mt-[0.83vw] leading-[1.45]">
                Reports an incident, or responds to a callout from the control room.
              </p>
            </div>

            <div className="flex flex-col items-center w-[13.19vw] shrink-0 pt-[2.78vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw] mb-[0.56vw]">
                TALKIE-WALKIE
              </p>
              <div className="w-[80%] flex items-center">
                <div className="flex-1 h-px bg-[#9c4221]" />
                <span className="text-[#9c4221] text-[0.83vw] ml-[0.14vw]">&rsaquo;</span>
              </div>
              <div className="w-[80%] flex items-center mt-[0.35vw]">
                <span className="text-[#9c4221] text-[0.83vw] mr-[0.14vw]">&lsaquo;</span>
                <div className="flex-1 h-px bg-[#9c4221]" />
              </div>
              <p className="font-sans text-[0.69vw] text-[#888] mt-[0.56vw]">
                Voice only
              </p>
            </div>

            <div className="flex items-start flex-1">
              <div className="flex-1 bg-[#faf6ee] border border-[#bab5ad] rounded-[0.28vw] p-[1.11vw]">
                <p className="font-sans text-[0.76vw] font-semibold text-[#1a1a1a] tracking-[0.069vw]">
                  VIDEO PATROLLER
                </p>
                <p className="font-sans text-[0.69vw] text-[#9c4221] mt-[0.42vw]">
                  &times; 6 ON SHIFT
                </p>
                <p className="font-sans text-[0.76vw] text-[#555] mt-[0.83vw] leading-[1.45]">
                  Scans cameras, opens search.
                </p>
              </div>
              <div className="flex items-center self-center px-[0.28vw]">
                <span className="text-[#bab5ad] text-[0.97vw]">&rarr;</span>
              </div>
              <div className="flex-1 bg-[#faf6ee] border border-[#bab5ad] rounded-[0.28vw] p-[1.11vw]">
                <p className="font-sans text-[0.76vw] font-semibold text-[#1a1a1a] tracking-[0.069vw]">
                  ANALYST
                </p>
                <p className="font-sans text-[0.69vw] text-[#9c4221] mt-[0.42vw]">
                  &times; 3
                </p>
                <p className="font-sans text-[0.76vw] text-[#555] mt-[0.83vw] leading-[1.45]">
                  Cross-references evidence across feeds.
                </p>
              </div>
              <div className="flex items-center self-center px-[0.28vw]">
                <span className="text-[#bab5ad] text-[0.97vw]">&rarr;</span>
              </div>
              <div className="flex-1 bg-[#faf6ee] border border-[#bab5ad] rounded-[0.28vw] p-[1.11vw]">
                <p className="font-sans text-[0.76vw] font-semibold text-[#1a1a1a] tracking-[0.069vw]">
                  INVESTIGATOR
                </p>
                <p className="font-sans text-[0.69vw] text-[#9c4221] mt-[0.42vw]">
                  &times; 3
                </p>
                <p className="font-sans text-[0.76vw] text-[#555] mt-[0.83vw] leading-[1.45]">
                  Traces movement, builds chain of events.
                </p>
              </div>
              <div className="flex items-center self-center px-[0.28vw]">
                <span className="text-[#bab5ad] text-[0.97vw]">&rarr;</span>
              </div>
              <div className="flex-1 bg-[#1a1a1a] border border-[#1a1a1a] rounded-[0.28vw] p-[1.11vw]">
                <p className="font-sans text-[0.76vw] font-semibold text-[#faf6ee] tracking-[0.069vw]">
                  CONTROL ROOM LEAD
                </p>
                <p className="font-sans text-[0.69vw] text-[#c79e80] mt-[0.42vw]">
                  &times; 1 &nbsp;&middot;&nbsp; FINAL AUTHORITY
                </p>
                <p className="font-sans text-[0.76vw] text-[#b8b8b8] mt-[0.83vw] leading-[1.45]">
                  Approves dispatch. Final authority.
                </p>
              </div>
            </div>
          </div>

          {/* Two-way trigger note */}
          <div className="mt-[2.22vw] text-center">
            <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw]">
              TWO-WAY TRIGGER
            </p>
            <p className="font-sans text-[0.69vw] text-[#888] mt-[0.28vw]">
              Field reports in, or team spots and calls out.
            </p>
          </div>

          {/* Timeline bar */}
          <div className="flex items-center justify-between mt-[2.22vw] pt-[1.11vw] border-t border-[#888]">
            <p className="font-sans text-[0.625vw] font-normal text-[#888] tracking-[0.104vw]">
              FROM SIGNAL
            </p>
            <p className="font-sans text-[0.625vw] font-normal text-[#9c4221] tracking-[0.104vw]">
              TO DISPATCH &nbsp;&middot;&nbsp; 15 MINUTES
            </p>
          </div>

          {/* Bottom notes */}
          <div className="flex gap-[3.89vw] mt-[2.22vw]">
            <div className="flex flex-col gap-[0.42vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw]">
                AUTHORITY
              </p>
              <p className="font-sans text-[0.83vw] text-[#555] leading-[1.5]">
                Every dispatch is approved by the control room lead. No exceptions.
              </p>
            </div>
            <div className="flex flex-col gap-[0.42vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw]">
                COMMUNICATION
              </p>
              <p className="font-sans text-[0.83vw] text-[#555] leading-[1.5]">
                Voice-only over talkie-walkie. No shared written record between sides.
              </p>
            </div>
            <div className="flex flex-col gap-[0.42vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw]">
                WHAT WAS MISSING
              </p>
              <p className="font-sans text-[0.83vw] text-[#555] leading-[1.5]">
                Updates came back by voice: a description and a location. No photo, no route, no shared record agents could carry on the ground.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Solution detail: Analyst surface (After) */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          AFTER - CONTROL ROOM
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          The analyst&rsquo;s working surface
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          An incoming chat from a field agent triggers an AI-assisted search: ranked candidates, traceable evidence, a clear route to escalation. The control room lead&rsquo;s authority is one click away, never bypassed.
        </p>

        <div className="mt-[2.22vw] max-lg:mt-6">
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[4px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/safe-browser.png"
              alt="SAFE analyst working surface -control room desktop view"
              width={5376}
              height={3280}
              className="shimmer w-full h-auto object-cover object-top pointer-events-none"
              sizes="93vw"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.39vw] max-lg:mt-3">
          ANALYST WORKING SURFACE: incoming chat from a field agent on the left, AI-ranked match candidates with confidence and traceable evidence in the center, full escalation chain visible on the right. The control room lead&rsquo;s role is never hidden. Every operator can see the chain of authority, in real time.
        </p>
      </motion.div>

      {/* Solution detail: Field agent mobile (After) */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          AFTER - FIELD
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Closing the loop to the agent who reported
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          Once the control room lead approves, the field agent gets a push notification with everything they need: a photo, last known location, suggested route. The conversation that started with their report closes with their answer.
        </p>

        <div className="flex justify-center gap-[2.22vw] max-lg:gap-4 mt-[2.22vw] max-lg:mt-6">
          <div className="w-[22%] max-lg:w-[42%]">
            <ShimmerImage
              src="/images/safe-phone-intel.png"
              alt="SAFE field agent mobile -Intel view with suspect identification"
              width={1440}
              height={3344}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="(max-width: 1024px) 42vw, 20vw"
            />
          </div>
          <div className="w-[22%] max-lg:w-[42%]">
            <ShimmerImage
              src="/images/safe-phone-conversation.png"
              alt="SAFE field agent mobile -Conversation view with chat messages"
              width={1440}
              height={3344}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="(max-width: 1024px) 42vw, 20vw"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.39vw] max-lg:mt-3">
          Chat-based incident reporting on the right (the field agent), confirmed-suspect handoff on the left (the answer back). The same conversation, both sides. Two minutes from report to identification.
        </p>
      </motion.div>

      {/* ── OUTCOME ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          OUTCOMES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Pilot, in{" "}
          <span className="font-semibold text-[#9c4221]">operator hands.</span>
        </h2>

        <div className="flex max-lg:flex-wrap gap-[2.22vw] max-lg:gap-6 mt-[2.78vw]">
          {[
            { value: "Shipped", label: "Deployed to SNCF control rooms; first stop in a rollout targeting the wider Paris metro network." },
            { value: "15→5", label: "Minutes from signal to interception. Design goal: cut response time by 3×." },

            { value: "40K", label: "Cameras in the Paris underground network. The pilot was the first stop toward that scale." },
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
              FOR OPERATORS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              AI compresses the cognitive work without replacing the team. Analysts get ranked candidates with traceable evidence. Field agents get a photo, last known location, and suggested route instead of a voice description.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR THE BUSINESS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Safe shipped to pilot and was used by SNCF operators on shift. I left Thales before adoption metrics were collected, so I won&rsquo;t claim numbers I don&rsquo;t have. The system was in operator hands, and the chain of command stayed intact.
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
          What AI surveillance{" "}
          <span className="font-semibold text-[#9c4221]">taught me.</span>
        </h2>
        <div className="flex flex-col gap-[1.11vw] max-lg:gap-4 mt-[1.67vw] font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw]">
          <p>
            <span className="font-semibold">Shadow before you sketch.</span> The single best decision I made on Safe was sitting in the control room for a full shift before opening Figma. The brief said &ldquo;help operators monitor more cameras.&rdquo; The room showed me fourteen people who didn&rsquo;t need replacing. You cannot design a system you haven&rsquo;t watched run.
          </p>
          <p>
            <span className="font-semibold">AI should compress work, not replace judgment.</span> The instinct was to automate decisions. The right move was to accelerate the evidence that supports them. Every role kept its authority. AI surfaced candidates and ranked confidence, but never bypassed the escalation chain.
          </p>
          <p>
            <span className="font-semibold">What I&rsquo;d do differently:</span> I&rsquo;d build the metrics into the design, not after it. We shipped without an instrumented adoption plan. Today I&rsquo;d argue for that as part of the design: what we measure, who reads the dashboard, what triggers a revisit.
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
            href="/work/specificationworkbench"
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
