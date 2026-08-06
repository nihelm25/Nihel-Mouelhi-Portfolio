"use client";

import { motion } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import Header from "./Header";

type CaseCardProps = {
  heading: string;
  company: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  visualBg: string;
  visualContent: React.ReactNode;
  index: number;
  href?: string;

};

/* ── Reusable browser-chrome wrapper ── */
function BrowserChrome({
  chromeBg = "#e1e9ea",
  showUrlBar = false,
  urlText = "",
  children,
}: {
  chromeBg?: string;
  showUrlBar?: boolean;
  urlText?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-full rounded-[0.56vw] overflow-hidden flex flex-col"
      style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.08)" }}
    >
      {/* Chrome bar */}
      <div
        className="flex gap-[0.35vw] items-center px-[0.9vw] h-[3.47vw] shrink-0"
        style={{ backgroundColor: chromeBg }}
      >
        <div className="w-[0.56vw] h-[0.56vw] rounded-full bg-[#ff5f57]" />
        <div className="w-[0.56vw] h-[0.56vw] rounded-full bg-[#ffbd2e]" />
        <div className="w-[0.56vw] h-[0.56vw] rounded-full bg-[#28ca41]" />
        {showUrlBar && (
          <div className="flex-1 flex justify-center ml-[1.39vw]">
            <div className="bg-white/60 rounded-[0.35vw] px-[0.83vw] py-[0.21vw] min-w-[55%] text-center flex items-center justify-center gap-[0.28vw]">
              <span className="font-sans text-[0.35vw] text-[#999]">&#128274;</span>
              <span className="font-sans text-[0.42vw] text-[#666]">
                {urlText}
              </span>
            </div>
          </div>
        )}
      </div>
      {/* Content area */}
      <div className="relative flex-1 overflow-hidden bg-white">{children}</div>
    </div>
  );
}

/* ── Card 1 Visual: JP Morgan Dashboard ── */
function JPMorganVisual() {
  return (
    <ShimmerImage
      src="/images/jpmorgan-heroshot.png"
      alt="JP Morgan Workplace Solutions Dashboard"
      fill
      className="object-cover pointer-events-none"
      sizes="(max-width: 1024px) 100vw, 64vw"
    />
  );
}

/* ── Card 2 Visual: SAFE Surveillance Platform ── */
function SAFEVisual() {
  return (
    <ShimmerImage
      src="/images/safe-heroshot.png"
      alt="SAFE Surveillance Platform"
      fill
      className="object-cover pointer-events-none"
      sizes="(max-width: 1024px) 100vw, 64vw"
    />
  );
}

/* ── Card 3 Visual: ESG Workspace ── */
function ESGVisual() {
  return (
    <ShimmerImage
      src="/images/esg-browser.png"
      alt="ESG Workspace"
      fill
      className="object-cover pointer-events-none"
      sizes="(max-width: 1024px) 100vw, 64vw"
    />
  );
}

/* ── Card 4 Visual: Deep Purple BPCE Banking ── */
function DeepPurpleVisual() {
  return (
    <ShimmerImage
      src="/images/deep-purple-heroshot.png"
      alt="Deep Purple BPCE Banking"
      fill
      className="object-cover pointer-events-none"
      sizes="(max-width: 1024px) 100vw, 64vw"
    />
  );
}

/* ── Card 5 Visual: Design Pipeline Capstone ── */
function DesignPipelineVisual() {
  return (
    <div className="absolute inset-0 pt-[3.5vw] max-lg:pt-6 pl-[3.5vw] max-lg:pl-6">
      <div className="relative w-full h-full rounded-tl-[0.56vw] max-lg:rounded-tl-[6px] overflow-hidden">
        <ShimmerImage
          src="/images/pipeline-hero.png"
          alt="Design Pipeline Capstone"
          fill
          className="object-cover object-left-top pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 64vw"
        />
      </div>
    </div>
  );
}

