import { Icon } from "@iconify/react";

export default function Hero({ name }) {
  return (
    <section className="relative min-h-screen bg-[#0a0f1d] text-white overflow-hidden flex items-center">
      
      {/* Main Split Layout Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen relative">
        
        {/* Left Content Area (7 Cols on Desktop, Full on Mobile) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-16 py-28 lg:py-24 z-20 lg:border-r-[30px] border-[#f1e7d6]">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-slate-900/80 border border-slate-800 text-slate-300 w-fit backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Full-Stack Roles & Projects
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-white">
            Hi, I'm <span className="text-[var(--primary)] uppercase">{name}</span>.
          </h1>

          {/* Professional Bio */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-xl mb-8">
            Full-stack software engineer specializing in scalable web applications, robust backend architectures, and immersive 3D digital experiences. I bridge intuitive frontends with high-performance APIs.
          </p>

          {/* Core Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {["React / Next.js", "Node.js & Express", "TypeScript", "MongoDB"].map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm">
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

        {/* Diagonal Slanted Amber/Gold Divider Stripe (Visible on Desktop only) */}
        {/* <div className="hidden lg:block absolute top-0 bottom-0 left-[57%] w-24 bg-[var(--primary)] transform -skew-x-12 z-20 pointer-events-none shadow-2xl" /> */}

        {/* Right Image Column (5 Cols on Desktop, Stacked Banner on Mobile) */}
        <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-10">
            <img
              src="/images/my-office.jpg"
              alt="Developer Workspace"
              className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.1]"
            />
            {/* Dark gradient overlay for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-black/40 to-transparent lg:hidden" />
          </div>

          {/* Floating Glass Card Overlapping the Image */}
          <div className="absolute bottom-6 sm:bottom-12 lg:bottom-20 left-6 right-6 sm:left-12 sm:right-12  lg:right-auto lg:w-[400px] z-30 p-6 sm:p-8 rounded-2xl bg-[#0c1222]/90 backdrop-blur-md border border-white/10 shadow-2xl">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">Full-Stack Architecture</h3>
            <p className="text-xs text-[var(--primary)] font-mono mb-2 sm:mb-3">
              React, Next.js, Node.js, Express, TypeScript.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Engineered with precision clean code, robust backend services, and scalable performance built for modern web applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}