import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-3xl border border-[#252a32] bg-[#111418] transition-all duration-500 hover:-translate-y-1 hover:border-[#58c472]/40"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0b0d10]">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0b0d10]">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#252a32] bg-[#111418]">
              <ArrowUpRight size={22} className="text-[#58c472]" />
            </div>

            <p className="text-sm font-medium text-[#6b7280]">
              Project Preview
            </p>
          </div>
        </div>

        {/* Number */}
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#0b0d10]/80 px-3 py-1.5 text-xs font-medium text-[#9ca3af] backdrop-blur">
          {project.number}
        </div>

        {/* Type */}
        <div className="absolute bottom-5 left-5 rounded-full border border-[#58c472]/20 bg-[#0b0d10]/80 px-3 py-1.5 text-xs font-medium text-[#58c472] backdrop-blur">
          {project.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-sm font-medium text-[#58c472]">
          {project.category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-[#f5f7fa]">
            {project.title}
          </h3>

          <ArrowUpRight
            size={21}
            className="mt-1 shrink-0 text-[#6b7280] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#58c472]"
          />
        </div>

        <p className="mt-4 text-sm leading-7 text-[#9ca3af]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#252a32] px-3 py-1.5 text-xs font-medium text-[#9ca3af]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-5 border-t border-[#252a32] pt-5">
          <a
            href={project.liveUrl}
            target={project.liveUrl !== "#" ? "_blank" : undefined}
            rel={project.liveUrl !== "#" ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5f7fa] transition-colors hover:text-[#58c472]"
          >
            Live Project
            <ExternalLink size={15} />
          </a>

          <a
            href={project.githubUrl}
            target={project.githubUrl !== "#" ? "_blank" : undefined}
            rel={project.githubUrl !== "#" ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ca3af] transition-colors hover:text-[#58c472]"
          >
            GitHub
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;