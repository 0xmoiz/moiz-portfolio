"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      animate={{
        opacity: fadeOut ? 0 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="w-[85%] max-w-[360px]">

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl md:text-7xl"
        >
          MOIZ
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-center text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl md:text-7xl"
        >
          BOOKWALA
        </motion.h1>

        <div className="mt-8 h-[2px] overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
            className="h-full bg-white"
          />

        </div>

      </div>
    </motion.div>
  );
}