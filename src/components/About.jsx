export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 scroll-reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">About Me</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl tracking-tight leading-tight mb-8">
              Engineering with <br />
              <span className="italic text-[#C9A84C]">Scalability</span> & Clarity
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/50">
              <p>
                I am a full-stack software engineer with over two years of experience helping companies
                architect and scale complex digital products. My approach is rooted in the belief that
                great code is maintainable—it solves complex business logic while remaining highly
                performant.
              </p>
              <p>
                From developing robust APIs and microservices to crafting responsive, state-driven user
                interfaces, I navigate the entire web stack. I believe in clean architecture that speaks
                volumes and systems that scale effortlessly.
              </p>
            </div>
         
          </div>

          <div className="lg:col-span-5 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm border border-white/5 p-2 bg-white/[0.02]">
                <img
                  src="/images/my-img.jpg"
                  alt="Workstation Setup"
                  className="w-full h-[450px] object-cover rounded-sm"
                />
               
              </div>

              <div className="absolute bottom-6 left-0 right-0 px-8">
                <div className="grid grid-cols-2 gap-6 divide-x divide-white/10">
                  <div className="text-center px-4">
                    <span className="font-serif text-3xl tracking-tight block text-[#C9A84C] mb-1">
                    2+
                    </span>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Years Exp.</p>
                  </div>
                  <div className="text-center px-4">
                    <span className="font-serif text-3xl tracking-tight block text-[#C9A84C] mb-1">
                      10+
                    </span>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Projects</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-12 h-12 border-t border-r border-[#C9A84C]/40" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b border-l border-[#C9A84C]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
