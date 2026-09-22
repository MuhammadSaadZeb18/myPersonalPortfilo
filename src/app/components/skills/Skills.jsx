import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaGitAlt, FaRobot } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiExpo,
  SiTailwindcss,
  SiReactquery,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

const skillsData = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "AI Integrations", icon: <FaRobot /> },
  { name: "Complex API Integrations", icon: <AiOutlineApi /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="Seccontainer mt-24 mb-16 scroll-mt-28 flex flex-col gap-10"
    >
      <h2 className="gradient">SKILLS</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-zinc-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3.5 sm:gap-4 shadow-xl hover:border-yellow-200/50 hover:bg-zinc-800/90 transition-all cursor-pointer group"
          >
            <div className="text-3xl sm:text-4xl text-yellow-200 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <p className="text-white text-base sm:text-lg font-medium tracking-wide text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;





