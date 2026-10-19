import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Hero({ name }) {
  // Titles to loop through in the typing animation
  const titles = [
    name || "Yekini Abdulrahmon",
    "a Frontend Engineer",
    "a Backend Engineer",
    "a Full-Stack Software Engr.",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullText) {
      typingSpeed = 1800;
    } else if (isDeleting && displayText === "") {
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentFullText) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText !== "") {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] text-[#1A1A18] overflow-hidden flex items-center">
      {/* Main Split Layout Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen relative">
        
        {/* Left Content Area (Forest Emerald Background) */}
        <div className="lg:col-span-7 bg-[#1c3b25] text-[#FAF7F2] flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-16 py-28 lg:py-24 z-20 lg:border-r border-[#234B2F] relative overflow-hidden">
          
          {/* Subtle Decorative Grid Pattern & Soft Glow */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#38764B] rounded-full blur-3xl opacity-30 pointer-events-none" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[9px] lg:text-xs font-semibold tracking-wide uppercase bg-[#234B2F]/80 border border-[#FAF7F2]/20 text-[#FAF7F2] w-fit shadow-sm mb-6 backdrop-blur-md relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            Available for Full-Stack Roles & Projects
          </div>

          {/* Animated Typing Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-4xl tracking-tight leading-[1.1] mb-6 text-[#FAF7F2] min-h-[1.2em] relative z-10">
            Hi, I'm{" "}
            <span className="text-[#F1E7D6] uppercase font-bold inline-flex items-center">
              {displayText}
              <span className="inline-block w-[3px] h-[0.85em] bg-[#F1E7D6] ml-1.5 animate-pulse" />
            </span>
          </h1>

          {/* Professional Bio */}
          <p className="text-sm sm:text-base lg:text-lg text-[#FAF7F2]/85 font-light leading-relaxed max-w-xl mb-8 relative z-10">
            Full-stack software engineer specializing in scalable web
            applications and robust backend architectures. I bridge intuitive frontends with high-performance APIs.
          </p>

          {/* Core Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 relative z-10">
            {[
              "React / Next.js",
              "Node.js & Express",
              "TypeScript",
              "MongoDB",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#234B2F]/70 border border-[#FAF7F2]/15 text-[#F1E7D6] shadow-sm backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs tracking-[0.2em] uppercase font-semibold bg-[#FAF7F2] text-[#2C5E3B] hover:bg-[#F1E7D6] transition-all duration-300 shadow-md"
            >
              Explore Projects
              <Icon icon="solar:arrow-right-linear" width={16} />
            </a>
            <a
              href="https://wa.me/2347089136508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs tracking-[0.2em] uppercase font-semibold text-[#FAF7F2] border border-[#FAF7F2]/30 hover:bg-[#234B2F]/60 transition-all duration-300 shadow-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-screen overflow-hidden bg-[#E8E2D9]/30">
          <div className="absolute inset-0 z-10">
            <img
              src="/images/my-office.jpg"
              alt="Developer Workspace"
              className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5E3B]/80 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Floating Warm Cream Card Overlapping the Workspace Image */}
          <div className="absolute bottom-6 sm:bottom-12 lg:bottom-20 left-6 right-6 sm:left-12 sm:right-12 lg:right-auto lg:w-[400px] z-30 p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D9] shadow-2xl">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A18] font-bold mb-2">
              My Stacks
            </h3>
            <p className="text-xs text-[#2C5E3B] font-mono font-semibold mb-2 sm:mb-3">
              React, Next.js, Node.js, Express, TypeScript.
            </p>
            <p className="text-xs text-[#666158] leading-relaxed font-normal">
              Engineered with precision clean code, robust backend services, and
              scalable performance built for modern web applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}