import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Menu from "@/components/menu";
import PiedDePage from "@/components/pied-de-page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Féry - Portfolio",
  description: "Portfolio d'un étudiant en développement web : projets, parcours et contact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto w-full max-w-3xl px-6">
          <Menu />
          <main>{children}</main>
          <PiedDePage />
        </div>
      </body>
    </html>
  );
}
