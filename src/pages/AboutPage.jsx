import About from "../components/About.jsx";

export default function AboutPage({ name }) {
  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <About name={name} />
    </main>
  );
}