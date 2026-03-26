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
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl group ${className}`}
    >
      {/* Title Bar - Elegant & Minimal */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/80">{title}</h3>
        <div className="flex gap-2">
          <div className="h-1 w-1 rounded-full bg-blue-400/50" />
          <div className="h-1 w-1 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white/90">
        {children}
      </div>

      {/* Background Subtle Accent */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%)] rounded-2xl" />
    </motion.div>
  );
}
