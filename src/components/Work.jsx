import { Icon } from '@iconify/react'

const PROJECTS = [
  {
    href: 'https://my-daily-qur-an.vercel.app/',
    image:
      '/images/project template.png',
    imageAlt: 'Aether Finance',
    stack: 'React / Node.js',
    year: '2025',
    title: 'Islamic Platform',
    contribution: 'Developed the frontend and backend of the app.',
    description:
      'Complete full-stack architecture and real-time transaction processing for a premium wealth management app.',
    delay: undefined,
  },
  {
    href: 'https://my-moonpay-app.vercel.app/',
    image:
      '/images/2026-03-24 (1).png',
    imageAlt: 'Lumina Web App',
    stack: 'Next.js / AWS',
    year: '2024',
    title: 'crypto Web App',
    contribution: 'frontend of the app.',
    description:
      'crypto web app for buying and selling crypto currencies.',
    delay: '0.1s',
  },
  {
    href: '#',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
    imageAlt: 'Onyx Inventory',
    stack: 'Vue / Python',
    year: '2022',
    title: 'Onyx Inventory System',
    description:
      'Custom e-commerce backend and real-time inventory tracking system built with microservices architecture.',
    delay: undefined,
  },
  {
    href: '#',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    imageAlt: 'Verve CMS',
    stack: 'TypeScript / GraphQL',
    year: '2022',
    title: 'Verve CMS',
    description:
      'Headless content management system featuring collaborative editing and real-time WebSockets synchronization.',
    delay: '0.1s',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-36 px-6 lg:px-8 border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 scroll-reveal">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">Projects</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl tracking-tight">
              Selected <span className="italic text-[#C9A84C]">Work</span>
            </h2>
          </div>
          <a
            href="https://github.com/rahmonabdul297-stack"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-white transition-colors pb-2 border-b border-[#C9A84C]/30 hover:border-white"
          >
            View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="scroll-reveal group block"
              style={p.delay ? { transitionDelay: p.delay } : undefined}
            >
              <div className="p-2 border border-white/5 rounded-sm bg-white/[0.01] mb-6 group-hover:border-[#C9A84C]/30 transition-colors duration-500">
                <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-[#111]">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ filter: 'saturate(0.8) contrast(1.1) brightness(0.3)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-black flex items-center justify-center">
                      <Icon icon="solar:arrow-right-up-linear" width={20} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C]">{p.stack}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">{p.year}</span>
                </div>
                <h4 className="font-serif text-2xl tracking-tight text-white/90 mb-2 capitalize">{p.title}</h4>
                <p className="text-sm text-white/40">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
