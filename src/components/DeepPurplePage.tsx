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

export default function DeepPurplePage() {
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
          CASE STUDY, 04 &middot; 2020&ndash;2021 &middot; PRODUCT DESIGNER
          &middot; B2C &middot; B2E
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-sans text-[5vw] font-light text-[#555] tracking-[-0.15vw] mt-[1.39vw]"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Deep Purple
        </motion.h1>

        {/* Hero product shots */}
        <motion.div
          className="mt-[2.78vw]"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <img
            src="/images/deep-purple/hero.png"
            alt="Deep Purple — Desktop browser and mobile phone side by side"
            className="w-full object-cover object-top pointer-events-none"
          />
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
              { label: "COMPANY", value: "BPCE (Natixis group)" },
              { label: "ROLE", value: "Product designer (team of 4)" },
              {
                label: "STATUS",
                value:
                  "Shipped to production; rolled out to 15 million BPCE retail customers.",
              },
              {
                label: "DISCIPLINE",
                value:
                  "Consumer banking · Dual-persona UX · Credit products",
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
              BPCE&rsquo;s client-facing banking app, Deep Purple, served
              customers. Advisors served the same customers on a separate
              desktop app, Izivente: different vocabulary, different defaults,
              different screens for the same credit products. Alongside the
              shipped redesign, I led an Izivente design-sprint concept to make
              the case to leadership: customers and advisors on the same call
              should see the same product. Consumer loan, first month
              post-launch: +&euro;1M in funding requests, &minus;42% inbound
              support calls.
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
          I didn&rsquo;t choose the products. I chose{" "}
          <span className="font-semibold text-[#9c4221]">the unification.</span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          BPCE Financement is the loan-specialized subsidiary inside the BPCE
          Group. The mandate I inherited was clear: redesign the credit products
          inside Deep Purple, the client-facing banking app: personal loan,
          revolving credit, consumer loan, the Izivente product family. I
          didn&rsquo;t pick those domains. They were the subsidiary&rsquo;s
          portfolio. What I did choose, once I started looking at advisor calls
          and customer interviews, was the thesis underneath the redesign: that
          two parallel apps, Deep Purple for customers, Izivente for advisors,
          were the actual problem, not just the client facing UI. Recognizing
          that wasn&rsquo;t in the brief. Making the case for it became the work
          that mattered most.
        </p>

        {/* Three scope cards */}
        <div className="flex gap-[1.67vw] mt-[2.78vw]">
          {[
            {
              category: "FIXED-INSTALLMENT CONSUMER LOAN",
              title:
                "Large-ticket purchases. The most common credit decision a French household makes. Shipped second in the rollout.",
              body: "The most opaque and call-driving product in the catalog. We shipped it first because the support-call data made it the obvious place to prove the thesis. The +€1M / −42% figures are this product.",
            },
            {
              category: "PERSONAL CREDIT",
              title: "Fixed-installment consumer loan",
              body: "Large-ticket purchases. The most common credit decision a French household makes. Shipped second in the rollout.",
            },
            {
              category: "CONSUMER CREDIT + IZIVENTE",
              title: "Consumer credit + advisor-side concept",
              body: "Consumer loan shipped third. Izivente, the advisor-facing desktop app, was the design sprint I led to make the case to leadership for funding the advisor-side unification.",
            },
          ].map((card) => (
            <div
              key={card.category}
              className="flex-1 bg-[#f2efe8] rounded-[0.97vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]"
            >
              <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          02 / THE INVISIBLE COST
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          02 / THE INVISIBLE COST
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Two apps. One conversation.{" "}
          <span className="font-semibold text-[#9c4221]">
            Four kinds of cost.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Deep Purple was the customer&rsquo;s app. Izivente was the
          advisor&rsquo;s. When a customer called the bank about their credit,
          the advisor opened a different screen: different defaults, different
          copy, sometimes a different version of the calculation. On every call,
          both sides spent the first minute aligning on what they were even
          looking at. The cost compounded in four directions. None of them showed
          up in a roadmap until something broke.
        </p>

        {/* 4 cost cards — 2×2 grid */}
        <div className="grid grid-cols-2 gap-[1.67vw] mt-[2.78vw]">
          {[
            {
              category: "DRIFT",
              title: "Two UIs evolve separately.",
              body: "Different defaults, different phrasing, occasionally different calculations. In regulated finance, this is how mistakes start.",
            },
            {
              category: "COACHING FRICTION",
              title: "Translation overhead on every call.",
              body: "An advisor on a phone call can’t say “tap the blue button” if the customer’s screen has a green one. Every coaching session becomes a translation exercise.",
            },
            {
              category: "ENGINEERING ECONOMICS",
              title: "Build twice, test twice, audit twice.",
              body: "Every regulatory update lands twice. Every fix has to be applied to both surfaces. Every design system change has to be reconciled across two codebases.",
            },
            {
              category: "TRUST",
              title: "Customers sense the asymmetry.",
              body: "When the customer screen and the advisor screen look different, customers correctly assume they're not seeing the full picture. They are right. The fix is not to hide better. It's to share the surface.",
            },
          ].map((card) => (
            <div
              key={card.category}
              className="bg-[#f2efe8] rounded-[0.97vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]"
            >
              <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
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
          One product. Two roles.{" "}
          <span className="font-semibold text-[#9c4221]">Same software.</span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The right unit of design wasn&rsquo;t an app or a screen. It was a
          role-aware product surface that both Deep Purple and Izivente could
          render. Same calculations. Same copy. Same defaults. Customer mode
          shows educational scaffolding and self-serve actions. Advisor mode
          shows visibility into customer state, role-aware override authority,
          and an audit trail. On a phone call, both sides see the same product.
          They speak the same language because the language is in the product,
          not bolted onto each app separately.
        </p>

        {/* Reframe diagram: Customer mode → Izivente engine → Advisor mode */}
        <div className="bg-[#f2efe8] rounded-[1.11vw] p-[3.33vw] flex items-center gap-[2.22vw] mt-[2.22vw]">
          {/* Customer mode */}
          <div className="flex-1 bg-white border border-[#bab5ad] rounded-[0.83vw] px-[1.94vw] py-[1.67vw] flex flex-col gap-[0.69vw]">
            <p className="font-sans text-[0.97vw] font-semibold text-[#555] tracking-[-0.01vw]">
              Customer mode
            </p>
            <p className="font-sans text-[0.9vw] font-normal text-[#524d57] leading-[1.45]">
              Self-serve. Plain language. Educational scaffolding. Soft handoff
              to advisor available at every step.
            </p>
          </div>

          <span className="font-sans text-[2.22vw] font-light text-[#888]">
            &rarr;
          </span>

          {/* Izivente engine */}
          <div className="flex-1 bg-[#5a2a82] rounded-[0.83vw] px-[1.94vw] py-[1.67vw] flex flex-col gap-[0.69vw]">
            <p className="font-sans text-[0.97vw] font-semibold text-white tracking-[-0.01vw]">
              Izivente engine
            </p>
            <p className="font-sans text-[0.9vw] font-normal text-white/85 leading-[1.45]">
              One calculation. One copy library. One regulatory audit trail. The
              shared surface both surfaces render.
            </p>
          </div>

          <span className="font-sans text-[2.22vw] font-light text-[#888]">
            &rarr;
          </span>

          {/* Advisor mode */}
          <div className="flex-1 bg-white border border-[#bab5ad] rounded-[0.83vw] px-[1.94vw] py-[1.67vw] flex flex-col gap-[0.69vw]">
            <p className="font-sans text-[0.97vw] font-semibold text-[#555] tracking-[-0.01vw]">
              Advisor mode
            </p>
            <p className="font-sans text-[0.9vw] font-normal text-[#524d57] leading-[1.45]">
              Same surface, with elevation: customer state visibility,
              role-aware override authority, audit-logged actions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          04 / RESEARCH
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          04 / RESEARCH
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          What customers couldn&rsquo;t say themselves.
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Before unification could be a viable thesis, I had to learn what was
          actually breaking. With the team I led, we ran customer interviews and
          grouped what we heard into four categories. Customers couldn&rsquo;t
          always say what was wrong, so we listened for what made them stop, what
          made them call, and what made them give up.
        </p>

        {/* Research session photos */}
        <div className="mt-[2.78vw] relative">
          <img
            src="/images/deep-purple/photos.png"
            alt="User research sessions — remote interviews with customers and advisors"
            className="w-full pointer-events-none"
          />
          {/* Emoji privacy overlays matching Figma design */}
          <div
            className="absolute pointer-events-none select-none flex items-center justify-center"
            style={{ left: "4%", top: "3%", width: "7%", height: "24%", fontSize: "min(5vw, 72px)", lineHeight: 1 }}
            aria-hidden="true"
          >&#x1F469;</div>
          <div
            className="absolute pointer-events-none select-none flex items-center justify-center"
            style={{ left: "5%", top: "55%", width: "7%", height: "24%", fontSize: "min(5vw, 72px)", lineHeight: 1 }}
            aria-hidden="true"
          >&#x1F9D1;&#x200D;&#x1F9B1;</div>
        </div>

        {/* User quotes below photos */}
        <div className="flex gap-[1.67vw] mt-[0.83vw]">
          <p className="flex-1 font-sans text-[0.97vw] font-normal text-[#555] leading-[1.55]">
            &ldquo;I like this new approach. Everything is well-explained, there
            are no hidden costs, and the interface is incredibly neat and easy to
            use.&rdquo; &mdash; MA, BP
          </p>
          <p className="flex-1 font-sans text-[0.97vw] font-normal text-[#555] leading-[1.55]">
            &ldquo;In a few clicks, I was able to simulate my credit power
            easily.&rdquo; &mdash; AS, CE
          </p>
        </div>

        {/* Photo caption */}
        <p className="font-sans text-[0.9vw] font-normal text-[#555] leading-[1.45] mt-[0.56vw]">
          Customer interviews. The quote that anchored the redesign: &ldquo;I
          never know if the simulator answer is the answer, or just one
          answer.&rdquo;
        </p>

        {/* 4 research insight cards — 2×2 grid */}
        <div className="grid grid-cols-2 gap-[1.67vw] mt-[2.78vw]">
          {[
            {
              category: "LANGUAGE",
              title: "Legal vocabulary, never explained.",
              body: "APR, outstanding balance, fixed installment: the regulated terms of consumer loan are non-negotiable but were never unpacked. Customers nodded and called the bank.",
            },
            {
              category: "PEDAGOGY",
              title: "No scaffolding for first-time decisions.",
              body: "The simulator dropped users into 12 inputs without saying which mattered most, what defaults meant, or how two offers actually compared. Confidence required teaching.",
            },
            {
              category: "AUTHORITY",
              title: "Advisor knowledge lived next to the product, not in it.",
              body: "Advisors knew shortcuts, edge cases, and customer profiles the UI didn't surface. The redesign needed to put their tacit knowledge into the product, accessible to both roles.",
            },
            {
              category: "TRUST",
              title:
                `Without explanation, every “are you sure?” felt like a trap.`,
              body: "Customers who can't see how a number was calculated assume something is hidden. Confidence required the UI to do the showing, not the hiding, at every fork.",
            },
          ].map((card) => (
            <div
              key={card.category}
              className="bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]"
            >
              <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          05 / CUSTOMER MODE — THE SIMULATOR
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          05 / CUSTOMER MODE
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          A simulator that{" "}
          <span className="font-semibold text-[#9c4221]">
            teaches while it calculates.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The customer view is the larger of the two surfaces. Most users will
          only ever use this one. It had to teach without being condescending,
          calculate without obscuring, and surface advisor support without making
          the customer feel inadequate for needing it.
        </p>

        {/* END-TO-END FLOW · CUSTOMER label */}
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw] mt-[2.78vw]">
          END-TO-END FLOW &middot; CUSTOMER
        </p>

        {/* 5 mobile flow screens — horizontal row */}
        <div className="flex gap-[1.67vw] mt-[1.11vw]">
          {[
            {
              src: "/images/deep-purple/flow-0-credits.png",
              alt: "Espace Crédits — credits dashboard",
              num: "01",
              label: "My credits",
              desc: "Entry point. Consumer credit highlighted as the primary tile. Simulate button takes the customer one tap into the flow.",
            },
            {
              src: "/images/deep-purple/flow-1-simulator.png",
              alt: "Simulez votre prêt — loan simulator",
              num: "02",
              label: "Simulate your loan",
              desc: `Three controls to start. Plain-language sub-line. “Why this rate?” inline.`,
            },
            {
              src: "/images/deep-purple/flow-2-rate.png",
              alt: "Votre TAEG, expliqué — rate explanation",
              num: "03",
              label: "Why this rate?",
              desc: "Educational panel. The advisor's verbal answer, surfaced in product.",
            },
            {
              src: "/images/deep-purple/flow-3-summary.png",
              alt: "Vérifiez avant d'envoyer — review screen",
              num: "04",
              label: "Summary",
              desc: "Right-aligned breakdown. APR locked. Insurance recommended, not forced.",
            },
            {
              src: "/images/deep-purple/flow-4-sent.png",
              alt: "Demande envoyée — confirmation",
              num: "05",
              label: "Request sent",
              desc: "Soft handoff. Advisor calls only if precision needed. Self-serve next steps.",
            },
          ].map((screen) => (
            <div key={screen.src} className="flex-1 flex flex-col items-start">
              <div
                className="rounded-[1.11vw] overflow-hidden w-full"
                style={{ boxShadow: "0px 4px 20px 0px rgba(0,0,0,0.10)" }}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full object-contain pointer-events-none"
                />
              </div>
              <p className="font-sans text-[0.76vw] font-semibold text-[#9c4221] tracking-[0.092vw] mt-[0.83vw]">
                {screen.num}
              </p>
              <p className="font-sans text-[0.97vw] font-semibold text-[#555] mt-[0.28vw]">
                {screen.label}
              </p>
              <p className="font-sans text-[0.76vw] font-normal text-[#555] leading-[1.45] mt-[0.28vw]">
                {screen.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RESPONSIVE · DESKTOP label */}
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw] mt-[2.78vw]">
          RESPONSIVE &middot; DESKTOP &#8805; 1024PX
        </p>

        {/* Caption before browser */}
        <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.5] mt-[0.83vw]">
          Same simulator, same product surface. At desktop width the bottom tab
          bar swaps out for a top horizontal nav. Customers and advisors see the
          same screens; only the chrome adapts.
        </p>

        {/* Large browser screenshot below */}
        <div className="mt-[1.67vw]">
          <div
            className="relative overflow-hidden rounded-[0.56vw]"
            style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}
          >
            <img
              src="/images/deep-purple/browser.png"
              alt="Deep Purple — Desktop view of the loan simulator"
              className="w-full object-cover object-top pointer-events-none"
            />
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          DESIGN PRINCIPLES
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[2.78vw]" {...fadeUp}>
        <div className="flex flex-col gap-[1.11vw]">
          {[
            {
              category: "PLAIN-LANGUAGE WRAP",
              title:
                "Every regulated term gets a sentence in plain language.",
              body: `APR → “the annual cost expressed as a percentage.” Outstanding balance → “what’s left to repay.” The regulated label stays, it has to, but no customer reads only the regulated label anymore.`,
            },
            {
              category: "PROGRESSIVE DISCLOSURE",
              title:
                "Three inputs to start. The rest reveal themselves as they become relevant.",
              body: "Most customers only need to set amount, duration, and confirm. The full simulator (insurance options, variable monthly payment, deferred payment) opens for the smaller set who ask for it.",
            },
            {
              category: "LIVE RECALCULATION WITH DELTAS",
              title:
                "When the customer changes a field, the impact highlights, not just the number.",
              body: "If duration goes from 60 to 48 months, the monthly payment jumps and the total cost drops. Both deltas animate. The customer sees the trade-off, not just the new state.",
            },
            {
              category: `“WHY THIS NUMBER?” PANELS`,
              title: "Every calculated field can explain itself.",
              body: "Tap the rate, see the inputs that produced it. Tap the total cost, see the breakdown. The advisor used to do this verbally on every call. Now the customer can do it themselves, and the advisor explains the explanation if needed.",
            },
            {
              category: "SOFT HANDOFF, EVERY STEP",
              title:
                `“Speak with an advisor” is available always, not buried at the end.`,
              body: "The CTA is a green dot, not a desperate fallback. Customers who self-serve appreciate it; customers who need help take it earlier; advisors get cleaner handoffs because the customer arrives with state.",
            },
          ].map((principle) => (
            <div
              key={principle.category}
              className="bg-[#f2efe8] rounded-[0.28vw] flex gap-[2.22vw] items-start px-[2.22vw] py-[1.67vw]"
            >
              <div className="w-[15.28vw] shrink-0">
                <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                  {principle.category}
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-[0.42vw]">
                <p className="font-sans text-[1.18vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.012vw]">
                  {principle.title}
                </p>
                <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          06 / IZIVENTE: THE CONCEPT SPRINT
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          06 / IZIVENTE: THE CONCEPT SPRINT
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          Advisor-side: a sprint to{" "}
          <span className="font-semibold text-[#9c4221]">
            fund the unification.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Izivente was the advisor-facing desktop app. It was not in my shipped
          scope. Leadership hadn&rsquo;t yet committed engineering capacity to
          redesigning it. I led a one-week design sprint to produce a concept
          proposal: what Izivente would look like if it rendered the same product
          surface as Deep Purple, with role-aware additions for advisors. The
          output wasn&rsquo;t a shipped product. It was an artifact for a
          stakeholder conversation: a tangible answer to the question &ldquo;what
          would this even look like, and is it worth funding?&rdquo; The
          revolving-credit launch metrics gave the proposal its evidence. The
          concept gave it its shape.
        </p>

        {/* 3 outcome cards */}
        <div className="flex gap-[1.67vw] mt-[2.78vw]">
          {[
            {
              category: "VISIBILITY",
              title: "Customer state, surfaced.",
              body: "What the customer sees, plus where they hesitate. The sprint mocked this as the lead exhibit because it was the most concrete benefit advisors could feel.",
            },
            {
              category: "AUTHORITY",
              title: "Override defaults, within compliance limits.",
              body: "Rate adjustments and term extensions an advisor could make from the same simulator the customer was using, with every override audit-logged. Compliance was the first stakeholder to back the proposal.",
            },
            {
              category: "CONTINUITY",
              title: "One case file across customer + advisor.",
              body: `No “switching tools” mid-call. The customer’s screen and the advisor’s screen become the same screen, with permissions. This is the architectural shift the concept was advocating for.`,
            },
          ].map((card) => (
            <div
              key={card.category}
              className="flex-1 bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.94vw] flex flex-col gap-[0.83vw]"
            >
              <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          07 / WHAT SHIPPED — RESULTS
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          07 / WHAT SHIPPED
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          <span className="font-semibold text-[#9c4221]">Consumer loan</span>
          {" "}first, then sequential rollout.
        </h2>

        {/* 4-stat row */}
        <div className="flex gap-[2.22vw] mt-[2.78vw]">
          {[
            {
              value: "+€1M",
              label: "FUNDING REQUESTS · REVOLVING CREDIT",
              desc: "Increase in funding requests in the first month after the consumer loan, the first product to ship under the unified flow.",
            },
            {
              value: "−42%",
              label: "INBOUND SUPPORT CALLS · REVOLVING CREDIT",
              desc: "Drop in customer-support calls related to the revolving-credit domain in the first month after launch.",
            },
            {
              value: "3",
              label: "PRODUCTS DEPLOYED SEQUENTIALLY",
              desc: "Consumer loan → personal loan → Revolving loan. Same playbook each time, refined per product.",
            },
            {
              value: "1",
              label: "CONCEPT: IZIVENTE",
              desc: "Sprint output, not shipped: the advisor-side proposal that made the unification case to leadership for funding.",
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="flex-1 flex flex-col gap-[0.56vw]"
            >
              <p className="font-sans text-[3.89vw] font-light text-[#555] tracking-[-0.078vw] leading-none">
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

        {/* What these numbers proved — callout */}
        <div className="bg-[#f2efe8] rounded-[0.28vw] px-[1.67vw] py-[1.39vw] mt-[2.22vw] flex flex-col gap-[0.42vw]">
          <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
            WHAT THESE NUMBERS PROVED
          </p>
          <p className="font-sans text-[0.97vw] font-normal text-[#555] leading-[1.5]">
            +&euro;1M and &minus;42% are first-month indicators on consumer
            loan, the first product to ship under the unified flow. They paid
            back the redesign&rsquo;s engineering cost in weeks and gave
            leadership the evidence to fund the rollout: personal loan and
            consumer credit shipped next, on the same playbook. The Izivente
            concept sprint, presented alongside these numbers, made the case for
            the next phase: unifying the advisor side so the next +&euro;1M
            comes from a system that doesn&rsquo;t drift between two apps. The
            metrics weren&rsquo;t the win. The mandate they unlocked was.
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          08 / REFLECTION
         ═══════════════════════════════════════════════════ */}
      <motion.div className="px-[3.33vw] mt-[4.44vw]" {...fadeUp}>
        <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
          08 / FIVE YEARS LATER
        </p>
        <h2 className="font-sans text-[3.06vw] font-light text-[#555] tracking-[-0.061vw] leading-[1.1] mt-[1.11vw]">
          What junior-me missed, and what junior-me got right.
        </h2>

        {/* Two-column reflection */}
        <div className="flex gap-[4.44vw] mt-[2.78vw]">
          <div className="flex-1 flex flex-col gap-[0.83vw]">
            <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
              DIFFERENTLY
            </p>
            <p className="font-sans text-[1.67vw] font-semibold text-[#555] leading-[1.25] tracking-[-0.025vw]">
              I&rsquo;d talk to advisors, not just customers.
            </p>
            <p className="font-sans text-[1.04vw] font-normal text-[#555] leading-[1.5]">
              I interviewed customers thoroughly and learned what they
              couldn&rsquo;t articulate. I didn&rsquo;t interview the people on
              the receiving end of every confused call: the advisors. Junior-me
              assumed the customer pain was the whole story; senior-me would
              interview advisors from day one, because they hear the
              misunderstanding the customer can&rsquo;t name. The Izivente
              concept came together from talking to advisors late in the project.
              It would have come together faster if I&rsquo;d talked to them
              from the start.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[0.83vw]">
            <p className="font-sans text-[0.76vw] font-semibold text-[#888] tracking-[0.092vw]">
              AGAIN
            </p>
            <p className="font-sans text-[1.67vw] font-semibold text-[#555] leading-[1.25] tracking-[-0.025vw]">
              Treating the brief as the floor, not the ceiling.
            </p>
            <p className="font-sans text-[1.04vw] font-normal text-[#555] leading-[1.5]">
              The mandate was &ldquo;redesign the credit products in Deep
              Purple.&rdquo; Junior-me did that, but also recognized that the
              actual problem was bigger than the brief, and led the Izivente
              concept work to make the case for the bigger play. That instinct
              (the brief is what&rsquo;s been asked; the work is what&rsquo;s
              needed) is what I do on every senior project now. It started here.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          Closing navigation
         ═══════════════════════════════════════════════════ */}
      <div className="px-[3.33vw] mt-[4.44vw]">
        <div className="flex items-center">
          <a
            href="/work"
            className="font-sans text-[1.39vw] font-normal text-[#555] hover:underline underline-offset-4"
          >
            &larr; Back to work
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
