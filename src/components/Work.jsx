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
    delay: undefined,
  },
  {
    href: "https://en-cbt.vercel.app/",
    image: "/images/cbt site.png",
    imageAlt: "=",
    stack: "next | tailwindcss",
    year: "2026",
    title: "CBT Web App",
    contribution: "frontend of the app.",
    description: "A fully and well structured CBT website with modern design.",
    delay: "0.1s",
  },
  {
    href: "https://pixelplate-restaurant.vercel.app/",
    image: "/images/pixel plate template.png",
    imageAlt: "pixelplate",
    stack: "react vite | tailwindcss | express js",
    year: "2026",
    title: "A restaurant website",
    contribution: "frontend and backend of the app",
    description:
      "A fully and well structured restaurant website with modern design.",
    delay: undefined,
  },
  {
    href: "https://school-portal-peach.vercel.app/",
    image: "/images/2026-06-02.png",
    imageAlt: "",
    stack: "Next Js | tailwindcss ",
    year: "2026",
    title: "Modern school portal",
    contribution: "frontend and backend of the app",
    description:
      "A modern school portal for managing student result,result entry and details of the school in general.",
    delay: "0.1s",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 lg:py-36 px-6 lg:px-8 border-t border-white/5 bg-[var(--primary)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 scroll-reveal">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[var(--others)]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--others)]">
                Projects
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl tracking-tight">
              Selected <span className="italic text-[var(--others)]">Work</span>
            </h2>
          </div>
          <a
            href="https://github.com/rahmonabdul297-stack"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--neutral)] hover:text-md transition-colors pb-2 border-b border-[#F1E7D6]/30 hover:border-white"
          >
            View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="blank"
              className="scroll-reveal group block"
              style={p.delay ? { transitionDelay: p.delay } : undefined}
            >
              <div className="p-4 border border-white/5 rounded-2xl bg-white/[0.01] mb-6 group-hover:border-[var(--neutral)] transition-colors duration-500">
                <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rounded-xl rounded-xl"
                    style={{
                      filter: "saturate(0.8) contrast(1.1) brightness(0.8)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-12 h-12 rounded-full bg-[#F1E7D6] text-black flex items-center justify-center">
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        width={20}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-start justify-between  mb-3">
                  <div className="flex flex-col  items-start gap-3 mb-3">
                    <h4 className="font-serif text-2xl tracking-tight text-[var(--neutral)] mb-2 uppercase font-black">
                      {p.title}
                    </h4>
                    <p className="text-sm text-[var(--others)]">
                      {p.description}
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center gap-3 mb-3">
                    {" "}
                    <div className=" flex justify-between gap-6">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--others)] font-bold">
                        {p.stack}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                    </div>
                    <a
                      href={p.href}
                      className="bg-[#1c1f6f]/20 text-[var(--neutral)] text-xs py-2 px-3 rounded-3xl flex items-center gap-2"
                      style={{ borderColor: "rgba(201,168,76,0.2)" }}
                    >
                      <div className="w-2 h-2  rounded-full bg-green-600 animate-pulse" />{" "}
                      view project
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--neutral)] text-xs">
                    contribution:
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] tracking-[0.2em] capitalize text-[#525252] text-xs">
                    {p.contribution}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
