import type { MetadataRoute } from "next";

const BASE_URL = "https://www.techniciankuwait.com";

const ROUTES = [
  "/",
  "/satellite-jahra",
  "/car-service-jahra",
  "/cameras-jahra",
  "/cookers-jahra",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "daily",
    priority: path === "/" ? 1 : 0.7,
  }));
}
