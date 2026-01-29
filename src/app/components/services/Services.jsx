import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaFigma, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Front-End Development",
    description:
      "Building fast, responsive, and visually appealing websites using React.js, Next.js, and modern UI frameworks like Tailwind CSS.",
    icon: <FaReact />,
  },
  {
    title: "UI / UX Implementation",
    description:
      "Converting Figma designs into pixel-perfect front-end code with attention to user experience and design consistency.",
    icon: <FaFigma />,
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring websites look and work great across all screen sizes — from large desktops to mobile devices — with fluid layouts and modern breakpoints.",
    icon: <FaMobileAlt />,
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="Seccontainer scroll-mt-28 mt-20 mb-20 flex flex-col gap-16"
    >
      <h2 className="gradient">SERVICES</h2>
      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg cursor-pointer"
          >
            <div className="text-5xl text-yellow-200">{service.icon}</div>
            <h5 className="text-xl font-semibold text-white text-center">
              {service.title}
            </h5>
            <p className=" text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
