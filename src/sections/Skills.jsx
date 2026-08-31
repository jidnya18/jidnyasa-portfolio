import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-[#252a32] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-3xl font-bold uppercase tracking-[0.25em] text-[#58c472]">
            Skills
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f7fa] sm:text-5xl lg:text-6xl">
            Tools I use to turn
            <br />
            <span className="text-[#6b7280]">ideas into interfaces.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#9ca3af] md:text-lg">
            My workflow combines UI/UX thinking with frontend development to
            create interfaces that are visually clean, responsive and easy to
            use.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              {...category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-4 border-l-2 border-[#58c472] pl-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm leading-7 text-[#9ca3af]">
            Always learning, experimenting and improving my frontend workflow.
          </p>

          <span className="text-sm font-medium text-[#58c472]">
            Design + Development
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;