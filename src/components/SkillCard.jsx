import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

function SkillCard({ title, description, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group relative overflow-hidden rounded-2xl border border-[#252a32] bg-[#111418] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#58c472]/40"
    >
      {/* Number */}
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-[#4b5563]">
          0{index + 1}
        </span>

        <ArrowUpRight
          size={20}
          className="text-[#4b5563] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#58c472]"
        />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#f5f7fa]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-[#9ca3af]">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-7 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="inline-flex items-center gap-2 rounded-full border border-[#252a32] bg-[#0b0d10] px-3.5 py-2 text-xs font-medium text-[#d1d5db] transition-colors duration-300 group-hover:border-[#58c472]/20"
          >
            <Check size={13} className="text-[#58c472]" />
            {skill}
          </div>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#58c472] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export default SkillCard;