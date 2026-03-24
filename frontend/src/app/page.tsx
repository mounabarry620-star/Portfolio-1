"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import SkillsShowcase from "@/components/SkillsShowcase";
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
  { name: "HTML5", icon: "/images/skills/html_logo.png" },
  { name: "CSS3", icon: "/images/skills/css_logo.png" },
  { name: "JavaScript", icon: "/images/skills/js_logo.png" },
  { name: "C++", icon: "/images/skills/cpp_logo.png" },
  { name: "SQL", icon: "/images/skills/sql_logo.png" },
  { name: "Git", icon: "/images/skills/git_logo.png" },
  { name: "Linux", icon: "/images/skills/linux_logo.png" },
  { name: "Python", icon: "/images/skills/python_logo.png" },
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
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center pt-20 z-10">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-16 flex items-center justify-center gap-10">
             <div className="h-32 w-1.5 rounded-full bg-linear-to-b from-blue-600 to-transparent animate-pulse" />
             <div className="h-32 w-24 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden relative shadow-[0_0_50px_rgba(59,130,246,0.15)]">
               <Image 
                 src="/images/loop.gif" 
                 alt="Loop Animation" 
                 fill
                 className="object-cover scale-110"
                 unoptimized
               />
             </div>
             <div className="h-24 w-24 rounded-full border border-white/40 bg-white shadow-[0_0_50px_rgba(59,130,246,0.4)] flex items-center justify-center overflow-hidden relative p-2">
               <Image 
                 src="/images/Logo IUT couleurs.png" 
                 alt="IUT Logo" 
                 fill
                 className="object-contain"
               />
             </div>
          </div>
          
          <h1 className="hero-head-text !text-[4rem] sm:!text-[6rem] lg:!text-[8rem] leading-none">
            BARRY Mamadou Bailo
          </h1>
          <p className="hero-sub-text mt-6">
            Etudiant en Première année de BUT informatique à Arles
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
          
          <div className="flex flex-col items-center justify-center py-10">
            <SkillsShowcase skills={SKILLS} />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contactez-moi" className="mb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info Card */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xl text-white/60 leading-relaxed mb-12">
                Je suis toujours ouvert à de nouvelles opportunités et collaborations passionnantes. 
                N&apos;hésitez pas à me contacter via le formulaire ou sur mes réseaux sociaux.
              </p>
              
              <div className="space-y-8">
                <a href="mailto:mounabarry620@gmail.com" className="group flex items-center gap-6 text-white/40 hover:text-white transition-colors">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:border-white/40 group-hover:bg-white group-hover:text-black shadow-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-medium tracking-tight">mounabarry620@gmail.com</span>
                </a>
                
                <a href="tel:0753172752" className="group flex items-center gap-6 text-white/40 hover:text-white transition-colors">
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
                { name: "Instagram", icon: <svg className="h-6 w-6 fill-current" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.844.047 1.097.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>, href: "#" },
                { name: "Github", icon: <Github className="h-6 w-6" />, href: "https://github.com/mounabarry620-star" },
                { name: "Linkedin", icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/mamadou-baillo-barry-aa852333a" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/40 transition-all hover:scale-110 hover:border-white/40 hover:bg-white hover:text-black shadow-xl"
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
