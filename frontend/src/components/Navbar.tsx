"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center gap-6 rounded-full border border-white/10 bg-[#1e2d34]/60 px-8 py-3 backdrop-blur-xl shadow-2xl">
        <Link href="#home" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
          Accueil
        </Link>
        <Link href="#about" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
          À Propos
        </Link>
        <Link href="#work" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
          Projets
        </Link>
        <Link href="#contact" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
          Contact
        </Link>
        <div className="h-4 w-px bg-white/10" />
        <Link 
          href="/personal" 
          className="text-sm font-medium text-white/90 transition-colors hover:text-white"
        >
          Personnel
        </Link>
      </nav>
    </motion.header>
  );
}
