"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";

const ModalSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const intervalRef = useRef(null);

  // Auto slide every 1 second
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); // Prevent double intervals
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000); // 1 second
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl group"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-[200px] relative">
            <Image
              src={img}
              alt="project image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
      <div className="bg-zinc-900 rounded-2Md p-6 w-[90%] relative ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-white hover:text-red-400 transition"
        >
          <HiXMark size={28} />
        </button>

        {/* Title */}
        <h4 className="mb-2">{project.title}</h4>

        {/* Description */}
        <p className="mb-6">{project.description}</p>

        {/* Slider */}
        <div className="mb-6">
          <ModalSlider images={project.images} />
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h6 className="text-stone-300">YEAR</h6>
            <p>{project.year}</p>
          </div>

          <div>
            <h6 className="text-stone-300">ROLE</h6>
            <p>{project.role}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h5 className="mb-2 text-stone-300">TECHNOLOGIES</h5>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <li
                key={i}
                className="cursor-pointer list-none group relative w-fit"
              >
                <div className="py-2 px-6 w-fit relative">
                  <p className="text-white">{tech}</p>

                  <span className="absolute left-0 top-0 h-px w-full bg-white group-hover:bg-yellow-200 transition-colors duration-300"></span>
                  <span className="absolute left-0 bottom-0 h-px w-full bg-white group-hover:bg-yellow-200 transition-colors duration-300"></span>
                  <span className="absolute left-0 top-0 w-px h-0 bg-white group-hover:h-full group-hover:bg-yellow-200 transition-all duration-300"></span>
                  <span className="absolute right-0 bottom-0 w-px h-0 bg-white group-hover:h-full group-hover:bg-yellow-200 transition-all duration-300"></span>
                </div>
              </li>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            href={project.path}
            className="px-6 py-2 rounded-2Sm bg-yellow-200 font-semibold"
          >
            <p className="text-black">Live Demo</p>
          </Link>

          <Link
            href={project.github}
            className="px-6 py-2 rounded-2Sm bg-yellow-200 text-black font-semibold"
          >
            <p className="text-black">Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
