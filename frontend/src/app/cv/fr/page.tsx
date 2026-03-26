"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function cvFR() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans p-4 md:p-8 print:p-0">
      {/* Navigation - Hidden on print */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft size={18} />
          <span className="font-semibold text-sm">Retour au Portfolio</span>
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
        >
          <Printer size={18} />
          Imprimer / PDF
        </button>
      </div>

      {/* CV Paper Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-[21cm] w-full bg-white shadow-2xl print:shadow-none flex flex-col md:flex-row min-h-[29.7cm] overflow-hidden rounded-xl print:rounded-none"
      >
        {/* Left Sidebar (Darker/Accent) */}
        <div className="w-full md:w-80 bg-[#1b2529] text-white p-8 flex flex-col gap-10">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl mb-6 bg-white/5">
              <Image 
                src="/images/profile.png" 
                alt="BARRY Mamadou Bailo" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-xl font-black text-center uppercase tracking-tighter leading-tight">
              BARRY <br/> <span className="text-blue-400 font-light">Mamadou Bailo</span>
            </h1>
            <p className="text-[10px] text-blue-300 font-bold tracking-[0.2em] uppercase mt-3 text-center">
              Étudiant en informatique
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2 mb-2">Contact</h3>
            <div className="flex items-center gap-3 text-[11px] opacity-80">
              <Phone size={14} className="text-blue-400 shrink-0" />
              <span>07 53 17 27 52</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] opacity-80">
              <Mail size={14} className="text-blue-400 shrink-0" />
              <span className="truncate">mounabarry620@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] opacity-80">
              <MapPin size={14} className="text-blue-400 shrink-0" />
              <span>Arles, France</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] opacity-80">
              <Linkedin size={14} className="text-blue-400 shrink-0" />
              <span>linkedin.com/in/baillo-barry</span>
            </div>
          </div>

          {/* Skills Area */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2 mb-2">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['C++', 'Python', 'Bash', 'SQL', 'Qt', 'Postgres', 'Git', 'Linux', 'Next.js', 'HTML/CSS'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[9px] font-bold uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2 mb-2">Langues</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                <span>Français</span>
                <span className="text-blue-400">Bilingue</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                <span>Anglais</span>
                <span className="text-blue-400">Intermédiaire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 p-10 flex flex-col gap-10 bg-white">
          {/* Summary / Profile Objective */}
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">Profil Professionnel</h2>
            <p className="text-sm leading-relaxed text-slate-600 font-medium italic">
              Actuellement en première année de BUT Informatique, je poursuis un parcours d&apos;excellence après une réorientation passionnée depuis le Génie Mécanique. Mon parcours, marqué par une sélection rigoureuse via Campus France, témoigne de ma détermination à devenir un expert en Intelligence Artificielle appliquée à la Cybersécurité. Curieux, rigoureux et doté d&apos;une grande capacité d&apos;adaptation, je m&apos;investis pleinement dans la création de solutions logicielles innovantes.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Parcours Académique</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-slate-200">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">BUT Informatique (Bachelor)</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2024 - Présent</span>
                </div>
                <p className="text-[11px] text-blue-600 font-bold uppercase mb-2">IUT d&apos;Aix-Marseille (Site d&apos;Arles)</p>
                <div className="text-xs text-slate-500 font-medium space-y-1">
                  <p>• Modules : Algorithmique (C++), Programmation Orientée Objet, Architecture des Systèmes.</p>
                  <p>• Conception : Modélisation de bases de données (SQL/Postgres), Développement Web (HTML/CSS/JS).</p>
                  <p>• Mathématiques : Logique discrète, Graphes, Algèbre linéaire.</p>
                </div>
              </div>

              <div className="relative pl-6 border-l border-slate-200">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">Génie Mécanique & Productique</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2022 - 2024</span>
                </div>
                <p className="text-[11px] text-slate-500 font-bold uppercase mb-2">Université Gamal Abdel Nasser (Guinée)</p>
                <p className="text-xs text-slate-500 font-medium">Acquisition d&apos;une rigueur méthodologique et d&apos;une approche structurée de la résolution de problèmes complexes.</p>
              </div>

              <div className="relative pl-6 border-l border-slate-200">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">Baccalauréat Scientifique SM</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2022</span>
                </div>
                <p className="text-[11px] text-slate-500 font-bold uppercase">Lycée d&apos;Excellence - Mention Bien</p>
              </div>
            </div>
          </section>

          {/* Projets de Réalisation (Expérience Technique) */}
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Projets Techniques (SAE)</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-black uppercase tracking-tight text-blue-700">HYPOXIA | L&apos;Écho Numérique</h4>
                  <span className="text-[9px] font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded tracking-widest uppercase italic">🥇 Lauréat DevArt 2026</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Développement d&apos;une plateforme 3D interactive sensibilisant au coût énergétique de l&apos;IA. Utilisation de **Three.js** pour la simulation d&apos;écosystèmes et **Next.js** pour l&apos;interface utilisateur haute performance.
                </p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 mb-2">Optimisation de Bases de Données (SAE 3.01)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conception d&apos;une architecture relationnelle sous **PostgreSQL** pour un système de gestion scolaire. Implémentation de fonctions stockées (triggers), normalisation (3NF) et optimisation de requêtes complexes.
                </p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 mb-2">Analyse Algorithmique (SAE 2.01)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Implémentation et comparaison de tris (QuickSort, MergeSort) en **C++**. Analyse rigoureuse de la complexité temporelle et spatiale sur de grands jeux de données.
                </p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 mb-2">Poste de Travail Expert (SAE 1.03)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Configuration d&apos;environnements de développement sous **Multiboot** Linux/Windows. Maîtrise de la virtualisation (VirtualBox) et de la sécurisation des accès réseau.
                </p>
              </div>
            </div>
          </section>

          {/* Soft Skills & Interests */}
          <div className="grid grid-cols-2 gap-8 mt-auto pt-6 border-t border-slate-100">
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Soft Skills</h2>
              <ul className="text-[10px] font-bold text-slate-600 uppercase tracking-widest space-y-2">
                <li>• Capacité d&apos;apprentissage rapide</li>
                <li>• Esprit de collaboration</li>
                <li>• Rigueur et méthodologie</li>
              </ul>
            </section>
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Loisirs</h2>
              <ul className="text-[10px] font-bold text-slate-600 uppercase tracking-widest space-y-2">
                <li>• Veille technologique IA</li>
                <li>• Échecs et Stratégie</li>
                <li>• Cuisine Traditionnelle</li>
              </ul>
            </section>
          </div>
        </div>
      </motion.div>

      {/* Print Specific CSS */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            padding: 0 !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
          .min-h-screen {
            min-height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
