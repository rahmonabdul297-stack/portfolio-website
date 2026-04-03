const ITEMS = [
  {
    active: true,
    title: 'Senior Full-Stack Engineer',
    company: 'jaflah software development company.',
    period: '2024 — present',
    periodClass: 'text-[#C9A84C]',
    description:
      'Leading architectural decisions and mentoring developers to build scalable enterprise web applications from the ground up, utilizing cutting-edge serverless technologies.',
  },
  {
    active: true,
    title: 'Backend Engineer',
    company: 'jaflah software development company.',
    period: '2024 — present',
    periodClass: 'text-[#C9A84C]',
    description:
      'Architected distributed systems, optimized complex database queries, and built resilient RESTful APIs that successfully handled millions of daily requests.',
  },
  {
    active: true,
    title: 'Frontend Developer',
    company: 'jaflah software development company.',
    period: '2024 — present',
    periodClass: 'text-[#C9A84C]',
    description:
      'Focused on complex web application interfaces, creating robust component libraries, state management patterns, and optimizing critical rendering paths.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-36 px-6 lg:px-8 border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 scroll-reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">Career Path</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl tracking-tight">
            Professional <span className="italic text-[#C9A84C]">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-px w-[1px] bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/20 to-transparent" />

          <div className="space-y-16">
            {ITEMS.map((item) => (
              <div key={item.title} className="relative pl-16 md:pl-0 scroll-reveal group">
                <div
                  className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-12 h-12 rounded-full z-10 flex items-center justify-center transition-colors ${
                    item.active
                      ? 'border border-[#C9A84C]/40 bg-[#0D0D0D] group-hover:bg-[#C9A84C]/10'
                      : 'border border-white/10 bg-[#0D0D0D]'
                  }`}
                >
                  {item.active ? (
                    <div className="w-2 h-2 rounded-full bg-[#C9A84C] shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#C9A84C] transition-colors" />
                  )}
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
                  <div className="md:text-right md:pr-12 pt-2 mb-4 md:mb-0">
                    <h4 className="font-serif text-xl tracking-tight text-white/90">{item.title}</h4>
                    <span className="text-sm text-white/40 block mt-1">{item.company}</span>
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase mt-3 block ${item.periodClass}`}
                    >
                      {item.period}
                    </span>
                  </div>
                  <div className="md:pl-12 pt-2 border-l border-white/5 md:border-none pl-4">
                    <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
