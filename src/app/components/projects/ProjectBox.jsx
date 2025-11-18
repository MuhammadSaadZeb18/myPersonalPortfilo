import React from "react";
import CusLink from "../ui/Link";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
const ProjectBox = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-col md2:flex-row gap-10 items-center justify-between"
    >
      <div className="w-full md2:w-[50%] rounded-2Sm  bg-zinc-800 py-20 px-10 flex items-center justify-center ">
        <Image src={props.img} />
      </div>
      <div className="w-full md2:w-[50%] flex flex-col gap-3">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <div>
          <h6 className="font-normal">PROJECT INFO</h6>
          <div className="w-full bg-zinc-700 h-[1px] my-5 "></div>
          <div className="flex items-center justify-between">
            <h6 className="font-normal">YEAR</h6>
            <p>2025</p>
          </div>
          <div className="w-full bg-zinc-700 h-[1px] my-5 "></div>
          <div className="flex items-center justify-between">
            <h6 className="font-normal">ROLE</h6>
            <p>Frent-end Developer</p>
          </div>
          <div className="w-full bg-zinc-700 h-[1px] my-5 "></div>
        </div>
        <div className="flex gap-6">
          <CusLink icon={<HiArrowUpRight />} path={props.path}>
            LIVE DEMO
          </CusLink>
          <CusLink icon={<BsGithub />} path={"/"}>
            SEE ON GITHUB
          </CusLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
