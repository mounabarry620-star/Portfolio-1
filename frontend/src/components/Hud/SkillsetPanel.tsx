"use client";

export default function SkillsetPanel() {
  const skills = [
    "CYBERSÉCURITÉ / AI",
    "C++ / PYTHON / BASH",
    "QT / SAGEMATH",
    "SQL / POSTGRESQL",
    "LINUX / GIT",
    "HTML / CSS",
    "VS CODE / TOOLS",
    "MACHINE LEARNING",
  ];

  return (
    <div className="grid grid-cols-1 gap-4 font-mono">
      {skills.map((skill, i) => (
        <div key={i} className="flex items-center gap-3 group/item">
          <div className="h-4 w-4 border border-cyan-500/40 rounded-sm flex items-center justify-center p-0.5">
            <div className="h-full w-full bg-cyan-400 opacity-20 group-hover/item:opacity-100 transition-opacity" />
          </div>
          <span className="text-xs font-bold text-white/70 group-hover/item:text-cyan-400 transition-colors uppercase tracking-widest">{skill}</span>
        </div>
      ))}
    </div>
  );
}
