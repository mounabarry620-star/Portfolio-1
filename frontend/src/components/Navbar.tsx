"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LINKS = [
  { name: "Accueil", href: "#home" },
  { name: "À Propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "contact"];
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
      className="fixed top-6 left-1/2 z-100 -translate-x-1/2 w-full px-6 max-w-fit"
    >
      <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1e2d34]/80 px-2 py-1.5 md:px-4 md:py-2 backdrop-blur-2xl shadow-2xl relative">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
        >
          <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors uppercase tracking-widest ${
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
        </div>

        <div className="mx-2 h-4 w-px bg-white/10 hidden md:block" />
        
        {/* CV Dropdown (Desktop) */}
        <div className="relative group hidden md:block">
          <button className="rounded-full px-4 py-2 text-sm font-black text-white/50 hover:text-white transition-all flex items-center gap-1 group-hover:text-white uppercase tracking-widest">
            CV
            <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#1e2d34] p-2 shadow-2xl backdrop-blur-xl min-w-[120px]">
              <Link href="/cv/fr" className="rounded-lg px-4 py-2 text-[10px] font-black text-white/70 hover:bg-white/20 hover:text-white transition-all uppercase tracking-widest">
                Français
              </Link>
              <Link href="/cv/en" className="rounded-lg px-4 py-2 text-[10px] font-black text-white/70 hover:bg-white/20 hover:text-white transition-all uppercase tracking-widest">
                English
              </Link>
            </div>
          </div>
        </div>

        {/* Personnel Link (Visible on mobile too if preferred, but usually simplified) */}
        <div className="mx-1 md:mx-2 h-4 w-px bg-white/10" />
        <Link 
          href="/personal" 
          className="rounded-full px-4 py-2 text-[11px] md:text-sm font-black text-white/60 hover:text-white transition-all hover:bg-white/5 uppercase tracking-widest"
        >
          {isOpen ? "PERSO" : "PERSONNEL"}
        </Link>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full left-0 mt-4 w-screen max-w-[280px] rounded-3xl border border-white/10 bg-[#1e2d34]/95 p-6 shadow-2xl backdrop-blur-3xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setIsOpen(false);
                    }}
                    className={`block py-3 px-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] transition-all ${
                      active === link.href ? "bg-white text-black text-center" : "text-white/60 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px w-full bg-white/10 my-2" />
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] px-4">Versions CV</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/cv/fr" className="rounded-xl bg-white/5 py-3 px-4 text-[10px] font-black text-white/70 hover:text-white uppercase tracking-widest text-center border border-white/5 hover:border-white/20">
                    FR
                  </Link>
                  <Link href="/cv/en" className="rounded-xl bg-white/5 py-3 px-4 text-[10px] font-black text-white/70 hover:text-white uppercase tracking-widest text-center border border-white/5 hover:border-white/20">
                    EN
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
