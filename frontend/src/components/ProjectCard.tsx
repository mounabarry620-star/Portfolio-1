"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description?: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
  isHighlighted?: boolean;
  onClick?: () => void;
}

export default function ProjectCard({ title, description, tags, image, github, live, isHighlighted, onClick }: ProjectCardProps) {
  if (isHighlighted && image) {
    return (
      <motion.div
        layoutId={`project-${title}`}
        onClick={onClick}
        whileHover={{ y: -5 }}
        className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] cursor-pointer"
      >
        <div className="relative h-64 w-full overflow-hidden md:h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute top-6 right-6 z-10 flex gap-3">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.9 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-colors shadow-2xl"
              >
                <Github className="h-7 w-7" />
              </motion.a>
            )}
            {live && (
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-colors shadow-2xl"
              >
                <ExternalLink className="h-7 w-7" />
              </motion.a>
            )}
          </div>

          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block rounded-full bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white mb-4"
            >
              Highlight / Winner
            </motion.div>
            <h3 className="text-3xl font-black text-white md:text-5xl mb-4 drop-shadow-lg">{title}</h3>
            <p className="max-w-2xl text-lg text-white/70 line-clamp-2 md:text-xl">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex cursor-pointer items-center justify-between rounded-2xl border border-white/5 bg-white/3 p-6 transition-all hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-center gap-6">
        <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/40 line-clamp-1 group-hover:text-white/60 transition-colors mb-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white/5 p-3 text-white transition-all hover:bg-white hover:text-black"
          >
            <Github className="h-5 w-5" />
          </motion.a>
        )}
        <div className="rounded-full bg-white/5 p-3 transition-all group-hover:bg-white group-hover:text-black">
          <ExternalLink className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}
