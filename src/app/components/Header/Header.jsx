"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "/projects" },
  ];

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-zinc-800">
      <div className="container h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h4 className="font-bold text-2xl md:text-3xl gradient">
            {"< SaadZeb />"}
          </h4>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 items-center text-[1.6rem] font-semibold ">
          {navLinks.map((link) => (
            <li key={link.name} className="group relative ">
              <Link href={link.href}>{link.name}</Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-white z-100 cursor-pointer"
          onClick={toggleMobileNav}
          aria-label="Toggle Menu"
        >
          {mobileNavOpen ? <HiXMark size={28} /> : <HiBars2 size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 z-50 ${
          mobileNavOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileNavOpen(false)}
            className="text-3xl font-semibold text-white hover:text-yellow-200 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
