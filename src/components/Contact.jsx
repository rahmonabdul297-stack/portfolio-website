import { Icon } from '@iconify/react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0A]">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl bg-[#222] mx-auto relative z-10 text-center scroll-reveal border border-[#C9A84C]/10 p-12 lg:p-20  bg-white/[0.01] rounded-lg">
        <div className="w-16 h-16 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 flex items-center justify-center mx-auto mb-8">
          <Icon icon="solar:letter-linear" width={28} className="text-[#C9A84C]" strokeWidth={1.5} />
        </div>

        <h2 className="font-serif text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Ready to build something <br />
          <span className="italic text-[#C9A84C]">extraordinary?</span>
        </h2>
        <p className="text-base text-white/50 mb-10 max-w-lg mx-auto">
          Currently accepting new projects for Q3. If you have a complex web application or software
          architecture in mind, let&apos;s discuss how we can bring it to life.
        </p>

        <a
          href="mailto:rahmonabdul297@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
            color: '#0A0A0A',
          }}
        >
          Get in Touch
          <Icon
            icon="solar:arrow-right-linear"
            width={16}
            className="group-hover:translate-x-1 transition-transform"
            strokeWidth={1.5}
          />
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <span className="flex items-center gap-2">
            <Icon icon="solar:map-point-linear" width={16} /> Based in Lagos, Nigeria
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <span className="flex items-center gap-2">
            <Icon icon="solar:global-linear" width={16} /> Working Globally
          </span>
        </div>
      </div>
    </section>
  )
}
