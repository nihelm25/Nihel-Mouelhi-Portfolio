"use client";

import { motion } from "framer-motion";
import Header from "./Header";

type CaseCardProps = {
  heading: string;
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
    <img
      src="/images/jpmorgan-heroshot.png"
      alt="JP Morgan Workplace Solutions Dashboard"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
  );
}

/* ── Card 2 Visual: SAFE Surveillance Platform ── */
function SAFEVisual() {
  return (
    <img
      src="/images/safe-heroshot.png"
      alt="SAFE Surveillance Platform"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
  );
}

/* ── Card 3 Visual: ESG Workspace ── */
function ESGVisual() {
  return (
    <img
      src="/images/esg-heroshot.png"
      alt="ESG Workspace"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
  );
}

/* ── Card 4 Visual: Deep Purple BPCE Banking ── */
function DeepPurpleVisual() {
  return (
    <img
      src="/images/deep-purple-heroshot.png"
      alt="Deep Purple BPCE Banking"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
  );
}

/* ── Project data ── */
const projects: Omit<CaseCardProps, "index">[] = [
  {
    heading: "Replacing a legacy equity platform for a global participant base",
    tags: ["B2C", "FINTECH", "EQUITY"],
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
      "Unifying two opaque internal tools into one workspace for ESG methodologies",
    tags: ["B2E", "B2C", "FINTECH"],
    metrics: [
      { value: "2→1", label: "Legacy tools consolidated" },
      { value: "200+", label: "Methodologies managed in\none workspace" },
    ],
    visualBg: "#1a4a73",
    visualContent: <ESGVisual />,
  },
  {
    heading: "One unified product surface for BPCE credit products",
    tags: ["B2C", "B2E", "BANKING"],
    metrics: [
      { value: "+€1M", label: "Funding requests,\nfirst month" },
      { value: "−42%", label: "Inbound support calls" },
    ],
    visualBg: "#5a2a82",
    visualContent: <DeepPurpleVisual />,
  },
];

function CaseCard({
  heading,
  tags,
  metrics,
  visualBg,
  visualContent,
  index,
  href,
}: CaseCardProps) {
  const card = (
    <motion.div
      className={`bg-[#faf6ee] rounded-[1.39vw] overflow-hidden flex w-full border border-[#d9d9d9]${href ? " cursor-pointer" : ""}`}
      style={{ boxShadow: "0px 4px 4px 0px rgba(127,127,127,0.25)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
    >
      {/* Left -- text content */}
      <div className="w-[36.11%] shrink-0 p-[3.33vw] flex flex-col justify-between">
        <div className="flex flex-col gap-[1.1vw]">
          <h3 className="font-sans font-light text-[1.8vw] leading-[1.25] tracking-[-0.045vw] text-[#555]">
            {heading}
          </h3>
          <div className="flex gap-[0.56vw] items-center flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#6b6b6b] rounded-full px-[1.1vw] py-[0.56vw] font-sans text-[0.625vw] tracking-[1.62px] text-[#555] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[1.1vw]">
          <div className="h-px bg-[#c6c6c6] w-full" />
          <div className="flex gap-[1.39vw] items-start text-[#555]">
            {metrics.map((m) => (
              <div key={m.value} className="flex flex-col flex-1">
                <p className="font-sans font-bold text-[3.06vw] tracking-[-0.12vw] leading-none whitespace-nowrap">
                  {m.value}
                </p>
                <p className="font-sans font-light text-[0.76vw] leading-[1.45] mt-[0.28vw] whitespace-pre-line">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right -- visual */}
      <div
        className="flex-1 relative overflow-hidden min-h-[36.11vw] border-l border-[rgba(255,255,255,0.06)]"
        style={{ backgroundColor: visualBg }}
      >
        {visualContent}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline text-inherit">
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
      <div className="h-[19.4vw]" />

      {/* Project cards — sticky stacking */}
      <div className="px-[3.33vw] pb-[2.22vw]">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`sticky ${i < projects.length - 1 ? "mb-[5vw]" : ""}`}
            style={{ zIndex: i + 1, top: `${2 + i * 1.4}vw` }}
          >
            <CaseCard {...project} index={i} />
          </div>
        ))}
        {/* Spacer so the last card can reach its sticky position */}
        <div className="h-[25vw]" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3.33vw] py-[2vh]">
        <span className="font-sans text-[0.76vw] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
