import React from "react";
import CusLink from "../ui/Link";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const ProjectBox = (props) => {
  const isReverse = props.index % 2 !== 0;

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col md2:flex-row gap-14 items-center justify-between my-[2rem] ${
        isReverse ? "md2:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <motion.div
        onClick={props.onClick}
        className="relative rounded-2Sm bg-zinc-800 p-10 cursor-pointer"
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* glow */}
        <div className="absolute -inset-4 bg-yellow-200 opacity-10 blur-lg rounded-2xl" />

        <Image
          src={props.img}
          alt="project"
          className="rounded-Md relative z-10"
          width={500}
          height={600}
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="w-full md2:w-[50%] flex flex-col gap-4"
        initial={{ opacity: 0, x: isReverse ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h5>{props.title}</h5>
        <p>{props.description}</p>

        <div>
          <h6 className="font-normal">PROJECT INFO</h6>
          <div className="w-full bg-zinc-700 h-[1px] my-5"></div>

          <div className="flex items-center justify-between">
            <h6 className="font-normal">YEAR</h6>
            <p>{props.year}</p>
          </div>

          <div className="w-full bg-zinc-700 h-[1px] my-5"></div>

          <div className="flex items-center justify-between">
            <h6 className="font-normal">ROLE</h6>
            <p>{props.role}</p>
          </div>

          <div className="w-full bg-zinc-700 h-[1px] my-5"></div>
        </div>

        <div className="flex gap-6">
          <CusLink icon={<HiArrowUpRight />} path={props.path}>
            LIVE DEMO
          </CusLink>

          <motion.button
            className="relative w-fit text-[1.4rem] font-normal flex items-center gap-2 capitalize cursor-pointer text-yellow-200"
            whileHover={{ x: 6 }}
            onClick={props.onClick}
          >
            see modal
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBox;
