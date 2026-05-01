"use client";
import { motion } from "framer-motion";
import { sectionVariant } from "../../../lib/motion";

export default function FadeSection({ children }) {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
