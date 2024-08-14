import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEAR Catalog",
    short_name: "NEAR Catalog",
    description:
      "NEAR Catalog is a platform that provides a directory of NEAR projects.",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#000000",
    background_color: "#000000",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
  };
}
