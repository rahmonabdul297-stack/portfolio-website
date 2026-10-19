import { useState } from "react";
import { navigationArray } from "./arrays";
import Logo from "./logo";

export default function Navigation({ name }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const closeMobile = () => setMenuOpen(false);

  return (
    <nav
      id="mainNav"
      className="fixed top-0 w-full z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-[0_10px_30px_rgba(44,94,59,0.06)] overflow-visible"
    >
      <div className="absolute top-full left-0 right-0 h-16 pointer-events-none overflow-hidden z-[-1]">
        {/* Left Glow Point (Emerald Soft Ambient) */}
        <div className="absolute top-0 left-[10%] w-64 h-16 bg-[#2C5E3B]/10 blur-2xl rounded-full transform -translate-y-1/2 pointer-events-none" />

        {/* Center Glow Point (Warm White Highlight) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-16 bg-white/80 blur-xl rounded-full transform -translate-y-1/2 pointer-events-none" />

        {/* Right Glow Point (Deep Forest Emerald Shadow Glow) */}
        <div className="absolute top-0 right-[10%] w-64 h-16 bg-[#15803D]/10 blur-2xl rounded-full transform -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Logo name={name} />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationArray.map((item) => (
              <a
                href={item.link}
                key={item.id}
                onClick={() => setSelected(item.id)}
                className="py-2"
              >
                <span
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-[#2C5E3B] ${
                    selected === item.id
                      ? "text-[#2C5E3B] border-b-2 border-[#2C5E3B]"
                      : "text-[#666158]"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-full border border-[#2C5E3B] bg-[#2C5E3B] text-white hover:bg-[#234B2F] shadow-sm"
            >
              Hire me
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none rounded-lg border border-[#E8E2D9] bg-white"
            >
              <span
                className="w-5 h-[2px] bg-[#1A1A18] transition-all duration-300 origin-center"
                style={
                  menuOpen
                    ? { transform: "rotate(45deg) translate(2.5px, 2.5px)" }
                    : undefined
                }
              />
              <span
                className="h-[2px] bg-[#1A1A18] transition-all duration-300 origin-center"
                style={
                  menuOpen
                    ? {
                        width: "1.25rem",
                        transform: "rotate(-45deg) translate(1px, -1px)",
                      }
                    : { width: "0.85rem" }
                }
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobileMenu"
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:hidden border-t border-[#E8E2D9] bg-white shadow-xl`}
      >
        <div className="px-6 py-8 space-y-5">
          {navigationArray.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={closeMobile}
              className="block text-sm font-semibold tracking-[0.15em] uppercase text-[#666158] hover:text-[#2C5E3B] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={closeMobile}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-[0.15em] uppercase mt-4 w-full bg-[#2C5E3B] text-white hover:bg-[#234B2F] transition-colors shadow-sm"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}