import { Icon } from "@iconify/react";

const CARDS = [
  {
    icon: "solar:code-square-linear",
    title: "Frontend Engineering",
    body: "Building responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Vue, ensuring optimal performance and seamless experiences.",
    delay: undefined,
  },
  {
    icon: "solar:server-square-linear",
    title: "Backend & APIs",
    body: "Designing robust server-side architectures, RESTful APIs, and managing complex database schemas using Node.js, Express, and MongoDB.",
    delay: "0.1s",
  },
  {
    icon: "solar:cloud-storage-linear",
    title: "Deployment & Hosting",
    body: "Deploying scalable applications, with highly performing SEO and hosting them on AWS, Vercel, and Netlify to ensure high availability and performance.",
    delay: "0.2s",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 lg:py-36 px-6 lg:px-8 border-t"
      style={{
        background: "#020223",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#F1E7D6]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#F1E7D6]">
              Technical Stack
            </span>
            <div className="w-8 h-px bg-[#F1E7D6]" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl tracking-tight text-[#F1E7D6] mb-6">
            Core <span className="italic text-[#F1E7D6]">Expertise</span>
          </h2>
          <p className="text-base text-[#F1E7D6] max-w-2xl mx-auto leading-relaxed">
            A holistic approach to development, combining architectural insight
            with rigorous execution across the entire software lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map(({ icon, title, body, delay }) => (
            <div
              key={title}
              className="scroll-reveal group relative p-10 rounded-sm border border-white/5 bg-white/[0.01] transition-all duration-500 hover:border-[#F1E7D6]/30"
              style={delay ? { transitionDelay: delay } : undefined}
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #F1E7D6, transparent)",
                }}
              />
              <div className="w-14 h-14 rounded-full border border-[#F1E7D6]/30 bg-[#F1E7D6]/5 flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group-hover:bg-[#F1E7D6]/10">
                <Icon
                  icon={icon}
                  width={24}
                  className="text-[#F1E7D6]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-xl tracking-tight mb-4 text-[#F1E7D6] font-black">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white font-medium">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
