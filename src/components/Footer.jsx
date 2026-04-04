export default function Footer({name}) {
  return (
    <footer className="border-t border-white/5 bg-[#050505] px-6 lg:px-8 relative">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-[#C9A84C]/5">
          <img src="/public/images/my-img.jpg" alt=""  className='h-full w-full rounded-full'/>
          </div>
          <span className="font-serif text-sm text-white/90 uppercase">{name}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a href="https://github.com/rahmonabdul297-stack" className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abdul-rahmon-91b451359/" className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors">
            Twitter/X
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] tracking-widest uppercase text-white/50">
          © 2026 engr. {name}.
        </p>
        <p className="text-[10px] tracking-widest uppercase text-white/50">All rights reserved.</p>
      </div>
    </footer>
  )
}
