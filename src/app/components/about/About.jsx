import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { HiArrowDownOnSquare } from "react-icons/hi2";

const About = () => {
  return (
    <div
      id="about"
      className="Seccontainer scroll-mt-28 mt-20 mb-20 flex flex-col gap-16"
    >
      <h2 className="gradient">ABOUT ME</h2>

      {/* Content Card */}
      <motion.div
        className="bg-zinc-800 border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg flex flex-col gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h5>
          I am a front-end developer from Peshawar, Pakistan with a Computer
          Science background.
        </h5>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I enjoy learning new technologies, improving my workflow, and building
          clean, user-focused interfaces. Outside of development, I love playing
          cricket and exploring anything that sparks creativity.
        </motion.p>
        {/* Download Resume Button */}
        <motion.a
          href="/res.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            icon={
              <HiArrowDownOnSquare className="text-white font-bold" size={16} />
            }
          >
            Download Resume
          </Button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
