import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageFrame, PageIntro } from "@/components/site-shell";
import { allProjects } from "@/data/portfolio";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <PageFrame>
      <Suspense
        fallback={
          <div className="mx-auto min-h-80 max-w-6xl px-6 py-16 text-sm text-[var(--muted)] md:px-8" aria-busy="true">
            Loading project…
          </div>
        }
      >
        <ProjectDetails params={params} />
      </Suspense>
    </PageFrame>
  );
}

async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow={project.category}
        title={project.title}
        description={project.description}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <section
          aria-label={`${project.title} workflow`}
          className="mb-12 border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6 md:p-8"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                System workflow
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.05em] text-[var(--ink)] md:text-3xl">
                From input to useful output.
              </h2>
            </div>
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
              Project overview
            </p>
          </div>
          <ol className="grid gap-3 md:grid-cols-4">
            {project.workflow.map((step, index) => (
              <li
                key={step.label}
                className="relative min-h-36 border border-[var(--line)] bg-[var(--paper)] p-4"
              >
                <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-medium tracking-[-0.03em] text-[var(--ink)]">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.detail}</p>
                {index < project.workflow.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[var(--line)] bg-[var(--paper)] md:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
            Conceptual flow based on the project&apos;s documented implementation; not a benchmark or deployment claim.
          </p>
        </section>

        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--paper)] transition-colors hover:bg-[#2a2a2a]"
          >
            GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-[var(--line)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Demo
            </a>
          ) : null}
          <Link
            href="/projects"
            className="inline-flex items-center border border-[var(--line)] px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            Back to projects
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Overview</p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.overview}</p>
            </section>

            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Problem</p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.problem}</p>
            </section>

            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Motivation</p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.motivation}</p>
            </section>

            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Architecture</p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.architecture}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Status</p>
              <p className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">{project.status}</p>
            </div>

            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Technologies</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Highlights</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Implementation</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
              {project.implementation.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Key decisions</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
              {project.decisions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Results & evaluation</p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.results}</p>
          </div>

          <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Challenges</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
              {project.challenges.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
