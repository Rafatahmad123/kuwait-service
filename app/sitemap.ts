import type { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants";

const staticRoutes: string[] = [
  "/",
  "/satellite",
  "/satellite-jahra",
  "/cameras",
  "/cameras-jahra",
  "/cctv",
  "/car-service",
  "/car-service-jahra",
  "/cookers",
  "/cookers-jahra",
  "/garage-jahra",
  "/mobile-mechanic",
  "/oven-repair",
  "/software-engineering",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return staticRoutes.map((path, index) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: index === 0 ? "daily" : "weekly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
