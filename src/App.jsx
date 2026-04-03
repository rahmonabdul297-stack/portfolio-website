import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import About from './components/About'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
const name = "Abdulrahmon"
  return (
    <div className="antialiased selection:bg-[#C9A84C]/30 selection:text-white">
      <div
        className="fixed top-0 left-0 w-full h-[1px] z-[60]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #C9A84C 50%, transparent 100%)',
          opacity: 0.6,
        }}
      />
      <Navigation name={name} />
      <Hero name={name} />
      <SkillsMarquee />
      <About />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
      <Footer name={name} />
    </div>
  )
}
