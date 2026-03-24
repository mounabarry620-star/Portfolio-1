"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LINKS = [
  { name: "Accueil", href: "#home" },
  { name: "À Propos", href: "#about" },
  { name: "Projets", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActive(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1e2d34]/60 px-4 py-2 backdrop-blur-xl shadow-2xl">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === link.href ? "text-black" : "text-white/50 hover:text-white"
            }`}
          >
            {active === link.href && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 z-[-1] rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {link.name}
          </Link>
        ))}
        <div className="mx-2 h-4 w-px bg-white/10" />
        <Link 
          href="/personal" 
          className="rounded-full px-4 py-2 text-sm font-bold text-white transition-all hover:bg-white/10"
        >
          Personnel
        </Link>
      </nav>
    </motion.header>
  );
}
