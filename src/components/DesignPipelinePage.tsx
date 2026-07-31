"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import ShimmerImage from "./ShimmerImage";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const accent = "#8c1c1c";

export default function DesignPipelinePage() {
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
          02 / 05 &middot; STANFORD CAPSTONE &middot; AI &middot; DESIGN OPS &middot; B2E
        </motion.p>

        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[0.56vw] max-lg:mt-1"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          The Design Pipeline
        </motion.h1>
      </div>

      {/* Hero image */}
      <div className="px-[3.33vw] max-lg:px-5">
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div
            className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]"
            style={{
              backgroundColor: "#f5f3ee",
              boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)",
            }}
          >
            <ShimmerImage
              src="/images/pipeline-jira-sidebar.png"
              alt="Design Pipeline sidebar in Jira — brief ready with product ask and user context"
              width={2860}
              height={1328}
              className="shimmer w-full h-auto object-cover pointer-events-none"
              sizes="93vw"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="flex max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 items-start mt-[2.22vw] max-lg:mt-5"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { label: "ROLE", value: "Product Designer · Researcher" },
            { label: "STATUS", value: "Shipped · Live" },
            { label: "SCOPE", value: "End-to-end new design pipeline" },
            { label: "YEAR", value: "2026" },
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
          Every design day started with the same{" "}
          <span className="font-semibold" style={{ color: accent }}>45 minutes.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          A ticket arrives in Jira, written by a business stakeholder. Before any design work can begin: read the ticket three times, figure out whether it targets the client platform or the admin portal, hunt down the edge cases nobody wrote down, separate the happy path from the failure states, sort must-have from nice-to-have, and list what still needs PM clarification.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.11vw]">
          I inventoried those six steps deliberately, because the question I actually needed to answer was not &ldquo;where could AI help&rdquo; but &ldquo;which of these is judgment, and which is scaffolding.&rdquo; Five of six steps are reading and restating. Only one requires domain reasoning&mdash;and that one most reliably fails. Edge cases that should surface here instead surface three weeks later in engineering review, when the design work is already spent.
        </p>

        <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 mt-[2.22vw] max-lg:mt-6">
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold" style={{ color: accent, letterSpacing: "0.092vw" }}>
            CONCRETE EXAMPLE
          </p>
          <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45] mt-[0.83vw]">
            A ticket said &ldquo;make the acceptance flow clearer.&rdquo; It did not name the user role, the surface, or the platforms. It did not say what happens when a first-time recipient holds more than one grant. All four had to be answered before a frame could be drawn. Two of them were not answered until much later.
          </p>
        </div>
      </motion.div>

      {/* ── RESEARCH ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          RESEARCH
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Is this mine, or is this{" "}
          <span className="font-semibold" style={{ color: accent }}>the job?</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Before building anything, I interviewed three lead designers on complex financial products with PM-written intake.
        </p>

        <div className="flex flex-col gap-[1.11vw] max-lg:gap-4 mt-[2.22vw]">
          {[
            {
              num: "1",
              title: "Tickets arrive ambiguous, universally.",
              body: "Not one participant described intake that arrived complete. Every designer had built a private ritual for filling the gaps, and none of those rituals were written down or shared.",
            },
            {
              num: "2",
              title: "Edge cases are discovered, not anticipated.",
              body: "Participants surfaced them in low-fi review, in engineering handoff, sometimes in QA. Almost never at intake.",
              quote: "“Feedback comes from engineering about things I didn’t know. I wish I had known it beforehand so I didn’t waste my time.” — Daria",
            },
            {
              num: "3",
              title: "The unmet need is proactivity, not capability.",
              body: "Everyone already used AI tools. Nobody wanted a better generator. They wanted something that had already done the reading by the time they opened the ticket.",
            },
            {
              num: "4",
              title: "Current AI tools sit outside the design environment.",
              body: "Output engineering can’t use, tools with no discoverable strengths, and interaction models that break direct manipulation.",
              quote: "“When I want to make a quick change in Figma, I can’t go directly to the frame and change it. On Copilot I need to ask.” — James",
            },
            {
              num: "5",
              title: "Exploration is solo, and useful feedback arrives late.",
              body: "Designers generate one to three directions alone, then get their first quality signal from other people well downstream.",
            },
          ].map((finding) => (
            <div key={finding.num} className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                FINDING {finding.num}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
                {finding.title}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {finding.body}
              </p>
              {finding.quote && (
                <p className="font-sans text-[0.97vw] max-lg:text-[14px] italic text-[#888] leading-[1.45] border-l-2 border-[#d9d9d9] pl-[1.11vw] max-lg:pl-4 mt-[0.28vw]">
                  {finding.quote}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── HYPOTHESIS ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          HYPOTHESIS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          What if the AI did the reading,{" "}
          <span className="font-semibold" style={{ color: accent }}>and I did the drawing?</span>
        </h2>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.11vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              AI DOES
            </p>
            {["Read the ticket", "Extract a structured brief", "Surface blocking edge cases", "Flag gaps for PM clarification", "Scaffold layout directions"].map((item) => (
              <p key={item} className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {item}
              </p>
            ))}
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              DESIGNER DOES
            </p>
            {["Choose the exploration direction", "Make visual and interaction decisions", "Judge whether the AI got it right", "Own the design rationale", "Ship the work"].map((item) => (
              <p key={item} className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {item}
              </p>
            ))}
          </div>
        </div>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The division of labor is the design decision. Every architectural choice that follows is downstream of it.
        </p>
      </motion.div>

      {/* ── CHALLENGES ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          CHALLENGES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Build one thing well, or five things{" "}
          <span className="font-semibold" style={{ color: accent }}>badly.</span>
        </h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          {[
            {
              label: "THE CHATBOT TRAP",
              body: "The fastest path was a well-written prompt that a designer pastes a ticket into. It demos well. It also puts the burden of remembering to use it, phrasing it correctly, and knowing what it’s good at back on the designer—which is precisely what the research said was already broken.",
            },
            {
              label: "FIVE AGENTS, ZERO QUALITY",
              body: "The first plan was five agents covering intake through critique. Each needed its own prompt design, test tickets, and failure modes understood, all in parallel. The time cost compounded. So did the debugging: when an output was wrong, I could not tell which stage produced the error.",
            },
            {
              label: "LOSSY HANDOFFS",
              body: "Interpretation and edge case detection started as separate agents. In practice, the second agent only received the first agent’s output, not its reasoning. Each handoff was a lossy compression step, and in a five-stage chain that loss accumulates until the last stage reasons about a distorted version of the original ask.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {item.label}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SOLUTIONS ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          SOLUTIONS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          One label. Everything else is{" "}
          <span className="font-semibold" style={{ color: accent }}>invisible.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The interface design decision was to have almost no interface. The PM adds a label. The designer opens an email. Nobody prompts anything. About 60 seconds end to end.
        </p>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw] mt-[1.67vw]">
          BUILT WITH
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[13px] font-normal text-[#555] mt-[0.28vw]">
          Jira Automation &middot; Vercel &middot; Claude API &middot; Resend &middot; Figma &middot; Claude Code
        </p>

        {/* Architecture pipeline */}
        <div className="flex max-lg:flex-col items-stretch gap-[0.83vw] max-lg:gap-4 mt-[2.22vw]">
          {[
            { label: "JIRA AUTOMATION", title: "Trigger", body: "Rule fires on label add, POSTs a payload with a secret header." },
            { label: "VERCEL FUNCTION", title: "Orchestrator", body: "Validates the secret, extracts the ticket, calls Claude, sends email. Synchronous by design." },
            { label: "CLAUDE API", title: "Interpretation", body: "Single Sonnet call with a structured prompt. Returns brief plus edge cases." },
            { label: "RESEND", title: "Delivery", body: "Plain-text email. The handoff point between machine work and human judgment." },
          ].map((step, i, arr) => (
            <div key={step.label} className="contents">
              <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
                <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                  {step.label}
                </p>
                <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
                  {step.title}
                </p>
                <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                  {step.body}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div className="flex items-center shrink-0 max-lg:justify-center">
                  <span className="font-sans text-[2.22vw] max-lg:text-[20px] text-[#ccc] font-light max-lg:rotate-90">&rarr;</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Solution detail: The Output */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold tracking-[0.092vw]" style={{ color: accent }}>
          THE OUTPUT
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          A brief and an edge case report, not a design
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          Every edge case surfaced is a decision that would otherwise have been made silently, or discovered late. The confidence field tells the designer how hard to interrogate the rest of the brief before trusting it.
        </p>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.11vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              DESIGN BRIEF
            </p>
            {[
              ["Product ask", "Confirm grant acceptance for first-time RSU recipients"],
              ["User & surface", "Employee, client platform, web and mobile"],
              ["Happy path", "Accept → confirmation → dashboard"],
              ["Must have", "Grant summary, legal acceptance, confirmation state"],
              ["Out of scope", "Vesting schedule edits, tax forms"],
              ["Confidence", "High — ticket well-specified"],
            ].map(([field, value]) => (
              <div key={field} className="flex gap-[0.56vw]">
                <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-semibold text-[#888] w-[8vw] max-lg:w-[100px] shrink-0">{field}</p>
                <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555]">{value}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              EDGE CASE REPORT &middot; 4 BLOCKING
            </p>
            {[
              ["1. Grant-type variance", "Design for RSU, gate other types."],
              ["2. Transaction ID", "Show in confirmation, not in the accept flow."],
              ["3. Multi-grant first-timer", "Sequence acceptances, persist state."],
              ["4. Support contact", "Link to the plan administrator, not a generic contact."],
            ].map(([title, rec]) => (
              <div key={title} className="flex flex-col gap-[0.14vw]">
                <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-semibold text-[#555]">{title}</p>
                <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555]">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Edge cases, settings, and agent selection — 3-col grid */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.22vw] max-lg:mt-6" {...fadeUp}>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.11vw] max-lg:gap-3">
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/pipeline-edge-cases.png"
              alt="Edge cases detected — blocking issues surfaced automatically with design decisions"
              width={830}
              height={900}
              className="shimmer w-full h-auto object-cover pointer-events-none"
              sizes="(max-width: 1024px) 93vw, 30vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/pipeline-settings.png"
              alt="Pipeline settings — brief length, tone, auto edge-case detection, competitive research toggles"
              width={880}
              height={1060}
              className="shimmer w-full h-auto object-cover pointer-events-none"
              sizes="(max-width: 1024px) 93vw, 30vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/pipeline-agent-selection.png"
              alt="Exploration agent will use — Copilot, Figma Make, and Claude Code as generation tools"
              width={860}
              height={480}
              className="shimmer w-full h-auto object-cover pointer-events-none"
              sizes="(max-width: 1024px) 93vw, 30vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Solution detail: Strict Mode */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold tracking-[0.092vw]" style={{ color: accent }}>
          STRICT MODE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Fail loudly, never quietly
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          When a critical field is missing, the pipeline refuses to produce a brief. It names what is missing and asks for it. The refusal is the feature.
        </p>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.11vw] max-lg:gap-4 mt-[2.22vw]">
          {[
            { ticket: "SCRUM-2", result: "Passed clean", detail: "Full brief, four blocking edge cases flagged." },
            { ticket: "SCRUM-1", result: "Passed with assumption", detail: "“Clearer acceptance flow” was interpretable but ambiguous — assumption explicitly marked." },
            { ticket: "SCRUM-3", result: "Refused outright", detail: "Three missing fields named: user role, surface, platform scope." },
          ].map((item) => (
            <div key={item.ticket} className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {item.ticket}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
                {item.result}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Solution detail: Three Variants */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold tracking-[0.092vw]" style={{ color: accent }}>
          TRUST PROBLEM
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Three variants, each testing a different principle
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          The hi-fi round made trust the central open question. Rather than pick an answer, I built three directions. All three share one rule: the source ticket on the left, the generated brief on the right, so the designer can always see what the output was derived from.
        </p>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.11vw] max-lg:gap-4 mt-[2.22vw]">
          {[
            { label: "VARIANT 1", title: "Prompt-based", principle: "Designing around AI errors", body: "Assumes the brief will sometimes be wrong and makes correction cheap. Conversational refinement, length controls, editable fields." },
            { label: "VARIANT 2", title: "Design gallery", principle: "User control vs. automation", body: "Trust through authorship. The designer configures which sections the brief contains, so the output shape is theirs." },
            { label: "VARIANT 3", title: "Verifier", principle: "Calibrated trust", body: "Each claim carries a confidence level and a source in the ticket. The designer confirms before advancing, making skipping the review a visible act." },
          ].map((item) => (
            <div key={item.label} className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {item.label}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3]">
                {item.title}
              </p>
              <p className="font-sans text-[0.83vw] max-lg:text-[11px] font-semibold" style={{ color: accent }}>
                {item.principle}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lo-fi wireframe: one sketch showing early ideation */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.22vw] max-lg:mt-6" {...fadeUp}>
        <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px] max-w-[60%] max-lg:max-w-full mx-auto" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
          <ShimmerImage
            src="/images/pipeline-wireframe-gallery.jpg"
            alt="Lo-fi wireframe — Design Gallery variant with output length and section selector"
            width={1400}
            height={1100}
            className="shimmer w-full h-auto object-cover pointer-events-none"
            sizes="(max-width: 1024px) 93vw, 55vw"
          />
        </div>
      </motion.div>

      {/* Exploration Agent section */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold tracking-[0.092vw]" style={{ color: accent }}>
          EXPLORATION AGENT
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          From brief to three explorations, hands-free
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          Once the brief is approved, the designer sends it to the Exploration Agent. The agent uses the Figma MCP to generate three mid-fidelity directions directly in Figma, then sends a Gmail notification when the work is ready for review. The designer never leaves their tools.
        </p>
      </motion.div>

      {/* Figma explorations overview — full width */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.22vw] max-lg:mt-6" {...fadeUp}>
        <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ backgroundColor: "#f5f3ee", boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
          <ShimmerImage
            src="/images/pipeline-explorations-overview.png"
            alt="Three mid-fidelity explorations generated by the Exploration Agent in Figma"
            width={1520}
            height={200}
            className="shimmer w-full h-auto object-cover pointer-events-none"
            sizes="93vw"
          />
        </div>
      </motion.div>

      {/* Pipeline flowchart diagram */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold tracking-[0.092vw]" style={{ color: accent }}>
          SYSTEM ARCHITECTURE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          The full 20-step agent pipeline
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          From Jira ticket received to build handoff, each node is a discrete agent with explicit gates between stages. Human review gates at steps 12 and 18 ensure the designer stays in control.
        </p>
        <div className="max-w-[50%] max-lg:max-w-full mx-auto mt-[2.22vw] max-lg:mt-6">
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ backgroundColor: "#f5f3ee", boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/pipeline-flowchart.png"
              alt="The Design Pipeline — 20-step agent architecture from Jira ticket to build"
              width={1800}
              height={2400}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="(max-width: 1024px) 93vw, 46vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Happy path hi-fi + component library */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[1.11vw] max-lg:mt-3" {...fadeUp}>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.11vw] max-lg:gap-3">
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/pipeline-hifi-happy.png"
              alt="Happy path — Confirmation screen with milestone timeline"
              width={1024}
              height={1400}
              className="shimmer w-full h-auto object-cover pointer-events-none"
              sizes="(max-width: 1024px) 93vw, 45vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[6px]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <ShimmerImage
              src="/images/pipeline-component-library.png"
              alt="Component library — colors, type ramp, buttons, and timeline milestones built for this screen"
              width={1024}
              height={1400}
              className="shimmer w-full h-auto object-cover pointer-events-none"
              sizes="(max-width: 1024px) 93vw, 45vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Solution detail: Five-stage pipeline */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold tracking-[0.092vw]" style={{ color: accent }}>
          FULL PIPELINE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          The other four stages, and what unlocks them
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          What promotes a stage from manual to automated is not my confidence in it. It is evidence that designers reach for it unprompted.
        </p>

        <div className="flex max-lg:flex-col items-stretch gap-[0.56vw] max-lg:gap-3 mt-[2.22vw]">
          {[
            { stage: "1", title: "Ticket interpretation", status: "Shipped", where: "Jira → email" },
            { stage: "2", title: "Edge case detection", status: "Shipped", where: "Jira → email" },
            { stage: "3", title: "Design exploration", status: "Working, manual trigger", where: "Figma, three mid-fi directions" },
            { stage: "4", title: "Hi-fi refinement", status: "Working, manual trigger", where: "Figma, full tokens and states" },
            { stage: "5", title: "Design critique", status: "Designed, not built", where: "Figma, layered annotations" },
          ].map((s) => (
            <div key={s.stage} className={`flex-1 rounded-[0.28vw] max-lg:rounded-[4px] px-[1.39vw] max-lg:px-4 py-[1.39vw] max-lg:py-4 flex flex-col gap-[0.56vw] max-lg:gap-2 ${s.status === "Shipped" ? "bg-[#f2efe8]" : "bg-[#f8f6f2]"}`}>
              <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-semibold text-[#888] tracking-[0.092vw]">
                STAGE {s.stage}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-semibold text-[#555]">{s.title}</p>
              <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#888]">{s.where}</p>
              <span
                className="font-sans text-[0.62vw] max-lg:text-[9px] font-semibold tracking-[0.06em] self-start px-[0.56vw] max-lg:px-2 py-[0.21vw] max-lg:py-0.5 rounded-full"
                style={{
                  color: s.status === "Shipped" ? "#2d6a4f" : "#888",
                  backgroundColor: s.status === "Shipped" ? "#d4edda" : "#e9e9e9",
                }}
              >
                {s.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── OUTCOME ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          OUTCOME
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          45 minutes down to{" "}
          <span className="font-semibold" style={{ color: accent }}>90 seconds.</span>
        </h2>

        <div className="flex max-lg:flex-wrap gap-[2.22vw] max-lg:gap-6 mt-[2.78vw]">
          {[
            { value: "−97%", label: "Intake time reduced from 45 minutes of reading and interpreting to 90 seconds reading a structured brief." },
            { value: "60s", label: "End-to-end pipeline time. One label triggers the full chain and delivers a brief plus edge case report." },
            { value: "4", label: "Blocking edge cases surfaced on the first well-specified ticket, with recommendations. None had been considered." },
            { value: "0", label: "Prompts required. The PM adds a label. The designer opens an email. Nobody invokes anything." },
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
              FOR THE DESIGNER
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Consistent intake quality that does not vary with energy or domain familiarity. Newer designers get the same scaffolding a senior designer would have built by hand.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR THE BUSINESS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Interpretation becomes inspectable. The brief is an artifact PM and engineering can read and correct, which moves disagreement forward in the process. The head of design asked to see it. It is now in discussion for org-wide rollout.
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
          What building with AI{" "}
          <span className="font-semibold" style={{ color: accent }}>actually taught me.</span>
        </h2>
        <div className="flex flex-col gap-[1.11vw] max-lg:gap-4 mt-[1.67vw] font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw]">
          <p>
            <span className="font-semibold">Purpose-built beats general-purpose.</span> The most powerful tool I evaluated was a chat interface that could do all of this and more. It was the wrong answer, because capability that requires the user to show up and prompt well is capability most people never collect.
          </p>
          <p>
            <span className="font-semibold">Five things half-working is worse than one thing working.</span> I designed the full pipeline before I built any of it, which was right. Then I tried to build all of it at once, which was wrong. Ambitious architecture and incremental delivery are not in conflict, but I had to fail at the second one to learn that.
          </p>
          <p>
            <span className="font-semibold">A loud failure beats a quiet assumption.</span> Refusing to answer is a design decision, and here it is usually the right one. Most of the trust this system earned came from the times it declined to produce something.
          </p>
          <p>
            <span className="font-semibold">AI&rsquo;s job here is removing scaffolding, not producing design.</span> Nothing in this system replaces design judgment. It removes the mechanical work that happens before creative judgment begins, and the handoff between the two is the most important part of the system.
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
            href="/work/workplace-solutions"
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
