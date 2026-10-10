import Link from "next/link";
import { PageFrame, PageIntro } from "@/components/site-shell";
import type { Project } from "@/data/portfolio";
import { RouteTransition } from "@/components/route-transition";
import { WorkflowDiagram } from "@/components/motion/workflow-diagram";
import { ResearchOsArchitectureExplorer } from "@/components/research-os/architecture-explorer";

export function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <PageFrame>
      <RouteTransition routeKey={`project-${project.slug}`}>
      <PageIntro
        eyebrow={project.category}
        title={project.title}
        description={project.description}
        sharedTitleKey={project.slug}
      />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        {project.slug === "research-os" ? (
          <ResearchOsArchitectureExplorer />
        ) : (
          <section
            aria-label={`${project.title} workflow`}
            className="workflow-visual scroll-reveal mb-12 border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6 md:p-8"
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
            <WorkflowDiagram steps={project.workflow} />
            <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
              Conceptual flow based on the project&apos;s documented implementation; not a benchmark or deployment claim.
            </p>
          </section>
        )}

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
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Overview</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.overview}</p>
            </section>

            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Problem</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.problem}</p>
            </section>

            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Motivation</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.motivation}</p>
            </section>

            <section className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Architecture</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.architecture}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Status</h2>
              <p className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">{project.status}</p>
            </div>

            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Technologies</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Highlights</h2>
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
            <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Implementation</h2>
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
            <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Key decisions</h2>
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
            <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Results & evaluation</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.results}</p>
          </div>

          <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
            <h2 className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {project.slug === "research-os" ? "Current limitations" : "Challenges"}
            </h2>
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
      </RouteTransition>
    </PageFrame>
  );
}
