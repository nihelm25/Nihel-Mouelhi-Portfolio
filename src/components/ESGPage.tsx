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
          CASE STUDY, 03 &middot; 2025 &middot; PRODUCT DESIGNER &middot; B2E
          &middot; B2C
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[1.39vw]"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Specification Workbench
        </motion.h1>

        {/* Hero browser frame */}
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/esg-heroshot.png"
            alt="Specification Workbench — Methodology Builder"
            width={5376}
            height={3648}
            className="shimmer w-full h-auto object-contain pointer-events-none"
            sizes="93vw"
            priority
          />
        </motion.div>

        {/* Hero bottom row: meta + intro */}
        <motion.div
          className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[2.78vw]"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Left: meta column */}
          <div className="w-[25.63vw] max-lg:w-full shrink-0 flex flex-col gap-[1.94vw] max-lg:gap-4">
            {[
              { label: "COMPANY", value: "OpenInvest at J.P. Morgan Chase" },
              { label: "ROLE", value: "Product designer (team of 8)" },
              {
                label: "STATUS",
                value:
                  "Shipped as high-fidelity vision; deprioritized in roadmap shift before build.",
              },
              {
                label: "DISCIPLINE",
                value: "Systems design · IA · UX architecture",
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
              A unified workspace for building, testing, and publishing the
              financial methodologies that power downstream client and advisor
              products.{" "}
              <span className="font-semibold">
                Two opaque internal tools, consolidated into one transparent
                system.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          01 / WHAT EXISTED
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          01 / WHAT EXISTED
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Two tools.{" "}
          <span className="font-semibold text-[#9c4221]">Both opaque.</span>
        </h2>
        <p className="font-sans text-[1.39vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Before this project, the research team built methodologies in two
          separate tools: one for creation, one for testing. Both worked. Both
          were built by researchers, for researchers, in a form only their
          authors could navigate.
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.11vw]">
          The cost wasn&rsquo;t just inconvenience. Methodologies are how
          OpenInvest expresses its values in code: the logic that scores
          companies against causes like gender equity, climate, or LGBTQIA+
          representation. They feed downstream into the client-facing products
          and advisor tools that JPMC&rsquo;s customers actually use.
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.11vw]">
          Every methodology that lived inside an opaque tool was a dependency on
          the person who built it: to update it, audit it, explain it, or evolve
          it.
        </p>

        {/* Opaque tools diagram */}
        <div className="mt-[2.22vw]">
          <div className="bg-[#f5f0e8] rounded-[0.83vw] max-lg:rounded-[8px] overflow-hidden">
            <ShimmerImage
              src="/images/esg-opaque-tools-diagram.png"
              alt="Two opaque tools diagram — inputs, sealed methodology hub, and downstream outputs"
              width={5376}
              height={2112}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="93vw"
            />
          </div>
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
            WHAT RESEARCHERS ACTUALLY SAW: many inputs, many outputs, and a
            sealed hub in the middle. Methodologies were authored, versioned, and
            consumed across the system, but the logic inside the hub stayed
            legible only to the people who built it.
          </p>
        </div>

        {/* Pull quote */}
        <div className="border-l-[0.21vw] max-lg:border-l-[2px] border-[#bbb] pl-[2.22vw] max-lg:pl-5 py-[1.67vw] max-lg:py-4 mt-[2.22vw]">
          <p className="font-sans text-[2.22vw] max-lg:text-[16px] font-normal text-[#555] leading-[1.35]">
            &ldquo;The same opacity that made the tools fast for their authors
            made the entire methodology layer fragile for everyone else.&rdquo;
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          02 / THE REFRAME
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          02 / THE REFRAME
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          <span className="font-semibold text-[#9c4221]">From</span> internal
          tool{" "}
          <span className="font-semibold text-[#9c4221]">to</span> sales asset.
        </h2>

        {/* Two-column: brief excerpt + body */}
        <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[2.22vw]">
          {/* Left: brief excerpt card */}
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

          {/* Right: body column */}
          <div className="flex-1 flex flex-col gap-[1.11vw]">
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              The original ask was to merge the two tools into one and make them
              usable. An internal-efficiency project. As I went deeper into the
              work, a second use case in the brief, &ldquo;support advisors and
              sales teams to understand and analyze the impact of methodologies
              against a portfolio,&rdquo; kept getting larger.
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

      {/* ═══════════════════════════════════════════════════
          03 / DOMAIN
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          03 / DOMAIN
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-semibold text-[#9c4221] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          The hardest part wasn&rsquo;t designing.
        </h2>
        <p className="font-sans text-[1.67vw] max-lg:text-[16px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          It was learning what a methodology actually is.
        </p>

        {/* Two-column: text + computational graph */}
        <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[1.67vw]">
          <div className="flex-1 flex flex-col gap-[1.11vw]">
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              I spent the early weeks of the project not designing. I
              interviewed the research team, read their internal documentation,
              watched demos of the existing tools. I asked questions I
              didn&rsquo;t yet know were the right ones.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              I learned the math underneath the work: how raw attributes from
              market data feed into derived attributes, how derived attributes
              compose into methodologies, how methodologies score companies
              against causes, and how those scores eventually surface to a
              client looking at a portfolio.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              The questions that mattered most were the recursive ones.
            </p>
          </div>

          {/* Computational graph */}
          <div className="shrink-0 w-[29.17vw] max-lg:w-full">
            <div className="rounded-[0.56vw] max-lg:rounded-[6px] overflow-hidden">
              <ShimmerImage
                src="/images/esg-computational-graph.png"
                alt="Computational graph — how raw market data flows through three stages to become derived attributes and methodologies"
                width={1680}
                height={1052}
                className="shimmer w-full h-auto object-contain pointer-events-none"
                sizes="29vw"
              />
            </div>
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
              COMPUTATIONAL GRAPH: how raw market data becomes derived
              attributes, derived attributes become methodologies, methodologies
              become scores. The math underneath the work.
            </p>
          </div>
        </div>

        {/* Recursive questions block */}
        <div className="mt-[2.22vw]">
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

        {/* Outro body */}
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
              alt="User journey map — user steps, actions, goals, feelings, pain points, and opportunities across five lifecycle stages"
              width={5376}
              height={2927}
              className="w-full h-auto object-contain pointer-events-none"
              sizes="93vw"
            />
          </div>
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[1.11vw]">
            CRITICAL USER JOURNEY MAP: the synthesis of the recursive questions.
            User actions, goals, feelings, pain points, and opportunities mapped
            across five lifecycle stages &mdash; from awareness through loyalty.
            What came out of asking the questions above.
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          04 / SYSTEM
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          04 / SYSTEM
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          A{" "}
          <span className="font-semibold text-[#9c4221]">node</span> in a{" "}
          <span className="font-semibold text-[#9c4221]">larger system</span>.
        </h2>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          Specification Workbench wasn&rsquo;t a standalone tool. Data flowed in
          from multiple databases. Methodologies flowed out to client-facing
          products and advisor tools. Every methodology built in Workbench was a
          contract with downstream consumers about how it would behave, what it
          would expose, and how it would be interpreted.
        </p>

        {/* Ecosystem diagram */}
        <div className="bg-[#f5f0e8] rounded-[1.11vw] max-lg:rounded-[8px] p-[3.33vw] max-lg:p-5 flex max-lg:flex-col items-center justify-center gap-[2.22vw] max-lg:gap-4 mt-[2.22vw]">
          {/* UPSTREAM */}
          <div className="shrink-0 w-[19.44vw] max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
              UPSTREAM: DATA SOURCES
            </p>
            {[
              { title: "Market Data", sub: "equileap · rep risk · refinitiv" },
              { title: "Reference Data", sub: "issuer · jid · classifications" },
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

          {/* Arrow */}
          <span className="font-sans text-[1.67vw] max-lg:text-[20px] text-[#888] max-lg:rotate-90">&rarr;</span>

          {/* CENTER: Workbench */}
          <div className="shrink-0 w-[19.44vw] max-lg:w-full h-[13.89vw] max-lg:h-auto max-lg:py-8 bg-[#1a1a1f] rounded-[0.83vw] max-lg:rounded-[8px] flex flex-col items-center justify-center gap-[0.56vw]">
            <p className="font-sans text-[0.69vw] max-lg:text-[10px] font-normal text-[#bbb] tracking-[0.104vw]">
              SPECIFICATION WORKBENCH
            </p>
            <p className="font-sans text-[1.53vw] max-lg:text-[16px] font-normal text-[#fffaf0]">
              Build &middot; Test &middot; Publish
            </p>
          </div>

          {/* Arrow */}
          <span className="font-sans text-[1.67vw] max-lg:text-[20px] text-[#888] max-lg:rotate-90">&rarr;</span>

          {/* DOWNSTREAM */}
          <div className="shrink-0 w-[19.44vw] max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
              DOWNSTREAM: CONSUMERS
            </p>
            {[
              { title: "Advisor Tools", sub: "portfolio analysis · proposals" },
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

        {/* Outro body */}
        <div className="flex flex-col gap-[1.11vw] mt-[2.22vw]">
          <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
            Designing for that ecosystem meant understanding it. I mapped where
            each piece of data came from, which database owned it, how
            methodologies would be integrated into the final products, and what
            dependencies existed across the chain. The user never saw any of
            this.{" "}
            <span className="font-semibold">
              But every design decision was shaped by it.
            </span>
          </p>
          <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
            This is one expression of a principle I design by:{" "}
            <span className="font-semibold">
              design for the edge case, then hide it
            </span>
            . The complexity of the upstream pipeline and the downstream
            dependencies stayed invisible to the researcher building a
            methodology. It was carried by the design.
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          05 / DESIGN
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          05 / DESIGN
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          The{" "}
          <span className="font-semibold text-[#9c4221]">translation</span>.
        </h2>
        <p className="font-sans text-[1.67vw] max-lg:text-[16px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          Once the domain and the ecosystem were legible, the design started to
          take shape.
        </p>
      </motion.div>

      {/* ── 5.1 / One workspace, not two ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8" {...fadeUp}>
        <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555] tracking-[0.139vw]">
          5.1
        </p>
        <h3 className="font-sans text-[2.22vw] max-lg:text-[20px] font-normal text-[#555] mt-[0.56vw]">
          <span className="font-semibold text-[#9c4221]">One workspace</span>,
          not two.
        </h3>
        {/* Two-column: body text + analyze panel */}
        <div className="flex max-lg:flex-col gap-[4.44vw] max-lg:gap-6 mt-[1.67vw]">
          <div className="flex-1 flex flex-col gap-[1.11vw]">
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              The merger of the two original tools wasn&rsquo;t architectural.
              It was experiential. Building a methodology and testing it against
              real portfolios happen in the same view.
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              The Analyze panel sits to the right of the builder, with portfolio
              comparison, statistical overlays, and security-level breakdowns
              visible without leaving the canvas.{" "}
              <span className="font-semibold">
                Researchers can no longer build a methodology without seeing how
                it tests.
              </span>
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
              The merger isn&rsquo;t named in the UI. It&rsquo;s the shape of
              the UI.
            </p>
          </div>
          <div className="shrink-0 w-[21.94vw] max-lg:w-full">
            <ShimmerImage
              src="/images/esg-analyze-panel.png"
              alt="Analyze panel — portfolio comparison, chart overlays, and security-level breakdowns"
              width={1302}
              height={2388}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="22vw"
            />
          </div>
        </div>
      </motion.div>

      {/* ── 5.2 / A visual builder ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8" {...fadeUp}>
        <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555] tracking-[0.139vw]">
          5.2
        </p>
        <h3 className="font-sans text-[2.22vw] max-lg:text-[20px] font-normal text-[#555] mt-[0.56vw]">
          A{" "}
          <span className="font-semibold text-[#9c4221]">visual builder</span>{" "}
          for non-visual logic.
        </h3>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          The core of the tool is a node-based composition tree. A methodology
          sits at the top. Derived attributes branch from it. Raw attributes
          from market data feed into the derived attributes.
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.11vw]">
          The structure expresses how researchers actually think about
          methodologies: not as forms or filters, but as compositions. A derived
          attribute like &ldquo;Women Leaders&rdquo; is built from raw inputs
          (&ldquo;Eq Pct Women Exec&rdquo; + &ldquo;Eq Female
          Empowerment&rdquo;); a methodology like &ldquo;MDA Women
          Leaders&rdquo; is built from one or more derived attributes; both can
          be reused, recomposed, and inspected. The example shown is
          illustrative, not the actual production calculation.
        </p>

        {/* Builder canvas screenshot */}
        <div className="mt-[2.22vw] rounded-[0.83vw] max-lg:rounded-[8px] overflow-hidden">
          <ShimmerImage
            src="/images/esg-builder-canvas.png"
            alt="Specification Workbench — full builder canvas with node-based composition tree"
            width={5376}
            height={3584}
            className="shimmer w-full h-auto object-contain pointer-events-none"
            sizes="93vw"
          />
        </div>
      </motion.div>

      {/* ── 5.3 / Three views ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8" {...fadeUp}>
        <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555] tracking-[0.139vw]">
          5.3
        </p>
        <h3 className="font-sans text-[2.22vw] max-lg:text-[20px] font-normal text-[#555] mt-[0.56vw]">
          <span className="font-semibold text-[#9c4221]">Three views</span> of
          one composition.
        </h3>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          The same methodology can be read in three ways: a tree (the default,
          for building and reasoning), a table (for previewing the data each
          attribute contributes), and a horizontal book view (for reading the
          methodology as a structure rather than a workflow).
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.11vw]">
          Same data, three mental models, because researchers, advisors, and
          auditors don&rsquo;t all read a methodology the same way.
        </p>

        {/* Three views row */}
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-6 mt-[2.22vw]">
          {[
            {
              img: "/images/esg-view-tree.png",
              alt: "Tree view — full composition structure of MDA Women Leaders methodology with three derived attributes",
              desc: "Default. For building and reasoning about composition.",
            },
            {
              img: "/images/esg-view-table.png",
              alt: "Table view — issuers scored against methodology attributes",
              desc: "For previewing the actual data each attribute contributes.",
            },
            {
              img: "/images/esg-view-book.png",
              alt: "Book view — methodology as a horizontal flow from raw attributes to derived attributes",
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

        {/* Closing note */}
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.5] mt-[2.22vw]">
          Design for the edge case, then hide it. Most users live in the
          default tree. The other views are there for the moments when
          they&rsquo;re needed.
        </p>
      </motion.div>

      {/* ── 5.4 / Formula transparency ── */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-8" {...fadeUp}>
        <p className="font-sans text-[0.83vw] max-lg:text-[12px] font-normal text-[#555] tracking-[0.139vw]">
          5.4
        </p>
        <h3 className="font-sans text-[2.22vw] max-lg:text-[20px] font-normal text-[#555] mt-[0.56vw]">
          <span className="font-semibold text-[#9c4221]">
            Formula transparency
          </span>
          , on demand.
        </h3>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          A toggle, Display Operations in this view, surfaces the actual
          formulas on each derived attribute, inline in the tree. Off, the
          methodology reads cleanly enough to put in front of a client. On, it
          exposes the math for a researcher who needs to verify or debug.
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.11vw]">
          <span className="font-semibold">
            Transparency is a feature, but so is calm.
          </span>{" "}
          Letting the user choose between them was the design decision.
        </p>

        {/* Toggle comparison */}
        <div className="flex max-lg:flex-col gap-[2.22vw] max-lg:gap-6 mt-[2.22vw]">
          {/* Toggle OFF */}
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
              alt="Toggle OFF — clean tree view without formulas, suitable for client presentations"
              width={1944}
              height={832}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="45vw"
            />
          </div>

          {/* Toggle ON */}
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
              alt="Toggle ON — tree view with formulas visible for researcher verification"
              width={1940}
              height={968}
              className="shimmer w-full h-auto object-contain pointer-events-none"
              sizes="45vw"
            />
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          06 / ACCESS
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          06 / ACCESS
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          <span className="font-semibold text-[#9c4221]">One tool</span> for
          everyone.
        </h2>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          The system was designed as one tool for everyone, with permissioning
          handled silently in the backend. Researchers see and edit. Advisors and
          auditors see only what they need to see.
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.11vw]">
          There is no mode switch, no role toggle, no separate interface. The
          same product accommodates whoever is looking at it. I designed the
          researcher experience in full; the access model was a system decision
          made with engineering, scoped to inform the architecture rather than
          produce additional screens.
        </p>

        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw] mt-[2.22vw]">
          ACCESS MATRIX: five roles, one workspace. What each can do, what each
          can see.
        </p>

        {/* Permissions matrix */}
        <div className="mt-[1.11vw] max-lg:overflow-x-auto max-lg:pb-4 max-lg:-mx-5 max-lg:px-5">
          <div className="max-lg:min-w-[600px]">
          {/* Header */}
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

          {/* Rows */}
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

        {/* Legend */}
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

      {/* ═══════════════════════════════════════════════════
          07 / OUTCOME
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10" {...fadeUp}>
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
          07 / OUTCOME
        </p>
        <h2 className="font-sans text-[3.06vw] max-lg:text-[24px] font-semibold text-[#9c4221] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          What happened. What&rsquo;s next.
        </h2>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.67vw]">
          The project was deprioritized in a roadmap shift before build. I moved
          to another team. The artifact of value is the thinking, the system,
          and the high-fidelity vision, not a shipped product.
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] mt-[1.11vw]">
          If the project came back, the work that would follow is clear:
        </p>

        {/* Next steps row */}
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-6 mt-[2.22vw]">
          {[
            {
              label: "NEXT · 01",
              title: "Recursive edge cases",
              body: "Methodology composition and internal metric duplication were architected for, but not visualized. Their own design pass deserves a phase.",
            },
            {
              label: "NEXT · 02",
              title: "Advisor & client surfaces",
              body: "Scoped but not designed. The natural next phase, and the place where the transparency-as-sales-asset thesis would actually be tested.",
            },
            {
              label: "NEXT · 03",
              title: "The rest of the platform",
              body: "Indicator Analysis, Data Catalog, Cause Analysis, Pinning: outlined in the IA, not yet detailed at the screen level.",
            },
          ].map((step) => (
            <div
              key={step.label}
              className="flex-1 border-t border-[#bbb] pt-[1.67vw] max-lg:pt-4 flex flex-col gap-[1.11vw] max-lg:gap-3"
            >
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw]">
                {step.label}
              </p>
              <p className="font-sans text-[1.39vw] max-lg:text-[18px] font-semibold text-[#9c4221] leading-[1.4]">
                {step.title}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Designer's note */}
        <div className="mt-[2.78vw] py-[3.33vw]">
          <p className="font-sans text-[2.22vw] max-lg:text-[16px] font-normal text-[#555] leading-[1.35]">
            &ldquo;The lesson I take from this project isn&rsquo;t about what
            didn&rsquo;t ship. It&rsquo;s about what the work demanded: domain
            depth before design, systems literacy as a design skill, and the
            patience to make a complex thing legible without flattening
            it.&rdquo;
          </p>
          <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#888] tracking-[0.104vw] mt-[1.67vw]">
            - NIHEL MOUELHI
          </p>
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
            href="/work/deep-purple"
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
