"use client";

import { motion } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import Header from "./Header";

const companies = [
  "J.P. Morgan Chase & Co.",
  "XP Health",
  "Groupe BPCE",
  "Thales",
  "Orange",
];

const fieldNotes = [
  {
    image: "/images/field-architect.jpg",
    title: "Where it started",
    description:
      "ENSAD (school of architecture) 2015. Spatial thinking still shapes how I design interfaces.",
  },
  {
    image: "/images/field-wall-audit.jpg",
    title: "How I think",
    description:
      "The wall shows what experiences and ecosystems hide: where systems break, overlap, or contradict.",
  },
  {
    image: "/images/field-figjam.jpg",
    title: "What's next",
    description:
      "Multi-agent UX pipeline sketch, capstone on AI augmentation in design.",
  },
];

const principles = [
  {
    number: "01",
    title: "Design for the 2nd visit, not the 1st",
    description:
      "First impressions fade. I optimize for the person who's already decided to come back; streamlining their path, reducing friction, and making expertise accessible.",
  },
  {
    number: "02",
    title: "Speed is a feature. Polish is a feature. Pick your battles.",
    description:
      "I invest craft where it compounds: core flows, brand moments, high-frequency interactions. Everywhere else, I ship fast and learn.",
  },
  {
    number: "03",
    title: "The best design system is the one the team actually uses",
    description:
      "I build systems with clear guardrails, obvious defaults, and room to break rules when it matters. A component library gathering dust is just expensive documentation.",
  },
  {
    number: "04",
    title: "Design for the edge case, then hide it",
    description:
      "Empty states, errors, edge conditions; I design these with as much care as the happy path, then tuck them away. This is where craft shows.",
  },
];

