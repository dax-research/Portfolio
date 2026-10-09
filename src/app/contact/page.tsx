import Link from "next/link";
import { PageFrame, PageIntro } from "@/components/site-shell";
import { profileLinks } from "@/data/portfolio";
import { RouteTransition } from "@/components/route-transition";

export default function ContactPage() {
  const contacts = [
    { label: "Email", value: "dax1214b@gmail.com", href: profileLinks.email },
    { label: "GitHub", value: "github.com/dax-research", href: profileLinks.github },
    { label: "LinkedIn", value: "linkedin.com/in/dax-patel-b26926323", href: profileLinks.linkedin },
    { label: "Medium", value: "@dax1214b", href: profileLinks.medium },
    { label: "LeetCode", value: "leetcode.com/u/dax_2006", href: profileLinks.leetcode },
  ];

  return (
    <PageFrame>
      <RouteTransition routeKey="contact">
        <PageIntro
        eyebrow="Contact"
        title="Let’s talk about AI, research, and real systems."
        description="For internships, collaborative projects, research conversations, and engineering discussions, I am always open to connecting."
      />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-5xl px-6 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-card scroll-reveal border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6"
            >
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{contact.label}</p>
              <p className="mt-4 text-lg text-[var(--ink)]">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mono">Availability</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I am open to AI/ML internship opportunities, research discussions, and practical engineering collaborations that involve building useful systems with strong technical thinking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center border border-[var(--ink)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]">
              View work
            </Link>
            <a href={profileLinks.resume} download className="inline-flex items-center border border-[var(--line)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]">
              Download résumé
            </a>
          </div>
        </div>
        </main>
      </RouteTransition>
    </PageFrame>
  );
}
