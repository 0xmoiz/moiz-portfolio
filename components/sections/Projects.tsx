"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="w-full">

        {/* Heading */}

        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm sm:tracking-[0.35em]"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mt-5 md:text-5xl"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9"
        >
          A selection of projects showcasing backend development,
          computer vision, business intelligence, mobile development,
          and modern web technologies.
        </motion.p>

        {/* Featured Project */}

        <div className="mt-10 md:mt-14 lg:mt-16">
          <FeaturedProject />
        </div>

        {/* Other Projects */}

        <div className="mt-8 grid gap-6 md:mt-10 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">

          <ProjectCard
            icon="camera"
            title="Face Recognition Attendance"
            category="Computer Vision"
            description="Attendance system using OpenCV with face recognition and liveness detection."
            tech={["Python", "OpenCV", "CustomTkinter"]}
            github="https://github.com/0xmoiz/face-recognition-attendance"
          />

          <ProjectCard
            icon="chart"
            title="Inventory Dashboard"
            category="Business Intelligence"
            description="Interactive inventory analytics dashboard with Power BI and Python."
            tech={["Power BI", "Python", "Pandas"]}
            github="https://github.com/0xmoiz/deadstock-pro"
          />

          <ProjectCard
            icon="ngo"
            title="NGO Food Waste Management"
            category="🏆 24-Hour Hackathon Winner"
            description="Cross-platform Flutter mobile application with a React web portal connecting NGOs, volunteers, and donors using Firebase. Built and presented within 24 hours, securing 1st place."
            tech={["Flutter", "React", "Firebase", "Dart"]}
            github="https://github.com/0xmoiz/ngo_foodwastemanagement"
          />

        </div>

      </div>
    </Section>
  );
}