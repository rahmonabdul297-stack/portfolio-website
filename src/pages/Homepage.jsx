import Hero from "../components/Hero.jsx";
import ToolsMarquee from "../components/ToolsMarquee.jsx";
const HomePage = ({ name }) => {
  return (
    <main className="pt-20 lg:pt-24">
      <Hero name={name} />
      <ToolsMarquee />
    </main>
  );
};
export default HomePage;
