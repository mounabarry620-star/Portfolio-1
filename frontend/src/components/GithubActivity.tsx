"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import Section from "./Section";

const GITHUB_THEME = {
  light: ["#ebebeb", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#0f172a", "#1e3a8a", "#1d4ed8", "#3b82f6", "#60a5fa"],
};

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="github" title="Activité GitHub">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
      >
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
        
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-full text-white overflow-x-auto no-scrollbar py-4 flex justify-center min-h-[150px]">
            {mounted ? (
              <GitHubCalendar
                username="mounabarry620-star"
                theme={GITHUB_THEME}
                blockSize={14}
                blockMargin={6}
                fontSize={14}
              />
            ) : (
              <div className="h-[150px] w-full animate-pulse bg-white/5 rounded-xl" />
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-3 border border-white/10">
              <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Username</span>
              <span className="text-md font-bold text-blue-400">@mounabarry620-star</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-3 border border-white/10">
              <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Status</span>
              <span className="flex items-center gap-2 text-md font-bold text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Live Tracking
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
