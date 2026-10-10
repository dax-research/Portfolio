import type { Metadata } from "next";

const siteName = "Dax Patel";
const socialImage = {
  width: 1200,
  height: 630,
  alt: "Dax Patel — AI/ML Engineer and Researcher",
};

function readSiteBaseUrl() {
  const configuredUrl = process.env.SITE_URL?.trim();
  if (!configuredUrl) {
    return process.env.NODE_ENV === "development"
      ? new URL(`http://localhost:${process.env.PORT ?? "3000"}`)
      : undefined;
  }

  let url: URL;
  try {
    url = new URL(configuredUrl);
  } catch {
    throw new Error("SITE_URL must be an absolute URL.");
  }

  const isLocalDevelopmentUrl =
    process.env.NODE_ENV === "development" &&
    url.protocol === "http:" &&
    (url.hostname === "localhost" || url.hostname === "127.0.0.1");

  if (
    (url.protocol !== "https:" && !isLocalDevelopmentUrl) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS origin without credentials, path, query, or fragment.",
    );
  }

  return url;
}

export const siteBaseUrl = readSiteBaseUrl();
export const isPreviewDeployment = process.env.VERCEL_ENV === "preview";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const pageUrl = siteBaseUrl ? new URL(path, siteBaseUrl).toString() : undefined;
  const imageUrl = siteBaseUrl
    ? new URL("/api/og", siteBaseUrl).toString()
    : undefined;
  const socialTitle = `${title} | ${siteName}`;

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    ...(pageUrl ? { alternates: { canonical: pageUrl } } : {}),
    openGraph: {
      type: "website",
      siteName,
      title: socialTitle,
      description,
      ...(pageUrl ? { url: pageUrl } : {}),
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                ...socialImage,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: socialTitle,
      description,
      ...(imageUrl ? { images: [{ url: imageUrl, alt: socialImage.alt }] } : {}),
    },
  };
}
