import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiVuedotjs,
  SiXstate,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiReactquery,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue", icon: <SiVuedotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "REST APIs", icon: <AiOutlineApi /> },
      { name: "Axios", icon: <SiAxios /> },
    ],
  },
  {
    title: "State & Tools",
    skills: [
      { name: "Redux", icon: <SiRedux /> },
      { name: "Zustand", icon: <SiXstate /> },
      { name: "TanStack Query", icon: <SiReactquery /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="Seccontainer mt-24 mb-16 scroll-mt-28 flex flex-col gap-16"
    >
      <h2 className="gradient ">SKILLS</h2>

      <div className="grid gap-8 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg"
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 shadow-lg cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-4xl text-yellow-200"
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="text-white text-sm text-center tracking-wide">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
