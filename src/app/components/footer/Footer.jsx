import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="Seccontainer scroll-mt-28 mt-20! mb-10! flex flex-col items-start md:flex-row justify-between"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 w-full md:w-[40%]">
        <h2>LET'S CONNECT</h2>
        <p>
          Say hello at{" "}
          <span className="text-yellow-200">msaadzeb@gmail.com</span>
          <br />
          For more info, here is my resume
        </p>

        <ul className="flex gap-5 items-center">
          <li>
            <a
              href="https://github.com/MuhammadSaadZeb18"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                size={30}
                className="text-yellow-200 hover:scale-110 transition"
              />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <BsLinkedin
                size={30}
                className="text-yellow-200 hover:scale-110 transition"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE (DETAILS INSTEAD OF FORM) */}
      <div className="w-full md:w-[60%] flex flex-col gap-6 mt-[2rem]">
        <div className="flex items-center gap-4">
          <MdEmail size={26} className="text-yellow-200" />
          <p className="text-[1.6rem] text-zinc-300">msaadzeb@gmail.com</p>
        </div>

        <div className="flex items-center gap-4">
          <MdPhone size={26} className="text-yellow-200" />
          <p className="text-[1.6rem] text-zinc-300">+92 345 9698777</p>
        </div>

        <div className="flex items-center gap-4">
          <MdLocationOn size={26} className="text-yellow-200" />
          <p className="text-[1.6rem] text-zinc-300">Peshawar, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
