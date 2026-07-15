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

/* ── Permissions matrix data ── */
const roles = [
  { name: "Cause Researcher", people: "Adam, Gracie, Kaitlyn", access: [true, true, true, false, false, false] },
  { name: "Cause Validator", people: "Jiaqi, Pratik", access: [false, false, true, true, false, false] },
  { name: "Data Monitor", people: "Dan S", access: [false, false, true, false, true, false] },
  { name: "Cause Implementer", people: "Alexa & Engineering", access: [false, false, true, false, false, true] },
  { name: "Cause Tester", people: "Alexa & Engineering", access: [false, false, true, false, true, false] },
];
const permHeaders = ["BUILD", "EDIT", "VIEW", "APPROVE", "MONITOR", "PUBLISH"];

export default function ESGPage() {
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
          03 / 04 &middot; JP MORGAN CHASE &amp; CO &middot; NEW PRODUCT
          &middot; WEB &middot; B2E &middot; B2C
        </motion.p>

        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[0.56vw] max-lg:mt-1"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Specification Workbench
        </motion.h1>
      </div>

      <div className="px-[3.33vw] max-lg:px-5">
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/esg-heroshot.png"
            alt="Specification Workbench -Methodology Builder"
            width={5376}
            height={3648}
            className="shimmer w-full h-auto object-contain pointer-events-none"
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
            { label: "ROLE", value: "Product Designer · Researcher" },
            { label: "STATUS", value: "HiFi vision shipped" },
            { label: "SCOPE", value: "Systems design · IA" },
            { label: "YEAR", value: "2025" },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex-1 max-lg:flex-none ${i < arr.length - 1 ? "border-r max-lg:border-r-0 border-[#d9d9d9] pr-[1.39vw] max-lg:pr-0 mr-[1.39vw] max-lg:mr-0" : ""}`}
            >
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
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          PROBLEM
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Three tools.{" "}
          <span className="font-semibold text-[#9c4221]">All opaque.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The research team built methodologies, the logic that scores
          companies against causes like gender equity or climate, in
          three separate tools, each built by researchers for their own workflow.
          All worked. All were opaque: legible only to the people who built
          them. Every methodology that lived inside an opaque tool was a
          dependency on the person who built it.
        </p>

        <div className="mt-[2.22vw]">
          <div className="bg-[#f5f0e8] rounded-[0.83vw] max-lg:rounded-[8px] overflow-hidden">
            <ShimmerImage
              src="/images/esg-opaque-tools-diagram.png"
              alt="Three opaque tools diagram -inputs, sealed methodology hub, and downstream outputs"
              width={5376}
              height={1920}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="93vw"
            />
          </div>
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.39vw] max-lg:mt-3">
            WHAT RESEARCHERS ACTUALLY SAW: many inputs, many outputs, and a
            sealed hub in the middle. Methodologies were authored, versioned, and
            consumed across the system, but the logic inside the hub stayed
            legible only to the people who built it.
          </p>
        </div>

        {/* Brief reframe + explanation */}
        <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[2.78vw] max-lg:mt-6">
          {/* Left: brief card */}
          <div className="shrink-0 w-[44.24vw] max-lg:w-full">
            <div
              className="bg-white border border-[#bbb] rounded-[0.28vw] max-lg:rounded-[4px] px-[3.33vw] max-lg:px-5 py-[2.78vw] max-lg:py-5 flex flex-col gap-[1.67vw] max-lg:gap-4"
              style={{
                boxShadow: "0px 8px 24px -2px rgba(51,42,26,0.08)",
              }}
            >
              <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#888] tracking-[0.104vw]">
                PROJECT BRIEF: DRAFT 01 &nbsp;&nbsp;/&nbsp;&nbsp; INTERNAL
                TOOLING TEAM
              </p>
              <div className="h-px bg-[#ddd] w-full" />
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
                GOAL
              </p>
              <p className="font-sans text-[1.94vw] max-lg:text-[18px] font-normal text-[#888] leading-[1.35] line-through">
                Streamline the workflow for the research team.
              </p>
              <div className="flex items-center gap-[0.83vw] max-lg:gap-2">
                <span className="font-sans text-[1.11vw] max-lg:text-[14px] text-[#9c4221]">
                  &darr;
                </span>
                <span className="font-sans text-[0.69vw] max-lg:text-[10px] font-semibold text-[#9c4221] tracking-[0.139vw]">
                  REFRAMED
                </span>
              </div>
              <p className="font-sans text-[1.94vw] max-lg:text-[18px] font-semibold text-[#9c4221] leading-[1.35]">
                Build a methodology platform clients can trust.
              </p>
              <p className="font-sans text-[0.9vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.6]">
                One sentence change. Same project, same team, same code, but the
                audience expanded from researchers to clients, and that single
                shift defined every design decision that followed.
              </p>
            </div>
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
              HOW THE BRIEF WAS REFRAMED: what arrived as an internal-tooling
              project left as a client-facing platform commitment. The reframe
              didn&rsquo;t change the work, only its intended audience.
            </p>
          </div>

          {/* Right: explanation */}
          <div className="flex-1 flex flex-col gap-[1.11vw]">
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              The original ask was to merge the three tools into one and make
              them usable. An internal-efficiency project. As I went deeper into
              the work, a second use case in the brief, &ldquo;support advisors
              and sales teams to understand and analyze the impact of
              methodologies against a portfolio,&rdquo; kept getting larger.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              It had been listed as a footnote under monitoring and audit. I
              argued it should be a design driver.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              A tool that makes methodologies transparent to internal users is,
              with the right design, also a tool that makes methodologies
              transparent to clients. The same logic that helps a researcher
              reason about a methodology helps a salesperson explain it on a
              pitch. One tool, designed for transparency at scale, could turn an
              internal-efficiency project into a sales asset.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.5]">
              That reframing shaped every decision that followed.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── CHALLENGES ── */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          CHALLENGES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          The tool wasn&rsquo;t{" "}
          <span className="font-semibold text-[#9c4221]">the hard part.</span>
        </h2>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              DOMAIN
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Spent weeks learning what a methodology actually is before
              touching Figma. How raw attributes feed into derived attributes,
              how those compose into methodologies, how scores surface to
              clients. The math underneath the work.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              ECOSYSTEM
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              Specification Workbench wasn&rsquo;t standalone. Data flowed in
              from multiple databases. Methodologies flowed out to client-facing
              products and advisor tools. Every design decision had to account
              for upstream sources and downstream consumers.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              AUDIENCES
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              One tool had to serve researchers building methodologies,
              validators approving them, monitors tracking data quality, and
              eventually advisors and clients reading them. Same workspace,
              different permissions, different mental models.
            </p>
          </div>
        </div>

        {/* Recursive questions */}
        <div className="mt-[2.78vw] max-lg:mt-6">
          {[
            {
              label: "Q.01",
              question:
                "What happens when a methodology composes other methodologies?",
              status: "SURFACED · ARCHITECTED FOR ·",
              statusGreen: true,
              deferred: " DEFERRED TO V2",
            },
            {
              label: "Q.02",
              question:
                "What happens when the same metric appears in two different parts of one methodology?",
              status: "RESOLVED IN DESIGN · VISIBLE IN THE BUILDER",
              statusGreen: true,
            },
            {
              label: "Q.03",
              question:
                "How does a methodology travel downstream once published: what does the advisor tool need from it, what does the client tool need?",
              status: "MAPPED AT THE SYSTEM LEVEL ·",
              statusGreen: true,
              deferred: " SCREENS SCOPED FOR NEXT PHASE",
            },
            {
              label: "Q.04",
              question:
                "Where does each attribute come from, and which database owns it?",
              status:
                "MAPPED IN THE ECOSYSTEM DIAGRAM · INFORMED EVERY IA DECISION",
              statusGreen: true,
            },
          ].map((q, i) => (
            <div key={q.label}>
              <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-2 py-[1.67vw] max-lg:py-4">
                <div className="shrink-0 w-[11.11vw] max-lg:w-full">
                  <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555] tracking-[0.139vw]">
                    {q.label}
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-[0.83vw] max-lg:gap-2">
                  <p className="font-sans text-[1.39vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.45]">
                    {q.question}
                  </p>
                  <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal tracking-[0.104vw]">
                    <span className="text-[#0aa61f]">{q.status}</span>
                    {q.deferred && (
                      <span className="text-[#888]">{q.deferred}</span>
                    )}
                  </p>
                </div>
              </div>
              {i < 3 && <div className="h-px bg-[#bbb] w-full" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[1.11vw] mt-[2.22vw]">
          <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
            These weren&rsquo;t UX questions. They were system questions, and
            the answers shaped what the tool could even represent. Some I
            resolved in design. Others I surfaced and flagged for a later phase.
            All of them shaped the final shape.
          </p>
          <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
            This is the part of senior design that doesn&rsquo;t show up in
            screenshots: the willingness to slow down at the start, ask
            questions that look basic, and refuse to design until the domain is
            legible.
          </p>
        </div>

        {/* Journey map */}
        <div className="mt-[2.22vw]">
          <div className="rounded-[0.83vw] max-lg:rounded-[8px] overflow-hidden">
            <ShimmerImage
              src="/images/esg-journey-map.jpg"
              alt="User journey map -user steps, actions, goals, feelings, pain points, and opportunities across five lifecycle stages"
              width={5376}
              height={2927}
              className="w-full h-auto object-contain pointer-events-none"
              sizes="93vw"
            />
          </div>
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
            CRITICAL USER JOURNEY MAP: the synthesis of the recursive questions.
            User actions, goals, feelings, pain points, and opportunities mapped
            across five lifecycle stages, from awareness through loyalty.
          </p>
        </div>

        {/* Ecosystem diagram */}
        <div className="bg-[#f5f0e8] rounded-[1.11vw] max-lg:rounded-[8px] p-[3.33vw] max-lg:p-5 flex max-lg:flex-col items-center justify-center gap-[2.22vw] max-lg:gap-4 mt-[2.78vw] max-lg:mt-6">
          {/* UPSTREAM */}
          <div className="shrink-0 w-[19.44vw] max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
              UPSTREAM: DATA SOURCES
            </p>
            {[
              { title: "Market Data", sub: "equileap · rep risk · refinitiv" },
              {
                title: "Reference Data",
                sub: "issuer · jid · classifications",
              },
              { title: "Client Data", sub: "portfolios · benchmarks" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#faf6ee] border border-[#bbb] rounded-[0.56vw] max-lg:rounded-[6px] px-[1.39vw] max-lg:px-4 py-[1.11vw] max-lg:py-3 flex flex-col gap-[0.42vw]"
              >
                <p className="font-sans text-[0.9vw] max-lg:text-[14px] font-semibold text-[#9c4221]">
                  {item.title}
                </p>
                <p className="font-sans text-[0.76vw] max-lg:text-[12px] font-normal text-[#888] tracking-[0.035vw]">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <span className="font-sans text-[1.67vw] max-lg:text-[20px] text-[#888] max-lg:rotate-90">
            &rarr;
          </span>

          {/* CENTER: Workbench */}
          <div className="shrink-0 w-[19.44vw] max-lg:w-full h-[13.89vw] max-lg:h-auto max-lg:py-8 bg-[#1a1a1f] rounded-[0.83vw] max-lg:rounded-[8px] flex flex-col items-center justify-center gap-[0.56vw]">
            <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#bbb] tracking-[0.104vw]">
              SPECIFICATION WORKBENCH
            </p>
            <p className="font-sans text-[1.53vw] max-lg:text-[16px] font-normal text-[#fffaf0]">
              Build &middot; Test &middot; Publish
            </p>
          </div>

          <span className="font-sans text-[1.67vw] max-lg:text-[20px] text-[#888] max-lg:rotate-90">
            &rarr;
          </span>

          {/* DOWNSTREAM */}
          <div className="shrink-0 w-[19.44vw] max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
              DOWNSTREAM: CONSUMERS
            </p>
            {[
              {
                title: "Advisor Tools",
                sub: "portfolio analysis · proposals",
              },
              { title: "Client Apps", sub: "cause filtering · scoring" },
              { title: "Audit Layer", sub: "controls · compliance" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#faf6ee] border border-[#bbb] rounded-[0.56vw] max-lg:rounded-[6px] px-[1.39vw] max-lg:px-4 py-[1.11vw] max-lg:py-3 flex flex-col gap-[0.42vw]"
              >
                <p className="font-sans text-[0.9vw] max-lg:text-[14px] font-semibold text-[#9c4221]">
                  {item.title}
                </p>
                <p className="font-sans text-[0.76vw] max-lg:text-[12px] font-normal text-[#888] tracking-[0.035vw]">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
          REAL TOOLING STRUCTURE: actual users, actual tools, actual data flows.
          EQET tests attributes; Chassis hosts methodologies and reports. Two
          user paths (Research team, C-VAR / reporting). The ecosystem the
          workbench sits inside.
        </p>
      </motion.div>

      {/* ── SOLUTIONS ── */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          SOLUTIONS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          From three opaque tools to{" "}
          <span className="font-semibold text-[#9c4221]">
            one transparent system.
          </span>
        </h2>
      </motion.div>

      {/* Solution: Before -the three original tools */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          BEFORE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          The three original tools
        </p>
        <div className="flex max-lg:flex-col gap-[1.11vw] max-lg:gap-3 mt-[2.22vw]">
          <div className="flex-1 rounded-[0.56vw] max-lg:rounded-[6px] overflow-hidden relative bg-white" style={{ aspectRatio: "9 / 5" }}>
            <ShimmerImage
              src="/images/esg-before-tool-1.png"
              alt="Original tool 1 - Methodologies table view with specification names, codes, categories, and statuses"
              fill
              className="shimmer object-contain object-top pointer-events-none"
              sizes="30vw"
            />
          </div>
          <div className="flex-1 rounded-[0.56vw] max-lg:rounded-[6px] overflow-hidden relative bg-[#ececf3]" style={{ aspectRatio: "9 / 5" }}>
            <ShimmerImage
              src="/images/esg-before-tool-2.png"
              alt="Original tool 2 - Equity Exploration Tool with ranges, exclusions, data coverage, and threshold controls"
              fill
              className="shimmer object-contain pointer-events-none"
              sizes="30vw"
            />
          </div>
          <div className="flex-1 rounded-[0.56vw] max-lg:rounded-[6px] overflow-hidden relative bg-[#f4f4f4]" style={{ aspectRatio: "9 / 5" }}>
            <ShimmerImage
              src="/images/esg-before-tool-3.png"
              alt="Original tool 3 - Methodology Oversight Tool with approval workflows and status tracking"
              fill
              className="shimmer object-contain pointer-events-none"
              sizes="30vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Solution: Low fidelity */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          LOW FIDELITY
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Early explorations
        </p>
        <div
          className="mt-[2.22vw] bg-[#f5f0e8] rounded-[0.83vw] max-lg:rounded-[8px] flex items-center justify-center"
          style={{ aspectRatio: "16 / 9" }}
        >
          <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#bbb] tracking-[0.069vw]">
            LOW-FIDELITY EXPLORATIONS · IMAGE PLACEHOLDER
          </p>
        </div>
      </motion.div>

      {/* Solution: One workspace */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          ONE WORKSPACE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Three tools merged into one
        </p>
        <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[1.67vw]">
          <div className="flex-1 flex flex-col gap-[1.11vw]">
            <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw]">
              Building a methodology and testing it against real portfolios
              happen in the same view. The Analyze panel sits to the right of
              the builder, with portfolio comparison, statistical overlays, and
              security-level breakdowns visible without leaving the canvas.
            </p>
            <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.5] tracking-[-0.013vw]">
              Researchers can no longer build a methodology without seeing how
              it tests.
            </p>
          </div>
          <div className="shrink-0 w-[21.94vw] max-lg:w-full">
            <ShimmerImage
              src="/images/esg-analyze-panel.png"
              alt="Analyze panel -portfolio comparison, chart overlays, and security-level breakdowns"
              width={1302}
              height={2388}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="22vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Solution: Visual builder */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          THE BUILDER
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          A visual builder for non-visual logic
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          A node-based composition tree. A methodology sits at the top. Derived
          attributes branch from it. Raw attributes from market data feed into
          the derived attributes. The structure expresses how researchers
          actually think about methodologies: not as forms or filters, but as
          compositions.
        </p>

        <div className="mt-[2.22vw] rounded-[0.83vw] max-lg:rounded-[8px] overflow-hidden">
          <ShimmerImage
            src="/images/esg-builder-canvas.png"
            alt="Specification Workbench -full builder canvas with node-based composition tree"
            width={5376}
            height={3584}
            className="shimmer w-full h-auto object-contain pointer-events-none"
            sizes="93vw"
          />
        </div>
      </motion.div>

      {/* Solution: Three views */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          THREE VIEWS
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Same data, three mental models
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          The same methodology can be read as a tree (for building), a table
          (for previewing data), and a horizontal book view (for reading as
          structure). Researchers, advisors, and auditors don&rsquo;t all read a
          methodology the same way.
        </p>

        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-6 mt-[2.22vw]">
          {[
            {
              img: "/images/esg-view-tree.png",
              alt: "Tree view -full composition structure of MDA Women Leaders methodology with three derived attributes",
              desc: "Default. For building and reasoning about composition.",
            },
            {
              img: "/images/esg-view-table.png",
              alt: "Table view -issuers scored against methodology attributes",
              desc: "For previewing the actual data each attribute contributes.",
            },
            {
              img: "/images/esg-view-book.png",
              alt: "Book view -methodology as a horizontal flow from raw attributes to derived attributes",
              desc: "For reading the methodology as a structure, not a workflow.",
            },
          ].map((view) => (
            <div key={view.alt} className="flex-1 flex flex-col">
              <div className="h-[17vw] max-lg:h-auto flex items-start justify-center">
                <ShimmerImage
                  src={view.img}
                  alt={view.alt}
                  width={1728}
                  height={960}
                  className="shimmer w-full h-full object-contain object-top pointer-events-none"
                  sizes="30vw"
                />
              </div>
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
                {view.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Solution: Formula transparency */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          TRANSPARENCY
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Formula visibility, on demand
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          A toggle surfaces the actual formulas on each derived attribute,
          inline in the tree. Off, the methodology reads cleanly enough for a
          client. On, it exposes the math for a researcher who needs to verify.
        </p>

        <div className="flex max-lg:flex-col gap-[2.22vw] max-lg:gap-6 mt-[2.22vw]">
          <div className="flex-1 flex flex-col gap-[1.11vw] max-lg:gap-3">
            <div className="flex items-center gap-[0.56vw] max-lg:gap-2">
              <span className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
                TOGGLE
              </span>
              <span className="bg-[#ebebed] rounded-[0.28vw] max-lg:rounded-[4px] px-[0.56vw] max-lg:px-2 py-[0.14vw] max-lg:py-0.5 font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.104vw]">
                OFF
              </span>
              <span className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
                - FOR CLIENTS
              </span>
            </div>
            <ShimmerImage
              src="/images/esg-toggle-off.png"
              alt="Toggle OFF -clean tree view without formulas, suitable for client presentations"
              width={1944}
              height={832}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="45vw"
            />
          </div>

          <div className="flex-1 flex flex-col gap-[1.11vw] max-lg:gap-3">
            <div className="flex items-center gap-[0.56vw] max-lg:gap-2">
              <span className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
                TOGGLE
              </span>
              <span className="bg-[#0aa61f] rounded-[0.28vw] max-lg:rounded-[4px] px-[0.56vw] max-lg:px-2 py-[0.14vw] max-lg:py-0.5 font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-white tracking-[0.104vw]">
                ON
              </span>
              <span className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
                - FOR RESEARCHERS
              </span>
            </div>
            <ShimmerImage
              src="/images/esg-toggle-on.png"
              alt="Toggle ON -tree view with formulas visible for researcher verification"
              width={1940}
              height={968}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="45vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Solution: Access */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          ACCESS
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          One tool for everyone
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          Permissioning handled silently in the backend. Researchers see and
          edit. Advisors and auditors see only what they need. No mode switch, no
          role toggle, no separate interface.
        </p>

        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw] mt-[2.22vw]">
          ACCESS MATRIX: five roles, one workspace. What each can do, what each
          can see.
        </p>

        <div className="mt-[1.11vw] max-lg:overflow-x-auto max-lg:pb-4 max-lg:-mx-5 max-lg:px-5">
          <div className="max-lg:min-w-[600px]">
            <div className="flex items-center border-b-[0.1vw] max-lg:border-b border-[#555] pb-[0.83vw] max-lg:pb-3 pt-[1.11vw]">
              <div className="shrink-0 w-[19.44vw] max-lg:w-[140px]">
                <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#888] tracking-[0.104vw]">
                  ROLE
                </p>
              </div>
              {permHeaders.map((h) => (
                <div key={h} className="flex-1 text-center">
                  <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#888] tracking-[0.104vw]">
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {roles.map((role, i) => (
              <div
                key={role.name}
                className={`flex items-center py-[1.39vw] max-lg:py-3 ${i < roles.length - 1 ? "border-b border-[#bbb]" : ""}`}
              >
                <div className="shrink-0 w-[19.44vw] max-lg:w-[140px]">
                  <p className="font-sans text-[1.04vw] max-lg:text-[14px] font-semibold text-[#555]">
                    {role.name}
                  </p>
                  <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#888]">
                    {role.people}
                  </p>
                </div>
                {role.access.map((hasAccess, j) => (
                  <div key={j} className="flex-1 flex justify-center">
                    <div
                      className={`w-[1.39vw] max-lg:w-[16px] h-[1.39vw] max-lg:h-[16px] rounded-full border-[0.14vw] max-lg:border-[2px] ${
                        hasAccess
                          ? "bg-[#9c4221] border-[#9c4221]"
                          : "bg-transparent border-[#ccc]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-[1.67vw] max-lg:gap-4 mt-[1.11vw]">
          <div className="flex items-center gap-[0.56vw] max-lg:gap-2">
            <div className="w-[1.39vw] max-lg:w-[16px] h-[1.39vw] max-lg:h-[16px] rounded-full bg-[#9c4221]" />
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.069vw]">
              Has access
            </p>
          </div>
          <div className="flex items-center gap-[0.56vw] max-lg:gap-2">
            <div className="w-[1.39vw] max-lg:w-[16px] h-[1.39vw] max-lg:h-[16px] rounded-full border-[0.14vw] max-lg:border-[2px] border-[#ccc]" />
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.069vw]">
              No access
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── OUTCOMES ── */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          OUTCOMES
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Vision shipped.{" "}
          <span className="font-semibold text-[#9c4221]">
            Roadmap shifted.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The project was deprioritized in a roadmap shift before build. The
          artifact of value is the thinking, the system, and the high-fidelity
          vision, not a shipped product.
        </p>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.22vw]">
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR THE TEAM
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              A unified workspace that replaces three siloed tools.
              Methodologies become legible, transferable, and auditable. No more
              single-person dependencies.
            </p>
          </div>
          <div className="bg-[#f2efe8] rounded-[0.28vw] max-lg:rounded-[4px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR THE PLATFORM
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              The same transparency that helps a researcher reason about a
              methodology helps a salesperson explain it on a pitch. Internal
              tool and client-facing asset, in one system.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── LEARNINGS ── */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          LEARNINGS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          What systems design{" "}
          <span className="font-semibold text-[#9c4221]">taught me.</span>
        </h2>
        <div className="flex flex-col gap-[1.11vw] max-lg:gap-4 mt-[1.67vw] font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw]">
          <p>
            <span className="font-semibold">
              Domain depth is a design skill.
            </span>{" "}
            I spent weeks interviewing the research team, reading documentation,
            and asking questions I didn&rsquo;t yet know were the right ones.
            Every design decision that followed was shaped by that early
            investment. You cannot design a system you haven&rsquo;t learned to
            read.
          </p>
          <p>
            <span className="font-semibold">
              Design for the edge case, then hide it.
            </span>{" "}
            The upstream pipeline and downstream dependencies stayed invisible
            to the researcher building a methodology. Most users live in the
            default tree view. The other views, the formula toggle, the access
            model, all there for the moments they&rsquo;re needed, hidden
            until then.
          </p>
          <p>
            <span className="font-semibold">
              What I&rsquo;d do differently:
            </span>{" "}
            Researchers were the direct users. Advisors and clients
            weren&rsquo;t, but the reframe bet that they could
            potentially leverage the same tool. I designed for that bet using
            internal logic instead of talking to them directly. I would have
            validated earlier. Even one session watching an advisor explain a
            methodology to a client would have surfaced transparency gaps I had
            to infer on my own.
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
            href="/work/deep-purple"
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
