"use client";

import { useState } from "react";
import { projectsData } from "../../data/ProjectsData";
import ProjectBox from "./ProjectBox";
import ProjectModal from "../modal/ProjectModal";
import Link from "next/link";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="work" className="Seccontainer scroll-mt-28 flex flex-col  gap-8">
      <h2 className="gradient">FEATURED PROJECTS</h2>
      <div>
        <p>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      {projectsData.map(
        (p, i) =>
          i < 2 && (
            <ProjectBox
              key={i}
              title={p.title}
              description={p.description}
              path={p.path}
              year={p.year}
              role={p.role}
              github={p.github}
              img={p.img}
              onClick={() => setSelectedProject(p)}
            />
          ),
      )}

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
