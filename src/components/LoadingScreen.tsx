"use client";

import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-cream"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-[1.5vw] max-lg:gap-4">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{
              scale: [0.3, 1, 1, 15],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              times: [0, 0.3, 0.65, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={onComplete}
          >
            <Logo className="w-[8.33vw] max-lg:w-[80px] h-[8.33vw] max-lg:h-[80px]" />
          </motion.div>

          <motion.p
            className="font-sans text-[1.1vw] max-lg:text-[14px] tracking-[2.2px] text-text-secondary text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [8, 0, 0, 0],
            }}
            transition={{
              duration: 2.8,
              times: [0.25, 0.4, 0.65, 0.85],
              ease: "easeOut",
            }}
          >
            Nihel Mouelhi
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
