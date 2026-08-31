import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    period: "2026",
    role: "Frontend Developer Intern",
    company: "Viplora",
    description:
      "Working on modern HRMS interfaces, responsive frontend development and improving user experiences using React and modern frontend technologies.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST API"],
  },
];

const education = [
  {
    period: "2022 — 2026",
    degree: "B.Tech in Information Technology",
    institution: "Dr. Babasaheb Ambedkar Technological University",
    description:
      "Focused on software development, web technologies, programming and information technology.",
  },
];

function Resume() {
  return (
    <section
      id="resume"
      className="relative border-t border-[#252a32] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-3xl font-bold uppercase tracking-[0.25em] text-[#58c472]">
              Resume
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f7fa] sm:text-5xl lg:text-6xl">
              Experience,
              <br />
              <span className="text-[#6b7280]">
                education & growth.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#9ca3af] md:text-lg">
              A quick overview of my professional experience and academic
              background.
            </p>
          </div>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#58c472] px-6 py-3.5 text-sm font-semibold text-[#0b0d10] transition-all duration-300 hover:bg-[#43b765] hover:shadow-lg hover:shadow-[#58c472]/10"
          >
            Download Resume

            <ArrowDownToLine
              size={17}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </motion.div>

        {/* Experience */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#58c472]/10">
              <BriefcaseBusiness
                size={19}
                className="text-[#58c472]"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#f5f7fa]">
              Experience
            </h3>
          </div>

          <div className="relative ml-5 border-l border-[#252a32] pl-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-2xl border border-[#252a32] bg-[#111418] p-7"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[37px] top-8 h-3 w-3 rounded-full border-2 border-[#0b0d10] bg-[#58c472]" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#58c472]">
                      {experience.period}
                    </p>

                    <h4 className="mt-2 text-xl font-semibold text-[#f5f7fa]">
                      {experience.role}
                    </h4>

                    <p className="mt-1 text-sm text-[#9ca3af]">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-[#252a32] px-3 py-1.5 text-xs text-[#6b7280]">
                    Professional Experience
                  </span>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-[#9ca3af]">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#252a32] bg-[#0b0d10] px-3 py-1.5 text-xs text-[#9ca3af]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#58c472]/10">
              <GraduationCap
                size={20}
                className="text-[#58c472]"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#f5f7fa]">
              Education
            </h3>
          </div>

          <div className="relative ml-5 border-l border-[#252a32] pl-8">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-2xl border border-[#252a32] bg-[#111418] p-7"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[37px] top-8 h-3 w-3 rounded-full border-2 border-[#0b0d10] bg-[#58c472]" />

                <p className="text-sm font-medium text-[#58c472]">
                  {item.period}
                </p>

                <h4 className="mt-2 text-xl font-semibold text-[#f5f7fa]">
                  {item.degree}
                </h4>

                <p className="mt-1 text-sm text-[#9ca3af]">
                  {item.institution}
                </p>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#9ca3af]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-l-2 border-[#58c472] pl-5"
        >
          <p className="text-sm leading-7 text-[#9ca3af]">
            Continuously learning, building and improving my skills through
            real-world projects and hands-on experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;