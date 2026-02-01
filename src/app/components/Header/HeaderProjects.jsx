"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";

const HeaderProjects = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-zinc-800">
      <div className="container h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h4 className="font-bold text-2xl md:text-3xl gradient">{"< SaadZeb />"}</h4>
        </Link>
      </div>
    </header>
  );
};

export default HeaderProjects;
