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
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Redux", icon: <SiRedux /> },

  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="Seccontainer mt-24 mb-16 scroll-mt-28 flex flex-col gap-16"
    >
      <h2 className="gradient ">SKILLS</h2>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -10 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="text-5xl text-yellow-200"
            >
              {skill.icon}
            </motion.div>
            <p className="text-white tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
