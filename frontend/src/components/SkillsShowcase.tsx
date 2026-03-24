"use client";

import React from "react";
import BallCanvas from "./canvas/Ball";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsShowcaseProps {
  skills: Skill[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto px-4">
        {skills.map((skill, i) => (
          <div className="h-28 w-28 sm:h-36 sm:w-36" key={skill.name}>
            <BallCanvas icon={skill.icon} />
          </div>
        ))}
      </div>

      {/* Deep Space Glow */}
      <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-20 pointer-events-none">
        <div className="h-[600px] w-full bg-linear-to-b from-blue-500/5 via-transparent to-purple-500/5 blur-[120px]" />
      </div>
    </div>
  );
}
