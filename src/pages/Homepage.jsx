import Hero from "../components/Hero";
import ToolsMarquee from "../components/ToolsMarquee";
const HomePage =({ name }) =>{
  return (
    <main className="pt-20 lg:pt-24">
      <Hero name={name} />
      <ToolsMarquee />
    </main>
  );
}
export default HomePage