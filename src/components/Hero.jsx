import { Icon } from "@iconify/react";

export default function Hero({ name }) {
  return (
    <section className="relative min-h-screen bg-[#0a0f1d] text-white overflow-hidden flex items-center">
      
      {/* Main Split Layout Container */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Left Content Area (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-8 sm:px-16 lg:pl-24 lg:pr-16 py-24 z-20">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-slate-900/80 border border-slate-800 text-slate-300 w-fit backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Full-Stack Roles & Projects
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6 text-white">
            Hi, I'm <span className="text-[var(--primary)] uppercase">{name}</span>.
          </h1>

          {/* Professional Bio */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl mb-8">
            Full-stack software engineer specializing in scalable web applications, robust backend architectures, and immersive 3D digital experiences. I bridge intuitive frontends with high-performance APIs.
          </p>

          {/* Core Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["React / Next.js", "Node.js & Express", "TypeScript", "MongoDB"].map((tech, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs tracking-[0.2em] uppercase font-semibold bg-[var(--primary)] text-slate-950 transition-all duration-300 hover:opacity-90 shadow-lg"
            >
              Explore Projects
              <Icon icon="solar:arrow-right-linear" width={16} />
            </a>
            <a
              href="https://wa.me/2347089136508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs tracking-[0.2em] uppercase font-medium text-white border border-white/25 transition-all duration-300 hover:bg-white/5"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Image Column (5 Cols) */}
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-10">
            <img
              src="/images/my-office.jpg"
              alt="Developer Workspace"
              className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Floating Glass Card Overlapping the Image */}
          <div className="absolute bottom-28 left-8 right-8 lg:left-30 lg:right-0 lg:w-[390px] z-30 p-8 rounded-2xl bg-[#0c1222]/90 backdrop-blur-md border border-white/10 shadow-2xl">
            <h3 className="font-serif text-2xl text-white mb-2">Full-Stack Architecture</h3>
            <p className="text-xs text-[var(--primary)] font-mono mb-3">
              React, Next.js, Node.js, Express, TypeScript.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Engineered with precision—clean code, robust backend services, and scalable performance built for modern web applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}