"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Section({ id, title, children, className = "", delay = 0 }: SectionProps) {
  return (
    <section id={id} className={`relative py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4"
      >
        <span className="section-sub-text block mb-2">
          {title}
        </span>
        <h2 className="section-head-text">
          {title}.
        </h2>
        <div className="mt-4 h-0.5 w-20 bg-linear-to-r from-blue-700 to-blue-400 rounded-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
