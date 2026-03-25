"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import SkillsShowcase from "@/components/SkillsShowcase";
import GithubActivity from "@/components/GithubActivity";
import { Mail, Github, Linkedin, ArrowDown, X } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  gallery?: string[];
  github?: string;
  live?: string;
  isHighlighted?: boolean;
}

const SKILLS: Skill[] = [
  { name: "C++", icon: "/images/skills/c++_logo.png" },
  { name: "Python", icon: "/images/skills/python_logo.png" },
  { name: "Bash", icon: "/images/skills/bash_logo.png" },
  { name: "Qt", icon: "/images/skills/qt_logo.png" },
  { name: "SQL", icon: "/images/skills/sql_logo.png" },
  { name: "Postgres", icon: "/images/skills/postgres_logo.png" },
  { name: "SageMath", icon: "/images/skills/sage_math_logo.png" },
  { name: "Git", icon: "/images/skills/git_logo.png" },
  { name: "Linux", icon: "/images/skills/linux_logo.png" },
  { name: "HTML", icon: "/images/skills/html_logo.png" },
  { name: "CSS", icon: "/images/skills/css_logo.png" },
  { name: "VS Code", icon: "/images/skills/vs_code_logo.png" },
];

const PROJECTS: Project[] = [
  {
    title: "HYPOXIA | L'Écho Numérique",
    description: "Une expérience immersive de survie qui révèle le coût invisible de l'IA. Tapez un prompt, et regardez le monde étouffer. 🌿🔥 (Gagnant DevArt 2026 - Next.js + R3F)",
    tags: ["Next.js", "Three.js", "AI", "Winner"],
    image: "/images/projects/devart/img_devArt.jpg",
    gallery: [
      "/images/projects/devart/img_dev1.jpeg",
      "/images/projects/devart/img_dev2.jpeg",
      "/images/projects/devart/img_dev3.jpeg",
      "/images/projects/devart/img_dev4.jpeg",
      "/images/projects/devart/img_dev5.jpeg",
      "/images/projects/devart/img_dev6.jpeg",
    ],
    github: "https://github.com/Bakame03/Nebula_DevArt_2026_Project_-HYPOXIA-",
    live: "https://nebula-gray-seven.vercel.app/",
    isHighlighted: true,
  },
  {
    title: "SAE 1.01 | Bibliothèque CLI",
    description: "Développement d'une application robuste en ligne de commande pour la gestion d'une bibliothèque numérique avec stockage .db et configuration ASCII personnalisé.",
    tags: ["C++", "CLI", "Data Management"],
    image: "/images/projects/sae/s101.png",
  },
  {
    title: "SAE 1.02 | Site Web Statique",
    description: "Conception et réalisation d'un site vitrine responsive et moderne pour un client fictif, mettant en avant l'accessibilité et le design.",
    tags: ["HTML", "CSS", "UI/UX"],
    image: "/images/projects/sae/s102.png",
  },
  {
    title: "SAE 1.03 | Installation Multiboot",
    description: "Configuration d'un poste de travail expert en multiboot (Windows/Linux) via Oracle VirtualBox avec installation complète des outils de développement.",
    tags: ["Linux", "VirtualBox", "System"],
    image: "/images/projects/sae/s103.png",
  },
  {
    title: "SAE 2.01 | Algorithmique",
    description: "Implémentation d'algorithmes complexes de tri et de recherche, avec analyse de complexité temporelle et spatiale en C++.",
    tags: ["C++", "Algorithms"],
    image: "/images/projects/sae/s201.png",
  },
  {
    title: "SAE 3.01 | Base de données",
    description: "Conception, normalisation et gestion d'une base de données relationnelle SQL avec travail collaboratif et requêtes complexes.",
    tags: ["SQL", "Postgres", "Collaboration"],
    image: "/images/projects/sae/s301.png",
  },
  {
    title: "Mon Portfolio",
    description: "Mon portfolio interactif avec HUD dynamique, animations 3D et stack moderne Next.js.",
    tags: ["Next.js", "Tailwind CSS", "HUD"],
    image: "/images/projects/sae/portfolio.png",
  },
];

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const auraScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen relative overflow-hidden" ref={containerRef}>
      {/* Background Photo with Parallax & Animation */}
      <motion.div
        style={{ 
          scale: useTransform(scrollYProgress, [0, 1], [1.1, 1.3]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.35, 0.15]),
          y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
        }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale contrast-125 blur-[1px] brightness-90 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </motion.div>

      {/* Background Aura */}
      <motion.div 
        style={{ scale: auraScale, opacity }}
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
      </motion.div>
        {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center pt-20 z-10 px-6">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 1. Logos (at the top) */}
          <div className="mb-10 flex items-center justify-center gap-10">
             <div className="h-32 w-1.5 rounded-full bg-linear-to-b from-blue-600 to-transparent animate-pulse" />
             <div className="h-32 w-24 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden relative shadow-[0_0_50px_rgba(59,130,246,0.15)]">
               <Image 
                 src="/images/loop.gif" 
                 alt="Loop Animation" 
                 fill
                 sizes="(max-width: 768px) 100px, 150px"
                 className="object-cover scale-110"
                 unoptimized
                 priority
                 loading="eager"
               />
             </div>
             <div className="h-24 w-24 rounded-full border border-white/40 bg-white shadow-[0_0_50px_rgba(59,130,246,0.4)] flex items-center justify-center overflow-hidden relative p-2">
               <Image 
                 src="/images/Logo IUT couleurs.png" 
                 alt="IUT Logo" 
                 fill
                 sizes="(max-width: 768px) 100px, 150px"
                 className="object-contain"
               />
             </div>
          </div>

          {/* 2. Profile Photo (Enlarged & Centered) */}
          <div className="mb-12 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-64 w-64 lg:h-72 lg:w-72 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-3xl p-1 shadow-[0_0_80px_rgba(59,130,246,0.2)] group"
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-b from-blue-500/20 to-transparent blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
                <Image 
                  src="/images/profile.png" 
                  alt="BARRY Mamadou Bailo" 
                  fill
                  sizes="(max-width: 768px) 250px, 300px"
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
          
          {/* 3. Name & Subtext */}
          <h1 className="hero-head-text !text-[4rem] sm:!text-[6rem] lg:text-[8rem]! leading-none">
            BARRY Mamadou Bailo
          </h1>
          <p className="hero-sub-text mt-6">
            Etudiant en Première année de BUT informatique à Arles
            <span className="block mt-2 text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">Parcours : Réalisation d&apos;applications : conception, développement, validation</span>
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <a 
              href="#work"
              className="group relative rounded-full border border-white/20 bg-white/5 px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white backdrop-blur-2xl transition-all hover:border-white/40 hover:bg-white hover:text-black overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-black">Explorer l&apos;univers</span>
              <motion.div 
                className="absolute inset-0 z-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", duration: 0.4 }}
              />
            </a>
            
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-12"
            >
              <ArrowDown className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Section id="work" title="Projets">
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard 
              key={i} 
              {...project} 
              onClick={() => {
                if (project.gallery) {
                  setActiveGallery(project.gallery);
                }
              }}
            />
          ))}
        </div>
      </Section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveGallery(null)}
                className="absolute top-10 right-10 z-10 rounded-full bg-white/10 p-4 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="h-6 w-6" />
              </motion.button>

              <div className="h-full w-full max-w-7xl overflow-y-auto no-scrollbar py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeGallery.map((img: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                    >
                      <Image
                        src={img}
                        alt={`Gallery view ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <Section id="about" title="À Propos">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Column 1: Text */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight italic uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Bonjour, je suis Barry.</h3>
            <p className="text-lg leading-relaxed text-white/80 font-medium whitespace-pre-line">
              Étudiant en BUT Informatique première année à Aix-Marseille Université (site d'Arles).
              <span className="block mt-2 text-blue-400 font-bold tracking-wide uppercase text-sm">Parcours : Réalisation d'applications : conception, développement, validation</span>
              Passionné par l'intelligence artificielle et les nouvelles technologies.
              Après un bac scientifique SM mention Bien en Guinée et un parcours en génie mécanique,
              j'ai suivi ma véritable passion en me réorientant vers l'informatique via Campus France.
              Mon objectif : devenir ingénieur en IA appliqué à la cybersécurité.
            </p>
          </div>
          
          {/* Column 2: Educational Journey (Superposed Images) */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-end relative min-h-[450px] lg:min-h-[550px] mt-10 lg:mt-0 px-4">
             {/* Gamal Image (Conakry) */}
             <motion.div
               whileInView={{ opacity: 1, x: 0, rotate: -8 }}
               initial={{ opacity: 0, x: 50, rotate: 0 }}
               whileHover={{ rotate: 0, scale: 1.1, zIndex: 10 }}
               transition={{ duration: 0.6 }}
               className="relative lg:absolute top-0 right-14 w-full lg:w-80 aspect-4/3 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group mb-10 lg:mb-0 transition-all cursor-pointer z-0"
             >
                <Image 
                  src="/images/about/gamal.jpg" 
                  alt="Education Conakry" 
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 blur-[0.5px] group-hover:blur-0 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-black tracking-[0.2em] text-white uppercase italic">Phase I: Gamal Conakry</p>
                </div>
             </motion.div>

             {/* IUT Arles Image */}
             <motion.div
               whileInView={{ opacity: 1, x: 0, rotate: 10 }}
               initial={{ opacity: 0, x: 50, rotate: 0 }}
               whileHover={{ rotate: 0, scale: 1.1, zIndex: 10 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative lg:absolute top-32 right-2 w-full lg:w-80 aspect-4/3 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all cursor-pointer z-5"
             >
                <Image 
                  src="/images/about/arles.jpg" 
                  alt="Education Arles" 
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 blur-[0.5px] group-hover:blur-0 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-black tracking-[0.2em] text-white uppercase italic">Phase II: IUT Arles</p>
                </div>
             </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Compétences">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl text-center mb-16"
          >
            <p className="text-xl text-white/70 leading-relaxed font-medium">
              Durant ma première année d'informatique, voici les compétences techniques que j'ai apprises et que je continue d'approfondir. Bien sûr, il en existe d'autres, mais actuellement ce sont celles que j'utilise le plus fréquemment au quotidien.
            </p>
          </motion.div>
          
          <div className="w-full">
            <SkillsShowcase skills={SKILLS} />
          </div>
        </div>
      </Section>
      
      <GithubActivity />

      {/* Contact Section */}
      <Section id="contact" title="Contactez-moi" className="mb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info Card */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xl text-white/90 leading-relaxed mb-12">
                Je suis toujours ouvert à de nouvelles opportunités et collaborations passionnantes. 
                N&apos;hésitez pas à me contacter via le formulaire ou sur mes réseaux sociaux.
              </p>
              
              <div className="space-y-8">
                <a href="mailto:mounabarry620@gmail.com" className="group flex items-center gap-6 text-white/90 hover:text-white transition-colors">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:border-white/40 group-hover:bg-white group-hover:text-black shadow-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-medium tracking-tight">mounabarry620@gmail.com</span>
                </a>
                
                <a href="tel:0753172752" className="group flex items-center gap-6 text-white/90 hover:text-white transition-colors">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:border-white/40 group-hover:bg-white group-hover:text-black shadow-xl">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="text-xl font-medium tracking-tight">07 53 17 27 52</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex flex-wrap gap-6">
              {[
                { name: "WhatsApp", icon: <svg className="h-6 w-6 fill-current" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>, href: "https://wa.me/33753172752" },
                { name: "Github", icon: <Github className="h-6 w-6" />, href: "https://github.com/mounabarry620-star" },
                { name: "Linkedin", icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/mamadou-baillo-barry-aa852333a" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition-all hover:scale-110 hover:border-white/40 hover:bg-white hover:text-black shadow-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="py-12 text-center text-sm text-white/20">
        © {new Date().getFullYear()} Barry Mamadou Bailo. Tous droits réservés.
      </footer>
    </main>
  );
}
