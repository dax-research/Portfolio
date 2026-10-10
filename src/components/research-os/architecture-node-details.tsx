import type { ArchitectureNode } from "@/data/research-os-architecture";

const statusLabels = {
  implemented: "Implemented",
  partial: "Partial",
  planned: "Planned",
} as const;

export function ArchitectureNodeDetails({
  node,
}: {
  node: ArchitectureNode | undefined;
}) {
  if (!node) {
    return (
      <aside
        className="research-os-details border border-[var(--line)] bg-[var(--paper)] p-5 md:p-6"
        aria-label="Architecture stage details"
      >
        <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
          Stage details
        </p>
        <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
          Select a stage to inspect it.
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Each stage lists its purpose, known inputs and outputs, implementation
          status, and a source reference where available.
        </p>
      </aside>
    );
  }

  return (
    <aside
      className="research-os-details border border-[var(--line)] bg-[var(--paper)] p-5 md:p-6"
      aria-label={`${node.title} stage details`}
      aria-live="polite"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {node.lane === "documents" ? "Document flow" : "Query flow"}
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">
            {node.title}
          </h3>
        </div>
        <span className={`architecture-status architecture-status--${node.status}`}>
          <span className="architecture-status__mark" aria-hidden="true" />
          {statusLabels[node.status]}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{node.purpose}</p>
      <dl className="mt-5 grid gap-4 border-t border-[var(--line)] pt-4 sm:grid-cols-2">
        <div>
          <dt className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
            Input
          </dt>
          <dd className="mt-2 text-sm leading-6 text-[var(--ink)]">{node.input}</dd>
        </div>
        <div>
          <dt className="mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
            Output
          </dt>
          <dd className="mt-2 text-sm leading-6 text-[var(--ink)]">{node.output}</dd>
        </div>
      </dl>
      <a
        href={node.source.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-9 items-center text-xs font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
      >
        View {node.source.label} <span aria-hidden="true" className="ml-1">↗</span>
      </a>
    </aside>
  );
}
