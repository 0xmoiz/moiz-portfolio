"use client";

import Section from "../ui/Section";
import { motion } from "framer-motion";
import Marquee from "../ui/Marquee";

import {
  SiFastapi,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMysql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiLinux,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

const row1 = [
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
];

const row2 = [
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Linux", icon: <SiLinux /> },
];
export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Technologies I work with.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          A collection of technologies and tools I use to build scalable
          applications and premium digital experiences.
        </p>

        {/* Desktop */}

        <div className="mt-16 hidden space-y-6 lg:block">
          <Marquee items={row1} />
          <Marquee items={row2} reverse />
        </div>

        {/* Mobile */}

        <div className="mt-12 flex flex-wrap gap-3 lg:hidden">
          {[...row1, ...row2].map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
            >
              <div className="text-white">
                {skill.icon}
              </div>

              <span className="text-sm text-white/80">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}