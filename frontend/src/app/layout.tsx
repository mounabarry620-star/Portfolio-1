import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "BARRY Mamadou Bailo - Portfolio",
  description: "Etudiant en Première année de BUT informatique à Arles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.variable} ${poppins.className} bg-background text-foreground antialiased font-poppins`}>
        <SmoothScroll>
          <Cursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
