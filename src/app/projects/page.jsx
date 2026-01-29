"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/ProjectsData"; // Make sure the path is correct

export default function ProjectsPage() {
  return (
    <div className="p-8 Seccontainer my-[10rem]!">
      <h2 className=" gradient">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.path} // Use path for live project
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col justify-between"
          >
            <img
              src={project.img.src} // Show main image
              alt={project.title}
              className="rounded-md mb-4 object-cover w-full h-40"
            />
            <h5 className="gradient text-3xl my-4">{project.title}</h5>
            <p className="text-2xl my-3">{project.description}</p>
            <div className="mt-auto flex justify-between items-center text-lg text-zinc-500">
              <span>{project.year}</span>
              <span>{project.role}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
