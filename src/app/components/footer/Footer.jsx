
"use client"
import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Button from "../ui/Button";
import { HiArrowDownOnSquare } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="Seccontainer scroll-mt-28 mt-20 mb-20 flex flex-col gap-16"
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-white "
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        LET&apos;S CONNECT
      </motion.h2>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1: Intro + Resume */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300">
            Say hello at{" "}
            <span className="text-yellow-200 font-medium">
              msaadzeb@gmail.com
            </span>
            <br />I am always open to new opportunities and collaborations.
          </p>

          {/* Download Resume */}
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
        </motion.div>

        {/* Column 2: Contact Details */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h6 className="">Contact Info</h6>
          <div className="flex items-center gap-3">
            <MdEmail size={26} className="text-yellow-200" />
            <p className="text-gray-300">msaadzeb@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <MdPhone size={26} className="text-yellow-200" />
            <p className="text-gray-300">+92 345 9698777</p>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn size={26} className="text-yellow-200" />
            <p className="text-gray-300">Peshawar, Pakistan</p>
          </div>
        </motion.div>

        {/* Column 3: Social Links */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h6 className="">Follow Me</h6>
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <BsLinkedin
                className="text-yellow-200 hover:scale-110 transition-all"
                size={30}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <BsTwitter
                className="text-yellow-200 hover:scale-110 transition-all"
                size={30}
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.p
        className="text-gray-500 text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Muhammad Saad Zeb. All rights
        reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
