"use client";

import { motion } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import Header from "./Header";

/* ── Animation preset ── */
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

      {/* Header spacer */}
      <div className="h-[19.4vw] max-lg:h-[100px]" />

      {/* ═══════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════ */}
      <div className="px-[3.33vw] max-lg:px-5">
        {/* Label */}
        <motion.p
          className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]"
          {...fadeUp}
        >
          CASE STUDY, 02 &middot; 2021 &middot; PRODUCT DESIGNER &middot; B2B
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[1.39vw] max-lg:mt-3"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Safe
        </motion.h1>

        {/* Hero product shots */}
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6 -mx-[3.33vw] max-lg:-mx-5"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/safe-hero-desktop-mobile.png"
            alt="SAFE Surveillance Platform — Desktop and Mobile"
            width={5376}
            height={2519}
            className="shimmer w-full h-auto object-cover object-top pointer-events-none"
            sizes="97vw"
            priority
          />
        </motion.div>

        {/* Hero bottom row: meta + intro */}
        <motion.div
          className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[2.78vw] max-lg:mt-6"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Left: meta column */}
          <div className="w-[25.63vw] max-lg:w-full shrink-0 flex flex-col gap-[1.94vw] max-lg:gap-4">
            {[
              { label: "COMPANY", value: "Thales × SNCF" },
              { label: "ROLE", value: "Product designer (team of 6)" },
              {
                label: "STATUS",
                value:
                  "Shipped to pilot at SNCF control rooms; deployed to operators on shift.",
              },
              {
                label: "DISCIPLINE",
                value:
                  "AI/operator-augmentation · Service design · Cross-platform UX",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-[0.35vw] max-lg:gap-1">
                <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                  {item.label}
                </p>
                <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Right: intro paragraph */}
          <div className="flex-1">
            <p className="font-sans text-[1.53vw] max-lg:text-[16px] font-normal text-[#555] leading-[1.45] tracking-[-0.023vw]">
              AI that augments a 14-person control room, without disrupting the
              chain of command that already gets it right in minutes. The brief
              was &ldquo;help operator monitor more cameras.&rdquo; After a day
              inside the room, I rewrote it.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          01 / WHAT EVERYONE ASSUMES
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          01 / WHAT EVERYONE ASSUMES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          Surveillance design has{" "}
          <span className="font-semibold text-[#9c4221]">
            a default story.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          One overwhelmed operator. A wall of video feeds. Too much to see, too
          little time. The fix: AI watches the cameras so the human doesn&rsquo;t
          have to.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          It&rsquo;s the framing every AI surveillance product starts from.
          It&rsquo;s also the framing we walked into Thales &times; SNCF
          expecting to validate.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          02 / WHAT THE SHADOW SHOWED
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          02 / WHAT THE SHADOW SHOWED
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          I spent half a shift in the room. The brief was wrong.
        </h2>
        <p className="font-sans text-[1.53vw] max-lg:text-[16px] font-normal text-[#555] leading-[1.55] mt-[1.67vw] max-lg:mt-4">
          The control room wasn&rsquo;t one operator drowning. It was fourteen
          people moving in concert.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.67] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          Video patrollers scanned feeds in shifts. Analysts cross-referenced
          evidence across cameras and time-stamps. Investigators traced movement
          and built the chain of events. A control room lead held the authority
          to escalate. Each role specialized. Each handoff fast, over
          talkie-walkie, both ways. From the first signal of an incident to
          dispatching agents on the ground, the team moved in minutes, not hours.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.67] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          What I expected was a person buried under information. What I found was
          a high-performance team with a working escalation chain. The design
          problem wasn&rsquo;t &ldquo;make one operator faster.&rdquo; It was:
          how does AI fit into a system that already gets decisions right in
          minutes, without breaking the chain that makes that possible?
        </p>

        {/* Time goal stat */}
        <div className="flex max-lg:flex-col items-start mt-[2.78vw] max-lg:mt-6 gap-[4.44vw] max-lg:gap-4 border-t border-[#bab5ad] pt-[1.67vw] max-lg:pt-4">
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
              The threshold the team set. Anything slower meant the suspect had
              already moved beyond reach.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="bg-[#f5f0e8] rounded-[0.28vw] max-lg:rounded-[4px] mt-[2.78vw] max-lg:mt-6 px-[2.22vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 border-l-[3px] border-[#9c4221]">
          <p className="font-sans text-[1.53vw] max-lg:text-[16px] font-medium text-[#555] leading-[1.45]">
            The decision was: do not replace the chain. Compress the work inside
            it.
          </p>
          <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#9c4221] tracking-[0.139vw] mt-[0.83vw] max-lg:mt-2">
            WHAT I TOOK BACK FROM THE SHADOW DAY
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          03 / THE ARTIFACT
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          03 / THE ARTIFACT
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          What we found in{" "}
          <span className="font-semibold text-[#9c4221]">
            the control room.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          A diagram I drew to align Thales engineering and SNCF stakeholders on
          the system we&rsquo;d actually walked into: the existing workflow,
          before we proposed anything. It became the spec for every design
          decision after.
        </p>

        {/* System map diagram */}
        <div className="bg-[#f5f0e8] rounded-[0.28vw] max-lg:rounded-[8px] mt-[2.22vw] max-lg:mt-6 px-[3.89vw] max-lg:px-5 py-[3.89vw] max-lg:py-5 max-lg:overflow-x-auto max-lg:-mx-5 max-lg:mx-0">
          {/* Header labels */}
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

          {/* Role boxes row */}
          <div className="flex items-start gap-0 max-lg:min-w-[700px]">
            {/* Field Agent */}
            <div className="w-[15.28vw] shrink-0 bg-[#faf6ee] border border-[#bab5ad] rounded-[0.28vw] p-[1.25vw] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[0.21vw] bg-[rgba(156,66,33,0.5)]" />
              <p className="font-sans text-[0.76vw] font-semibold text-[#1a1a1a] tracking-[0.069vw]">
                FIELD AGENT
              </p>
              <p className="font-sans text-[0.69vw] text-[#9c4221] mt-[0.56vw]">
                On the ground
              </p>
              <p className="font-sans text-[0.76vw] text-[#555] mt-[0.83vw] leading-[1.45]">
                Reports an incident, or responds to a callout from the control
                room.
              </p>
            </div>

            {/* Arrow + label */}
            <div className="flex flex-col items-center w-[13.19vw] shrink-0 pt-[2.78vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw] mb-[0.56vw]">
                TALKIE-WALKIE
              </p>
              <div className="w-[80%] flex items-center">
                <div className="flex-1 h-px bg-[#9c4221]" />
                <span className="text-[#9c4221] text-[0.83vw] ml-[0.14vw]">
                  &rsaquo;
                </span>
              </div>
              <div className="w-[80%] flex items-center mt-[0.35vw]">
                <span className="text-[#9c4221] text-[0.83vw] mr-[0.14vw]">
                  &lsaquo;
                </span>
                <div className="flex-1 h-px bg-[#9c4221]" />
              </div>
              <p className="font-sans text-[0.69vw] text-[#888] mt-[0.56vw]">
                Voice only
              </p>
            </div>

            {/* Control room roles */}
            <div className="flex items-start flex-1">
              {/* VIDEO PATROLLER */}
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
              {/* Arrow → */}
              <div className="flex items-center self-center px-[0.28vw]">
                <span className="text-[#bab5ad] text-[0.97vw]">&rarr;</span>
              </div>
              {/* ANALYST */}
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
              {/* Arrow → */}
              <div className="flex items-center self-center px-[0.28vw]">
                <span className="text-[#bab5ad] text-[0.97vw]">&rarr;</span>
              </div>
              {/* INVESTIGATOR */}
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
              {/* Arrow → */}
              <div className="flex items-center self-center px-[0.28vw]">
                <span className="text-[#bab5ad] text-[0.97vw]">&rarr;</span>
              </div>
              {/* CONTROL ROOM LEAD — dark inverted card */}
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
                Every dispatch is approved by the control room lead. No
                exceptions.
              </p>
            </div>
            <div className="flex flex-col gap-[0.42vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw]">
                COMMUNICATION
              </p>
              <p className="font-sans text-[0.83vw] text-[#555] leading-[1.5]">
                Voice-only over talkie-walkie. No shared written record between
                sides.
              </p>
            </div>
            <div className="flex flex-col gap-[0.42vw]">
              <p className="font-sans text-[0.625vw] font-semibold text-[#9c4221] tracking-[0.104vw]">
                WHAT WAS MISSING
              </p>
              <p className="font-sans text-[0.83vw] text-[#555] leading-[1.5]">
                Updates came back by voice: a description and a location. No
                photo, no route, no shared record agents could carry on the
                ground.
              </p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] leading-[1.6] tracking-[0.104vw] mt-[1.39vw] max-lg:mt-3">
          BEFORE STATE: fourteen operators across four roles in the control room,
          plus field agents on the ground. Communication runs both ways over
          talkie-walkie. The chain works, but everything is voice: a description
          and a location, never a photo or a shared record.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          04 / THE STRATEGIC MOVE
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          04 / THE STRATEGIC MOVE
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          Compress the work. Preserve the chain.{" "}
          <span className="font-semibold text-[#9c4221]">
            Close the loop.
          </span>
        </h2>

        {/* 3 Pillars */}
        <div className="flex max-lg:flex-col gap-[2.22vw] max-lg:gap-6 mt-[2.78vw] max-lg:mt-6">
          {[
            {
              num: "01",
              title: "Compress the work, not the team",
              body: "AI does the cognitive heavy lifting: pattern matching across cameras, suggesting tracks, surfacing fragments. The four roles stay. Their judgment stays. We just gave them less to hold in their head.",
            },
            {
              num: "02",
              title: "Preserve the escalation chain",
              body: "AI never auto-escalates. Every promotion up the chain, from analyst to control room lead, from control room lead to field, is a human decision with the AI’s evidence visible, not hidden.",
            },
            {
              num: "03",
              title: "Close the loop to the field",
              body: "The agent who reported the incident is the agent who receives the answer. Photo, last known location, suggested route. No one hands off into a black box.",
            },
          ].map((pillar) => (
            <div key={pillar.num} className="flex-1 flex flex-col gap-[0.83vw] max-lg:gap-2">
              <div className="h-[0.21vw] max-lg:h-[2px] bg-[#9c4221] w-full" />
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
                {pillar.num}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {pillar.title}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {pillar.body}
              </p>
            </div>
          ))}
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

      {/* ═══════════════════════════════════════════════════
          05 / THE DESIGN — Control Room
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          05 / THE DESIGN
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          Inside the analyst&rsquo;s{" "}
          <span className="font-semibold text-[#9c4221]">
            working surface.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          The analyst&rsquo;s working surface. An incoming chat from a field
          agent triggers an AI-assisted search: ranked candidates, traceable
          evidence, a clear route to escalation. The control room lead&rsquo;s
          authority is one click away, never bypassed.
        </p>

        {/* Control room screenshot */}
        <div className="mt-[2.22vw] max-lg:mt-6">
          <div
            className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[4px]"
            style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}
          >
            <ShimmerImage
              src="/images/safe-browser.png"
              alt="SAFE analyst working surface — control room desktop view"
              width={5376}
              height={3280}
              className="shimmer w-full h-auto object-cover object-top pointer-events-none"
              sizes="93vw"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.39vw] max-lg:mt-3">
          ANALYST WORKING SURFACE: incoming chat from a field agent on the left,
          AI-ranked match candidates with confidence and traceable evidence in
          the center, full escalation chain visible on the right. The control
          room lead&rsquo;s role is never hidden. Every operator can see the
          chain of authority, in real time.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          06 / CLOSING THE LOOP — Field Agent Mobile
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          06 / CLOSING THE LOOP
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          Back to the agent{" "}
          <span className="font-semibold text-[#9c4221]">who reported.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw] max-lg:mt-4">
          Once the control room lead approves, the field agent gets a push
          notification with everything they need: a photo of the suspect, last
          known location, suggested route. The conversation that started with
          their chat closes with their answer.
        </p>

        {/* Mobile phone mockups */}
        <div className="flex justify-center gap-[2.22vw] max-lg:gap-4 mt-[2.22vw] max-lg:mt-6">
          <div className="w-[22%] max-lg:w-[42%]">
            <ShimmerImage
              src="/images/safe-phone-intel.png"
              alt="SAFE field agent mobile — Intel view with suspect identification"
              width={1440}
              height={3344}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="(max-width: 1024px) 42vw, 20vw"
            />
          </div>
          <div className="w-[22%] max-lg:w-[42%]">
            <ShimmerImage
              src="/images/safe-phone-conversation.png"
              alt="SAFE field agent mobile — Conversation view with chat messages"
              width={1440}
              height={3344}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="(max-width: 1024px) 42vw, 20vw"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.39vw] max-lg:mt-3">
          Chat-based incident reporting on the right (the field agent),
          confirmed-suspect handoff on the left (the answer back). The same
          conversation, both sides. Two minutes from report to identification.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          07 / WHAT SHIPPED
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          07 / WHAT SHIPPED
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          Pilot, in{" "}
          <span className="font-semibold text-[#9c4221]">operator hands.</span>
        </h2>

        {/* 4-stat row */}
        <div className="flex max-lg:flex-wrap gap-[2.22vw] max-lg:gap-6 mt-[2.78vw] max-lg:mt-6">
          {[
            {
              value: "Shipped",
              label: "TO PILOT",
              desc: "Deployed to SNCF control rooms; first stop in a rollout targeting the wider Paris metro network.",
            },
            {
              value: "15→5",
              label: "MIN INTERCEPTION TARGET",
              desc: "Current process took up to 15 minutes; the team’s design goal was ≤ 5.",
            },
            {
              value: "14",
              label: "OPERATORS · 4 ROLES",
              desc: "Video patroller, analyst, investigator, control room lead, plus field agents on the ground.",
            },
            {
              value: "40K",
              label: "CAMERAS IN ROLLOUT",
              desc: "Paris underground network. The pilot was the first stop on the path to that scale.",
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="flex-1 max-lg:basis-[calc(50%-12px)] flex flex-col gap-[0.83vw] max-lg:gap-1"
            >
              <p className="font-sans text-[3.89vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.078vw] leading-none">
                {stat.value}
              </p>
              <p className="font-sans text-[0.76vw] max-lg:text-[10px] font-semibold text-[#888] tracking-[0.092vw]">
                {stat.label}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[13px] font-normal text-[#555] leading-[1.45]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* "What I can and can't claim" card */}
        <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.94vw] max-lg:px-5 py-[1.53vw] max-lg:py-5 mt-[2.22vw] max-lg:mt-6">
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
            WHAT I CAN AND CAN&rsquo;T CLAIM
          </p>
          <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.83vw] max-lg:mt-2">
            Safe shipped to pilot and was used by SNCF operators on shift. The
            rollout plan extended toward roughly 40,000 cameras across the Paris
            underground network. I left Thales before adoption metrics were
            collected, so I won&rsquo;t claim numbers I don&rsquo;t have. What I
            will claim: the system was in operator hands, the chain of command
            stayed intact, and the design held up against the team&rsquo;s
            5-minute interception target, which, for a tool of this kind, is the
            result that matters most.
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          08 / FIVE YEARS LATER
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          08 / FIVE YEARS LATER
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw] max-lg:mt-3">
          What I&rsquo;d do differently, and what I&rsquo;d do again.
        </h2>

        {/* Two-column reflection */}
        <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-8 mt-[2.78vw] max-lg:mt-6">
          <div className="flex-1 flex flex-col gap-[0.83vw] max-lg:gap-2">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              DIFFERENTLY
            </p>
            <p className="font-sans text-[1.53vw] max-lg:text-[18px] font-semibold text-[#555] leading-[1.3] tracking-[-0.023vw]">
              I&rsquo;d build the metrics into the design, not after it.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              We shipped without an instrumented adoption plan. Today I&rsquo;d
              argue for that as part of the design: what we measure, who reads
              the dashboard, what triggers a revisit. Lead-level work treats
              measurement as a design surface.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[0.83vw] max-lg:gap-2">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              AGAIN
            </p>
            <p className="font-sans text-[1.53vw] max-lg:text-[18px] font-semibold text-[#555] leading-[1.3] tracking-[-0.023vw]">
              I&rsquo;d shadow before I sketch.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              The single best decision I made on Safe was sitting in the room
              for a full shift before opening Figma. Every senior project
              I&rsquo;ve done since starts the same way. You cannot design a
              system you haven&rsquo;t watched run.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          Closing navigation
         ═══════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════
          Footer
         ═══════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh] mt-[3.33vw] max-lg:mt-8">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
