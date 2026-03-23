"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  iconPath: string;
  index: number;
}

export default function SkillCard({ name, iconPath, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-lg dark:bg-white">
        <Image
          src={iconPath}
          alt={name}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <span className="text-sm font-semibold text-white/90">{name}</span>
    </motion.div>
  );
}
