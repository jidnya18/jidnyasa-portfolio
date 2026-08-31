import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "UI/UX", href: "#uiux" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#252a32] bg-[#080a0d] px-6 pb-8 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-[#f5f7fa]"
            >
              Jidnyasa
              <span className="text-[#58c472]">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#6b7280]">
              Frontend Developer and UI/UX Designer focused on building
              clean, responsive and meaningful digital experiences.
            </p>

            <a
              href="mailto:your-email@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#9ca3af] transition-colors hover:text-[#58c472]"
            >
              <Mail size={16} />
              jidnyasa@gmail.com
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4b5563]">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#9ca3af] transition-colors hover:text-[#58c472]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4b5563]">
              Connect
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-sm text-[#9ca3af] transition-colors hover:text-[#58c472]"
              >
                LinkedIn

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-sm text-[#9ca3af] transition-colors hover:text-[#58c472]"
              >
                GitHub

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#252a32] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-[#4b5563]">
            © {new Date().getFullYear()} Jidnyasa. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-[#4b5563]">
              Designed & Built with React
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#252a32] text-[#9ca3af] transition-all duration-300 hover:border-[#58c472]/40 hover:text-[#58c472]"
            >
              <ArrowUp
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;