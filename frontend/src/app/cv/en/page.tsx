"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function cvEN() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans p-4 md:p-8 print:p-0">
      {/* Navigation - Hidden on print */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft size={18} />
          <span className="font-semibold text-sm">Back to Portfolio</span>
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
        >
          <Printer size={18} />
          Print / Save as PDF
        </button>
      </div>

      {/* CV Paper Component */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-[21cm] w-full bg-white shadow-2xl print:shadow-none flex flex-col md:flex-row min-h-[29.7cm] overflow-hidden rounded-xl print:rounded-none"
      >
        {/* Left Sidebar (Darker/Accent) */}
        <div className="w-full md:w-80 bg-slate-900 p-8 text-white flex flex-col gap-10">
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
              Computer Science Student
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
            <h3 className="text-xs font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2 mb-2">Languages</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                <span>French</span>
                <span className="text-blue-400">Bilingual</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                <span>English</span>
                <span className="text-blue-400">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 p-10 flex flex-col gap-10 bg-white">
          {/* Summary / Profile Objective */}
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-slate-800 mb-4 border-l-4 border-blue-600 pl-4">Professional Profile</h2>
            <p className="text-sm leading-relaxed text-slate-600 font-medium italic">
              Currently a first-year Computer Science student, I am pursuing a path of excellence after a passionate transition from Mechanical Engineering. My journey, marked by a rigorous selection via Campus France, demonstrates my determination to become an expert in Artificial Intelligence applied to Cybersecurity. Curious, disciplined, and highly adaptable, I am fully committed to creating innovative software solutions.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Academic Background</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-slate-200">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">BUT Computer Science (Bachelor)</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2024 - Present</span>
                </div>
                <p className="text-[11px] text-blue-600 font-bold uppercase mb-2">Aix-Marseille University (IUT site d&apos;Arles)</p>
                <div className="text-xs text-slate-500 font-medium space-y-1">
                  <p>• Modules: Algorithms (C++), Object-Oriented Programming, Systems Architecture.</p>
                  <p>• Design: Database Modeling (SQL/Postgres), Web Development (HTML/CSS/JS).</p>
                  <p>• Mathematics: Discrete Logic, Graph Theory, Linear Algebra.</p>
                </div>
              </div>

              <div className="relative pl-6 border-l border-slate-200">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">Mechanical & Production Engineering</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2022 - 2024</span>
                </div>
                <p className="text-[11px] text-slate-500 font-bold uppercase mb-2">Gamal Abdel Nasser University (Guinea)</p>
                <p className="text-xs text-slate-500 font-medium">Developed strong methodological discipline and a structured approach to solving complex engineering problems.</p>
              </div>

              <div className="relative pl-6 border-l border-slate-200">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black uppercase tracking-tight">Scientific High School Diploma</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2022</span>
                </div>
                <p className="text-[11px] text-slate-500 font-bold uppercase">Excellence High School - High Honors</p>
              </div>
            </div>
          </section>

          {/* Technical Projects (Work Experience equivalent) */}
          <section>
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Technical Projects (SAE)</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-black uppercase tracking-tight text-blue-700">HYPOXIA | The Digital Echo</h4>
                  <span className="text-[9px] font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded tracking-widest uppercase italic">🥇 DevArt 2026 Winner</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Developed an interactive 3D platform highlighting the energy cost of AI. Used **Three.js** for ecosystem simulation and **Next.js** for a high-performance user interface.
                </p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 mb-2">Database Optimization (SAE 3.01)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Designed a relational architecture using **PostgreSQL** for a school management system. Implemented stored functions (triggers), normalization (3NF), and complex query optimization.
                </p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 mb-2">Algorithmic Analysis (SAE 2.01)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Implemented and compared sorting algorithms (QuickSort, MergeSort) in **C++**. Conducted rigorous analysis of time and space complexity on large datasets.
                </p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-black uppercase tracking-tight text-slate-800 mb-2">Expert Workstation Setup (SAE 1.03)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Configured development environments under **Multiboot** Linux/Windows. Proficient in virtualization (VirtualBox) and securing network access.
                </p>
              </div>
            </div>
          </section>

          {/* Soft Skills & Interests */}
          <div className="grid grid-cols-2 gap-8 mt-auto pt-6 border-t border-slate-100">
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Soft Skills</h2>
              <ul className="text-[10px] font-bold text-slate-600 uppercase tracking-widest space-y-2">
                <li>• Rapid Learning Ability</li>
                <li>• Collaborative Mindset</li>
                <li>• Methodological Discipline</li>
              </ul>
            </section>
            <section>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Interests</h2>
              <ul className="text-[10px] font-bold text-slate-600 uppercase tracking-widest space-y-2">
                <li>• AI Tech Watch</li>
                <li>• Chess & Strategy</li>
                <li>• Traditional Cooking</li>
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
