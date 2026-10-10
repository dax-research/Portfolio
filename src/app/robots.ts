import type { MetadataRoute } from "next";
import { isPreviewDeployment, siteBaseUrl } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteBaseUrl
      ? { sitemap: new URL("/sitemap.xml", siteBaseUrl).toString() }
      : {}),
  };
}
