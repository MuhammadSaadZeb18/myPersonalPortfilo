import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import khanHomeLogo from "../../assets/khan_home_logo.png";
import swiftRocLogo from "../../assets/swift_roc_logo.png";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Khan Home Digital Solutions",
    logo: khanHomeLogo,
    location: "Full-time — Islamabad, Pakistan — On-site",
    duration: "Jun 2026 – Present",
    points: [
      "Develop and maintain responsive, high-performance e-commerce websites using React.js, Next.js, and TypeScript.",
      "Build cross-platform mobile applications using React Native and Expo, delivering consistent shopping experiences across web and mobile.",
      "Develop admin dashboards for managing products, inventory, categories, orders, and business operations.",
      "Integrate REST APIs to connect storefronts, mobile applications, and dashboards with backend services.",
      "Collaborate with designers and backend engineers to deliver new features, optimize performance, and maintain reusable UI components.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Swift Roc",
    logo: swiftRocLogo,
    location: "Full-time — Peshawar, Pakistan — Remote",
    duration: "Jan 2024 – Aug 2026",
    points: [
      "Built scalable React.js and Next.js applications for international clients.",
      "Developed an interactive admin dashboard featuring real-time analytics and KPI visualization.",
      "Created reusable component libraries that accelerated feature development.",
      "Integrated REST APIs and optimized application performance using lazy loading and code splitting.",
      "Delivered responsive, production-ready interfaces from Figma designs.",
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
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-800 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:border-yellow-200/40 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                <div className="flex flex-col gap-1">
                  <h5 className="text-white text-xl font-bold">{item.role}</h5>
                  <p className="text-yellow-200 font-semibold text-[17px]">
                    {item.company}
                  </p>
                </div>
                {item.logo && (
                  <div className="shrink-0   px-3 py-2 flex items-center justify-center h-[100px] max-w-[150px]">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="object-contain h-full w-auto max-h-[100px]"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap justify-between items-center text-stone-300 text-base gap-2 mt-1">
                <span className="italic text-stone-400">{item.location}</span>
                <span className="text-yellow-200/90 font-medium bg-zinc-900/60 px-2.5 py-0.5 rounded-md border border-white/5">
                  {item.duration}
                </span>
              </div>
            </div>

            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="text-stone-300 text-[14px] sm:text-[15px] leading-relaxed"
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


