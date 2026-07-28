import { Fragment } from "react";

const ITEMS = [
  "Node Js",
  "Mongo DB",
  "React",
  "Next",
  "Vue",
  "Express",
  "JavaScript",
  "TypeScript",
  "HTML",
  "Tailwind",
];

function MarqueeSegments({ id }) {
  return (
    <>
      {ITEMS.map((label) => (
        <Fragment key={`${id}-${label}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-white">
            {label}
          </span>
          <span className="text-[#F1E7D6]/40 text-xs">◆</span>
        </Fragment>
      ))}
    </>
  );
}

export default function  ToolsMarquee() {
  return (
    <div
      className="py-6 border-y overflow-hidden relative"
      style={{ background: "#0a0a31", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div
        className="absolute left-0 top-0 w-32 h-full z-10"
        style={{ background: "linear-gradient(90deg, #0D0D0D, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 w-32 h-full z-10"
        style={{ background: "linear-gradient(270deg, #0D0D0D, transparent)" }}
      />

      <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
        <MarqueeSegments id="a" />
        <MarqueeSegments id="b" />
      </div>
    </div>
  );
}
