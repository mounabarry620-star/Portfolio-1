"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_SNIPPETS = [
  "// Initializing hobby service...",
  "class Developer extends Human {",
  "  constructor(bailo) {",
  "    this.passion = ['IA', 'Cyber'];",
  "    this.state = 'Coding...';",
  "  }",
  "  evolve() { return 'Startup'; }",
  "}",
  "const me = new Developer('Barry');",
  "while(me.alive) { me.code(); }",
  "// Optimization complete.",
  "> Pushing to GitHub...",
  "> Build SUCCESS in 143ms",
];

export default function HobbyTerminal() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        const nextIdx = prev.length % CODE_SNIPPETS.length;
        const newLines = [...prev, CODE_SNIPPETS[nextIdx]];
        return newLines.slice(-8); // Keep last 8 lines
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full rounded-xl border border-white/10 bg-black/60 p-5 font-mono text-xs overflow-hidden">
      <div className="flex flex-col gap-1.5">
        {lines.map((line, i) => (
          <motion.div
            key={`${line}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={line.startsWith(">") ? "text-cyan-400" : "text-white/60"}
          >
            {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="h-4 w-1.5 bg-cyan-400 inline-block align-middle mt-1"
        />
      </div>
      
      {/* Visual background element: PC silhouette or icon */}
      <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-24 w-24 text-cyan-400">
          <path d="M20 18H4V6h16v12zM22 4h-20c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h10v-1l-2-3h7c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
    </div>
  );
}
