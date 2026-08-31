import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "UI/UX", href: "#uiux" },
  { name: "Resume", href: "#resume" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#252a32] bg-[#0b0d10]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-3xl font-bold tracking-tight text-[#f5f7fa]"
          >
            Jidnyasa
            <span className="text-[#58c472]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-[#9ca3af] transition-colors duration-200 hover:text-[#f5f7fa]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-[#252a32] px-5 py-2.5 text-sm font-medium text-[#f5f7fa] transition-all duration-300 hover:border-[#58c472]/40 hover:text-[#58c472] md:inline-flex"
          >
            Let's Talk

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#252a32] text-[#f5f7fa] transition-colors hover:border-[#58c472]/40 hover:text-[#58c472] md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-[#252a32] bg-[#0b0d10] transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-[#252a32] py-4 text-sm font-medium text-[#9ca3af] transition-colors hover:text-[#58c472]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#58c472] px-5 py-3 text-sm font-semibold text-[#0b0d10]"
              >
                Let's Talk
                <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
    </>
  );
}

export default Navbar;