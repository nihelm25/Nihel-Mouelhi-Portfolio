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

export default function DeepPurplePage() {
  return (
    <section className="relative w-full min-h-screen bg-cream overflow-x-hidden">
      <Header activeItem="WORK" />

      <div className="h-[11.1vw] max-lg:h-[80px]" />

      {/* ── HERO ── */}
      <div className="px-[3.33vw] max-lg:px-5">
        <motion.p
          className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]"
          {...fadeUp}
        >
          05 / 05 &middot; BPCE GROUP &middot; NEW PRODUCT &middot; RWD
          &middot; B2C &middot; B2E
        </motion.p>

        <motion.h1
          className="font-sans text-[5vw] max-lg:text-[32px] font-light text-[#555] tracking-[-0.15vw] mt-[0.56vw] max-lg:mt-1"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Deep Purple
        </motion.h1>
      </div>

      <div className="px-[3.33vw] max-lg:px-5">
        <motion.div
          className="mt-[2.78vw] max-lg:mt-6 -mx-[3.33vw] max-lg:-mx-5"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/deep-purple/hero.png"
            alt="Deep Purple - Desktop browser and mobile phone side by side"
            width={5376}
            height={2460}
            className="shimmer w-full h-auto object-cover object-top pointer-events-none"
            sizes="100vw"
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
            { label: "STATUS", value: "Shipped to 15M customers" },
            { label: "SCOPE", value: "Consumer banking · Dual-persona UX · Credit products" },
            { label: "YEAR", value: "2020–2021" },
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
          Two apps. One conversation.{" "}
          <span className="font-semibold text-[#9c4221]">
            Zero alignment.
          </span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          BPCE&rsquo;s client-facing banking app, Deep Purple, served customers.
          Advisors served the same customers on a separate desktop app, Izivente:
          different vocabulary, different defaults, different screens for the same
          credit products. When a customer called the bank about their credit, the
          advisor opened a different screen. On every call, both sides spent the
          first minute aligning on what they were even looking at. The cost
          compounded in four directions.
        </p>

        {/* 4 cost cards */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.78vw] max-lg:mt-6">
          {[
            {
              category: "DRIFT",
              title: "Two UIs evolve separately.",
              body: "Different defaults, different phrasing, occasionally different calculations. In regulated finance, this is how mistakes start.",
            },
            {
              category: "COACHING FRICTION",
              title: "Translation overhead on every call.",
              body: `An advisor on a phone call can't say "tap the blue button" if the customer's screen has a green one. Every coaching session becomes a translation exercise.`,
            },
            {
              category: "ENGINEERING ECONOMICS",
              title: "Build twice, test twice, audit twice.",
              body: "Every regulatory update lands twice. Every fix has to be applied to both surfaces. Every design system change has to be reconciled across two codebases.",
            },
            {
              category: "TRUST",
              title: "Customers sense the asymmetry.",
              body: `When the customer screen and the advisor screen look different, customers correctly assume they're not seeing the full picture. The fix is not to hide better. It's to share the surface.`,
            },
          ].map((card) => (
            <div
              key={card.category}
              className="bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-2"
            >
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Scope cards */}
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 mt-[2.78vw] max-lg:mt-6">
          {[
            {
              category: "REVOLVING CREDIT",
              body: "The most opaque and call-driving product in the catalog. Shipped first because the support-call data made it the obvious place to prove the thesis.",
            },
            {
              category: "PERSONAL LOAN",
              body: "Large-ticket purchases. The most common credit decision a French household makes. Shipped second in the rollout.",
            },
            {
              category: "CONSUMER CREDIT + IZIVENTE",
              body: "Consumer loan shipped third. Izivente, the advisor-facing desktop app, was the design sprint I led to make the case to leadership for funding the advisor-side unification.",
            },
          ].map((card) => (
            <div
              key={card.category}
              className="flex-1 bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-2"
            >
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
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
          What customers couldn&rsquo;t say{" "}
          <span className="font-semibold text-[#9c4221]">themselves.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          Before unification could be a viable thesis, I had to learn what was
          actually breaking. With the team I led, we ran customer interviews and
          grouped what we heard into four categories. Customers couldn&rsquo;t
          always say what was wrong, so we listened for what made them stop, what
          made them call, and what made them give up.
        </p>

        {/* Research session photos */}
        <ShimmerImage
          src="/images/deep-purple/photos.png"
          alt="User research sessions - remote interviews with customers and advisors"
          width={5376}
          height={1572}
          className="shimmer w-full h-auto pointer-events-none mt-[2.78vw] max-lg:mt-6"
          sizes="93vw"
        />

        {/* User quotes */}
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-3 mt-[0.83vw] max-lg:mt-3">
          <p className="flex-1 font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.55]">
            &ldquo;I like this new approach. Everything is well-explained, there
            are no hidden costs, and the interface is incredibly neat and easy to
            use.&rdquo; - MA, BP
          </p>
          <p className="flex-1 font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.55]">
            &ldquo;In a few clicks, I was able to simulate my credit power
            easily.&rdquo; - AS, CE
          </p>
        </div>

        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#878787] leading-[1.6] tracking-[0.104vw] mt-[0.56vw] max-lg:mt-2">
          CUSTOMER INTERVIEWS. The quote that anchored the redesign: &ldquo;I
          never know if the simulator answer is the answer, or just one
          answer.&rdquo;
        </p>

        {/* 4 research insight cards */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-4 mt-[2.78vw] max-lg:mt-6">
          {[
            {
              category: "LANGUAGE",
              title: "Legal vocabulary, never explained.",
              body: "APR, outstanding balance, fixed installment: the regulated terms of consumer loan are non-negotiable but were never unpacked. Customers nodded and called the bank.",
            },
            {
              category: "PEDAGOGY",
              title: "No scaffolding for first-time decisions.",
              body: `The simulator dropped users into 12 inputs without saying which mattered most, what defaults meant, or how two offers actually compared. Confidence required teaching.`,
            },
            {
              category: "AUTHORITY",
              title: "Advisor knowledge lived next to the product, not in it.",
              body: `Advisors knew shortcuts, edge cases, and customer profiles the UI didn't surface. The redesign needed to put their tacit knowledge into the product, accessible to both roles.`,
            },
            {
              category: "TRUST",
              title: `Without explanation, every "are you sure?" felt like a trap.`,
              body: `Customers who can't see how a number was calculated assume something is hidden. Confidence required the UI to do the showing, not the hiding, at every fork.`,
            },
          ].map((card) => (
            <div
              key={card.category}
              className="bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-2"
            >
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
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
          One product. Two roles.{" "}
          <span className="font-semibold text-[#9c4221]">Same software.</span>
        </h2>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[1.67vw]">
          The right unit of design wasn&rsquo;t an app or a screen. It was a
          role-aware product surface that both Deep Purple and Izivente could
          render. Same calculations. Same copy. Same defaults. Customer mode
          shows educational scaffolding and self-serve actions. Advisor mode
          shows visibility into customer state, role-aware override authority,
          and an audit trail. On a phone call, both sides see the same product.
        </p>

        {/* Reframe diagram */}
        <div className="bg-[#f2efe8] rounded-[1.11vw] max-lg:rounded-[12px] p-[3.33vw] max-lg:p-5 flex max-lg:flex-col items-center gap-[2.22vw] max-lg:gap-4 mt-[2.22vw] max-lg:mt-6">
          <div className="flex-1 max-lg:w-full bg-white border border-[#bab5ad] rounded-[0.83vw] max-lg:rounded-[8px] px-[1.94vw] max-lg:px-4 py-[1.67vw] max-lg:py-4 flex flex-col gap-[0.69vw] max-lg:gap-2">
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-semibold text-[#555] tracking-[-0.01vw]">
              Customer mode
            </p>
            <p className="font-sans text-[0.9vw] max-lg:text-[13px] font-normal text-[#524d57] leading-[1.45]">
              Self-serve. Plain language. Educational scaffolding. Soft handoff
              to advisor available at every step.
            </p>
          </div>

          <span className="font-sans text-[2.22vw] max-lg:text-[20px] font-light text-[#888] max-lg:rotate-90">
            &rarr;
          </span>

          <div className="flex-1 max-lg:w-full bg-[#5a2a82] rounded-[0.83vw] max-lg:rounded-[8px] px-[1.94vw] max-lg:px-4 py-[1.67vw] max-lg:py-4 flex flex-col gap-[0.69vw] max-lg:gap-2">
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-semibold text-white tracking-[-0.01vw]">
              Izivente engine
            </p>
            <p className="font-sans text-[0.9vw] max-lg:text-[13px] font-normal text-white/85 leading-[1.45]">
              One calculation. One copy library. One regulatory audit trail. The
              shared surface both surfaces render.
            </p>
          </div>

          <span className="font-sans text-[2.22vw] max-lg:text-[20px] font-light text-[#888] max-lg:rotate-90">
            &rarr;
          </span>

          <div className="flex-1 max-lg:w-full bg-white border border-[#bab5ad] rounded-[0.83vw] max-lg:rounded-[8px] px-[1.94vw] max-lg:px-4 py-[1.67vw] max-lg:py-4 flex flex-col gap-[0.69vw] max-lg:gap-2">
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-semibold text-[#555] tracking-[-0.01vw]">
              Advisor mode
            </p>
            <p className="font-sans text-[0.9vw] max-lg:text-[13px] font-normal text-[#524d57] leading-[1.45]">
              Same surface, with elevation: customer state visibility,
              role-aware override authority, audit-logged actions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Solution detail: Customer mode - the simulator */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          CUSTOMER MODE
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          A simulator that teaches while it calculates.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          The customer view is the larger of the two surfaces. It had to teach
          without being condescending, calculate without obscuring, and surface
          advisor support without making the customer feel inadequate for needing
          it.
        </p>

        {/* End-to-end flow label */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw] mt-[2.78vw] max-lg:mt-6">
          END-TO-END FLOW &middot; CUSTOMER
        </p>

        {/* 5 mobile flow screens */}
        <div className="flex gap-[1.67vw] max-lg:gap-4 mt-[1.11vw] max-lg:mt-3 max-lg:overflow-x-auto max-lg:pb-4 max-lg:-mx-5 max-lg:px-5">
          {[
            {
              src: "/images/deep-purple/flow-0-credits.png",
              alt: "Espace Credits - credits dashboard",
              num: "01",
              label: "My credits",
              desc: "Entry point. Consumer credit highlighted as the primary tile. Simulate button takes the customer one tap into the flow.",
            },
            {
              src: "/images/deep-purple/flow-1-simulator.png",
              alt: "Simulez votre pret - loan simulator",
              num: "02",
              label: "Simulate your loan",
              desc: `Three controls to start. Plain-language sub-line. "Why this rate?" inline.`,
            },
            {
              src: "/images/deep-purple/flow-2-rate.png",
              alt: "Votre TAEG, explique - rate explanation",
              num: "03",
              label: "Why this rate?",
              desc: "Educational panel. The advisor's verbal answer, surfaced in product.",
            },
            {
              src: "/images/deep-purple/flow-3-summary.png",
              alt: "Verifiez avant d'envoyer - review screen",
              num: "04",
              label: "Summary",
              desc: "Right-aligned breakdown. APR locked. Insurance recommended, not forced.",
            },
            {
              src: "/images/deep-purple/flow-4-sent.png",
              alt: "Demande envoyee - confirmation",
              num: "05",
              label: "Request sent",
              desc: "Soft handoff. Advisor calls only if precision needed. Self-serve next steps.",
            },
          ].map((screen) => (
            <div
              key={screen.src}
              className="flex-1 max-lg:min-w-[200px] max-lg:shrink-0 flex flex-col items-start"
            >
              <div
                className="rounded-[1.11vw] max-lg:rounded-[8px] overflow-hidden w-full"
                style={{ boxShadow: "0px 4px 20px 0px rgba(0,0,0,0.10)" }}
              >
                <ShimmerImage
                  src={screen.src}
                  alt={screen.alt}
                  width={1024}
                  height={2195}
                  className="shimmer w-full h-auto object-contain pointer-events-none"
                  sizes="18vw"
                />
              </div>
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw] mt-[0.83vw] max-lg:mt-2">
                {screen.num}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-semibold text-[#555] mt-[0.28vw] max-lg:mt-1">
                {screen.label}
              </p>
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-normal text-[#555] leading-[1.45] mt-[0.28vw] max-lg:mt-1">
                {screen.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Responsive desktop label */}
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw] mt-[2.78vw] max-lg:mt-6">
          RESPONSIVE &middot; DESKTOP &#8805; 1024PX
        </p>
        <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.5] mt-[0.83vw] max-lg:mt-2">
          Same simulator, same product surface. At desktop width the bottom tab
          bar swaps out for a top horizontal nav. Customers and advisors see the
          same screens; only the chrome adapts.
        </p>

        {/* Desktop browser screenshot */}
        <div className="mt-[1.67vw] max-lg:mt-4">
          <div
            className="relative overflow-hidden rounded-[0.56vw] max-lg:rounded-[4px]"
            style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}
          >
            <ShimmerImage
              src="/images/deep-purple/browser.png"
              alt="Deep Purple - Desktop view of the loan simulator"
              width={5376}
              height={3296}
              className="shimmer w-full h-auto object-cover object-top pointer-events-none"
              sizes="93vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Solution detail: Design principles */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[2.78vw] max-lg:mt-6"
        {...fadeUp}
      >
        <div className="flex flex-col gap-[1.11vw] max-lg:gap-3">
          {[
            {
              category: "PLAIN-LANGUAGE WRAP",
              title:
                "Every regulated term gets a sentence in plain language.",
              body: `APR: "the annual cost expressed as a percentage." Outstanding balance: "what's left to repay." The regulated label stays, it has to, but no customer reads only the regulated label anymore.`,
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
              category: `"WHY THIS NUMBER?" PANELS`,
              title: "Every calculated field can explain itself.",
              body: "Tap the rate, see the inputs that produced it. Tap the total cost, see the breakdown. The advisor used to do this verbally on every call. Now the customer can do it themselves, and the advisor explains the explanation if needed.",
            },
            {
              category: "SOFT HANDOFF, EVERY STEP",
              title: `"Speak with an advisor" is available always, not buried at the end.`,
              body: "The CTA is a green dot, not a desperate fallback. Customers who self-serve appreciate it; customers who need help take it earlier; advisors get cleaner handoffs because the customer arrives with state.",
            },
          ].map((principle) => (
            <div
              key={principle.category}
              className="bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] flex max-lg:flex-col gap-[2.22vw] max-lg:gap-2 items-start px-[2.22vw] max-lg:px-5 py-[1.67vw] max-lg:py-5"
            >
              <div className="w-[15.28vw] max-lg:w-full shrink-0">
                <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                  {principle.category}
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-[0.42vw] max-lg:gap-1">
                <p className="font-sans text-[1.18vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.3] tracking-[-0.012vw]">
                  {principle.title}
                </p>
                <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Solution detail: Izivente concept sprint */}
      <motion.div
        className="px-[3.33vw] max-lg:px-5 mt-[4.44vw] max-lg:mt-10"
        {...fadeUp}
      >
        <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#9c4221] tracking-[0.092vw]">
          IZIVENTE CONCEPT SPRINT
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[16px] font-semibold text-[#555] leading-[1.3] mt-[0.83vw]">
          Advisor-side: a sprint to fund the unification.
        </p>
        <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw] mt-[0.56vw]">
          Izivente was the advisor-facing desktop app. It was not in my shipped
          scope. Leadership hadn&rsquo;t yet committed engineering capacity to
          redesigning it. I led a one-week design sprint to produce a concept
          proposal: what Izivente would look like if it rendered the same product
          surface as Deep Purple, with role-aware additions for advisors. The
          output wasn&rsquo;t a shipped product. It was an artifact for a
          stakeholder conversation: a tangible answer to the question &ldquo;what
          would this even look like, and is it worth funding?&rdquo;
        </p>

        {/* 3 concept outcome cards */}
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 mt-[2.78vw] max-lg:mt-6">
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
              body: `No "switching tools" mid-call. The customer's screen and the advisor's screen become the same screen, with permissions. This is the architectural shift the concept was advocating for.`,
            },
          ].map((card) => (
            <div
              key={card.category}
              className="flex-1 bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-2"
            >
              <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
                {card.category}
              </p>
              <p className="font-sans text-[1.25vw] max-lg:text-[15px] font-semibold text-[#555] leading-[1.3] tracking-[-0.013vw]">
                {card.title}
              </p>
              <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
                {card.body}
              </p>
            </div>
          ))}
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
          <span className="font-semibold text-[#9c4221]">Consumer loan</span>
          {" "}first, then sequential rollout.
        </h2>

        {/* 4-stat row */}
        <div className="flex max-lg:flex-wrap gap-[2.22vw] max-lg:gap-6 mt-[2.78vw] max-lg:mt-6">
          {[
            {
              value: "+€1M",
              label: "FUNDING REQUESTS",
              desc: "Increase in funding requests in the first month after the consumer loan shipped under the unified flow.",
            },
            {
              value: "−42%",
              label: "INBOUND SUPPORT CALLS",
              desc: "Drop in customer-support calls related to the revolving-credit domain in the first month after launch.",
            },
            {
              value: "3",
              label: "PRODUCTS DEPLOYED",
              desc: "Consumer loan, personal loan, revolving loan. Same playbook each time, refined per product.",
            },
            {
              value: "1",
              label: "CONCEPT: IZIVENTE",
              desc: "Sprint output, not shipped: the advisor-side proposal that made the unification case to leadership for funding.",
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="flex-1 max-lg:basis-[calc(50%-12px)] flex flex-col gap-[0.56vw] max-lg:gap-1"
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

        {/* What these numbers proved */}
        <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 mt-[2.78vw] max-lg:mt-6">
          <div className="flex-1 bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-2">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR CUSTOMERS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              A simulator that teaches while it calculates. Plain-language
              explanations for every regulated term. Self-serve confidence
              that cut support calls by 42%.
            </p>
          </div>
          <div className="flex-1 bg-[#f2efe8] rounded-[0.97vw] max-lg:rounded-[8px] px-[1.67vw] max-lg:px-5 py-[1.94vw] max-lg:py-5 flex flex-col gap-[0.83vw] max-lg:gap-2">
            <p className="font-sans text-[0.76vw] max-lg:text-[11px] font-semibold text-[#888] tracking-[0.092vw]">
              FOR THE BUSINESS
            </p>
            <p className="font-sans text-[0.97vw] max-lg:text-[14px] font-normal text-[#555] leading-[1.45]">
              +&euro;1M in funding requests paid back the redesign&rsquo;s
              engineering cost in weeks and gave leadership the evidence to fund
              the rollout across all three products. The Izivente concept sprint
              made the case for the next phase: unifying the advisor side.
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
          What junior-me missed, and what junior-me{" "}
          <span className="font-semibold text-[#9c4221]">got right.</span>
        </h2>
        <div className="flex flex-col gap-[1.11vw] max-lg:gap-4 mt-[1.67vw] font-sans text-[1.25vw] max-lg:text-[15px] font-normal text-[#555] leading-[1.5] tracking-[-0.013vw]">
          <p>
            <span className="font-semibold">
              Interview all sides of the conversation.
            </span>{" "}
            I interviewed customers thoroughly and learned what they
            couldn&rsquo;t articulate. I didn&rsquo;t interview the people on
            the receiving end of every confused call: the advisors. The Izivente
            concept came together from talking to advisors late in the project.
            It would have come together faster if I&rsquo;d talked to them from
            the start.
          </p>
          <p>
            <span className="font-semibold">
              The brief is the floor, not the ceiling.
            </span>{" "}
            The mandate was &ldquo;redesign the credit products in Deep
            Purple.&rdquo; I did that, but also recognized that the actual
            problem was bigger than the brief, and led the Izivente concept work
            to make the case for the bigger play. That instinct is what I do on
            every senior project now. It started here.
          </p>
          <p>
            <span className="font-semibold">
              What I&rsquo;d do differently:
            </span>{" "}
            I&rsquo;d talk to advisors from day one, not just customers. Junior-me
            assumed the customer pain was the whole story. Senior-me would
            interview advisors first, because they hear the misunderstanding the
            customer can&rsquo;t name.
          </p>
        </div>
      </motion.div>

      {/* ── Closing navigation ── */}
      <div className="h-[5vw] max-lg:h-[60px]" />

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-sm border-t border-[#d9d9d9]">
        <div className="flex items-center px-[3.33vw] max-lg:px-5 py-[1.39vw] max-lg:py-4">
          <a
            href="/work"
            className="font-sans text-[1.39vw] max-lg:text-[16px] font-normal text-[#555] hover:underline underline-offset-4"
          >
            &larr; Back to work
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh] mt-[3.33vw] max-lg:mt-8">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
