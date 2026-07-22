"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactButtons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-[60] flex flex-col gap-3">
      <motion.a
        href="https://wa.me/923459698777"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="h-16 w-16 rounded-full bg-zinc-900 border border-white/10 shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp className="text-[2.8rem] text-[#25D366]" />
      </motion.a>

      <motion.a
        href="tel:03459698777"
        aria-label="Call now"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="h-16 w-16 rounded-full bg-zinc-900 border border-white/10 shadow-lg flex items-center justify-center"
      >
        <FaPhoneAlt className="text-[2.2rem] text-yellow-200" />
      </motion.a>
    </div>
  );
};

export default FloatingContactButtons;
