import React from "react";
import Image from "next/image";
import aut from "../../assets/aut2.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
import Button from "../ui/Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="Seccontainer flex flex-col md:flex-row items-center mb-10! mt-40! justify-center gap-16 md:gap-10 overflow-hidden ">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1>Hi, I am Muhammad Saad Zeb.</h1>
        <p>
          A front-end developer passionate about building accessible and user
          friendly websites.
        </p>

        <div className="flex gap-4 items-center">
          <Button
            icon={<HiArrowUpRight className="text-white font-bold" size={16} />}
          >
            Contact Me
          </Button>

          <div className="rounded-full cursor-pointer flex items-center justify-center bg-zinc-800 h-16 w-16">
            <BsGithub size={20} className="text-yellow-200" />
          </div>

          <div className="rounded-full cursor-pointer flex items-center justify-center bg-zinc-800 h-16 w-16">
            <BsLinkedin size={20} className="text-yellow-200" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end">
        <Image
          src={aut}
          alt="myImghere"
          className="rounded-xl  sm:h-[500px] w-full object-contain sm:w-auto "
        />
      </div>
    </div>
  );
};

export default Hero;
