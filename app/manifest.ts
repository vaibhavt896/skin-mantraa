import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SKIN@Mantraa - Dr. Mamta Bhura",
    short_name: "SKIN@Mantraa",
    description: "Premier Dermatology & Cosmetology in Kanpur",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf6ec",
    theme_color: "#c4704e",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
