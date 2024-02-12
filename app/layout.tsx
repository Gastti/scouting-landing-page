import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navigation/navbar";
import Footer from "./ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scouting Consultoría y Gestión Deportiva",
  description: "Breve descripción del sitio web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col justify-between`}>
        <div className="hidden md:block mx-auto">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
