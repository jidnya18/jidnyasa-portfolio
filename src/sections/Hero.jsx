import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pt-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#58c472]/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-[-200px] bottom-[-200px] h-[400px] w-[400px] rounded-full bg-[#58c472]/5 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* Small introduction */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#252a32] bg-[#111418]/80 px-4 py-2 text-sm text-[#9ca3af] backdrop-blur-sm">
              <span className="text-4xl">👋</span>

              <span>
                Hello, I'm{" "}
                <span className="font-bold text-[#58c472]">
                  Jidnyasa
                </span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.03] tracking-tight text-[#f5f7fa] sm:text-6xl lg:text-[76px]">
              Frontend
              <br />

              <span className="text-[#f5f7fa]">
                Developer
              </span>

              <br />

              <span className="text-[#58c472]">
                & UI/UX Designer
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[#9ca3af] md:text-lg">
              I design and build modern, responsive and user-friendly web
              experiences that combine clean code with thoughtful design.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#58c472] px-6 py-3.5 text-sm font-semibold text-[#0b0d10] transition-all duration-300 hover:bg-[#43b765] hover:shadow-lg hover:shadow-[#58c472]/10"
              >
                View My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#252a32] px-6 py-3.5 text-sm font-semibold text-[#f5f7fa] transition-all duration-300 hover:border-[#58c472]/40 hover:text-[#58c472]"
              >
                Download Resume

                <ArrowDownToLine
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Small stats */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#252a32] pt-7">
              <div>
                <p className="text-xl font-semibold text-[#f5f7fa]">
                  React
                </p>

                <p className="mt-1 text-xs text-[#6b7280]">
                  Frontend
                </p>
              </div>

              <div className="h-8 w-px bg-[#252a32]" />

              <div>
                <p className="text-xl font-semibold text-[#f5f7fa]">
                  Figma
                </p>

                <p className="mt-1 text-xs text-[#6b7280]">
                  UI/UX Design
                </p>
              </div>

              <div className="h-8 w-px bg-[#252a32]" />

              <div>
                <p className="text-xl font-semibold text-[#f5f7fa]">
                  Responsive
                </p>

                <p className="mt-1 text-xs text-[#6b7280]">
                  Web Design
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]"
          >
            {/* Green circular glow */}
            <div className="absolute h-[350px] w-[350px] rounded-full bg-[#58c472]/20 blur-3xl sm:h-[430px] sm:w-[430px]" />

            {/* Decorative circle */}
            <div className="absolute h-[370px] w-[370px] rounded-full border border-[#58c472]/20 sm:h-[470px] sm:w-[470px]" />

            <div className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-[#58c472]/20 sm:h-[430px] sm:w-[430px]" />

            {/* ================= YOUR IMAGE ================= */}
            <div className="relative z-10 flex h-[430px] w-[300px] items-end justify-center overflow-hidden rounded-[150px_150px_35px_35px] border border-[#58c472]/30 bg-gradient-to-b from-[#18221b] to-[#0f1310] shadow-2xl shadow-[#58c472]/10 sm:h-[560px] sm:w-[390px]">
              
             
               <img
  src={`${import.meta.env.BASE_URL}profile.png`}
  alt="Jidnyasa - Frontend Developer and UI/UX Designer"
  className="h-full w-full object-cover object-top"
/>
            </div>

            {/* ================= FLOATING CARD 1 ================= */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-[18%] z-20 hidden w-44 rounded-2xl border border-[#252a32] bg-[#111418]/95 p-4 shadow-xl backdrop-blur-md sm:block"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#58c472]/10">
                <Code2
                  size={18}
                  className="text-[#58c472]"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-[#f5f7fa]">
                Clean Code
              </p>

              <p className="mt-1 text-xs text-[#6b7280]">
                Scalable & Maintainable
              </p>
            </motion.div>

            {/* ================= FLOATING CARD 2 ================= */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[16%] left-0 z-20 hidden w-48 rounded-2xl border border-[#252a32] bg-[#111418]/95 p-4 shadow-xl backdrop-blur-md sm:block"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#58c472]/10">
                <Sparkles
                  size={18}
                  className="text-[#58c472]"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-[#f5f7fa]">
                Pixel Perfect
              </p>

              <p className="mt-1 text-xs text-[#6b7280]">
                Thoughtful Design
              </p>
            </motion.div>

            {/* ================= FLOATING CARD 3 ================= */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3%] right-[2%] z-20 hidden w-44 rounded-2xl border border-[#252a32] bg-[#111418]/95 p-4 shadow-xl backdrop-blur-md md:block"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#58c472]/10">
                <Zap
                  size={18}
                  className="text-[#58c472]"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-[#f5f7fa]">
                Performance
              </p>

              <p className="mt-1 text-xs text-[#6b7280]">
                Fast & Optimized
              </p>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute right-[-10px] top-[42%] hidden grid-cols-5 gap-3 opacity-40 lg:grid">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1 w-1 rounded-full bg-[#6b7280]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6b7280] md:flex"
      >
        <span className="h-8 w-5 rounded-full border border-[#3a424d] p-1">
          <span className="mx-auto block h-1.5 w-1 rounded-full bg-[#58c472]" />
        </span>

        Scroll Down
      </motion.a>
    </section>
  );
}

export default Hero;