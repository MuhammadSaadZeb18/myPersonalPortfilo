import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "SwiftRoc (Remote)",
    duration: "Jan 2026 – Present",
    points: [
      "Engineered a dynamic admin dashboard from scratch, featuring real-time data visualization, user activity monitoring, and interactive charts — reducing manual reporting time by an estimated 30%.",
      "Built scalable, production-grade web applications using React.js and Next.js, ensuring high performance and seamless user experiences across devices.",
      "Architected a reusable component library (buttons, modals, forms, tables), cutting development time for new features by 25% and improving code maintainability.",
      "Integrated RESTful APIs and handled real-time data flows, enabling live updates for KPIs and user analytics on the dashboard.",
      "Translated complex UI/UX designs into pixel-perfect, interactive interfaces, collaborating closely with designers in a fully remote setup.",
      "Optimized application performance through code splitting, lazy loading, and efficient state management.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Techcrafts (Remote)",
    duration: "Jan 2025 – Dec 2025",
    points: [
      "Supported development and optimization of live web applications.",
      "Designed reusable UI components to streamline development workflows.",
      "Integrated backend services and managed structured data flow.",
      "Strengthened application responsiveness and cross-device compatibility.",
      "Coordinated with backend teams for smooth feature deployment.",
    ],
  },
  {
    role: "Web Developer",
    company: "SMIT (Training Program)",
    duration: "Jan 2024 – Dec 2025",
    points: [
      "Completed an intensive Web Development program with practical project work.",
      "Created responsive and interactive web interfaces using modern tools.",
      "Built strong fundamentals in frontend architecture and best practices.",
      "Improved problem-solving through hands-on development challenges.",
      "Utilized version control and collaborative development techniques.",
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

      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
        {experienceData.map((item, i) => (
          <motion.div
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-800 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
          >
           
            <h5 className="text-white">{item.role}</h5>
            <p className="text-white">{item.company}</p>
            <p className="text-stone-300">{item.duration}</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="text-stone-400 text-[14px] sm:text-[16px]"
                >
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
