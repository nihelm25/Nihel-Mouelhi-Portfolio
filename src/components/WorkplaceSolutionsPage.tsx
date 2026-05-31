"use client";

import { motion } from "framer-motion";
import Header from "./Header";

/* ── Animation preset ── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ── Complexity card ── */
function ComplexityCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]">
      <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
        {label}
      </p>
      <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
        {title}
      </p>
      <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
        {body}
      </p>
    </div>
  );
}

export default function WorkplaceSolutionsPage() {
  return (
    <section className="relative w-full min-h-screen bg-cream overflow-x-hidden">
      <Header activeItem="WORK" />

      {/* Header spacer */}
      <div className="h-[19.4vw]" />

      {/* ═══════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════ */}
      <div className="px-[3.33vw]">
        {/* Label */}
        <motion.p
          className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]"
          {...fadeUp}
        >
          CASE STUDY, 01 &middot; 2025&ndash;2026 &middot; PRODUCT DESIGNER
          &middot; B2C
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-sans text-[5vw] font-light text-[#555] tracking-[-0.15vw] mt-[1.39vw]"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Workplace Solutions
        </motion.h1>

        {/* Hero browser frame */}
        <motion.div
          className="mt-[2.78vw]"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative max-h-[49.17vw] overflow-hidden rounded-[0.56vw]" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
            <img
              src="/images/dashboard-screenshot.png"
              alt="Workplace Solutions Dashboard"
              className="w-full object-cover object-top pointer-events-none"
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-[8.33vw] bg-gradient-to-t from-white to-transparent" />
          </div>
        </motion.div>

        {/* Hero bottom row: meta + intro */}
        <motion.div
          className="flex gap-[4.44vw] mt-[2.78vw]"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Left: meta column */}
          <div className="w-[25.63vw] shrink-0 flex flex-col gap-[1.94vw]">
            {[
              {
                label: "COMPANY",
                value: "J.P. Morgan Chase · Workplace Solutions",
              },
              { label: "ROLE", value: "Product designer (team of 5)" },
              { label: "STATUS", value: "Shipped · Live in production" },
              {
                label: "DISCIPLINE",
                value:
                  "Product strategy · Regulation as design · Multi-product UX",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-[0.35vw]">
                <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                  {item.label}
                </p>
                <p className="font-sans text-[0.97vw] font-normal text-[#555]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Right: intro paragraph */}
          <div className="flex-1">
            <p className="font-sans text-[1.53vw] font-normal text-[#555] leading-[1.45] tracking-[-0.023vw]">
              At J.P. Morgan Workplace Solutions, a first-time enrollee and a
              CEO clearing a sale window use the same platform. It&rsquo;s the
              equity-management system public and private companies use to
              compensate employees across every major plan type: RSUs, PSUs,
              RSAs, options, ESPPs, SAYE, SIPs, under regulation that shifts by
              jurisdiction and rules that shift by client. As product designer
              leading two of the participant journeys, view &amp; manage, and
              model &amp; transact, my job was to make equity legible. To design
              a product that holds the complexity, so the participant
              doesn&rsquo;t have to.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          01 / THE MANDATE
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          01 / THE MANDATE
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Replace a legacy platform without losing{" "}
          <span className="font-semibold text-[#9c4221]">our users.</span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The brief was a migration: move every participant from the old
          platform onto a new one, expand to a global client base across dozens
          of jurisdictions, and add private-company plan types the legacy system
          was never built for. But the constraint underneath the brief was never
          the scale. It was the stakes. Equity is where people make
          tax-impacting, irrevocable decisions: exercise an option, sell inside a
          window, enroll at the wrong percentage of payroll. A migration that
          frustrated, confused, or mistranslated wouldn&rsquo;t just churn
          users. It would cost them money. The shipped redesign had to feel
          calmer than the old one, not just newer.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          02 / THE COMPLEXITY
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          02 / THE COMPLEXITY
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Combinatorial complexity,{" "}
          <span className="font-semibold text-[#9c4221]">by design.</span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Equity isn&rsquo;t one product. It&rsquo;s a matrix. Regulation
          differs by jurisdiction; plan rules differ by client; customization
          differs by contract; users range from a junior employee enrolling in
          their first ESPP to a CEO clearing a sale window. Multiplied together,
          the variance is combinatorial. The legacy platform had tried to solve
          it screen by screen, adding cases and conditions until the surface
          drifted. The redesign couldn&rsquo;t ship by handling cases. It had to
          ship as a system that absorbed them.
        </p>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-2 gap-[1.67vw] mt-[2.22vw]">
          <ComplexityCard
            label="JURISDICTION"
            title="Regulation by country."
            body="US disclosure rules differ from UK, EU, and MENA. Each jurisdiction carries its own tax treatment, blackout-window logic, and filing requirements. The platform has to enforce each set without leaking rules from one into another."
          />
          <ComplexityCard
            label="GRANT/PLAN TYPE"
            title="Different mechanics, different defaults."
            body="RSUs, options, ESPPs, SAYE, SIPs each have their own vesting logic, exercise mechanics, tax events, and participant-facing language. A single client can run multiple plan types simultaneously."
          />
          <ComplexityCard
            label="CLIENT CUSTOMIZATION"
            title="Configurable, within compliance."
            body="Clients adjust eligibility rules, vesting schedules, and plan-level permissions within regulatory bounds. The product has to flex for each client without creating a one-off fork."
          />
          <ComplexityCard
            label="USER EXPERTISE"
            title="From first-time enroller to CEO."
            body="Same product, vastly different confidence levels, vocabulary, and stakes. A junior employee enrolling in their first ESPP and a C-suite officer preclearing a sale need different levels of guidance from the same interface."
          />
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          03 / THE REFRAME
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          03 / THE REFRAME
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Two journeys,{" "}
          <span className="font-semibold text-[#9c4221]">
            one decision pipeline.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          View &amp; manage and model &amp; transact were scoped as two journey
          lines with two backlogs. Looked at from the participant&rsquo;s side,
          they&rsquo;re a single pipeline: I want to know what I have. I want to
          understand what I could do with it. I want to do it. The seam between
          view and act is where confidence either compounds or breaks. Designing
          the pipeline, not the silos, became the core architectural decision.
        </p>

        {/* 3-column pipeline */}
        <div className="flex items-stretch gap-[0.83vw] mt-[2.22vw]">
          {/* VIEW */}
          <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]">
            <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
              VIEW
            </p>
            <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
              What do I have?
            </p>
            <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
              Dashboard and portfolio. Holdings, vesting schedules, grants,
              contribution plans, surfaced in plain language with insights
              answering the questions a participant would otherwise call to ask.
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center shrink-0">
            <span className="font-sans text-[2.22vw] text-[#ccc] font-light">
              &rarr;
            </span>
          </div>

          {/* MODEL */}
          <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]">
            <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
              MODEL
            </p>
            <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
              What could I do with it?
            </p>
            <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
              Simulators that let participants test scenarios, exercise timing,
              post-tax proceeds, contribution percentage, withdrawal impact,
              before any commitment. Confidence is built here.
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center shrink-0">
            <span className="font-sans text-[2.22vw] text-[#ccc] font-light">
              &rarr;
            </span>
          </div>

          {/* TRANSACT */}
          <div className="flex-1 bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]">
            <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
              TRANSACT
            </p>
            <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
              Do it.
            </p>
            <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
              Exercise, sell, transfer, preclear, enroll, change contribution.
              Whatever the participant modeled in the previous step is what
              they&rsquo;re confirming here: same numbers, same assumptions, no
              re-entry.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          04 / TRANSLATING REGULATION
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          04 / TRANSLATING REGULATION
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Compliance, as a guardrail,{" "}
          <span className="font-semibold text-[#9c4221]">not a gate.</span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Equity products are regulated end-to-end: what you can show, what you
          must disclose, what a participant must acknowledge before acting. The
          legacy platform treated compliance as a series of gates: dense legal
          blocks, all-or-nothing checkboxes, no preview of consequence. The
          redesign recast it as guardrails the participant could feel earlier, in
          their own language, with the math made visible before any irreversible
          action.
        </p>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-2 gap-[1.67vw] mt-[2.22vw]">
          <ComplexityCard
            label="PLAIN-LANGUAGE WRAP"
            title="Regulated terms get a sentence in human English."
            body="ESPP, lookback, blackout, preclearance: the regulated label stays. The sentence next to it does the explaining."
          />
          <ComplexityCard
            label="PREVIEW-THE-IMPACT"
            title="Consequences shown before commitment."
            body="Tax withheld, proceeds estimated, fees previewed. Participants see the outcome on the same screen as the confirm button, so there are no surprises after submit."
          />
          <ComplexityCard
            label="EARLY GUARDRAILS"
            title="Errors caught at input, not at submit."
            body="Invalid contribution percentages, locked windows, and ineligible plans surface in context. If a participant is going to fail validation, we want them to know on the field, not at the end of the form."
          />
          <ComplexityCard
            label="AUDIT-LOGGED ACTIONS"
            title="Every irreversible action leaves a trail."
            body="Every confirmation page records the inputs, the outcome, and the timestamp. Most participants come back to it weeks later, usually to remind themselves what they actually picked the first time."
          />
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          05 / DEEP DIVE: ESPP & PRECLEARANCE
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          05 / DEEP DIVE: ESPP &amp; PRECLEARANCE
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Two products,{" "}
          <span className="font-semibold text-[#9c4221]">
            same principles.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          ESPP and Preclearance live at opposite ends of the participant
          journey. ESPP is the most-enrolled plan and a long-term commitment:
          enroll once, then live with the decision through months of payroll
          contributions, with occasional touch-points to change contribution,
          suspend, or withdraw. Preclearance is the exception flow that
          public-company employees with material nonpublic information must
          clear before a sale. Both are saturated with regulation. Both required
          the same translation work: take a process the legacy platform exposed
          as bureaucracy and rebuild it as a flow a participant could trust.
        </p>
      </motion.div>

      {/* ── 5.1 / ESPP ── */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          5.1 / ESPP
        </p>
        <h2 className="font-sans text-[1.67vw] font-normal text-[#555] mt-[0.83vw]">
          Enroll once,{" "}
          <span className="font-semibold text-[#9c4221]">
            manage for months.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          ESPP: summary view. The view and the management actions sit on one
          screen: current period status, contribution amount, estimated
          purchase, plus the things a participant might do mid-period (change
          contribution, suspend, withdraw). Most participants enroll once and
          don&rsquo;t return until something needs adjusting. When they do come
          back, the explanation of the regulated terms, what a purchase period
          is, how shares get taxed, sits next to the action it affects, instead
          of pushed out to a separate help center.
        </p>

        {/* Browser frame */}
        <div className="flex justify-center mt-[2.22vw]">
          <div className="w-[70vw]">
            <div className="relative rounded-[0.56vw] overflow-hidden" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
              <img
                src="/images/espp-screenshot.png"
                alt="ESPP summary view"
                className="w-full object-cover object-top pointer-events-none"
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-[6.94vw] bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 5.2 / PRECLEARANCE ── */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          5.2 / PRECLEARANCE
        </p>
        <h2 className="font-sans text-[1.67vw] font-normal text-[#555] mt-[0.83vw]">
          The compliance flow,{" "}
          <span className="font-semibold text-[#9c4221]">
            made approachable.
          </span>
        </h2>

        {/* Two browser frames side by side */}
        <div className="flex gap-[1.67vw] mt-[2.22vw]">
          <div className="flex-1">
            <div className="relative rounded-[0.56vw] overflow-hidden" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
              <img
                src="/images/sell-shares-screenshot.png"
                alt="Sell shares flow"
                className="w-full object-cover object-top pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[6.94vw] bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative rounded-[0.56vw] overflow-hidden" style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}>
              <img
                src="/images/preclearance-screenshot.png"
                alt="Preclearance request"
                className="w-full object-cover object-top pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[6.94vw] bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45] mt-[1.39vw]">
          Preclearance request. Most participants encounter this flow rarely,
          and none of them want to misread it. The form on top is simple: which
          shares, how many, which sale method. The required SEC acknowledgment
          underneath is present and readable, but it doesn&rsquo;t dominate the
          screen. The button label says exactly what it does, so there&rsquo;s
          no ambiguity about what&rsquo;s about to happen.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          06 / THE SYSTEM
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          06 / THE SYSTEM
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          A design system that{" "}
          <span className="font-semibold text-[#9c4221]">
            couldn&rsquo;t fork.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          With 100+ clients, 50+ jurisdictions, and a product surface spanning
          enrollment, portfolio management, trading, and reporting, a
          component-level fork would have been fatal. The design system had to
          hold every variant: RTL layouts for MENA, double-byte character
          support for APAC, density adjustments for data-heavy views, and
          compliance-specific disclosure patterns that changed by plan type. We
          built it as a single source with a token layer that absorbed
          client-level and jurisdiction-level variance, so every team was
          shipping from the same kit. The system didn&rsquo;t just look
          consistent. It made consistency the path of least resistance, so
          designers and engineers defaulted to the right thing without having to
          think about it.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          07 / WHAT SHIPPED
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          07 / WHAT SHIPPED
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          A full platform replacement, and the numbers kept growing.
        </h2>

        {/* 4-stat row */}
        <div className="flex gap-[2.22vw] mt-[2.78vw]">
          {[
            {
              value: "200K",
              label: "PARTICIPANTS · AND GROWING",
              desc: "Active users on the platform today, grown steadily since the initial migration from legacy.",
            },
            {
              value: "100+",
              label: "CLIENTS · GLOBAL",
              desc: "Public and private companies live on the new platform, roughly 50/50 US and global.",
            },
            {
              value: "$19B",
              label: "ASSETS UNDER ADMIN",
              desc: "Total value of equity awards and contributions managed on the platform today.",
            },
            {
              value: "50+",
              label: "COUNTRIES · JURISDICTIONS",
              desc: "Geographies covered, each with its own regulatory floor and plan rules.",
            },
          ].map((stat) => (
            <div key={stat.value} className="flex-1 flex flex-col gap-[0.83vw]">
              <p className="font-sans text-[3.89vw] font-light text-[#555] tracking-[-0.078vw]">
                {stat.value}
              </p>
              <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                {stat.label}
              </p>
              <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* "What these numbers proved" card */}
        <div className="bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.39vw] mt-[2.22vw]">
          <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
            WHAT THESE NUMBERS PROVED
          </p>
          <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.83vw]">
            The migration (still in progress) proved the system could handle
            real positions, pending transactions, and vesting schedules, every
            account landing exactly where it needed to. We migrated 200K
            participants successfully and still more, 100+ clients, $19B in
            assets, 50+ jurisdictions, all running on the same product. No data
            loss, no client churn.
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          08 / WHAT I LEARNED
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          08 / WHAT I LEARNED
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          How working in regulated finance{" "}
          <span className="font-semibold text-[#9c4221]">
            reshaped my approach.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Constraints used to feel like something I had to design around. This
          project changed that. Working in equity meant treating regulation,
          tax, and plan rules as the actual material of the design, instead of
          obstacles between me and a clean screen. By the end I was spending
          more time on what the system was deciding for the participant:
          defaults, ordering, when to pause them, when to let them keep going,
          than on what the screen looked like. That&rsquo;s the part I&rsquo;m
          carrying into the next project. The screen is the last thing I design
          now, after the system underneath it has been figured out.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          Closing navigation
         ═══════════════════════════════════════════════════ */}
      <div className="px-[3.33vw] mt-[4.44vw]">
        <div className="flex items-center justify-between">
          <a
            href="/work"
            className="font-sans text-[1.39vw] font-normal text-[#555] hover:underline underline-offset-4"
          >
            &larr; Back to work
          </a>
          <a
            href="/work"
            className="font-sans text-[1.39vw] font-normal text-[#555] hover:underline underline-offset-4"
          >
            Next case study &rarr;
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          Footer
         ═══════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-[3.33vw] py-[2vh] mt-[3.33vw]">
        <span className="font-sans text-[0.76vw] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
