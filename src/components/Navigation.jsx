import { useEffect, useState } from 'react'
import { navigationArray } from './arrays'


export default function Navigation({name}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMenuOpen(false)
const [selected, setSelected] = useState(null)
  return (
    <nav
      id="mainNav"
      className={`fixed top-[1px] w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'border-transparent'
      } border-b`}
      style={{ background: scrolled ? undefined : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-[#C9A84C]/5 group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
              <span className="font-serif text-lg tracking-tighter text-[#C9A84C]">{name.charAt(0)}</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="font-serif text-sm tracking-wide text-white/90 block uppercase">{name}</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]">Engineer</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navigationArray
            .map((item) => (
              <a href={item.link} key={item.id} onClick={() => setSelected(item.id)}>
                <div className="hidden lg:flex items-center gap-10">
                  <span className={`text-xs tracking-[0.15em] uppercase hover:text-[#C9A84C] transition-colors duration-300 ${selected === item.id ? 'text-[#C9A84C] border-b border-[#C9A84C]' : 'text-white/60'} py-2`}>
                    {item.name}
                  </span>
                </div>
              </a>
            ))
            }
               
              </div>
           
       

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5  text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
                color: '#0A0A0A',
              }}
            >
              Start a Project
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            >
              <span
                className="w-6 h-[1px] bg-white transition-all duration-300 origin-center"
                style={
                  menuOpen
                    ? { transform: 'rotate(45deg) translate(2px, 2px)' }
                    : undefined
                }
              />
              <span
                className="h-[1px] bg-white transition-all duration-300 origin-center"
                style={
                  menuOpen
                    ? {
                        width: '1.5rem',
                        transform: 'rotate(-45deg) translate(1px, -1px)',
                      }
                    : { width: '1rem' }
                }
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobileMenu"
        className={`${menuOpen ? 'block' : 'hidden'} lg:hidden border-t`}
        style={{
          background: 'rgba(10,10,10,0.98)',
          borderColor: 'rgba(201,168,76,0.15)',
        }}
      >
        <div className="px-6 py-8 space-y-6">
          <a
            href="#about"
            onClick={closeMobile}
            className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]"
          >
            About
          </a>
          <a
            href="#expertise"
            onClick={closeMobile}
            className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]"
          >
            Expertise
          </a>
          <a
            href="#work"
            onClick={closeMobile}
            className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]"
          >
            Selected Work
          </a>
          <a
            href="#experience"
            onClick={closeMobile}
            className="block text-sm tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A84C]"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={closeMobile}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs tracking-[0.15em] uppercase mt-4 w-full justify-center"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
              color: '#0A0A0A',
            }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  )
}
