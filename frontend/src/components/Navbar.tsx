"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = ["home", "about", "skills", "work", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navBg = theme === "light"
    ? "border border-black/10 bg-white/90"
    : "border border-white/10 bg-[#1e2d34]/80";

  const linkInactive = theme === "light"
    ? "text-slate-600 hover:text-slate-900"
    : "text-white/50 hover:text-white";

  const dropdownBg = theme === "light"
    ? "border border-black/10 bg-white"
    : "border border-white/10 bg-[#1e2d34]";

  const dropdownLink = theme === "light"
    ? "text-slate-700 hover:bg-black/5 hover:text-slate-900"
    : "text-white/70 hover:bg-white/20 hover:text-white";

  const mobileMenuBg = theme === "light"
    ? "border border-black/10 bg-white/95"
    : "border border-white/10 bg-[#1e2d34]/95";

  const mobileLinkInactive = theme === "light"
    ? "text-slate-600 hover:bg-black/5"
    : "text-white/60 hover:bg-white/5";

  const mobileCvLink = theme === "light"
    ? "bg-black/5 text-slate-700 hover:text-slate-900 border border-black/10 hover:border-black/20"
    : "bg-white/5 text-white/70 hover:text-white border border-white/5 hover:border-white/20";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 z-100 -translate-x-1/2 w-full px-6 max-w-fit"
    >
      <nav className={`flex items-center gap-2 rounded-full px-2 py-1.5 md:px-4 md:py-2 backdrop-blur-2xl shadow-2xl relative transition-colors duration-300 ${navBg}`}>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex md:hidden h-10 w-10 items-center justify-center rounded-full transition-colors ${
            theme === "light" ? "text-slate-700 hover:bg-black/5" : "bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                active === link.href ? "text-black" : linkInactive
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

        <div className={`mx-2 h-4 w-px hidden md:block ${theme === "light" ? "bg-black/10" : "bg-white/10"}`} />

        {/* CV Dropdown (Desktop) */}
        <div className="relative group hidden md:block">
          <button className={`rounded-full px-4 py-2 text-sm font-black transition-all flex items-center gap-1 group-hover:text-white uppercase tracking-widest ${
            theme === "light" ? "text-slate-600 hover:text-slate-900 group-hover:!text-slate-900" : "text-white/50 hover:text-white"
          }`}>
            CV
            <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className={`flex flex-col gap-1 rounded-2xl p-2 shadow-2xl backdrop-blur-xl min-w-[120px] transition-colors ${dropdownBg}`}>
              <Link href="/cv/fr" className={`rounded-lg px-4 py-2 text-[10px] font-black transition-all uppercase tracking-widest ${dropdownLink}`}>
                Français
              </Link>
              <Link href="/cv/en" className={`rounded-lg px-4 py-2 text-[10px] font-black transition-all uppercase tracking-widest ${dropdownLink}`}>
                English
              </Link>
            </div>
          </div>
        </div>

        <div className={`mx-1 md:mx-2 h-4 w-px ${theme === "light" ? "bg-black/10" : "bg-white/10"}`} />

        {/* Personal Link */}
        <Link
          href="/personal"
          className={`rounded-full px-4 py-2 text-[11px] md:text-sm font-black transition-all hover:bg-white/5 uppercase tracking-widest ${
            theme === "light" ? "text-slate-600 hover:text-slate-900 hover:bg-black/5" : "text-white/60 hover:text-white"
          }`}
        >
          {isOpen ? "PERSO" : "PERSONNEL"}
        </Link>

        <div className={`mx-1 h-4 w-px ${theme === "light" ? "bg-black/10" : "bg-white/10"}`} />

        {/* Theme Toggle */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
            theme === "light"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-white/10 text-white hover:bg-white hover:text-black"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.button>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className={`absolute top-full left-0 mt-4 w-screen max-w-[280px] rounded-3xl p-6 shadow-2xl backdrop-blur-3xl md:hidden transition-colors ${mobileMenuBg}`}
            >
              <div className="flex flex-col gap-4">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setActive(link.href); setIsOpen(false); }}
                    className={`block py-3 px-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] transition-all ${
                      active === link.href
                        ? "bg-white text-black text-center"
                        : mobileLinkInactive
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className={`h-px w-full my-2 ${theme === "light" ? "bg-black/10" : "bg-white/10"}`} />
                <p className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 ${theme === "light" ? "text-slate-500" : "text-white/30"}`}>
                  Versions CV
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/cv/fr" className={`rounded-xl py-3 px-4 text-[10px] font-black uppercase tracking-widest text-center transition-all ${mobileCvLink}`}>
                    FR
                  </Link>
                  <Link href="/cv/en" className={`rounded-xl py-3 px-4 text-[10px] font-black uppercase tracking-widest text-center transition-all ${mobileCvLink}`}>
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