/* ── Project data ── */
const projects: Omit<CaseCardProps, "index">[] = [
  {
    heading: "Replacing a legacy equity platform for a global participant base",
    company: "JP Morgan Chase & Co",
    tags: ["B2C", "BANKING"],
    metrics: [
      { value: "$19B", label: "Assets under administration" },
      { value: "200K", label: "Participants migrated on the platform" },
    ],
    visualBg: "#0a5264",
    visualContent: <JPMorganVisual />,
    href: "/work/workplace-solutions",
  },
  {
    heading:
      "AI that augments a 14-person control room without breaking the chain of command",
    company: "Thales",
    tags: ["B2B", "AI", "TRANSPORT"],
    metrics: [
      { value: "~5min", label: "Report to interception target" },
      { value: "40K", label: "Cameras across the Paris underground" },
    ],
    visualBg: "#0e1828",
    visualContent: <SAFEVisual />,
    href: "/work/safe",
  },
  {
    heading:
      "Unifying three opaque internal tools into one workspace for ESG methodologies",
    company: "JP Morgan Chase & Co",
    tags: ["B2E", "B2C", "FINTECH"],
    metrics: [
      { value: "3→1", label: "Legacy tools consolidated" },
      { value: "200+", label: "Methodologies managed in\none workspace" },
    ],
    visualBg: "#1a4a73",
    visualContent: <ESGVisual />,
    href: "/work/specificationworkbench",
  },
  {
    heading:
      "An AI pipeline that cuts ticket intake from 45 minutes to 90 seconds",
    company: "Stanford Capstone",
    tags: ["AI", "B2E", "DESIGN OPS"],
    metrics: [
      { value: "−97%", label: "Intake time: 45 min\ndown to 90 seconds" },
      { value: "60s", label: "Label to structured brief,\nend to end" },
    ],
    visualBg: "#8c1c1c",
    visualContent: <DesignPipelineVisual />,
    href: "/work/design-pipeline",
  },
  {
    heading: "One unified product surface for BPCE credit products",
    company: "BPCE Group",
    tags: ["B2C", "B2E", "BANKING"],
    metrics: [
      { value: "+€1M", label: "Funding requests,\nfirst month" },
      { value: "−42%", label: "Inbound support calls" },
    ],
    visualBg: "#5a2a82",
    visualContent: <DeepPurpleVisual />,
    href: "/work/deep-purple",
  },
];

function CaseCard({
  heading,
  company,
  tags,
  metrics,
  visualBg,
  visualContent,
  index,
  href,
}: CaseCardProps) {
  const card = (
    <motion.div
      className={`bg-[#faf6ee] rounded-[1.39vw] max-lg:rounded-[12px] overflow-hidden flex max-lg:flex-col-reverse w-full border border-[#d9d9d9] transition-all duration-300 ease-out${href ? " cursor-pointer hover:shadow-[0px_8px_24px_0px_rgba(100,100,100,0.25)] hover:border-[#bbb]" : ""}`}
      style={{ boxShadow: "0px 4px 4px 0px rgba(127,127,127,0.25)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
      whileHover={href ? { y: -4 } : undefined}
    >
      {/* Left -- text content */}
      <div className="w-[36.11%] max-lg:w-full shrink-0 p-[3.33vw] max-lg:p-5 flex flex-col justify-between max-lg:gap-5">
        <div className="flex flex-col gap-[1.1vw] max-lg:gap-3">
          <p className="font-sans font-semibold text-[0.76vw] max-lg:text-[11px] text-[#888] tracking-[0.092vw] uppercase">
            {company}
          </p>
          <h3 className="font-sans font-light text-[1.8vw] max-lg:text-[18px] leading-[1.25] tracking-[-0.045vw] text-[#555]">
            {heading}
          </h3>
          <div className="flex gap-[0.56vw] max-lg:gap-2 items-center flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#6b6b6b] rounded-full px-[1.1vw] max-lg:px-3 py-[0.56vw] max-lg:py-1.5 font-sans text-[0.625vw] max-lg:text-[10px] tracking-[1.62px] text-[#555] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[1.1vw] max-lg:gap-3">
          <div className="h-px bg-[#c6c6c6] w-full" />
          <div className="flex gap-[1.39vw] max-lg:gap-4 items-start text-[#555]">
            {metrics.map((m) => (
              <div key={m.value} className="flex flex-col flex-1">
                <p className="font-sans font-bold text-[3.06vw] max-lg:text-[28px] tracking-[-0.12vw] leading-none whitespace-nowrap">
                  {m.value}
                </p>
                <p className="font-sans font-light text-[0.76vw] max-lg:text-[11px] leading-[1.45] mt-[0.28vw] whitespace-pre-line">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right -- visual */}
      <div
        className="flex-1 relative overflow-hidden min-h-[36.11vw] max-lg:min-h-[200px] max-lg:aspect-[16/10] border-l max-lg:border-l-0 border-[rgba(255,255,255,0.06)] group-hover/card:scale-[1.02] transition-transform duration-500 ease-out"
        style={{ backgroundColor: visualBg }}
      >
        {visualContent}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline text-inherit group/card">
        {card}
      </a>
    );
  }

  return card;
}

export default function WorkPage() {
  return (
    <section className="relative w-full min-h-full bg-cream">
      <Header activeItem="WORK" />

      {/* Header spacer */}
      <div className="h-[11.1vw] max-lg:h-[80px]" />

      {/* Project cards — sticky stacking (desktop), normal flow (mobile) */}
      <div className="px-[3.33vw] max-lg:px-5 pb-[2.22vw] max-lg:pb-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`sticky max-lg:static ${i < projects.length - 1 ? "mb-[5vw] max-lg:mb-6" : ""}`}
            style={{ zIndex: i + 1, top: `${2 + i * 1.4}vw` }}
          >
            <CaseCard {...project} index={i} />
          </div>
        ))}
        {/* Spacer so the last card can reach its sticky position — desktop only */}
        <div className="h-[25vw] max-lg:h-0" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh]">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
