import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navigation/navbar";
import Footer from "./ui/footer/footer";
import NavbarResponsive from "./ui/navigation/navbar.responsive";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scouting",
  description: "Consultoría y Gestión Deportiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col justify-between`}>
        <div className="hidden md:block"><Navbar /></div>
        <div className="block md:hidden z-20"><NavbarResponsive /></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
