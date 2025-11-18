import React from "react";
import Link from "next/link";

const CusLink = (props) => {
  return (
    <Link
      href={props.path}
      className="relative w-fit text-[1.4rem] font-normal flex items-center gap-2 uppercase text-yellow-200 group"
    >
      {props.children}
      {props.icon}
      {/* Animated underline */}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default CusLink;
