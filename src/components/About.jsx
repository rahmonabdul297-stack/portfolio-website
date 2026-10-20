export default function About({ name }) {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-8 bg-[#FAF7F2] text-[#1A1A18]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2C5E3B]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#2C5E3B] font-bold">
                About Me
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-8 text-[#1A1A18]">
              Engineering with <br />
              <span className="italic text-[#2C5E3B]">Scalability</span> & Clarity
            </h2>

            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-[#666158] font-normal">
              <p>
                I am a full-stack software engineer with over two years of experience building and scaling complex digital products. My approach is rooted in the belief that great code is maintainable, it solves complex business logic while remaining highly performant.
              </p>
              <p>
                From developing robust APIs and microservices to crafting responsive, state-driven user interfaces, I navigate the entire web stack. I believe in clean architecture that speaks volumes and systems that scale effortlessly.
              </p>
            </div>
          </div>

          {/* Right Column: Workstation Visual & Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E8E2D9] bg-white shadow-sm p-2">
                <img
                  src="/images/profile.jfif"
                  alt="Workstation Setup"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                  style={{ filter: "contrast(1.05) brightness(0.95)" }}
                />
                
                {/* Stats Bar Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E2D9] shadow-md">
                  <div className="grid grid-cols-2 gap-4 divide-x divide-[#E8E2D9]">
                    <div className="text-center px-2">
                      <span className="font-serif text-3xl font-bold tracking-tight block text-[#2C5E3B] mb-1">
                        2+
                      </span>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#666158] font-semibold">
                        Years Exp.
                      </p>
                    </div>
                    <div className="text-center px-2">
                      <span className="font-serif text-3xl font-bold tracking-tight block text-[#2C5E3B] mb-1">
                        10+
                      </span>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#666158] font-semibold">
                        Projects Built
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#2C5E3B]/40 rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#2C5E3B]/40 rounded-2xl pointer-events-none" />
            </div>

            {/* Caption / Title Sub-tag */}
            <div className="mt-6 px-2">
              <div className="font-serif text-[#1A1A18] text-base font-bold uppercase">{name}</div>
              <div className="text-xs uppercase tracking-wider text-[#2C5E3B] font-mono font-semibold mt-0.5">
                Full-Stack Software Engineer
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}