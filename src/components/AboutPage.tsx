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
      "ENSAD, school of architecture, 2015. I learned to design space before I designed screens. Spatial thinking still shapes how I work.",
  },
  {
    image: "/images/field-wall-audit.jpg",
    title: "How I think",
    description:
      "Everything goes on the wall first. Physical mapping exposes what flows and ecosystem diagrams hide: where systems break, overlap, or contradict each other.",
  },
  {
    image: "/images/field-figjam.jpg",
    title: "What I built",
    description:
      "A multi-agent pipeline that automates design intake and discovery, end to end. Built during Stanford’s Leading with AI program, now in pilot on my team.",
  },
];

const howIWork = [
  {
    title: "I set direction and align the room.",
    description:
      "I own the design vision for Workplace Solutions and Specification Workbench, working across product squads with PMs, engineers, and business partners. Most of the job is getting a room to agree on what the problem actually is before anyone opens Figma.",
  },
  {
    title: "I raise the bar for the team.",
    description:
      "Mentored 5 designers through J.P. Morgan’s mentoring program. Built our critique practice, created the hiring exercise for designers, and defined the definition of done and handoff workflow across design, product, and engineering.",
  },
  {
    title: "I build systems that scale.",
    description:
      "Built the design system for our reporting products. Designed Workbench to consolidate three fragmented tools into one unified experience. Designed an AI-assisted incident-response system deployed to SNCF control rooms, the first stop in a rollout targeting the wider Paris metro network.",
  },
];

