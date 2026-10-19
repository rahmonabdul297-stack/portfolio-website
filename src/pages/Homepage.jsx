import Hero from "../components/Hero";
import ToolsMarquee from "../components/ToolsMarquee";

export default function HomePage({ name }) {
  return (
    <main className="pt-20 lg:pt-24">
      <Hero name={name} />
      <ToolsMarquee />
    </main>
  );
}
