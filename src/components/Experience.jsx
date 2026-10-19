const ITEMS = [
  {
    active: true,
    title: "Full-Stack Engineer",
    company: "",
    period: "2024 — PRESENT",
    description:
      "Building full-stack web and mobile applications using React, Next.js, Node.js, Express, and MongoDB. Responsible for designing scalable backend architectures, maintaining codebase performance, and deploying cloud infrastructure.",
    skills: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    active: true,
    title: "Backend Engineer",
    company: "",
    period: "2024 — PRESENT",
    description:
      "Architected distributed systems, optimized complex database queries in MongoDB, and built resilient RESTful APIs that handle high-concurrency requests with sub-second response times.",
    skills: ["REST APIs", "Express.js", "MongoDB", "JWT Auth", "Cloudinary"],
  },
  {
    active: true,
    title: "Frontend Developer",
    company: "",
    period: "2024 — PRESENT",
    description:
      "Focused on engineering responsive web applications, creating reusable component libraries in Tailwind CSS, optimizing state management, and fine-tuning client-side rendering performance.",
    skills: ["TypeScript", "Tailwind CSS", "React.js", "State Management"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-36 px-6 lg:px-8 bg-[#1c3b25] text-[#FAF7F2] border-t border-[#234B2F] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38764B] rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#FAF7F2]/15 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#F1E7D6]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#F1E7D6]">
                Career Path
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#FAF7F2] font-bold">
              Professional <span className="italic text-[#F1E7D6] font-normal">Journey</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/80 max-w-xs leading-relaxed font-light">
            Engineering scalable web solutions with modern JavaScript & TypeScript architectures.
          </p>
        </div>

        {/* Multi-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="p-6 sm:p-8 bg-[#FAF7F2] text-[#1A1A18] rounded-2xl border border-[#E8E2D9] shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden hover:-translate-y-1"
            >
              {/* Top Accent Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2C5E3B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#2C5E3B] tracking-wider uppercase">
                    0{index + 1} // {item.company}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-[0.1em] bg-[#2C5E3B]/10 text-[#2C5E3B] border border-[#2C5E3B]/20">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1A1A18] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-[#666158] font-normal mb-6">
                  {item.description}
                </p>
              </div>

              {/* Skills Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E2D9] mt-auto">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-[#E8E2D9]/50 text-[#2C5E3B] border border-[#E8E2D9]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}