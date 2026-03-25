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

export default function ProfileCard({ photo, name, profession, university, location }: ProfileCardProps) {
  const info = [
    { label: "NAME", value: name },
    { label: "PROFESSION", value: profession },
    { label: "UNIVERSITY", value: university },
    { label: "LOCATION", value: location },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Photo Container */}
      <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/40 p-2 group">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-cyan-950/40 to-transparent pointer-events-none" />
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5">
          <Image 
            src={photo} 
            alt={name} 
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>
        {/* Decorative corner dots */}
        <div className="absolute top-4 right-4 z-20 flex gap-1">
          {[1,2,3].map(i => <div key={i} className="h-1 w-1 bg-cyan-400/50 rounded-full" />)}
        </div>
      </div>

      {/* Info Table */}
      <div className="flex flex-col gap-4 font-mono">
        {info.map((item, i) => (
          <div key={i} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
            <span className="text-[10px] font-bold text-cyan-400/50 tracking-widest">{item.label}</span>
            <span className="text-sm font-semibold text-white/90 uppercase truncate">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
