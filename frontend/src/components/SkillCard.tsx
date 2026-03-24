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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.3 }}
      className="flex items-center justify-center p-4"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <Image
          src={iconPath}
          alt={name}
          width={96}
          height={96}
          className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duraiton-500 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]"
        />
      </div>
    </motion.div>
  );
}
