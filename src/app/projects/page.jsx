import ProjectsGrid from "../projects/ProjectGrid";
import data from "../data/data.json";

export default function ProjectsPage() {
  const projects = data.projectsData || [];

  return (
    <div className="p-8 Seccontainer my-[10rem]!">
      <h2 className="gradient">My Projects</h2>
      <ProjectsGrid projects={projects} />
    </div>
  );
}

