import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Quantum Web Innovations",
    duration: "Jan 2025 - Present",
    points: [
      "Developed and maintained 3+ production web applications using React.js and Next.js with a focus on performance and scalability.",
      "Translated Figma designs into reusable UI components, improving development consistency across the project.",
      "Integrated 10+ REST API endpoints using Axios and React Query for real-time data handling.",
      "Implemented global state using Redux.",
      "Optimized performance and reduced re-renders.",
    ],
  },
  {
    role: "React Developer",
    company: "Techcraft (Remote)",
    duration: "Jan 2024 - Jan 2025",
    points: [
      "Built 15+ reusable React components to speed up development and improve UI consistency.",
      "Integrated REST APIs using Axios and Fetch to display dynamic data from Node.js services.",
      "Improved page responsiveness and cross-browser compatibility using Tailwind CSS.",
      "Participated in debugging, code reviews, and feature planning with backend developers.",
      "Collaborated with backend developer.",
    ],
  },
  {
    role: "Web Developer",
    company: "SMIT (Training Program)",
    duration: "Oct 2023 - Dec 2024",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.js.",
      "Built interactive UI components such as forms, modals, and dynamic lists.",
      "Consumed public REST APIs and rendered dynamic data.",
      "Used Git and GitHub for version control and team collaboration.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="Seccontainer scroll-mt-28 mt-20 mb-20 flex flex-col gap-16"
    >
      <h2 className="gradient">EXPERIENCE</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {experienceData.map((item, i) => (
          <motion.div
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-800 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
          >
            <div className="text-5xl text-yellow-200">
              <FaBriefcase />
            </div>
            <h5 className="text-white">{item.role}</h5>
            <p className="text-white">{item.company}</p>
            <p className="text-stone-300">{item.duration}</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {item.points.map((point) => (
                <li key={point} className="text-stone-400 text-[14px] sm:text-[16px]">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
