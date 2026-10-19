import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import VisitTracker from "./components/tracker";
import useScrollReveal from "./hooks/useScrollReveal";

import AboutPage from "./pages/AboutPage";
import ExpertisePage from "./pages/ExpertisePage";
import WorkPage from "./pages/WorkPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

import { FaAngleDoubleUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import HomePage from "./pages/HomePage";

export default function App() {
  useScrollReveal();
  const name = "Abdulrahmon Yekini";

  return (
    <div className="antialiased selection:bg-[#2C5E3B]/20 selection:text-[#1A1A18] bg-[#FAF7F2] min-h-screen flex flex-col justify-between">
      {/* Top Accent Ambient Line */}
      <div
        className="fixed top-0 left-0 w-full h-[2px] z-[60]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2C5E3B 50%, transparent 100%)",
          opacity: 0.8,
        }}
      />

      {/* Global Floating Actions */}
      <div>
        <a href="#top" aria-label="Back to top">
          <FaAngleDoubleUp
            size={20}
            className="fixed bottom-20 right-7 lg:right-14 z-50 text-[#2C5E3B] mb-2 animate-bounce cursor-pointer"
          />
        </a>
        <a
          href="https://wa.me/+2347089136508"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="fixed bottom-10 right-5 lg:right-10 z-50 bg-white p-2 border border-[#E8E2D9] shadow-md rounded-full text-[#15803D] hover:scale-110 transition-transform"
        >
          <IoLogoWhatsapp size={28} />
        </a>
      </div>

      {/* Visitor Analytics Tracker */}
      <VisitTracker />

      {/* Sticky Global Navigation */}
      <Navigation name={name} />

      {/* Dynamic Route Pages */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage name={name} />} />
          <Route path="/about" element={<AboutPage name={name} />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer name={name} />
    </div>
  );
}
