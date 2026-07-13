"use client";

import { motion } from "framer-motion";
import {
  Camera,
  BarChart3,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

interface ProjectCardProps {
  icon: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
}

export default function ProjectCard({
  icon,
  title,
  category,
  description,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Top */}

      <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10">

        <div className="absolute h-60 w-60 rounded-full bg-white/[0.03] blur-[120px]" />

        {icon === "camera" ? (
          <Camera
            size={120}
            className="text-white/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
        ) : icon === "chart" ? (
          <BarChart3
            size={120}
            className="text-white/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
        ) : (
          <HeartHandshake
            size={120}
            className="text-white/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
        )}

        <div className="absolute bottom-8 text-center">
          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-2 text-white/45">
            {category}
          </p>
        </div>

      </div>

      {/* Bottom */}

      <div className="p-7">

        <p className="leading-7 text-white/65">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-8 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-sm text-green-400">
              Completed
            </span>

          </div>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-white hover:text-black"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

    </motion.div>
  );
}