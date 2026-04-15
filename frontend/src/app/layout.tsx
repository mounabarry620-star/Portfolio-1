import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ChatBot from "@/components/ChatBot";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-1-gamma-azure.vercel.app"),
  title: "BARRY Mamadou Bailo — Portfolio",
  description: "Étudiant en BUT Informatique à Arles, passionné d'IA et de cybersécurité. Développeur Next.js, C++, Python.",
  openGraph: {
    title: "BARRY Mamadou Bailo — Portfolio",
    description: "Étudiant en BUT Informatique à Arles, passionné d'IA et de cybersécurité.",
    url: "https://portfolio-1-gamma-azure.vercel.app",
    siteName: "Barry Mamadou Bailo",
    images: [{ url: "/images/profile.png", width: 400, height: 400, alt: "Barry Mamadou Bailo" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BARRY Mamadou Bailo — Portfolio",
    description: "Étudiant en BUT Informatique à Arles, passionné d'IA et de cybersécurité.",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.variable} ${poppins.className} bg-background text-foreground antialiased font-poppins`}>
        <ThemeProvider>
          <ScrollProgress />
          <SmoothScroll>
            <Cursor />
            <Navbar />
            {children}
            <ChatBot />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
