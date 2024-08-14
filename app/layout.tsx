import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import site from "@/config/site";
import SearchModal from "@/components/modals/search";

const manrope = Manrope({ subsets: ["latin"] });

const BASE_URL = site.url;
const APP_NAME = "NEAR Catalog";
const APP_DEFAULT_TITLE = "NEAR Catalog";
const APP_TITLE_TEMPLATE = "%s - NEAR Catalog";
const APP_DESCRIPTION =
  "NEAR Catalog is a platform that provides a directory of NEAR projects.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
          <SearchModal />
        </div>
      </body>
    </html>
  );
}
