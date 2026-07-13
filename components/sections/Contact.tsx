"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl">

        {/* Heading */}

        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm sm:tracking-[0.35em]"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mt-5 md:text-5xl"
        >
          Let&apos;s build something amazing together.
        </motion.h2>

        <motion.p
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9 md:mt-8"
        >
          I&apos;m always open to discussing internships, freelance work,
          exciting projects, or simply connecting with fellow developers.
          Feel free to reach out anytime.
        </motion.p>

        {/* Buttons */}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:flex lg:flex-wrap">

          <a
            href="mailto:moizboookwala31@gmail.com"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 transition-all duration-300 hover:bg-white hover:text-black lg:w-auto"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://github.com/0xmoiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 transition-all duration-300 hover:bg-white hover:text-black lg:w-auto"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/moiz-bookwala-11465225b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 transition-all duration-300 hover:bg-white hover:text-black lg:w-auto"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

        </div>

      </div>
    </Section>
  );
}