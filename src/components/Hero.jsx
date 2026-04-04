import { Icon } from '@iconify/react'

export default function Hero({name}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/my-office.jpg"
          alt="Abstract Architecture"
          className="w-full h-full object-cover animate-slow-zoom"
          style={{ filter: 'brightness(0.5) contrast(1.2) saturate(0.5)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,1) 100%)',
          }}
        />
      </div>

      <div
        className="absolute top-1/2 left-8 lg:left-16 -translate-y-1/2 w-px h-32 hidden lg:block"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
        }}
      />
      <div
        className="absolute top-1/2 right-8 lg:right-16 -translate-y-1/2 w-px h-32 hidden lg:block"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <div className="animate-fade-in mb-8" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border "
            style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.03)' }}
          >
             <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
              active
            </span>
            <div className="w-2 h-2  rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
              Full-Stack Software Engineer
            </span>
          </div>
        </div>

        <h1
          className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
      Hi, I'm <span className="nameAnimation text-3xl md:text-5xl lg:text-6xl ">{name}</span>,
         </h1>
        <p
          className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up text-white/50"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
         I build software that bridges the gap between intuitive frontends and robust backend systems to build scalable,
          high-performance web applications. I am a full-stack software engineer with over two years of experience helping companies.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,168,76,0.25)] w-full sm:w-auto justify-center"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
              color: '#0A0A0A',
            }}
          >
            View Selected Work
            <Icon
              icon="solar:arrow-right-linear"
              width={16}
              className="group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
          </a>
          <a
            href="https://wa.me/2347089136508"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase border transition-all duration-300 hover:bg-white/5 w-full sm:w-auto justify-center"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            contact me
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up flex flex-col items-center gap-2"
        style={{ animationDelay: '1.2s', opacity: 0 }}
      >
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.5), transparent)' }}
        />
      </div>
    </section>
  )
}
