import type { ReactNode } from "react";
import Link from "next/link";

export function SiteHeader() {
  const navItems = [
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/writing", label: "Writing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mx-auto w-full max-w-6xl px-6 pt-6 md:px-8">
      <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
        <Link href="/" className="text-sm font-medium tracking-[0.18em] text-[var(--ink)] uppercase">
          Dax Patel
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <nav aria-label="Quick navigation" className="flex items-center gap-2 md:hidden">
            {navItems.slice(0, 3).map((item) => (
              <Link key={item.href} href={item.href} className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="inline-flex items-center border border-[var(--ink)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-medium tracking-[-0.06em] text-[var(--ink)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-[var(--line)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-medium tracking-[-0.08em] text-[var(--ink)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function LinkButton({
  href,
  children,
  external = false,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  secondary?: boolean;
}) {
  const classes = secondary
    ? "border border-[var(--line)] bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"
    : "bg-[var(--ink)] text-[var(--paper)] hover:bg-[#2a2a2a]";

  const target = external ? "_blank" : undefined;
  const rel = external ? "noreferrer" : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}

export function ProjectCard({
  title,
  category,
  status,
  shortDescription,
  tech,
  href,
  index,
}: {
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  tech: string[];
  href: string;
  index: number;
}) {
  return (
    <Link
      href={href}
      className="group relative block border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-white/60"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {String(index).padStart(2, "0")}
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{category}</span>
        </div>
        <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
          {status}
        </span>
      </div>
      <h3 className="text-2xl font-medium tracking-[-0.05em] text-[var(--ink)] md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">{shortDescription}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function ArticleCard({ article }: { article: { title: string; description: string; date: string; category: string; href: string } }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noreferrer"
      className="group block border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6 transition-colors hover:border-[var(--ink)]"
    >
      <div className="mb-4 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>
      <h3 className="text-2xl font-medium tracking-[-0.05em] text-[var(--ink)]">{article.title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{article.description}</p>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Dax Patel</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/projects">Projects</Link>
          <Link href="/research">Research</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
