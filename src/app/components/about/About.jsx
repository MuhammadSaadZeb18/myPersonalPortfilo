import React from "react";
import Button from "../ui/Button";
import { HiArrowDownOnSquare } from "react-icons/hi2";

const About = () => {
  return (
    <div
      id="about"
      className="Seccontainer scroll-mt-28 mt-20! mb-10! flex flex-col items-start md:flex-row justify-between "
    >
      <div className="w-full md:w-[40%]">
        <h2>ABOUT ME</h2>
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-6">
        <h5>
          I am a front-end developer from Peshawar,Pakistan. Has Computer
          Science background
        </h5>
        <p>
          I am a front-end developer from Peshawar, Pakistan, always looking to
          expand my skill set. I enjoy learning new technologies, improving my
          workflow, and building clean, user-focused interfaces. Outside of
          development, I love playing cricket and exploring anything that sparks
          creativity
        </p>

        {/* DOWNLOAD RESUME */}
        <a href="/res.pdf" download>
          <Button
            icon={
              <HiArrowDownOnSquare className="text-white font-bold" size={16} />
            }
          >
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default About;
