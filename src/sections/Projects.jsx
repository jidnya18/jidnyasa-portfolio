import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Projects() {


const projects = [
  {
    number: "01",
    title: "SonixHR",
    category: "HR Management Platform",
    description:
      "A modern HR management interface focused on employee management, attendance, leave and administrative workflows.",
    image: "/projects/sonixhr.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],
  },

  {
    number: "02",
    title: "E-Commerce Website",
    category: "E-Commerce Experience",
    description:
      "A responsive e-commerce interface focused on clean product presentation and a smooth shopping experience.",
    image: "/projects/ecommerce.png",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive UI",
    ],
  },

  {
    number: "03",
    title: "Fitness Brand",
    category: "Fitness Product Website",
    description:
      "A modern website concept for a natural fitness protein brand with a strong visual identity and responsive layout.",
    image: "/projects/fitness-brand.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Figma",
    ],
  },
];

  return (
    <section
      id="work"
      className="border-t border-[#252a32] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-3xl font-bold uppercase tracking-[0.25em] text-[#58c472]">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f7fa] sm:text-5xl lg:text-6xl">
            Projects I've
            <br />
            <span className="text-[#6b7280]">
              worked on.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#9ca3af] md:text-lg">
            A selection of frontend development and UI/UX projects
            focused on creating clean, responsive and intuitive
            digital experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-[#252a32] bg-[#111418] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#58c472]/40"
            >
              {/* Project number */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4b5563]">
                  {project.number}
                </span>

                <ArrowUpRight
                  size={21}
                  className="text-[#6b7280] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#58c472]"
                />
              </div>

              {/* Preview */}
              {/* <div className="mt-6 flex aspect-[16/9] items-center justify-center rounded-2xl border border-[#252a32] bg-[#0b0d10]">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#252a32] bg-[#111418]">
                    <ArrowUpRight
                      size={22}
                      className="text-[#58c472]"
                    />
                  </div>

                  <p className="mt-3 text-sm text-[#6b7280]">
                    Project Preview
                  </p>
                </div>
              </div> */}

              {/* Project Preview */}
<div className="mt-6 overflow-hidden rounded-2xl border border-[#252a32] bg-[#0b0d10]">
  <div className="aspect-[16/9] overflow-hidden">
    <img
  src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
  alt={`${project.title} project preview`}
  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
/>
  </div>
</div>

              {/* Category */}
              <p className="mt-7 text-sm font-medium text-[#58c472]">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-semibold text-[#f5f7fa]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-[#9ca3af]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#252a32] bg-[#0b0d10] px-3 py-1.5 text-xs text-[#9ca3af]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-7 border-t border-[#252a32] pt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5f7fa] transition-colors hover:text-[#58c472]"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;