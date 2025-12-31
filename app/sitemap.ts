import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://daruaala.com"; // Change to your production URL

  // Add all your static routes here
  const routes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/responsible-drinking",
    "/terms",
    "/privacy",
    "/shipping-policy",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
