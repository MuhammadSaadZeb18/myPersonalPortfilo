"use client";

import React from "react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ModalSlider = ({ images }) => {
  const [current, setCurrent] = React.useState(0);
  const length = images.length;
  const intervalRef = React.useRef(null);

  React.useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl group"
      onMouseEnter={startAutoSlide}
    >
      <h6 className="mb-4 font-semibold text-lg text-yellow-200">
        Screenshots
      </h6>

      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-[350px] relative">
            <Image
              src={img}
              alt="project image"
              fill
              className="object-contain h-full w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            className="relative z-10 bg-zinc-900 w-[90%] max-w-[1200px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl hide-scrollbar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* HEADER */}
            <div className="sticky top-0 z-20 bg-zinc-900 border-b border-zinc-700 p-6 flex justify-between items-center">
              <motion.h4
                className="text-3xl sm:text-4xl font-bold"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
              >
                {project.title}
              </motion.h4>

              <motion.button
                onClick={onClose}
                className="cursor-pointer text-white hover:text-red-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <HiXMark size={28} />
              </motion.button>
            </div>

            {/* BODY */}
            <motion.div
              className="p-6 flex flex-col md:flex-row gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {/* LEFT: IMAGE / SLIDER */}
              <motion.div
                className="md:w-1/2 flex flex-col gap-6"
                variants={{
                  hidden: { x: -50, opacity: 0 },
                  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                <p className="text-stone-400">{project.description}</p>
                <ModalSlider images={project.images} />
              </motion.div>

              {/* RIGHT: INFO */}
              <motion.div
                className="md:w-1/2 flex flex-col gap-6"
                variants={{
                  hidden: { x: 50, opacity: 0 },
                  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h6 className="text-stone-300 font-semibold">Year</h6>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h6 className="text-stone-300 font-semibold">Role</h6>
                    <p>{project.role}</p>
                  </div>
                </div>

                <div>
                  <h5 className="mb-2 text-stone-300 font-semibold">
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.li
                        key={i}
                        className="list-none py-2 px-4 rounded-md bg-zinc-800 cursor-pointer hover:bg-yellow-200 hover:text-black transition-all"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.05 },
                        }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-4">
                  <Link
                    href={project.path}
                    target="_blank"
                    className="px-6 py-2 rounded-2Sm  border-2 border-yellow-200 font-semibold"
                  >
                    Live Demo
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
