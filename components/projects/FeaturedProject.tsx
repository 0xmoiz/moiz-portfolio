"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all"
    >
      {/* Browser Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">

        <div className="flex gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />

        </div>

        <p className="truncate text-xs text-white/40 sm:text-sm">
          trek-community.app
        </p>

      </div>

      {/* Preview */}

      <div className="relative flex h-[240px] items-center justify-center overflow-hidden sm:h-[280px] lg:h-[340px]">

        <div className="absolute h-56 w-56 rounded-full bg-white/[0.03] blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <Mountain
          size={110}
          className="text-white/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-[140px] sm:w-[140px] lg:h-[150px] lg:w-[150px]"
        />

        <div className="absolute bottom-8 px-6 text-center">

          <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Trek Community
          </h3>

          <p className="mt-2 text-sm text-white/50 sm:text-base">
            Full Stack Application
          </p>

        </div>

      </div>

      {/* Content */}

      <div className="border-t border-white/10 p-6 sm:p-8">

        <p className="max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
          A platform where users can discover,
          join and organize trekking events with
          secure registrations, payments and
          community management.
        </p>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "FastAPI",
            "React",
            "PostgreSQL",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 sm:px-4 sm:text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-sm text-green-400">
              In Development
            </span>

          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 transition hover:bg-white hover:text-black"
            >
              <GitBranch size={18} />
              GitHub
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-black transition hover:scale-105"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </div>

    </motion.div>
  );
}