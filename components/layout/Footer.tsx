"use client";

export default function Footer() {
  return (
    <footer className="mt-32 overflow-hidden border-t border-white/10 bg-[#111111]">
      <div className="mx-auto w-full max-w-[1800px] px-6 py-14 sm:px-8 lg:px-14 xl:px-20">

        {/* Top */}

        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">

          {/* Links */}

          <div className="grid grid-cols-2 gap-12 sm:gap-20">

            {/* Navigation */}

            <div>

              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
                Links
              </p>

              <div className="space-y-3 sm:space-y-4">

                <a
                  href="#about"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  Contact
                </a>

              </div>

            </div>

            {/* Socials */}

            <div>

              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
                Socials
              </p>

              <div className="space-y-3 sm:space-y-4">

                <a
                  href="https://github.com/0xmoiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/moiz-bookwala-11465225b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:moizbookwala31@gmail.com"
                  className="block text-base text-white/70 transition hover:translate-x-2 hover:text-white sm:text-lg lg:text-xl"
                >
                  Email
                </a>

              </div>

            </div>

          </div>

          {/* Resume */}

          <div className="flex justify-center lg:justify-end">

            <a
              href="/resume.pdf"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xs font-medium text-black transition duration-300 hover:scale-105 sm:h-20 sm:w-20 sm:text-sm"
            >
              Resume
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-white/10 sm:my-20 lg:my-24" />

        {/* Bottom */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <h1 className="text-[52px] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[72px] md:text-[90px] lg:text-[110px] xl:text-[125px]">
            MOIZ
            <br />
            BOOKWALA
          </h1>

          <p className="pb-1 text-sm text-white/35 lg:text-right">
            © {new Date().getFullYear()} Moiz Bookwala
          </p>

        </div>

      </div>
    </footer>
  );
}