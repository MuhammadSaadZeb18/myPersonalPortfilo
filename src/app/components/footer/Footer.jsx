import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Button from "../ui/Button";
const Footer = () => {
  return (
    <footer className="Seccontainer mt-20! mb-10!  flex flex-col items-start md:flex-row  justify-between">
      <div className="flex flex-col gap-6 w-full md:w-[40%]">
        <h2>LET'S CONNECT</h2>
        <p>
          Say hello at msaadzeb@gmail.com <br /> for more info, here is my
          resume{" "}
        </p>

        <ul className="flex gap-5 items-center">
          <li>
            <BsGithub size={30} className="text-yellow-200" />
          </li>
          <li>
            <BsGithub size={30} className="text-yellow-200" />
          </li>
          <li>
            <BsGithub size={30} className="text-yellow-200" />
          </li>
          <li>
            <BsGithub size={30} className="text-yellow-200" />
          </li>
        </ul>
      </div>
      <form className="w-full md:w-[60%] flex flex-col gap-2">
        <label className="mt-[2rem]" htmlFor="username">
          <p>Name</p>
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Your Name"
          className="px-6 py-3 bg-zinc-800 text-[1.6rem] text-white rounded-sm w-full"
        />

        <label className="mt-[2rem]" htmlFor="email">
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="px-6 py-3 bg-zinc-800 text-[1.6rem] text-white rounded-sm w-full"
        />

        <label className="mt-[2rem]" htmlFor="subject">
          <p>Subject</p>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Your Subject"
          className="px-6 py-3 bg-zinc-800 text-[1.6rem] text-white rounded-sm w-full"
        />

        <div className="my-[2rem]">
          <Button>SUBMIT</Button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
