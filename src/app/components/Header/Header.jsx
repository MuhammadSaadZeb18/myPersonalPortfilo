import Link from "next/link";
import React from "react";
import { HiBars2 } from "react-icons/hi2";
const Header = () => {
  return (
    <header className="h-28 flex items-center justify-between container ">
      <h4 className=" font-bold ">M SAAD ZEB</h4>
      <ul className="hidden sm:flex gap-8 items-center text-[1.6rem] font-semibold">
        <li className="group relative">
          <Link href="/">Work</Link>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li className="group relative">
          <Link href="/">About</Link>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li className="group relative">
          <Link href="/">Services</Link>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li className="group relative">
          <Link href="/">Contact</Link>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      <HiBars2 className="block sm:hidden" size={24} />
    </header>
  );
};

export default Header;
