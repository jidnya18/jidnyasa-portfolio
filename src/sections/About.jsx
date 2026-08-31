import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brush,
  Code2,
  Layers3,
} from "lucide-react";

// const highlights = [
//   {
//     number: "01",
//     title: "Design",
//     description:
//       "Creating clean and intuitive interfaces with a strong focus on usability, visual hierarchy and consistency.",
//     icon: Brush,
//   },
//   {
//     number: "02",
//     title: "Develop",
//     description:
//       "Turning designs into responsive and interactive web experiences using modern frontend technologies.",
//     icon: Code2,
//   },
//   {
//     number: "03",
//     title: "Deliver",
//     description:
//       "Building polished experiences that work smoothly across different screen sizes and devices.",
//     icon: Layers3,
//   },
// ];
const highlights = [
  {
    number: "01",
    title: "Design",
    description:
      "Creating clean and intuitive interfaces with a strong focus on usability, visual hierarchy and consistency.",
    icon: Brush,
    iconColor: "#A78BFA",
    iconBg: "rgba(167, 139, 250, 0.10)",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Turning designs into responsive and interactive web experiences using modern frontend technologies.",
    icon: Code2,
    iconColor: "#58C472",
    iconBg: "rgba(88, 196, 114, 0.10)",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Building polished experiences that work smoothly across different screen sizes and devices.",
    icon: Layers3,
    iconColor: "#38BDF8",
    iconBg: "rgba(56, 189, 248, 0.10)",
  },
];
function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#252a32] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-12 text-sm font-medium uppercase tracking-[0.25em] text-[#58c472]">
            About Me
          </p>

          {/* IMAGE + CONTENT */}
          <div className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[360px] lg:mx-0"
            >
              {/* Glow */}
              <div className="absolute inset-8 rounded-full bg-[#58c472]/10 blur-3xl" />

              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-[32px] border border-[#58c472]/10" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#252a32] bg-[#111418]">

                <img
                  src="/about-profile.png"
                  alt="Jidnyasa Kuthe - Frontend Developer and UI/UX Designer"
                  className="h-[460px] w-full object-cover object-top sm:h-[520px]"
                />

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0d10]/70 to-transparent" />
              </div>

              {/* Small floating label */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -right-3 rounded-2xl border border-[#252a32] bg-[#111418] px-5 py-4 shadow-xl sm:-right-8"
              >
                <p className="text-xs uppercase tracking-wider text-[#6b7280]">
                  Based in
                </p>

                <p className="mt-1 text-sm font-semibold text-[#f5f7fa]">
                  Maharashtra, India
                </p>
              </motion.div>
            </motion.div>

            {/* ================= ABOUT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f7fa] sm:text-5xl lg:text-6xl">
                Designing with purpose.
                <br />

                <span className="text-[#6b7280]">
                  Building with code.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#9ca3af] md:text-lg">
                I'm Jidnyasa Kuthe, a Frontend Developer and UI/UX Designer
                passionate about creating digital experiences that are simple,
                responsive and enjoyable to use.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#9ca3af]">
                I enjoy transforming ideas and designs into polished web
                interfaces using modern frontend technologies and thoughtful
                user-centered design.
              </p>

              {/* Quick info */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#252a32] bg-[#111418] px-4 py-2 text-xs text-[#9ca3af]">
                  Frontend Development
                </span>

                <span className="rounded-full border border-[#252a32] bg-[#111418] px-4 py-2 text-xs text-[#9ca3af]">
                  UI/UX Design
                </span>

                <span className="rounded-full border border-[#252a32] bg-[#111418] px-4 py-2 text-xs text-[#9ca3af]">
                  Responsive Design
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px bg-[#252a32]" />

        {/* Highlight cards */}
        {/* <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-[#252a32] bg-[#111418] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#58c472]/40"
              >
                <div className="flex items-start justify-between"> */}
                  {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#58c472]/10">
                    <Icon
                      size={21}
                      className="text-[#58c472]"
                    />
                  </div> */}
                  

                  {/* <span className="text-sm font-medium text-[#4b5563]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-[#f5f7fa]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#9ca3af]">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#58c472] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore
                  <ArrowUpRight size={15} />
                </div>
              </motion.div>
            );
          })}
        </div> */}

        {/* Highlight cards */}
<div className="grid gap-5 md:grid-cols-3">
  {highlights.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.number}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        className="group rounded-2xl border bg-[#111418] p-7 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: "#252a32",
        }}
        whileHover={{
          borderColor: item.iconColor,
          boxShadow: `0 10px 35px ${item.iconColor}12`,
        }}
      >
        {/* Top Row */}
        <div className="flex items-start justify-between">

          {/* Icon */}
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
            style={{
              backgroundColor: item.iconBg,
            }}
          >
            <Icon
              size={21}
              strokeWidth={1.8}
              style={{
                color: item.iconColor,
              }}
            />
          </div>

          {/* Number */}
          <span
            className="text-sm font-medium"
            style={{
              color: `${item.iconColor}80`,
            }}
          >
            {item.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-8 text-xl font-semibold text-[#f5f7fa]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-[#9ca3af]">
          {item.description}
        </p>

        {/* Explore */}
        <div
          className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{
            color: item.iconColor,
          }}
        >
          <span>Explore</span>

          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </motion.div>
    );
  })}
</div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 rounded-3xl border border-[#252a32] bg-[#111418] p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#6b7280]">
                My Approach
              </p>

              <p className="mt-3 max-w-3xl text-xl font-medium leading-8 text-[#f5f7fa] md:text-2xl">
                Good design should look great.
                <span className="text-[#58c472]">
                  {" "}
                  Great design should also feel effortless.
                </span>
              </p>
            </div>

            <a
              href="#work"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#252a32] px-5 py-3 text-sm font-semibold text-[#f5f7fa] transition-all duration-300 hover:border-[#58c472] hover:text-[#58c472]"
            >
              See My Work
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

