// app/projects/layout.jsx
import React from "react";
import Footer from "../components/footer/Footer";
import HeaderProjects from "../components/Header/HeaderProjects";

export default function ProjectsLayout({ children }) {
  return (
    <div>
      <HeaderProjects />

      {/* Page content will go here */}
      <main>{children}</main>
      <div className="w-full h-px my-20! bg-zinc-800" />
    </div>
  );
}
