"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Printer,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function CvFR() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 md:p-8 print:p-0 print:bg-white">
      {/* Navigation — caché à l'impression */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-3 justify-between items-center print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="font-semibold text-sm whitespace-nowrap">
            Retour au Portfolio
          </span>
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
        >
          <Printer size={15} />
          Imprimer / PDF
        </button>
      </div>

      {/* CV — format A4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[21cm] w-full bg-white shadow-2xl print:shadow-none overflow-hidden rounded-xl print:rounded-none min-h-[29.7cm]"
      >
        {/* ── EN-TÊTE ──────────────────────────────────────────────── */}
        <div className="bg-[#1e3a5f] text-white px-8 py-7 print:px-6 print:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* Nom + titre */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                BARRY Mamadou Bailo
              </h1>
              <p className="text-[#93c5fd] font-semibold text-sm mt-1 tracking-widest uppercase">
                Étudiant en Informatique &amp; Cybersécurité
              </p>
              <p className="text-blue-200/70 text-xs mt-1">
                IUT Aix-Marseille — Site d&apos;Arles · BUT Informatique 1ère année
              </p>
            </div>

            {/* Coordonnées */}
            <div className="flex flex-col gap-1.5 text-xs text-blue-100 shrink-0">
              <span className="flex items-center gap-2">
                <Phone size={12} className="shrink-0" /> 07 53 17 27 52
              </span>
              <span className="flex items-center gap-2">
                <Mail size={12} className="shrink-0" /> mounabarry620@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={12} className="shrink-0" /> Marseille, France
              </span>
              <span className="flex items-center gap-2">
                <Linkedin size={12} className="shrink-0" /> linkedin.com/in/baillo-barry
              </span>
            </div>
          </div>
        </div>

        {/* ── CORPS ────────────────────────────────────────────────── */}
        <div className="p-7 print:p-6 flex flex-col gap-6">

          {/* Profil */}
          <section>
            <SectionTitle>Profil Professionnel</SectionTitle>
            <p className="text-xs leading-relaxed text-slate-600 mt-2">
              Étudiant en première année de BUT Informatique avec d&apos;excellents résultats en
              administration système (15/20). Animé par une forte appétence pour la cybersécurité
              et les infrastructures réseaux, je souhaite mettre à profit ma rigueur technique et
              ma première expérience en gestion d&apos;entreprise pour évoluer vers le déploiement
              d&apos;applications communicantes et sécurisées.
            </p>
          </section>

          {/* Grille principale : 2/3 gauche + 1/3 droite */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">

            {/* ── COLONNE GAUCHE (2/3) ─────────────────────────────── */}
            <div className="md:col-span-2 print:col-span-2 flex flex-col gap-6">

              {/* Parcours académique */}
              <section>
                <SectionTitle>Parcours Académique</SectionTitle>
                <div className="mt-3 space-y-4">
                  <TimelineItem
                    year="2025 – 2026"
                    title="BUT Informatique (1ère année validée)"
                    org="IUT d'Aix-Marseille (Site d'Arles)"
                    orgColor="text-blue-600"
                    active
                  >
                    <p>• <strong>Systèmes &amp; Réseaux :</strong> Introduction aux S.E. (15,01/20), Installation de poste (17/20).</p>
                    <p>• <strong>Développement :</strong> Algorithmique et programmation structurée en C++.</p>
                    <p>• <strong>Mathématiques :</strong> Outils mathématiques fondamentaux (16,6/20).</p>
                  </TimelineItem>

                  <TimelineItem
                    year="2022 – 2024"
                    title="Génie Mécanique & Productique"
                    org="Université Gamal Abdel Nasser (Guinée)"
                    orgColor="text-slate-400"
                  />
                </div>
              </section>

              {/* Expérience professionnelle */}
              <section>
                <SectionTitle>Expérience Professionnelle</SectionTitle>
                <div className="mt-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-slate-800">
                        Gestionnaire Commercial &amp; Comptable
                      </h4>
                      <p className="text-[11px] text-blue-600 font-bold uppercase">
                        Boutique d&apos;accessoires téléphoniques — Marseille
                      </p>
                    </div>
                    <span className="text-[9px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-100 uppercase whitespace-nowrap">
                      1 An
                    </span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-0.5 leading-relaxed">
                    <li>• Utilisation du progiciel <strong>Sage 100 Commercial</strong> pour la facturation et l&apos;édition de devis.</li>
                    <li>• Suivi rigoureux de la comptabilité quotidienne et gestion informatisée des stocks.</li>
                    <li>• Développement du sens des responsabilités et de la relation client.</li>
                  </ul>
                </div>
              </section>

              {/* Projets SAE */}
              <section>
                <SectionTitle>Projets Techniques (SAE)</SectionTitle>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  <SaeCard title="Poste de Travail Expert (SAE 1.03)">
                    Configuration d&apos;environnements sous <strong>Multiboot Linux/Windows</strong>.
                    Maîtrise de la virtualisation (VirtualBox), configuration réseau et sécurisation des accès.
                  </SaeCard>
                  <SaeCard title="Analyse Algorithmique en C++ (SAE 1.02)">
                    Implémentation et comparaison d&apos;algorithmes de tri (QuickSort, Insertion, Sélection)
                    structurés en programmation procédurale.
                  </SaeCard>
                </div>
              </section>
            </div>

            {/* ── COLONNE DROITE (1/3) ─────────────────────────────── */}
            <div className="flex flex-col gap-5 print:col-span-1">

              {/* Compétences */}
              <section>
                <SectionTitle>Compétences</SectionTitle>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Linux (Ubuntu/Kali)",
                    "Réseaux & Systèmes",
                    "C++",
                    "Python",
                    "SQL/Postgres",
                    "Sage 100",
                    "Git",
                    "HTML/CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded text-[9px] font-bold uppercase tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Langues */}
              <section>
                <SectionTitle>Langues</SectionTitle>
                <div className="mt-2 space-y-2">
                  <LangRow label="Français" level="Bilingue" />
                  <LangRow label="Anglais" level="Intermédiaire (Technique)" />
                </div>
              </section>

              {/* Soft Skills */}
              <section>
                <SectionTitle>Soft Skills</SectionTitle>
                <ul className="mt-2 text-[10px] font-semibold text-slate-600 uppercase tracking-wide space-y-1 leading-relaxed">
                  <li>• Résolution de problèmes</li>
                  <li>• Rigueur organisationnelle</li>
                  <li>• Adaptabilité</li>
                </ul>
              </section>

              {/* Centres d'intérêt */}
              <section>
                <SectionTitle>Centres d&apos;intérêt</SectionTitle>
                <ul className="mt-2 text-[10px] font-semibold text-slate-600 uppercase tracking-wide space-y-1 leading-relaxed">
                  <li>• Administration OS (Kali/Ubuntu)</li>
                  <li>• Émulation &amp; Hardware ARM</li>
                  <li>• Échecs et Stratégie</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── CSS IMPRESSION ─────────────────────────────────────── */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          @page {
            size: A4;
            margin: 8mm 10mm;
          }
          .min-h-screen {
            min-height: auto !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-700 pb-1.5 border-b border-slate-100 flex items-center gap-2">
      <span className="inline-block w-3 h-0.5 bg-blue-600 shrink-0" />
      {children}
    </h2>
  );
}

function TimelineItem({
  year,
  title,
  org,
  orgColor,
  active,
  children,
}: {
  year: string;
  title: string;
  org: string;
  orgColor: string;
  active?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative pl-5 border-l-2 ${active ? "border-blue-300" : "border-slate-100"}`}>
      <div
        className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 border-white ${
          active ? "bg-blue-600" : "bg-slate-200"
        }`}
      />
      <div className="flex flex-wrap justify-between items-start gap-1 mb-1">
        <h4 className="text-[12px] font-black uppercase tracking-tight text-slate-800 leading-snug">
          {title}
        </h4>
        <span className="text-[9px] font-bold bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100 uppercase whitespace-nowrap">
          {year}
        </span>
      </div>
      <p className={`text-[10px] font-bold uppercase mb-1 ${orgColor}`}>{org}</p>
      {children && (
        <div className="text-[10px] text-slate-500 space-y-0.5 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function SaeCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
      <h4 className="text-[11px] font-black uppercase tracking-tight text-slate-800 mb-1">{title}</h4>
      <p className="text-[10px] text-slate-500 leading-relaxed">{children}</p>
    </div>
  );
}

function LangRow({ label, level }: { label: string; level: string }) {
  return (
    <div className="flex justify-between items-center text-[10px]">
      <span className="font-bold uppercase text-slate-700">{label}</span>
      <span className="text-blue-600 font-semibold">{level}</span>
    </div>
  );
}
