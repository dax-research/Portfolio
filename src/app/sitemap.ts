import type { MetadataRoute } from "next";
import { allProjects } from "@/data/portfolio";
import { isPreviewDeployment, siteBaseUrl } from "@/lib/site-metadata";

const publicPaths = [
  "/",
  "/projects",
  ...allProjects.map((project) => `/projects/${project.slug}`),
  "/research",
  "/writing",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteBaseUrl || isPreviewDeployment) {
    return [];
  }

  return publicPaths.map((path) => ({
    url: new URL(path, siteBaseUrl).toString(),
  }));
}
