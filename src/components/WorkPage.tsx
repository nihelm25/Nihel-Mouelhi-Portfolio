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
    <div className="absolute top-[2.78vw] left-[4.17vw] right-[-1.39vw] bottom-[-1.39vw]">
      <BrowserChrome
        chromeBg="#e1e9ea"
        showUrlBar
        urlText="workplacesolutions/login/dashboard"
      >
        <img
          src="/images/dashboard-screenshot.png"
          alt="JP Morgan Workplace Solutions Dashboard"
          className="absolute top-0 left-0 w-full object-cover object-top pointer-events-none"
        />
      </BrowserChrome>
    </div>
  );
}

/* ── Card 2 Visual: SAFE Surveillance Platform ── */
function SAFEVisual() {
  return (
    <>
      {/* Desktop browser window */}
      <div className="absolute top-[2.78vw] left-[9.51vw] right-[-16.04vw] bottom-[-10.39vw]">
        <BrowserChrome chromeBg="#2e405c">
          <div className="absolute inset-0 bg-[#0e1828] flex flex-col">
            {/* SAFE Nav */}
            <div className="flex items-center justify-between px-[0.83vw] h-[2.78vw] border-b border-[#2e405c]">
              <div className="flex items-center gap-[0.56vw]">
                <span className="font-sans font-bold text-[0.69vw] text-[#f5f7fa] tracking-[0.15vw]">SAFE</span>
                <span className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw]">SNCF · CONTROL ROOM</span>
              </div>
              <div className="flex gap-[2.78vw] items-center">
                <div className="flex flex-col items-center gap-[0.28vw]">
                  <span className="font-sans text-[0.49vw] text-[#f5f7fa] tracking-[0.07vw]">LIVE OPS</span>
                  <div className="h-[0.1vw] w-full bg-[#0088ce]" />
                </div>
                <span className="font-sans text-[0.49vw] text-[#9eadc7] tracking-[0.07vw]">INVESTIGATIONS</span>
                <span className="font-sans text-[0.49vw] text-[#9eadc7] tracking-[0.07vw]">HISTORY</span>
              </div>
              <div className="flex items-center gap-[0.28vw]">
                <div className="w-[0.35vw] h-[0.35vw] rounded-full bg-[#28ca41]" />
                <span className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw]">MR. DUVAL · ANALYST · ON-SHIFT</span>
              </div>
            </div>
            {/* 3-column content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left - Incident chat */}
              <div className="w-[15.69vw] shrink-0 border-r border-[#2e405c] bg-[#152235]">
                <p className="font-sans text-[0.42vw] text-[#f87171] tracking-[0.07vw] px-[1.18vw] pt-[1.18vw]">ACTIVE INCIDENT · #2847</p>
                <div className="px-[1.18vw] pt-[0.69vw]">
                  <p className="font-sans font-semibold text-[0.83vw] text-[#f5f7fa] leading-[1.2]">Suspicious bag</p>
                  <p className="font-sans font-semibold text-[0.83vw] text-[#f5f7fa] leading-[1.2]">Gare de Lyon, Hall 1</p>
                </div>
                <p className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.05vw] px-[1.18vw] pt-[0.56vw]">REPORTED 14:32:08 · T+1m 47s</p>
                <div className="mx-[1.18vw] mt-[0.83vw] mb-[0.69vw] h-[0.05vw] bg-[#2e405c]" />
                {/* Chat messages */}
                <div className="px-[1.18vw] flex flex-col gap-[1.04vw]">
                  <div>
                    <p className="font-sans font-semibold text-[0.35vw] text-[#9eadc7] tracking-[0.05vw]">AGENT MR. RAVEL · 14:32:08</p>
                    <p className="font-sans text-[0.56vw] text-[#f5f7fa] leading-[1.4] mt-[0.14vw]">Black backpack left at platform 7, no owner visible for 4 mins.</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[0.35vw] text-[#9eadc7] tracking-[0.05vw]">AGENT MR. RAVEL · 14:32:46</p>
                    <p className="font-sans text-[0.56vw] text-[#f5f7fa] leading-[1.4] mt-[0.14vw]">Adult male, mid-30s, medium build, dark coat, dark trousers, left it and walked toward Hall 2.</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[0.35vw] text-[#9eadc7] tracking-[0.05vw]">SAFE · 14:32:51</p>
                    <p className="font-sans text-[0.56vw] text-[#f5f7fa] leading-[1.4] mt-[0.14vw]">Search opened. 12 cameras in Hall 1–2 corridor.</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[0.35vw] text-[#9eadc7] tracking-[0.05vw]">SAFE · 14:33:24</p>
                    <p className="font-sans text-[0.56vw] text-[#f5f7fa] leading-[1.4] mt-[0.14vw]">3 candidate matches found. Awaiting analyst review.</p>
                  </div>
                </div>
              </div>
              {/* Center - AI Ranked Candidates */}
              <div className="flex-1 p-[0.69vw]">
                <div className="flex items-center gap-[0.35vw] mb-[0.14vw]">
                  <span className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw]">AI-RANKED CANDIDATES · 3 MATCHES</span>
                </div>
                <p className="font-sans font-semibold text-[0.83vw] text-[#f5f7fa] mb-[0.56vw]">Hall 1 - Hall 2 corridor</p>
                {/* Match cards */}
                <div className="flex flex-col gap-[0.56vw]">
                  {/* Match 1 */}
                  <div className="bg-[#0e1828] border border-[#2e405c] rounded-[0.21vw] p-[0.56vw]">
                    <div className="flex gap-[0.42vw]">
                      <div className="w-[40%] aspect-[16/10] rounded-[0.1vw] overflow-hidden bg-[#1e3350]">
                        <img src="/images/train-station.png" alt="Camera feed" className="w-full h-full object-cover opacity-70" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw]">CAM 17 · 14:31:42</p>
                        <p className="font-sans font-bold text-[0.56vw] text-[#2eb266] tracking-[0.05vw]">MATCH 94%</p>
                        <p className="font-sans text-[0.49vw] text-[#f5f7fa] mt-[0.14vw]">Adult male · ~30 · Dark coat · Dark trousers</p>
                        <p className="font-sans text-[0.35vw] text-[#9eadc7] mt-[0.21vw] opacity-85 tracking-[0.01vw]">AI MATCHED ON: SILHOUETTE · COLOR · DESCRIPTION · BEHAVIOR PATTERN</p>
                        <div className="flex gap-[0.28vw] mt-[0.42vw]">
                          <div className="bg-[#0088ce] px-[0.56vw] py-[0.35vw] rounded-[0.21vw]">
                            <span className="font-sans font-semibold text-[0.42vw] text-[#f5f7fa] tracking-[0.06vw]">REQUEST ESCALATION</span>
                          </div>
                          <div className="border border-[#2e405c] px-[0.56vw] py-[0.35vw] rounded-[0.21vw]">
                            <span className="font-sans font-semibold text-[0.42vw] text-[#4da6d9] tracking-[0.06vw]">TRACE ROUTE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Match 2 */}
                  <div className="bg-[#0e1828] border border-[#2e405c] rounded-[0.21vw] p-[0.56vw]">
                    <div className="flex gap-[0.42vw]">
                      <div className="w-[40%] aspect-[16/10] rounded-[0.1vw] overflow-hidden bg-[#1e3350]">
                        <img src="/images/train-station.png" alt="Camera feed" className="w-full h-full object-cover opacity-50 scale-110" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw]">CAM 22 · 14:32:11</p>
                        <p className="font-sans font-bold text-[0.56vw] text-[#f5f7fa] tracking-[0.05vw]">MATCH 76%</p>
                        <p className="font-sans text-[0.49vw] text-[#f5f7fa] mt-[0.14vw]">Adult male · ~30 · Dark coat</p>
                        <p className="font-sans text-[0.35vw] text-[#9eadc7] mt-[0.21vw] tracking-[0.06vw]">AI MATCHED ON: SILHOUETTE · PARTIAL COLOR</p>
                        <p className="font-sans font-medium text-[0.49vw] text-[#4da6d9] mt-[0.35vw] tracking-[0.07vw]">REVIEW</p>
                      </div>
                    </div>
                  </div>
                  {/* Match 3 */}
                  <div className="bg-[#0e1828] border border-[#2e405c] rounded-[0.21vw] p-[0.56vw]">
                    <div className="flex gap-[0.42vw]">
                      <div className="w-[40%] aspect-[16/10] rounded-[0.1vw] overflow-hidden bg-[#1e3350]">
                        <img src="/images/train-station.png" alt="Camera feed" className="w-full h-full object-cover opacity-40 scale-125" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw]">CAM 14 · 14:30:58</p>
                        <p className="font-sans font-bold text-[0.56vw] text-[#f5f7fa] tracking-[0.05vw]">MATCH 58%</p>
                        <p className="font-sans text-[0.49vw] text-[#f5f7fa] mt-[0.14vw]">Adult male · Dark coat</p>
                        <p className="font-sans text-[0.35vw] text-[#9eadc7] mt-[0.21vw] tracking-[0.06vw]">AI MATCHED ON: SILHOUETTE ONLY</p>
                        <p className="font-sans font-medium text-[0.49vw] text-[#4da6d9] mt-[0.35vw] tracking-[0.07vw]">REVIEW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right - Escalation Chain */}
              <div className="w-[15.9vw] shrink-0 border-l border-[#2e405c] bg-[#152235] p-[1.18vw]">
                <p className="font-sans text-[0.42vw] text-[#9eadc7] tracking-[0.07vw] mb-[1.04vw]">ESCALATION CHAIN</p>
                <div className="flex flex-col gap-[1.39vw]">
                  <div className="flex items-start gap-[0.56vw]">
                    <div className="flex flex-col items-center">
                      <div className="w-[0.35vw] h-[0.35vw] rounded-full bg-[#0088ce]" />
                      <div className="w-[0.05vw] h-[2.08vw] bg-[#2e405c] mt-[0.14vw]" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[0.42vw] text-[#f5f7fa] tracking-[0.05vw]">FIELD AGENT MR. RAVEL</p>
                      <p className="font-sans text-[0.49vw] text-[#9eadc7]">Reported · 14:32:08</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[0.56vw]">
                    <div className="flex flex-col items-center">
                      <div className="w-[0.35vw] h-[0.35vw] rounded-full bg-[#0088ce]" />
                      <div className="w-[0.05vw] h-[2.08vw] bg-[#2e405c] mt-[0.14vw]" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[0.42vw] text-[#f5f7fa] tracking-[0.05vw]">MR. DUVAL · VIDEO</p>
                      <p className="font-sans text-[0.49vw] text-[#f5f7fa]">Search opened · 14:32:51</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[0.56vw]">
                    <div className="flex flex-col items-center">
                      <div className="w-[0.35vw] h-[0.35vw] rounded-full bg-[#f59e0b]" />
                      <div className="w-[0.05vw] h-[2.08vw] bg-[#2e405c] mt-[0.14vw]" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[0.42vw] text-[#f5f7fa] tracking-[0.05vw]">MR. DUVAL · ANALYST</p>
                      <p className="font-sans text-[0.49vw] text-[#9eadc7]">Reviewing matches · 14:33:24</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[0.56vw]">
                    <div className="flex flex-col items-center">
                      <div className="w-[0.35vw] h-[0.35vw] rounded-full bg-[#9eadc7] opacity-50" />
                      <div className="w-[0.05vw] h-[2.08vw] bg-[#2e405c] mt-[0.14vw]" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[0.42vw] text-[#9eadc7] tracking-[0.05vw]">Ms. LECLERC · CONTROL ROOM LEAD</p>
                      <p className="font-sans text-[0.49vw] text-[#9eadc7]">Awaiting request · -</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[0.56vw]">
                    <div className="w-[0.35vw] h-[0.35vw] rounded-full bg-[#9eadc7] opacity-50" />
                    <div>
                      <p className="font-sans font-semibold text-[0.42vw] text-[#9eadc7] tracking-[0.05vw]">FIELD AGENTS</p>
                      <p className="font-sans text-[0.49vw] text-[#9eadc7]">Awaiting dispatch · -</p>
                    </div>
                  </div>
                </div>
                {/* Info box */}
                <div className="mt-[1.39vw] bg-[#0e1828] border border-[#2e405c] rounded-[0.21vw] p-[0.56vw]">
                  <p className="font-sans text-[0.35vw] text-[#9eadc7] tracking-[0.07vw]">WHEN CONFIRMED</p>
                  <p className="font-sans text-[0.49vw] text-[#f5f7fa] leading-[1.4] mt-[0.28vw]">The control room lead reviews evidence and approves dispatch. Field agent receives the suspect's photo, last location, and suggested route.</p>
                </div>
              </div>
            </div>
          </div>
        </BrowserChrome>
      </div>

      {/* Mobile device overlay */}
      <div
        className="absolute left-[4.17vw] top-[9.93vw] w-[17.34vw] rounded-[1.39vw] overflow-hidden border-[0.21vw] border-[#2e405c]"
        style={{
          aspectRatio: "250/580",
          background: "#0e1828",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* Phone status bar */}
        <div className="px-[0.83vw] pt-[0.42vw] flex justify-between items-center">
          <span className="font-sans font-semibold text-[0.49vw] text-[#f2f0e8]">
            14:34
          </span>
          <div className="flex gap-[0.14vw]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[0.28vw] h-[0.28vw] rounded-full bg-white"
              />
            ))}
          </div>
        </div>
        {/* App header */}
        <div className="px-[0.83vw] pt-[0.56vw]">
          <div className="flex gap-[0.21vw] items-center">
            <span className="font-sans font-bold text-[0.35vw] text-white tracking-[0.06vw]">
              SAFE
            </span>
            <span className="font-sans text-[0.28vw] text-[#6b8ab5]">
              &middot;
            </span>
            <span className="font-sans text-[0.28vw] text-[#6b8ab5]">
              SNCF AGENT
            </span>
          </div>
          <p className="font-sans text-[0.28vw] text-[#ff6b4a] mt-[0.21vw] tracking-[0.04vw]">
            INCIDENT #2647 &middot; GARE DE LYON
          </p>
        </div>
        {/* Tabs */}
        <div className="flex mx-[0.83vw] mt-[0.56vw] border-b border-[#1e3350]">
          <div className="px-[0.56vw] py-[0.28vw] border-b-[0.14vw] border-white">
            <span className="font-sans font-semibold text-[0.28vw] text-white tracking-[0.06vw]">
              INTEL
            </span>
          </div>
          <div className="px-[0.56vw] py-[0.28vw]">
            <span className="font-sans text-[0.28vw] text-[#6b8ab5] tracking-[0.06vw]">
              CONVERSATION
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="px-[0.83vw] pt-[0.83vw]">
          <p className="font-sans font-bold text-[1.11vw] leading-[1.15] text-[#f2f0e8]">
            Suspect identified.
          </p>
          <div className="flex items-center gap-[0.21vw] mt-[0.28vw]">
            <div className="w-[0.21vw] h-[0.21vw] rounded-full bg-[#28ca41]" />
            <span className="font-sans text-[0.28vw] text-[#6b8ab5]">
              Confirmed by control room lead
            </span>
          </div>
          <p className="font-sans text-[0.21vw] text-[#4a6585] mt-[0.07vw]">
            14:34:12 &middot; 7-1m 04s
          </p>
        </div>
        {/* Photo area */}
        <div
          className="mx-[0.83vw] mt-[0.69vw] rounded-[0.28vw] overflow-hidden"
          style={{ aspectRatio: "3/2" }}
        >
          <img
            src="/images/train-station.png"
            alt="Surveillance capture"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        {/* Info sections */}
        <div className="px-[0.83vw] pt-[0.69vw] flex flex-col gap-[0.56vw]">
          <div>
            <p className="font-sans text-[0.21vw] text-[#9eadc7] tracking-[0.07vw]">DESCRIPTION</p>
            <p className="font-sans text-[0.35vw] text-[#f2f0e8] leading-[1.4] mt-[0.07vw]">Adult male, ~30 yrs, Dark coat, dark trousers</p>
          </div>
          <div>
            <p className="font-sans text-[0.21vw] text-[#9eadc7] tracking-[0.07vw]">LAST SEEN</p>
            <p className="font-sans text-[0.35vw] text-[#f2f0e8] leading-[1.4] mt-[0.07vw]">Hall 2 corridor, CAM 22</p>
            <p className="font-sans text-[0.35vw] text-[#f2f0e8] leading-[1.4]">14:33:51 (43 sec ago)</p>
          </div>
          <div>
            <p className="font-sans text-[0.21vw] text-[#9eadc7] tracking-[0.07vw]">SUGGESTED ROUTE</p>
            <p className="font-sans text-[0.35vw] text-[#f2f0e8] leading-[1.4] mt-[0.07vw]">Heading toward Hall 3 / east exit</p>
          </div>
        </div>
        {/* CTA buttons */}
        <div className="px-[0.83vw] pt-[0.42vw] flex flex-col gap-[0.21vw]">
          <div className="bg-[#0088ce] rounded-[0.14vw] py-[0.35vw] flex items-center justify-center">
            <span className="font-sans font-semibold text-[0.28vw] text-[#f5f7fa] tracking-[0.06vw]">OPEN MAP</span>
          </div>
          <div className="border border-[#2e405c] rounded-[0.14vw] py-[0.35vw] flex items-center justify-center">
            <span className="font-sans font-semibold text-[0.28vw] text-[#4da6d9] tracking-[0.06vw]">VIEW ROUTE</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Card 3 Visual: ESG Workspace ── */
function ESGVisual() {
  return (
    <div className="absolute top-[2.78vw] left-[4.17vw] right-[-38.06vw] bottom-[-25.56vw]">
      <BrowserChrome chromeBg="#f0eade">
        <div className="absolute inset-0 bg-[#f8f6f2] flex">
          {/* Left pane - Attributes selector */}
          <div className="w-[20.56vw] shrink-0 border-r border-[#e5e2da] bg-white">
            {/* Methodology header */}
            <div className="px-[1.46vw] pt-[1.11vw]">
              <div className="flex items-center gap-[0.28vw] mb-[0.07vw]">
                <div className="w-[0.42vw] h-[0.42vw] rounded-full bg-[#e88c30]" />
                <span className="font-sans text-[0.42vw] text-[#888]">Methodology name</span>
              </div>
              <div className="flex items-center justify-between pb-[0.83vw] border-b border-[#e5e2da]">
                <p className="font-sans font-semibold text-[0.83vw] text-[#333]">MDA Women Leaders</p>
                <span className="font-sans text-[0.49vw] text-[#0066cc]">Edit</span>
              </div>
            </div>
            {/* Select section */}
            <div className="px-[1.46vw] pt-[0.69vw]">
              <p className="font-sans font-bold text-[1.04vw] text-[#333] mb-[0.28vw]">Select</p>
              <p className="font-sans text-[0.49vw] text-[#666] leading-[1.5] mb-[0.69vw]">
                Select the attribute(s) or create derived attribute(s), for transformation and analysis.
              </p>
              <div className="flex items-center justify-between mb-[0.42vw]">
                <span className="font-sans italic text-[0.49vw] text-[#888]">2 attribute selected</span>
                <span className="font-sans text-[0.49vw] text-[#0066cc]">Clear</span>
              </div>
              {/* Checkbox items */}
              {[
                { name: "Eq Pct Women Exec", checked: false },
                { name: "Eq Female Empowerment", checked: true },
                { name: "Eq Board Gender Ratio", checked: false },
                { name: "Eq Pay Equity Score", checked: false },
                { name: "Eq Women Mgmt Pipeline", checked: false },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between py-[0.35vw]">
                  <div className="flex items-center gap-[0.42vw]">
                    <div className={`w-[0.83vw] h-[0.83vw] rounded-[0.14vw] border flex items-center justify-center ${
                      item.checked ? "bg-[#0066cc] border-[#0066cc]" : "border-[#ccc] bg-white"
                    }`}>
                      {item.checked && <span className="text-white text-[0.56vw] leading-none">&#10003;</span>}
                    </div>
                    <span className="font-sans text-[0.56vw] text-[#333]">{item.name}</span>
                  </div>
                  <span className="font-sans text-[0.56vw] text-[#ccc]">&#128465;</span>
                </div>
              ))}
              {/* Derived attributes */}
              <div className="flex items-center justify-between py-[0.35vw] mt-[0.14vw]">
                <div className="flex items-center gap-[0.42vw]">
                  <div className="w-[0.83vw] h-[0.83vw] rounded-[0.14vw] border border-[#ccc] bg-white" />
                  <div>
                    <span className="font-sans text-[0.35vw] text-[#28a745]">f(x) Derived attribute</span>
                    <p className="font-sans text-[0.56vw] text-[#333]">Women Leaders</p>
                  </div>
                </div>
                <span className="font-sans text-[0.69vw] text-[#888]">&middot;&middot;&middot;</span>
              </div>
              <div className="flex items-center gap-[0.42vw] py-[0.35vw]">
                <div className="w-[0.83vw] h-[0.83vw] rounded-[0.14vw] border border-[#ccc] bg-white shrink-0" />
                <span className="font-sans text-[0.35vw] text-[#28a745]">f(x) Derived attribute</span>
              </div>
            </div>
          </div>

          {/* Right area - Tree diagram */}
          <div className="flex-1 relative">
            {/* View toggles top right */}
            <div className="absolute top-[1.04vw] right-[1.04vw] flex border border-[#ddd] rounded-[0.21vw] overflow-hidden">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`w-[1.53vw] h-[1.53vw] flex items-center justify-center ${i === 0 ? "bg-[#f0f0f0]" : "bg-white"} ${i < 2 ? "border-r border-[#ddd]" : ""}`}>
                  <div className="w-[0.56vw] h-[0.42vw] flex flex-col gap-[0.07vw]">
                    {[0, 1, 2].map((j) => <div key={j} className="h-[0.1vw] bg-[#888] rounded-full" />)}
                  </div>
                </div>
              ))}
            </div>
            {/* Display feature */}
            <div className="pt-[1.11vw] pl-[1.11vw]">
              <span className="font-sans text-[0.49vw] text-[#28a745]">f(x) Derived attribute</span>
              <div className="flex items-center gap-[0.35vw] mt-[0.21vw]">
                <div className="w-[0.69vw] h-[0.69vw] rounded-[0.1vw] border border-[#ccc]" />
                <span className="font-sans text-[0.49vw] text-[#888]">Display Operations in this view</span>
              </div>
            </div>
            {/* Tree diagram */}
            <div className="pl-[6.25vw] pt-[2.08vw]">
              {/* Root: Methodology */}
              <div className="inline-block bg-[#0066cc] rounded-[0.35vw] px-[0.83vw] py-[0.42vw] mb-[1.25vw]">
                <p className="font-sans font-semibold text-[0.35vw] text-white/80">Methodology</p>
                <p className="font-sans font-semibold text-[0.56vw] text-white">MDA Women Leaders</p>
              </div>
              {/* Branch 1 */}
              <div className="ml-[6.04vw] mb-[0.69vw]">
                <div className="inline-block border-[0.14vw] border-[#28a745] rounded-[0.35vw] px-[0.69vw] py-[0.35vw]">
                  <p className="font-sans text-[0.28vw] text-[#28a745]">f(x) Derived attribute</p>
                  <p className="font-sans text-[0.49vw] text-[#333]">Women Leaders</p>
                </div>
                <div className="ml-[4.17vw] mt-[0.42vw] flex flex-col gap-[0.42vw]">
                  <div className="inline-block border border-[#ddd] rounded-[0.35vw] px-[0.69vw] py-[0.35vw] w-fit bg-white">
                    <p className="font-sans text-[0.49vw] text-[#333]">Eq Pct Women Exec</p>
                  </div>
                  <div className="inline-block border border-[#ddd] rounded-[0.35vw] px-[0.69vw] py-[0.35vw] w-fit bg-white">
                    <p className="font-sans text-[0.49vw] text-[#333]">Eq Female Empowerment</p>
                  </div>
                </div>
              </div>
              {/* Branch 2 */}
              <div className="ml-[6.04vw]">
                <div className="inline-block border-[0.14vw] border-[#28a745] rounded-[0.35vw] px-[0.69vw] py-[0.35vw]">
                  <p className="font-sans text-[0.28vw] text-[#28a745]">f(x) Derived attribute</p>
                  <p className="font-sans text-[0.49vw] text-[#333]">Avg Eq Female Empowerment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserChrome>
    </div>
  );
}

