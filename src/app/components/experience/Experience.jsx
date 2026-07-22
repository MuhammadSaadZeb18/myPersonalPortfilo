import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Khan Home Group (Islamabad)",
    duration: "Jun 2026 – Present",
    points: [
      "Developed high-performance, fully animated portfolio websites using Next.js with responsive, SEO-friendly architecture.",
      "Building an admin dashboard for Khan Home Digital Solutions to manage business operations, analytics, and internal workflows.",
      "Designed and implemented a Careers Management System for creating job postings, tracking applications, and streamlining recruitment.",
      "Integrated REST APIs and built reusable UI components, improving development speed and maintainability.",
      "Collaborated closely with designers and backend engineers to deliver pixel-perfect interfaces and optimized application performance.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "SwiftRoc (Remote)",
    duration: "Jan 2026 – Present",
    points: [
      "Built scalable React.js and Next.js applications for international clients.",
      "Developed an interactive admin dashboard featuring real-time analytics and KPI visualization.",
      "Created reusable component libraries that accelerated feature development.",
      "Integrated REST APIs and optimized application performance using lazy loading and code splitting.",
      "Delivered responsive, production-ready interfaces from Figma designs.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Techcrafts (Remote)",
    duration: "Jan 2024 – Jan 2026",
    points: [
      "Developed responsive React.js applications for multiple client projects.",
      "Built reusable UI components and integrated RESTful APIs.",
      "Improved cross-browser compatibility and overall application performance.",
      "Worked closely with backend developers to deliver production-ready features.",
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
