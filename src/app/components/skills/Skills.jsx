import React from "react";

const data = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACTJS",
  "TAILWAND CSS",
  "BOOTSTRAP",
  "GIT",
  "GITHUB",
];
const Skills = () => {
  return (
    <div className="Seccontainer mt-20! mb-10!  flex flex-col items-start md:flex-row  justify-between ">
      <div className="w-full md:w-[40%]">
        <h2>SKILLS</h2>
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-6">
        <p>
          I’m constantly working to sharpen my skills and dive into new
          technologies. I love experimenting, learning, and pushing myself to
          build better, smarter, and more efficient digital experiences. Every
          project is a chance to grow—and I’m always ready for the next one.
        </p>

        <ul className="flex flex-wrap gap-6 mt-10!">
          {data.map((i) => (
            <li className="cursor-pointer group relative w-fit">
              <div className="py-2 px-6 w-fit relative">
                <p className="text-white">{i}</p>

                {/* Top border */}
                <span className="absolute left-0 top-0 h-px w-full bg-white group-hover:bg-yellow-200 transition-colors duration-300"></span>

                {/* Bottom border */}
                <span className="absolute left-0 bottom-0 h-px w-full bg-white group-hover:bg-yellow-200 transition-colors duration-300"></span>

                {/* Left border (animated height) */}
                <span className="absolute left-0 top-0 w-px h-0 bg-white group-hover:h-full group-hover:bg-yellow-200 transition-all duration-300"></span>

                {/* Right border (animated height) */}
                <span className="absolute right-0 bottom-0 w-px h-0 bg-white group-hover:h-full group-hover:bg-yellow-200 transition-all duration-300"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
