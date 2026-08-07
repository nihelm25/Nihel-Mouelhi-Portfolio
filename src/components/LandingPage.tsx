"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import ShimmerImage from "./ShimmerImage";

const CONFETTI_COLORS = ["#9c4221", "#d4956b", "#e8c4a0", "#555555", "#c0392b", "#f39c12", "#27ae60", "#2980b9"];
const CONFETTI_COUNT = 200;

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  shape: "square" | "circle" | "strip";
  dx: number;
  dy: number;
  dr: number;
}

function ConfettiOverlay({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }

    const newPieces: ConfettiPiece[] = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
      id: i,
      x: (Math.sin(i * 7.3) * 0.5 + 0.5) * 100,
      y: -5,
      rotation: ((i * 137) % 360),
      scale: 0.5 + (Math.sin(i * 2.7) * 0.5 + 0.5) * 0.8,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      shape: (["square", "circle", "strip"] as const)[i % 3],
      dx: (Math.sin(i * 4.1) * 2 - 1) * 15,
      dy: 60 + (Math.cos(i * 5.3) * 0.5 + 0.5) * 40,
      dr: (Math.sin(i * 9.7) * 2 - 1) * 720,
    }));
    setPieces(newPieces);
  }, [active]);

  if (!pieces.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          initial={{ opacity: 1, y: 0, x: 0, rotate: p.rotation, scale: 0 }}
          animate={{
            opacity: [1, 1, 0],
            y: p.dy + "vh",
            x: p.dx + "vw",
            rotate: p.rotation + p.dr,
            scale: [0, p.scale, p.scale * 0.5],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          {p.shape === "square" && (
            <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: p.color, borderRadius: 2 }} />
          )}
          {p.shape === "circle" && (
            <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: p.color, borderRadius: "50%" }} />
          )}
          {p.shape === "strip" && (
            <div style={{ width: "0.3vw", height: "1vw", backgroundColor: p.color, borderRadius: 1 }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function ZeroToOne({ hovered, onComplete }: { hovered: boolean; onComplete: () => void }) {
  const [phase, setPhase] = useState<"idle" | "zero" | "one" | "done">("idle");
  const firedRef = useRef(false);

  useEffect(() => {
    if (!hovered) {
      setPhase("idle");
      firedRef.current = false;
      return;
    }
    setPhase("zero");
    const t1 = setTimeout(() => setPhase("one"), 600);
    const t2 = setTimeout(() => {
      setPhase("done");
      if (!firedRef.current) {
        firedRef.current = true;
        onComplete();
      }
    }, 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [hovered, onComplete]);

  const isZeroHighlighted = phase === "zero";
  const isOneHighlighted = phase === "one" || phase === "done";

  return (
    <>
      <span
        className="relative inline-block transition-all duration-300"
        style={{ opacity: isZeroHighlighted ? 1 : isOneHighlighted ? 0.35 : undefined }}
      >
        zero
        {isZeroHighlighted && (
          <motion.span
            className="absolute bottom-[0.05em] left-0 right-0 h-[0.08em] bg-accent rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </span>
      {" to "}
      <span
        className="relative inline-block transition-all duration-300"
        style={{ opacity: isOneHighlighted ? 1 : isZeroHighlighted ? 0.35 : undefined }}
      >
        one
        {isOneHighlighted && (
          <motion.span
            className="absolute bottom-[0.05em] left-0 right-0 h-[0.08em] bg-accent rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </span>
    </>
  );
}

function SublineSwap() {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        {hovered ? (
          <motion.span
            key="industries"
            className="inline"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-accent">fintech</span>, <span className="text-accent">defense</span>, <span className="text-accent">healthcare</span>, and <span className="text-accent">telecom</span>.
          </motion.span>
        ) : (
          <motion.span
            key="acronyms"
            className="inline"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-accent">B2B</span>, <span className="text-accent">B2C</span>, and <span className="text-accent">B2E</span> web and mobile applications.
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-0"
      style={{
        width: "50vw",
        height: "50vw",
        top: "-25vw",
        left: "-25vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(156,66,33,0.12) 0%, rgba(212,149,107,0.07) 40%, transparent 70%)",
        willChange: "transform",
        transition: "transform 0.3s ease-out",
      }}
    />
  );
}

export default function LandingPage() {
  const [nameHovered, setNameHovered] = useState(false);
  const [zeroHovered, setZeroHovered] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleCountComplete = useCallback(() => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2000);
  }, []);

  return (
    <section className="relative w-full min-h-full bg-cream flex flex-col">
      <CursorGlow />
      <ConfettiOverlay active={confetti} />
      <Header />

      {/* Header spacer */}
      <div className="shrink-0 h-[13.44vw] max-lg:h-[100px]" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-end px-[3.33vw] max-lg:px-5 max-lg:pt-4 pb-[8vw] max-lg:pb-10">
        <div className="flex flex-col items-start text-left">
          {/* Handwritten greeting with headshot on hover */}
          <motion.div
            className="relative mb-[1.4vw] max-lg:mb-3 cursor-default"
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.7 }}
            onMouseEnter={() => setNameHovered(true)}
            onMouseLeave={() => setNameHovered(false)}
          >
            <svg
              className="h-[2.8vw] max-lg:h-[32px] w-auto"
              viewBox="0 0 520 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* H */}
              <path d="M8 55 L8 10" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M8 32 L24 32" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M24 10 L24 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              {/* i */}
              <path d="M36 28 L36 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="36" cy="18" r="2.2" fill="#9c4221" />
              {/* comma */}
              <path d="M48 50 C48 50 49 58 46 62" stroke="#9c4221" strokeWidth="2" strokeLinecap="round" />
              {/* I */}
              <path d="M72 10 L72 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              {/* apostrophe */}
              <path d="M84 12 C84 12 85 20 83 22" stroke="#9c4221" strokeWidth="2" strokeLinecap="round" />
              {/* m */}
              <path d="M96 55 L96 28" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M96 35 C100 24 112 24 112 35 L112 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M112 35 C116 24 128 24 128 35 L128 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* space + N */}
              <path d="M152 55 L152 10 L180 55 L180 10" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              {/* i */}
              <path d="M194 28 L194 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="194" cy="18" r="2.2" fill="#9c4221" />
              {/* h */}
              <path d="M208 10 L208 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M208 35 C212 24 224 24 224 35 L224 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* e */}
              <path d="M236 40 L254 40 C254 30 248 24 240 26 C234 28 232 36 236 44 C240 52 250 52 254 48" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* l */}
              <path d="M266 10 L266 55" stroke="#9c4221" strokeWidth="2.5" strokeLinecap="round" />
              {/* flourish */}
              <path d="M272 54 C280 42 300 38 310 46 C312 48 308 52 298 50" stroke="#9c4221" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
            <AnimatePresence>
              {nameHovered && (
                <motion.div
                  className="absolute left-[13vw] max-lg:left-[145px] -top-[1vw] max-lg:-top-[8px] w-[5.5vw] max-lg:w-[64px] h-[5.5vw] max-lg:h-[64px] rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] pointer-events-none"
                  initial={{ opacity: 0, scale: 0.7, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.7, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ShimmerImage
                    src="/images/about-portrait.jpg"
                    alt="Nihel Mouelhi"
                    fill
                    className="object-cover"
                    sizes="5.5vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Hero headline */}
          <motion.p
            className="font-serif text-[5.56vw] max-lg:text-[36px] font-semibold text-text-primary leading-[1.05] tracking-[-0.02em] mb-[1.8vw] max-lg:mb-4"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I own products from{" "}
            <span
              className="text-accent cursor-default"
              onMouseEnter={() => setZeroHovered(true)}
              onMouseLeave={() => setZeroHovered(false)}
            >
              <ZeroToOne hovered={zeroHovered} onComplete={handleCountComplete} />
            </span>
          </motion.p>

          {/* Subline */}
          <motion.p
            className="font-sans text-[1.67vw] max-lg:text-[16px] font-normal leading-[1.4] text-[#777] mb-[4vw] max-lg:mb-8"
            {...fadeUp}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            9 years driving business impact across <SublineSwap />
          </motion.p>

          {/* Status lines */}
          <motion.div
            className="flex flex-col gap-[0.4vh] max-lg:gap-1 text-[0.97vw] max-lg:text-[13px]"
            {...fadeUp}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="flex gap-[0.28vw] max-lg:gap-1 max-lg:whitespace-normal">
              <span className="font-sans font-light text-text-secondary w-[5.8vw] max-lg:w-[70px] shrink-0">
                CURRENTLY
              </span>
              <span className="font-sans text-text-primary">
                Senior Product Designer at J.P. Morgan Chase &amp; Co.
              </span>
            </div>
            <div className="flex gap-[0.28vw] max-lg:gap-1 max-lg:whitespace-normal">
              <span className="font-sans font-light text-text-secondary w-[5.8vw] max-lg:w-[70px] shrink-0">
                RECENTLY
              </span>
              <span className="font-sans text-text-primary">
                Completed Stanford&rsquo;s &ldquo;Leading with AI,&rdquo; with a capstone on multi-agent design workflows
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-[3.33vw] max-lg:px-5 py-[2vh] z-30">
        <span className="font-sans text-[0.76vw] max-lg:text-[11px] text-text-secondary whitespace-nowrap">
          &copy; 2026 Nihel Mouelhi. All rights reserved.
        </span>
      </div>
    </section>
  );
}
