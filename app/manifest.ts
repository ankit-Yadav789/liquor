import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DaruAala - Premium Liquor Store",
    short_name: "DaruAala",
    description: "Jaipur's premier online liquor store.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo1.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
