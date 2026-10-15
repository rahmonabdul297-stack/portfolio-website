import { useRef } from "react";
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
    href: "https://en-cbt.vercel.app/",
    image: "/images/cbt site.png",
    imageAlt: "CBT Web App Preview",
    stack: "Next.js | Tailwind CSS",
    year: "2026",
    title: "CBT Web App",
    contribution: "frontend of the app.",
    description: "A fully and well structured CBT website with modern design.",
  },
  {
    href: "https://pixelplate-restaurant.vercel.app/",
    image: "/images/pixel plate template.png",
    imageAlt: "PixelPlate Restaurant Preview",
    stack: "React Vite | Tailwind CSS | Express.js",
    year: "2026",
    title: "A restaurant website",
    contribution: "frontend and backend of the app",
    description:
      "A fully and well structured restaurant website with modern design.",
  },
  {
    href: "https://school-portal-peach.vercel.app/",
    image: "/images/2026-06-02.png",
    imageAlt: "School Portal Preview",
    stack: "Next.js | Tailwind CSS",
    year: "2026",
    title: "Modern school portal",
    contribution: "frontend and backend of the app",
    description:
      "A modern school portal for managing student result, result entry and details of the school in general.",
  },
];

export default function Work() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-24 lg:py-36 px-6 lg:px-8 border-t border-white/5 bg-[var(--primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[var(--others)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--others)]">
                Projects
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl tracking-tight text-white">
              Selected <span className="italic text-[var(--others)]">Work</span>
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
            {/* Carousel Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Icon icon="solar:arrow-left-linear" width={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Icon icon="solar:arrow-right-linear" width={20} />
              </button>
            </div>

            <a
              href="https://github.com/rahmonabdul297-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--neutral)] hover:text-white transition-colors pb-2 border-b border-black/30 hover:border-black hidden sm:inline-flex"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Sliding Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              className="min-w-[85%] sm:min-w-[48%] lg:min-w-[42%] snap-start flex flex-col justify-between p-6 bg-black/10 rounded-3xl border border-black/10 backdrop-blur-sm transition-all duration-500 hover:bg-black/20"
            >
              <div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block mb-6"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-black/40 border border-black/10">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        filter: "saturate(0.9) contrast(1.05) brightness(0.9)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Icon
                          icon="solar:arrow-right-up-linear"
                          width={20}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </a>

                <div className="space-y-4">
                  <h4 className="font-serif text-2xl tracking-tight text-black uppercase font-bold">
                    {p.title}
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-black/80 font-bold font-mono">
                    {p.stack}
                  </span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-[var(--primary)] text-xs py-2 px-4 rounded-full flex items-center gap-2 font-medium transition-transform duration-300 hover:scale-105"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Demo
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="tracking-[0.15em] uppercase text-black/60 font-medium">
                    Contribution:
                  </span>
                  <span className="capitalize text-black/90 font-light truncate">
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