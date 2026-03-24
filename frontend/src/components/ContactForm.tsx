"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ nome: "", prenom: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nome: "", prenom: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClasses = "w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 focus:border-white/40 focus:bg-white/10 focus:outline-hidden transition-all duration-300";

  return (
    <div className="mx-auto max-w-2xl">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <CheckCircle2 className="mb-4 h-16 w-16 text-white" />
            <h3 className="text-2xl font-bold text-white">Message envoyé !</h3>
            <p className="mt-2 text-white/70 border border-white/10 rounded-full px-4 py-1 bg-white/5">Je vous répondrai dès que possible.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/90 ml-4">Nom</label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  className={inputClasses}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/90 ml-4">Prénom</label>
                <input
                  type="text"
                  required
                  placeholder="Votre prénom"
                  className={inputClasses}
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-white/90 ml-4">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Votre message..."
                className={`${inputClasses} resize-none`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-50"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            {status === "error" && (
              <p className="text-center text-sm text-red-500">Une erreur est survenue. Veuillez réessayer.</p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
