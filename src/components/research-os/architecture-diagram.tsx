"use client";

import type { CSSProperties } from "react";
import {
  researchOsArchitectureEdges,
  researchOsArchitectureNodes,
  type ArchitectureNode,
} from "@/data/research-os-architecture";

const nodePositions: Record<
  ArchitectureNode["id"],
  { x: number; y: number; mobileOrder: number }
> = {
  "pdf-input": { x: 10, y: 25.5, mobileOrder: 0 },
  "pdf-reader": { x: 30, y: 25.5, mobileOrder: 1 },
  chunker: { x: 50, y: 25.5, mobileOrder: 2 },
  embeddings: { x: 70, y: 25.5, mobileOrder: 3 },
  "vector-store": { x: 90, y: 25.5, mobileOrder: 4 },
  "query-input": { x: 10, y: 77.5, mobileOrder: 5 },
  "semantic-search": { x: 50, y: 77.5, mobileOrder: 6 },
  rag: { x: 90, y: 77.5, mobileOrder: 7 },
};

const statusLabels = {
  implemented: "Implemented",
  partial: "Partial",
  planned: "Planned",
} as const;

function EdgeDefinitions() {
  return (
    <defs>
      <marker
        id="research-arrow-implemented"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="4"
        orient="auto"
      >
        <path d="M 0 0 L 7 4 L 0 8 z" />
      </marker>
      <marker
        id="research-arrow-partial"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="4"
        orient="auto"
      >
        <path d="M 0 0 L 7 4 L 0 8 z" />
      </marker>
      <marker
        id="research-arrow-planned"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="4"
        orient="auto"
      >
        <path d="M 0 0 L 7 4 L 0 8 z" />
      </marker>
    </defs>
  );
}

type ArchitectureDiagramProps = {
  selectedNodeId: ArchitectureNode["id"] | null;
  replayCycle: number;
  onSelectNode: (nodeId: ArchitectureNode["id"]) => void;
};

export function ArchitectureDiagram({
  selectedNodeId,
  replayCycle,
  onSelectNode,
}: ArchitectureDiagramProps) {
  const connectedNodeIds = new Set(
    selectedNodeId
      ? researchOsArchitectureEdges.flatMap((edge) =>
          edge.from === selectedNodeId
            ? [edge.to]
            : edge.to === selectedNodeId
              ? [edge.from]
              : [],
        )
      : [],
  );

  return (
    <div
      className="research-architecture__canvas"
      aria-label="Interactive ResearchOS architecture diagram"
    >
      {(["desktop", "mobile"] as const).map((viewport) => (
        <svg
          key={viewport}
          className={`research-architecture__edges research-architecture__edges--${viewport}`}
          viewBox={viewport === "desktop" ? "0 0 1000 440" : "0 0 1000 944"}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <EdgeDefinitions />
          {researchOsArchitectureEdges.map((edge, index) => {
            const isConnected =
              selectedNodeId !== null &&
              (edge.from === selectedNodeId || edge.to === selectedNodeId);
            const path =
              viewport === "desktop" ? edge.desktopPath : edge.mobilePath;

            return (
              <g
                key={`${edge.id}-${replayCycle}`}
                className={[
                  "research-architecture__edge",
                  `research-architecture__edge--${edge.status}`,
                  isConnected ? "is-connected" : "",
                  selectedNodeId && !isConnected ? "is-muted" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ "--edge-index": index } as CSSProperties & {
                  "--edge-index": number;
                }}
              >
                <path
                  className="research-architecture__edge-base"
                  d={path}
                  markerEnd={`url(#research-arrow-${edge.status})`}
                />
                <path
                  className="research-architecture__edge-draw"
                  d={path}
                  pathLength="1"
                />
              </g>
            );
          })}
        </svg>
      ))}

      {researchOsArchitectureNodes.map((node) => {
        const isSelected = node.id === selectedNodeId;
        const isConnected = connectedNodeIds.has(node.id);
        const position = nodePositions[node.id];

        return (
          <button
            key={node.id}
            type="button"
            className={[
              "research-architecture__node",
              `research-architecture__node--${node.status}`,
              isSelected ? "is-selected" : "",
              isConnected ? "is-connected" : "",
              selectedNodeId && !isSelected && !isConnected ? "is-muted" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={
              {
                left: `${position.x}%`,
                top: `${position.y}%`,
                "--mobile-top": `${(position.mobileOrder + 0.5) * 7.375}rem`,
              } as React.CSSProperties & { "--mobile-top": string }
            }
            aria-pressed={isSelected}
            aria-describedby="research-os-diagram-instructions"
            aria-label={`${node.title}. ${statusLabels[node.status]}. ${
              node.lane === "documents" ? "Document flow" : "Query flow"
            }`}
            onClick={() => onSelectNode(node.id)}
          >
            <span className="research-architecture__node-lane">
              {node.lane === "documents" ? "Document flow" : "Query flow"}
            </span>
            <span className="research-architecture__node-title">{node.title}</span>
            <span
              className={`architecture-status architecture-status--${node.status}`}
            >
              <span className="architecture-status__mark" aria-hidden="true" />
              {statusLabels[node.status]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
