"use client";

import { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";
import ProjectModal from "../modal/ProjectModal";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://portfilo-a7ebc-default-rtdb.firebaseio.com/projectsData.json"
        );
        const data = await res.json();
        setProjects(data || []);
      } catch (err) {
        console.error("Firebase error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <motion.div
      id="work"
      className="Seccontainer scroll-mt-28 flex flex-col gap-12"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <motion.h2 variants={fadeUp} className="gradient">
        FEATURED PROJECTS
      </motion.h2>

      <motion.p variants={fadeUp}>
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </motion.p>

      {projects.map(
        (p, i) =>
          i < 3 && (
            <ProjectBox
              key={p.title}
              index={i}
              {...p}
              onClick={() => setSelectedProject(p)}
            />
          )
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.div>
  );
};

export default Projects;
