import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import aut from "../../assets/aut_about.jpg";
import Image from "next/image";

const content = [
  "I enjoy learning new technologies, improving my workflow, and building clean, user-focused interfaces. Outside of development, Ilove playing cricket and exploring anything that sparks creativity.",
  "I specialize in building responsive and user-friendly web applications using React, Next.js, TailwindCSS, and TypeScript. I enjoy turning complex problems into simple, elegant interfaces",
  "I’ve contributed to several projects that have reached thousands of users, including e-commerce platforms and interactive dashboards.",
];

const About = () => {
  return (
    <div
      id="about"
      className="Seccontainer scroll-mt-28 mt-20 mb-20 flex flex-col gap-16"
    >
      <h2 className="gradient">ABOUT ME</h2>

      {/* Content Card */}
      <div className="flex flex-col mdM:flex-row border  border-white/10 gap-10 mdM:items-center">
        <motion.div
          className="w-full mdM:w-1/2 rounded-2xl p-8 md:p-10 flex flex-col gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h5>
            I am a front-end developer from Peshawar, Pakistan with a Computer
            Science background.
          </h5>

          {content.map((p) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {p}
            </motion.p>
          ))}

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
                <HiArrowDownOnSquare
                  className="text-white font-bold"
                  size={16}
                />
              }
            >
              Download Resume
            </Button>
          </motion.a>
        </motion.div>
        <div className="w-full  mdM:w-1/2 justify-items-start m-5  mdM:justify-items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0], // floating loop
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
          >
            <Image
              src={aut}
              alt="myImghere"
              className="rounded-xl h-[500px] sm:h-[500px] w-full object-contain "
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
