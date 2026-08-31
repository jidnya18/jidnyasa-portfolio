import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brush,
  Layout,
  MousePointer2,
  Smartphone,
} from "lucide-react";

const designProcess = [
  {
    number: "01",
    title: "Research",
    description:
      "Understanding the problem, users and requirements before starting the design.",
    icon: MousePointer2,
  },
  {
    number: "02",
    title: "Wireframe",
    description:
      "Creating clear layouts and user flows to establish the structure of the experience.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Turning the structure into a polished visual interface using Figma.",
    icon: Brush,
  },
  {
    number: "04",
    title: "Responsive",
    description:
      "Adapting interfaces for desktop, tablet and mobile experiences.",
    icon: Smartphone,
  },
];

/* =========================
   UI/UX PROJECTS
========================= */

const uiuxProjects = [
  {
    number: "01",
    category: "Dashboard UI",
    title: "HRMS Dashboard",
    description:
      "A clean dashboard experience designed to make HR data, employee information and workflows easier to understand.",
    image: "/uiux/hrms-dashboard.png",
    tools: ["Figma", "Dashboard", "Design System"],

    // Replace with your actual Figma project link
    figmaLink: "https://www.figma.com/design/DSidjKmhSsEMXFypC6g1Iy/hrms-web?node-id=0-1&t=n50s4GqJwjkYMLHY-1",
  },

  {
    number: "02",
    category: "Mobile App Design",
    title: "Laundry App",
    description:
      "A simple and user-friendly laundry service app designed for booking, pickup scheduling, order tracking and smooth service management.",
    image: "/uiux/laundry-app.png",
    tools: ["Figma", "UX Flow", "Mobile UI"],

    // Replace with your actual Figma project link
    figmaLink: "https://www.figma.com/design/OsIkFvzo14DcEjypdKI10E/Hi-Fi?node-id=0-1&t=A3LZ3tmiN8cRxevP-1",
  },

 
];

function UIUX() {
  return (
    <section
      id="uiux"
      className="relative border-t border-[#252a32] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#58c472]">
            UI/UX Design
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f7fa] sm:text-5xl lg:text-6xl">
            From ideas
            <br />

            <span className="text-[#6b7280]">
              to experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#9ca3af] md:text-lg">
            I enjoy designing interfaces that are visually clean, easy to
            understand and focused on the user's needs. My design process
            combines structure, usability and visual consistency.
          </p>
        </motion.div>

        {/* ================= DESIGN PROCESS ================= */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designProcess.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-[#252a32] bg-[#111418] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#58c472]/40"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#58c472]/10">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#58c472]"
                    />
                  </div>

                  <span className="text-xs font-medium text-[#4b5563]">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 text-lg font-semibold text-[#f5f7fa]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#9ca3af]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= CASE STUDIES ================= */}

        <div className="mt-20">

          {/* Section heading */}

          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#6b7280]">
                Design Work
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#f5f7fa]">
                Selected UI/UX work
              </h3>
            </div>

            <span className="hidden text-sm text-[#6b7280] sm:block">
              Figma · UX · Visual Design
            </span>

          </div>

          {/* ================= PROJECT CARDS ================= */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            {uiuxProjects.map((study, index) => (

              <motion.article
                key={study.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-3xl border border-[#252a32] bg-[#111418] transition-all duration-300 hover:-translate-y-1 hover:border-[#58c472]/40"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative aspect-[16/9] overflow-hidden bg-[#0b0d10]">

                  <img
                    src={study.image}
                    alt={`${study.title} UI/UX design`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Dark overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d10]/60 via-transparent to-transparent" />

                  {/* Figma Badge */}

                  <div className="absolute right-5 top-5 rounded-full border border-[#58c472]/30 bg-[#0b0d10]/90 px-3 py-1.5 text-xs font-medium text-[#58c472] backdrop-blur-sm">
                    Figma
                  </div>

                  {/* Project number */}

                  <div className="absolute left-5 top-5 rounded-full border border-[#252a32] bg-[#0b0d10]/90 px-3 py-1.5 text-xs text-[#9ca3af] backdrop-blur-sm">
                    {study.number}
                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-7">

                  {/* Category + Number */}

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-[#58c472]">
                      {study.category}
                    </p>

                    <span className="text-xs text-[#4b5563]">
                      {study.number}
                    </span>

                  </div>

                  {/* Title */}

                  <h4 className="mt-2 text-2xl font-semibold text-[#f5f7fa]">
                    {study.title}
                  </h4>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-[#9ca3af]">
                    {study.description}
                  </p>

                  {/* Tools */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {study.tools.map((tool) => (

                      <span
                        key={tool}
                        className="rounded-full border border-[#252a32] bg-[#0b0d10] px-3 py-1.5 text-xs text-[#9ca3af]"
                      >
                        {tool}
                      </span>

                    ))}

                  </div>

                  {/* Bottom Link */}

                  <div className="mt-7 flex items-center justify-between border-t border-[#252a32] pt-5">

                    <a
                      href={study.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5f7fa] transition-colors hover:text-[#58c472]"
                    >
                      Open in Figma
                      <ArrowUpRight size={16} />
                    </a>

                    <span className="text-xs text-[#4b5563]">
                      UI/UX
                    </span>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-[#252a32] bg-[#111418] p-8 md:p-10"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-[#6b7280]">
                Design Philosophy
              </p>

              <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-[#f5f7fa] md:text-2xl">
                Simple interfaces.

                <span className="text-[#58c472]">
                  {" "}
                  Thoughtful interactions.
                </span>
              </p>

            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#58c472] px-6 py-3 font-semibold text-[#0b0d10] transition-colors hover:bg-[#43b765]"
            >
              Discuss a Project
              <ArrowUpRight size={17} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default UIUX;