"use client";
import React from "react";
import Image from "next/image";
import aut from "../../assets/aut_about.jpg";
import aut2 from "../../assets/aut2.jpg";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import Button from "../ui/Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="Seccontainer flex flex-col md:flex-row items-center mb-10! mt-40! justify-center gap-16 md:gap-10 overflow-hidden ">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="gradient">Hi, I am Muhammad Saad Zeb.</h1>

        <p>
          I’m a Front-End Developer focused on building modern, responsive web
          apps using React and Next.js. I enjoy turning designs into clean,
          user-friendly interfaces and writing maintainable code.
        </p>

        <div className="flex gap-4 items-center">
          <a href="/res.pdf" download>
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
          </a>


          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <a
                href="https://github.com/MuhammadSaadZeb18"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  className="text-yellow-200 hover:scale-110 transition-all"
                  size={30}
                />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-saad-zeb-951329381/" target="_blank" rel="noreferrer">
                <BsLinkedin
                  className="text-yellow-200  hover:scale-110 transition-all"
                  size={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end">
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
            src={aut2}
            alt="myImghere"
            className="rounded-xl sm:h-[500px] w-full object-contain sm:w-auto"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
