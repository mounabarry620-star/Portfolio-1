"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="group relative flex items-center justify-between rounded-2xl border border-transparent bg-white/3 p-4 transition-all hover:border-white/10 hover:bg-white/5"
    >
      <div className="flex items-center gap-4">
        <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        <div>
          <h3 className="line-clamp-1 font-semibold text-white">{title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-white/20 transition-colors group-hover:text-white" />
    </motion.div>
  );
}
