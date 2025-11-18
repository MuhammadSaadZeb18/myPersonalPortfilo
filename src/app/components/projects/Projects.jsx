import { projectsData } from "../../data/ProjectsData";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div className="Seccontainer flex flex-col gap-20">
      <div>
        <h2>Featured Projects</h2>
        <p>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      {projectsData.map((p, i) => (
        <ProjectBox
          key={i}
          title={p.title}
          description={p.description}
          path={p.path}
          year={p.year}
          role={p.role}
          github={p.github}
          img={p.img}
        />
      ))}
    </div>
  );
};

export default Projects;
