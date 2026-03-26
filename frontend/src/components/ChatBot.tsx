"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

// ── Knowledge Base ──────────────────────────────────────────────────────────
const KNOWLEDGE = {
  greeting: [
    "Salut ! 👋 Je suis l'assistant virtuel de Barry Mamadou Bailo. Comment puis-je t'aider ?",
    "Bienvenue sur le portfolio de Barry ! Pose-moi une question sur son parcours, ses projets ou ses compétences. 🚀",
  ],
  name: "Il s'appelle **BARRY Mamadou Bailo**. C'est un étudiant passionné en informatique originaire de Guinée. 🇬🇳",
  parcours:
    "Barry est étudiant en **1ère année de BUT Informatique** à l'IUT d'Arles (Aix-Marseille Université). Son parcours : *Réalisation d'applications : conception, développement, validation*. Avant ça, il a obtenu un Bac scientifique mention Bien en Guinée. 🎓",
  objectif:
    "Son objectif est de devenir **Ingénieur en Intelligence Artificielle** appliquée à la **cybersécurité**. Il est passionné par les nouvelles technologies et l'IA. 🤖🔐",
  competences:
    "Barry maîtrise : **C++**, **Python**, **SQL/PostgreSQL**, **HTML/CSS**, **Git**, **Linux**, **Bash**, **Qt**, **SageMath** et **VS Code**. Il continue d'approfondir ses compétences chaque jour. 💻",
  projets:
    "Voici ses projets principaux :\n• 🏆 **HYPOXIA** – Projet gagnant DevArt 2026, une expérience immersive sur l'impact de l'IA (Next.js + Three.js)\n• 🎨 **Portfolio** – Ce site interactif ! (Lien : [portfolio-1-gamma-azure.vercel.app](https://portfolio-1-gamma-azure.vercel.app/))\n• 📚 **SAE 1.01** – Bibliothèque CLI en C++\n• 🌐 **SAE 1.02** – Site web statique responsive\n• 🖥️ **SAE 1.03** – Installation multiboot\n• 🧮 **SAE 2.01** – Algorithmique avancée en C++\n• 🗄️ **SAE 3.01** – Base de données PostgreSQL",
  hypoxia:
    "**HYPOXIA | L'Écho Numérique** est le projet phare de Barry ! 🏆 C'est une expérience immersive de survie qui révèle le coût invisible de l'IA. Tapez un prompt, et regardez le monde étouffer. Gagnant du **DevArt 2026**, développé avec Next.js et Three.js (R3F). Tu peux le tester ici : [nebula-gray-seven.vercel.app](https://nebula-gray-seven.vercel.app/)",
  contact:
    "Tu peux contacter Barry via :\n• 📧 **Email** : mounabarry620@gmail.com\n• 📱 **Tél** : 07 53 17 27 52\n• 💼 **LinkedIn** : linkedin.com/in/mamadou-baillo-barry\n• 🐙 **GitHub** : github.com/mounabarry620-star\n• 💬 **WhatsApp** : wa.me/33753172752",
  formation:
    "Barry a un parcours riche :\n• 🎓 **BUT Informatique** – IUT d'Arles (en cours)\n• 🏫 **Bac Scientifique SM** – Mention Bien, Guinée\n• 🔧 Parcours initial en génie mécanique avant de se réorienter vers l'informatique via **Campus France**.",
  motivation:
    "Barry est motivé par sa passion pour l'**IA** et les **nouvelles technologies**. Son rêve : combiner intelligence artificielle et cybersécurité pour créer des solutions innovantes. 🌟",
  fallback: [
    "Hmm, je ne suis pas sûr de comprendre ta question. Tu peux me demander des infos sur le **parcours**, les **compétences**, les **projets** ou le **contact** de Barry ! 😊",
    "Bonne question ! Mais je connais surtout le parcours de Barry. Essaie de me demander ses **projets**, **compétences** ou **formation**. 🤔",
    "Je suis spécialisé sur le portfolio de Barry. Demande-moi ses **projets**, son **parcours**, ses **compétences** ou comment le **contacter** ! 💡",
  ],
};

const SUGGESTIONS = [
  "Qui est Barry ?",
  "Ses compétences ?",
  "Projet HYPOXIA ?",
  "Comment le contacter ?",
];

function getResponse(input: string): string {
  const q = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (q.match(/salut|bonjour|hello|hey|coucou|yo|slt/))
    return KNOWLEDGE.greeting[Math.floor(Math.random() * KNOWLEDGE.greeting.length)];
  if (q.match(/qui est|il s.appel|son nom|c.est qui|present/))
    return KNOWLEDGE.name;
  if (q.match(/parcours|etud|but |universi|arles|iut|formation|diplome|bac|ecol/))
    return q.match(/formation|diplome|bac|ecol/) ? KNOWLEDGE.formation : KNOWLEDGE.parcours;
  if (q.match(/objectif|reve|futur|ambition|devenir|ingenieu|cyber|ia|intelligence/))
    return KNOWLEDGE.objectif;
  if (q.match(/competen|skill|sait faire|technolog|langage|outil|maitris|programm/))
    return KNOWLEDGE.competences;
  if (q.match(/projet|sae|travaux|realisation|portfolio/))
    return q.match(/hypoxia|devart|echo|gagnant|winner/) ? KNOWLEDGE.hypoxia : KNOWLEDGE.projets;
  if (q.match(/hypoxia|devart|echo|gagnant|winner|immersiv/))
    return KNOWLEDGE.hypoxia;
  if (q.match(/contact|mail|email|telephone|phone|linkedin|github|whatsapp|joindre|ecrire/))
    return KNOWLEDGE.contact;
  if (q.match(/motiv|passion|pourquoi|aime/))
    return KNOWLEDGE.motivation;

  return KNOWLEDGE.fallback[Math.floor(Math.random() * KNOWLEDGE.fallback.length)];
}

// ── Component ───────────────────────────────────────────────────────────────
export default function ChatBot() {
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
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 1,
        text: getResponse(userMessage.text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, delay);
  };

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => {
      const userMessage: Message = {
        id: messages.length,
        text: suggestion,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsTyping(true);

      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 1,
          text: getResponse(suggestion),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, delay);
    }, 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-999 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_8px_30px_rgba(59,130,246,0.5)] transition-all hover:bg-blue-500"
        aria-label="Ouvrir le chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <MessageCircle className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-30" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 z-998 flex h-[520px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f]/95 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-blue-600/10 px-5 py-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                <Bot className="h-5 w-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0a0a0f] bg-green-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Barry AI Assistant</h3>
                <p className="text-[10px] font-medium text-green-400 uppercase tracking-widest">En ligne</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.sender === "bot" ? "bg-blue-600/20 text-blue-400" : "bg-white/10 text-white/70"}`}>
                    {msg.sender === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-white/5 text-white/90 border border-white/5 rounded-tl-sm"
                        : "bg-blue-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j} className="font-bold text-blue-300">
                              {part.slice(2, -2)}
                            </strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                        {i < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex gap-1 rounded-2xl bg-white/5 border border-white/5 px-4 py-3 rounded-tl-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestion(s)}
                    className="rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1.5 text-[11px] font-bold text-blue-400 transition-all hover:bg-blue-600/30 hover:border-blue-500/50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-white/10 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pose ta question..."
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-blue-500/50 focus:bg-white/10"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
              <p className="mt-2 text-center text-[9px] text-white/20 font-medium tracking-wider uppercase">
                Powered by Barry AI • Portfolio Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
