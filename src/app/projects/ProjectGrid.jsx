"use client";
import { motion } from "framer-motion";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.a
          key={project.title}
          href={project.path}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-800 text-white p-6 rounded-xl shadow-lg"
        >
          <img
            src={project.img}
            alt={project.title}
            className="rounded-md mb-4 object-cover w-full h-40"
          />

          <h5 className="gradient text-3xl my-4">{project.title}</h5>
          <p className="text-2xl my-3">{project.description}</p>
        </motion.a>
      ))}
    </div>
  );
}
