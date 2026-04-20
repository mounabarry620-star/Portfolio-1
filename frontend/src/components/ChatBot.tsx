"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Trash2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

// ── Knowledge Base ──────────────────────────────────────────────────────────
const KNOWLEDGE = {
  greeting: [
    "Salut ! 👋 Je suis l'assistant virtuel de Barry. Pose-moi une question sur son parcours, ses projets ou ses compétences !",
    "Bienvenue sur le portfolio de Barry Mamadou Bailo ! Comment puis-je t'aider ? 🚀",
  ],
  name: "Il s'appelle **BARRY Mamadou Bailo**. Étudiant en BUT Informatique à Arles, passionné de cybersécurité et d'IA. 🇬🇳",
  parcours:
    "Barry est étudiant en **1ère année validée de BUT Informatique** à l'IUT d'Aix-Marseille (site d'Arles). Il a obtenu d'excellents résultats : Administration Système **15/20**, Installation de poste **17/20**, Mathématiques **16,6/20**. 🎓",
  objectif:
    "Son objectif est de devenir **Ingénieur en cybersécurité** avec une forte appétence pour les **réseaux, les infrastructures sécurisées et l'IA**. Il vise le déploiement d'applications communicantes et sécurisées. 🔐🤖",
  competences:
    "Barry maîtrise : **Linux (Ubuntu/Kali)**, **C++**, **Python**, **SQL/PostgreSQL**, **HTML/CSS**, **Git**, **Bash**, **Sage 100**, **Réseaux & Systèmes**. Il continue d'approfondir ses compétences chaque jour. 💻",
  experience:
    "Barry a une expérience professionnelle en tant que **Gestionnaire Commercial & Comptable** pendant 1 an dans une boutique d'accessoires téléphoniques à Marseille. Il utilisait **Sage 100 Commercial** pour la facturation, les devis et la gestion des stocks. 🏪",
  projets:
    "Voici ses projets principaux :\n• 🏆 **HYPOXIA** – Gagnant DevArt 2026, expérience 3D sur le coût de l'IA (Next.js + Three.js)\n• 🖥️ **SAE 1.03** – Installation multiboot Linux/Windows avec VirtualBox\n• 🧮 **SAE 1.02** – Algorithmique C++ (QuickSort, Insertion, Sélection)\n• 🌐 **Portfolio** – Ce site ! (Next.js + NestJS)\n• 🗄️ **SAE 3.01** – Base de données PostgreSQL",
  hypoxia:
    "**HYPOXIA | L'Écho Numérique** est le projet phare de Barry ! 🏆\nExpérience immersive 3D qui révèle le coût invisible de l'IA. Tapez un prompt, regardez le monde étouffer.\n**Gagnant DevArt 2026** — Next.js + Three.js (R3F).\nTeste-le ici : nebula-gray-seven.vercel.app",
  contact:
    "Tu peux contacter Barry via :\n• 📧 **Email** : mounabarry620@gmail.com\n• 📱 **Tél** : 07 53 17 27 52\n• 💼 **LinkedIn** : linkedin.com/in/baillo-barry\n• 🐙 **GitHub** : github.com/mounabarry620-star\n• 📍 **Localisation** : Marseille, France",
  formation:
    "Parcours académique de Barry :\n• 🎓 **BUT Informatique** (1ère année validée) – IUT d'Arles, 2025-2026\n• ⚙️ **Génie Mécanique & Productique** – Université Gamal Abdel Nasser, Guinée (2022-2024)\n• Réorientation vers l'informatique via **Campus France**.",
  motivation:
    "Barry est animé par sa passion pour la **cybersécurité** et les **réseaux**. Sa première expérience professionnelle en gestion (Sage 100) lui donne une vision concrète du monde de l'entreprise. Il vise le **déploiement d'applications sécurisées**. 🌟",
  cv: "Tu peux consulter et télécharger le CV de Barry directement sur ce portfolio ! Clique sur le menu **CV** en haut, puis choisis la version **Française** ou **Anglaise**. Tu peux ensuite l'imprimer en PDF. 📄",
  sage:
    "Barry maîtrise **Sage 100 Commercial** : il l'a utilisé pendant 1 an pour la facturation, l'édition de devis et la gestion des stocks dans une boutique à Marseille. Une compétence rare pour un étudiant en informatique ! 💼",
  linux:
    "Barry utilise **Linux** (Ubuntu & Kali Linux) au quotidien. Il a configuré des environnements **multiboot** Linux/Windows, travaillé avec VirtualBox, et gère la configuration réseau sous Linux. Kali Linux est son terrain de jeu pour la cybersécurité. 🐧",
  fallback: [
    "Je ne suis pas sûr de comprendre. Essaie de me demander ses **projets**, **compétences**, **formation**, ou comment le **contacter** ! 😊",
    "Bonne question ! Je connais surtout le parcours de Barry. Demande-moi ses **projets**, **expérience**, **compétences** ou **contact**. 🤔",
    "Je suis spécialisé sur le portfolio de Barry. Pose-moi une question sur son **parcours**, ses **projets** ou ses **compétences** ! 💡",
  ],
};

const SUGGESTIONS = [
  "Qui est Barry ?",
  "Ses compétences ?",
  "Projet HYPOXIA ?",
  "Son expérience pro ?",
  "Comment le contacter ?",
  "Télécharger son CV ?",
];

