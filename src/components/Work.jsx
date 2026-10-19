import { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const PROJECTS = [
  {
    href: "https://travel-agency-tawny-three.vercel.app/",
    image: "/images/pro-img.png",
    imageAlt: "Excellent Travel Agency Website Preview",
    stack: "React | Vite | Tailwind CSS",
    year: "2026",
    title: "Excellent Travel Agency",
    contribution:
      "Designed and developed the complete frontend interface, interactive booking workflows, responsive multi-language layout, and lead capture integration.",
    description:
      "A modern travel agency web application featuring domestic and international flight ticketing, hotel reservations, student visa assistance, and Umrah packages with multi-language support and interactive inquiry forms.",
  },
  {
    href: "https://nokata-ten.vercel.app/",
    image: "/images/Screenshot 2026-10-16 113352.png",
    imageAlt: "Ecommerce web application",
    stack: "React.js | Express.js",
    year: "2026",
    title: "Ecommerce web application",
    contribution: "Fullstack",
    description:
      "A modern full-stack e-commerce platform dedicated to delivering 100% authentic smartphones, heavy-duty power banks, and premium mobile accessories across Nigeria. Built with a lightning-fast React frontend and a robust Node.js backend, Nokata offers a seamless shopping experience powered by secure Paystack checkout.",
  },
  {
    href: "https://pixelplate-restaurant.vercel.app/",
    image: "/images/pixel plate template.png",
    imageAlt: "PixelPlate Restaurant Preview",
    stack: "React Vite | Tailwind CSS | Express.js",
    year: "2026",
    title: "A restaurant website",
    contribution: "Frontend and backend of the app",
    description:
      "A fully structured restaurant web platform featuring dynamic menu views, reservation forms, and a responsive interface.",
  },
  {
    href: "https://school-portal-peach.vercel.app/",
    image: "/images/2026-06-02.png",
    imageAlt: "School Portal Preview",
    stack: "Next.js | Tailwind CSS",
    year: "2026",
    title: "Modern school portal",
    contribution: "Frontend and backend of the app",
    description:
      "A modern academic portal designed for managing student results, grade entry workflows, and comprehensive school administrative details.",
  },
  {
    href: "https://lagos-island-pilots.vercel.app/",
    image: "/images/lagosislandbanner.png",
    imageAlt: "School Bus Shuttle Preview",
    stack: "Next.js | Tailwind CSS",
    year: "2026",
    title: "School Bus Shuttle portal",
    contribution: "Frontend and backend of the app",
    description:
      "A student transport portal engineered to coordinate shuttle routes and manage student transit schedules across Lagos State.",
  },
];

export default function Work() {
  const scrollRef = useRef(null);

  // Manual scroll helper
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Auto-sliding effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: container.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="work"
      className="py-20 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D9] bg-[#FAF7F2] text-[#1A1A18] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-px bg-[#2C5E3B]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2C5E3B]">
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1A1A18] font-bold">
              Selected <span className="italic text-[#2C5E3B] font-normal">Work</span>
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            {/* Carousel Arrow Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous slide"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E8E2D9] bg-white flex items-center justify-center text-[#1A1A18] hover:bg-[#2C5E3B] hover:text-white hover:border-[#2C5E3B] transition-colors duration-300 shadow-sm"
              >
                <Icon icon="solar:arrow-left-linear" width={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next slide"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E8E2D9] bg-white flex items-center justify-center text-[#1A1A18] hover:bg-[#2C5E3B] hover:text-white hover:border-[#2C5E3B] transition-colors duration-300 shadow-sm"
              >
                <Icon icon="solar:arrow-right-linear" width={18} />
              </button>
            </div>

            <a
              href="https://github.com/rahmonabdul297-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#666158] hover:text-[#2C5E3B] transition-colors pb-1 border-b border-[#E8E2D9] hover:border-[#2C5E3B] hidden sm:inline-flex"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Sliding Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              className="min-w-[90%] sm:min-w-[48%] lg:min-w-[42%] snap-start flex flex-col justify-between p-5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-[#E8E2D9] shadow-sm hover:shadow-md transition-all duration-500 hover:border-[#2C5E3B]/40"
            >
              <div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block mb-5 sm:mb-6"
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[16/10] bg-[#FAF7F2] border border-[#E8E2D9]">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        filter: "saturate(0.95) contrast(1.02)",
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Icon
                          icon="solar:arrow-right-up-linear"
                          width={18}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </a>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-[#1A1A18] uppercase font-bold">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666158] leading-relaxed font-normal line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E8E2D9] space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#2C5E3B] font-bold font-mono truncate max-w-[65%]">
                    {p.stack}
                  </span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2C5E3B] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 rounded-full flex items-center gap-1.5 font-semibold transition-transform duration-300 hover:scale-105 shrink-0 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Live Demo
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                  <span className="tracking-[0.15em] uppercase text-[#666158] font-semibold shrink-0">
                    Contribution:
                  </span>
                  <span className="capitalize text-[#1A1A18] font-normal truncate">
                    {p.contribution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}