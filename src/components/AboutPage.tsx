"use client";

import { motion } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import Header from "./Header";

const contactSections = [
  {
    label: "EMAIL",
    value: "nihel.mouelhi@gmail.com",
    href: "mailto:nihel.mouelhi@gmail.com",
  },
  {
    label: "CONNECT",
    value: "Linkedin",
    href: "https://www.linkedin.com/in/nihel-mouelhi-047552a8/",
  },
  {
    label: "LOCATION",
    value: "Los Angeles, CA",
  },
];

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
    title: "What I'm building",
    description:
      "A multi-agent pipeline that automates design intake and discovery, end-to-end.",
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
      className="bg-[#f5f0e6] border border-[#ede7db] rounded-[1.11vw] max-lg:rounded-[8px] p-[1.67vw] max-lg:p-5 flex flex-col gap-[1.11vw] max-lg:gap-4 overflow-hidden w-[31.88vw] max-lg:w-full"
      {...fadeUp}
      transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
    >
      <div className="font-sans text-[1.04vw] max-lg:text-[14px] leading-[1.6] text-[#333] flex-1">
        {t.text.split("\n").map((line, j) => (
          <p key={j} className={j < t.text.split("\n").length - 1 ? "mb-[0.83vw]" : ""}>
            {line}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-[0.83vw] max-lg:gap-3">
        <div className="flex flex-col gap-[0.14vw] flex-1">
          <span className="font-sans font-semibold text-[0.97vw] max-lg:text-[14px] text-[#333]">
            {t.name}
          </span>
          <span className="font-sans text-[0.83vw] max-lg:text-[12px] text-[#666]">
            {t.role}
          </span>
        </div>
        <div className="w-[1.39vw] max-lg:w-[18px] h-[1.39vw] max-lg:h-[18px] bg-[#0967c2] rounded-[0.28vw] max-lg:rounded-[3px] flex items-center justify-center">
          <span className="font-sans font-semibold text-[0.83vw] max-lg:text-[11px] text-white leading-none">
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
      <div className="h-[19.4vw] max-lg:h-[100px]" />

      {/* ── About hero ── */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[1.67vw] max-lg:gap-8 items-start px-[3.33vw] max-lg:px-5">
        {/* Portrait */}
        <motion.div
          className="relative max-lg:w-full self-stretch max-lg:self-auto max-lg:h-[300px] rounded-[1.39vw] max-lg:rounded-[12px] overflow-hidden"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/about-portrait.jpg"
            alt="Nihel Mouelhi"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 38vw"
            priority
          />
        </motion.div>

        {/* Bio text */}
        <div className="flex flex-col gap-[2.22vw] max-lg:gap-6 min-w-0 overflow-hidden max-lg:overflow-visible max-lg:w-full">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h1 className="font-sans font-normal text-[3.89vw] max-lg:text-[28px] leading-[1.15] text-text-primary">
              Interior architect turned product designer, building for millions.
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[1.11vw] max-lg:gap-4 font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-primary"
            {...fadeUp}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p>
              I design products for the hard spaces, fintech, defense,
              healthcare, telecom, but also for millions of everyday users who
              just want something that works and feels right.
            </p>
            <p>
              I started as an interior architect. The medium changed, the
              mindset didn&rsquo;t. That&rsquo;s what lets me think in systems,
              lead with clarity, and craft products that feel inevitable.
            </p>
            <p className="font-semibold mt-[0.5vw] max-lg:mt-1">
              What shapes how I work:
            </p>
            <ul className="flex flex-col gap-[1.11vw] max-lg:gap-4 list-disc pl-[1.2em]">
              <li>
                Trilingual and multicultural, I&rsquo;ve worked across Tunisia,
                France, and the US with cross-functional teams. That range shapes
                how I listen and navigate rooms where not everyone sees the same
                problem.
              </li>
              <li>
                My interior architecture background gives me a systems
                perspective. I see the whole before the parts, holding strategic
                ambiguity while staying grounded in craft.
              </li>
              <li>
                Right now I&rsquo;m deep in AI. I built a multi-agent pipeline
                that automates intake and design discovery, and designed an
                AI-assisted incident-response system for transit control rooms.
              </li>
            </ul>
            <p>
              Outside work, you&rsquo;ll find me applying the same eye to
              fashion and interiors. Different mediums, same obsession with
              getting it right.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-[1.39vw] max-lg:gap-3 text-[1.11vw] max-lg:text-[13px] leading-[1.5]"
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
      <div className="mt-[3.33vw] max-lg:mt-8 flex flex-col gap-[2.22vw] max-lg:gap-6">
        <motion.div
          className="flex flex-col gap-[0.56vw] px-[3.33vw] max-lg:px-5"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-text-primary">
            FIELD NOTES
          </p>
          <h2 className="font-sans font-normal text-[3.89vw] max-lg:text-[28px] leading-[1.15] text-text-primary">
            Where it started, how I think, what&rsquo;s next.
          </h2>
        </motion.div>

        <div className="flex max-lg:flex-col gap-[2.99vw] max-lg:gap-6 px-[3.33vw] max-lg:px-5">
          {fieldNotes.map((note, i) => (
            <motion.div
              key={note.title}
              className="flex flex-col gap-[1.67vw] max-lg:gap-4 flex-1"
              {...fadeUp}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
            >
              <div className="relative w-full h-[20.83vw] max-lg:h-[200px] rounded-[1.39vw] max-lg:rounded-[8px] overflow-hidden border border-[#d9d9d9]">
                <ShimmerImage
                  src={note.image}
                  alt={note.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 30vw"
                />
              </div>
              <div className="flex flex-col gap-[1.11vw] max-lg:gap-2">
                <h3 className="font-sans font-semibold text-[1.67vw] max-lg:text-[18px] leading-[1.2] text-text-primary">
                  {note.title}
                </h3>
                <p className="font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-primary">
                  {note.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Design Principles ── */}
      <div className="mt-[3.33vw] max-lg:mt-8 px-[3.33vw] max-lg:px-5">
        <motion.div
          className="flex flex-col gap-[0.56vw] mb-[2.22vw] max-lg:mb-6"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-text-primary">
            MY DESIGN PRINCIPLES
          </p>
          <h2 className="font-sans font-normal text-[3.89vw] max-lg:text-[28px] leading-[1.15] text-text-primary">
            Four rules I design by.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[1.67vw] gap-y-[2.22vw] max-lg:gap-y-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              className="flex flex-col gap-[1.11vw]"
              {...fadeUp}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-[#bbb]">{p.number}</p>
              <h3 className="font-sans font-semibold text-[1.67vw] max-lg:text-[18px] leading-[1.3] text-text-primary">
                {p.title}
              </h3>
              <p className="font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-primary">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="mt-[3.33vw] max-lg:mt-8 px-[3.33vw] max-lg:px-5">
        <motion.div
          className="flex flex-col gap-[0.56vw] mb-[2.22vw] max-lg:mb-6"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-text-primary">
            IN THEIR WORDS
          </p>
          <h2 className="font-sans font-normal text-[3.89vw] max-lg:text-[28px] leading-[1.15] text-text-primary">
            A few perspectives on working together
          </h2>
        </motion.div>

        <div className="relative">
          {/* Row 1 */}
          <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 mb-[1.67vw] max-lg:mb-4">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={i} t={t} i={i} />
            ))}
          </div>
          {/* Row 2 — offset for staggered feel */}
          <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 pl-[14vw] max-lg:pl-0">
            {testimonials.slice(2).map((t, i) => (
              <TestimonialCard key={i + 2} t={t} i={i + 2} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Get in Touch ── */}
      <div id="contact" className="mt-[6.94vw] max-lg:mt-16 px-[3.33vw] max-lg:px-5 pb-[3.33vw] max-lg:pb-8">
        <div className="border-t border-divider pt-[3.33vw] max-lg:pt-8">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[1.67vw] max-lg:gap-8 items-start">
            <motion.div
              className="max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3"
              {...fadeUp}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-sans font-normal text-[3.89vw] max-lg:text-[28px] leading-[1.15] text-text-primary">
                Let&rsquo;s turn ambitious<br />ideas into products.
              </h2>
              <div className="flex items-center gap-[0.56vw] max-lg:gap-2 mt-[0.56vw] max-lg:mt-1">
                <div className="w-[0.83vw] max-lg:w-[10px] h-[0.83vw] max-lg:h-[10px] rounded-full bg-[#28ca41]" />
                <span className="font-sans text-[0.97vw] max-lg:text-[13px] tracking-[2.2px] text-text-primary">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>

            <div className="max-lg:w-full flex flex-col gap-[3.33vw] max-lg:gap-6">
              {contactSections.map((section, i) => (
                <motion.div
                  key={section.label}
                  className="flex flex-col gap-[0.56vw]"
                  {...fadeUp}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                >
                  <span className="font-sans text-[0.97vw] max-lg:text-[12px] leading-[16.5px] tracking-[2.2px] text-text-primary">
                    {section.label}
                  </span>
                  {section.href ? (
                    <a
                      href={section.href}
                      target={section.href.startsWith("http") ? "_blank" : undefined}
                      rel={section.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-sans text-[1.67vw] max-lg:text-[18px] tracking-[2.2px] text-text-primary hover:underline underline-offset-4 transition-all"
                    >
                      {section.value}
                    </a>
                  ) : (
                    <span className="font-sans text-[1.67vw] max-lg:text-[18px] tracking-[2.2px] text-text-primary">
                      {section.value}
                    </span>
                  )}
                  {i < contactSections.length - 1 && (
                    <div className="h-px bg-divider w-full mt-[1.67vw]" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh]">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          © 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
