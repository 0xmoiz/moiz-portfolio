"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left */}

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm sm:tracking-[0.35em]">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Passionate about building
            <span className="text-white/60">
              {" "}
              scalable backend systems.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9 md:mt-8">
            I&apos;m Moiz Bookwala, an Information Technology student and
            backend developer focused on building scalable APIs, modern web
            applications, and high-performance systems using FastAPI, Python,
            React, and PostgreSQL.
          </p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 md:p-10 lg:order-2"
        >
          <div className="space-y-6 sm:space-y-8">

            <Info title="Experience" value="1+ Years Learning" />

            <Info title="Projects" value="3+ Completed" />

            <Info title="Focus" value="Backend Development" />

            <Info title="Currently Learning" value="Next.js • GSAP" />

          </div>
        </motion.div>

      </div>
    </Section>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-none">

      <span className="text-sm text-white/40 sm:text-base">
        {title}
      </span>

      <span className="text-right text-sm font-medium text-white sm:text-base">
        {value}
      </span>

    </div>
  );
}