import { Fragment } from "react";

const ITEMS = [
   "Frontend Engineering",
  "API Design",
  "Backend Engineering",
  "Database Management",
];

function MarqueeSegments({ id }) {
  return (
    <>
      {ITEMS.map((label) => (
        <Fragment key={`${id}-${label}`}>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#FFF]">
            {label}
          </span>
          <span className="text-[#FFF] text-xs font-bold">◆</span>
        </Fragment>
      ))}
    </>
  );
}

export default function SkillsMarquee() {
  return (
    <div
      className="py-6 border-y border-[#E8E2D9] overflow-hidden relative bg-[#2C5E3B]"
    >
      {/* Soft gradient edge fades */}
      <div
        className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #FAF7F2, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #FAF7F2, transparent)" }}
      />

      <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
        <MarqueeSegments id="a" />
        <MarqueeSegments id="b" />
      </div>
    </div>
  );
}