import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page was not found. Return to Dax Patel’s portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">404</p>
      <h1 className="mt-5 text-4xl font-medium tracking-[-0.08em] text-[var(--ink)] md:text-6xl">
        This page is not available.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
        The page you were looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center border border-[var(--ink)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        Return home
      </Link>
    </main>
  );
}
