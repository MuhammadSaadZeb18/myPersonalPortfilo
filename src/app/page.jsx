"use client";
import { motion } from "framer-motion";
import FadeSection from "../app/components/common/FadeSection";

import About from "./components/about/About";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* content */}
      <FadeSection>
        <Hero />
      </FadeSection>
      <div className="w-full h-px my-20! bg-zinc-800" />

      <FadeSection>
        <Skills />
      </FadeSection>
      <div className="w-full h-px my-20! bg-zinc-800" />

      <FadeSection>
        <Projects />
      </FadeSection>
      <div className="w-full h-px my-20! bg-zinc-800" />

      <FadeSection>
        <Services />
      </FadeSection>
      <div className="w-full h-px my-20! bg-zinc-800" />

      <FadeSection>
        <Education />
      </FadeSection>
      <div className="w-full h-px my-20! bg-zinc-800" />

      <FadeSection>
        <About />
      </FadeSection>
      <div className="w-full h-px my-20! bg-zinc-800" />
    </div>
  );
}
