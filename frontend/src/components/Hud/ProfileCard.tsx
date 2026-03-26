"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileCardProps {
  photo: string;
  name: string;
  profession: string;
  university: string;
  location: string;
}

// Geometric bar pattern inspired by the reference portfolio
export default function ProfileCard({ photo, name, profession, university, location }: ProfileCardProps) {
  const info = [
    { label: "NOM", value: name },
    { label: "PROFESSION", value: profession },
    { label: "UNIVERSITÉ", value: university },
    { label: "LIEU", value: location },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Profile Photo - Refined dark frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#080d10] group"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03)_0%,transparent_60%)]" />
        
        <div className="relative aspect-3/4 w-full overflow-hidden">
          <Image 
            src={photo} 
            alt={name} 
            fill
            className="object-cover scale-102 group-hover:scale-105 transition-transform duration-2000"
            priority
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-[#080d10] via-transparent to-transparent" />
        </div>

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-white tracking-tight"
          >
            {name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-blue-300 font-bold mt-2 uppercase tracking-widest opacity-80"
          >
            {profession}
          </motion.p>
        </div>
      </motion.div>

      {/* Info Details - Clean & Minimal */}
      <div className="flex flex-col space-y-2">
        {info.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex flex-col border-b border-white/5 pb-4 pt-2 last:border-0"
          >
            <span className="text-[9px] font-bold text-white/30 tracking-[0.3em] uppercase mb-1">{item.label}</span>
            <span className="text-sm font-bold text-white/90">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
