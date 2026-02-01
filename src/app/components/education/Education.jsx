import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    degree: "BS Computer Science",
    institute: "FG College Peshawar",
    grade: "CGPA: 3.3",
    year: "2023 – 2027",
    icon: <FaGraduationCap />,
  },
  {
    degree: "FSC (Computer Science)",
    institute: "Islamia College Peshawar",
    grade: "77.7%",
    year: "2023",
    icon: <FaSchool />,
  },
];

const Education = () => {
  return (
    <div className="Seccontainer mt-20 mb-20 flex flex-col gap-16">
      <h2 className="gradient">EDUCATION</h2>
      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className=" border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg cursor-pointer"
          >
            <div className="text-5xl text-yellow-200">{edu.icon}</div>
            <h5 className=" text-center">{edu.degree}</h5>
            <p className="text-center">{edu.institute}</p>
            <div className="flex justify-between w-full text-gray-400 mt-2">
              <span className="text-2xl">{edu.grade}</span>
              <span className="text-2xl">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
