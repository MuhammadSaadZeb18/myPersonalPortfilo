import ProjectsGrid from "../projects/ProjectGrid";

export default async function ProjectsPage() {
  const res = await fetch(
    "https://portfilo-a7ebc-default-rtdb.firebaseio.com/projectsData.json",
    { next: { revalidate: 60 } }, // ISR
  );

  const projects = await res.json();

  return (
    <div className="p-8 Seccontainer my-[10rem]!">
      <h2 className="gradient">My Projects</h2>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
