import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NEAR Landscape",
    template: "%s - NEAR Landscape",
  },
  description: "Generated by create next app",
  // metadataBase: new URL("https://near.landscape/"),
  keywords: [
    "NEAR",
    "Landscape",
    "NEAR Landscape",
    "NEAR Ecosystem",
    "NEAR Ecosystem Support",
    "NEAR Community",
    "NEAR Community Support",
    "NEAR DAO",
    "NEAR DAO Support",
  ],
  authors: [
    {
      name: "NEAR Landscape",
      url: "https://near.landscape/",
    },
  ],
  creator: "@near",
  // manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={manrope.className + " min-h-screen antialiased"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