function getResponse(input: string): string {
  const q = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (q.match(/salut|bonjour|hello|hey|coucou|yo|slt|bonsoir/))
    return KNOWLEDGE.greeting[Math.floor(Math.random() * KNOWLEDGE.greeting.length)];
  if (q.match(/qui est|il s.appel|son nom|c.est qui|present/))
    return KNOWLEDGE.name;
  if (q.match(/cv|telecharger|download|pdf|imprimer/))
    return KNOWLEDGE.cv;
  if (q.match(/sage|sage 100|commercial|comptab|boutique|gestion stock|factur|devis/))
    return KNOWLEDGE.sage;
  if (q.match(/linux|kali|ubuntu|systeme|os|multiboot/))
    return KNOWLEDGE.linux;
  if (q.match(/experience|pro|travail|poste|emploi|job|boulot/))
    return KNOWLEDGE.experience;
  if (q.match(/parcours|etud|but |universi|arles|iut/))
    return KNOWLEDGE.parcours;
  if (q.match(/formation|diplome|bac|ecol|academiq/))
    return KNOWLEDGE.formation;
  if (q.match(/objectif|reve|futur|ambition|devenir|ingenieu|cyber|ia|intelligence/))
    return KNOWLEDGE.objectif;
  if (q.match(/competen|skill|sait faire|technolog|langage|outil|maitris|programm/))
    return KNOWLEDGE.competences;
  if (q.match(/hypoxia|devart|echo|gagnant|winner|immersiv/))
    return KNOWLEDGE.hypoxia;
  if (q.match(/projet|sae|travaux|realisation|portfolio/))
    return KNOWLEDGE.projets;
  if (q.match(/contact|mail|email|telephone|phone|linkedin|github|whatsapp|joindre|ecrire|adresse/))
    return KNOWLEDGE.contact;
  if (q.match(/motiv|passion|pourquoi|aime/))
    return KNOWLEDGE.motivation;

  return KNOWLEDGE.fallback[Math.floor(Math.random() * KNOWLEDGE.fallback.length)];
}

// ── Render helpers ───────────────────────────────────────────────────────────
function renderLine(line: string, lineIndex: number) {
  return (
    <span key={lineIndex}>
      {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="font-bold text-blue-300">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={j}>{part}</span>
        )
      )}
    </span>
  );
}

// ── Component ───────────────────────────────────────────────────────────────
export default function ChatBot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Salut ! 👋 Je suis l'assistant virtuel de Barry. Pose-moi une question sur son parcours, ses projets ou ses compétences !",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const delay = 700 + Math.random() * 600;
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(userMessage.text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, delay);
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        text: "Chat réinitialisé. Comment puis-je t'aider ? 😊",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  const isLight = theme === "light";

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={`fixed bottom-6 right-6 z-999 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_30px_rgba(59,130,246,0.45)] transition-all ${
          isOpen ? "bg-slate-700 shadow-none" : "bg-blue-600 hover:bg-blue-500"
        }`}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir l'assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-25 pointer-events-none" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className={`fixed bottom-24 right-4 sm:right-6 z-998 flex flex-col overflow-hidden rounded-2xl shadow-2xl backdrop-blur-2xl
              w-[calc(100vw-2rem)] max-w-[370px] h-[500px] sm:h-[520px]
              ${isLight
                ? "border border-black/10 bg-white/98"
                : "border border-white/10 bg-[#0a0f14]/97"
              }`}
          >
            {/* Header */}
            <div
              className={`flex items-center gap-3 px-4 py-3 border-b ${
                isLight ? "border-black/8 bg-blue-50/80" : "border-white/10 bg-blue-600/10"
              }`}
            >
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-md">
                <Bot className="h-4.5 w-4.5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-sm font-bold truncate ${isLight ? "text-slate-800" : "text-white"}`}>
                  Barry AI Assistant
                </h3>
                <p className="text-[10px] font-semibold text-green-500 uppercase tracking-widest">
                  En ligne
                </p>
              </div>
              <button
                onClick={clearChat}
                title="Réinitialiser"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isLight
                    ? "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    : "text-white/30 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className={`flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar`}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                      msg.sender === "bot"
                        ? "bg-blue-600/20 text-blue-400"
                        : isLight
                          ? "bg-slate-200 text-slate-600"
                          : "bg-white/10 text-white/60"
                    }`}
                  >
                    {msg.sender === "bot" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                  </div>

                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      msg.sender === "bot"
                        ? isLight
                          ? "bg-slate-100 text-slate-800 border border-slate-200 rounded-tl-sm"
                          : "bg-white/6 text-white/90 border border-white/8 rounded-tl-sm"
                        : "bg-blue-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {renderLine(line, i)}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div
                    className={`flex gap-1 rounded-2xl rounded-tl-sm px-4 py-3 ${
                      isLight ? "bg-slate-100 border border-slate-200" : "bg-white/6 border border-white/8"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && !isTyping && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-all whitespace-nowrap ${
                      isLight
                        ? "border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100"
                        : "border border-blue-500/30 bg-blue-600/10 text-blue-400 hover:bg-blue-600/25"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              className={`border-t px-3 py-3 ${
                isLight ? "border-black/8" : "border-white/10"
              }`}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pose ta question…"
                  className={`flex-1 min-w-0 rounded-full border px-4 py-2.5 text-sm outline-none transition-all ${
                    isLight
                      ? "border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:bg-white"
                      : "border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-blue-500/50 focus:bg-white/10"
                  }`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim() || isTyping}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-all hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
              <p
                className={`mt-1.5 text-center text-[9px] font-medium tracking-wider uppercase ${
                  isLight ? "text-slate-300" : "text-white/15"
                }`}
              >
                Portfolio Assistant • Barry Mamadou Bailo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
