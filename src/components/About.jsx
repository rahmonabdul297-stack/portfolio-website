export default function About({ name }) {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-8 bg-[#07090e] text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[var(--primary)]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--primary)] font-bold">
                About Me
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-8 text-white">
              Engineering with <br />
              <span className="italic text-[var(--primary)]">Scalability</span> & Clarity
            </h2>

            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-slate-300 font-light">
              <p>
                I am a full-stack software engineer with over two years of experience helping companies architect and scale complex digital products. My approach is rooted in the belief that great code is maintainable—it solves complex business logic while remaining highly performant.
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
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-2">
                <img
                  src="/images/profile.jfif"
                  alt="Workstation Setup"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                  style={{ filter: "contrast(1.1) brightness(0.85)" }}
                />
                
                {/* Stats Bar Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                  <div className="grid grid-cols-2 gap-4 divide-x divide-slate-800">
                    <div className="text-center px-2">
                      <span className="font-serif text-3xl tracking-tight block text-[var(--primary)] mb-1">
                        2+
                      </span>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-medium">
                        Years Exp.
                      </p>
                    </div>
                    <div className="text-center px-2">
                      <span className="font-serif text-3xl tracking-tight block text-[var(--primary)] mb-1">
                        10+
                      </span>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-medium">
                        Projects Built
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[var(--primary)]/40 rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[var(--primary)]/40 rounded-2xl pointer-events-none" />
            </div>

            {/* Caption / Title Sub-tag */}
            <div className="mt-6 px-2">
              <div className="font-serif text-slate-200 text-base">{name}</div>
              <div className="text-xs uppercase tracking-wider text-[var(--primary)] font-mono mt-0.5">
                Full-Stack Software Engineer
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}