"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  researchOsArchitectureNodes,
  researchOsWalkthrough,
  type ArchitectureNode,
} from "@/data/research-os-architecture";
import { ArchitectureControls } from "@/components/research-os/architecture-controls";
import { ArchitectureDiagram } from "@/components/research-os/architecture-diagram";
import { ArchitectureNodeDetails } from "@/components/research-os/architecture-node-details";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const statusLegend = [
  { status: "implemented", label: "Implemented" },
  { status: "partial", label: "Partial" },
  { status: "planned", label: "Planned" },
] as const;

export function ResearchOsArchitectureExplorer() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => true,
  );
  const [selectedNodeId, setSelectedNodeId] =
    useState<ArchitectureNode["id"] | null>(null);
  const [replayIndex, setReplayIndex] = useState(0);
  const [replayCycle, setReplayCycle] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedNode = researchOsArchitectureNodes.find(
    (node) => node.id === selectedNodeId,
  );
  const replayDisabled = prefersReducedMotion;

  useEffect(() => {
    if (!isPlaying || replayDisabled) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const nextIndex = replayIndex + 1;
      if (nextIndex >= researchOsWalkthrough.length) {
        setIsPlaying(false);
        return;
      }

      setReplayIndex(nextIndex);
      setSelectedNodeId(researchOsWalkthrough[nextIndex]);
    }, 760);

    return () => window.clearTimeout(timeout);
  }, [isPlaying, replayDisabled, replayIndex]);

  function startReplay() {
    if (replayDisabled) {
      return;
    }
    setReplayCycle((current) => current + 1);
    setReplayIndex(0);
    setSelectedNodeId(researchOsWalkthrough[0]);
    setIsPlaying(true);
  }

  function clearSelection() {
    setIsPlaying(false);
    setReplayIndex(0);
    setSelectedNodeId(null);
  }

  function selectNode(nodeId: ArchitectureNode["id"]) {
    setIsPlaying(false);
    setSelectedNodeId(nodeId);
  }

  const statusCounts = statusLegend.map(({ status, label }) => ({
    status,
    label,
    count: researchOsArchitectureNodes.filter(
      (node) => node.status === status,
    ).length,
  }));

  return (
    <section
      className="research-os-explorer scroll-reveal mb-12 border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-5 md:p-8"
      aria-labelledby="research-os-architecture-title"
    >
      <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Architecture explorer
          </p>
          <h2
            id="research-os-architecture-title"
            className="mt-2 text-2xl font-medium tracking-[-0.05em] text-[var(--ink)] md:text-3xl"
          >
            From paper to retrieval foundation.
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)] md:text-base">
            Explore the verified PDF-reading and chunking code alongside the
            later retrieval stages still listed on the project roadmap.
          </p>
        </div>
        <ArchitectureControls
          hasSelection={selectedNodeId !== null}
          isPlaying={isPlaying}
          replayDisabled={replayDisabled}
          onClear={clearSelection}
          onReplay={startReplay}
        />
      </div>

      <div className="my-5 flex flex-wrap gap-x-5 gap-y-2" aria-label="Stage status legend">
        {statusCounts.map(({ status, label, count }) => (
          <span
            key={status}
            className={`architecture-status architecture-status--${status}`}
          >
            <span className="architecture-status__mark" aria-hidden="true" />
            {label}
            <span className="architecture-status__count">{count}</span>
          </span>
        ))}
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p
          id="research-os-diagram-instructions"
          className="text-xs leading-5 text-[var(--muted)]"
        >
          Select a stage with a click, Enter, or Space to inspect it. Lines are
          solid for implemented flow, dashed for partial integration, and dotted
          for roadmap flow.
        </p>
        <p className="mono text-[9px] uppercase tracking-[0.13em] text-[var(--muted)]">
          Document and query paths
        </p>
      </div>

      <ArchitectureDiagram
        selectedNodeId={selectedNodeId}
        replayCycle={replayCycle}
        onSelectNode={selectNode}
      />

      <div className="mt-5">
        <ArchitectureNodeDetails node={selectedNode} />
      </div>

      <details className="mt-5 border-t border-[var(--line)] pt-4">
        <summary className="cursor-pointer text-xs font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]">
          Verification notes
        </summary>
        <div className="mt-3 max-w-3xl space-y-3 text-xs leading-5 text-[var(--muted)]">
          <p>
            The public repository contains PDF-reader and chunker source files,
            plus chunker tests. Its README roadmap still shows embeddings, a
            vector database, semantic search, RAG, and the research agent as
            unchecked. The reader and chunker are shown as implemented code,
            not as a completed or deployed service.
          </p>
          <p>
            The query lane is a roadmap-level illustration only. The inspected
            source does not implement a query interface, embedding model,
            similarity search, context assembly, or response generation. The
            PDF example uses a local file path; this explorer does not upload or
            process documents.
          </p>
          <a
            href="https://github.com/dax-research/research-os"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-9 items-center font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--ink)]"
          >
            Open the public ResearchOS repository
            <span aria-hidden="true" className="ml-1">↗</span>
          </a>
        </div>
      </details>
    </section>
  );
}