const testimonials = [
  {
    text: `Nihel worked as a UX designer on a high-visibility project to create a new credit product accessible exclusively via the internet (PC, tablet, mobile) and mobile application.\nNihel demonstrated tremendous commitment and creativity in designing an optimal user journey and delivering a highly appreciated user experience.\nAvailable, proactive, and assertive in presenting her ideas, Nihel also knows how to be flexible and agile in rethinking screens or flows to incorporate "last-minute" new features.`,
    name: "Christophe Benard",
    role: "Product manager, BPCE",
  },
  {
    text: `...Nihel was able to successfully deliver multiple projects for us that will be developed into shipped features and products.\nThe quality of Nihel's work was excellent. She is very comfortable navigating between rough ideas and well-defined user flows, and she has good product intuition, backed up by research skills that her validate insights...`,
    name: "Austin Critchlow",
    role: "Lead Designer, XP Health",
  },
  {
    text: "Nihel played a major role in adopting UX Design Thinking at BPCE. User feedback has been overwhelmingly positive! Her empathy, creativity, and responsiveness are invaluable assets for any product owner.",
    name: "Kam Virakam",
    role: "Product Manager, BPCE",
  },
  {
    text: "Nihel played a major role in adopting UX Design Thinking at BPCE. User feedback has been overwhelmingly positive! Her empathy, creativity, and responsiveness are invaluable assets for any product owner.",
    name: "Kam Virakam",
    role: "Product Manager, BPCE",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

function TestimonialCard({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  return (
    <motion.div
      className="bg-[#f5f0e6] border border-[#ede7db] rounded-[1.11vw] p-[1.67vw] flex flex-col gap-[1.11vw] overflow-hidden w-[31.88vw]"
      {...fadeUp}
      transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
    >
      <div className="font-sans text-[1.04vw] leading-[1.6] text-[#333] flex-1">
        {t.text.split("\n").map((line, j) => (
          <p key={j} className={j < t.text.split("\n").length - 1 ? "mb-[0.83vw]" : ""}>
            {line}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-[0.83vw]">
        <div className="flex flex-col gap-[0.14vw] flex-1">
          <span className="font-sans font-semibold text-[0.97vw] text-[#333]">
            {t.name}
          </span>
          <span className="font-sans text-[0.83vw] text-[#666]">
            {t.role}
          </span>
        </div>
        <div className="w-[1.39vw] h-[1.39vw] bg-[#0967c2] rounded-[0.28vw] flex items-center justify-center">
          <span className="font-sans font-semibold text-[0.83vw] text-white leading-none">
            in
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen bg-cream overflow-x-hidden">
      <Header activeItem="ABOUT" />

      {/* Header spacer */}
      <div className="h-[19.4vw]" />

      {/* ── About hero ── */}
      <div className="flex gap-[6.94vw] items-center px-[3.33vw]">
        {/* Portrait */}
        <motion.div
          className="relative w-[38vw] h-[45.28vw] rounded-[1.39vw] overflow-hidden shrink-0"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/about-portrait.jpg"
            alt="Nihel Mouelhi"
            fill
            className="object-cover"
            sizes="38vw"
            priority
          />
        </motion.div>

        {/* Bio text */}
        <div className="flex flex-col gap-[2.22vw] flex-1 min-w-0 overflow-hidden">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h1 className="font-sans font-normal text-[3.89vw] leading-[1.15] text-text-primary">
              Interior architect turned product designer, building for millions.
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[1.11vw] font-sans text-[1.11vw] leading-[1.5] text-text-primary"
            {...fadeUp}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p>
              I&rsquo;ve designed products for millions of users across fintech,
              defense, healthcare and telecom; industries where one misstep
              breaks trust or costs money.
            </p>
            <p>
              I started as an interior architect before transitioning to product
              design, bringing spatial thinking and craft sensibility into
              digital experiences. Across 9 years, I&rsquo;ve built interfaces
              that leverage massive datasets, led cross-functional teams, and
              solved problems where empathy meets complexity.
            </p>
            <p>
              Now I&rsquo;m focused on AI, where the craft is still being
              defined and strategic thinking matters more than ever.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-[1.39vw] text-[1.11vw] leading-[1.5]"
            {...fadeUp}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="font-sans text-text-primary whitespace-nowrap shrink-0">
              SELECTED COMPANIES
            </span>
            <div className="relative overflow-hidden flex-1">
              <motion.div
                className="flex gap-[1.39vw] items-center whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 8, ease: "linear" } }}
              >
                {[...companies, ...companies].map((company, i) => (
                  <span key={i} className="flex items-center gap-[1.39vw] shrink-0">
                    <span className="font-sans font-semibold text-text-primary">
                      {company}
                    </span>
                    <span className="text-[#bbb]">|</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Field Notes ── */}
      <div className="mt-[3.33vw] flex flex-col gap-[2.22vw]">
        <motion.div
          className="flex flex-col gap-[0.56vw] px-[3.33vw]"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] text-text-primary">
            FIELD NOTES
          </p>
          <h2 className="font-sans font-normal text-[3.89vw] leading-[1.15] text-text-primary">
            Where it started, how I think, what&rsquo;s next.
          </h2>
        </motion.div>

        <div className="flex gap-[2.99vw] px-[3.33vw]">
          {fieldNotes.map((note, i) => (
            <motion.div
              key={note.title}
              className="flex flex-col gap-[1.67vw] flex-1"
              {...fadeUp}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
            >
              <div className="relative w-full h-[20.83vw] rounded-[1.39vw] overflow-hidden border border-[#6b6b6b]">
                <ShimmerImage
                  src={note.image}
                  alt={note.title}
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
              <div className="flex flex-col gap-[1.11vw]">
                <h3 className="font-sans font-semibold text-[1.67vw] leading-[1.2] text-text-primary">
                  {note.title}
                </h3>
                <p className="font-sans text-[1.11vw] leading-[1.5] text-text-primary">
                  {note.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Design Principles ── */}
      <div className="mt-[3.33vw] px-[3.33vw]">
        <motion.div
          className="flex flex-col gap-[0.56vw] mb-[2.22vw]"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] text-text-primary">
            MY DESIGN PRINCIPLES
          </p>
          <h2 className="font-sans font-normal text-[3.89vw] leading-[1.15] text-text-primary">
            Four rules I design by.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-[1.67vw] gap-y-[2.22vw]">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              className="flex flex-col gap-[1.11vw]"
              {...fadeUp}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <p className="font-sans text-[1.11vw] text-[#bbb]">{p.number}</p>
              <h3 className="font-sans font-semibold text-[1.67vw] leading-[1.3] text-text-primary">
                {p.title}
              </h3>
              <p className="font-sans text-[1.11vw] leading-[1.5] text-text-primary">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="mt-[3.33vw] px-[3.33vw]">
        <motion.div
          className="flex flex-col gap-[0.56vw] mb-[2.22vw]"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] text-text-primary">
            IN THEIR WORDS
          </p>
          <h2 className="font-sans font-normal text-[3.89vw] leading-[1.15] text-text-primary">
            A few perspectives on working together
          </h2>
        </motion.div>

        <div className="relative">
          {/* Row 1 */}
          <div className="flex gap-[1.67vw] mb-[1.67vw]">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={i} t={t} i={i} />
            ))}
          </div>
          {/* Row 2 — offset for staggered feel */}
          <div className="flex gap-[1.67vw] pl-[14vw]">
            {testimonials.slice(2).map((t, i) => (
              <TestimonialCard key={i + 2} t={t} i={i + 2} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3.33vw] py-[2vh] mt-[3.33vw]">
        <span className="font-sans text-[0.76vw] text-text-secondary whitespace-nowrap">
          © 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
