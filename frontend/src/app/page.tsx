"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";

const SKILLS = [
  { name: "HTML5", icon: "/images/skills/html_logo.png" },
  { name: "CSS3", icon: "/images/skills/css_logo.png" },
  { name: "JavaScript", icon: "/images/skills/js_logo.png" },
  { name: "C++", icon: "/images/skills/cpp_logo.png" },
  { name: "SQL", icon: "/images/skills/sql_logo.png" },
  { name: "Git", icon: "/images/skills/git_logo.png" },
  { name: "Linux", icon: "/images/skills/linux_logo.png" },
  { name: "Python", icon: "/images/skills/python_logo.png" },
];

const PROJECTS = [
  {
    title: "SAE 1 - Site Web Statique",
    description: "Création d'un site vitrine responsive et moderne pour présenter une entreprise fictive",
    tags: ["HTML", "CSS"],
  },
  {
    title: "SAE 2 - Algorithmique",
    description: "Implémentation d'algorithmes de tri et analyse de leur complexité temporelle",
    tags: ["C++"],
  },
  {
    title: "SAE 3 - Base de données",
    description: "Conception et gestion d'une base de données relationnelle avec travail collaboratif",
    tags: ["SQL", "Collaboration"],
  },
  {
    title: "Mon Portfolio",
    description: "Mon portfolio interactif avec animations 3D et stack moderne",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Aura */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center pt-20 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center gap-4">
             <div className="h-12 w-1 rounded-full bg-white/20 animate-pulse" />
             <div className="h-12 w-8 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm" />
             <div className="h-12 w-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
          </div>
          
          <h1 className="text-6xl font-bold tracking-tighter text-white md:text-8xl lg:text-9xl">
            Barry M.B.
          </h1>
          <p className="mt-8 text-xl font-medium tracking-wide text-white/50 md:text-2xl uppercase">
            Étudiant en BUT Informatique
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <a 
              href="#work"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
            >
              Découvrir mon travail
            </a>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-24 flex justify-center"
          >
            <ArrowDown className="h-6 w-6 text-white/10" />
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <Section id="work" title="Projets">
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="À Propos">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Bonjour, je suis Barry.</h3>
            <p className="text-lg leading-relaxed text-white/70">
              Étudiant en BUT Informatique à Aix-Marseille Université (site d'Arles).<br />
              Passionné par l'intelligence artificielle et les nouvelles technologies.<br />
              Après un bac scientifique SM mention Bien en Guinée et un parcours en génie mécanique,
              j'ai suivi ma véritable passion en me réorientant vers l'informatique via Campus France.<br />
              Mon objectif : devenir ingénieur en IA et créer ma propre start-up.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Mes Compétences</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SKILLS.map((skill, i) => (
                <SkillCard key={i} name={skill.name} iconPath={skill.icon} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="flex flex-col items-center justify-center space-y-8 rounded-3xl bg-white/3 py-20 border border-white/5 backdrop-blur-sm">
          <p className="text-center text-xl text-white/60 max-w-lg">
            N&apos;hésitez pas à me contacter pour toute question ou collaboration.
          </p>
          <div className="flex gap-8">
            <a href="mailto:mounabarry620@gmail.com" className="group flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/10 p-4 transition-all group-hover:bg-white group-hover:text-black">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white">Email</span>
            </a>
            <a href="https://github.com/mounabarry620-star" target="_blank" className="group flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/10 p-4 transition-all group-hover:bg-white group-hover:text-black">
                <Github className="h-6 w-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/mamadou-baillo-barry-aa852333a" target="_blank" className="group flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/10 p-4 transition-all group-hover:bg-white group-hover:text-black">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white">LinkedIn</span>
            </a>
          </div>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="py-12 text-center text-sm text-white/20">
        © {new Date().getFullYear()} Barry Mamadou Bailo. Tous droits réservés.
      </footer>
    </main>
  );
}
