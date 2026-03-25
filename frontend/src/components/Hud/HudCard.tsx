"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HudCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function HudCard({ title, children, className = "", delay = 0 }: HudCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-tl-3xl rounded-br-3xl border border-cyan-500/30 bg-[#121a1e]/80 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.1)] group ${className}`}
    >
      {/* Neon Corners */}
      <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-cyan-400 z-20 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-cyan-400/20 z-20" />
      <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-cyan-400/20 z-20" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-cyan-400 z-20 rounded-br-3xl" />

      {/* Title Bar */}
      <div className="mb-6 flex items-center justify-between border-b border-cyan-500/20 pb-3">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400">{title}</h3>
        <div className="flex gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/40 animate-pulse" />
          <div className="h-4 w-4 rounded-sm border border-cyan-400/30 flex items-center justify-center">
             <div className="h-1 w-1 bg-cyan-400 animate-ping" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ["0%", "300%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 z-0 h-px w-full bg-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.5)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
      />
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-[-1] opacity-5 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[20px_20px]" />
    </motion.div>
  );
}