/* ── Card 4 Visual: Deep Purple BPCE Banking ── */
function DeepPurpleVisual() {
  return (
    <>
      {/* Desktop browser window */}
      <div className="absolute top-[2.78vw] left-[9.86vw] right-[-16.39vw] bottom-[-8.47vw]">
        <BrowserChrome
          chromeBg="#f5f2f7"
          showUrlBar
          urlText="conseiller.deep-purple.bpce.fr/izivente/case/F-487213"
        >
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* Nav bar */}
            <div className="flex items-center px-[0.83vw] h-[2.08vw] border-b border-[#e8e3f0]">
              <span className="font-sans font-semibold text-[0.56vw] text-[#5a2a82]">
                Deep Purple
              </span>
              <span className="ml-[0.35vw] bg-[#e9ddf5] text-[#5a2a82] font-sans font-semibold text-[0.28vw] tracking-[0.06vw] px-[0.35vw] py-[0.14vw] rounded-[0.14vw]">
                CONSEILLER
              </span>
              <div className="flex gap-[0.83vw] ml-auto">
                <span className="font-sans text-[0.35vw] text-[#555] border-b border-[#5a2a82] pb-[0.14vw]">
                  IZVENTE
                </span>
                <span className="font-sans text-[0.35vw] text-[#888]">
                  PORTEFEUILLE
                </span>
                <span className="font-sans text-[0.35vw] text-[#888]">
                  DOSSIERS
                </span>
                <span className="font-sans text-[0.35vw] text-[#888]">
                  AGENDA
                </span>
              </div>
            </div>
            {/* Content: 3-column layout */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left sidebar - Client info */}
              <div className="w-[14.51vw] shrink-0 border-r border-[#e8e3f0] p-[0.83vw]">
                <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw]">CLIENT EN COURS</p>
                <p className="font-sans font-semibold text-[0.56vw] text-[#333] mt-[0.14vw]">Mme. H&eacute;l&egrave;ne Martin</p>
                <p className="font-sans text-[0.35vw] text-[#888] mt-[0.07vw]">Client depuis 2014 &middot; ID 487213</p>
                <div className="flex items-center gap-[0.21vw] mt-[0.56vw] bg-[#f8f5fc] rounded-[0.21vw] px-[0.35vw] py-[0.21vw]">
                  <div className="w-[0.28vw] h-[0.28vw] rounded-full bg-[#28ca41]" />
                  <span className="font-sans text-[0.28vw] text-[#555]">Sur le simulateur &middot; 4 min 12 s</span>
                </div>
                <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw] mt-[0.69vw]">POINTS D&apos;H&Eacute;SITATION</p>
                <p className="font-sans text-[0.35vw] text-[#333] mt-[0.21vw]">Explication du TAEG</p>
                <p className="font-sans text-[0.28vw] text-[#888]">Consult&eacute; 3&times;, d&eacute;pli&eacute; 2&times;</p>
                <p className="font-sans text-[0.35vw] text-[#333] mt-[0.35vw]">Champ Dur&eacute;e</p>
                <p className="font-sans text-[0.28vw] text-[#888]">Modifi&eacute; 24 &rarr; 48 &rarr; 60 &rarr; 48</p>
              </div>
              {/* Center - Simulator */}
              <div className="flex-1 p-[0.83vw]">
                <p className="font-sans font-bold text-[0.76vw] text-[#32164b]">Simulez votre pr&ecirc;t</p>
                <p className="font-sans text-[0.35vw] text-[#888] mt-[0.07vw]">Vue identique &agrave; celle de Mme Martin: vous voyez ce qu&apos;elle voit.</p>
                {/* Amount */}
                <div className="mt-[0.56vw] border border-[#e8e3f0] rounded-[0.35vw] p-[0.56vw]">
                  <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw]">MONTANT EMPRUNT&Eacute;</p>
                  <p className="font-sans font-semibold text-[0.97vw] text-[#32164b]">12 000 &euro;</p>
                  <div className="mt-[0.35vw] h-[0.14vw] bg-[#e8e3f0] rounded-full relative">
                    <div className="absolute h-full bg-[#5a2a82] rounded-full w-[15%]" />
                    <div className="absolute w-[0.42vw] h-[0.42vw] rounded-full bg-white border-[0.1vw] border-[#5a2a82] top-1/2 -translate-y-1/2 left-[15%]" />
                  </div>
                </div>
                {/* Duration */}
                <div className="mt-[0.42vw] border border-[#e8e3f0] rounded-[0.35vw] p-[0.56vw]">
                  <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw] mb-[0.28vw]">DUR&Eacute;E &middot; MOIS</p>
                  <div className="flex gap-[0.21vw]">
                    {[24, 36, 48, 60, 72].map((m) => (
                      <div key={m} className={`w-[1.81vw] h-[1.25vw] rounded-[0.28vw] flex items-center justify-center ${m === 48 ? "bg-[#5a2a82]" : "bg-[#f4f0fa]"}`}>
                        <span className={`font-sans font-semibold text-[0.42vw] ${m === 48 ? "text-white" : "text-[#32164b]"}`}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Monthly payment */}
                <div className="mt-[0.42vw] bg-[#5a2a82] rounded-[0.35vw] p-[0.56vw]">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-[0.28vw] text-[rgba(255,255,255,0.7)] tracking-[0.06vw]">MENSUALIT&Eacute;</p>
                    <span className="font-sans text-[0.21vw] text-white bg-[rgba(255,255,255,0.18)] rounded-[0.14vw] px-[0.28vw] py-[0.07vw]">R&Eacute;SERV&Eacute; CONSEILLER &middot; D&Eacute;ROGATION</span>
                  </div>
                  <p className="font-sans font-bold text-[1.25vw] text-white">287,42 &euro;</p>
                  <p className="font-sans text-[0.35vw] text-[rgba(255,255,255,0.85)]">pendant 48 mois &middot; TAEG fixe 4,9 % &middot; Co&ucirc;t total 1 796,16 &euro;</p>
                </div>
                {/* Bottom section */}
                <div className="mt-[0.42vw] bg-[#f4f0fa] border border-[#d7c0f0] rounded-[0.35vw] p-[0.56vw]">
                  <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw]">SELON R&Ocirc;LE &middot; VOS D&Eacute;ROGATIONS</p>
                  <div className="flex items-center justify-between mt-[0.14vw]">
                    <p className="font-sans text-[0.28vw] text-[#666] leading-[1.5]">La conformit&eacute; autorise un ajustement de taux de &plusmn;0,4 % pour cette cliente.</p>
                    <div className="bg-[#5a2a82] px-[0.42vw] py-[0.14vw] rounded-[0.14vw] shrink-0 ml-[0.28vw]">
                      <span className="font-sans font-semibold text-[0.28vw] text-white tracking-[0.04vw] whitespace-nowrap">Ajuster le taux</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right sidebar - Notes */}
              <div className="w-[14.51vw] shrink-0 border-l border-[#e8e3f0] p-[0.83vw]">
                <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw]">NOTES INTERNES</p>
                <div className="mt-[0.28vw] bg-[#fffcf0] border border-[#f0eade] rounded-[0.21vw] p-[0.42vw]">
                  <p className="font-sans text-[0.28vw] text-[#666] leading-[1.5]">Contexte de refinancement: le cr&eacute;dit auto en cours se termine en septembre.</p>
                </div>
                <p className="font-sans text-[0.28vw] text-[#888] tracking-[0.06vw] mt-[0.69vw]">CHA&Icirc;NE D&apos;ESCALADE</p>
                <div className="mt-[0.28vw] flex flex-col gap-[0.42vw]">
                  <div className="flex items-start gap-[0.21vw]">
                    <div className="w-[0.21vw] h-[0.21vw] rounded-full bg-[#5a2a82] mt-[0.14vw] shrink-0" />
                    <div>
                      <p className="font-sans text-[0.28vw] text-[#333]">Vous</p>
                      <p className="font-sans text-[0.28vw] text-[#888]">Mme Laurent &middot; IDF&ndash;07</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[0.21vw]">
                    <div className="w-[0.21vw] h-[0.21vw] rounded-full bg-[#5a2a82] mt-[0.14vw] shrink-0" />
                    <div>
                      <p className="font-sans text-[0.28vw] text-[#333]">Responsable d&apos;agence</p>
                      <p className="font-sans text-[0.28vw] text-[#888]">M. Dupont</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserChrome>
      </div>

      {/* Mobile phone overlay */}
      <div
        className="absolute left-[4.17vw] top-[8.89vw] w-[19.17vw] rounded-[1.39vw] overflow-hidden border-[0.21vw] border-[#e8e3f0]"
        style={{
          aspectRatio: "276/602",
          background: "#faf7fc",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-[0.83vw] pt-[0.42vw]">
          <span className="font-sans font-semibold text-[0.49vw] text-[#333]">
            9:41
          </span>
          <div className="flex gap-[0.14vw]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[0.28vw] h-[0.28vw] rounded-full bg-[#333]"
              />
            ))}
          </div>
        </div>
        {/* App header */}
        <div className="px-[0.83vw] py-[0.42vw] flex items-center gap-[0.28vw]">
          <span className="font-sans text-[0.56vw] text-[#555]">&lsaquo;</span>
          <span className="font-sans font-semibold text-[0.42vw] text-[#333]">
            Cr&eacute;dit consommation
          </span>
        </div>
        {/* Simulator */}
        <div className="px-[0.83vw]">
          <p className="font-sans font-bold text-[0.76vw] text-[#32164b]">
            Simulez votre pr&ecirc;t
          </p>
          <p className="font-sans text-[0.28vw] text-[#888] mt-[0.07vw]">
            Sans impact sur votre score de cr&eacute;dit.
          </p>
        </div>
        {/* Amount */}
        <div className="mx-[0.83vw] mt-[0.42vw] bg-white rounded-[0.35vw] border border-[#e8e3f0] p-[0.56vw]">
          <p className="font-sans text-[0.21vw] text-[#888] tracking-[0.04vw]">
            MONTANT EMPRUNT&Eacute;
          </p>
          <p className="font-sans font-semibold text-[0.76vw] text-[#32164b]">
            12 000 &euro;
          </p>
          <div className="mt-[0.21vw] h-[0.1vw] bg-[#e8e3f0] rounded-full relative">
            <div className="absolute h-full bg-[#5a2a82] rounded-full w-[15%]" />
            <div className="absolute w-[0.35vw] h-[0.35vw] rounded-full bg-white border border-[#5a2a82] top-1/2 -translate-y-1/2 left-[15%]" />
          </div>
          <div className="flex justify-between mt-[0.14vw]">
            <span className="font-sans text-[0.21vw] text-[#aaa]">
              1 000 &euro;
            </span>
            <span className="font-sans text-[0.21vw] text-[#aaa]">
              75 000 &euro;
            </span>
          </div>
        </div>
        {/* Duration */}
        <div className="mx-[0.83vw] mt-[0.28vw] bg-white rounded-[0.35vw] border border-[#e8e3f0] p-[0.56vw]">
          <p className="font-sans text-[0.21vw] text-[#888] tracking-[0.04vw] mb-[0.21vw]">
            DUR&Eacute;E &middot; MOIS
          </p>
          <div className="flex gap-[0.14vw]">
            {[24, 36, 48, 60, 72].map((m) => (
              <div
                key={m}
                className={`flex-1 h-[0.97vw] rounded-[0.21vw] flex items-center justify-center ${
                  m === 48 ? "bg-[#5a2a82]" : "bg-[#f4f0fa]"
                }`}
              >
                <span
                  className={`font-sans font-semibold text-[0.28vw] ${m === 48 ? "text-white" : "text-[#32164b]"}`}
                >
                  {m}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Monthly payment */}
        <div className="mx-[0.83vw] mt-[0.28vw] bg-[#5a2a82] rounded-[0.35vw] p-[0.56vw]">
          <p className="font-sans text-[0.21vw] text-[rgba(255,255,255,0.7)] tracking-[0.04vw]">
            MENSUALIT&Eacute;
          </p>
          <p className="font-sans font-bold text-[0.97vw] text-white">
            287,42 &euro;
          </p>
        </div>
      </div>
    </>
  );
}

