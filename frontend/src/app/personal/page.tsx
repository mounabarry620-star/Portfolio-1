"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const BIOS_LINES = [
  "AMIBIOS(C) 2024 American Megatrends, Inc.",
  "BIOS Date: 03/12/26 11:23:45 Ver: 08.00.16",
  "CPU: Barry-Core(TM) i9-14900K @ 6.20GHz",
  "Speed: 6200MHz",
  "",
  "Memory Test: 65536MB OK",
  "PMU: Initializing...",
  "USB Device(s): 1 Keyboard, 1 Mouse, 3 Hubs",
  "SATA Port 1: SSD 2TB",
  "SATA Port 2: HDD 4TB",
  "",
  "Detecting storage devices... Done.",
  "Loading System Kernel........",
  "Entering Protected Mode...",
  "BARRY OS v4.0.2 Initialized.",
  "Starting Profiler Service...",
  "SUCCESS: System ready.",
];

const TERMINAL_LINES = [
  { text: "> Initialisation du système...", delay: 200, color: "text-white/60" },
  { text: "> Connexion sécurisée établie [PROTOCOL: SSH-2]", delay: 300, color: "text-white/40" },
  { text: "> Chargement du profil utilisateur: BARRY_MB...", delay: 200, color: "text-white/60" },
  { text: "", delay: 100 },
  { text: "> NOM : Barry Mamadou Bailo", delay: 200, color: "text-white" },
  { text: "> STATUT : Étudiant en BUT Informatique", delay: 200, color: "text-white/80" },
  { text: "> LIEU : Aix-Marseille Université — Arles", delay: 200, color: "text-white/70" },
  { text: "> PASSION : Intelligence Artificielle", delay: 200, color: "text-white/90" },
  { text: "", delay: 100 },
  { text: "> Allocation mémoire pour module IA... Done.", delay: 150, color: "text-white/60" },
  { text: "> Vérification des compétences...", delay: 200, color: "text-white/60" },
  { text: "> [OK] C++ · HTML · CSS · SQL", delay: 150, color: "text-white" },
  { text: "> [OK] Algorithmique · Base de données", delay: 150, color: "text-white" },
  { text: "> [OK] Git · Linux · Next.js · TypeScript", delay: 150, color: "text-white" },
  { text: "", delay: 100 },
  { text: "> Synthèse de la fiche profil en cours...", delay: 400, color: "text-white/60" },
  { text: "> Profil décrypté avec succès ✓", delay: 500, color: "text-white/80" },
  { text: "", delay: 200 },
  { text: "> DÉPLOIEMENT DE L'INTERFACE HUD...", delay: 700, color: "text-white underline" },
];

export default function PersonalPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"bios" | "terminal" | "image">("bios");
  const [biosIndex, setBiosIndex] = useState(0);
  const [displayedTerminalLines, setDisplayedTerminalLines] = useState<number>(0);
  const [isSkipped, setIsSkipped] = useState(false);

  // BIOS Logic
  useEffect(() => {
    if (phase !== "bios" || isSkipped) return;
    if (biosIndex >= BIOS_LINES.length) {
      const timer = setTimeout(() => setPhase("terminal"), 500);
      return () => clearTimeout(timer);
    }
    const delay = BIOS_LINES[biosIndex] === "" ? 50 : Math.random() * 50 + 20;
    const timer = setTimeout(() => setBiosIndex(prev => prev + 1), delay);
    return () => clearTimeout(timer);
  }, [biosIndex, phase, isSkipped]);

  // Terminal Logic
  useEffect(() => {
    if (phase !== "terminal" || isSkipped) return;
    if (displayedTerminalLines >= TERMINAL_LINES.length) {
      const timer = setTimeout(() => setPhase("image"), 800);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setDisplayedTerminalLines(prev => prev + 1), TERMINAL_LINES[displayedTerminalLines].delay);
    return () => clearTimeout(timer);
  }, [displayedTerminalLines, phase, isSkipped]);

  // Global Skip
  const handleSkip = () => {
    setIsSkipped(true);
    setPhase("image");
  };

  // Keyboard shortcut for ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleSkip();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#121a1e] text-[#eee] font-mono selection:bg-white/10 selection:text-white">
      {/* Back Button */}
      <button 
        onClick={() => router.push("/")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md transition-all hover:bg-white/10"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="text-xs font-semibold tracking-widest">RETOUR</span>
      </button>

      {/* Skip Button */}
      {(phase === "bios" || phase === "terminal") && (
        <button 
          onClick={handleSkip}
          className="fixed bottom-8 right-8 z-50 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md transition-all hover:bg-white/20"
        >
          <span className="text-[10px] font-semibold tracking-widest text-white/40 group-hover:text-white">PASSER L&apos;ANIMATION [ESC]</span>
        </button>
      )}

      <AnimatePresence mode="wait">
        {phase === "bios" && !isSkipped && (
          <motion.div 
            key="bios"
            exit={{ opacity: 0 }}
            className="flex h-screen flex-col p-10 overflow-hidden bg-[#111]"
          >
            {BIOS_LINES.slice(0, biosIndex).map((line, i) => (
              <p key={i} className="mb-1 text-base leading-relaxed">{line || "\u00A0"}</p>
            ))}
          </motion.div>
        )}

        {phase === "terminal" && !isSkipped && (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-screen items-center justify-center p-6"
          >
            <div className="w-full max-w-3xl rounded-xl border border-white/10 bg-[#1a1a1a] p-8 shadow-2xl">
              <div className="mb-6 border-b border-white/5 pb-4 text-xs font-medium text-white/30">
                barry@portfolio:~$ ./profil.sh
              </div>
              <div className="space-y-2">
                {TERMINAL_LINES.slice(0, displayedTerminalLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-base leading-relaxed ${line.color}`}
                  >
                    {line.text || "\u00A0"}
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block h-5 w-2 bg-white align-middle ml-1"
                />
              </div>
            </div>
          </motion.div>
        )}

        {phase === "image" && (
          <motion.div 
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-screen items-center justify-center p-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="group relative h-[80vh] w-[80vh] max-w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a] shadow-2xl"
            >
               {/* Scanning Line */}
               <motion.div 
                 animate={{ y: ["0%", "80vh"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 left-0 z-10 h-1 w-full bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
               />
               
               {/* Profiles Corners */}
               <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-white/20 z-20" />
               <div className="absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-white/20 z-20" />
               <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-white/20 z-20" />
               <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-white/20 z-20" />

               <Image
                 src="/images/projects/personal.png"
                 alt="Barry Profil"
                 fill
                 className="object-contain p-8"
               />
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.6 }}
                 transition={{ delay: 1.5 }}
                 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/60 uppercase"
               >
                 // BARRY MAMADOU BAILO — PROFIL CHARGÉ //
               </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
