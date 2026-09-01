import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "kuthejidnyasa@gmail.com",
    href: "mailto:your-email@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9075325046",
    href: "tel:+91XXXXXXXXXX",
    external: false,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "www.linkedin.com/in/jidnyasa-kuthe-257544326",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    icon: ExternalLink,
    label: "GitHub",
    value: "https://github.com/jidnya18",
    href: "https://github.com/",
    external: true,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#252a32] px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#58c472]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-3xl font-bold uppercase tracking-[0.25em] text-[#58c472]">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#f5f7fa] sm:text-6xl lg:text-8xl">
            Let's build
            <br />

            <span className="text-[#6b7280]">
              something great.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#9ca3af] md:text-lg">
            I'm always interested in new opportunities, creative projects
            and meaningful digital experiences. Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group flex items-center justify-between rounded-2xl border border-[#252a32] bg-[#111418] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#58c472]/40"
              >
                {/* Left */}
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#58c472]/10">
                    <Icon
                      size={19}
                      className="text-[#58c472]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[#6b7280]">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-[#f5f7fa]">
                      {item.value}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={18}
                  className="ml-4 shrink-0 text-[#6b7280] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#58c472]"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex items-center gap-3 text-sm text-[#6b7280]"
        >
          <MapPin
            size={17}
            className="text-[#58c472]"
          />

          <span>
            Pen, Maharashtra, India
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl border border-[#252a32] bg-[#111418] p-8 md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#6b7280]">
                Available for opportunities
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#f5f7fa] md:text-3xl">
                Have an idea?

                <span className="text-[#58c472]">
                  {" "}
                  Let's talk.
                </span>
              </h3>
            </div>

            {/* Email Button */}
            <a
              href="mailto:your-email@gmail.com"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#58c472] px-7 py-3.5 text-sm font-semibold text-[#0b0d10] transition-all duration-300 hover:bg-[#43b765] hover:shadow-lg hover:shadow-[#58c472]/10"
            >
              Send me an email

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Small Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#4b5563]">
            Frontend Developer · UI/UX Designer
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;