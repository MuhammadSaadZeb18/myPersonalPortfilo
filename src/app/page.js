import About from "./components/about/About";
import Education from "./components/education/Education";
import Hero from "./components/Hero/Hero";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full h-px my-20! bg-zinc-800" />
      <Skills />
      <div className="w-full h-px my-20! bg-zinc-800" />
      <Projects />
      <div className="w-full h-px my-20! bg-zinc-800" />
      <Services />
      <div className="w-full h-px my-20! bg-zinc-800" />
      <Education />
      <div className="w-full h-px my-20! bg-zinc-800" />
      <About />
      <div className="w-full h-px my-20! bg-zinc-800" />
    </div>
  );
}
