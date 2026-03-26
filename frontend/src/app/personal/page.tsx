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
  { text: "> [OK] C++ · PYTHON · BASH · SQL", delay: 150, color: "text-white" },
  { text: "> [OK] QT · SAGEMATH · POSTGRES", delay: 150, color: "text-white" },
  { text: "> [OK] Git · Linux · HTML · CSS · VSCode", delay: 150, color: "text-white" },
  { text: "", delay: 100 },
  { text: "> Synthèse de la fiche profil en cours...", delay: 400, color: "text-white/60" },
  { text: "> Profil décrypté avec succès ✓", delay: 500, color: "text-white/80" },
  { text: "", delay: 200 },
  { text: "> DÉPLOIEMENT DE L'INTERFACE HUD...", delay: 700, color: "text-white underline" },
];

import HudCard from "@/components/Hud/HudCard";
import ProfileCard from "@/components/Hud/ProfileCard";
import FormationTable from "@/components/Hud/FormationTable";
import SkillsetPanel from "@/components/Hud/SkillsetPanel";
import HobbyTerminal from "@/components/Hud/HobbyTerminal";

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
    <div className="relative min-h-screen w-full bg-[#080d10] text-[#eee] font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden uppercase tracking-wide font-medium text-[13px]">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/images/backgrounds/background_terminal.webp"
          alt="Background"
          fill
          priority
          className="object-cover opacity-50 transition-opacity duration-1000"
        />
        {/* Overlay gradient - lighter to show more background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0f12]/60 via-transparent to-[#0a0f12]/60" />
        <div className="absolute inset-0 bg-[#0a0f12]/20" />
      </div>

      {/* HUD Background Pattern - softened */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Back Button */}
      <button 
        onClick={() => router.push("/")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md transition-all hover:bg-white/10 group"
      >
        <ArrowLeft className="h-4 w-4 text-white group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black tracking-[0.3em] text-white/60 group-hover:text-white">RETOUR</span>
      </button>

      <AnimatePresence mode="wait">
        {phase === "bios" && !isSkipped && (
          <motion.div 
            key="bios"
            exit={{ opacity: 0 }}
            className="flex h-screen flex-col p-10 overflow-hidden bg-[#050505]"
          >
            {BIOS_LINES.slice(0, biosIndex).map((line, i) => (
              <p key={i} className="mb-1 text-base leading-relaxed text-white/40">{line || "\u00A0"}</p>
            ))}
          </motion.div>
        )}

        {phase === "terminal" && !isSkipped && (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-screen items-center justify-center p-6 bg-[#080d10]"
          >
            <div className="w-full max-w-3xl">
              {/* Softened decor top */}
              <div className="mb-6 opacity-30">
                <div className="flex h-[2px] mb-[6px] gap-[10px]">
                  <div className="w-[80px] h-[2px] bg-white/20" />
                  <div className="w-[120px] h-[2px] bg-white/10" />
                </div>
              </div>

              {/* Terminal Window */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                {/* Header bar with dots */}
                <div className="mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/10" />
                    <div className="h-2 w-2 rounded-full bg-white/5" />
                  </div>
                  <span className="ml-4 text-[10px] font-medium text-white/20 tracking-widest uppercase">system@barry:~$ INITIALIZING...</span>
                </div>
                <div className="space-y-2">
                  {TERMINAL_LINES.slice(0, displayedTerminalLines).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-base leading-relaxed font-mono ${(line.color || 'text-white').replace('cyan', 'white')}`}
                    >
                      {line.text || "\u00A0"}
                    </motion.div>
                  ))}
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block h-5 w-1 bg-white align-middle ml-1"
                  />
                </div>
              </div>

              {/* Softened decor bottom */}
              <div className="mt-6 opacity-20">
                <div className="flex h-px gap-[10px]">
                  <div className="w-[150px] h-px bg-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
        )}


        {phase === "image" && (
          <motion.div 
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 lg:px-20 z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">
              
              {/* Left Column: Profile Card (4 slots) */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <HudCard title="Profil de BF-2005" delay={0.2}>
                  <ProfileCard 
                    photo="/images/profile.png"
                    name="Barry Mamadou Bailo"
                    profession="Étudiant en BUT Informatique"
                    university="Aix-Marseille Université"
                    location="Arles, France"
                  />
                </HudCard>
              </div>

              {/* Middle & Right Column (8 slots) */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <HudCard title="Formation / Académique" delay={0.4} className="md:col-span-2">
                    <FormationTable />
                  </HudCard>
                  
                  <HudCard title="Expertise / Skillset" delay={0.6}>
                    <SkillsetPanel />
                  </HudCard>

                  <HudCard title="Activité : Hobby_Logic" delay={0.8}>
                    <HobbyTerminal />
                  </HudCard>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 1.5 }}
                  className="mt-auto text-center font-sans text-[9px] tracking-[0.4em] text-white/30 uppercase font-bold"
                >
                  — BARRY MAMADOU BAILO — PROFILE ACCESS AUTHORIZED —
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
