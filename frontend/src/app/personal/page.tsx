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
    <div className="relative min-h-screen w-full bg-[#0a0f12] text-[#eee] font-mono selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      {/* HUD Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]" />
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Back Button */}
      <button 
        onClick={() => router.push("/")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-6 py-2 backdrop-blur-md transition-all hover:bg-cyan-500/20 group"
      >
        <ArrowLeft className="h-4 w-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black tracking-[0.3em] text-cyan-400/80 group-hover:text-cyan-400">EXIT_HUD</span>
      </button>

      <AnimatePresence mode="wait">
        {phase === "bios" && !isSkipped && (
          <motion.div 
            key="bios"
            exit={{ opacity: 0 }}
            className="flex h-screen flex-col p-10 overflow-hidden bg-[#050505]"
          >
            {BIOS_LINES.slice(0, biosIndex).map((line, i) => (
              <p key={i} className="mb-1 text-base leading-relaxed text-cyan-500/80">{line || "\u00A0"}</p>
            ))}
          </motion.div>
        )}

        {phase === "terminal" && !isSkipped && (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-screen items-center justify-center p-6 bg-[#050505]"
          >
            <div className="w-full max-w-3xl rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-8 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
              <div className="mb-6 border-b border-cyan-500/10 pb-4 text-xs font-medium text-cyan-400/40">
                barry@hud-system:~$ ./access_profile.sh
              </div>
              <div className="space-y-2">
                {TERMINAL_LINES.slice(0, displayedTerminalLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-base leading-relaxed ${(line.color || 'text-white').replace('white', 'cyan')}`}
                  >
                    {line.text || "\u00A0"}
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block h-5 w-2 bg-cyan-400 align-middle ml-1 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
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
            className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 lg:px-20 z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">
              
              {/* Left Column: Profile Card (4 slots) */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <HudCard title="Dossier : BF-1992" delay={0.2}>
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
                  className="mt-auto text-center font-mono text-[10px] tracking-[0.5em] text-cyan-400 uppercase"
                >
                  // BARRY MAMADOU BAILO — DATA SECURED — ACCESS GRANTED //
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
