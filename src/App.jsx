import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

import { FaAngleDoubleUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import VisitTracker from "./components/tracker";
import useScrollReveal from "./hooks/useScrollReveal";
import ToolsMarquee from "./components/ToolsMarquee";
export default function App() {
  useScrollReveal();
  const name = "Abdulrahmon yekini";

  return (
    <div className="antialiased selection:bg-[#F1E7D6]/30 selection:text-white">
      <div
        className="fixed top-0 left-0 w-full h-[1px] z-[60]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #F1E7D6 50%, transparent 100%)",
          opacity: 0.6,
        }}
      />
      <div>
        <a href="#">
          <FaAngleDoubleUp
            size={20}
            className="fixed bottom-20 right-7 lg:right-12  z-50 text-[#F1E7D6] mb-2 animate-bounce"
          />
        </a>
        <a
          href="https://wa.me/+2347089136508"
          className="fixed bottom-10 right-5 lg:right-10  z-50 bg-AppWhite p-1  border border-AppRed shadow-AppRed rounded-[50%] text-green-500 animate-pulse"
        >
          {" "}
          <IoLogoWhatsapp size={30} />
        </a>
      </div>
      <VisitTracker />
      <Navigation name={name} />
      <Hero name={name} />
      <SkillsMarquee />
      <About name={name} />
      <Expertise />
      <ToolsMarquee/>
      <Work />
      <Experience />
      <Contact />
      <Footer name={name} />
    </div>
  );
}