const principles = [
  {
    number: "01",
    title: "Design for the second visit, not the first",
    description:
      "First impressions fade. I optimize for the person who has already decided to come back: streamlining their path, reducing friction, making expertise accessible.",
  },
  {
    number: "02",
    title: "Speed is a feature. Polish is a feature. Pick your battles.",
    description:
      "I invest craft where it compounds: core flows, brand moments, high-frequency interactions. Everywhere else, I move fast and learn.",
  },
  {
    number: "03",
    title: "Systems earn adoption, they don’t get mandated",
    description:
      "Clear guardrails, obvious defaults, and a contribution path, so the library keeps growing without me maintaining it. A component library gathering dust is just expensive documentation.",
  },
  {
    number: "04",
    title: "Design for the edge case, then hide it",
    description:
      "Empty states, errors, edge conditions. I give these as much attention as the happy path, then tuck them away. Edge cases are where quality actually gets decided.",
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
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

function TestimonialCard({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  return (
    <motion.div
      className="bg-[#f5f0e6] border border-[#ede7db] rounded-[1.11vw] max-lg:rounded-[8px] p-[1.67vw] max-lg:p-5 flex flex-col gap-[1.11vw] max-lg:gap-4 overflow-hidden flex-1 max-lg:w-full"
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
      <div className="h-[11.1vw] max-lg:h-[150px]" />

      {/* ── About hero ── */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[1.67vw] max-lg:gap-8 items-start px-[3.33vw] max-lg:px-5">
        {/* Portrait */}
        <motion.div
          className="relative max-lg:w-full aspect-[4/5] max-lg:aspect-[4/3] rounded-[1.39vw] max-lg:rounded-[12px] overflow-hidden"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <ShimmerImage
            src="/images/about-portrait.jpg"
            alt="Nihel Mouelhi"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1023px) 100vw, 45vw"
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
              I lead through direction, not only craft.
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[1.11vw] max-lg:gap-4 font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-primary"
            {...fadeUp}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p>
              I design for the hard spaces: fintech, defense, healthcare, telecom. Systems with real consequences, used by people who just want something that works and feels right.
            </p>
            <ul className="flex flex-col gap-[0.56vw] max-lg:gap-2 list-disc pl-[1.2em]">
              <li>At J.P. Morgan Chase I own the design direction for an equity platform serving 200K+ participants across 50+ jurisdictions and $19B in assets</li>
              <li>Before product, I was an interior architect. The medium changed, the mindset didn&rsquo;t: see the whole before the parts, set a clear direction, and ship products that feel inevitable</li>
              <li>Trilingual and multicultural. Led work across Tunisia, France, and the US. That range shapes how I listen and how I move a room toward a decision</li>
              <li>Outside work, the same eye goes to fashion and interiors. Same obsession with getting it right</li>
            </ul>
          </motion.div>

          <motion.div
            className="flex items-center gap-[1.39vw] max-lg:gap-3 text-[1.11vw] max-lg:text-[13px] leading-[1.5]"
            {...fadeUp}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="font-sans text-text-primary whitespace-nowrap shrink-0">
              COMPANIES I WORKED WITH
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

      {/* ── How I Work ── */}
      <div className="mt-[4.44vw] max-lg:mt-10 px-[3.33vw] max-lg:px-5">
        <motion.div
          className="flex flex-col gap-[0.56vw] mb-[3.33vw] max-lg:mb-8"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-text-primary">
            HOW I WORK
          </p>
          <h2 className="font-sans font-normal text-[3.33vw] max-lg:text-[26px] leading-[1.15] text-text-primary">
            Direction, craft, and team growth.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {howIWork.map((item, i) => (
            <motion.div
              key={item.title}
              className="py-[2.22vw] max-lg:py-6 border-t border-[#d9d9d9] grid grid-cols-[1fr_1.5fr] max-lg:grid-cols-1 gap-x-[2.22vw] gap-y-[0.56vw] max-lg:gap-2 items-baseline"
              {...fadeUp}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <h3 className="font-sans font-semibold text-[1.39vw] max-lg:text-[17px] leading-[1.3] text-text-primary">
                {item.title}
              </h3>
              <p className="font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-primary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Field Notes ── */}
      <div className="mt-[4.44vw] max-lg:mt-10 flex flex-col gap-[2.22vw] max-lg:gap-6">
        <motion.div
          className="flex flex-col gap-[0.56vw] px-[3.33vw] max-lg:px-5"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-text-primary">
            FIELD NOTES
          </p>
          <h2 className="font-sans font-normal text-[3.33vw] max-lg:text-[26px] leading-[1.15] text-text-primary">
            Where it started, how I think, what&rsquo;s next.
          </h2>
        </motion.div>

        <div className="grid grid-cols-[1.2fr_1fr] max-lg:grid-cols-1 gap-[1.67vw] max-lg:gap-6 px-[3.33vw] max-lg:px-5">
          {/* Featured card */}
          <motion.div
            className="flex flex-col gap-[1.67vw] max-lg:gap-4"
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="relative w-full aspect-[4/3] max-lg:h-[200px] max-lg:aspect-auto rounded-[1.39vw] max-lg:rounded-[8px] overflow-hidden border border-[#d9d9d9]">
              <ShimmerImage
                src={fieldNotes[0].image}
                alt={fieldNotes[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 55vw"
              />
            </div>
            <div className="flex flex-col gap-[1.11vw] max-lg:gap-2">
              <h3 className="font-sans font-semibold text-[1.67vw] max-lg:text-[18px] leading-[1.2] text-text-primary">
                {fieldNotes[0].title}
              </h3>
              <p className="font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-primary">
                {fieldNotes[0].description}
              </p>
            </div>
          </motion.div>

          {/* Stacked smaller cards */}
          <div className="flex flex-col gap-[1.67vw] max-lg:gap-6">
            {fieldNotes.slice(1).map((note, i) => (
              <motion.div
                key={note.title}
                className="flex flex-col gap-[1.11vw] max-lg:gap-4 flex-1"
                {...fadeUp}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
              >
                <div className="relative w-full aspect-[16/9] max-lg:h-[200px] max-lg:aspect-auto rounded-[1.39vw] max-lg:rounded-[8px] overflow-hidden border border-[#d9d9d9]">
                  <ShimmerImage
                    src={note.image}
                    alt={note.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-col gap-[0.56vw] max-lg:gap-2">
                  <h3 className="font-sans font-semibold text-[1.39vw] max-lg:text-[18px] leading-[1.2] text-text-primary">
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
      </div>

      {/* ── Design Principles ── */}
      <div className="mt-[4.44vw] max-lg:mt-10 px-[3.33vw] max-lg:px-5">
        <motion.div
          className="mb-[3.33vw] max-lg:mb-8"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sans font-normal text-[3.33vw] max-lg:text-[26px] leading-[1.15] text-text-primary">
            Four rules I design by.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[3.33vw] gap-y-[3.33vw] max-lg:gap-y-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              className="flex flex-col gap-[0.83vw] max-lg:gap-3"
              {...fadeUp}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <p className="font-sans text-[2.22vw] max-lg:text-[24px] font-light text-accent leading-none">{p.number}</p>
              <h3 className="font-sans font-semibold text-[1.39vw] max-lg:text-[17px] leading-[1.3] text-text-primary">
                {p.title}
              </h3>
              <p className="font-sans text-[1.11vw] max-lg:text-[15px] leading-[1.5] text-text-secondary">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="mt-[4.44vw] max-lg:mt-10 px-[3.33vw] max-lg:px-5">
        <motion.div
          className="flex flex-col gap-[0.56vw] mb-[2.22vw] max-lg:mb-6"
          {...fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[1.11vw] max-lg:text-[13px] text-text-primary">
            IN THEIR WORDS
          </p>
          <h2 className="font-sans font-normal text-[3.33vw] max-lg:text-[26px] leading-[1.15] text-text-primary">
            A few perspectives on working together
          </h2>
        </motion.div>

        <div className="flex flex-col gap-[1.67vw] max-lg:gap-4">
          <TestimonialCard t={testimonials[0]} i={0} />
          <div className="flex max-lg:flex-col gap-[1.67vw] max-lg:gap-4 items-stretch">
            {testimonials.slice(1).map((t, i) => (
              <TestimonialCard key={i + 1} t={t} i={i + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Get in Touch ── */}
      <div id="contact" className="mt-[4.44vw] max-lg:mt-10 px-[3.33vw] max-lg:px-5 pb-[3.33vw] max-lg:pb-8">
        <div className="border-t border-divider pt-[3.33vw] max-lg:pt-8">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[1.67vw] max-lg:gap-8 items-start">
            <motion.div
              className="max-lg:w-full flex flex-col gap-[1.11vw] max-lg:gap-3"
              {...fadeUp}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-sans font-normal text-[3.33vw] max-lg:text-[26px] leading-[1.15] text-text-primary">
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
