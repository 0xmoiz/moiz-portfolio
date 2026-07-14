"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [desktopVisible, setDesktopVisible] = useState(false);
  const [hideOnFooter, setHideOnFooter] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    

  let footerObserver: IntersectionObserver | null = null;

    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          setHideOnFooter(entry.isIntersecting);
        },
        {
          threshold: 0.2,
        }
      );

      footerObserver.observe(footer);
    }
const handleScroll = () => {
  setDesktopVisible(window.scrollY > 10);
};

handleScroll();

window.addEventListener("scroll", handleScroll);

   return () => {
  footerObserver?.disconnect();
  window.removeEventListener("scroll", handleScroll);
};
}, []); 
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header className="fixed inset-0 pointer-events-none z-50">

        {/* Desktop Navbar */}

        <nav
          className={`pointer-events-auto fixed left-1/2 top-6 hidden h-14 -translate-x-1/2 items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-8 backdrop-blur-xl transition-all duration-500 md:flex ${
            desktopVisible && !hideOnFooter
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            <FileText size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setOpen(true)}
          className={`pointer-events-auto fixed right-5 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:bg-white/10 md:hidden ${
            hideOnFooter
              ? "-translate-y-10 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <Menu size={22} />
        </button>

      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 rounded-full border border-white/10 p-3"
            >
              <X size={28} />
            </button>

            <div className="flex h-full flex-col items-center justify-center">
                            {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="mb-8 text-5xl font-semibold tracking-tight text-white transition hover:text-white/70"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-lg transition hover:bg-white hover:text-black"
              >
                <FileText size={20} />
                Resume
              </motion.a>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}