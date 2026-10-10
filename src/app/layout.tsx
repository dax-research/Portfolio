import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { ProjectMotionProvider } from "@/components/motion/project-motion-provider";
import { isPreviewDeployment, siteBaseUrl } from "@/lib/site-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteBaseUrl,
  title: {
    default: "Dax Patel | AI/ML Engineer & Researcher",
    template: "%s | Dax Patel",
  },
  description:
    "Portfolio of Dax Patel, a computer engineering student building AI/ML projects and exploring data quality, NLP, retrieval, and intelligent systems.",
  openGraph: {
    type: "website",
    siteName: "Dax Patel",
  },
  robots: isPreviewDeployment
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--paper)] text-[var(--ink)]">
        <ProjectMotionProvider>{children}</ProjectMotionProvider>
      </body>
    </html>
  );
}
