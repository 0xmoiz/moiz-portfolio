"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section className="flex min-h-[88vh] items-center pt-0 md:min-h-screen md:pt-20 lg:pt-24">
      <div className="relative w-full max-w-6xl">

        {/* Background Glow */}

        <div className="absolute left-1/2 top-8 -z-10 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[75px] md:left-16 md:top-24 md:h-[500px] md:w-[500px] md:translate-x-0 md:blur-[160px]" />

        <div className="absolute left-1/2 top-24 -z-10 h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[60px] md:left-[420px] md:top-[180px] md:h-[280px] md:w-[280px] md:translate-x-0 md:blur-[120px]" />

        {/* Badge */}

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
            Backend Developer • FastAPI • React
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={false}
          animate={{ opacity: 1 }}
          className="mt-4 text-[46px] font-black leading-[0.9] tracking-[-0.07em] text-white sm:mt-6 sm:text-[60px] md:mt-10 md:text-[110px] xl:text-[180px]"
        >
          MOIZ
          <br />
          BOOKWALA
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-[15px] leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8 md:mt-10 md:max-w-2xl md:text-xl md:leading-9"
        >
          Building modern backend systems, scalable APIs and beautiful
          digital experiences.
        </motion.p>

        {/* Button */}

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-7 md:mt-12"
        >
          <a
            href="#projects"
            className="inline-flex w-full justify-center rounded-full bg-white px-8 py-4 font-medium text-black transition duration-300 hover:scale-105 sm:w-auto"
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll */}

        <div className="mt-12 hidden items-center gap-3 text-white/40 md:mt-24 md:flex">

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
          >
            <ArrowDown size={18} />
          </motion.div>

          <span className="text-sm uppercase tracking-[0.3em]">
            Scroll
          </span>

        </div>

      </div>
    </Section>
  );
}