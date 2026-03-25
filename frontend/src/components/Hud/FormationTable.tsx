"use client";

export default function FormationTable() {
  const formations = [
    { school: "IUT AIX-MARSEILLE (ARLES)", period: "2025-...", degree: "BUT INFORMATIQUE" },
    { school: "UNIV. GAMAL ABDEL NASSER", period: "2023-2025", degree: "GÉNIE MÉCANIQUE" },
    { school: "BAC SCIENTIFIQUE SM", period: "2023", degree: "MENTION BIEN" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse font-mono text-[11px]">
        <thead>
          <tr className="border-b border-cyan-500/30 text-cyan-400/50 uppercase tracking-widest">
            <th className="pb-3 text-left font-bold pl-2">FORMATION</th>
            <th className="pb-3 text-center font-bold px-4">PERIOD</th>
            <th className="pb-3 text-right font-bold pr-2">DEGREE</th>
          </tr>
        </thead>
        <tbody>
          {formations.map((f, i) => (
            <tr key={i} className="group hover:bg-cyan-500/5 transition-colors border-b border-white/5 last:border-0">
              <td className="py-4 text-left text-white/90 pl-2 leading-tight uppercase max-w-[150px]">{f.school}</td>
              <td className="py-4 text-center text-cyan-400/70 tabular-nums px-4">{f.period}</td>
              <td className="py-4 text-right text-white/70 pr-2 italic">{f.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
