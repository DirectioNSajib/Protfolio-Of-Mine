import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RoleProvider } from "@/context/RoleContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sojib Hossen | Lifelong Digital Portfolio Headquarters",
  description: "Computer Science & Engineering graduate from Daffodil International University. Leader, AWS Cloud Specialist, and UI/UX Designer.",
  keywords: ["Sojib Hossen", "Daffodil International University", "CSE Portfolio", "AWS Cloud Practitioner", "UI/UX Figma", "Freelancer Fiverr"],
  authors: [{ name: "Sojib Hossen" }],
  openGraph: {
    title: "Sojib Hossen | Lifelong Digital Portfolio",
    description: "Architecting the intersection of Web Engineering, UI/UX Design, and AWS Cloud Computing.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <RoleProvider>
          <Header />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </RoleProvider>
      </body>
    </html>
  );
}
