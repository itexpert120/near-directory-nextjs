import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import site from "@/config/site";

const manrope = Manrope({ subsets: ["latin"] });

const BASE_URL = site.url;

export const metadata: Metadata = {
  title: {
    default: "NEAR Landscape",
    template: "%s - NEAR Landscape",
  },
  description: "Generated by create next app",
  metadataBase: new URL(BASE_URL),
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
      url: BASE_URL,
    },
  ],
  creator: "@near",
  manifest: "/manifest.webmanifest",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${manrope.className} min-h-screen bg-black font-sans antialiased`}
      >
        <div className="bg-background relative flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