/* ── Project data ── */
const projects: Omit<CaseCardProps, "index">[] = [
  {
    heading: "Replacing a legacy equity platform for a global participant base",
    tags: ["B2C", "FINTECH", "EQUITY"],
    metrics: [
      { value: "$19B", label: "Assets under administration" },
      { value: "200K", label: "Participants on the platform" },
    ],
    visualBg: "#0a5264",
    visualContent: <JPMorganVisual />,
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
  },
  {
    heading:
      "Unifying two opaque internal tools into one workspace for ESG methodologies",
    tags: ["B2E", "B2C", "FINTECH"],
    metrics: [
      { value: "2→1", label: "Legacy tools consolidated" },
      { value: "200+", label: "Methodologies managed in one workspace" },
    ],
    visualBg: "#1a4a73",
    visualContent: <ESGVisual />,
  },
  {
    heading: "One unified product surface for BPCE credit products",
    tags: ["B2C", "B2E", "BANKING"],
    metrics: [
      { value: "+€1M", label: "Funding requests, first month" },
      { value: "200K", label: "Migrated on the platform" },
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
}: CaseCardProps) {
  return (
    <motion.div
      className="bg-[#faf6ee] rounded-[1.39vw] overflow-hidden flex w-full border border-[#d9d9d9]"
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
              <div key={m.value} className="flex flex-col w-[9.72vw]">
                <p className="font-sans font-bold text-[3.06vw] tracking-[-0.12vw] leading-none whitespace-nowrap">
                  {m.value}
                </p>
                <p className="font-sans font-light text-[0.76vw] leading-[1.45] mt-[0.28vw]">
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
            className={`sticky top-[2vw] ${i < projects.length - 1 ? "mb-[5vw]" : ""}`}
            style={{ zIndex: i + 1 }}
          >
            <CaseCard {...project} index={i} />
          </div>
        ))}
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
